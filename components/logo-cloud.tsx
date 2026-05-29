// A muted credibility strip under the hero. Anfa is a studio, so rather than
// borrowed client logos we name the industries and surfaces we ship into.
const ITEMS = ["Fintech", "Healthcare", "Logistics", "E-commerce", "SaaS", "AI"];

export default function LogoCloud() {
  return (
    <section className="cloud section--tight">
      <div className="container--wide" style={{ paddingInline: "clamp(20px, 5vw, 40px)" }}>
        <p className="cloud__label">Shipping production software across</p>
        <div className="cloud__row">
          {ITEMS.map((item) => (
            <span key={item} className="cloud__item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
