import clsx from "clsx";

interface SectionProps {
  background?: "white" | "cream" | "mist" | "haze" | "deep" | "navy";
  padding?: "default" | "hero" | "compact";
  className?: string;
  id?: string;
  wide?: boolean;
  children: React.ReactNode;
}

export default function Section({
  background = "white",
  padding = "default",
  className,
  id,
  wide,
  children,
}: SectionProps) {
  const surface =
    background === "deep" || background === "navy"
      ? "section--navy"
      : background === "white"
        ? ""
        : "section--haze"; // cream / mist / haze map to the cool haze

  return (
    <section
      id={id}
      className={clsx(
        "section",
        surface,
        padding === "compact" && "section--tight",
        className
      )}
    >
      <div
        className={clsx("container", wide && "container--wide")}
        style={wide ? { paddingInline: "clamp(20px, 5vw, 40px)" } : undefined}
      >
        {children}
      </div>
    </section>
  );
}
