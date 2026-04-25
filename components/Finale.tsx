"use client";

import { useState } from "react";
import { isValidEmail, markPopupSeen } from "@/lib/email";

export function Finale() {
  const [hint, setHint] = useState({
    text: "",
    kind: "idle" as "idle" | "ok" | "err",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
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
    markPopupSeen();
    window.dispatchEvent(new CustomEvent("lym:waitlist-signup"));
  };

  const hintClass =
    hint.kind === "ok"
      ? "finale__hint is-ok"
      : hint.kind === "err"
      ? "finale__hint is-err"
      : "finale__hint";

  return (
    <section id="app" className="section section--white section--tight">
      <div className="container container--narrow">
        <div className="finale" data-in>
          <div className="finale__aurora" aria-hidden="true">
            <span className="aurora-ray" />
            <span className="aurora-ray aurora-ray--2" />
          </div>

          <span className="eyebrow finale__eye">
            <span className="eyebrow-dot" aria-hidden="true" />
            7-day free trial · iPhone · No account
          </span>

          <h2 className="display finale__h">
            Say it out loud. <em className="display-serif">Stop carrying it around.</em>
          </h2>

          <form className="finale__form" onSubmit={onSubmit} noValidate>
            <label className="finale__label" htmlFor="finaleEmail">
              Your email
            </label>
            <div className="finale__row">
              <input
                className="finale__input"
                id="finaleEmail"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@domain.com"
              />
              <button className="finale__submit" type="submit" data-magnetic>
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
            {hint.text && <p className={hintClass}>{hint.text}</p>}
          </form>

          <p className="finale__meta">
            Built by someone who kept talking to himself in the car.
          </p>
        </div>
      </div>
    </section>
  );
}
