"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo, Symbol } from "../ui/brand";
import { Icon, type IconName } from "../ui/icon";
import { Avatar } from "../ui/primitives";
import { Dialog } from "../ui/dialog";
import { useProduct } from "./provider";
const nav: { href: string; label: string; icon: IconName }[] = [
  { href: "/dashboard", label: "Overview", icon: "dashboard" },
  { href: "/workflows", label: "Workflows", icon: "workflow" },
  { href: "/approvals", label: "Approvals", icon: "checks" },
  { href: "/analytics", label: "Analytics", icon: "chart" },
  { href: "/integrations", label: "Integrations", icon: "plug" },
];
export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const { approvals, reset } = useProduct();
  const pending = approvals.filter((a) => a.status === "Pending").length;
  const sidebarContent = (
    <>
      <Logo href="/dashboard" />
      <button
        className="workspace-switch"
        onClick={() => setWorkspaceOpen(true)}
      >
        <span className="workspace-icon">M</span>
        <span>
          Meridian workspace<small>Fictional demo company</small>
        </span>
        <Icon name="chevron" size={14} />
      </button>
      <div className="nav-caption">WORKSPACE</div>
      <nav aria-label="Product navigation">
        {nav.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            onClick={() => setMenuOpen(false)}
            className={`app-nav-link ${pathname.startsWith(n.href) ? "active" : ""}`}
            aria-current={pathname.startsWith(n.href) ? "page" : undefined}
          >
            <Icon name={n.icon} />
            <span>{n.label}</span>
            {n.href === "/approvals" && (
              <span className="nav-count">{pending}</span>
            )}
          </Link>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="demo-tip">
          <Symbol />
          <strong>A little less friction.</strong>
          <p>A lot more forward.</p>
          <Link href="/case-study">
            Explore the concept <Icon name="up" size={14} />
          </Link>
        </div>
        <Link className="app-nav-link" href="/resources">
          <Icon name="help" />
          Resource center
        </Link>
        <button className="app-nav-link" onClick={reset}>
          <Icon name="reset" />
          Reset demo
        </button>
        <div className="user-profile">
          <Avatar initials="AM" />
          <span>
            Alex Morgan<small>Workspace admin · Demo</small>
          </span>
        </div>
      </div>
    </>
  );
  return (
    <div className="app-layout">
      <aside className="app-sidebar">{sidebarContent}</aside>
      <div className="app-main">
        <header className="app-topbar">
          <button
            className="icon-button mobile-app-menu"
            aria-label="Open workspace navigation"
            onClick={() => setMenuOpen(true)}
          >
            <Icon name="menu" />
          </button>
          <div className="breadcrumb">
            Workspace <Icon name="right" size={13} />
            <span>
              {pathname.includes("builder")
                ? "Workflow builder"
                : nav.find((n) => pathname.startsWith(n.href))?.label ||
                  "Overview"}
            </span>
          </div>
          <div className="topbar-right">
            <span className="demo-label">
              <span />
              Interactive demo
            </span>
            <Link href="/" className="back-site">
              Back to site <Icon name="up" size={14} />
            </Link>
          </div>
        </header>
        <main id="main" className="app-content">
          {children}
        </main>
        <footer className="app-footer">
          Fictional sample data · Sep 2026
          <span>RelayGrid / Self-initiated concept</span>
        </footer>
      </div>
      <Dialog
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        title="Workspace navigation"
        drawer
      >
        <div className="mobile-sidebar">{sidebarContent}</div>
      </Dialog>
      <Dialog
        open={workspaceOpen}
        onClose={() => setWorkspaceOpen(false)}
        title="Your demo workspace"
      >
        <div className="dialog-body">
          <div className="workspace-detail">
            <span className="workspace-icon">M</span>
            <div>
              <strong>Meridian workspace</strong>
              <p>Fictional company · 128 members</p>
            </div>
          </div>
          <p>
            This sample workspace brings Operations, Finance, Customer Success,
            and People Operations together. Changes stay in memory while you
            explore; reloading restores the demo.
          </p>
          <button
            className="button button-dark"
            onClick={() => setWorkspaceOpen(false)}
          >
            Continue exploring <Icon name="arrow" />
          </button>
        </div>
      </Dialog>
    </div>
  );
}
