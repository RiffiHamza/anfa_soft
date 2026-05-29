import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, ReceiptText, Rocket, Sparkles, MapPin } from "lucide-react";
import Hero from "@/components/hero";
import Section from "@/components/section";
import CTABanner from "@/components/cta-banner";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Anfa Softworks is an independent software studio working with companies who want senior engineering without agency overhead. Registered in New Mexico, USA.",
};

const PRINCIPLES = [
  { icon: Sparkles, title: "Senior by default", description: "No juniors learning on your project. Every engineer is senior." },
  { icon: ReceiptText, title: "Fixed scope, fixed price", description: "You know what you're getting before we write code." },
  { icon: Rocket, title: "Ship in weeks", description: "Most projects launch in four to six weeks, then iterate." },
  { icon: ShieldCheck, title: "US-registered LLC", description: "Anfa Softworks LLC, registered in New Mexico, USA." },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        headline="A studio built to ship."
        subhead="Anfa Softworks is an independent software studio working with companies who want senior engineering without the agency overhead."
        primaryCTA={{ href: "/contact", label: "Start a project" }}
        secondaryCTA={{ href: "/work", label: "See our work" }}
        illustration={
          <div className="card elevated" style={{ overflow: "hidden", padding: 0 }}>
            <div style={{ position: "relative", aspectRatio: "5 / 4" }}>
              <Image
                src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1400&q=80"
                alt="Engineers collaborating at a workstation"
                fill
                sizes="(max-width: 980px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        }
      />

      <Section background="haze">
        <Reveal className="prose-narrow" >
          <p className="eyebrow">Our story</p>
          <h2 className="display-2" style={{ marginBottom: "8px" }}>
            Founded in 2026.
          </h2>
          <p>
            Anfa Softworks was founded as an independent software studio because
            most agencies overpromise and underdeliver. We wanted a small team
            that ships what it sells, and prices it fairly.
          </p>
          <p>
            The working principle is simple: senior engineers, fixed scope, real
            software in production. We charge fairly because we move fast. We
            move fast because we keep the team small and the standards high.
          </p>
        </Reveal>
      </Section>

      <Section background="white" wide>
        <Reveal className="section-head">
          <p className="eyebrow">Principles</p>
          <h2 className="display-2">What we believe about building software.</h2>
        </Reveal>
        <div className="pgrid pgrid--4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="card pcard">
                <span className="pcard__icon">
                  <p.icon size={20} strokeWidth={1.75} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section background="haze">
        <Reveal className="section-head section-head--center">
          <span className="pcard__icon" style={{ margin: "0 auto 18px" }}>
            <MapPin size={22} strokeWidth={1.75} />
          </span>
          <h2 className="display-2">Albuquerque, New Mexico.</h2>
          <p className="lede">
            Anfa Softworks LLC, registered in New Mexico, USA. Working with
            clients worldwide.
          </p>
        </Reveal>
      </Section>

      <CTABanner
        headline="Let's build something."
        primaryCTA={{ href: "/contact", label: "Start a project" }}
      />
    </>
  );
}
