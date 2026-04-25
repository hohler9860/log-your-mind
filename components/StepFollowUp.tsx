"use client";

export function StepFollowUp() {
  return (
    <div className="step-followup" aria-hidden="true">
      <div className="step-followup__notif">
        <div className="step-followup__icon">
          <span className="step-followup__dot" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </div>
        <div className="step-followup__body">
          <div className="step-followup__head">
            <span className="step-followup__app">MIALO</span>
            <span className="step-followup__time">2 days later</span>
          </div>
          <p className="step-followup__text">
            Hey. You said you were excited about that new project. How&apos;s
            it going?
          </p>
        </div>
      </div>
    </div>
  );
}
