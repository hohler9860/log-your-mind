"use client";

const ALWAYS_FREE = [
  "Viewing your past entries",
  "Calendar view of every recording",
  "PIN lock and biometric privacy",
  "Daily reminder notifications",
];

const TRIAL_INCLUDES = [
  "Unlimited voice recording",
  "AI transcription on every entry",
  "Mood tagging on every entry",
  "Daily prompts across thirteen categories",
  "Pattern analysis and mood charts",
  "Talk-to-your-journal AI chat",
  "Follow-up check-in notifications",
  "Claude Desktop integration via MCP",
];

const AFTER_TRIAL = {
  keep: [
    "Every recording you've made",
    "Every transcript and entry",
    "Calendar view + playback",
    "PIN lock and notifications",
  ],
  lose: [
    "Recording new entries",
    "AI transcription",
    "Mood + pattern analysis",
    "AI chat and follow-ups",
  ],
};

export function Pricing() {
  return (
    <section
      id="pricing"
      className="section section--white has-index"
      data-index="13"
    >
      <div className="container">
        <div className="center">
          <span className="eyebrow" data-in>
            Pricing
          </span>
          <h2 className="display section__h" data-in style={{ maxWidth: "20ch" }}>
            Free for a week. <em className="display-serif">Cheap if you stay.</em>
          </h2>
          <p className="section__sub" data-in>
            Seven days of full access. No card up front. If it sticks, the
            yearly plan is under five dollars a month.
          </p>
        </div>

        <div className="price-grid" data-in>
          <article className="price-card price-card--trial">
            <span className="price-card__eye">Start here</span>
            <h3 className="price-card__h">7-day free trial</h3>
            <div className="price-card__amount">
              <span className="price-card__num">$0</span>
              <span className="price-card__per">for the first week</span>
            </div>
            <p className="price-card__sub">Full access. No card required.</p>
            <a href="#app" className="btn-primary price-card__cta">Try it free</a>
            <ul className="price-card__list">
              {TRIAL_INCLUDES.map((t) => (
                <li key={t}>
                  <span className="tick">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </article>

          <article className="price-card price-card--year price-card--feature">
            <span className="price-card__badge">Save 48%</span>
            <span className="price-card__eye">Most pick this</span>
            <h3 className="price-card__h">Yearly</h3>
            <div className="price-card__amount">
              <span className="price-card__num">$49</span>
              <span className="price-card__per">/year</span>
            </div>
            <p className="price-card__sub">$4.08 a month, billed once.</p>
            <a href="#app" className="btn-primary price-card__cta">Start free trial</a>
            <ul className="price-card__list">
              <li><span className="tick">✓</span>Everything in the trial, forever</li>
              <li><span className="tick">✓</span>One charge a year, then nothing</li>
              <li><span className="tick">✓</span>Cancel anytime in Settings</li>
            </ul>
          </article>

          <article className="price-card price-card--month">
            <span className="price-card__eye">Or month-to-month</span>
            <h3 className="price-card__h">Monthly</h3>
            <div className="price-card__amount">
              <span className="price-card__num">$7.99</span>
              <span className="price-card__per">/month</span>
            </div>
            <p className="price-card__sub">No commitment, slightly more.</p>
            <a href="#app" className="btn-secondary price-card__cta">Pick monthly</a>
            <ul className="price-card__list">
              <li><span className="tick">✓</span>Everything in the trial</li>
              <li><span className="tick">✓</span>Cancel anytime</li>
              <li><span className="tick">✓</span>Switch to yearly later</li>
            </ul>
          </article>
        </div>

        <div className="price-after" data-in>
          <div className="price-after__head">
            <h3>What if I stop paying?</h3>
            <p>You don&apos;t lose your journal. You lose new recording.</p>
          </div>
          <div className="price-after__cols">
            <div className="price-after__col price-after__col--keep">
              <span className="price-after__label">You keep</span>
              <ul>
                {AFTER_TRIAL.keep.map((k) => (
                  <li key={k}>
                    <span className="price-after__ico price-after__ico--keep">✓</span>
                    {k}
                  </li>
                ))}
              </ul>
            </div>
            <div className="price-after__col price-after__col--lose">
              <span className="price-after__label">You lose</span>
              <ul>
                {AFTER_TRIAL.lose.map((l) => (
                  <li key={l}>
                    <span className="price-after__ico price-after__ico--lose">×</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="price-free" data-in>
          <span className="price-free__eye">Always free, no matter what</span>
          <ul className="price-free__list">
            {ALWAYS_FREE.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
