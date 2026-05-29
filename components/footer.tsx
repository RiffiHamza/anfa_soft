import Link from "next/link";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { href: "/services#web", label: "Web Engineering" },
      { href: "/services#ai", label: "Applied AI" },
      { href: "/services#custom", label: "Platform Engineering" },
      { href: "/services#commerce", label: "Commerce" },
      { href: "/services#data", label: "Data & Analytics" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/work", label: "Work" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__inner">
        <div className="foot__top">
          <div>
            <div className="foot__brand-name">Anfa Softworks</div>
            <p className="foot__brand-p">
              An independent software studio building production-grade web,
              mobile, and AI software for teams worldwide.
            </p>
            <div className="foot__coord">Albuquerque, New Mexico, USA</div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="foot__col">
              <div className="foot__col-title">{col.title}</div>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
                {col.title === "Legal" && (
                  <li>
                    <a href="mailto:team@anfasoftworks.com">Email us</a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="foot__bottom">
          <p className="foot__copy">
            © 2026 Anfa Softworks LLC. Registered in New Mexico, USA.
          </p>
          <a href="mailto:team@anfasoftworks.com" className="foot__mail">
            team@anfasoftworks.com
          </a>
        </div>
      </div>
    </footer>
  );
}
