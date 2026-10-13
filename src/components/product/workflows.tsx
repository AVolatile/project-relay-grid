"use client";
import Link from "next/link";
import { useState } from "react";
import { useProduct } from "./provider";
import { departments, type Department } from "@/lib/data";
import { Icon } from "../ui/icon";
import { Avatar, Badge } from "../ui/primitives";
import { Dialog } from "../ui/dialog";
export function Workflows() {
  const { workflows, addWorkflow, setWorkflowStatus } = useProduct();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All workflows");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState<Department>("Operations");
  const [error, setError] = useState("");
  const filtered = workflows.filter(
    (w) =>
      `${w.name} ${w.owner} ${w.department}`
        .toLowerCase()
        .includes(query.toLowerCase()) &&
      (filter === "All workflows" || w.status === filter),
  );
  const create = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 3) {
      setError("Give your workflow a name with at least 3 characters.");
      return;
    }
    if (
      workflows.some((w) => w.name.toLowerCase() === name.trim().toLowerCase())
    ) {
      setError(
        "A workflow with this name already exists. Choose a distinct name.",
      );
      return;
    }
    addWorkflow({
      id: crypto.randomUUID(),
      name: name.trim(),
      description: "A new repeatable process for your team.",
      owner: "Alex Morgan",
      initials: "AM",
      department,
      runs: 0,
      status: "Draft",
      updated: "Just now",
      completion: "—",
      success: 0,
    });
    setOpen(false);
    setName("");
    setError("");
  };
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">REPEATABLE BY DESIGN</div>
          <h1>Good work. On repeat.</h1>
          <p>Build, manage, and improve the processes your team depends on.</p>
        </div>
        <button className="button button-dark" onClick={() => setOpen(true)}>
          <Icon name="plus" size={17} />
          New workflow
        </button>
      </div>
      <div className="workflow-summary">
        <span>
          <strong>
            {workflows.filter((w) => w.status === "Active").length}
          </strong>{" "}
          active workflows
        </span>
        <span>
          <strong>4</strong> departments connected
        </span>
        <span>
          <strong>
            {workflows.reduce((a, w) => a + w.runs, 0).toLocaleString()}
          </strong>{" "}
          runs this month
        </span>
      </div>
      <section className="panel workflow-panel">
        <div className="table-toolbar">
          <div className="tabs" aria-label="Filter workflows">
            {["All workflows", "Active", "Draft", "Paused"].map((t) => (
              <button
                key={t}
                className={filter === t ? "selected" : ""}
                onClick={() => setFilter(t)}
                aria-pressed={filter === t}
              >
                {t}
              </button>
            ))}
          </div>
          <label className="search-field">
            <Icon name="search" size={16} />
            <input
              aria-label="Search workflows"
              placeholder="Search workflows…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
        <div className="workflow-table">
          <div className="workflow-table-head">
            <span>WORKFLOW</span>
            <span>OWNER</span>
            <span>DEPARTMENT</span>
            <span>RUNS</span>
            <span>STATUS</span>
            <span>UPDATED</span>
          </div>
          {filtered.map((w) => (
            <div className="workflow-table-row" key={w.id}>
              <Link
                className="workflow-title"
                href={`/workflows/builder/?workflow=${w.id}`}
              >
                <span className="workflow-large-icon">
                  <Icon name="workflow" />
                </span>
                <span>
                  <strong>{w.name}</strong>
                  <small>{w.description}</small>
                </span>
              </Link>
              <span className="workflow-owner">
                <Avatar initials={w.initials} size="small" />
                {w.owner}
              </span>
              <span className="table-department">{w.department}</span>
              <span className="table-runs">
                {w.runs}
                <small> runs</small>
              </span>
              <button
                className="status-toggle"
                aria-label={`${w.status === "Active" ? "Pause" : "Activate"} ${w.name}`}
                onClick={() =>
                  setWorkflowStatus(
                    w.id,
                    w.status === "Active" ? "Paused" : "Active",
                  )
                }
              >
                <Badge tone={w.status === "Active" ? "success" : "neutral"}>
                  {w.status}
                </Badge>
              </button>
              <span className="table-updated">{w.updated}</span>
            </div>
          ))}
        </div>
        {!filtered.length && (
          <div className="empty-state">
            <Icon name="search" size={30} />
            <h3>No workflows match your search.</h3>
            <p>Try a different name, owner, or status.</p>
            <button
              className="button button-secondary"
              onClick={() => {
                setQuery("");
                setFilter("All workflows");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
        <div className="table-footer">
          {filtered.length} of {workflows.length} workflows
          <span>Click a workflow to explore its steps.</span>
        </div>
      </section>
      <div className="template-banner">
        <span className="workflow-large-icon">
          <Icon name="layers" size={24} />
        </span>
        <div>
          <h3>A better starting point.</h3>
          <p>
            Explore an end-to-end contract approval template, then make it your
            own.
          </p>
        </div>
        <Link className="button button-secondary" href="/workflows/builder/">
          Open template
          <Icon name="arrow" size={16} />
        </Link>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Create a workflow"
      >
        <form className="dialog-body form-stack" onSubmit={create} noValidate>
          <p>
            Give your process a clear name and a home. Your workflow starts as a
            draft.
          </p>
          <label>
            Workflow name
            <input
              value={name}
              maxLength={70}
              autoFocus
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              placeholder="e.g. Equipment request"
              aria-invalid={!!error}
              aria-describedby={error ? "workflow-error" : undefined}
            />
          </label>
          {error && (
            <p id="workflow-error" className="field-error">
              {error}
            </p>
          )}
          <label>
            Department
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value as Department)}
            >
              {departments.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </label>
          <div className="form-actions">
            <button
              type="button"
              className="button button-secondary"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button className="button button-dark">
              Create workflow
              <Icon name="plus" size={16} />
            </button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
