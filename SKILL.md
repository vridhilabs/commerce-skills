---
name: commerce-skills
description: |
  Master Commerce OS and Agentic Hyperlocal E-Commerce Skill Suite.
  Provides comprehensive specifications, architecture patterns, API contracts, AI prompts, and implementation playbooks for building, automating, and scaling end-to-end commerce platforms.
  Covers MVP Core Commerce (Marketplace, IMS, WMS, OMS), Logistics (FMS, TMS, Driver Apps), EV Fleet Rental Ops, Supplier & Brand Portals, CRM & Marketing, Commerce Intelligence & AI, Financial OS, Brand Accelerator, B2B Commerce, Creator Commerce, Hyperlocal Networks, Integrations, AI Role Managers, Platform SDKs, and 18 Vertical Marketplaces.
---

# Commerce OS Skill Suite

Welcome to **Commerce OS**, the open-source infrastructure and skill system for next-generation quick-commerce, hyperlocal delivery, and multi-tenant commerce platforms.

## Modular Skill Structure

This skill suite is organized into 16 specialized domain skill modules located in `skills/`:

| Module | Title | Primary Domains Covered |
| :--- | :--- | :--- |
| `01-core-commerce` | Core Commerce MVP | Marketplace App, Inventory Management (IMS), Warehouse (WMS), Order Management (OMS) |
| `02-logistics-fms-tms` | Logistics & Fleet | Fleet Management (FMS), Transport Management (TMS), Driver App & Navigation |
| `ev-fleet-ops` | EV Fleet Rental Ops | Rental state machine, KYC, hub inspections, deposit settlement, telematics, swap stations |
| `03-supplier-brand-portal` | Supplier Platform | Vendor Onboarding, Product Upload, Brand Analytics, Marketing Dashboard |
| `04-customer-growth-crm` | Customer Growth | CRM, Segments, Loyalty, Subscriptions, Push/WhatsApp Marketing |
| `05-commerce-intelligence` | Commerce Intelligence | BI Analytics, AI Demand Forecasting, Price Optimization, AI Support |
| `06-financial-os` | Financial OS | Invoicing, GST, Vendor Payouts, Commission Engine, Inventory Lending |
| `07-local-brand-accelerator` | Brand Accelerator | AI Product Photography, Copywriting, White Label Sourcing & Quality Audits |
| `08-b2b-commerce` | B2B Commerce | Bulk Ordering, Credit Terms, Approval Workflows, Standing Orders (HORECA, Offices) |
| `09-creator-commerce` | Creator Commerce | Influencer Storefronts, Affiliate Tracking, Live Shopping, Commission Engine |
| `10-hyperlocal-network` | Hyperlocal Network | Dark Stores, Partner Warehouses, Revenue Sharing, Franchise Dashboards |
| `11-api-integrations` | Integrations & Ecosystem | Shopify, ERPNext, Razorpay, WhatsApp, ONDC, Blinkit, Amazon, Shiprocket |
| `12-ai-commerce-os` | AI Role Managers | Autonomous AI Procurement, WMS, Dispatcher, Pricing, Marketing & Support |
| `13-commerce-platform-sdk` | Platform SDK & APIs | Public APIs, Webhooks, Multi-tenant Architecture, Developer Portal |
| `14-vertical-marketplaces` | Vertical Niche Specs | 18 Specialized Vertical Marketplaces (Healthy Foods, Pet, EV Parts, Hardware, etc.) |
| `15-end-vision-ecosystem` | Ecosystem Architecture | 5–10 Year Vision, Platform Moat, 10 Revenue Models & Operating Model |

---

## How AI Agents Use Commerce Skills

When asked to build or optimize any component of a commerce system:

1. **Locate the specific phase/skill**: Refer to the corresponding module file in `skills/`.
2. **Apply the Architecture & Schema**: Each module specifies exact data schemas, state machines, API endpoints, and business rules.
3. **Execute standard workflows**: Use the provided AI Agent prompts and step-by-step implementation playbooks.

---

## Quick CLI Usage

Install skills into your project using Antigravity CLI or your preferred agent tool:

```bash
# Add master skill
agy add commerce-skills

# Add specific domain module
agy add commerce-wms
agy add commerce-tms
agy add commerce-b2b
agy add commerce-verticals
```
