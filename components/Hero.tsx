"use client";

import { useEffect, useRef } from "react";
import { LiveDemo } from "./LiveDemo";

export function Hero() {
  const charsRef = useRef<HTMLSpanElement | null>(null);

  // split "Say it out loud." into chars for the reveal
  useEffect(() => {
    const el = charsRef.current;
    if (!el || el.dataset.split === "1") return;
    const text = el.textContent || "";
    el.textContent = "";
    text.split("").forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "ch";
      span.textContent = ch === " " ? " " : ch;
      span.style.transitionDelay = `${i * 32}ms`;
      el.appendChild(span);
    });
    el.dataset.split = "1";
  }, []);

  return (
    <section id="top" className="hero">
      <div className="blob-bg" aria-hidden="true">
        <span className="blob blob--a" />
        <span className="blob blob--b" />
        <span className="blob blob--c" />
      </div>

      <div className="hero__inner">
        <span className="eyebrow hero__eye" data-in>
          <span className="eyebrow-dot" aria-hidden="true" />
          <span>Voice journal · Built for fast minds</span>
        </span>

        <h1 className="display hero__title">
          <span className="line line--accent" data-chars ref={charsRef}>
            Say it out loud.
          </span>
          <span className="line">Stop carrying it around.</span>
        </h1>

        <p className="hero__sub" data-in>
          A voice journal for the person who thinks too fast to type. Open
          the app and answer the daily question, or just hit record and talk
          about whatever&apos;s on your mind. Mialo transcribes it, tags how
          you sounded, and checks back on you days later like a thoughtful
          friend.
        </p>

        <div className="hero__cta" data-in>
          <a href="#app" className="btn-primary" data-magnetic>
            Try it free
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a href="#how" className="btn-secondary" data-magnetic>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            How it works
          </a>
        </div>

        <p className="hero__hint" data-in>
          7-day free trial. No account. Cancel anytime.
        </p>

        <LiveDemo />
      </div>
    </section>
  );
}
