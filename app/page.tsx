import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Sparkles,
  Boxes,
  ShoppingBag,
  CreditCard,
  BarChart3,
  MousePointerClick,
  Megaphone,
  Workflow,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/button";
import Reveal from "@/components/reveal";
import MeshGradient from "@/components/mesh-gradient";
import ProductMockup from "@/components/product-mockup";
import FeatureRow from "@/components/feature-row";
import LogoCloud from "@/components/logo-cloud";
import { SERVICE_LINES } from "@/content/service-lines";
import { CASE_STUDIES } from "@/content/work";

const ICONS: Record<string, LucideIcon> = {
  web: Code2,
  mobile: Smartphone,
  ai: Sparkles,
  custom: Boxes,
  commerce: ShoppingBag,
  payments: CreditCard,
  data: BarChart3,
  behavior: MousePointerClick,
  marketing: Megaphone,
  automation: Workflow,
};

const STATS = [
  { n: "4 wks", e: false, l: "Typical MVP to first shipped release" },
  { n: "10", e: true, l: "Service lines, web to AI to growth" },
  { n: "100%", e: false, l: "Code you own and can run without us" },
  { n: "1 day", e: false, l: "Typical reply when you reach out" },
];

const FEATURED = CASE_STUDIES.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <MeshGradient />
        <div className="hero__inner">
          <Reveal className="hero__col">
            <p className="eyebrow">Independent software studio</p>
            <h1 className="display-1">Software, engineered.</h1>
            <p className="lede hero__lede">
              We design and build production-grade web, mobile, and AI software.
              Built like a Fortune 500 partner, run like a studio.
            </p>
            <div className="hero__ctas">
              <Button href="/contact" variant="primary" size="large" arrow>
                Start a project
              </Button>
              <Button href="/work" variant="secondary" size="large">
                See our work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <LogoCloud />

      {/* Feature rows */}
      <section className="section">
        <div className="container--wide" style={{ paddingInline: "clamp(20px, 5vw, 40px)" }}>
          <FeatureRow
            id="web"
            kicker="Web Engineering"
            title="Enterprise web applications and platforms."
            body="Customer portals, internal platforms, and high-traffic sites engineered for performance, security, and scale. Internationalized, accessible, and instrumented from day one."
            points={[
              "Customer portals & SaaS platforms",
              "Dashboards & admin systems",
              "Accessible, internationalized builds",
            ]}
            visual={<ProductMockup title="Dashboard" variant="dashboard" />}
          />
          <FeatureRow
            id="ai"
            reverse
            kicker="Applied AI"
            title="AI and intelligent automation in core workflows."
            body="Document intelligence, data extraction and classification, knowledge assistants, and predictive models embedded directly into business operations, not bolted on as a demo."
            points={[
              "Document intelligence & extraction",
              "Retrieval-augmented assistants",
              "Predictive models & process automation",
            ]}
            visual={<ProductMockup title="Invoice.pdf" variant="ai" />}
          />
          <FeatureRow
            id="custom"
            kicker="Platform Engineering"
            title="Custom platforms and core business systems."
            body="Multi-tenant SaaS, financial and accounting systems, and white-label products, with the cloud infrastructure, deployment, and systems integration that connect operations end to end."
            points={[
              "Multi-tenant SaaS platforms",
              "Cloud infrastructure & deployment",
              "Systems & API integration",
            ]}
            visual={<ProductMockup title="Tenants" variant="platform" />}
          />
        </div>
      </section>

      {/* Stats band */}
      <section className="section section--navy">
        <div className="container--wide" style={{ paddingInline: "clamp(20px, 5vw, 40px)" }}>
          <Reveal className="section-head" >
            <h2 className="display-2" style={{ color: "#fff" }}>
              A studio you can hand the hard parts to.
            </h2>
          </Reveal>
          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 60}>
                <div>
                  <div className="stat__n">{s.e ? <em>{s.n}</em> : s.n}</div>
                  <div className="stat__l">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid (all 10) */}
      <section className="section section--haze">
        <div className="container--wide" style={{ paddingInline: "clamp(20px, 5vw, 40px)" }}>
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">What we build</p>
            <h2 className="display-2">Ten service lines, end to end.</h2>
            <p className="lede">
              Engineering is what we ship. Growth and data is the layer we build
              on top of it.
            </p>
          </Reveal>
          <div className="sgrid">
            {SERVICE_LINES.map((line, i) => {
              const Icon = ICONS[line.id] ?? Boxes;
              return (
                <Reveal key={line.id} delay={(i % 3) * 60}>
                  <Link href={`/services#${line.id}`} className="card card--hover scard">
                    <span className="scard__icon">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <h3 className="scard__title">{line.title}</h3>
                    <p className="scard__sum">{line.summary}</p>
                    <span className="scard__foot link-arrow">
                      Learn more
                      <ArrowRight size={15} strokeWidth={2} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="section">
        <div className="container--wide" style={{ paddingInline: "clamp(20px, 5vw, 40px)" }}>
          <Reveal className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2 className="display-2">Specific outcomes, not adjectives.</h2>
          </Reveal>
          <div className="work-grid">
            {FEATURED.map((cs, i) => (
              <Reveal key={cs.id} delay={i * 70}>
                <article className="card card--hover plate">
                  <div className="plate__frame">
                    <Image
                      src={cs.image}
                      alt={cs.imageAlt}
                      fill
                      sizes="(max-width: 1000px) 100vw, 33vw"
                    />
                  </div>
                  <div className="plate__body">
                    <div className="plate__meta">
                      <span className="plate__cat">{cs.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{cs.industry}</span>
                    </div>
                    <h3 className="plate__title">{cs.title}</h3>
                    <p className="plate__outcome">{cs.outcome}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-cta">
            <Button href="/work" variant="tertiary">
              View all work
            </Button>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section cta">
        <div className="cta__glow" aria-hidden="true" />
        <div className="container--wide" style={{ paddingInline: "clamp(20px, 5vw, 40px)" }}>
          <div className="cta__inner">
            <Reveal>
              <h2 className="cta__head">Have something worth building?</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="cta__body">
                Tell us what you are trying to ship. You will hear back from an
                engineer, usually within one business day.
              </p>
              <div className="cta__actions">
                <Button href="/contact" variant="primary" size="large" arrow>
                  Start a project
                </Button>
                <Button href="/services" variant="secondary" size="large">
                  Explore services
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
