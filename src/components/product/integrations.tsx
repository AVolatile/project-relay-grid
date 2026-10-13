"use client";
import { useState } from "react";
import { Icon } from "../ui/icon";
import { Badge } from "../ui/primitives";
import { Dialog } from "../ui/dialog";
import { useProduct } from "./provider";
export const integrationData = [
  {
    name: "Slack",
    letter: "#",
    color: "#5b365b",
    type: "Communication",
    text: "Send a clear handoff to the team channel.",
  },
  {
    name: "Microsoft Teams",
    letter: "T",
    color: "#6264a7",
    type: "Communication",
    text: "Keep decisions close to your team’s conversations.",
  },
  {
    name: "Google Workspace",
    letter: "G",
    color: "#4285f4",
    type: "Productivity",
    text: "Connect documents to the work they support.",
  },
  {
    name: "HubSpot",
    letter: "H",
    color: "#ea784f",
    type: "CRM",
    text: "Carry context from an approved request into an account.",
  },
  {
    name: "Salesforce",
    letter: "S",
    color: "#279dcc",
    type: "CRM",
    text: "Keep the customer record aligned with operational work.",
  },
  {
    name: "Jira",
    letter: "J",
    color: "#2962d7",
    type: "Project management",
    text: "Turn a workflow handoff into a tracked issue.",
  },
  {
    name: "Zapier",
    letter: "Z",
    color: "#e86728",
    type: "Automation",
    text: "Explore connections beyond your core toolset.",
  },
];
export function Integrations() {
  const [selected, setSelected] = useState<string | null>(null);
  const [connected, setConnected] = useState<string[]>([]);
  const { notify } = useProduct();
  const item = integrationData.find((i) => i.name === selected);
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">YOUR TOOLS. ONE OPERATING LAYER.</div>
          <h1>Connect the work between tools.</h1>
          <p>
            Explore illustrative connections for the way your team already
            works.
          </p>
        </div>
        <Badge>Concept integrations</Badge>
      </div>
      <div className="integration-notice">
        <Icon name="help" />
        <p>
          These integrations are design concepts. Connecting one only changes
          this demo; it does not authorize or access a third-party service.
        </p>
      </div>
      <div className="integration-grid">
        {integrationData.map((i) => (
          <article className="panel integration-card" key={i.name}>
            <span className="integration-logo" style={{ color: i.color }}>
              {i.letter}
            </span>
            <small>{i.type}</small>
            <h2>{i.name}</h2>
            <p>{i.text}</p>
            <button
              className={`button ${connected.includes(i.name) ? "button-secondary" : "button-dark"}`}
              onClick={() => setSelected(i.name)}
            >
              {connected.includes(i.name)
                ? "Manage demo connection"
                : "Explore connection"}
              <Icon
                name={connected.includes(i.name) ? "settings" : "plus"}
                size={15}
              />
            </button>
          </article>
        ))}
      </div>
      <Dialog
        open={!!item}
        onClose={() => setSelected(null)}
        title={`${item?.name || ""} · Demo connection`}
      >
        <div className="dialog-body">
          <p>
            This concept connection would let a workflow send a handoff to{" "}
            {item?.name}. In this portfolio demo, no account, credentials, or
            external data are used.
          </p>
          <div className="connection-scope">
            <Icon name="shield" />
            <span>
              Local simulation only
              <br />
              <small>No third-party authorization</small>
            </span>
          </div>
          <button
            className="button button-dark full-width"
            onClick={() => {
              if (item) {
                const exists = connected.includes(item.name);
                setConnected((prev) =>
                  exists
                    ? prev.filter((n) => n !== item.name)
                    : [...prev, item.name],
                );
                notify(
                  `${item.name} demo connection ${exists ? "removed" : "enabled"}. No external service was contacted.`,
                );
                setSelected(null);
              }
            }}
          >
            {item && connected.includes(item.name)
              ? "Remove demo connection"
              : "Enable demo connection"}
            <Icon name="check" />
          </button>
        </div>
      </Dialog>
    </>
  );
}
