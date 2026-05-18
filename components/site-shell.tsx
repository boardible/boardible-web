import Link from "next/link";

import { socialLinks } from "@/lib/site-data";

type CurrentTab = "home" | "apps" | "games" | "support" | "legal";

const homeLinks = [
  { href: "#top", label: "Players" },
  { href: "#publishers", label: "Publishers" },
  { href: "#games", label: "Games" },
];

const siteLinks = [
  { href: "/apps", label: "Apps", tab: "apps" },
  { href: "/games", label: "Games", tab: "games" },
  { href: "/support", label: "Support", tab: "support" },
];

export function SiteHeader({ current = "home", homeAnchors = false }: { current?: CurrentTab; homeAnchors?: boolean }) {
  return (
    <nav className="top-nav">
      <div className="content-wrap top-nav-inner">
        <Link className="brand-mark" href="/">
          Boardible
        </Link>
        <div className="top-nav-links">
          {homeAnchors
            ? homeLinks.map((link) => (
                <a key={link.label} className={link.href === "#top" ? "is-active" : undefined} href={link.href}>
                  {link.label}
                </a>
              ))
            : siteLinks.map((link) => (
                <Link key={link.label} className={current === link.tab ? "is-active" : undefined} href={link.href}>
                  {link.label}
                </Link>
              ))}
        </div>
        <Link className="btn btn-primary btn-small" href={homeAnchors ? "#apps" : "/apps"}>
          Explore
        </Link>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer-v2">
      <div className="content-wrap footer-grid-v2">
        <div>
          <div className="footer-brand-v2">Boardible</div>
          <p>Mobile-first board games, shared-screen play, and publisher-ready launches built to bring tabletop culture into digital spaces.</p>
          <div className="footer-social-row">
            {socialLinks.map((link) => (
              <a key={link.label} className="footer-social-link" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-link-column">
          <h4>Company</h4>
          <Link href="/">Home</Link>
          <Link href="/apps">Apps</Link>
          <Link href="/games">Games</Link>
        </div>

        <div className="footer-link-column">
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/privacy-policy-ineuj">Privacy INEUJ</Link>
          <Link href="/privacy-policy-tictac">Privacy Monstic</Link>
          <Link href="/terms-and-conditions">Terms</Link>
        </div>

        <div className="footer-link-column">
          <h4>Talk to us</h4>
          <p>Questions, support requests, publisher decks, and partnership ideas are always welcome.</p>
          <div className="newsletter-row-v2">
            <a className="footer-cta-link" href="mailto:talktous@boardible.com">
              talktous@boardible.com
            </a>
            <a className="footer-cta-button" href="mailto:talktous@boardible.com?subject=Hello%20Boardible">
              Email us
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-v2">© 2021 Boardible. All rights reserved.</div>
    </footer>
  );
}