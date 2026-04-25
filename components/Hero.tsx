"use client";

import { useEffect, useRef } from "react";
import { LiveDemo } from "./LiveDemo";

const ROTOR_WORDS = [
  "Say it out loud.",
  "Say it in private.",
  "Say it to yourself.",
  "Say it clearly.",
  "Say it at your pace.",
];

export function Hero() {
  const rotorRef = useRef<HTMLSpanElement | null>(null);

  // rotor on the italic-amber accent line
  useEffect(() => {
    const rotor = rotorRef.current;
    if (!rotor) return;
    const words = Array.from(
      rotor.querySelectorAll<HTMLSpanElement>(".rotor__word")
    );
    if (!words.length) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    let i = 0;
    const id = window.setInterval(() => {
      words[i].classList.remove("is-on");
      i = (i + 1) % words.length;
      words[i].classList.add("is-on");
    }, 2800);
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
          <span>Voice journal · Built for fast minds</span>
        </span>

        <h1 className="display hero__title">
          <span className="line line--accent hero__rotor-line">
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
