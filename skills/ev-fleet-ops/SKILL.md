---
name: ev-fleet-ops
description: EV two-wheeler rental fleet operations for gig riders — rental state machine, KYC, hub handover/return inspections, approval-gated deposit settlement, telematics with safe immobilize, battery swap stations, referrals, evidence retention. Field-tested patterns from running a live EV rental fleet in India.
---

# Skill: EV Fleet Rental Operations (Fleet Ops)

## Overview
Rent electric scooters to delivery and gig riders by the day, week or month, operated from physical hubs.
Three surfaces share one API:

| Surface | Users | Core jobs |
| :--- | :--- | :--- |
| **Rider app** (Android first) | Riders | OTP login, KYC, pick plan, pay deposit + rent, see scooter / swap stations, extend, request return, refer friends |
| **Operator app** (hub staff) | Hub operators | Intake scooters, approve KYC, handover with photos, return inspection, propose charges, record cash |
| **Admin dashboard** (web) | Admins / finance | Fleet map, approvals (settlements, refunds), pricing + feature flags, audit log, app releases |

Unlike delivery dispatch (see `logistics-fms-tms`), the unit of work is a **rental** that lasts days or weeks.
The hard parts are money (deposits, overages, damage), trust (KYC, evidence) and the physical asset (tracking, recovery).

---

## 1. Rental State Machine (event-sourced)
Every status change is an **event** appended to `rental_event` (idempotency key, actor, payload); the order row stores only the current status.
Any transition not in the table is rejected — this is the main guard against silent bugs.

```
requested ─plan_selected→ plan_selected ─deposit_held→ deposit_hold ─wallet_gate_passed→ wallet_gate
  ─vehicle_assigned→ vehicle_assigned ─handover_complete→ active
active   ─extend→ extended | ─swap→ active | ─overage_accrued→ active | ─return_requested→ return_requested
         ─mark_overdue→ overdue | ─mark_no_show→ recovery
extended ─swap / overage_accrued→ extended | ─return_requested→ return_requested | ─mark_overdue→ overdue
return_requested ─return_complete→ returned ─deposit_settled→ deposit_settled ─close→ closed
overdue  ─return_requested→ return_requested | ─mark_no_show→ recovery
recovery ─recovered→ returned | ─deposit_forfeit→ deposit_settled        (closed is terminal)
```
- Keep the transition function **pure** (no I/O); callers persist the new status + event in one transaction.
- One `transitionOrder()` entry point; no other code writes `order.status`.
- Actors: `renter`, `staff`, `system`, `tracker`. Some events are never accepted from the client (see §4).

## 2. Rider Onboarding & KYC
- **Login**: phone OTP (SMS with WhatsApp fallback); rate-limit per phone and per IP; test numbers only in staging.
- **KYC**: ID document + selfie + driving licence; OCR pre-fills fields, a hub operator approves or rejects with a reason.
- **Data minimisation**: delete the national-ID image as soon as KYC is decided; keep only the verified fields and the decision. Applicants never approved are purged after a fixed window (e.g. 30 days). Backups are always encrypted.
- **Alternate contact**: name, relation, phone, verified by OTP to that phone (used for recovery).

## 3. Hub Operations (operator app)
- **Scooter lifecycle**: `intake → ready → active → maintenance → retired`. Retire/delete is admin-only; every change is audit-logged.
- **Handover**: checklist + required photo slots (front, back, sides, odometer, battery %) uploaded via short-lived signed upload URLs scoped to the staff member and purpose. Handover completes the `vehicle_assigned → active` transition.
- **Return inspection**: same photo slots + odometer; server computes extra km and late fee (charge hours after due time only after a grace period, e.g. 1 h); operator adds damage lines from a **price list**. Charges are stored as `proposed` — **no money moves at the hub**.

## 4. Telematics & Power Control
- Provider adapter interface (`real` vendor API + `mock` that simulates scooters drifting around their hub for staging/tests). A feature flag gates polling.
- Poll latest readings within provider rate limits; store in `vehicle_telemetry`; scooters never seen are shown at their hub, marked stale.
- **Tracker mode is server-issued only**: there is no endpoint that accepts a mode from a request body; the one `setTrackerMode()` function writes the event first, then commands the device. Reject `renter`/`ops` actors even if the type system is bypassed.
- **Immobilize safely**: never immediate — send the "apply when safe/stationary" variant; every command needs a reason, an audit row and a rider notice if the scooter is on a rental.

