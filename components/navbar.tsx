"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Code2,
  Smartphone,
  Sparkles,
  Boxes,
  ShoppingBag,
  CreditCard,
  BarChart3,
  MousePointerClick,
  Megaphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SERVICE_LINES } from "@/content/service-lines";

const ICONS: Record<string, LucideIcon> = {
  web: Code2,
  mobile: Smartphone,
  ai: Sparkles,
  custom: Boxes,
  commerce: ShoppingBag,
  payments: CreditCard,
  data: BarChart3,
  behavior: MousePointerClick,
  marketing: Megaphone,
  automation: Workflow,
};

const ENGINEERING = SERVICE_LINES.filter((l) => l.tier === "Engineering");
const GROWTH = SERVICE_LINES.filter((l) => l.tier === "Growth & Data");

const SIMPLE_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <Image src="/logo.png" alt="Anfa Softworks" width={2816} height={1536} priority className="nav__logo" />
  );
}

function MenuLink({ id, title, summary, onClick }: { id: string; title: string; summary: string; onClick: () => void }) {
  const Icon = ICONS[id] ?? Boxes;
  return (
    <Link href={`/services#${id}`} className="nav__menu-link" onClick={onClick}>
      <span className="nav__menu-ic">
        <Icon size={18} strokeWidth={1.75} />
      </span>
      <span>
        <span className="nav__menu-t">{title}</span>
        <span className="nav__menu-d">{summary}</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeMenu = (delay = 120) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), delay);
  };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    function onClickOutside(e: MouseEvent) {
      if (itemRef.current && !itemRef.current.contains(e.target as Node)) setServicesOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="nav">
      <nav className="nav__row" aria-label="Primary">
        <Link href="/" aria-label="Anfa Softworks, home">
          <Logo />
        </Link>

        <div className="nav__links">
          <div
            className="nav__item"
            ref={itemRef}
            onMouseEnter={openMenu}
            onMouseLeave={() => closeMenu()}
          >
            <Link
              href="/services"
              className="nav__trigger"
              data-open={servicesOpen || undefined}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onFocus={openMenu}
            >
              Services
              <ChevronDown size={15} strokeWidth={2} />
            </Link>

            {servicesOpen && (
              <div className="nav__menu" onMouseEnter={openMenu} onMouseLeave={() => closeMenu()}>
                <div className="nav__menu-grid">
                  <div>
                    <p className="nav__menu-head">Engineering</p>
                    {ENGINEERING.map((l) => (
                      <MenuLink
                        key={l.id}
                        id={l.id}
                        title={l.title}
                        summary={l.summary}
                        onClick={() => setServicesOpen(false)}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="nav__menu-head">Growth &amp; Data</p>
                    {GROWTH.map((l) => (
                      <MenuLink
                        key={l.id}
                        id={l.id}
                        title={l.title}
                        summary={l.summary}
                        onClick={() => setServicesOpen(false)}
                      />
                    ))}
                  </div>
                </div>
                <div className="nav__menu-foot">
                  <span>Ten service lines, web to AI to growth.</span>
                  <Link href="/services" className="link-arrow" onClick={() => setServicesOpen(false)}>
                    All services
                    <ArrowRight size={15} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {SIMPLE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav__link"
              data-active={isActive(link.href) || undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav__right">
          <Link href="/contact" className="nav__signin">
            Sign in
          </Link>
          <Link href="/contact" className="btn btn--primary nav__cta">
            Start a project
            <ArrowRight className="arrow" size={15} strokeWidth={2} />
          </Link>
          <button type="button" className="nav__toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={18} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="nav__panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="nav__panel-bar">
            <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Anfa Softworks, home">
              <Logo />
            </Link>
            <button type="button" className="nav__toggle" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={18} strokeWidth={2} />
            </button>
          </div>
          <div className="nav__panel-list">
            <p className="nav__panel-group">Services</p>
            {SERVICE_LINES.map((l) => (
              <Link key={l.id} href={`/services#${l.id}`} className="nav__panel-sub" onClick={() => setMobileOpen(false)}>
                {l.title}
              </Link>
            ))}
            {SIMPLE_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav__panel-foot">
            <Link href="/contact" className="btn btn--primary btn--block btn--lg" onClick={() => setMobileOpen(false)}>
              Start a project
              <ArrowRight className="arrow" size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
