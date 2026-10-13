"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useProduct } from "./provider";
import { Icon } from "../ui/icon";
import { Badge } from "../ui/primitives";
import { Dialog } from "../ui/dialog";
import type { Step } from "@/lib/data";
export function Builder() {
  const params = useSearchParams();
  const { workflows, workflowSteps, updateSteps, notify, setWorkflowStatus } =
    useProduct();
  const workflow =
    workflows.find((w) => w.id === params.get("workflow")) || workflows[0];
  const steps = workflowSteps[workflow.id] || [];
  const setSteps = (update: React.SetStateAction<Step[]>) =>
    updateSteps(workflow.id, update);
  const [selected, setSelected] = useState(steps[2]?.id || steps[0]?.id);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState<Step["type"]>("Action");
  const [error, setError] = useState("");
  const [running, setRunning] = useState(false);
  const [tested, setTested] = useState(false);
  const active = steps.find((s) => s.id === selected) || steps[2] || steps[0];
  const update = (patch: Partial<Step>) =>
    setSteps((prev) =>
      prev.map((s) => (s.id === active?.id ? { ...s, ...patch } : s)),
    );
  const add = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim().length < 3) {
      setError("Use at least 3 characters to describe this step.");
      return;
    }
    const step: Step = {
      id: crypto.randomUUID(),
      title: title.trim(),
      type,
      owner: type === "Action" ? "Automation" : "Alex Morgan",
      detail: "Describe what should happen at this step.",
      enabled: true,
    };
    setSteps((prev) => [...prev, step]);
    setSelected(step.id);
    setOpen(false);
    setTitle("");
    setError("");
    setTested(false);
    notify("Step added. Review its configuration in the inspector.");
  };
  const test = async () => {
    setRunning(true);
    setTested(false);
    await new Promise((r) => setTimeout(r, 1200));
    setRunning(false);
    setTested(true);
    notify(
      `Demo run completed. ${steps.filter((s) => s.enabled).length} enabled steps passed. No external services were called.`,
    );
  };
  return (
    <>
      <div className="builder-back">
        <Link href="/workflows">
          <Icon name="arrow" size={15} className="rotate-arrow" />
          All workflows
        </Link>
        <span>Workflow template · Local demo</span>
      </div>
      <div className="page-heading builder-page-heading">
        <div>
          <div className="heading-inline">
            <h1>{workflow.name}</h1>
            <Badge tone={workflow.status === "Active" ? "success" : "neutral"}>
              {workflow.status}
            </Badge>
          </div>
          <p>
            {steps.length} steps · {workflow.department} · Owned by{" "}
            {workflow.owner}
          </p>
        </div>
        <div className="heading-actions">
          <button
            className="button button-secondary"
            onClick={test}
            disabled={running}
          >
            <Icon name="play" size={16} />
            {running ? "Running test…" : "Test workflow"}
          </button>
          <button
            className="button button-dark"
            onClick={() => {
              setWorkflowStatus(
                workflow.id,
                workflow.status === "Active" ? "Paused" : "Active",
              );
            }}
          >
            <Icon
              name={workflow.status === "Active" ? "pause" : "play"}
              size={16}
            />
            {workflow.status === "Active" ? "Pause" : "Activate"}
          </button>
        </div>
      </div>
      <div className="builder-layout">
        <section className="builder-canvas" aria-label="Workflow steps">
          <div className="canvas-toolbar">
            <span>
              <Icon name="workflow" size={14} />
              Process canvas
            </span>
            <span>
              {tested ? (
                <>
                  <Icon name="check" size={14} />
                  Test passed
                </>
              ) : (
                "Select a step to configure"
              )}
            </span>
          </div>
          <div className={`workflow-nodes ${running ? "is-running" : ""}`}>
            {steps.map((s, i) => (
              <div className="builder-step" key={s.id}>
                {i > 0 && (
                  <div className="builder-connector">
                    <span />
                    <Icon name="down" size={13} />
                  </div>
                )}
                <button
                  className={`builder-node ${active?.id === s.id ? "node-selected" : ""} ${!s.enabled ? "node-disabled" : ""}`}
                  onClick={() => setSelected(s.id)}
                  aria-pressed={active?.id === s.id}
                >
                  <span
                    className={`node-icon ${s.type === "Trigger" ? "node-trigger" : ""}`}
                  >
                    <Icon
                      name={
                        s.type === "Trigger"
                          ? "file"
                          : s.type === "Approval"
                            ? "checks"
                            : "zap"
                      }
                      size={21}
                    />
                  </span>
                  <span>
                    <small>
                      {String(i + 1).padStart(2, "0")} / {s.type.toUpperCase()}
                    </small>
                    <strong>{s.title}</strong>
                    <em>{s.owner}</em>
                  </span>
                  <span className="node-state">
                    <Icon
                      name={
                        tested && s.enabled
                          ? "check"
                          : !s.enabled
                            ? "pause"
                            : "more"
                      }
                      size={16}
                    />
                  </span>
                </button>
              </div>
            ))}
            <div className="builder-connector">
              <span />
              <Icon name="down" size={13} />
            </div>
            <button className="add-step-button" onClick={() => setOpen(true)}>
              <Icon name="plus" size={17} />
              Add a step
            </button>
            <div className="canvas-end">
              <span />
              End of workflow
            </div>
          </div>
          <div className="canvas-footnote">
            <Icon name="shield" size={14} />
            Actions simulate a workflow. No data leaves this demo.
          </div>
        </section>
        <aside className="inspector">
          <div className="inspector-heading">
            <Icon name="settings" size={17} />
            <h2>Step configuration</h2>
          </div>
          {active ? (
            <div className="inspector-body">
              <div className="inspector-type">
                <span className="node-icon">
                  <Icon
                    name={
                      active.type === "Approval"
                        ? "checks"
                        : active.type === "Trigger"
                          ? "file"
                          : "zap"
                    }
                    size={24}
                  />
                </span>
                <Badge>{active.type}</Badge>
              </div>
              <label>
                Step name
                <input
                  value={active.title}
                  maxLength={70}
                  onChange={(e) => {
                    update({ title: e.target.value });
                    setTested(false);
                  }}
                  onBlur={() => {
                    if (!active.title.trim())
                      update({ title: "Untitled step" });
                  }}
                />
              </label>
              <label>
                Responsible owner
                <select
                  value={active.owner}
                  onChange={(e) => update({ owner: e.target.value })}
                >
                  {[
                    "Requester",
                    "Alex Morgan",
                    "Jordan Ellis",
                    "Sam Rivera",
                    "Taylor Brooks",
                    "Automation",
                  ].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </label>
              <label>
                Step instructions
                <textarea
                  rows={4}
                  maxLength={400}
                  value={active.detail}
                  onChange={(e) => update({ detail: e.target.value })}
                />
              </label>
              <div className="switch-row">
                <div>
                  <strong>Step enabled</strong>
                  <p>Include this step in test runs.</p>
                </div>
                <button
                  role="switch"
                  aria-checked={active.enabled}
                  aria-label="Enable selected step"
                  className={`switch ${active.enabled ? "switch-on" : ""}`}
                  onClick={() => {
                    update({ enabled: !active.enabled });
                    setTested(false);
                  }}
                >
                  <span />
                </button>
              </div>
              <div className="inspector-note">
                <Icon name="link" size={17} />
                <p>
                  Changes update the canvas immediately and stay in this demo
                  session.
                </p>
              </div>
              {active.type !== "Trigger" && (
                <button
                  className="text-button danger-text"
                  onClick={() => {
                    setSteps((prev) => prev.filter((s) => s.id !== active.id));
                    setSelected(steps[0].id);
                    setTested(false);
                    notify("Step removed from this workflow template.");
                  }}
                >
                  Remove step
                  <Icon name="x" size={14} />
                </button>
              )}
            </div>
          ) : (
            <div className="empty-state">
              <p>Select a step to see its configuration.</p>
            </div>
          )}
        </aside>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Add a workflow step"
      >
        <form className="dialog-body form-stack" onSubmit={add} noValidate>
          <label>
            Step name
            <input
              autoFocus
              value={title}
              maxLength={70}
              onChange={(e) => {
                setTitle(e.target.value);
                setError("");
              }}
              placeholder="e.g. Notify account owner"
              aria-invalid={!!error}
              aria-describedby={error ? "step-error" : undefined}
            />
          </label>
          {error && (
            <p className="field-error" id="step-error">
              {error}
            </p>
          )}
          <label>
            Step type
            <select
              value={type}
              onChange={(e) => setType(e.target.value as Step["type"])}
            >
              <option>Action</option>
              <option>Approval</option>
            </select>
          </label>
          <p className="form-help">
            Approval steps wait for a decision. Action steps simulate an
            automated handoff.
          </p>
          <button className="button button-dark">
            Add step
            <Icon name="plus" size={16} />
          </button>
        </form>
      </Dialog>
    </>
  );
}
