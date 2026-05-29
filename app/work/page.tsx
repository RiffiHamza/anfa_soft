"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import Section from "@/components/section";
import CaseStudyCard from "@/components/case-study-card";
import CTABanner from "@/components/cta-banner";
import TrustStrip from "@/components/trust-strip";
import Reveal from "@/components/reveal";
import { CASE_STUDIES, WORK_FILTERS } from "@/content/work";

export default function WorkPage() {
  const [filter, setFilter] = useState<(typeof WORK_FILTERS)[number]>("All");

  const visible =
    filter === "All" ? CASE_STUDIES : CASE_STUDIES.filter((cs) => cs.category === filter);

  return (
    <>
      <Hero
        eyebrow="Selected work"
        headline="Software we've shipped."
        subhead="A selection of recent projects. Each one shipped, tested, and serving real users in production."
        align="center"
      />

      <Section background="white" wide>
        <div className="filters">
          {WORK_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className="filter"
              data-active={filter === f || undefined}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <div className="work-grid">
            {visible.map((cs, i) => (
              <Reveal key={cs.id} delay={(i % 3) * 60}>
                <CaseStudyCard
                  industry={cs.industry}
                  category={cs.category}
                  title={cs.title}
                  outcome={cs.outcome}
                  image={cs.image}
                  imageAlt={cs.imageAlt}
                  href="#"
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <p style={{ padding: "64px 0", textAlign: "center", color: "var(--color-muted)" }}>
            No projects match this filter yet. Try another category.
          </p>
        )}
      </Section>

      <TrustStrip />

      <CTABanner
        headline="Want yours next?"
        subhead="Tell us what you're building. We reply within one business day."
        primaryCTA={{ href: "/contact", label: "Start a project" }}
      />
    </>
  );
}
