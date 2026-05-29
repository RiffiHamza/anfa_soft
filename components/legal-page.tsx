import Hero from "@/components/hero";
import Section from "@/components/section";

interface LegalSection {
  heading: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <Hero eyebrow={eyebrow} headline={title} subhead={intro} align="center" />

      <Section background="white">
        <div className="legal">
          <p
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "var(--color-muted)",
              marginBottom: "8px",
            }}
          >
            Last updated: {lastUpdated}
          </p>
          {sections.map((section, i) => (
            <section key={section.heading}>
              <h2>
                {i + 1}. {section.heading}
              </h2>
              <div>{section.body}</div>
            </section>
          ))}
          <div
            className="card"
            style={{
              marginTop: "48px",
              padding: "22px 24px",
              fontSize: "14px",
              color: "var(--color-body)",
            }}
          >
            For questions about this document, contact{" "}
            <a
              href="mailto:legal@anfasoftworks.com"
              style={{ color: "var(--color-emerald)", fontWeight: 600 }}
            >
              legal@anfasoftworks.com
            </a>
            .
          </div>
        </div>
      </Section>
    </>
  );
}
