import Button from "./button";
import Reveal from "./reveal";
import MeshGradient from "./mesh-gradient";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subhead: string;
  primaryCTA?: { href: string; label: string };
  secondaryCTA?: { href: string; label: string };
  align?: "left" | "center";
  illustration?: React.ReactNode;
}

// Inner-page hero. Without an illustration it uses the animated gradient
// ribbon (left text, colour sweeping in from the right) so it matches the
// home hero and never leaves the right side empty. With an illustration it
// becomes a balanced two-column band.
export default function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCTA,
  secondaryCTA,
  illustration,
}: HeroProps) {
  const text = (
    <Reveal className={illustration ? undefined : "hero__col"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="display-1" style={{ fontSize: "clamp(2.5rem, 1.7rem + 3.6vw, 4.25rem)" }}>
        {headline}
      </h1>
      <p className="lede" style={{ marginTop: "20px" }}>
        {subhead}
      </p>
      {(primaryCTA || secondaryCTA) && (
        <div className="hero__ctas" style={{ marginTop: "30px" }}>
          {primaryCTA && (
            <Button href={primaryCTA.href} variant="primary" size="large" arrow>
              {primaryCTA.label}
            </Button>
          )}
          {secondaryCTA && (
            <Button href={secondaryCTA.href} variant="secondary" size="large">
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      )}
    </Reveal>
  );

  if (illustration) {
    return (
      <section className="section--haze" style={{ borderBottom: "1px solid var(--color-hairline)" }}>
        <div
          className="container--wide"
          style={{
            paddingInline: "clamp(20px, 5vw, 40px)",
            paddingBlock: "clamp(56px, 9vw, 104px)",
          }}
        >
          <div className="frow">
            {text}
            <Reveal delay={100}>{illustration}</Reveal>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero hero--inner">
      <MeshGradient />
      <div className="hero__inner">{text}</div>
    </section>
  );
}
