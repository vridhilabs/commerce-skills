# AGENTS.md — Agent Skills Specification & Guidelines

## Overview
This repository adheres to the Open Agent Skills Specification. AI coding agents (such as Antigravity, Claude Code, Cursor, and Windsurf) use these files to understand commerce domain patterns and implement features.

## Repository Structure

```
commerce-skills/
├── skills/                     # Domain skill subdirectories
│   ├── core-commerce/          # Phase 1: WMS, IMS, OMS, Marketplace
│   │   └── SKILL.md
│   ├── logistics-fms-tms/      # Phase 2: FMS, TMS, Driver App, VRPTW
│   │   └── SKILL.md
│   ├── supplier-brand-portal/  # Phase 3: Vendor Onboarding, Catalog
│   │   └── SKILL.md
│   ├── customer-growth-crm/    # Phase 4: CRM 360, RFM, Subscriptions
│   │   └── SKILL.md
│   ├── commerce-intelligence/  # Phase 5: Analytics, Demand Forecast, Dynamic Pricing
│   │   └── SKILL.md
│   ├── financial-os/           # Phase 6: Payment Split, GST, Lending
│   │   └── SKILL.md
│   ├── local-brand-accelerator/# Phase 7: AI Studio, Copywriter, OEM
│   │   └── SKILL.md
│   ├── b2b-commerce/           # Phase 8: HORECA, Net-30 Credit, Bulk Tier
│   │   └── SKILL.md
│   ├── creator-commerce/       # Phase 9: Influencer Micro-Storefronts
│   │   └── SKILL.md
│   ├── hyperlocal-network/     # Phase 10: Dark Store Franchises, Capacity
│   │   └── SKILL.md
│   ├── api-integrations/       # Phase 11: Shopify, ERPNext, ONDC Beckn
│   │   └── SKILL.md
│   ├── ai-commerce-os/         # Phase 12: 8 Autonomous AI Role Managers
│   │   └── SKILL.md
│   ├── commerce-platform-sdk/  # Phase 13: Public APIs, Webhooks, Multi-Tenant
│   │   └── SKILL.md
│   ├── vertical-marketplaces/  # 18 Turnkey Niche Verticals
│   │   └── SKILL.md
│   └── end-vision-ecosystem/   # 5-10 Year Ecosystem Architecture & Moat
│       └── SKILL.md
├── SKILL.md                    # Master Commerce OS entrypoint
├── README.md                   # Project documentation & installation
└── src/                        # Web UI Portal application source
```

## How AI Agents Parse Skills

1. Each skill directory inside `skills/` MUST contain a valid `SKILL.md` file.
2. The `SKILL.md` header MUST contain YAML frontmatter with `name` and `description`.
3. The content of `SKILL.md` MUST include system specifications, architecture patterns, and an executable prompt template.
