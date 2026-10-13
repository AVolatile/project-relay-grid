import { campaigns } from "@/lib/data";
import { Logo } from "../ui/brand";
import { Icon } from "../ui/icon";
export function CampaignArtwork({
  campaign,
  small = false,
}: {
  campaign: (typeof campaigns)[number];
  small?: boolean;
}) {
  return (
    <div
      id={`campaign-${campaign.id}`}
      className={`campaign-art campaign-${campaign.theme} campaign-motif-${campaign.motif} ${small ? "campaign-small" : ""} ${campaign.format.includes("1600") ? "campaign-landscape" : ""}`}
    >
      <div className="campaign-art-top">
        <Logo />
        <span>OPERATIONS, IN SYNC.</span>
      </div>
      <div className="campaign-art-copy">
        <span className="campaign-eyebrow">{campaign.eyebrow}</span>
        <h2>
          {campaign.title}
          <br />
          <span>{campaign.accent}</span>
        </h2>
        <p>{campaign.sub}</p>
      </div>
      <div className="campaign-motif" aria-hidden="true">
        {campaign.motif === "growth" ? (
          <>
            {[20, 32, 45, 60, 80, 102, 128, 160].map((h, i) => (
              <i key={i} style={{ height: `${h / 2}%` }} />
            ))}
          </>
        ) : campaign.motif === "flow" ? (
          <>
            <span>
              <Icon name="file" size={23} />
            </span>
            <i />
            <span>
              <Icon name="checks" size={23} />
            </span>
            <i />
            <span>
              <Icon name="zap" size={23} />
            </span>
          </>
        ) : (
          <>
            <span />
            <i />
            <span />
            <i />
            <span />
          </>
        )}
      </div>
      <div className="campaign-art-bottom">
        <span>relaygrid / concept campaign</span>
        <span>
          Build better systems
          <Icon name="arrow" size={15} />
        </span>
      </div>
    </div>
  );
}
export function CampaignGrid({ small = false }: { small?: boolean }) {
  return (
    <div className={`campaign-grid ${small ? "campaign-grid-small" : ""}`}>
      {campaigns.map((c) => (
        <figure key={c.id}>
          <CampaignArtwork campaign={c} small={small} />
          <figcaption>
            <span>{c.format}</span>
            <span>
              0{campaigns.indexOf(c) + 1} / {c.id.toUpperCase()}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
