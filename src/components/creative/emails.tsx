import Link from "next/link";
import { emails } from "@/lib/data";
import { Logo, Symbol } from "../ui/brand";
import { Icon } from "../ui/icon";
export function EmailPreviews() {
  return (
    <div className="email-grid">
      {emails.map((e) => (
        <article className="email-preview-wrap" key={e.id}>
          <div className="email-metadata">
            <span>{e.label}</span>
            <h2>{e.subject}</h2>
            <p>{e.preheader}</p>
          </div>
          <div className="email-preview" id={`email-${e.id}`}>
            <div className="email-brand">
              <Logo />
            </div>
            <div className="email-hero">
              <span>{e.eyebrow}</span>
              <h3>{e.title}</h3>
              <div className="email-motif">
                <span>
                  <Icon name="file" size={22} />
                </span>
                <i />
                <span>
                  <Icon name="checks" size={22} />
                </span>
                <i />
                <Symbol />
              </div>
            </div>
            <div className="email-body">
              <p>{e.body}</p>
              <ul>
                {e.points.map((p, i) => (
                  <li key={p}>
                    <span>0{i + 1}</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link className="button button-dark" href={e.href}>
                {e.cta}
                <Icon name="arrow" size={15} />
              </Link>
              <p className="email-signoff">
                Here’s to less friction.
                <br />
                The RelayGrid concept team
              </p>
            </div>
            <div className="email-footer">
              <Symbol />
              <p>
                Operations that scale with you.
                <br />
                Self-initiated concept · Email design preview
              </p>
              <Link href="/case-study">About this project</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
