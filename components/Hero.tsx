"use client";

import { useEffect, useRef } from "react";
import { LiveDemo } from "./LiveDemo";

const ROTOR_WORDS = [
  "out loud.",
  "in private.",
  "to yourself.",
  "clearly.",
  "at your pace.",
];

export function Hero() {
  const rotorRef = useRef<HTMLSpanElement | null>(null);
  const charsRef = useRef<HTMLSpanElement | null>(null);

  // split "Think" into chars for the reveal
  useEffect(() => {
    const el = charsRef.current;
    if (!el || el.dataset.split === "1") return;
    const text = el.textContent || "";
    el.textContent = "";
    text.split("").forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "ch";
      span.textContent = ch === " " ? " " : ch;
      span.style.transitionDelay = `${i * 40}ms`;
      el.appendChild(span);
    });
    el.dataset.split = "1";
  }, []);

  // rotor rotation (CSS grid handles sizing — no JS measurement needed)
  useEffect(() => {
    const rotor = rotorRef.current;
    if (!rotor) return;
    const words = Array.from(rotor.querySelectorAll<HTMLSpanElement>(".rotor__word"));
    if (!words.length) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let i = 0;
    const id = window.setInterval(() => {
      words[i].classList.remove("is-on");
      i = (i + 1) % words.length;
      words[i].classList.add("is-on");
    }, 2600);
    return () => window.clearInterval(id);
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
          <span>A private voice journal · On-device only · iPhone</span>
        </span>

        <h1 className="display hero__title">
          <span className="line" data-chars ref={charsRef}>
            Think
          </span>
          <span className="line hero__rotor-line">
            <span className="rotor" aria-live="polite" ref={rotorRef}>
              {ROTOR_WORDS.map((w, i) => (
                <span
                  key={w}
                  className={`rotor__word ${i === 0 ? "is-on" : ""}`}
                >
                  {w}
                </span>
              ))}
            </span>
          </span>
        </h1>

        <p className="hero__sub" data-in>
          You don&apos;t need another journaling app. You need a button that
          listens. Thirty seconds of talking out loud and the stuff in your
          head is out of your head.
        </p>

        <div className="hero__cta" data-in>
          <a href="#app" className="btn-primary" data-magnetic>
            Get the app
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
            See how it works
          </a>
        </div>

        <p className="hero__hint" data-in>
          No account. No cloud. No email to verify.
        </p>

        <LiveDemo />
      </div>
    </section>
  );
}
