# Skill: Commerce Intelligence & AI (Phase 5)

## Overview
Phase 5 converts raw transactional, warehouse, and fleet telemetry into predictive intelligence and autonomous optimization systems.

---

## 1. Analytics Platform
- **Key Executive KPIs**: Real-time GMV, Net Revenue, Contribution Margin (CM1/CM2/CM3), Customer Acquisition Cost (CAC), LTV, Inventory Turnover Ratio, and Shrinkage/Dead Stock metrics.
- **Operations Analytics**: Picker pick-rate (units/hr), order packing time, order dispatch SLA compliance, rider order-to-door duration, and return rate per category.

## 2. AI Intelligence Engine
- **Demand Forecasting**: Prophet / XGBoost forecasting models using weather, local event calendars, day of week, and historical elasticity.
- **Inventory Prediction**: Automated reorder recommendations sent to suppliers before stockout occurs.
- **Smart Dynamic Pricing**: Price elasticity algorithms adjusting surge pricing or markdown schedules for near-expiry items (FEFO discount curve).
- **Personalized Recommendations & AI Search**: Vector embeddings (pgvector / Pinecone) for semantic catalog search and personalized cart recommendations.
- **AI Operations Assistant**: Natural language query interface for warehouse managers ("Show me top 5 items with highest return rate in Dark Store #4").

---

# Skill: Financial OS (Phase 6)

## Overview
Phase 6 builds a bulletproof financial infrastructure handling payments, invoicing, tax compliance, vendor/rider payouts, commission rules, and embedded fintech lending.

---

## 1. Finance & Accounting
- **Payment Gateway Routing**: Dynamic failover routing across Razorpay, PhonePe, Paytm, and Stripe for 99.9% payment success.
- **Invoicing & GST**: Automated e-invoicing generation, GST tax split (CGST/SGST/IGST), HSN code validation, and credit note issuance.
- **Payout & Commission Engines**: Automated T+1 vendor payouts, instant rider per-delivery earnings payouts, platform commission split calculation.

## 2. Embedded Lending & Fintech
- **Inventory Financing**: Credit lines extended to D2C suppliers based on verified inventory in Commerce OS dark stores.
- **Vendor & Fleet Finance**: Micro-loans for riders to purchase/lease EV bikes, invoice discounting for B2B suppliers.
