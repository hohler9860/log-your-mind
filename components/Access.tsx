"use client";

import { useState } from "react";
import { isValidEmail, markPopupSeen } from "@/lib/email";

export function Access() {
  const [hint, setHint] = useState({
    text: "No account needed once the app is live.",
    kind: "idle" as "idle" | "ok" | "err",
  });
  const [count, setCount] = useState(1284);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();
    if (!isValidEmail(email)) {
      setHint({
        text: "That email doesn't look right. Try again.",
        kind: "err",
      });
      return;
    }
    setHint({
      text: "✓ You're in. Watch your inbox for the TestFlight link.",
      kind: "ok",
    });
    form.reset();
    setCount((n) => n + 1);
    markPopupSeen(); // suppress popup too
    // emit event for anyone listening (e.g. popup)
    window.dispatchEvent(new CustomEvent("lym:waitlist-signup"));
  };

  const hintClass =
    hint.kind === "ok"
      ? "access__hint is-ok"
      : hint.kind === "err"
      ? "access__hint is-err"
      : "access__hint";

  return (
    <section className="access section--white" aria-labelledby="accessH">
      <div className="container">
        <div className="access__card" data-in>
          <div className="access__left">
            <span className="eyebrow access__eye">
              <span className="eyebrow-dot" aria-hidden="true" />
              Early access · Waitlist open
            </span>
            <h2 className="display access__h" id="accessH">
              Get in <em className="display-serif">before everyone else.</em>
            </h2>
            <p className="access__sub">
              We&apos;re shipping to a small waitlist first. Drop your email
              and we&apos;ll send you the TestFlight link the minute it&apos;s
              ready. No spam. No drip campaign. One email when the app is in
              your hands.
            </p>
            <ul className="access__ticks">
              <li>
                <span className="tick">✓</span> First 500 get free lifetime
                Patterns
              </li>
              <li>
                <span className="tick">✓</span> No spam. Unsubscribe with one
                click.
              </li>
              <li>
                <span className="tick">✓</span> Launching early summer.
              </li>
            </ul>
          </div>
          <div className="access__right">
            <form className="access__form" onSubmit={onSubmit} noValidate>
              <label className="access__label" htmlFor="accessEmail">
                Your email
              </label>
              <div className="access__row">
                <input
                  className="access__input"
                  id="accessEmail"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@domain.com"
                />
                <button className="access__submit" type="submit">
                  <span>Get early access</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
              <p className={hintClass}>{hint.text}</p>
            </form>
            <div className="access__counter">
              <span className="access__counter-n">
                {count.toLocaleString()}
              </span>
              <span className="access__counter-lbl">
                already on the waitlist
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
