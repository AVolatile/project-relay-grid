"use client";
import Link from "next/link";
import { useState } from "react";
import { Logo, Symbol } from "../ui/brand";
import { Icon } from "../ui/icon";
import { ButtonLink, Eyebrow } from "../ui/primitives";
import { departments, useCases } from "@/lib/data";
export function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);
  return (
    <div className="entry-layout">
      <aside className="entry-brand">
        <Logo light />
        <div>
          <Eyebrow light>YOUR WORK. A CLEARER WAY FORWARD.</Eyebrow>
          <h1>
            Less friction.
            <br />
            <span>More forward.</span>
          </h1>
          <p>
            One operating layer for the teams that keep your business moving.
          </p>
          <div className="entry-route" aria-hidden="true">
            <span>
              <Icon name="file" size={26} />
            </span>
            <i />
            <span>
              <Icon name="checks" size={26} />
            </span>
            <i />
            <Symbol />
          </div>
        </div>
        <span className="entry-disclaimer">
          RelayGrid / Self-initiated concept project
        </span>
      </aside>
      <main id="main" className="entry-form-side">
        <Link className="entry-back" href="/">
          <Icon name="arrow" size={15} className="rotate-arrow" />
          Back to RelayGrid
        </Link>
        <div className="entry-form-wrap">
          <span className="page-eyebrow">WELCOME TO RELAYGRID</span>
          <h2>Your workspace awaits.</h2>
          <p>
            This is a fictional login experience. Explore the product without an
            account.
          </p>
          {ready ? (
            <div className="login-ready" role="status">
              <span className="attention-icon">
                <Icon name="check" size={25} />
              </span>
              <h3>You’re ready to explore.</h3>
              <p>
                We’ll open the fictional Meridian workspace. No account was
                created.
              </p>
              <ButtonLink href="/dashboard" variant="dark">
                Enter demo workspace
              </ButtonLink>
            </div>
          ) : (
            <>
              <form
                className="form-stack"
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    setError(
                      "Enter a valid email address, or use the demo entry below.",
                    );
                    return;
                  }
                  setReady(true);
                }}
              >
                <label>
                  Work email
                  <input
                    type="email"
                    autoComplete="off"
                    value={email}
                    placeholder="alex@example.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    aria-invalid={!!error}
                    aria-describedby={error ? "login-error" : "login-help"}
                  />
                </label>
                {error && (
                  <p id="login-error" className="field-error">
                    {error}
                  </p>
                )}
                <p id="login-help" className="form-help">
                  Used only to demonstrate validation. Nothing is sent or
                  stored.
                </p>
                <button className="button button-dark full-width">
                  Continue to demo
                  <Icon name="arrow" size={17} />
                </button>
              </form>
              <div className="entry-divider">
                <span />
                or explore directly
                <span />
              </div>
              <ButtonLink
                href="/dashboard"
                variant="secondary"
                className="full-width"
              >
                Open demo workspace
              </ButtonLink>
              <p className="entry-signup">
                First time here?{" "}
                <Link href="/onboarding">Explore workspace setup</Link>
              </p>
            </>
          )}
          <div className="entry-privacy">
            <Icon name="shield" size={16} />
            No authentication or external services.
          </div>
        </div>
      </main>
    </div>
  );
}
export function Onboarding() {
  const [step, setStep] = useState(0);
  const [company, setCompany] = useState("");
  const [size, setSize] = useState("51–200 people");
  const [selected, setSelected] = useState<string[]>(["Operations"]);
  const [template, setTemplate] = useState("Vendor onboarding");
  const [invite, setInvite] = useState("");
  const [error, setError] = useState("");
  const labels = [
    "Welcome",
    "Company",
    "Departments",
    "Template",
    "Team",
    "Ready",
  ];
  const next = () => {
    if (step === 1 && company.trim().length < 2) {
      setError("Enter a company name with at least 2 characters.");
      return;
    }
    if (step === 2 && !selected.length) {
      setError("Choose at least one department for your workspace.");
      return;
    }
    if (
      step === 4 &&
      invite.trim() &&
      !invite
        .split(",")
        .every((e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim()))
    ) {
      setError("Use valid email addresses, separated by commas.");
      return;
    }
    setError("");
    setStep((s) => s + 1);
  };
  return (
    <main id="main" className="onboarding-page">
      <header>
        <Logo />
        <Link href="/">
          Back to site
          <Icon name="up" size={15} />
        </Link>
      </header>
      <div className="onboarding-progress" aria-label={`Step ${step + 1} of 6`}>
        {labels.map((l, i) => (
          <div
            key={l}
            className={`${i === step ? "current" : ""} ${i < step ? "complete" : ""}`}
          >
            <span>{i < step ? <Icon name="check" size={13} /> : i + 1}</span>
            <small>{l}</small>
          </div>
        ))}
      </div>
      <section className="onboarding-card">
        <div className="page-eyebrow">
          {String(step + 1).padStart(2, "0")} / YOUR NEXT OPERATING CHAPTER
        </div>
        {step === 0 ? (
          <>
            <div className="onboarding-symbol">
              <Symbol />
            </div>
            <h1>
              A better way to work
              <br />
              starts with a little structure.
            </h1>
            <p>
              Let’s set up a fictional workspace around the work your team
              repeats. This guided demo takes about a minute.
            </p>
            <div className="onboarding-benefits">
              <span>
                <Icon name="workflow" />
                Start with a proven process
              </span>
              <span>
                <Icon name="users" />
                Give your teams a shared view
              </span>
              <span>
                <Icon name="chart" />
                See work move from day one
              </span>
            </div>
          </>
        ) : step === 1 ? (
          <>
            <h1>Give your workspace a home.</h1>
            <p>Use a fictional company name to make the demo your own.</p>
            <div className="form-stack">
              <label>
                Company name
                <input
                  autoFocus
                  value={company}
                  maxLength={60}
                  onChange={(e) => {
                    setCompany(e.target.value);
                    setError("");
                  }}
                  placeholder="e.g. Meridian Labs"
                  aria-invalid={!!error}
                  aria-describedby={error ? "onboarding-error" : undefined}
                />
              </label>
              <label>
                Team size
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                  {[
                    "20–50 people",
                    "51–200 people",
                    "201–500 people",
                    "500+ people",
                  ].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
            </div>
          </>
        ) : step === 2 ? (
          <>
            <h1>Who keeps things moving?</h1>
            <p>Choose the departments that will share this operating layer.</p>
            <div className="department-options">
              {departments.map((d, i) => (
                <button
                  key={d}
                  className={selected.includes(d) ? "chosen" : ""}
                  aria-pressed={selected.includes(d)}
                  onClick={() => {
                    setSelected((prev) =>
                      prev.includes(d)
                        ? prev.filter((x) => x !== d)
                        : [...prev, d],
                    );
                    setError("");
                  }}
                >
                  <Icon name={useCases[i].icon} size={24} />
                  <strong>{d}</strong>
                  <span>
                    {selected.includes(d) ? (
                      <Icon name="check" size={16} />
                    ) : (
                      <Icon name="plus" size={16} />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </>
        ) : step === 3 ? (
          <>
            <h1>Start with one clear process.</h1>
            <p>
              You can expand later. Choose a workflow to build your foundation.
            </p>
            <div className="template-options">
              {useCases.map((c) => (
                <button
                  key={c.workflow}
                  className={template === c.workflow ? "chosen" : ""}
                  aria-pressed={template === c.workflow}
                  onClick={() => setTemplate(c.workflow)}
                >
                  <Icon name={c.icon} size={21} />
                  <span>
                    <strong>{c.workflow}</strong>
                    <small>{c.name}</small>
                  </span>
                  <span className="radio-dot" />
                </button>
              ))}
            </div>
          </>
        ) : step === 4 ? (
          <>
            <h1>Good systems are a team sport.</h1>
            <p>Preview a team invitation. No invitations will be sent.</p>
            <div className="form-stack">
              <label>
                Team email addresses
                <textarea
                  value={invite}
                  rows={3}
                  onChange={(e) => {
                    setInvite(e.target.value);
                    setError("");
                  }}
                  placeholder="jordan@example.com, sam@example.com"
                  aria-invalid={!!error}
                  aria-describedby={error ? "onboarding-error" : "invite-help"}
                />
              </label>
              <p id="invite-help" className="form-help">
                Optional. Use sample addresses separated by commas.
              </p>
            </div>
            <div className="invite-preview">
              <Icon name="mail" />
              <p>
                Your team would receive an invitation to{" "}
                <strong>{company || "your workspace"}</strong>, with a clear
                path to their first workflow.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="onboarding-symbol">
              <Icon name="check" size={36} />
            </div>
            <h1>
              Your operating layer
              <br />
              is ready to explore.
            </h1>
            <p>
              Here’s the workspace you designed. Open the sample product to see
              the same ideas in action.
            </p>
            <dl className="onboarding-summary">
              <div>
                <dt>Company</dt>
                <dd>{company}</dd>
              </div>
              <div>
                <dt>Team size</dt>
                <dd>{size}</dd>
              </div>
              <div>
                <dt>Departments</dt>
                <dd>{selected.join(", ")}</dd>
              </div>
              <div>
                <dt>First workflow</dt>
                <dd>{template}</dd>
              </div>
              <div>
                <dt>Invitations</dt>
                <dd>
                  {invite.trim()
                    ? `${invite.split(",").length} previewed · None sent`
                    : "Skipped"}
                </dd>
              </div>
            </dl>
            <ButtonLink href="/dashboard" variant="dark" className="full-width">
              Open sample workspace
            </ButtonLink>
          </>
        )}
        {error && (
          <p className="field-error" id="onboarding-error" role="alert">
            {error}
          </p>
        )}
        {step < 5 && (
          <div className="onboarding-actions">
            {step > 0 ? (
              <button
                className="button button-secondary"
                onClick={() => {
                  setStep((s) => s - 1);
                  setError("");
                }}
              >
                Back
              </button>
            ) : (
              <Link href="/dashboard" className="text-link">
                Skip setup
              </Link>
            )}
            <button className="button button-dark" onClick={next}>
              {step === 0
                ? "Let’s build your foundation"
                : step === 4
                  ? "Finish demo setup"
                  : "Continue"}
              <Icon name="arrow" size={16} />
            </button>
          </div>
        )}
      </section>
      <p className="onboarding-note">
        Concept onboarding · Details stay on this screen and reset on reload.
      </p>
    </main>
  );
}
