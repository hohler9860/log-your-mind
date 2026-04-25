"use client";

import { useEffect, useRef } from "react";

/* =========== MINI-VISUALS =========== */

function VoiceViz() {
  const bars = Array.from({ length: 28 }, (_, i) => i);
  return (
    <div className="ft-viz ft-viz--voice" aria-hidden="true">
      <div className="ft-orb">
        <span className="ft-orb__ring" />
        <span className="ft-orb__ring ft-orb__ring--2" />
        <span className="ft-orb__core" />
      </div>
      <div className="ft-bars">
        {bars.map((i) => (
          <span
            key={i}
            className="ft-bar"
            style={{ animationDelay: `${(i % 14) * 80}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function VaultViz() {
  return (
    <div className="ft-viz ft-viz--vault" aria-hidden="true">
      <div className="ft-vault-phone">
        <span className="ft-vault-screen">
          <span className="ft-vault-dot" />
          <span className="ft-vault-line ft-vault-line--a" />
          <span className="ft-vault-line ft-vault-line--b" />
        </span>
      </div>
      <div className="ft-lock-chip">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
        on-device · encrypted
      </div>
    </div>
  );
}

function PatternsViz() {
  return (
    <div className="ft-viz ft-viz--patterns" aria-hidden="true">
      <div className="ft-tag ft-tag--a">work · 12 mentions</div>
      <div className="ft-tag ft-tag--b">sleep · 8 mentions</div>
      <div className="ft-tag ft-tag--c">mom · 5 mentions</div>
      <div className="ft-mood">
        <span className="ft-mood__dot" />
        trending calmer this week
      </div>
    </div>
  );
}

function ClaudeLogo() {
  // Official Claude mark, source: claude.com
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.376 24L10.776 23.544L10.44 22.8L10.776 21.312L11.16 19.392L11.472 17.856L11.76 15.96L11.928 15.336L11.904 15.288L11.784 15.312L10.344 17.28L8.16 20.232L6.432 22.056L6.024 22.224L5.304 21.864L5.376 21.192L5.784 20.616L8.16 17.568L9.6 15.672L10.536 14.592L10.512 14.448H10.464L4.128 18.576L3 18.72L2.496 18.264L2.568 17.52L2.808 17.28L4.704 15.96L9.432 13.32L9.504 13.08L9.432 12.96H9.192L8.4 12.912L5.712 12.84L3.384 12.744L1.104 12.624L0.528 12.504L0 11.784L0.048 11.424L0.528 11.112L1.224 11.16L2.736 11.28L5.016 11.424L6.672 11.52L9.12 11.784H9.504L9.552 11.616L9.432 11.52L9.336 11.424L6.96 9.84L4.416 8.16L3.072 7.176L2.352 6.672L1.992 6.216L1.848 5.208L2.496 4.488L3.384 4.56L3.6 4.608L4.488 5.304L6.384 6.768L8.88 8.616L9.24 8.904L9.408 8.808V8.736L9.24 8.472L7.896 6.024L6.456 3.528L5.808 2.496L5.64 1.872C5.576 1.656 5.544 1.416 5.544 1.152L6.288 0.144001L6.696 0L7.704 0.144001L8.112 0.504001L8.736 1.92L9.72 4.152L11.28 7.176L11.736 8.088L11.976 8.904L12.072 9.168H12.24V9.024L12.36 7.296L12.6 5.208L12.84 2.52L12.912 1.752L13.296 0.840001L14.04 0.360001L14.616 0.624001L15.096 1.32L15.024 1.752L14.76 3.6L14.184 6.504L13.824 8.472H14.04L14.28 8.208L15.264 6.912L16.92 4.848L17.64 4.032L18.504 3.12L19.056 2.688H20.088L20.832 3.816L20.496 4.992L19.44 6.336L18.552 7.464L17.28 9.168L16.512 10.536L16.584 10.632H16.752L19.608 10.008L21.168 9.744L22.992 9.432L23.832 9.816L23.928 10.2L23.592 11.016L21.624 11.496L19.32 11.952L15.888 12.768L15.84 12.792L15.888 12.864L17.424 13.008L18.096 13.056H19.728L22.752 13.272L23.544 13.8L24 14.424L23.928 14.928L22.704 15.528L21.072 15.144L17.232 14.232L15.936 13.92H15.744V14.016L16.848 15.096L18.84 16.896L21.36 19.224L21.48 19.8L21.168 20.28L20.832 20.232L18.624 18.552L17.76 17.808L15.84 16.2H15.72V16.368L16.152 17.016L18.504 20.544L18.624 21.624L18.456 21.96L17.832 22.176L17.184 22.056L15.792 20.136L14.376 17.952L13.224 16.008L13.104 16.104L12.408 23.352L12.096 23.712L11.376 24Z" />
    </svg>
  );
}

function McpViz() {
  return (
    <div className="ft-viz ft-viz--mcp" aria-hidden="true">
      <div className="ft-claude">
        <div className="ft-claude__chrome">
          <span className="ft-claude__dot" />
          <span className="ft-claude__dot" />
          <span className="ft-claude__dot" />
          <span className="ft-claude__url">claude.ai</span>
        </div>
        <div className="ft-claude__body">
          <div className="ft-claude__user">how was my week?</div>
          <div className="ft-claude__ai">
            <span className="ft-claude__mark">
              <ClaudeLogo />
            </span>
            <div className="ft-claude__reply">
              <span className="ft-claude__tool">
                <span className="ft-claude__tool-ico">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
                  </svg>
                </span>
                read_context · mialo
              </span>
              <p>three rough nights, work piling up, and you&apos;re still sitting with that conversation with your dad.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========== SECTION =========== */

type Card = {
  key: string;
  size: "lg" | "md" | "sm" | "wide";
  eyebrow: string;
  title: string;
  body: string;
  viz: React.ReactNode;
  tone: "cream" | "white" | "amber" | "charcoal";
};

const CARDS: Card[] = [
  {
    key: "voice",
    size: "lg",
    eyebrow: "Voice-first",
    title: "Zero typing. Zero blank page.",
    body: "One big orange orb. Thirty seconds of talking. The stuff in your head is out of your head.",
    viz: <VoiceViz />,
    tone: "cream",
  },
  {
    key: "vault",
    size: "md",
    eyebrow: "On-device",
    title: "Never leaves your phone.",
    body: "Encrypted, local-only, no cloud copy, no training set. No account or email either.",
    viz: <VaultViz />,
    tone: "white",
  },
  {
    key: "patterns",
    size: "md",
    eyebrow: "Patterns",
    title: "Plain English, not clinical.",
    body: "The app notices themes and writes them back in language that sounds like you.",
    viz: <PatternsViz />,
    tone: "white",
  },
  {
    key: "mcp",
    size: "wide",
    eyebrow: "AI context",
    title: "Your AI, actually briefed.",
    body: "Tap once in Settings to generate a personal MCP URL. Paste it into Claude or ChatGPT and it reads the shape of your week before it answers. You stay in control of what it sees and you can revoke it anytime.",
    viz: <McpViz />,
    tone: "cream",
  },
];

export function Features() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Kick off viz animations when section enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add("is-live");
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="features"
      className="section section--white has-index"
      data-index="04"
    >
      <div className="container">
        <div className="center">
          <span className="eyebrow" data-in>
            What it does
          </span>
          <h2 className="display section__h" data-in style={{ maxWidth: "18ch" }}>
            The journal that{" "}
            <em className="display-serif">thinks in your voice.</em>
          </h2>
        </div>

        <div className="bento" ref={ref}>
          {CARDS.map((c) => (
            <article
              key={c.key}
              className={`bento__cell bento__cell--${c.size} bento__cell--${c.tone}`}
              data-in
            >
              <div className="bento__viz">{c.viz}</div>
              <div className="bento__content">
                <span className="bento__eye">{c.eyebrow}</span>
                <h3 className="bento__h">{c.title}</h3>
                <p className="bento__p">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
