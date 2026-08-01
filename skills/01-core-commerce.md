# Skill: Core Commerce MVP (Phase 1)

## Overview
Phase 1 establishes the bedrock of the Commerce OS. It covers the 4 critical sub-systems required to run any modern retail or quick-commerce engine: Marketplace, Inventory Management System (IMS), Warehouse Management System (WMS), and Order Management System (OMS).

---

## 1. Marketplace App
- **Product Catalog & Search**: ElasticSearch / MeiliSearch integration with fuzzy match, autocomplete, vector search, and faceted filtering.
- **Categories & Dynamic Navigation**: Nested category trees with dynamic banner placements and seasonal tag overrides.
- **Product Pages**: Variant matrix (size, color, weight), rich media gallery, real-time stock indicator, customer reviews with verified purchase badges, and wishlist state.
- **Cart & Checkout**: Atomic reservation of stock during checkout window (e.g., 10-minute hold), address validation, payment gateway routing, and instant order creation.

## 2. Inventory Management System (IMS)
- **SKU Management**: Unique barcode/QR generation, global trade item numbers (GTIN), and cross-warehouse catalog mapping.
- **Stock Control**: Real-time available-to-promise (ATP) inventory calculation: `ATP = On Hand - Reserved - Damaged + Inbound POs`.
- **Batch & Expiry Tracking**: FEFO (First Expiring, First Out) inventory rotation rules for perishable and quick-commerce goods.
- **Purchase Orders (PO)**: Supplier PO generation, receiving discrepancy handling, automated reorder triggers based on safety stock thresholds.

## 3. Warehouse Management System (WMS)
- **Bin Locations**: High-density aisle-bay-shelf-bin barcode tagging (e.g., `A1-B02-S3-P04`).
- **Picking & Packing**: Batch picking, wave picking, zones, optical barcode verification via handheld scanners, automated packing slip print triggers.
- **Put-away & Receiving**: LPN (License Plate Number) receiving workflows, dock-to-bin putaway routing algorithms.
- **Cycle Counts & Transfers**: Blind inventory audits, multi-warehouse stock transfer orders (STO) with transit tracking.

## 4. Order Management System (OMS)
- **Order Lifecycle Engine**: State machine handling (`CREATED` -> `CONFIRMED` -> `PICKING` -> `PACKED` -> `DISPATCHED` -> `DELIVERED`).
- **Split & Partial Fulfillment**: Multi-warehouse order routing based on proximity and stock availability.
- **Returns & Refunds**: Reverse logistics state machine, quality audit on return, auto-refund via original payment method or store credit.

---

## Implementation Prompt Template

```markdown
Role: Senior E-Commerce Architect
Task: Implement Phase 1 Core Commerce engine.
Requirements:
1. Setup PostgreSQL database schema for Products, Variants, InventoryBins, StockItems, Orders, OrderItems, PickLists.
2. Implement FEFO (First Expiring, First Out) pick list generator algorithm in Node.js/TypeScript.
3. Build atomic stock reservation logic with Redis TTL locks to prevent overselling during checkout spikes.
```
