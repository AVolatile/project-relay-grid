import Link from "next/link";
import { Logo } from "../ui/brand";
import { ButtonLink, Eyebrow } from "../ui/primitives";
import { Icon } from "../ui/icon";
export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <div>
          <Eyebrow light>YOUR NEXT STAGE STARTS HERE</Eyebrow>
          <h2>
            Build better systems.
            <br />
            Before broken ones get expensive.
          </h2>
          <p>A clearer way to work. A stronger foundation to grow.</p>
        </div>
        <ButtonLink href="/onboarding">Start free</ButtonLink>
        <div className="cta-route" aria-hidden="true">
          <i />
          <span />
          <i />
          <span />
          <i />
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />
            <p>Operations that scale with you.</p>
            <Link className="concept-link" href="/case-study">
              A concept by Anthony Volatile
              <Icon name="up" size={13} />
            </Link>
          </div>
          {[
            {
              title: "Platform",
              links: [
                ["Product overview", "/product"],
                ["Workflow builder", "/workflows/builder"],
                ["Operational analytics", "/analytics"],
                ["Concept integrations", "/integrations"],
              ],
            },
            {
              title: "Explore",
              links: [
                ["Solutions", "/solutions"],
                ["Pricing", "/pricing"],
                ["Interactive demo", "/dashboard"],
                ["Resource center", "/resources"],
              ],
            },
            {
              title: "The project",
              links: [
                ["Case study", "/case-study"],
                ["Brand system", "/brand"],
                ["Campaign creative", "/campaign"],
                ["Email designs", "/emails"],
              ],
            },
          ].map((g) => (
            <div className="footer-column" key={g.title}>
              <h3>{g.title}</h3>
              {g.links.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 RelayGrid · Self-initiated concept project.</span>
          <span>
            Designed & built by Anthony Volatile
            <Icon name="up" size={13} />
          </span>
        </div>
      </div>
    </footer>
  );
}
