"use client";
import { useState } from "react";
import { plans, money } from "@/lib/data";
import { Icon } from "../ui/icon";
import { ButtonLink } from "../ui/primitives";
export function PricingCards() {
  const [annual, setAnnual] = useState(false);
  return (
    <>
      <div className="pricing-billing">
        <span>Simple plans. Room to grow.</span>
        <div className="billing-toggle" aria-label="Billing frequency">
          <button
            onClick={() => setAnnual(false)}
            aria-pressed={!annual}
            className={!annual ? "selected" : ""}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
            className={annual ? "selected" : ""}
          >
            Annually <span>Save 20%</span>
          </button>
        </div>
      </div>
      <div className="pricing-grid">
        {plans.map((p, i) => (
          <article
            className={`pricing-card ${i === 1 ? "pricing-featured" : ""}`}
            key={p.name}
          >
            {i === 1 && (
              <div className="recommended">
                BUILT FOR YOUR NEXT STAGE
                <Icon name="zap" size={13} />
              </div>
            )}
            <div className="plan-header">
              <span className="plan-number">0{i + 1}</span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </div>
            <div className="plan-price">
              {money(annual ? p.annual : p.price)}
              <span>/ month</span>
            </div>
            <p className="plan-billing">
              {annual
                ? `${money(p.annual * 12)} billed annually per workspace`
                : "Billed monthly per workspace"}
            </p>
            <ButtonLink
              href={`/onboarding/?plan=${p.name.toLowerCase()}`}
              variant={i === 1 ? "dark" : "secondary"}
            >
              Explore {p.name}
            </ButtonLink>
            <ul>
              {p.features.map((f) => (
                <li key={f}>
                  <Icon name="check" size={15} />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="pricing-disclaimer">
        Illustrative concept pricing. No purchases, charges, or paid
        subscriptions are available.
      </p>
    </>
  );
}
