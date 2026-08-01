# 🛒 Commerce Skills

> Open-Source AI Agent Skill Library for **Commerce OS**, Quick-Commerce, Hyperlocal Logistics, B2B Procurement, and Multi-Tenant E-Commerce.

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Skills Suite](https://img.shields.io/badge/Skills-40%2B%20Modules-06B6D4.svg)](#skills-catalog)
[![Target Agents](https://img.shields.io/badge/Agents-Antigravity%20%7C%20Claude%20%7C%20Cursor-8B5CF6.svg)](#installation)

**Commerce Skills** turns complex e-commerce, warehouse management (WMS), fleet logistics (FMS/TMS), financial engineering, and autonomous AI automation requirements into reusable, production-grade skills and prompts for AI coding agents (Antigravity, Claude Code, Cursor, Windsurf).

---

## 🌐 Interactive Web UI Portal

Explore skills, inspect ready-to-use prompts, view the 5–10 year ecosystem architecture, browse 18 vertical marketplaces, and use the interactive AI Prompt Generator on the web:

👉 **[Launch Commerce Skills Web Portal](http://127.0.0.1:3000/)** *(Run `npm run dev` to start locally)*

---

## ⚡ Quick Installation

Add the entire Commerce OS skill suite to your AI agent environment:

```bash
# Add master commerce skills package
npx skills add vridhilabs/commerce-skills

# Or using Antigravity CLI
agy add commerce-skills
```

### Install Specific Sub-Skills

```bash
npx skills add vridhilabs/commerce-skills/core-commerce
npx skills add vridhilabs/commerce-skills/logistics-fms-tms
npx skills add vridhilabs/commerce-skills/financial-os
npx skills add vridhilabs/commerce-skills/ai-commerce-os
npx skills add vridhilabs/commerce-skills/b2b-commerce
```

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

## 🚀 Deploy Web UI to Vercel / Netlify

This repository contains a Vite + React web application ready for 1-click deployment to Vercel, Netlify, or Cloudflare Pages:

```bash
# Local development
npm install
npm run dev

# Build for production
npm run build
```

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [AGENTS.md](AGENTS.md) before submitting pull requests.

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
