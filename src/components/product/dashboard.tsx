"use client";
import Link from "next/link";
import { useState } from "react";
import { useProduct } from "./provider";
import { Icon } from "../ui/icon";
import { Avatar, Badge } from "../ui/primitives";
import { VolumeChart, DepartmentChart, BottleneckChart } from "./charts";
import { activity } from "@/lib/data";
export function Dashboard() {
  const { workflows, approvals, notify } = useProduct();
  const [period, setPeriod] = useState("28");
  const pending = approvals.filter((a) => a.status === "Pending");
  const metrics = [
    {
      name: "Active workflows",
      value: workflows.filter((w) => w.status === "Active").length,
      change: "Across 4 departments",
      icon: "workflow" as const,
    },
    {
      name: "Automation runs",
      value: period === "7" ? "536" : "1,704",
      change: "+18.6% vs. previous period",
      icon: "zap" as const,
    },
    {
      name: "Pending approvals",
      value: pending.length,
      change: "Your team’s next decisions",
      icon: "checks" as const,
    },
    {
      name: "Avg. completion time",
      value: "4.2",
      unit: "hrs",
      change: "2.6 hrs faster this month",
      icon: "clock" as const,
    },
  ];
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">YOUR OPERATING PICTURE</div>
          <h1>Everything, moving forward.</h1>
          <p>A clear view of the work that keeps your business running.</p>
        </div>
        <label className="select-control">
          <Icon name="clock" size={16} />
          <select
            aria-label="Dashboard reporting period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="28">Last 28 days</option>
            <option value="7">Last 7 days</option>
          </select>
        </label>
      </div>
      <div className="metrics-grid">
        {metrics.map((m) => (
          <div className="metric-card" key={m.name}>
            <div className="metric-label">
              {m.name}
              <Icon name={m.icon} size={17} />
            </div>
            <div className="metric-value">
              {m.value}
              <span>{m.unit}</span>
            </div>
            <div className="metric-note">
              <span className="tiny-dot" />
              {m.change}
            </div>
          </div>
        ))}
      </div>
      <div className="dashboard-grid">
        <section className="panel volume-panel">
          <div className="panel-heading">
            <div>
              <h2>Workflow activity</h2>
              <p>Work moving through your operating layer.</p>
            </div>
            <span className="chart-legend">
              <i />
              Automated
              <i className="muted" />
              Manual
            </span>
          </div>
          <VolumeChart period={period} />
        </section>
        <section className="panel attention-panel">
          <div className="panel-heading">
            <h2>Needs your attention</h2>
            <span className="count-circle">{pending.length}</span>
          </div>
          {pending.length ? (
            <>
              <div className="attention-icon">
                <Icon name="checks" size={26} />
              </div>
              <h3>
                {pending.length} decisions.
                <br />A clearer path forward.
              </h3>
              <p>
                Review requests with the context you need to keep work moving.
              </p>
              <Link href="/approvals" className="button button-dark">
                Open approval queue
                <Icon name="arrow" size={16} />
              </Link>
            </>
          ) : (
            <>
              <div className="attention-icon">
                <Icon name="check" size={26} />
              </div>
              <h3>You’re all caught up.</h3>
              <p>Every request has a decision. Your team can keep moving.</p>
              <Link href="/workflows" className="button button-dark">
                Explore workflows
                <Icon name="arrow" size={16} />
              </Link>
            </>
          )}
        </section>
        <section className="panel performance-panel">
          <div className="panel-heading">
            <h2>Workflow performance</h2>
            <Link href="/workflows" className="text-link">
              View all
              <Icon name="arrow" size={14} />
            </Link>
          </div>
          <div className="performance-list">
            {workflows
              .filter((w) => w.status === "Active")
              .slice(0, 4)
              .map((w) => (
                <Link
                  key={w.id}
                  href={`/workflows/builder/?workflow=${w.id}`}
                  className="performance-row"
                >
                  <span className="workflow-small-icon">
                    <Icon name="workflow" size={16} />
                  </span>
                  <span className="performance-name">
                    <strong>{w.name}</strong>
                    <small>{w.department}</small>
                  </span>
                  <span className="performance-runs">
                    {w.runs}
                    <small>runs</small>
                  </span>
                  <span className="performance-success">
                    {w.success}%<small>success rate</small>
                  </span>
                  <Icon name="right" size={15} />
                </Link>
              ))}
          </div>
        </section>
        <section className="panel">
          <div className="panel-heading">
            <h2>Department throughput</h2>
            <Icon name="chart" size={17} />
          </div>
          <DepartmentChart />
        </section>
        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>Where work waits</h2>
              <p>Contract approval · avg. time in stage</p>
            </div>
            <Badge tone="warning">Bottleneck</Badge>
          </div>
          <BottleneckChart />
          <div className="panel-insight">
            <Icon name="zap" size={15} />
            <span>Finance approval accounts for 57% of cycle time.</span>
            <Link href="/workflows/builder/">
              Review
              <Icon name="up" size={13} />
            </Link>
          </div>
        </section>
        <section className="panel">
          <div className="panel-heading">
            <h2>Recent activity</h2>
            <button
              className="icon-button"
              aria-label="About activity data"
              onClick={() =>
                notify(
                  "Activity is a fictional snapshot of the Meridian demo workspace.",
                )
              }
            >
              <Icon name="more" />
            </button>
          </div>
          <div className="activity-list">
            {activity.map((a) => (
              <div className="activity-row" key={a.name}>
                <Avatar initials={a.initials} size="small" />
                <div>
                  <strong>{a.name}</strong>
                  <p>{a.text}</p>
                </div>
                <time>{a.time}</time>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
