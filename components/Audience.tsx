"use client";

/* =========== MOTIFS =========== */

function AdhdMotif() {
  return (
    <svg className="aud-motif" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="bolt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5A623" />
          <stop offset="1" stopColor="#FF8A00" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="48" stroke="#1A1A1A" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="34" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="3 4" />
      <path
        d="M65 32 L45 66 L58 66 L52 90 L78 54 L64 54 Z"
        fill="url(#bolt)"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="98" cy="24" r="4" fill="#F5A623" stroke="#1A1A1A" strokeWidth="1.5" />
      <circle cx="22" cy="96" r="3" fill="#FFE2B8" stroke="#1A1A1A" strokeWidth="1.5" />
    </svg>
  );
}

function OverthinkerMotif() {
  return (
    <svg className="aud-motif" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <circle cx="60" cy="60" r="48" stroke="#1A1A1A" strokeWidth="1.5" />
      <path
        d="M60 60 m-2 0 a 2 2 0 0 1 4 0 a 6 6 0 0 1 -8 0 a 10 10 0 0 1 16 0 a 14 14 0 0 1 -20 0 a 18 18 0 0 1 24 0 a 22 22 0 0 1 -28 0 a 26 26 0 0 1 32 0 a 30 30 0 0 1 -36 0 a 34 34 0 0 1 40 0"
        stroke="#F5A623"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="60" cy="60" r="3" fill="#1A1A1A" />
    </svg>
  );
}

function VerbalMotif() {
  const bars = [14, 28, 42, 64, 46, 72, 54, 36, 58, 72, 48, 32, 22, 40, 28, 18];
  return (
    <svg className="aud-motif" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <circle cx="60" cy="60" r="48" stroke="#1A1A1A" strokeWidth="1.5" fill="#FFF2DD" />
      {bars.map((h, i) => {
        const w = 3;
        const x = 22 + i * 5;
        const y = 60 - h / 2;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            rx={1.5}
            fill="#F5A623"
          />
        );
      })}
    </svg>
  );
}

function QuietMotif() {
  return (
    <svg className="aud-motif" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <circle cx="60" cy="60" r="48" stroke="#1A1A1A" strokeWidth="1.5" fill="#FFFFFF" />
      <rect x="52" y="68" width="16" height="30" rx="2" fill="#FFE2B8" stroke="#1A1A1A" strokeWidth="1.5" />
      <rect x="56" y="62" width="8" height="8" rx="1" fill="#1A1A1A" />
      <path
        d="M60 38 C 54 46, 54 54, 60 62 C 66 54, 66 46, 60 38 Z"
        fill="#F5A623"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M60 30 L60 22" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* =========== DATA =========== */

const AUD = [
  {
    motif: <AdhdMotif />,
    name: "ADHD brains",
    lede: "Skip the blank page.",
    body: "Dump the loop out of your head before it loops one more time. No setup, no categories, no deciding. Press and speak.",
    sig: "For the ones with fourteen tabs open.",
  },
  {
    motif: <OverthinkerMotif />,
    name: "Overthinkers",
    lede: "Hearing it changes it.",
    body: "The thought you've been circling for three days shrinks the second you say it out loud. That's the whole trick.",
    sig: "For the ones who replay conversations.",
  },
  {
    motif: <VerbalMotif />,
    name: "Verbal processors",
    lede: "You don't know until you say it.",
    body: "Talking is how you find what you actually think. Mialo gives you somewhere to do it that isn't your group chat.",
    sig: "For the ones who talk to think.",
  },
  {
    motif: <QuietMotif />,
    name: "Quiet self-workers",
    lede: "Not a meditation app.",
    body: "Not a therapist, not a journal with prompts. The simplest possible way to get what's in your head out of your head.",
    sig: "For the ones doing the work alone.",
  },
];

export function Audience() {
  return (
    <section className="section section--cream has-index audsec" data-index="12">
      <div className="container">
        <div className="center">
          <span className="eyebrow" data-in>
            Built for unique brains
          </span>
          <h2 className="display section__h" data-in style={{ maxWidth: "20ch" }}>
            Designed for fast minds. <em className="display-serif">Works for anyone who thinks out loud.</em>
          </h2>
          <p className="section__sub" data-in>
            Mialo started as a tool for people whose thoughts move faster
            than their fingers. Turns out that&apos;s most of us, more days
            than we&apos;d admit.
          </p>
        </div>

        <div className="audsec__grid">
          {AUD.map((a, i) => (
            <article
              key={a.name}
              className={`audsec__card audsec__card--${i}`}
              data-in
            >
              <div className="audsec__motif">{a.motif}</div>
              <div className="audsec__body">
                <h3 className="audsec__name">
                  <em className="display-serif">{a.name}</em>
                </h3>
                <p className="audsec__lede">{a.lede}</p>
                <p className="audsec__copy">{a.body}</p>
                <p className="audsec__sig">{a.sig}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
