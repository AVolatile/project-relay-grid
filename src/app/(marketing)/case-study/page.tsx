import Link from "next/link";
import { Logo, Symbol } from "@/components/ui/brand";
import { Eyebrow, SectionIntro, ButtonLink } from "@/components/ui/primitives";
import { ProductPreview, FlowPreview } from "@/components/product/preview";
import { LineChart, DepartmentChart } from "@/components/product/charts";
import { CampaignGrid } from "@/components/creative/campaigns";
import { Icon } from "@/components/ui/icon";
export const metadata = {
  title: "RelayGrid — A concept case study by Anthony Volatile",
};
export default function Page() {
  return (
    <>
      <section className="case-hero">
        <div className="container">
          <Eyebrow light>ANTHONY VOLATILE / SELF-INITIATED CONCEPT</Eyebrow>
          <h1>
            RelayGrid<span>Scaling SaaS Platform</span>
          </h1>
          <div className="case-disciplines">
            <span>Brand identity</span>
            <span>Product design</span>
            <span>Web development</span>
            <span>Campaign creative</span>
          </div>
          <div className="case-hero-lockup">
            <Logo light />
            <div>
              OPERATIONS THAT
              <br />
              <span>SCALE WITH YOU.</span>
            </div>
            <Symbol />
          </div>
        </div>
      </section>
      <div className="container case-body">
        <section className="case-overview">
          <div>
            <span className="brand-section-label">01 / OVERVIEW</span>
            <h2>
              A stronger foundation
              <br />
              for a growing business.
            </h2>
          </div>
          <div>
            <p>
              RelayGrid is a self-initiated B2B SaaS concept for companies that
              have outgrown informal operating systems. The project explores how
              a cohesive identity, clear marketing story, and useful product
              experience can make complex operational work feel manageable.
            </p>
            <dl className="case-facts">
              <div>
                <dt>Role</dt>
                <dd>Brand, UX/UI, frontend, creative</dd>
              </div>
              <div>
                <dt>Audience</dt>
                <dd>Operations teams at 50–500 person companies</dd>
              </div>
              <div>
                <dt>Project type</dt>
                <dd>Independent portfolio concept</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>2026</dd>
              </div>
            </dl>
          </div>
        </section>
        <section className="case-editorial">
          <div>
            <span className="brand-section-label">02 / THE CHALLENGE</span>
            <h2>
              Growth creates gaps
              <br />
              between the tools.
            </h2>
            <p>
              Scaling companies often outgrow the informal systems that helped
              them reach their first stage of growth. Processes become
              fragmented across spreadsheets, messaging platforms,
              project-management tools, and institutional knowledge.
            </p>
          </div>
          <div>
            <span className="brand-section-label">03 / THE IDEA</span>
            <h2>
              One layer.
              <br />A clearer way to operate.
            </h2>
            <p>
              RelayGrid was designed as a centralized operating layer for
              growing teams—combining workflows, automation, approvals, and
              operational visibility in one system.
            </p>
          </div>
        </section>
        <section className="case-section">
          <SectionIntro
            eyebrow="04 / BRAND SYSTEM"
            title="Structure with forward energy."
            text="A routed-grid symbol, precise typography, and a single electric accent create a technical identity with a human sense of momentum."
          />
          <div className="case-brand-board">
            <div>
              <Logo light />
              <span>
                Make work
                <br />
                <em>move forward.</em>
              </span>
            </div>
            <div className="case-brand-colors">
              <i />
              <i />
              <i />
              <i />
              <span>INK / LIME / CANVAS / FOREST</span>
            </div>
          </div>
          <Link className="text-link" href="/brand">
            Explore the design system
            <Icon name="arrow" size={16} />
          </Link>
        </section>
        <section className="case-section">
          <SectionIntro
            eyebrow="05 / MARKETING EXPERIENCE"
            title="Show the product. Explain the value."
            text="The marketing experience leads with a credible interface, then connects scattered processes to specific team use cases. The visual system stays focused on the work."
          />
          <div className="case-marketing-preview">
            <div className="case-mini-hero">
              <Eyebrow>THE OPERATING LAYER FOR GROWING TEAMS</Eyebrow>
              <h3>
                Operations that
                <br />
                scale <span>with you.</span>
              </h3>
              <p>
                One place to automate workflows, manage approvals, and
                understand what’s slowing your business down.
              </p>
              <ButtonLink href="/" variant="dark">
                View the homepage
              </ButtonLink>
            </div>
            <ProductPreview variant="compact" />
          </div>
        </section>
        <section className="case-section">
          <SectionIntro
            eyebrow="06 / THE PRODUCT"
            title="A system you can actually explore."
            text="A shared workspace links workflow management, approvals, and analytics. Local state makes the product demonstrable, with honest boundaries around simulated actions."
          />
          <ProductPreview />
          <div className="case-product-grid">
            <div className="case-product-flow">
              <FlowPreview />
            </div>
            <div className="panel case-analytics">
              <div className="panel-heading">
                <h3>Workflow intelligence</h3>
                <Icon name="chart" />
              </div>
              <div className="case-analytics-value">
                4.2<span>hours to completion</span>
              </div>
              <LineChart />
              <DepartmentChart />
            </div>
          </div>
          <div className="case-demo-links">
            <ButtonLink href="/dashboard" variant="dark">
              Open dashboard
            </ButtonLink>
            <ButtonLink href="/workflows/builder" variant="secondary">
              Try workflow builder
            </ButtonLink>
            <ButtonLink href="/analytics" variant="secondary">
              Explore analytics
            </ButtonLink>
          </div>
        </section>
        <section className="case-section">
          <SectionIntro
            eyebrow="07 / CAMPAIGN SYSTEM"
            title="Make the friction impossible to ignore."
            text="Six campaign concepts translate the product story into a recognizable creative system. Strong copy, structured layouts, and routed graphics work across social and display."
          />
          <CampaignGrid small />
          <Link href="/campaign" className="text-link">
            View the full campaign
            <Icon name="arrow" size={16} />
          </Link>
        </section>
        <section className="case-section">
          <SectionIntro
            eyebrow="08 / BUILD & TECHNOLOGY"
            title="A focused, deployable frontend."
          />
          <div className="case-build-grid">
            <div>
              <h3>Implemented</h3>
              <ul>
                {[
                  "Next.js App Router with static export",
                  "React and TypeScript",
                  "Reusable components and CSS design tokens",
                  "Local state for workflows and approvals",
                  "SVG and CSS data visualizations",
                  "Native accessible dialogs and keyboard controls",
                  "Responsive marketing and product layouts",
                  "Exportable campaign and email creative",
                ].map((t) => (
                  <li key={t}>
                    <Icon name="check" size={16} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Deliberate scope</h3>
              <p>
                This is a frontend concept. Login is a fictional entry screen.
                Workflow runs and integration connections are simulated. Data is
                fictional, and product changes reset on reload.
              </p>
              <p>
                The architecture keeps data, interface components, and route
                composition separate, making the design system reusable without
                introducing backend infrastructure.
              </p>
              <Link href="/emails" className="text-link">
                View the email system
                <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </section>
        <div className="case-disclaimer">
          <Symbol />
          <p>
            RelayGrid is a self-initiated concept project created by Anthony
            Volatile to demonstrate brand, product, web, and campaign design
            capabilities. It is not a client engagement or an operating company.
          </p>
        </div>
      </div>
    </>
  );
}
