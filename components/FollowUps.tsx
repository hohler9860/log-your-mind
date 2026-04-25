"use client";

const FOLLOWUPS = [
  {
    when: "2 days later",
    you: "I'm excited about this new project.",
    them: "Hey. How's that project going? Still excited or has the shine come off?",
  },
  {
    when: "5 days later",
    you: "I need to have that conversation with my dad.",
    them: "You mentioned you wanted to call your dad. Did that happen? No pressure either way.",
  },
  {
    when: "1 week later",
    you: "I think I'm more tired than sad. just tired.",
    them: "You said you were running on empty last week. Has anything actually changed since then?",
  },
];

export function FollowUps() {
  return (
    <section
      id="followups"
      className="section section--cream has-index"
      data-index="05"
    >
      <div className="container">
        <div className="center">
          <span className="eyebrow" data-in>
            Follow-ups
          </span>
          <h2 className="display section__h" data-in style={{ maxWidth: "20ch" }}>
            It checks back on you <em className="display-serif">like a thoughtful friend.</em>
          </h2>
          <p className="section__sub" data-in>
            The AI reads what you said and follows up days later, while you
            still care about the answer. Reply right away, save it for later,
            or dismiss it.
          </p>
        </div>

        <div className="followup-stack" data-in>
          {FOLLOWUPS.map((f, i) => (
            <article key={i} className="followup-row">
              <div className="followup-row__you">
                <span className="followup-row__label">you said</span>
                <p>&ldquo;{f.you}&rdquo;</p>
              </div>
              <div className="followup-row__arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <span className="followup-row__when">{f.when}</span>
              </div>
              <div className="followup-row__them">
                <span className="followup-row__label">mialo asks</span>
                <p>{f.them}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="followup-meta" data-in>
          <span className="followup-meta__pill">
            <span className="followup-meta__dot" />
            Three modes
          </span>
          <p>
            Answer immediately. Save to your queue. Dismiss. Your call every
            time. Mialo doesn&apos;t pile up if you&apos;re not in the mood.
          </p>
        </div>
      </div>
    </section>
  );
}
