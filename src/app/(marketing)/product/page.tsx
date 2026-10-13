import { ButtonLink, Eyebrow, SectionIntro } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";
import { ProductPreview, FlowPreview } from "@/components/product/preview";
import { capabilities } from "@/lib/data";
import { FinalCTA } from "@/components/marketing/footer";
export const metadata = { title: "The operating layer for your team" };
export default function Page() {
  return (
    <>
      <section className="inner-hero container">
        <Eyebrow>THE RELAYGRID PLATFORM</Eyebrow>
        <h1>
          Give the way you work
          <br />a better <span>operating system.</span>
        </h1>
        <p>
          Workflows, approvals, and visibility in one connected layer. Less
          chasing between tools. More clarity between teams.
        </p>
        <ButtonLink href="/dashboard" variant="dark">
          Explore the interactive demo
        </ButtonLink>
      </section>
      <section className="container product-page-preview">
        <ProductPreview />
      </section>
      <section className="section">
        <div className="container product-feature-layout">
          <div>
            <SectionIntro
              eyebrow="01 / BUILD THE PROCESS"
              title={
                <>
                  Turn good habits into
                  <br />
                  repeatable systems.
                </>
              }
              text="Define each step, assign its owner, and put the next action in plain sight. A workflow should be easy to understand before it’s automated."
            />
            <ul className="feature-checklist">
              <li>
                <Icon name="check" />
                Visible, configurable workflow steps
              </li>
              <li>
                <Icon name="check" />
                Clear ownership and instructions
              </li>
              <li>
                <Icon name="check" />
                Test runs before you activate
              </li>
            </ul>
            <ButtonLink href="/workflows/builder" variant="secondary">
              Try the workflow builder
            </ButtonLink>
          </div>
          <div className="feature-flow-wrap">
            <FlowPreview />
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="container">
          <SectionIntro
            eyebrow="ONE CONNECTED PRODUCT"
            title="Structure from start to finish."
          />
          <div className="capabilities-grid">
            {capabilities.map((c) => (
              <div className="capability" key={c.title}>
                <span className="feature-icon">
                  <Icon name={c.icon} size={24} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container product-principles">
          <SectionIntro
            eyebrow="DESIGNED TO KEEP WORK MOVING"
            title={
              <>
                Clarity is a feature.
                <br />
                So is less friction.
              </>
            }
          />
          <div>
            {[
              {
                n: "A decision with all the details.",
                t: "Review the requester, budget, business context, and current stage together. Leave a useful note when work needs another pass.",
                href: "/approvals",
                cta: "Open approvals",
              },
              {
                n: "A view beyond “done.”",
                t: "Compare workflow volume, completion time, and stage-level delays. Focus on the process that gives your team the most time back.",
                href: "/analytics",
                cta: "Explore analytics",
              },
              {
                n: "A shared operating picture.",
                t: "See active workflows, recent activity, and the work that needs a decision. Keep leaders and operators looking at the same system.",
                href: "/dashboard",
                cta: "See the dashboard",
              },
            ].map((p, i) => (
              <article key={p.n}>
                <span>0{i + 2}</span>
                <div>
                  <h3>{p.n}</h3>
                  <p>{p.t}</p>
                  <ButtonLink href={p.href} variant="ghost">
                    {p.cta}
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
