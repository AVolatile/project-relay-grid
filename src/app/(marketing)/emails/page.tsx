import { Eyebrow } from "@/components/ui/primitives";
import { EmailPreviews } from "@/components/creative/emails";
export const metadata = { title: "Email design system" };
export default function Page() {
  return (
    <>
      <section className="inner-hero container">
        <Eyebrow>EMAIL / A CLEARER WAY TO COMMUNICATE</Eyebrow>
        <h1>
          Useful in the inbox.
          <br />
          <span>Recognizable everywhere.</span>
        </h1>
        <p>
          Product announcement, feature launch, and lifecycle education. Three
          responsive previews that carry the RelayGrid identity into email.
        </p>
        <span className="creative-note">
          Visual mockups · Downloadable email HTML in portfolio-assets/emails
        </span>
      </section>
      <section className="container email-page">
        <EmailPreviews />
      </section>
    </>
  );
}
