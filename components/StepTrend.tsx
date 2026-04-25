"use client";

// 7 days of mood data points (y = 0-100, higher = calmer)
const POINTS = [32, 28, 44, 58, 54, 68, 82];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function StepTrend() {
  const W = 280;
  const H = 140;
  const pad = 16;
  const innerW = W - pad * 2;
  const innerH = H - pad * 2;
  const maxY = 100;

  const coords = POINTS.map((v, i) => {
    const x = pad + (i * innerW) / (POINTS.length - 1);
    const y = pad + innerH - (v / maxY) * innerH;
    return { x, y };
  });

  const linePath = coords
    .map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`))
    .join(" ");

  const areaPath =
    linePath +
    ` L${coords[coords.length - 1].x},${pad + innerH} L${coords[0].x},${pad + innerH} Z`;

  return (
    <div className="step-trend" aria-hidden="true">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="step-trend__svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5A623" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* horizontal grid lines */}
        {[0, 1, 2, 3].map((i) => {
          const y = pad + (innerH * i) / 3;
          return (
            <line
              key={i}
              x1={pad}
              x2={W - pad}
              y1={y}
              y2={y}
              stroke="rgba(26,26,26,0.08)"
              strokeDasharray="2 3"
              strokeWidth="1"
            />
          );
        })}

        {/* area fill */}
        <path d={areaPath} fill="url(#trendFill)" className="step-trend__area" />

        {/* trend line */}
        <path
          d={linePath}
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="step-trend__line"
        />

        {/* data points */}
        {coords.map((p, i) => (
          <g key={i} className="step-trend__pt" style={{ animationDelay: `${400 + i * 90}ms` }}>
            <circle cx={p.x} cy={p.y} r={5} fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="1.5" />
            {i === coords.length - 1 && (
              <circle cx={p.x} cy={p.y} r={3} fill="#F5A623" />
            )}
          </g>
        ))}
      </svg>

      <div className="step-trend__legend">
        {DAYS.map((d) => (
          <span key={d} className="step-trend__day">{d}</span>
        ))}
      </div>
    </div>
  );
}
