import clsx from "clsx";

type Variant = "dashboard" | "ai" | "platform";

// Abstract "product UI" panels rendered in HTML/CSS, one per service theme so
// no two feature rows repeat the same visual. Decorative, hidden from a11y.
export default function ProductMockup({
  className,
  title = "Overview",
  variant = "dashboard",
}: {
  className?: string;
  title?: string;
  variant?: Variant;
}) {
  return (
    <div className={clsx("mock elevated", className)} aria-hidden="true">
      <div className="mock__bar">
        <span className="mock__dot" />
        <span className="mock__dot" />
        <span className="mock__dot" />
      </div>
      <div className="mock__body">
        <div className="mock__head">
          <span className="display-3" style={{ fontSize: "1.05rem" }}>
            {title}
          </span>
          <span className="mock__chip">{variant === "ai" ? "98% match" : "live"}</span>
        </div>

        {variant === "dashboard" && (
          <>
            <div className="mock__grid">
              <div className="mock__tile">
                <div className="mock__tile-n">99.98%</div>
                <div className="mock__tile-l">Uptime</div>
              </div>
              <div className="mock__tile">
                <div className="mock__tile-n">42ms</div>
                <div className="mock__tile-l">p95 latency</div>
              </div>
              <div className="mock__tile">
                <div className="mock__tile-n">8</div>
                <div className="mock__tile-l">Services</div>
              </div>
            </div>
            <div className="mock__spark">
              <svg viewBox="0 0 320 64" preserveAspectRatio="none" width="100%" height="64">
                <path
                  d="M0 50 L40 44 L80 46 L120 30 L160 34 L200 18 L240 24 L280 10 L320 14"
                  fill="none"
                  stroke="var(--color-emerald)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </>
        )}

        {variant === "ai" && (
          <div className="mock__fields">
            {[
              ["Vendor", "Acme Trading BV"],
              ["Invoice no.", "INV-2026-0481"],
              ["Total", "€ 12,480.00"],
              ["VAT (21%)", "€ 2,166.94"],
            ].map(([l, v]) => (
              <div key={l} className="mock__field">
                <span className="mock__field-l">{l}</span>
                <span className="mock__field-v">{v}</span>
              </div>
            ))}
            <div className="mock__extract">
              <span className="mock__chip mock__chip--ok">extracted</span>
              <span className="mock__chip mock__chip--ok">classified</span>
              <span className="mock__chip mock__chip--ok">posted</span>
            </div>
          </div>
        )}

        {variant === "platform" && (
          <div className="mock__list">
            {[
              ["Northwind Co.", "eu-west"],
              ["Helios Labs", "us-east"],
              ["Meridian BV", "eu-west"],
              ["Atlas Group", "ap-south"],
            ].map(([name, region]) => (
              <div key={name} className="mock__lrow">
                <span className="mock__status" />
                <span className="mock__lname">{name}</span>
                <span className="mock__lregion">{region}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
