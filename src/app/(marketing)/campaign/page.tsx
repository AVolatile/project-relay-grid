import { Eyebrow } from "@/components/ui/primitives";
import { CampaignGrid } from "@/components/creative/campaigns";
export const metadata = { title: "Campaign creative" };
export default function Page() {
  return (
    <>
      <section className="inner-hero container">
        <Eyebrow>CAMPAIGN / MAKE WORK FLOW</Eyebrow>
        <h1>
          A sharper message.
          <br />A <span>connected campaign.</span>
        </h1>
        <p>
          Six concepts built around the cost of disconnected work. One visual
          language across social, display, and launch creative.
        </p>
        <span className="creative-note">
          Self-initiated campaign concepts · Exportable HTML/CSS artwork
        </span>
      </section>
      <section className="container campaign-page">
        <CampaignGrid />
      </section>
    </>
  );
}
