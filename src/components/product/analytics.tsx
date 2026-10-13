"use client";
import { useState } from "react";
import { Icon } from "../ui/icon";
import { Badge } from "../ui/primitives";
import {
  VolumeChart,
  LineChart,
  DepartmentChart,
  BottleneckChart,
} from "./charts";
import { useProduct } from "./provider";
import { volume } from "@/lib/data";
export function Analytics() {
  const [period, setPeriod] = useState("28");
  const { notify } = useProduct();
  const exportReport = () => {
    const values = period === "7" ? volume.slice(-7) : volume;
    const csv = [
      "day,workflow_runs",
      ...values.map(
        (v, i) =>
          `2026-09-${String((period === "7" ? 22 : 1) + i).padStart(2, "0")},${v}`,
      ),
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = `relaygrid-demo-${period}-day-activity.csv`;
    link.click();
    URL.revokeObjectURL(url);
    notify("Fictional workflow activity report exported as CSV.");
  };
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">WORKFLOW INTELLIGENCE</div>
          <h1>See the system. Improve the flow.</h1>
          <p>
            Understand what moves your business forward—and what holds it back.
          </p>
        </div>
        <div className="heading-actions">
          <label className="select-control">
            <select
              aria-label="Analytics reporting period"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="28">Last 28 days</option>
              <option value="7">Last 7 days</option>
            </select>
          </label>
          <button className="button button-secondary" onClick={exportReport}>
            <Icon name="download" size={16} />
            Export report
          </button>
        </div>
      </div>
      <div className="analytics-insight">
        <span className="insight-symbol">
          <Icon name="zap" size={24} />
        </span>
        <div>
          <span className="page-eyebrow">ONE CHANGE WORTH MAKING</span>
          <h3>Finance review is your biggest opportunity.</h3>
          <p>
            It accounts for 57% of contract approval time. Start by clarifying
            decision thresholds.
          </p>
        </div>
        <a className="text-link" href="/workflows/builder/">
          Review workflow
          <Icon name="up" size={16} />
        </a>
      </div>
      <div className="metrics-grid">
        {[
          {
            label: "Workflow volume",
            value: period === "7" ? "536" : "1,704",
            note: "+18.6% from previous period",
          },
          {
            label: "Median completion",
            value: "4.2 hrs",
            note: "↓ 38.2% from 6.8 hrs",
          },
          {
            label: "Automation success",
            value: "99.2%",
            note: "+2.0 percentage points",
          },
          {
            label: "Estimated time saved",
            value: period === "7" ? "36 hrs" : "114 hrs",
            note: "Illustrative estimate · Demo",
          },
        ].map((m) => (
          <div className="metric-card" key={m.label}>
            <div className="metric-label">
              {m.label}
              <Icon name="chart" size={16} />
            </div>
            <div className="metric-value">{m.value}</div>
            <div className="metric-note">
              <span className="tiny-dot" />
              {m.note}
            </div>
          </div>
        ))}
      </div>
      <div className="analytics-grid">
        <section className="panel analytics-volume">
          <div className="panel-heading">
            <div>
              <h2>Workflow volume</h2>
              <p>Completed and in-progress runs over time.</p>
            </div>
            <Badge tone="success">Healthy flow</Badge>
          </div>
          <VolumeChart period={period} />
        </section>
        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>Median completion time</h2>
              <p>Hours from submission to completion.</p>
            </div>
            <span className="chart-stat">
              4.2<small>hrs</small>
            </span>
          </div>
          <LineChart />
        </section>
        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>Automation success rate</h2>
              <p>Successful runs as a share of total runs.</p>
            </div>
            <span className="chart-stat">
              99.2<small>%</small>
            </span>
          </div>
          <LineChart kind="success" />
        </section>
        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>Department throughput</h2>
              <p>Completed runs by team · September snapshot</p>
            </div>
          </div>
          <DepartmentChart />
        </section>
        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>Time in each stage</h2>
              <p>Contract approval · September snapshot</p>
            </div>
            <Badge tone="warning">Review needed</Badge>
          </div>
          <BottleneckChart />
          <p className="chart-caption">
            Each stage is measured separately. Total average: 4.2 hours.
          </p>
        </section>
      </div>
      <p className="data-note">
        <Icon name="help" size={14} />
        All metrics are fictional examples. Time saved assumes 4 minutes of
        manual work per automation run.
      </p>
    </>
  );
}