## 5. Money: Deposits, Rent, Settlement
- Rent and deposit are separate lines on the payment link; credits (referrals, promos) reduce **rent only**, never the deposit, and are consumed only when the payment succeeds.
- **No automatic refunds.** Settlement is an operator **request** (charge lines, comment, proof) in `pending_approval`; only an admin approves or rejects.
  - `refund = advance − (unpaid rent + extra km + late fee + damage)`.
  - refund ≥ 0 → refund the original deposit payment, then `deposit_settled`.
  - charges > advance → keep advance, status `damage_payment_due`, send a payment link for the difference.
- **Idempotency**: claim a refund row *before* calling the gateway so a double-approve cannot refund twice; on gateway failure revert to `pending_approval` and change nothing else.
- Cash at the hub is also a request that an admin approves; approval records the payment and closes the order.
- Webhooks: verify signatures with a dedicated secret; a payment id can credit exactly one order/wallet (unique constraint).

## 6. Battery Swap Stations
- Public list of stations (location, hours, available packs) for the rider map; swaps are `swap` events on an active rental (status unchanged) so swap history stays on the rental timeline.

## 7. Growth: Refer & Earn
- Every rider gets a code. A rider who hasn't paid yet and wasn't referred may enter a friend's code once (not own, not same phone).
- Friend gets welcome rent credit immediately; referrer gets reward credit only when the friend **pays** for a first rental. Amounts live in admin feature flags.

## 8. Evidence, Retention & Audit
- Inspection photos / proof videos: after settlement, a pull-model archiver claims them (signed URLs + expected sha256/size), verifies, encrypts and stores them offline, then confirms. Object-store copies are deleted N days after settlement **only if archived**.
- Hot DB holds live data only; history tables are archived to a warehouse and pruned **only up to the id the archive confirmed**.
- Audit log for every staff/admin write (actor, action, target, details). Admin role is an explicit allow-list.

## 9. App Releases (sideloaded APKs)
- `app_release` table: app, version, build, url, audience (`testers | staff | all`), tester phones, mandatory flag. Apps check on launch; a mandatory build blocks older versions. Lets you ship to testers first, then everyone.

---

## Core Schema (minimum)
`renter`, `kyc_submission`, `staff_profile`, `hub`, `vehicle`, `tracker_device`, `vehicle_telemetry`, `plan`, `order`, `rental_event` (append-only), `inspection`, `inspection_photo`, `return_charge`, `settlement_request`, `refund`, `payment`, `swap_station`, `referral`, `notice`, `app_release`, `audit_log`, `feature_flag`.

## Edge Cases to Test
- Double-tap approve on a settlement → exactly one refund.
- Same gateway payment submitted for two orders/riders → second rejected.
- Return requested while overdue; no-show after assignment → recovery path.
- Telemetry stale for hours on an active rental → ops alert, no auto-immobilize.
- Timezones: store UTC, show local; DB timestamps without zone parsed as UTC.

---

## Implementation Prompt Template

```markdown
Role: Fleet Rental Platform Engineer
Task: Build the rental core for an EV scooter rental fleet (rider app, operator app, admin dashboard share one API).
Requirements:
1. Pure rental state machine with an explicit transition table; every change appends an idempotent rental_event in the same transaction as the status update; reject unlisted transitions.
2. Handover and return-inspection endpoints with signed photo uploads, server-computed extra km and late fee (with grace), and damage lines from a price list stored as "proposed".
3. Settlement as an approval workflow: operator request -> admin approve/reject; refund = advance - charges; claim the refund row before calling the payment gateway; damage_payment_due when charges exceed the advance.
4. Telematics adapter (real + mock) behind a feature flag; tracker mode and immobilize are server-issued only, never immediate, always reasoned and audited.
5. KYC with OCR prefill and operator decision; delete ID images once decided.
Deliver: schema migrations, endpoints, tests for the edge cases above.
```
