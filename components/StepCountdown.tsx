"use client";

import { useEffect, useState } from "react";

export function StepCountdown() {
  const [n, setN] = useState(10);

  useEffect(() => {
    const id = window.setInterval(() => {
      setN((v) => (v <= 1 ? 10 : v - 1));
    }, 800);
    return () => window.clearInterval(id);
  }, []);

  // SVG circle math
  const R = 56;
  const C = 2 * Math.PI * R;
  const progress = n / 10;
  const dashOffset = C * (1 - progress);

  return (
    <div className="step-countdown" aria-hidden="true">
      <svg viewBox="0 0 140 140" className="step-countdown__svg">
        <circle
          cx="70"
          cy="70"
          r={R}
          fill="none"
          stroke="rgba(26,26,26,0.1)"
          strokeWidth="3"
        />
        <circle
          cx="70"
          cy="70"
          r={R}
          fill="none"
          stroke="#F5A623"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 70 70)"
          style={{ transition: "stroke-dashoffset 0.8s linear" }}
        />
      </svg>
      <div className="step-countdown__num">{n}</div>
      <div className="step-countdown__label">seconds to think</div>
    </div>
  );
}
