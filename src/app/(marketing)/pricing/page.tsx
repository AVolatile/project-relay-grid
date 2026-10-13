import { Eyebrow } from "@/components/ui/primitives";
import { PricingCards } from "@/components/marketing/pricing";
import { FinalCTA } from "@/components/marketing/footer";
export const metadata = { title: "Concept pricing" };
export default function Page() {
  return (
    <>
      <section className="inner-hero container">
        <Eyebrow>STRUCTURE AT EVERY STAGE</Eyebrow>
        <h1>
          Make room for
          <br />
          <span>what comes next.</span>
        </h1>
        <p>
          A clear starting point for a growing team, with space for more
          workflows, more people, and more connected work.
        </p>
      </section>
      <section className="container pricing-page">
        <PricingCards />
      </section>
      <section className="section container faq-section">
        <div>
          <Eyebrow>A FEW USEFUL ANSWERS</Eyebrow>
          <h2>
            Clear plans.
            <br />
            Clear expectations.
          </h2>
        </div>
        <div>
          {[
            {
              q: "Can I buy a RelayGrid subscription?",
              a: "RelayGrid is a self-initiated concept project. These plans illustrate a SaaS pricing experience; no purchases, charges, or subscriptions are available.",
            },
            {
              q: "What counts as an automation run?",
              a: "In the product concept, a run is one execution of a workflow from trigger to completion. Manual approval steps are part of that same run.",
            },
            {
              q: "Does the demo require an account?",
              a: "No. You can explore the workspace, configure workflow steps, and make approval decisions without signing up. All activity is simulated in your browser.",
            },
            {
              q: "What happens to changes I make?",
              a: "Product changes stay in memory as you move between workspace screens. Refreshing the page restores the fictional sample data.",
            },
            {
              q: "Are the integrations connected?",
              a: "No. Third-party integrations are illustrative design concepts. Enabling a demo connection never accesses an external account.",
            },
          ].map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>
                {f.q}
                <span>+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
