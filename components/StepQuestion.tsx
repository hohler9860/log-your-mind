"use client";

export function StepQuestion() {
  return (
    <div className="step-question" aria-hidden="true">
      <div className="step-question__card">
        <div className="step-question__head">
          <span className="step-question__sun">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
            </svg>
          </span>
          <span className="step-question__time">good morning · 7:42 am</span>
        </div>
        <p className="step-question__text">
          What&apos;s one thing you keep <em>putting off</em>?
        </p>
        <div className="step-question__hint">
          tap the mic when you&apos;re ready
        </div>
      </div>
    </div>
  );
}
