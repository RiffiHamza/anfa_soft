import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type ButtonVariant = "primary" | "accent" | "dark" | "secondary" | "tertiary";
type ButtonSize = "default" | "large";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "default",
  arrow = false,
  children,
  className,
}: ButtonProps) {
  if (variant === "tertiary") {
    return (
      <Link href={href} className={clsx("link-arrow", className)}>
        {children}
        <ArrowRight className="arrow" size={16} strokeWidth={2} />
      </Link>
    );
  }

  const variantClass =
    variant === "secondary"
      ? "btn--ghost"
      : variant === "dark"
        ? "btn--dark"
        : "btn--primary"; // primary + accent both map to emerald

  return (
    <Link
      href={href}
      className={clsx("btn", variantClass, size === "large" && "btn--lg", className)}
    >
      {children}
      {arrow && <ArrowRight className="arrow" size={17} strokeWidth={2} />}
    </Link>
  );
}
