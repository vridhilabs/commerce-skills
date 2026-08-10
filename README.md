# 🛒 Commerce Skills

> Open-Source AI Agent Skill Library for **Commerce OS** · Quick-Commerce · Hyperlocal Logistics · B2B Procurement · Multi-Tenant E-Commerce.

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/@vridhilabs/commerce-skills?color=06B6D4)](https://www.npmjs.com/package/@vridhilabs/commerce-skills)
[![Skills](https://img.shields.io/badge/Skills-15%20Domains%20%E2%80%A2%2040%2B%20Modules-06B6D4.svg)](#skills-catalog)
[![Agents](https://img.shields.io/badge/Agents-Claude%20%7C%20Cursor%20%7C%20Codex%20%7C%20OpenCode%20%7C%2072%20more-8B5CF6.svg)](#installation)
[![GitHub stars](https://img.shields.io/github/stars/vridhilabs/commerce-skills?style=social)](https://github.com/vridhilabs/commerce-skills)

**Commerce Skills** turns complex e-commerce, warehouse management (WMS), fleet logistics (FMS/TMS), financial engineering, and autonomous AI automation requirements into **reusable, production-grade skills and prompts** for AI coding agents.

Instead of asking an agent to "build a commerce platform" and hoping for the best, load a skill that encodes the domain: schemas, workflows, edge cases, and executable prompts — so your agent builds **correct** systems the first time.

---

## 🌐 Interactive Web Portal

Explore skills, inspect ready-to-use prompts, browse 18 vertical marketplaces, and use the AI Prompt Generator:

👉 **[skills.vridhilabs.com](https://skills.vridhilabs.com)** — live web portal

---

## ⚡ Quick Installation

```bash
# Add the full Commerce OS skill suite to your agent
npx skills add vridhilabs/commerce-skills

# Or install individual domain skills
npx skills add vridhilabs/commerce-skills/core-commerce
npx skills add vridhilabs/commerce-skills/logistics-fms-tms
npx skills add vridhilabs/commerce-skills/financial-os
npx skills add vridhilabs/commerce-skills/ai-commerce-os
npx skills add vridhilabs/commerce-skills/b2b-commerce
```

**Works with:** Claude Code, Cursor, Codex, OpenCode, Windsurf, Antigravity + 72 more agents (via the [skills CLI](https://skills.sh/)).

---

## 💡 What You Get

Each skill is a complete domain package your agent can act on:

| Included | Example |
| :--- | :--- |
| **System specification** | OMS state machine (12 states), WMS bin/FEFO rules, TMS VRPTW model |
| **Architecture patterns** | CQRS, Outbox, event-driven orchestration, multi-tenant schemas |
| **API contracts** | REST/GraphQL routes, webhook events, request/response DTOs |
| **Executable prompts** | "Build the warehouse module" → agent generates production code |
| **Edge cases** | FEFO holds, payment splits, GST e-invoicing, dispatch exceptions |

---

## 🗺️ Skills Catalog (15 Domains)

| Skill Module | Domain | Key Capabilities |
| :--- | :--- | :--- |
| [**`core-commerce`**](skills/core-commerce/SKILL.md) | Core Commerce MVP | Marketplace App, Inventory (IMS), FEFO Warehouse (WMS), Order Engine (OMS) |
| [**`logistics-fms-tms`**](skills/logistics-fms-tms/SKILL.md) | Fleet & Transport | VRPTW route optimization, EV telemetry (FMS), auto-dispatch (TMS), Driver App |
| [**`supplier-brand-portal`**](skills/supplier-brand-portal/SKILL.md) | Supplier Platform | Self-serve vendor KYB, bulk catalog upload, inventory sync, brand analytics |
| [**`customer-growth-crm`**](skills/customer-growth-crm/SKILL.md) | CRM & Growth | Customer 360, RFM auto-segmentation, WhatsApp campaigns, subscriptions |
| [**`commerce-intelligence`**](skills/commerce-intelligence/SKILL.md) | Intelligence & AI | GMV/CM1/CM2 analytics, AI demand forecasting, FEFO markdown curves |
| [**`financial-os`**](skills/financial-os/SKILL.md) | Financial OS | Split payment gateway, GST e-invoicing, instant rider cashouts, inventory lending |
| [**`local-brand-accelerator`**](skills/local-brand-accelerator/SKILL.md) | Brand Studio | Generative AI product studio photos, AI copywriter, OEM white-label sourcing |
| [**`b2b-commerce`**](skills/b2b-commerce/SKILL.md) | B2B Commerce | Bulk tiered pricing, Net 15/30/60 credit terms, team approval workflows |
| [**`creator-commerce`**](skills/creator-commerce/SKILL.md) | Social Commerce | Influencer micro-storefronts, affiliate tracking, interactive live shopping |
| [**`hyperlocal-network`**](skills/hyperlocal-network/SKILL.md) | Dark Store Network | Partner warehouse onboarding, picking SLA telemetry, franchise revenue share |
| [**`api-integrations`**](skills/api-integrations/SKILL.md) | Connectors | Shopify, ERPNext, Tally Prime, Razorpay, WhatsApp, ONDC Beckn node |
| [**`ai-commerce-os`**](skills/ai-commerce-os/SKILL.md) | Autonomous AI | 8 AI Role Managers (AI WMS, AI Dispatcher, AI Procurement, AI Pricing) |
| [**`commerce-platform-sdk`**](skills/commerce-platform-sdk/SKILL.md) | Platform SDK | Public REST/GraphQL APIs, real-time webhooks, plugin marketplace, multi-tenant |
| [**`vertical-marketplaces`**](skills/vertical-marketplaces/SKILL.md) | Vertical Marketplaces | 18 Turnkey Verticals (Healthy Foods, Pet, EV Parts, Hardware, Medical, etc.) |
| [**`end-vision-ecosystem`**](skills/end-vision-ecosystem/SKILL.md) | Ecosystem Architecture | 5–10 Year Vision Architecture, platform moats, 10 revenue models |

---

## 🛍️ 18 Vertical Marketplaces Included

1. 🥗 **Healthy Foods Club**: Cold-chain compliance, organic certification, macro filters
2. 🌾 **Farmer Marketplace**: Farm-to-door aggregation, harvest date tracking, crop grades
3. 🏠 **Home Essentials Club**: Bulk cleaning/paper, subscription refill, size calculators
4. 🍼 **Baby Club**: Expiry-locked formula, safety certs, milestone subscription boxes
5. 🐶 **Pet Club**: Breed/age profiles, heavy bag routing, vet prescription upload
6. 💄 **Beauty Club**: Shade finders, ingredient allergen filters, high-value theft pick
7. ☕ **Coffee & Tea Club**: Roast date freshness guarantee, grind size, bean origin stories
8. 🧘 **Wellness Club**: COA lab reports, supplement stack builders, recurring plans
9. 🛠 **Hardware Club**: Contractor bulk pricing, job site PIN delivery, technical specs
10. 🚗 **Auto Parts Club**: Vehicle VIN lookup, OEM part compatibility, garage dispatch
11. ⚡ **EV Parts Marketplace**: Battery health certificates, charger compatibility, technician booking
12. 🏢 **Office Supplies**: Corporate GST billing, department spend caps, recurring pantry
13. 🍽 **Restaurant Supply**: Nightly produce orders (11 PM cutoff, 5 AM delivery), temp trucks
14. 🏥 **Medical Consumables**: Batch sterilisation records, CDSCO license validation, express delivery
15. 🧹 **Cleaning Supplies**: MSDS safety sheets, industrial bulk drums vs bottles
16. 🏗 **Construction Materials**: Payload weight calculations, crane delivery scheduling
17. 🎨 **Local Artisan Marketplace**: Single-item inventory locks, artisan video stories
18. 🛍 **D2C Brand Marketplace**: Shared dark store fulfillment, cross-brand bundling rewards

---

## 🏗️ 5–10 Year Ecosystem Architecture

```
               Suppliers
                   │
             Manufacturers
                   │
                Brands
                   │
        ───────────────────────
              Commerce OS
        ───────────────────────
         WMS  IMS  OMS  CRM  FMS
         TMS  Finance  AI  APIs
         Marketing  Analytics
        ───────────────────────
                   │
               Warehouses
                   │
                 Fleet
                   │
   Consumers  Businesses  Creators  Franchisees
```

---

## 🚀 How to Use a Skill

```bash
# 1. Install a skill into your agent workspace
npx skills add vridhilabs/commerce-skills/core-commerce

# 2. Open the SKILL.md — it contains the full spec + an executable prompt
cat skills/core-commerce/SKILL.md

# 3. Paste the prompt template into your agent, e.g.:
#    "Build the warehouse module per the spec: bins, FEFO picks, putaway, cycle counts."
```

---

## 🧩 Who It's For

- **Founders & product teams** building quick-commerce, dark stores, or marketplace platforms
- **Developers** using AI agents for commerce systems (Claude Code, Cursor, Codex, OpenCode)
- **Agencies** delivering commerce/ERP implementations with AI-assisted development
- **Students & researchers** studying commerce system architecture (WMS/OMS/FMS/TMS)

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [AGENTS.md](AGENTS.md) before submitting pull requests.

- Add a new skill module or vertical → see `CONTRIBUTING.md`
- Report issues / request skills → [GitHub Issues](https://github.com/vridhilabs/commerce-skills/issues)

---

## 📦 npm Package

Published as [`@vridhilabs/commerce-skills`](https://www.npmjs.com/package/@vridhilabs/commerce-skills) with a CLI:

```bash
npm i -g @vridhilabs/commerce-skills
commerce-skills list      # list all skills
commerce-skills add core-commerce   # install a skill to ./skills
```

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
