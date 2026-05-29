export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Who is Anfa Softworks for?",
    answer:
      "Funded startups, scaling SMBs, and established teams who need senior engineering capacity fast — without hiring full-time or paying agency markups. We work best with founders and operators who can decide quickly.",
  },
  {
    question: "How fast do you typically ship?",
    answer:
      "Most projects launch in 4 to 6 weeks from kickoff. Discovery and scoping take the first week. Build runs in weekly cycles with a working demo at the end of each one.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We sign mutual NDAs before any project-specific discussion. Send the request to legal@anfasoftworks.com — we have a standard template, or we are happy to sign yours.",
  },
  {
    question: "What stack do you use?",
    answer:
      "Default: Next.js, React, TypeScript, Tailwind, Postgres, and Vercel or AWS. For mobile: React Native or native iOS/Android in Swift/Kotlin. For AI: OpenAI, Anthropic, and Gemini APIs, plus vector databases like pgvector or Pinecone.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Fixed-price proposals. After a discovery call we send a written scope with deliverables, timeline, and total price. You see everything before you sign.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Two weeks of post-launch support are included on every project — bug fixes and small refinements. After that, the code, infrastructure, and documentation are yours. Keep us on retainer for ongoing work, or take it fully in-house.",
  },
];
