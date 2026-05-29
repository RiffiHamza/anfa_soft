import Reveal from "./reveal";

interface Stat {
  value: string;
  label: string;
}

const DEFAULT_STATS: Stat[] = [
  { value: "12+", label: "Projects shipped" },
  { value: "8", label: "Industries served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4–6 wk", label: "Average delivery" },
];

// Stats on a navy band — matches the home stats treatment.
export default function TrustStrip({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
  return (
    <section className="section section--navy section--tight">
      <div className="container--wide" style={{ paddingInline: "clamp(20px, 5vw, 40px)" }}>
        <div className="stats">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 60}>
              <div>
                <div className="stat__n">{stat.value}</div>
                <div className="stat__l">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
