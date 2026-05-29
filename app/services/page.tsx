import type { Metadata } from "next";
import {
  Search,
  Compass,
  Hammer,
  Rocket,
  BarChart3,
  MousePointerClick,
  Megaphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Hero from "@/components/hero";
import Section from "@/components/section";
import CTABanner from "@/components/cta-banner";
import FeatureRow from "@/components/feature-row";
import ProductMockup from "@/components/product-mockup";
import Reveal from "@/components/reveal";
import { SERVICE_LINES } from "@/content/service-lines";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web, mobile, AI, platform, commerce, payments, data, analytics, and growth — ten service lines, built by a senior studio.",
};

const ENGINEERING = SERVICE_LINES.filter((l) => l.tier === "Engineering");
const GROWTH = SERVICE_LINES.filter((l) => l.tier === "Growth & Data");

// Distinct mockup per line so no two feature rows look the same.
const MOCK_VARIANT: Record<string, "dashboard" | "ai" | "platform"> = {
  web: "dashboard",
  mobile: "platform",
  ai: "ai",
  custom: "platform",
  commerce: "dashboard",
  payments: "ai",
};

const GROWTH_ICONS: Record<string, LucideIcon> = {
  data: BarChart3,
  behavior: MousePointerClick,
  marketing: Megaphone,
  automation: Workflow,
};

const PROCESS = [
  { icon: Search, num: "01", title: "Scope", body: "We map the problem and the shortest path to something real. Fixed scope, named up front." },
  { icon: Compass, num: "02", title: "Design", body: "Interfaces and architecture together. Working screens in the first week, not slideware." },
  { icon: Hammer, num: "03", title: "Build", body: "Production code from day one, tested and reviewed, on a staging URL you can open." },
  { icon: Rocket, num: "04", title: "Hand off", body: "Clean codebase and docs. A team that can run it without us. No lock-in." },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        headline="Everything we build."
        subhead="Ten service lines across two layers. Engineering is what we ship; growth and data is the layer we build on top of it."
        primaryCTA={{ href: "/contact", label: "Start a project" }}
        secondaryCTA={{ href: "/work", label: "See our work" }}
        align="center"
      />

      <Section wide>
        <Reveal className="section-head">
          <p className="eyebrow">Engineering</p>
          <h2 className="display-2">What we ship.</h2>
        </Reveal>
        {ENGINEERING.map((line, i) => (
          <FeatureRow
            key={line.id}
            id={line.id}
            reverse={i % 2 === 1}
            kicker={line.title}
            title={line.summary}
            body={line.detail}
            points={line.stack.slice(0, 3)}
            visual={
              <ProductMockup
                title={line.title.split(" ")[0]}
                variant={MOCK_VARIANT[line.id] ?? "dashboard"}
              />
            }
          />
        ))}
      </Section>

      <Section background="haze" wide>
        <Reveal className="section-head">
          <p className="eyebrow">Growth &amp; Data</p>
          <h2 className="display-2">The layer on top.</h2>
          <p className="lede">
            Once the product ships, these lines turn it into measured growth.
          </p>
        </Reveal>
        <div className="sgrid">
          {GROWTH.map((line, i) => {
            const Icon = GROWTH_ICONS[line.id] ?? Workflow;
            return (
              <Reveal key={line.id} delay={(i % 3) * 60}>
                <div id={line.id} className="card scard">
                  <span className="scard__icon">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="scard__title">{line.title}</h3>
                  <p className="scard__sum">{line.summary}</p>
                  <p
                    style={{
                      fontSize: "14.5px",
                      lineHeight: 1.6,
                      color: "var(--color-body)",
                      margin: "0 0 18px",
                    }}
                  >
                    {line.detail}
                  </p>
                  <div
                    className="scard__foot"
                    style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}
                  >
                    {line.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "11px",
                          color: "var(--color-muted)",
                          border: "1px solid var(--color-hairline)",
                          borderRadius: "var(--radius-sm)",
                          padding: "3px 8px",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section wide>
        <Reveal className="section-head">
          <p className="eyebrow">Process</p>
          <h2 className="display-2">A short path from problem to shipped.</h2>
        </Reveal>
        <div className="pgrid pgrid--4">
          {PROCESS.map((step, i) => (
            <Reveal key={step.num} delay={i * 60}>
              <div className="card pcard">
                <span className="pcard__icon">
                  <step.icon size={20} strokeWidth={1.75} />
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--color-emerald)",
                    marginBottom: "6px",
                  }}
                >
                  {step.num}
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABanner
        headline="Ready to build?"
        subhead="Tell us what you need. We reply within one business day."
        primaryCTA={{ href: "/contact", label: "Start a project" }}
      />
    </>
  );
}
