export interface CaseStudy {
  id: string;
  industry: string;
  category: "Web" | "Mobile" | "AI" | "SaaS";
  title: string;
  outcome: string;
  image: string;
  imageAlt: string;
}

// Open-source imagery from Unsplash (Unsplash License — free to use).
const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ledger-sync",
    industry: "Fintech",
    category: "SaaS",
    title: "Ledger sync platform",
    outcome: "Reduced reconciliation time from 4 hours to 8 minutes.",
    image: UNSPLASH("photo-1611974789855-9c2a0a7236a3"),
    imageAlt: "Financial charts and ledger data on a screen",
  },
  {
    id: "patient-intake",
    industry: "Healthcare",
    category: "Web",
    title: "Patient intake portal",
    outcome: "30% drop in administrative time per appointment.",
    image: UNSPLASH("photo-1576091160399-112ba8d25d1d"),
    imageAlt: "Clinician using a tablet in a clinical setting",
  },
  {
    id: "fleet-ops",
    industry: "Logistics",
    category: "Web",
    title: "Fleet operations dashboard",
    outcome: "Real-time visibility across 240 vehicles.",
    image: UNSPLASH("photo-1586528116311-ad8dd3c8310d"),
    imageAlt: "Logistics warehouse with rows of trucks",
  },
  {
    id: "ai-support-copilot",
    industry: "SaaS",
    category: "AI",
    title: "AI customer support copilot",
    outcome: "Resolved 62% of tickets without human handoff.",
    image: UNSPLASH("photo-1677442136019-21780ecad995"),
    imageAlt: "Abstract AI visualization with glowing nodes",
  },
  {
    id: "multi-region-storefront",
    industry: "E-commerce",
    category: "Web",
    title: "Multi-region storefront",
    outcome: "$2.4M GMV in launch quarter.",
    image: UNSPLASH("photo-1556742049-0cfed4f6a45d"),
    imageAlt: "Online storefront on a laptop with shopping bags",
  },
  {
    id: "internal-data-platform",
    industry: "Enterprise",
    category: "SaaS",
    title: "Internal data platform",
    outcome: "Replaced 5 legacy tools with one unified workspace.",
    image: UNSPLASH("photo-1460925895917-afdab827c52f"),
    imageAlt: "Analytics dashboard on a desktop monitor",
  },
];

export const WORK_FILTERS = ["All", "Web", "Mobile", "AI", "SaaS"] as const;
