export interface ServiceLine {
  index: string;
  id: string;
  tier: "Engineering" | "Growth & Data";
  title: string;
  summary: string;
  detail: string;
  stack: string[];
}

// Public service lines. Copy is written in business / enterprise terms —
// capabilities and outcomes, not framework name-drops. Internal proof-mapping
// lives in SERVICES.md and is kept off the site.
export const SERVICE_LINES: ServiceLine[] = [
  {
    index: "01",
    id: "web",
    tier: "Engineering",
    title: "Web Engineering",
    summary: "Enterprise web applications and platforms.",
    detail:
      "Customer-facing portals, internal platforms, and high-traffic marketing sites engineered for performance, security, and scale. Internationalized, accessible, and instrumented from day one.",
    stack: ["Web applications", "Customer portals", "SaaS platforms", "Accessibility", "Internationalization"],
  },
  {
    index: "02",
    id: "mobile",
    tier: "Engineering",
    title: "Mobile Engineering",
    summary: "Cross-platform mobile applications.",
    detail:
      "Native-grade iOS and Android applications from a single codebase: real-time data, point-of-sale and field operations, offline support, and managed release through the app stores.",
    stack: ["iOS & Android", "Real-time data", "Offline support", "POS & field ops", "Release management"],
  },
  {
    index: "03",
    id: "ai",
    tier: "Engineering",
    title: "Applied AI",
    summary: "AI and intelligent automation.",
    detail:
      "Document intelligence, data extraction and classification, retrieval-augmented assistants, and predictive models embedded directly into core business workflows, not bolted on as a demo.",
    stack: ["Document intelligence", "Data extraction", "Knowledge assistants", "Predictive models", "Process automation"],
  },
  {
    index: "04",
    id: "custom",
    tier: "Engineering",
    title: "Platform Engineering",
    summary: "Custom platforms and core systems.",
    detail:
      "Multi-tenant SaaS, financial and accounting systems, and white-label products, with the cloud infrastructure, CI/CD deployment, and systems integration that connect operations end to end.",
    stack: ["Multi-tenant SaaS", "Systems integration", "Cloud & deployment", "FinTech & billing", "APIs & services"],
  },
  {
    index: "05",
    id: "commerce",
    tier: "Engineering",
    title: "Commerce Engineering",
    summary: "Digital commerce and storefronts.",
    detail:
      "Conversion-focused storefronts, platform migrations, and headless commerce integrated with your catalog, fulfilment, and back-office systems, including conversational and assisted selling.",
    stack: ["E-commerce", "Headless commerce", "Platform migration", "Catalog integration", "Conversational commerce"],
  },
  {
    index: "06",
    id: "payments",
    tier: "Engineering",
    title: "Payments & Integrations",
    summary: "Payments, billing, and systems integration.",
    detail:
      "Checkout, subscriptions, and recurring billing, alongside the banking, registry, and third-party integrations that keep finance, operations, and data in sync.",
    stack: ["Payment processing", "Subscriptions & billing", "Banking & registry APIs", "Webhooks", "Systems integration"],
  },
  {
    index: "07",
    id: "data",
    tier: "Growth & Data",
    title: "Data Engineering & Analytics",
    summary: "Data processing, analytics, and BI.",
    detail:
      "Data pipelines and warehousing, ETL and data-quality controls, business intelligence dashboards, and predictive analytics that turn operational data into decisions leadership can act on.",
    stack: ["Data pipelines / ETL", "Data warehousing", "Business intelligence", "Predictive analytics", "Reporting dashboards"],
  },
  {
    index: "08",
    id: "behavior",
    tier: "Growth & Data",
    title: "Product Analytics & Behaviour",
    summary: "Product analytics and instrumentation.",
    detail:
      "Event instrumentation, conversion funnels, behavioural analytics, and privacy-compliant tracking that show how customers actually use the product and where revenue leaks.",
    stack: ["Event instrumentation", "Conversion funnels", "Behavioural analytics", "Attribution", "GDPR-compliant"],
  },
  {
    index: "09",
    id: "marketing",
    tier: "Growth & Data",
    title: "Performance Marketing",
    summary: "Acquisition and performance marketing.",
    detail:
      "Paid acquisition across social and search, audience strategy, conversion tracking, and creative testing, all managed against measured cost per acquisition and return.",
    stack: ["Paid acquisition", "Audience strategy", "Conversion tracking", "Creative testing", "Attribution"],
  },
  {
    index: "10",
    id: "automation",
    tier: "Growth & Data",
    title: "Growth Automation",
    summary: "Lifecycle and revenue automation.",
    detail:
      "Lead generation, lifecycle and CRM automation, deliverability, and orchestration that connect marketing, sales, and product systems into one operating pipeline.",
    stack: ["Lead generation", "Lifecycle automation", "CRM orchestration", "Deliverability", "Workflow automation"],
  },
];
