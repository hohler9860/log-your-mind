"use client";

const PROMISES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Stays on your phone",
    body: "Recordings, transcripts, mood tags. All on device by default. We don't store a copy and we never see the contents.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    title: "No account required",
    body: "No email. No password. No verification. Open the app and start. The first thing you do is record, not sign up.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
      </svg>
    ),
    title: "Delete everything in one tap",
    body: "One toggle in Settings wipes the whole journal. No undo, no shadow copy on a server, no twelve-step deletion process.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    ),
    title: "PIN lock with biometrics",
    body: "Optional Face ID or Touch ID before the journal opens. So you can hand someone your phone without handing them your head.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Optional end-to-end encryption",
    body: "Turn on E2EE if you want backups locked with a key only you hold. We can't read it. If you lose the key, we can't recover it either. That's the point.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    ),
    title: "AI sees only what you let it see",
    body: "Pattern analysis runs on device. The MCP endpoint is opt-in, scoped, and revokable in one tap.",
  },
];

export function Privacy() {
  return (
    <section
      id="privacy"
      className="section section--white has-index"
      data-index="10"
    >
      <div className="container">
        <div className="center">
          <span className="eyebrow" data-in>
            Privacy
          </span>
          <h2 className="display section__h" data-in style={{ maxWidth: "20ch" }}>
            Your thoughts, your phone, <em className="display-serif">no one else.</em>
          </h2>
          <p className="section__sub" data-in>
            What you say in Mialo doesn&apos;t go anywhere you didn&apos;t
            send it. The defaults are paranoid for a reason.
          </p>
        </div>

        <div className="privacy-grid" data-in>
          {PROMISES.map((p) => (
            <article key={p.title} className="privacy-card">
              <span className="privacy-card__ico" aria-hidden="true">
                {p.icon}
              </span>
              <h3 className="privacy-card__h">{p.title}</h3>
              <p className="privacy-card__p">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
