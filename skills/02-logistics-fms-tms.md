# Skill: Logistics & Fleet Management (Phase 2)

## Overview
Phase 2 transforms static commerce operations into a high-speed logistics network powered by Fleet Management (FMS), Transport Management (TMS), and a dedicated Driver App.

---

## 1. Fleet Management System (FMS)
- **Asset Lifecycle**: Vehicle registration, EV battery health tracking, fuel/charging logs, insurance renewals, and compliance docs.
- **Maintenance & Reminders**: Telematics alerts for preventative maintenance, tire replacement, and inspection scheduling.
- **GPS & Telematics**: OBD-II integration for real-time location stream, speed limit compliance, and driver behavior scoring.

## 2. Transport Management System (TMS)
- **Route Optimization**: Vehicle Routing Problem with Time Windows (VRPTW) solver via OSRM / Google Distance Matrix.
- **Delivery Assignment**: Auto-dispatch engine matching orders to nearest available riders based on vehicle weight capacity and SLA (e.g. 10-min target).
- **Proof of Delivery (PoD)**: Geo-fenced OTP confirmation, customer digital signature capture, and photo proof upload with EXIF validation.
- **Reverse Logistics**: Automated rider assignment for return pickup requests during standard delivery runs.

## 3. Delivery App
- **Driver Workflows**: Shift check-in, vehicle safety checklist, active order stack, turn-by-turn navigation map integration.
- **Earnings & Payouts**: Real-time shift earnings summary, distance bonus calculation, tip ledger, and instant cashout triggers.

---

## Implementation Prompt Template

```markdown
Role: Fleet & Logistics System Engineer
Task: Build real-time delivery dispatch & route solver microservice.
Requirements:
1. Integrate WebSocket server for real-time rider GPS ingestion (1-second tick interval).
2. Implement VRPTW routing engine with OSRM matrix calculations.
3. Build Geo-fenced OTP verification endpoint for order handoff.
```
