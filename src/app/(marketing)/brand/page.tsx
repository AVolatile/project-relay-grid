import { Logo, Symbol } from "@/components/ui/brand";
import { Eyebrow, Badge, ButtonLink, Avatar } from "@/components/ui/primitives";
import { Icon, type IconName } from "@/components/ui/icon";
import { FlowPreview } from "@/components/product/preview";
import { VolumeChart } from "@/components/product/charts";
export const metadata = { title: "Brand and design system" };
export default function Page() {
  return (
    <>
      <section className="inner-hero container">
        <Eyebrow>RELAYGRID / IDENTITY & INTERFACE SYSTEM</Eyebrow>
        <h1>
          Precision with
          <br />
          <span>a little forward energy.</span>
        </h1>
        <p>
          A modular identity for connected work. Ink, lime, clear type, and a
          routed-grid motif that moves from brand to product.
        </p>
      </section>
      <div className="container brand-page">
        <section className="brand-section">
          <div className="brand-section-label">01 / IDENTITY</div>
          <div className="brand-logo-grid">
            <div className="brand-logo-stage">
              <Logo />
              <p>A clear wordmark. A distinctive route.</p>
            </div>
            <div className="brand-symbol-stage">
              <Symbol />
              <span>CONNECTED / MODULAR / FORWARD</span>
            </div>
          </div>
          <div className="brand-explanation">
            <h2>A route through the grid.</h2>
            <p>
              The symbol uses a continuous right-angle path to join modular
              nodes. The open corner leaves room for the next connection. It
              feels like infrastructure: purposeful, repeatable, and built to
              expand.
            </p>
          </div>
        </section>
        <section className="brand-section">
          <div className="brand-section-label">02 / COLOR</div>
          <div className="color-grid">
            {[
              {
                name: "Relay lime",
                hex: "#C4F566",
                role: "Primary accent / Progress",
                color: "#c4f566",
              },
              {
                name: "Ink",
                hex: "#101B19",
                role: "Brand anchor / Headlines",
                color: "#101b19",
              },
              {
                name: "Canvas",
                hex: "#F7F8F3",
                role: "Marketing / Open space",
                color: "#f7f8f3",
              },
              {
                name: "Interface",
                hex: "#FFFFFF",
                role: "Product panels / Focus",
                color: "#ffffff",
              },
              {
                name: "Forest",
                hex: "#526F5F",
                role: "Charts / Secondary signal",
                color: "#526f5f",
              },
              {
                name: "Mist",
                hex: "#E7EBE3",
                role: "Borders / Quiet structure",
                color: "#e7ebe3",
              },
            ].map((c) => (
              <div className="color-swatch" key={c.name}>
                <div style={{ background: c.color }} />
                <strong>{c.name}</strong>
                <code>{c.hex}</code>
                <p>{c.role}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="brand-section">
          <div className="brand-section-label">03 / TYPOGRAPHY</div>
          <div className="brand-type-grid">
            <div>
              <span className="type-meta">GEIST VARIABLE / DISPLAY</span>
              <h2>
                Make work
                <br />
                move forward.
              </h2>
              <p>Confident scale. Tight tracking. Clear hierarchy.</p>
            </div>
            <div>
              <span className="type-meta">GEIST VARIABLE / INTERFACE</span>
              <h3>Everything, moving forward.</h3>
              <p>A clear view of the work that keeps your business running.</p>
              <span className="eyebrow">
                METADATA / 11–12 PX / WIDE TRACKING
              </span>
              <div className="type-alphabet">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
                <br />
                0123456789 / → + %
              </div>
            </div>
          </div>
        </section>
        <section className="brand-section">
          <div className="brand-section-label">04 / INTERFACE LANGUAGE</div>
          <div className="brand-ui-grid">
            <div className="panel brand-ui-panel">
              <h3>Actions</h3>
              <div className="brand-button-row">
                <ButtonLink href="/dashboard" variant="dark">
                  Primary action
                </ButtonLink>
                <ButtonLink href="/workflows" variant="secondary">
                  Secondary action
                </ButtonLink>
              </div>
              <h3>Semantic status</h3>
              <div className="brand-badge-row">
                <Badge tone="success">Active</Badge>
                <Badge tone="warning">Needs review</Badge>
                <Badge>Draft</Badge>
                <Badge tone="danger">Rejected</Badge>
              </div>
              <h3>Form controls</h3>
              <label className="brand-control">
                Workflow name
                <input placeholder="Contract approval" />
              </label>
              <label className="brand-control">
                Department
                <select defaultValue="Operations">
                  <option>Operations</option>
                  <option>Finance</option>
                </select>
              </label>
            </div>
            <div className="panel brand-ui-panel">
              <h3>Icon treatment</h3>
              <div className="brand-icons">
                {(
                  [
                    "workflow",
                    "checks",
                    "zap",
                    "chart",
                    "users",
                    "plug",
                    "file",
                    "wallet",
                    "clock",
                    "shield",
                    "layers",
                    "grid",
                  ] as IconName[]
                ).map((n) => (
                  <span key={n}>
                    <Icon name={n} size={23} />
                  </span>
                ))}
              </div>
              <h3>Identity in the interface</h3>
              <div className="brand-avatar-row">
                <Avatar initials="AM" />
                <Avatar initials="JE" />
                <Avatar initials="SR" />
                <span>Initials instead of stock portraits.</span>
              </div>
              <h3>Spacing & geometry</h3>
              <p>
                4px base spacing. 6–10px controls and panel radii. 1px borders.
                A 12-column desktop grid. Strong alignment, generous section
                spacing, and restrained corners.
              </p>
            </div>
          </div>
        </section>
        <section className="brand-section">
          <div className="brand-section-label">05 / PRODUCT GRAPHICS</div>
          <div className="brand-ui-grid">
            <div className="feature-flow-wrap">
              <FlowPreview />
            </div>
            <div className="panel brand-chart-panel">
              <h3>A useful signal. A quiet grid.</h3>
              <p>
                Chart color communicates volume and progress. Labels explain the
                data without adding clutter.
              </p>
              <VolumeChart />
              <div className="brand-navigation">
                <Icon name="dashboard" />
                Overview
                <Icon name="right" />
                <span>Workflow activity</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
