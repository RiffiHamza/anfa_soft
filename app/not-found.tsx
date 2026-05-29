import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section
      className="section--haze"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 200px)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "620px", textAlign: "center" }}>
        <p className="eyebrow" style={{ display: "inline-block" }}>404</p>
        <h1 className="display-1" style={{ fontSize: "clamp(2.5rem, 1.8rem + 3vw, 3.75rem)" }}>
          Page not found.
        </h1>
        <p className="lede" style={{ margin: "20px auto 0" }}>
          This page doesn&rsquo;t exist or has moved. Head back to the home page
          to find what you need.
        </p>
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
          <Link href="/" className="btn btn--primary btn--lg">
            Back to home
            <ArrowRight className="arrow" size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
