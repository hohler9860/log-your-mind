"use client";

const MOOD_WEEK = [
  { day: "Mon", value: 32, label: "tense" },
  { day: "Tue", value: 28, label: "tired" },
  { day: "Wed", value: 44, label: "neutral" },
  { day: "Thu", value: 58, label: "settling" },
  { day: "Fri", value: 54, label: "neutral" },
  { day: "Sat", value: 70, label: "calm" },
  { day: "Sun", value: 80, label: "calm" },
];

const THEMES = [
  { tag: "work", count: 14, trend: "rising" },
  { tag: "sleep", count: 11, trend: "rising" },
  { tag: "dad", count: 6, trend: "steady" },
  { tag: "the project", count: 9, trend: "steady" },
  { tag: "running", count: 5, trend: "rising" },
  { tag: "money", count: 4, trend: "falling" },
];

export function MoodPatterns() {
  // Build SVG line
  const W = 460, H = 200, P = 24;
  const innerW = W - P * 2, innerH = H - P * 2;
  const coords = MOOD_WEEK.map((m, i) => {
    const x = P + (i * innerW) / (MOOD_WEEK.length - 1);
    const y = P + innerH - (m.value / 100) * innerH;
    return { x, y };
  });
  const linePath = coords
    .map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`))
    .join(" ");
  const areaPath = `${linePath} L${coords[coords.length - 1].x},${P + innerH} L${coords[0].x},${P + innerH} Z`;

  return (
    <section
      id="patterns"
      className="section section--white has-index"
      data-index="08"
    >
      <div className="container">
        <div className="center">
          <span className="eyebrow" data-in>
            Mood + patterns
          </span>
          <h2 className="display section__h" data-in style={{ maxWidth: "22ch" }}>
            Things you wouldn&apos;t notice on your own. <em className="display-serif">Mialo notices them.</em>
          </h2>
          <p className="section__sub" data-in>
            Visual mood charts across week, month, three months, and six.
            Recurring themes pulled from your own words. The trends you keep
            running into without seeing.
          </p>
        </div>

        <div className="patterns-grid" data-in>
          <article className="patterns-card patterns-card--chart">
            <div className="patterns-card__head">
              <span className="patterns-card__eye">Mood · this week</span>
              <div className="patterns-card__tabs">
                <span className="patterns-card__tab is-on">Week</span>
                <span className="patterns-card__tab">Month</span>
                <span className="patterns-card__tab">3M</span>
                <span className="patterns-card__tab">6M</span>
              </div>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} className="patterns-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="moodFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5A623" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 1, 2, 3].map((i) => {
                const y = P + (innerH * i) / 3;
                return <line key={i} x1={P} x2={W - P} y1={y} y2={y} stroke="rgba(26,26,26,0.06)" strokeDasharray="2 4" />;
              })}
              <path d={areaPath} fill="url(#moodFill)" />
              <path d={linePath} fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {coords.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r={4} fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="1.5" />
                  {i === coords.length - 1 && <circle cx={p.x} cy={p.y} r={2.5} fill="#F5A623" />}
                </g>
              ))}
            </svg>
            <div className="patterns-legend">
              {MOOD_WEEK.map((m) => (
                <span key={m.day}>{m.day}</span>
              ))}
            </div>
          </article>

          <article className="patterns-card patterns-card--themes">
            <div className="patterns-card__head">
              <span className="patterns-card__eye">Themes pulled from your words</span>
            </div>
            <ul className="theme-list">
              {THEMES.map((t) => (
                <li key={t.tag} className="theme-item">
                  <span className="theme-item__tag">{t.tag}</span>
                  <span className="theme-item__count">{t.count} mentions</span>
                  <span className={`theme-item__trend theme-item__trend--${t.trend}`}>
                    {t.trend === "rising" && "↗"}
                    {t.trend === "steady" && "→"}
                    {t.trend === "falling" && "↘"}
                    <span>{t.trend}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="theme-foot">
              <span className="theme-foot__dot" />
              Pulled from sixty-four entries this month
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
