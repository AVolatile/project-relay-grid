"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "../ui/brand";
import { ButtonLink } from "../ui/primitives";
import { Icon } from "../ui/icon";
const links = [
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Logo />
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((l) => (
            <Link
              href={l.href}
              key={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="sign-in-link" href="/login">
            Sign in
            <Icon name="up" size={13} />
          </Link>
          <ButtonLink href="/onboarding" variant="dark" icon="arrow">
            Start free
          </ButtonLink>
        </div>
        <button
          className="icon-button mobile-nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map((l) => (
            <Link href={l.href} key={l.href} onClick={() => setOpen(false)}>
              {l.label}
              <Icon name="arrow" size={16} />
            </Link>
          ))}
          <Link href="/login" onClick={() => setOpen(false)}>
            Sign in
            <Icon name="up" size={16} />
          </Link>
          <ButtonLink href="/onboarding" variant="dark">
            Start free
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}
