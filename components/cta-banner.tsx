import Button from "./button";
import Reveal from "./reveal";

interface CTABannerProps {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  primaryCTA?: { href: string; label: string };
  secondaryCTA?: { href: string; label: string };
  background?: "white" | "mist";
}

// Navy CTA band with the emerald glow — consistent with the home CTA.
export default function CTABanner({
  headline,
  subhead,
  primaryCTA = { href: "/contact", label: "Start a project" },
  secondaryCTA,
}: CTABannerProps) {
  return (
    <section className="section cta">
      <div className="cta__glow" aria-hidden="true" />
      <div
        className="container--wide"
        style={{ paddingInline: "clamp(20px, 5vw, 40px)" }}
      >
        <div className="cta__inner">
          <Reveal>
            <h2 className="cta__head">{headline}</h2>
          </Reveal>
          <Reveal delay={80}>
            {subhead && <p className="cta__body">{subhead}</p>}
            <div className="cta__actions" style={{ marginTop: subhead ? "0" : "4px" }}>
              <Button href={primaryCTA.href} variant="primary" size="large" arrow>
                {primaryCTA.label}
              </Button>
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="secondary" size="large">
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
