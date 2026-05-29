import { Check } from "lucide-react";
import clsx from "clsx";
import Reveal from "@/components/reveal";

export interface FeatureRowProps {
  id?: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  reverse?: boolean;
  visual: React.ReactNode;
}

// Stripe's core pattern: a two-column band, text on one side, a product
// visual on the other, alternating left/right down the page.
export default function FeatureRow({
  id,
  kicker,
  title,
  body,
  points,
  reverse,
  visual,
}: FeatureRowProps) {
  return (
    <div id={id} className={clsx("frow", reverse && "frow--reverse")}>
      <Reveal className="frow__text">
        <div className="frow__kicker">
          <span className="frow__kicker-dot" />
          {kicker}
        </div>
        <h3 className="display-2" style={{ fontSize: "clamp(1.75rem, 1.2rem + 2vw, 2.5rem)" }}>
          {title}
        </h3>
        <p className="frow__body">{body}</p>
        <ul className="frow__list">
          {points.map((p) => (
            <li key={p}>
              <Check size={18} strokeWidth={2.25} />
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={100}>{visual}</Reveal>
    </div>
  );
}
