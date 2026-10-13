import { volume, throughput } from "@/lib/data";
export function VolumeChart({
  compact = false,
  period = "28",
}: {
  compact?: boolean;
  period?: string;
}) {
  const values = period === "7" ? volume.slice(-7) : volume;
  return (
    <div className={`volume-chart ${compact ? "chart-compact" : ""}`}>
      <div className="chart-y">
        <span>120</span>
        <span>80</span>
        <span>40</span>
        <span>0</span>
      </div>
      <div className="chart-area">
        <div className="chart-grid">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="chart-bars">
          {values.map((v, i) => (
            <div className="chart-bar-group" key={i}>
              <span
                className="chart-bar"
                style={{ height: `${v / 1.2}%` }}
                title={`Day ${i + 1}: ${v} workflow runs`}
              >
                <span>{v}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="chart-x">
          {(period === "7"
            ? ["Sep 22", "Sep 24", "Sep 26", "Sep 28"]
            : ["Sep 01", "Sep 07", "Sep 14", "Sep 21", "Sep 28"]
          ).map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </div>
      <span className="sr-only">
        Fictional September workflow runs. Range {Math.min(...values)} to{" "}
        {Math.max(...values)} daily runs; {values.reduce((a, b) => a + b, 0)}{" "}
        total.
      </span>
    </div>
  );
}
export function LineChart({
  kind = "completion",
}: {
  kind?: "completion" | "success";
}) {
  const path =
    kind === "completion"
      ? "M0 25 L30 43 L60 35 L90 57 L120 52 L150 75 L180 62 L210 91 L240 89 L270 112 L300 100 L330 119 L360 111 L390 133 L420 125 L450 147 L480 136 L510 154 L540 151 L570 164 L600 160"
      : "M0 100 L30 90 L60 110 L90 64 L120 70 L150 50 L180 63 L210 40 L240 56 L270 42 L300 52 L330 34 L360 43 L390 31 L420 36 L450 24 L480 31 L510 20 L540 26 L570 15 L600 18";
  return (
    <div className="line-chart">
      <svg
        viewBox="0 0 600 200"
        role="img"
        aria-label={
          kind === "completion"
            ? "Demo median completion time declining from 6.8 to 4.2 hours over September."
            : "Demo success rate improving from 97.2 to 99.2 percent over September."
        }
      >
        <defs>
          <linearGradient id={`area-${kind}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#95bd72" stopOpacity=".25" />
            <stop offset="100%" stopColor="#95bd72" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 70, 120, 170].map((y) => (
          <line
            key={y}
            x1="0"
            x2="600"
            y1={y}
            y2={y}
            stroke="#e7ebe5"
            strokeDasharray="4 4"
          />
        ))}
        <path d={`${path} L600 200 L0 200 Z`} fill={`url(#area-${kind})`} />
        <path
          d={path}
          fill="none"
          stroke="#526f5f"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle
          cx="600"
          cy={kind === "completion" ? 160 : 18}
          r="5"
          fill="#526f5f"
        />
      </svg>
      <div className="chart-x">
        <span>Sep 01</span>
        <span>Sep 07</span>
        <span>Sep 14</span>
        <span>Sep 21</span>
        <span>Sep 28</span>
      </div>
    </div>
  );
}
export function DepartmentChart() {
  return (
    <div className="department-chart">
      {throughput.map((d) => (
        <div className="department-row" key={d.name}>
          <div>
            <span>{d.name}</span>
            <strong>{d.value}</strong>
          </div>
          <div className="bar-track">
            <span
              style={{
                width: `${(d.value / 544) * 100}%`,
                background: d.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
export function BottleneckChart() {
  return (
    <div className="bottleneck-chart">
      {[
        { name: "Submission", hours: 0.3 },
        { name: "Legal review", hours: 1.2 },
        { name: "Finance approval", hours: 2.4 },
        { name: "Handoff", hours: 0.3 },
      ].map((d, i) => (
        <div
          className={`bottleneck-row ${i === 2 ? "is-bottleneck" : ""}`}
          key={d.name}
        >
          <span>{d.name}</span>
          <div className="bar-track">
            <span style={{ width: `${(d.hours / 2.4) * 100}%` }} />
          </div>
          <strong>{d.hours}h</strong>
        </div>
      ))}
    </div>
  );
}
