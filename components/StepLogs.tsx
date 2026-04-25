"use client";

const LOGS = [
  { time: "7:42 am", mood: "#F5A623", label: "tense", bars: [10, 16, 22, 14, 18, 12, 8] },
  { time: "12:18 pm", mood: "#6B8E7B", label: "settling", bars: [8, 12, 18, 24, 20, 16, 10, 8] },
  { time: "9:04 pm", mood: "#A78B6B", label: "reflective", bars: [6, 10, 14, 12, 16, 20, 14, 10, 6] },
];

export function StepLogs() {
  return (
    <div className="step-logs" aria-hidden="true">
      {LOGS.map((l, i) => (
        <div
          key={l.time}
          className="step-log"
          style={{ animationDelay: `${i * 220}ms` }}
        >
          <span
            className="step-log__mood"
            style={{ background: l.mood }}
          />
          <div className="step-log__meta">
            <span className="step-log__time">{l.time}</span>
            <span className="step-log__tag">{l.label}</span>
          </div>
          <div className="step-log__wave">
            {l.bars.map((h, bi) => (
              <span
                key={bi}
                className="step-log__bar"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
