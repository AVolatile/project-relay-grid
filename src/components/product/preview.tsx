import { Logo } from "../ui/brand";
import { Icon } from "../ui/icon";
import { VolumeChart } from "./charts";
import { Avatar, Badge } from "../ui/primitives";
import { workflows } from "@/lib/data";
export function ProductPreview({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  return (
    <div
      className={`product-preview ${variant === "compact" ? "preview-compact" : ""}`}
    >
      <aside className="preview-sidebar">
        <Logo />
        <div className="preview-workspace">
          <span>M</span>Meridian workspace
          <Icon name="chevron" size={12} />
        </div>
        <small>WORKSPACE</small>
        {[
          { icon: "dashboard" as const, name: "Overview" },
          { icon: "workflow" as const, name: "Workflows" },
          { icon: "checks" as const, name: "Approvals" },
          { icon: "chart" as const, name: "Analytics" },
          { icon: "plug" as const, name: "Integrations" },
        ].map((n, i) => (
          <div
            className={`preview-nav ${i === 0 ? "active" : ""}`}
            key={n.name}
          >
            <Icon name={n.icon} size={14} />
            {n.name}
            {i === 2 && <span>4</span>}
          </div>
        ))}
        <div className="preview-profile">
          <Avatar initials="AM" size="small" />
          <span>
            Alex Morgan<small>Workspace admin</small>
          </span>
        </div>
      </aside>
      <div className="preview-body">
        <div className="preview-topbar">
          <span>
            Workspace <Icon name="right" size={11} />
            Overview
          </span>
          <span className="preview-live">
            <i />
            Demo workspace
          </span>
        </div>
        <div className="preview-content">
          <div className="preview-heading">
            <div>
              <small>YOUR OPERATING PICTURE</small>
              <h3>Everything, moving forward.</h3>
              <p>A clear view of the work that keeps your business running.</p>
            </div>
            <span className="preview-period">
              Last 28 days
              <Icon name="chevron" size={11} />
            </span>
          </div>
          <div className="preview-metrics">
            {[
              { n: "Active workflows", v: "4", d: "Across 4 departments" },
              { n: "Automation runs", v: "1,704", d: "↗ 18.6% this period" },
              { n: "Pending approvals", v: "4", d: "Ready for your review" },
              { n: "Avg. completion", v: "4.2 hrs", d: "↘ 2.6 hrs faster" },
            ].map((m) => (
              <div key={m.n}>
                <span>{m.n}</span>
                <strong>{m.v}</strong>
                <small>{m.d}</small>
              </div>
            ))}
          </div>
          <div className="preview-panels">
            <div className="preview-chart">
              <div className="preview-panel-head">
                <strong>Workflow activity</strong>
                <span>
                  <i />
                  Automated runs
                </span>
              </div>
              <VolumeChart compact />
            </div>
            <div className="preview-approvals">
              <div className="preview-panel-head">
                <strong>Approval queue</strong>
                <span>4 pending</span>
              </div>
              {[
                "Vendor contract",
                "Software purchase",
                "Discount exception",
              ].map((n, i) => (
                <div className="preview-approval" key={n}>
                  <span className="workflow-small-icon">
                    <Icon name="file" size={12} />
                  </span>
                  <span>
                    <strong>{n}</strong>
                    <small>
                      {
                        ["Operations", "People Operations", "Customer Success"][
                          i
                        ]
                      }
                    </small>
                  </span>
                  <Badge tone="warning">Review</Badge>
                </div>
              ))}
              <div className="preview-all">
                Open approval queue <Icon name="arrow" size={12} />
              </div>
            </div>
          </div>
          <div className="preview-table">
            <div className="preview-panel-head">
              <strong>Workflow performance</strong>
              <span>
                View all <Icon name="arrow" size={11} />
              </span>
            </div>
            <div className="preview-table-head">
              <span>WORKFLOW</span>
              <span>OWNER</span>
              <span>RUNS</span>
              <span>STATUS</span>
            </div>
            {workflows.slice(0, 3).map((w) => (
              <div className="preview-table-row" key={w.id}>
                <span>
                  <Icon name="workflow" size={13} />
                  {w.name}
                </span>
                <span>
                  <Avatar initials={w.initials} size="small" />
                  {w.owner}
                </span>
                <span>{w.runs}</span>
                <span>
                  <Badge tone="success">Active</Badge>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export function FlowPreview({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flow-preview ${dark ? "flow-preview-dark" : ""}`}>
      <div className="flow-preview-heading">
        <span>CONTRACT APPROVAL</span>
        <Badge tone="success">Active</Badge>
      </div>
      {[
        {
          title: "Contract submitted",
          icon: "file" as const,
          meta: "Trigger · Request received",
        },
        {
          title: "Legal review",
          icon: "shield" as const,
          meta: "Approval · Jordan Ellis",
        },
        {
          title: "Finance approval",
          icon: "wallet" as const,
          meta: "Approval · Alex Morgan",
        },
        {
          title: "Create CRM record",
          icon: "zap" as const,
          meta: "Action · Automated",
        },
        {
          title: "Notify onboarding team",
          icon: "users" as const,
          meta: "Action · Automated",
        },
      ].map((s, i) => (
        <div className="flow-preview-step" key={s.title}>
          {i > 0 && (
            <div className="flow-connector">
              <Icon name="down" size={13} />
            </div>
          )}
          <div className="flow-node">
            <span className={`node-icon ${i === 0 ? "node-trigger" : ""}`}>
              <Icon name={s.icon} size={17} />
            </span>
            <span>
              <strong>{s.title}</strong>
              <small>{s.meta}</small>
            </span>
            <Icon name="check" size={14} />
          </div>
        </div>
      ))}
      <div className="flow-end">
        <span />
        Workflow complete
      </div>
    </div>
  );
}
