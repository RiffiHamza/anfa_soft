export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  composite?: boolean;
}

// Composite testimonials drawn from past engagements — attributed by role only,
// never by name. Quotes are illustrative, not literal client statements.
export const STATS_QUOTES: Testimonial[] = [
  {
    quote: "Shipped our MVP in five weeks. Felt like having a senior CTO on call.",
    name: "Founder",
    role: "Fintech startup",
    composite: true,
  },
  {
    quote: "Cleanest codebase we've handed over to an in-house team. Zero drama.",
    name: "VP Engineering",
    role: "B2B SaaS",
    composite: true,
  },
  {
    quote: "Fixed price, fixed scope. They delivered exactly what was on page one.",
    name: "Operations lead",
    role: "Marketplace",
    composite: true,
  },
  {
    quote: "Replaced our previous agency mid-project. Best decision of the year.",
    name: "Co-founder",
    role: "Logistics platform",
    composite: true,
  },
];

export const GRID_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Anfa built our dashboard in four weeks and it has run without an outage since launch. The handoff documentation was better than our internal docs.",
    name: "Founder",
    role: "HR-tech startup",
    composite: true,
  },
  {
    quote:
      "What I appreciated most: they pushed back on bad ideas. Twice they redesigned a feature we asked for because their version was clearly better.",
    name: "Product lead",
    role: "E-commerce",
    composite: true,
  },
  {
    quote:
      "We've worked with three studios before Anfa. This is the first one that delivered on date, on scope, and within the original quote. We're hiring them again.",
    name: "COO",
    role: "Logistics platform",
    composite: true,
  },
];
