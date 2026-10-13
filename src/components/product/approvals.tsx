"use client";
import { useState } from "react";
import { useProduct } from "./provider";
import { Icon } from "../ui/icon";
import { Avatar, Badge } from "../ui/primitives";
import { Dialog } from "../ui/dialog";
import { money, type ApprovalStatus } from "@/lib/data";
export function Approvals() {
  const { approvals, updateApproval } = useProduct();
  const [filter, setFilter] = useState("Pending");
  const [selected, setSelected] = useState<string | null>(null);
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const approval = approvals.find((a) => a.id === selected);
  const filtered = approvals.filter(
    (a) => filter === "All requests" || a.status === filter,
  );
  const decide = (status: ApprovalStatus) => {
    if (status !== "Approved" && reason.trim().length < 8) {
      setError(
        "Add a note of at least 8 characters so the requester knows what to do next.",
      );
      return;
    }
    if (approval) {
      updateApproval(approval.id, status, reason.trim());
      setSelected(null);
      setReason("");
      setError("");
    }
  };
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="page-eyebrow">CONTEXT FOR EVERY DECISION</div>
          <h1>Keep good work moving.</h1>
          <p>
            One queue. Clear ownership. Everything you need to make the call.
          </p>
        </div>
        <Badge tone="warning">
          {approvals.filter((a) => a.status === "Pending").length} awaiting a
          decision
        </Badge>
      </div>
      <section className="panel">
        <div className="table-toolbar">
          <div className="tabs">
            {[
              "Pending",
              "Approved",
              "Changes requested",
              "Rejected",
              "All requests",
            ].map((t) => (
              <button
                key={t}
                className={filter === t ? "selected" : ""}
                aria-pressed={filter === t}
                onClick={() => setFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="approval-table">
          <div className="approval-table-head">
            <span>REQUEST</span>
            <span>REQUESTER</span>
            <span>AMOUNT</span>
            <span>SUBMITTED</span>
            <span>STATUS</span>
          </div>
          {filtered.map((a) => (
            <button
              className="approval-table-row"
              key={a.id}
              onClick={() => {
                setSelected(a.id);
                setReason("");
                setError("");
              }}
            >
              <span className="approval-request">
                <span className="workflow-large-icon">
                  <Icon name="file" />
                </span>
                <span>
                  <strong>{a.title}</strong>
                  <small>
                    {a.id} · {a.department}
                  </small>
                </span>
              </span>
              <span className="approval-person">
                <Avatar initials={a.initials} size="small" />
                {a.requester}
              </span>
              <strong className="approval-amount">{money(a.amount)}</strong>
              <span className="approval-time">{a.submitted}</span>
              <Badge
                tone={
                  a.status === "Pending"
                    ? "warning"
                    : a.status === "Approved"
                      ? "success"
                      : a.status === "Rejected"
                        ? "danger"
                        : "neutral"
                }
              >
                {a.status}
              </Badge>
            </button>
          ))}
        </div>
        {!filtered.length && (
          <div className="empty-state">
            <span className="attention-icon">
              <Icon name="check" size={28} />
            </span>
            <h3>
              {filter === "Pending"
                ? "You’re all caught up."
                : "No requests in this view."}
            </h3>
            <p>
              {filter === "Pending"
                ? "Every request has a decision. Your team can move to the next step."
                : "Requests will appear here after a decision is made."}
            </p>
            <button
              className="button button-secondary"
              onClick={() => setFilter("All requests")}
            >
              View all requests
            </button>
          </div>
        )}
        <div className="table-footer">
          {filtered.length} requests
          <span>All amounts and people are fictional demo data.</span>
        </div>
      </section>
      <div className="approval-guidance">
        <Icon name="shield" size={21} />
        <div>
          <h3>A decision should leave a clear trail.</h3>
          <p>
            Approvals record a status. Requests for changes and rejections
            require a note for the requester.
          </p>
        </div>
      </div>
      <Dialog
        open={!!approval}
        onClose={() => setSelected(null)}
        title={approval?.title || "Request details"}
        drawer
      >
        {approval && (
          <div className="dialog-body approval-detail">
            <div className="approval-detail-id">
              <span>{approval.id}</span>
              <Badge
                tone={
                  approval.status === "Pending"
                    ? "warning"
                    : approval.status === "Approved"
                      ? "success"
                      : "neutral"
                }
              >
                {approval.status}
              </Badge>
            </div>
            <div className="approval-detail-amount">
              {money(approval.amount)}
              <small>Requested amount · USD</small>
            </div>
            <dl>
              <div>
                <dt>Requester</dt>
                <dd>
                  <Avatar initials={approval.initials} size="small" />
                  {approval.requester}
                </dd>
              </div>
              <div>
                <dt>Department</dt>
                <dd>{approval.department}</dd>
              </div>
              <div>
                <dt>Submitted</dt>
                <dd>{approval.submitted}</dd>
              </div>
              <div>
                <dt>Current stage</dt>
                <dd>Finance review</dd>
              </div>
            </dl>
            <h3>Request context</h3>
            <p className="request-context">{approval.detail}</p>
            <div className="review-trail">
              <Icon name="check" size={15} />
              <span>Legal review complete · Budget owner confirmed</span>
            </div>
            {approval.status === "Pending" ? (
              <>
                <label className="decision-note">
                  Decision note
                  <textarea
                    value={reason}
                    rows={4}
                    maxLength={500}
                    onChange={(e) => {
                      setReason(e.target.value);
                      setError("");
                    }}
                    placeholder="Give the requester a clear next step…"
                    aria-invalid={!!error}
                    aria-describedby={
                      error ? "decision-error" : "decision-help"
                    }
                  />
                </label>
                <p id="decision-help" className="form-help">
                  Required when requesting changes or rejecting.
                </p>
                {error && (
                  <p id="decision-error" className="field-error">
                    {error}
                  </p>
                )}
                <button
                  className="button button-dark full-width"
                  onClick={() => decide("Approved")}
                >
                  <Icon name="check" />
                  Approve request
                </button>
                <div className="decision-actions">
                  <button
                    className="button button-secondary"
                    onClick={() => decide("Changes requested")}
                  >
                    Request changes
                  </button>
                  <button
                    className="button button-secondary danger-text"
                    onClick={() => decide("Rejected")}
                  >
                    Reject
                  </button>
                </div>
              </>
            ) : (
              <div className="resolved-note">
                <Icon name="check" />
                <p>
                  This request has been resolved. Its decision is visible in the
                  queue.
                </p>
              </div>
            )}
          </div>
        )}
      </Dialog>
    </>
  );
}
