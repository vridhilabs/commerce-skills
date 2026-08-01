export const COMMERCE_SKILLS = [
  {
    id: "01-core-commerce",
    phase: "Phase 1",
    badge: "MVP Core",
    title: "Core Commerce (Marketplace, IMS, WMS, OMS)",
    category: "Core Commerce",
    description: "The core foundational engine covering Customer Marketplace, Inventory Management System (IMS), Warehouse (WMS), and Order Management (OMS).",
    cliCommand: "agy add commerce-core",
    modules: ["Marketplace App", "Inventory (IMS)", "Warehouse (WMS)", "Order Engine (OMS)"],
    tags: ["Marketplace", "IMS", "WMS", "OMS", "Cart & Checkout", "FEFO", "Bin Locations"],
    skillFile: "skills/01-core-commerce.md",
    promptTemplate: `Role: Senior E-Commerce Architect & Engineer
Task: Build Phase 1 Core Commerce Engine.
Specs:
- Setup PostgreSQL schema for Products, Variants, InventoryBins, StockItems, Orders, and PickLists.
- Implement FEFO (First Expiring, First Out) batch pick list generation logic.
- Create Redis-backed atomic stock reservations to prevent overselling during flash checkouts.`,
    specDetails: {
      marketplace: ["Product catalog & Elastic/Meili search", "Categories & filters", "Variant matrix & reviews", "Wishlist & cart hold"],
      ims: ["SKU management & barcode/QR generator", "Stock level calculation (ATP)", "Batch & expiry tracking (FEFO)", "Purchase orders & supplier receiving"],
      wms: ["Aisle-bay-shelf-bin location mapping", "Wave & batch picking algorithms", "LPN put-away & dock receiving", "Cycle counts & warehouse transfers"],
      oms: ["Order state machine lifecycle", "Split & partial fulfillment engine", "Returns & refunds automated ledger"]
    }
  },
  {
    id: "02-logistics-fms-tms",
    phase: "Phase 2",
    badge: "Logistics",
    title: "Logistics, Fleet & Transport Management",
    category: "Logistics",
    description: "Real-time dispatch, route optimization (VRPTW), EV fleet management, and driver mobile workflows.",
    cliCommand: "agy add commerce-logistics",
    modules: ["Fleet Management (FMS)", "Transport Management (TMS)", "Driver Mobile App"],
    tags: ["FMS", "TMS", "Driver App", "VRPTW", "Geo-fenced OTP", "Live GPS"],
    skillFile: "skills/02-logistics-fms-tms.md",
    promptTemplate: `Role: Hyperlocal Logistics & Fleet Architect
Task: Implement Real-Time Rider Dispatch & Route Optimizer.
Specs:
- Build WebSocket GPS telemetry service with 1-second rider location ticks.
- Implement Vehicle Routing Problem with Time Windows (VRPTW) using OSRM matrix.
- Implement Geo-fenced OTP verification endpoint for proof of delivery.`,
    specDetails: {
      fms: ["Vehicle registry & EV battery telemetry", "Preventative maintenance alerts", "GPS tracking & driver safety scoring"],
      tms: ["Route optimization solver (VRPTW)", "Automated 10-min SLA delivery assignment", "Geo-fenced OTP proof of delivery", "Reverse logistics pickup engine"],
      driverApp: ["Rider shift check-in & vehicle checklist", "Turn-by-turn navigation overlay", "Real-time earnings & instant cashouts"]
    }
  },
  {
    id: "03-supplier-brand-portal",
    phase: "Phase 3",
    badge: "Multi-Vendor",
    title: "Supplier Platform & Brand Portals",
    category: "Supplier",
    description: "Self-serve vendor onboarding, automated catalog uploads, inventory sync feeds, and brand analytics dashboards.",
    cliCommand: "agy add commerce-suppliers",
    modules: ["Vendor Portal", "Brand Portal"],
    tags: ["Vendor KYB", "Bulk Catalog", "Inventory Sync", "Brand Analytics", "Settlement"],
    skillFile: "skills/03-supplier-brand-portal.md",
    promptTemplate: `Role: Multi-Vendor Platform Specialist
Task: Build Vendor Onboarding & Automated Settlement Engine.
Specs:
- Implement KYB verification (GSTIN, Tax ID, Bank Account audit).
- Create CSV/XLSX bulk product uploader with image asset validation.
- Build T+1 settlement engine deducting marketplace commission & fulfillment fees.`,
    specDetails: {
      vendorPortal: ["Automated KYB & tax verification", "Bulk CSV/XLSX product catalog manager", "SFTP & REST inventory sync feeds", "Weekly automated payout statements"],
      brandPortal: ["Real-time sales & SKU share analytics", "Sponsored product & banner bidding", "Demand forecasting for production scheduling"]
    }
  },
  {
    id: "04-customer-growth-crm",
    phase: "Phase 4",
    badge: "Growth",
    title: "Customer Growth, CRM & Subscriptions",
    category: "CRM & Growth",
    description: "Unified Customer 360 profiles, RFM segmentation, omnichannel marketing automation, and recurring delivery subscriptions.",
    cliCommand: "agy add commerce-crm",
    modules: ["Customer CRM", "Omnichannel Marketing", "Subscription Engine"],
    tags: ["CRM 360", "RFM Segments", "WhatsApp API", "Abandoned Cart", "Recurring Billing"],
    skillFile: "skills/04-customer-growth-crm.md",
    promptTemplate: `Role: Growth Engineering Lead
Task: Implement Automated Abandoned Cart & Subscription Auto-Refill.
Specs:
- Setup RFM customer segmentation engine updating customer tiers daily.
- Build 15-minute WhatsApp abandoned cart recovery trigger.
- Implement UPI Recurring / Card Mandate engine for daily milk & produce subscriptions.`,
    specDetails: {
      crm: ["Customer 360 unified timeline", "RFM customer auto-clustering", "Digital wallet & cashback rewards"],
      marketing: ["WhatsApp, FCM Push, SMS & Email campaigns", "Abandoned cart & win-back triggers"],
      subscriptions: ["Daily/weekly recurring deliveries", "Auto-debit mandates & 4:00 AM dark store pick list generation"]
    }
  },
  {
    id: "05-commerce-intelligence",
    phase: "Phase 5",
    badge: "AI & Data",
    title: "Commerce Intelligence & AI Forecasting",
    category: "Intelligence",
    description: "Executive GMV & contribution margin analytics, AI demand forecasting, smart dynamic pricing, and vector search.",
    cliCommand: "agy add commerce-ai",
    modules: ["Executive Analytics", "AI Forecasting", "Smart Dynamic Pricing", "Vector Search"],
    tags: ["GMV Dashboard", "Demand Forecast", "Dynamic Pricing", "pgvector", "Natural Language BI"],
    skillFile: "skills/05-commerce-intelligence.md",
    promptTemplate: `Role: AI & Data Science Engineer
Task: Build AI Demand Forecasting & FEFO Markdown Engine.
Specs:
- Build Prophet/XGBoost demand forecasting model integrating weather & calendar events.
- Implement FEFO dynamic markdown price curve for expiring inventory.
- Create pgvector semantic product search & recommendation pipeline.`,
    specDetails: {
      analytics: ["Real-time GMV, CM1/CM2/CM3, LTV/CAC metrics", "Picker units/hr & rider SLA delivery tracking"],
      ai: ["Demand forecasting with weather/events", "Predictive reorder alerts", "FEFO expiry price markdowns", "Natural language BI command center"]
    }
  },
  {
    id: "06-financial-os",
    phase: "Phase 6",
    badge: "Fintech",
    title: "Financial OS & Embedded Commerce Lending",
    category: "Finance",
    description: "Automated payment splits, GST e-invoicing, vendor/driver instant payouts, and inventory-backed financing.",
    cliCommand: "agy add commerce-finance",
    modules: ["Financial Engine", "Payout Engine", "Inventory Lending"],
    tags: ["Payment Split", "GST E-Invoicing", "Instant UPI Cashout", "Inventory Finance"],
    skillFile: "skills/06-financial-os.md",
    promptTemplate: `Role: Commerce Fintech Architect
Task: Implement Automated Payment Split & Inventory Financing API.
Specs:
- Build split-payment routing at checkout (Vendor balance, Dark store fee, Driver payout, Platform take-rate).
- Generate GST-compliant e-invoices with HSN code validation.
- Build underwriting API evaluating dark store inventory value for vendor micro-loans.`,
    specDetails: {
      finance: ["Multi-gateway failover routing", "CGST/SGST/IGST breakdown & e-invoices", "Automated T+1 payouts & instant rider cashouts"],
      lending: ["Inventory-backed vendor credit lines", "B2B invoice discounting", "Rider EV bike micro-financing"]
    }
  },
  {
    id: "07-local-brand-accelerator",
    phase: "Phase 7",
    badge: "Brand Studio",
    title: "Local Brand Accelerator & White Label",
    category: "Brand Studio",
    description: "AI product photography backgrounds, automated SEO copywriting, creator marketplace, and OEM private label sourcing.",
    cliCommand: "agy add commerce-studio",
    modules: ["AI Brand Studio", "White Label Sourcing"],
    tags: ["GenAI Photos", "AI Copywriter", "Creator Network", "Private Label", "OEM Audits"],
    skillFile: "skills/07-local-brand-accelerator.md",
    promptTemplate: `Role: Generative AI Brand Tools Developer
Task: Build AI Product Photography & Description Generator.
Specs:
- Integrate Stable Diffusion / Imagen API for generating studio product backgrounds.
- Build LLM-powered SEO product title & bullet point generator.
- Implement OEM contract manufacturing directory and quality audit checklist.`,
    specDetails: {
      brandStudio: ["AI studio product background replacement", "LLM-generated SEO titles & specs", "Creator product sampling network"],
      whiteLabel: ["OEM private label manufacturer directory", "Standardized quality inspection scorecards", "Eco-friendly low-MOQ packaging templates"]
    }
  },
  {
    id: "08-b2b-commerce",
    phase: "Phase 8",
    badge: "B2B Bulk",
    title: "B2B Commerce & Corporate Purchasing",
    category: "B2B",
    description: "Bulk tiered pricing, Net 15/30/60 credit terms, team accounts with approval workflows, tailored for HORECA and corporate buyers.",
    cliCommand: "agy add commerce-b2b",
    modules: ["Bulk Pricing Engine", "Credit Terms & Scoring", "Corporate Accounts", "Standing Orders"],
    tags: ["HORECA", "Net-30 Credit", "Tiered Pricing", "GST Billing", "Approval Flow"],
    skillFile: "skills/08-b2b-commerce.md",
    promptTemplate: `Role: B2B E-Commerce System Architect
Task: Build Corporate Credit Terms & Multi-User Approval Engine.
Specs:
- Implement tiered volume price matrix (1-10, 11-50, 50+ units).
- Build Net-30 credit limit approval engine with risk scoring.
- Create multi-user corporate accounts with spend caps and approval workflows.`,
    specDetails: {
      verticals: ["Restaurants & HORECA produce", "Hotels & guest amenities", "Cafés & specialty beans", "Offices & pantry supplies", "Hospitals & non-pharma consumables"],
      features: ["Volume price matrices & RFQs", "Net 15/30/60 credit scoring & enforcement", "Corporate sub-user roles & spend caps", "Automated recurring standing orders"]
    }
  },
  {
    id: "09-creator-commerce",
    phase: "Phase 9",
    badge: "Social",
    title: "Creator Commerce & Live Shopping",
    category: "Creator",
    description: "Custom storefronts for influencers, affiliate link tracking, interactive live shopping streams, and reel product tagging.",
    cliCommand: "agy add commerce-creator",
    modules: ["Creator Storefronts", "Affiliate Engine", "Live Stream Shopping"],
    tags: ["Influencers", "Affiliate Links", "Live Shopping", "Reel Tagging", "Commission Sync"],
    skillFile: "skills/09-creator-commerce.md",
    promptTemplate: `Role: Social Commerce Platform Engineer
Task: Build Influencer Storefront & Live Shopping Video Stream.
Specs:
- Implement custom sub-domain generator for creator storefronts.
- Build multi-touch affiliate link tracking with real-time attribution ledger.
- Create interactive live video stream component with 1-click cart addition.`,
    specDetails: {
      creatorTools: ["Custom sub-domain creator storefronts", "Affiliate link generator & tracking ledger"],
      liveShopping: ["Interactive live video player with pinned products", "Reel & video story product tagging"]
    }
  },
  {
    id: "10-hyperlocal-network",
    phase: "Phase 10",
    badge: "Franchise",
    title: "Hyperlocal Network & Franchise Dark Stores",
    category: "Franchise",
    description: "Partner warehouse onboarding, real-time dark store capacity telemetry, picking SLA scoring, and franchise revenue sharing.",
    cliCommand: "agy add commerce-franchise",
    modules: ["Partner Warehouses", "Franchise Dashboard", "Capacity Telemetry"],
    tags: ["Dark Store Franchise", "Capacity Telemetry", "Picking SLA", "Revenue Share"],
    skillFile: "skills/10-hyperlocal-network.md",
    promptTemplate: `Role: Distributed Warehouse Operations Engineer
Task: Build Partner Dark Store Telemetry & Franchise Revenue Sharing Dashboard.
Specs:
- Track real-time bin utilization & picking SLA per partner dark store.
- Build automated daily revenue share split between franchise operator & platform.
- Build real-time picking queue monitoring view for dark store managers.`,
    specDetails: {
      warehouses: ["Partner warehouse onboarding portal", "Real-time bin capacity & picking SLA metrics"],
      franchise: ["Franchise operator dashboard", "Daily automated revenue share settlement", "Dark store fleet & rider queue overview"]
    }
  },
  {
    id: "11-api-integrations",
    phase: "Phase 11",
    badge: "Ecosystem",
    title: "API Connectors & Ecosystem Integrations",
    category: "Integrations",
    description: "Pre-built connectors for Shopify, ERPNext, Tally, Razorpay, WhatsApp Business, ONDC node, Blinkit, and Amazon.",
    cliCommand: "agy add commerce-connectors",
    modules: ["E-Commerce Connectors", "ERP & Accounting", "ONDC Protocol", "Ad Platforms"],
    tags: ["Shopify Sync", "ERPNext", "Tally Prime", "ONDC Node", "WhatsApp API", "Blinkit API"],
    skillFile: "skills/11-api-integrations.md",
    promptTemplate: `Role: Ecosystem Integration Engineer
Task: Build ONDC Protocol Buyer/Seller Node & ERP Sync Bridge.
Specs:
- Implement Beckn protocol schemas for ONDC seller node catalog search & order sync.
- Build two-way inventory & sales sync connector for ERPNext & Tally Prime.
- Build WhatsApp Business API webhook handler for order notifications.`,
    specDetails: {
      connectors: ["Shopify, WooCommerce, Medusa.js adapters", "ERPNext & Tally Prime two-way accounting sync", "ONDC Beckn protocol buyer/seller node implementation", "WhatsApp, Meta Ads & Amazon Seller APIs"]
    }
  },
  {
    id: "12-ai-commerce-os",
    phase: "Phase 12",
    badge: "Autonomous AI",
    title: "AI Commerce OS (8 Autonomous AI Role Managers)",
    category: "AI Agents",
    description: "Autonomous AI agents acting as digital staff: AI WMS, AI Dispatcher, AI Procurement, AI Pricing, AI Marketing & Support.",
    cliCommand: "agy add commerce-agents",
    modules: ["AI Procurement", "AI WMS Manager", "AI Dispatcher", "AI Pricing Engine", "AI Support"],
    tags: ["Autonomous Agents", "AI WMS", "AI Dispatcher", "AI Procurement", "AI Pricing"],
    skillFile: "skills/12-ai-commerce-os.md",
    promptTemplate: `Role: Autonomous AI Agent Architect
Task: Implement AI WMS Bin Optimizer & AI Dispatcher Agent.
Specs:
- Build autonomous agent evaluating picking co-occurrence to reorganize bin locations.
- Implement AI Dispatcher agent balancing rider SLA vs fuel cost in real-time.
- Build AI Support agent handling order refund requests with zero human intervention.`,
    specDetails: {
      aiRoles: [
        "AI Procurement Manager: Auto-generates supplier POs on reorder triggers",
        "AI Warehouse Manager: Dynamic bin re-organization based on pick frequency",
        "AI Dispatcher: Dynamic rider assignment & SLA optimization",
        "AI Pricing Engine: Real-time margin protection & FEFO expiry markdowns",
        "AI Marketing Manager: Automated campaign copy generation & ROI optimization",
        "AI Customer Support: 24/7 autonomous refund & order status handling"
      ]
    }
  },
  {
    id: "13-commerce-platform-sdk",
    phase: "Phase 13",
    badge: "Platform SDK",
    title: "Platform Infrastructure, SDK & Multi-Tenant Architecture",
    category: "Platform",
    description: "Public REST/GraphQL APIs, real-time webhooks engine, developer portal, plugin marketplace, and multi-tenant schema isolation.",
    cliCommand: "agy add commerce-platform",
    modules: ["Public APIs", "Webhooks Engine", "Plugin Marketplace", "Multi-Tenant Core"],
    tags: ["Public APIs", "Webhooks", "TypeScript SDK", "Plugin Ecosystem", "Multi-Tenant"],
    skillFile: "skills/13-commerce-platform-sdk.md",
    promptTemplate: `Role: Platform Core Architect
Task: Build Multi-Tenant Infrastructure & Real-Time Webhooks Dispatcher.
Specs:
- Build multi-tenant schema isolation middleware supporting custom domain routing.
- Implement high-throughput webhooks dispatcher with exponential backoff retries.
- Generate OpenAPI 3.0 specs & TypeScript client SDK package.`,
    specDetails: {
      platform: ["Public REST & GraphQL API endpoints", "Subsecond real-time webhooks engine", "Plugin Marketplace developer portal", "Multi-tenant tenant isolation architecture"]
    }
  }
];

