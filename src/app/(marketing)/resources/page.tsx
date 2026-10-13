import Link from "next/link";
import { Eyebrow, SectionIntro } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";
export const metadata = { title: "Resources and project materials" };
export default function Page() {
  return (
    <>
      <section className="inner-hero container">
        <Eyebrow>THE OPERATIONS FIELD GUIDE</Eyebrow>
        <h1>
          Better systems start
          <br />
          with <span>clear thinking.</span>
        </h1>
        <p>
          Practical starting points for designing repeatable work, plus a closer
          look at the RelayGrid concept.
        </p>
      </section>
      <section className="container resources-grid">
        {[
          {
            label: "GUIDE / 01",
            title: "Your first workflow doesn’t need to be complicated.",
            text: "Pick one request, one accountable owner, and one outcome. Map the steps your team already follows before adding automation.",
            href: "/workflows/builder",
            cta: "Explore a workflow",
            icon: "workflow" as const,
          },
          {
            label: "GUIDE / 02",
            title: "An approval queue is only as good as its context.",
            text: "Bring the requester, budget, supporting details, and next stage together. Make a decision useful to the person who receives it.",
            href: "/approvals",
            cta: "Explore the approval queue",
            icon: "checks" as const,
          },
          {
            label: "GUIDE / 03",
            title: "Measure waiting time, not just finished work.",
            text: "A process can look productive and still spend most of its life in review. Stage-level data shows where a small change could help.",
            href: "/analytics",
            cta: "Explore workflow analytics",
            icon: "chart" as const,
          },
        ].map((r) => (
          <article className="resource-card" key={r.label}>
            <div className="resource-visual">
              <Icon name={r.icon} size={56} />
              <span>{r.label}</span>
            </div>
            <h2>{r.title}</h2>
            <p>{r.text}</p>
            <Link className="text-link" href={r.href}>
              {r.cta}
              <Icon name="arrow" size={16} />
            </Link>
          </article>
        ))}
      </section>
      <section className="section light-section">
        <div className="container">
          <SectionIntro
            eyebrow="BEHIND THE PROJECT"
            title="One concept. A complete brand world."
          />
          <div className="resource-links">
            {[
              [
                "Case study",
                "The thinking, design, and implementation.",
                "/case-study",
              ],
              [
                "Brand system",
                "Identity, tokens, and interface language.",
                "/brand",
              ],
              [
                "Campaign creative",
                "Six concepts across social and display.",
                "/campaign",
              ],
              [
                "Email designs",
                "Product, feature, and lifecycle communication.",
                "/emails",
              ],
            ].map(([title, text, href]) => (
              <Link href={href} key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <Icon name="up" size={22} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
