import type { Metadata } from "next";
import { Mail, MapPin, Clock, FileLock2, FileCheck2, Globe2 } from "lucide-react";
import Hero from "@/components/hero";
import Section from "@/components/section";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Anfa Softworks. We reply within one business day.",
};

const TRUST_CHIPS = [
  { icon: FileLock2, label: "NDA available on request" },
  { icon: Globe2, label: "US-registered LLC" },
  { icon: FileCheck2, label: "Fixed-price proposals" },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        headline="Start a project."
        subhead="Tell us what you're building. We reply within one business day."
        align="center"
      />

      <Section background="white" wide>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(32px, 5vw, 56px)",
          }}
          className="contact-grid"
        >
          <ContactForm />
          <aside>
            <div className="cdetail">
              <p className="eyebrow" style={{ margin: 0 }}>Direct</p>
              <h3>Email us anytime</h3>
              <a href="mailto:team@anfasoftworks.com">
                <Mail size={18} strokeWidth={1.75} style={{ marginTop: "2px" }} />
                team@anfasoftworks.com
              </a>
            </div>
            <div className="cdetail">
              <p className="eyebrow" style={{ margin: 0 }}>Response time</p>
              <h3>1 business day</h3>
              <p>
                <Clock size={16} strokeWidth={1.75} style={{ marginTop: "3px", color: "var(--color-emerald)" }} />
                We read every message personally. No bots.
              </p>
            </div>
            <div className="cdetail">
              <p className="eyebrow" style={{ margin: 0 }}>Location</p>
              <h3>Albuquerque, NM</h3>
              <p>
                <MapPin size={16} strokeWidth={1.75} style={{ marginTop: "3px", color: "var(--color-emerald)" }} />
                Anfa Softworks LLC, registered in New Mexico, USA. Working with clients worldwide.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section background="haze" padding="compact" wide>
        <div className="chips">
          {TRUST_CHIPS.map((chip) => (
            <span key={chip.label} className="chip">
              <chip.icon size={14} strokeWidth={1.75} />
              {chip.label}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
