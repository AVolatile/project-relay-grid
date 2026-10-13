import Link from "next/link";
import { Icon } from "../ui/icon";
import { Symbol } from "../ui/brand";
import { ButtonLink, Eyebrow, SectionIntro } from "../ui/primitives";
import { ProductPreview, FlowPreview } from "../product/preview";
import { DepartmentChart } from "../product/charts";
import { capabilities, useCases } from "@/lib/data";
import { PricingCards } from "./pricing";
import { FinalCTA } from "./footer";
export function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-top">
            <div className="hero-copy">
              <Eyebrow>THE OPERATING LAYER FOR GROWING TEAMS</Eyebrow>
              <h1>
                Operations that
                <br />
                scale <span>with you.</span>
              </h1>
              <p>
                One place to automate workflows, manage approvals, track
                ownership, and understand what’s slowing your business down.
              </p>
              <div className="hero-actions">
                <ButtonLink href="/onboarding" variant="dark">
                  Start free
                </ButtonLink>
                <ButtonLink href="/dashboard" variant="secondary" icon="play">
                  See how it works
                </ButtonLink>
              </div>
              <div className="hero-note">
                <span className="tiny-dot" />
                Explore the concept. No account required.
              </div>
            </div>
            <div className="hero-diagram" aria-hidden="true">
              <div className="diagram-top-label">
                <span>SYSTEM STATUS</span>
                <span>
                  <i />
                  IN SYNC
                </span>
              </div>
              <div className="diagram-grid">
                <div className="diagram-node diagram-n1">
                  <Icon name="file" />
                  <span>Request</span>
                </div>
                <div className="diagram-route diagram-r1" />
                <div className="diagram-node diagram-n2">
                  <Icon name="checks" />
                  <span>Approve</span>
                </div>
                <div className="diagram-route diagram-r2" />
                <div className="diagram-node diagram-n3">
                  <Icon name="zap" />
                  <span>Automate</span>
                </div>
                <div className="diagram-route diagram-r3" />
                <div className="diagram-node diagram-n4">
                  <Symbol />
                  <span>Move forward</span>
                </div>
                <span className="diagram-cross cross-1">+</span>
                <span className="diagram-cross cross-2">+</span>
              </div>
              <div className="diagram-bottom-label">
                LESS FRICTION <span>→</span> MORE FORWARD
              </div>
            </div>
          </div>
          <div className="hero-product">
            <div className="product-browser-bar">
              <span className="browser-dots">
                <i />
                <i />
                <i />
              </span>
              <span>
                <Icon name="shield" size={11} />
                relaygrid / workspace overview
              </span>
              <span>
                PRODUCT DEMO <Icon name="up" size={11} />
              </span>
            </div>
            <ProductPreview />
            <div className="hero-product-caption">
              <span>
                <i />A connected view of your operations.
              </span>
              <Link href="/dashboard">
                Explore the live demo
                <Icon name="arrow" size={14} />
              </Link>
            </div>
          </div>
          <div className="built-for">
            <span>
              BUILT FOR THE TEAMS
              <br />
              THAT KEEP THINGS MOVING
            </span>
            {useCases.map((c) => (
              <div key={c.name}>
                <Icon name={c.icon} size={20} />
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section problem-section">
        <div className="container problem-layout">
          <SectionIntro
            eyebrow="GROWTH CHANGES THE WORK"
            title={
              <>
                Your company grew.
                <br />
                <span className="muted-text">Your processes didn’t.</span>
              </>
            }
            text="What worked at 20 people starts to break at 200. More tools won’t fix the gaps between them."
          />
          <div className="fragmented-visual">
            <div className="fragmented-label">
              THE COST OF DISCONNECTED WORK
            </div>
            {[
              {
                icon: "file" as const,
                title: "Another spreadsheet",
                text: "Three versions. No clear owner.",
                class: "fragment-a",
              },
              {
                icon: "mail" as const,
                title: "An approval in your inbox",
                text: "Buried beneath 47 other threads.",
                class: "fragment-b",
              },
              {
                icon: "users" as const,
                title: "“Who’s taking this?”",
                text: "A handoff that never happened.",
                class: "fragment-c",
              },
            ].map((f) => (
              <div className={`fragment-card ${f.class}`} key={f.title}>
                <span className="fragment-icon">
                  <Icon name={f.icon} />
                </span>
                <div>
                  <strong>{f.title}</strong>
                  <small>{f.text}</small>
                </div>
                <span className="fragment-dot" />
              </div>
            ))}
            <div className="fragmented-resolution">
              <Symbol />
              <span>One process. One owner. A clear next step.</span>
              <Icon name="arrow" />
            </div>
          </div>
        </div>
      </section>
      <section className="section capabilities-section" id="capabilities">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="A STRONGER OPERATING FOUNDATION"
              title={
                <>
                  Bring the work together.
                  <br />
                  Keep the business moving.
                </>
              }
            />
            <p>
              From the first request to the final handoff,
              <br />
              RelayGrid puts structure around the work.
            </p>
          </div>
          <div className="capabilities-grid">
            {capabilities.map((c, i) => (
              <Link
                className="capability"
                key={c.title}
                href={
                  i === 0
                    ? "/workflows/builder"
                    : i === 1
                      ? "/approvals"
                      : i === 3
                        ? "/analytics"
                        : i === 5
                          ? "/integrations"
                          : "/product"
                }
              >
                <div className="capability-top">
                  <span className="feature-icon">
                    <Icon name={c.icon} size={24} />
                  </span>
                  <span>0{i + 1}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <Icon name="up" size={16} className="capability-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section showcase-section">
        <div className="container">
          <div className="showcase-top">
            <SectionIntro
              eyebrow="DESIGNED AROUND THE WAY WORK MOVES"
              title={
                <>
                  A process you can see.
                  <br />
                  Progress you can trust.
                </>
              }
              light
              text="Build a repeatable path, give every decision an owner, and see where your team can move faster."
            />
            <ButtonLink href="/product" variant="ghost">
              Explore the product
            </ButtonLink>
          </div>
          <div className="showcase-grid">
            <div className="showcase-flow">
              <div className="showcase-card-copy">
                <span className="showcase-index">01 / WORKFLOW AUTOMATION</span>
                <h3>Every handoff has a next step.</h3>
                <p>Build a clear path from request to resolution.</p>
              </div>
              <FlowPreview dark />
            </div>
            <div className="showcase-right">
              <div className="showcase-analytics">
                <div className="showcase-card-copy">
                  <span className="showcase-index">
                    02 / OPERATIONAL VISIBILITY
                  </span>
                  <h3>Understand the work behind the numbers.</h3>
                </div>
                <div className="showcase-chart">
                  <div>
                    <span>Department throughput</span>
                    <strong>
                      1,072<small>completed runs</small>
                    </strong>
                  </div>
                  <DepartmentChart />
                </div>
              </div>
              <div className="showcase-activity">
                <span className="showcase-index">
                  03 / CONNECTED TEAM ACTIVITY
                </span>
                <div>
                  <span className="activity-check">
                    <Icon name="check" />
                  </span>
                  <span>
                    <strong>Legal review completed</strong>
                    <small>Contract approval · Jordan Ellis</small>
                  </span>
                  <span>Just now</span>
                </div>
                <div>
                  <span className="activity-check">
                    <Icon name="zap" />
                  </span>
                  <span>
                    <strong>Onboarding team notified</strong>
                    <small>Customer onboarding · Automated</small>
                  </span>
                  <span>4 min ago</span>
                </div>
              </div>
            </div>
          </div>
          <p className="showcase-footnote">
            Real interface components. Fictional demo workspace.
          </p>
        </div>
      </section>
      <section className="section use-case-section">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="ONE PLATFORM. EVERY OPERATING TEAM."
              title={
                <>
                  Different teams.
                  <br />A shared way forward.
                </>
              }
            />
            <ButtonLink href="/solutions" variant="secondary">
              Explore solutions
            </ButtonLink>
          </div>
          <div className="use-case-grid">
            {useCases.map((c) => (
              <Link
                className="use-case-card"
                href={`/solutions/#${c.name.toLowerCase().replaceAll(" ", "-")}`}
                key={c.name}
              >
                <Icon name={c.icon} size={24} />
                <h3>{c.name}</h3>
                <p>{c.short}</p>
                <div>
                  <span>{c.workflow}</span>
                  <Icon name="arrow" size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="scale-section">
        <div className="container scale-layout">
          <div>
            <Eyebrow>STRUCTURE THAT GROWS WITH YOU</Eyebrow>
            <h2>
              From 20 people to 500.
              <br />
              Without starting over.
            </h2>
            <p>
              A company’s next chapter shouldn’t need a new operating system.
              Start with a few repeatable workflows, then build a shared
              foundation across teams.
            </p>
            <ButtonLink href="/solutions" variant="dark">
              Build for your next stage
            </ButtonLink>
          </div>
          <div className="scale-visual">
            <div className="scale-axis">
              <span>20</span>
              <span>50</span>
              <span>250</span>
              <span>500</span>
            </div>
            <div className="scale-bars">
              {[
                14, 20, 27, 38, 46, 61, 72, 81, 92, 105, 117, 133, 147, 161,
                176, 195, 218, 240,
              ].map((h, i) => (
                <i key={i} style={{ height: h }} />
              ))}
            </div>
            <div className="scale-caption">
              <span>TEAM SIZE ↑</span>
              <span>
                ONE OPERATING FOUNDATION
                <Icon name="arrow" size={14} />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section integrations-section">
        <div className="container integrations-layout">
          <SectionIntro
            eyebrow="THE TOOLS YOU USE. THE STRUCTURE YOU NEED."
            title={
              <>
                Keep your tools.
                <br />
                Connect your operations.
              </>
            }
            text="Imagine a workflow that carries context between conversations, documents, and customer records."
          />
          <div>
            <div className="integration-orbit">
              {[
                { n: "Slack", l: "#" },
                { n: "Microsoft Teams", l: "T" },
                { n: "Google Workspace", l: "G" },
                { n: "HubSpot", l: "H" },
                { n: "Salesforce", l: "S" },
                { n: "Jira", l: "J" },
                { n: "Zapier", l: "Z" },
              ].map((i) => (
                <div key={i.n}>
                  <span>{i.l}</span>
                  <small>{i.n}</small>
                </div>
              ))}
            </div>
            <p className="integration-concept">
              Illustrative integration concepts. No third-party connections are
              active.
            </p>
          </div>
        </div>
      </section>
      <section className="section homepage-pricing">
        <div className="container">
          <SectionIntro
            eyebrow="A PLAN FOR YOUR NEXT CHAPTER"
            title={
              <>
                Start with structure.
                <br />
                Leave room to scale.
              </>
            }
          />
          <PricingCards />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