export const VERTICAL_MARKETPLACES = [
  { name: "Healthy Foods Club", icon: "🥗", desc: "Cold-chain, organic certification, macro-nutrient filters" },
  { name: "Farmer Marketplace", icon: "🌾", desc: "Direct farm-to-door, harvest date tracking, crop grade pricing" },
  { name: "Home Essentials Club", icon: "🏠", desc: "Bulk paper & cleaning, subscription refill, size calculators" },
  { name: "Baby Club", icon: "🍼", desc: "Expiry-locked formula, safety certs, milestone boxes" },
  { name: "Pet Club", icon: "🐶", desc: "Breed/age profiles, heavy bag routing, vet prescription upload" },
  { name: "Beauty Club", icon: "💄", desc: "Shade finders, ingredient allergen filters, high-value security pick" },
  { name: "Coffee & Tea Club", icon: "☕", desc: "Roast date freshness guarantee, grind size selection, origin stories" },
  { name: "Wellness Club", icon: "🧘", desc: "COA lab reports, supplement stack builders, recurring plans" },
  { name: "Hardware Club", icon: "🛠", desc: "Contractor bulk pricing, job site PIN delivery, technical specs" },
  { name: "Auto Parts Club", icon: "🚗", desc: "Vehicle VIN lookup, OEM part compatibility, garage dispatch" },
  { name: "EV Parts Marketplace", icon: "⚡", desc: "Battery health certificates, charger compatibility, technician booking" },
  { name: "Office Supplies", icon: "🏢", desc: "Corporate GST billing, department spend caps, recurring pantry" },
  { name: "Restaurant Supply", icon: "🍽", desc: "Nightly produce orders (11 PM cutoff, 5 AM delivery), temp-logged trucks" },
  { name: "Medical Consumables", icon: "🏥", desc: "Batch sterilisation records, CDSCO license validation, express delivery" },
  { name: "Cleaning Supplies", icon: "🧹", desc: "MSDS safety sheets, industrial bulk drums vs bottles" },
  { name: "Construction Materials", icon: "🏗", desc: "Truck payload weight calculations, crane delivery scheduling" },
  { name: "Local Artisan Marketplace", icon: "🎨", desc: "Single-item inventory locks, artisan video stories, custom gift wrap" },
  { name: "D2C Brand Marketplace", icon: "🛍", desc: "Shared dark store fulfillment, cross-brand bundling rewards" }
];

export const REVENUE_STREAMS = [
  { title: "SaaS Subscriptions", pct: "25%", desc: "Monthly platform subscriptions for Commerce OS modules (WMS/IMS/OMS/FMS)" },
  { title: "Fulfillment Fees", pct: "20%", desc: "Per-item pick, pack, and dark store storage fees charged to D2C brands" },
  { title: "Delivery Fees", pct: "15%", desc: "Distance & SLA-based express delivery fees paid by customers or merchants" },
  { title: "Marketplace Commissions", pct: "15%", desc: "5-15% commission on third-party vendor transactions" },
  { title: "Financial Services", pct: "10%", desc: "Payment split fees, inventory-backed loan interest, EV fleet insurance" },
  { title: "Advertising & Sponsored Ads", pct: "8%", desc: "In-app product ad auctions, brand portal promoted banners" },
  { title: "API & Webhook Usage", pct: "4%", desc: "Metered API consumption for enterprise developers & ERP integrations" },
  { title: "AI Agent Subscriptions", pct: "3%", desc: "Premium subscriptions for Autonomous AI Role Managers" }
];
