import { ButtonLink, Eyebrow, SectionIntro } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";
import { useCases } from "@/lib/data";
import { FinalCTA } from "@/components/marketing/footer";
export const metadata = { title: "Solutions for growing teams" };
export default function Page() {
  return (
    <>
      <section className="inner-hero container">
        <Eyebrow>BUILT AROUND REAL OPERATING WORK</Eyebrow>
        <h1>
          Every team has a process.
          <br />
          Give yours a <span>clear path.</span>
        </h1>
        <p>
          Start where the follow-ups are. Build structure around the repeatable
          work that connects your business.
        </p>
        <ButtonLink href="/workflows" variant="dark">
          Explore workflow templates
        </ButtonLink>
      </section>
      <div className="container solutions-list">
        {useCases.map((c, i) => (
          <section
            id={c.name.toLowerCase().replaceAll(" ", "-")}
            className="solution-section"
            key={c.name}
          >
            <div className="solution-description">
              <span className="feature-icon">
                <Icon name={c.icon} size={27} />
              </span>
              <Eyebrow>{c.name}</Eyebrow>
              <h2>{c.short}</h2>
              <p>{c.description}</p>
              <ButtonLink
                href={`/workflows/builder/?workflow=${["vendor", "contract", "customer", "employee"][i]}`}
                variant="secondary"
              >
                Explore {c.workflow.toLowerCase()}
              </ButtonLink>
            </div>
            <div className="solution-process">
              <div className="solution-process-head">
                <span>EXAMPLE WORKFLOW</span>
                <Icon name="workflow" size={18} />
              </div>
              <h3>{c.workflow}</h3>
              {[
                [
                  "Vendor details submitted",
                  "Documents collected",
                  "Finance review",
                  "Vendor ready",
                ],
                [
                  "Contract submitted",
                  "Legal review",
                  "Finance approval",
                  "Team notified",
                ],
                [
                  "Account created",
                  "Success owner assigned",
                  "Kickoff scheduled",
                  "Customer handoff",
                ],
                [
                  "Offer accepted",
                  "Access requested",
                  "Equipment prepared",
                  "Day-one ready",
                ],
              ][i].map((s, j) => (
                <div className="solution-process-step" key={s}>
                  <span>{String(j + 1).padStart(2, "0")}</span>
                  <strong>{s}</strong>
                  <Icon name={j === 3 ? "check" : "down"} size={16} />
                </div>
              ))}
              <p>One owner at every step. Context carried forward.</p>
            </div>
          </section>
        ))}
      </div>
      <section className="section light-section">
        <div className="container">
          <SectionIntro
            eyebrow="WHERE TO START"
            title="Choose the work you keep repeating."
            text="A useful first workflow has a clear trigger, a recurring handoff, and an outcome everyone understands. Start there, improve it, then expand."
          />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
