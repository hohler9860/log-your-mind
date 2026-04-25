import { StepLogs } from "./StepLogs";
import { StepTrend } from "./StepTrend";
import { StepWave } from "./StepWave";

export function HowItWorks() {
  return (
    <section
      id="how"
      className="section section--cream has-index"
      data-index="03"
    >
      <div className="container">
        <div className="center">
          <span className="eyebrow" data-in>
            How it works
          </span>
          <h2 className="display section__h" data-in style={{ maxWidth: "16ch" }}>
            Three steps. <em className="display-serif">Zero friction.</em>
          </h2>
          <p className="section__sub" data-in>
            Open the app. Talk. Come back when you want to notice what
            you&apos;ve been noticing.
          </p>
        </div>

        <div className="grid grid--3 steps">
          <article className="step-card tiltable" data-in>
            <div className="step-card__media step-card__media--record">
              <StepWave />
              <div className="step-card__num">01</div>
              <div className="step-card__ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="9" y="2" width="6" height="13" rx="3" />
                  <path d="M5 11a7 7 0 0 0 14 0" />
                  <path d="M12 18v4" />
                </svg>
              </div>
            </div>
            <div className="step-card__body">
              <h3>Speak</h3>
              <p>
                Open, press record, talk. Thirty seconds or five minutes. The
                words find themselves.
              </p>
            </div>
          </article>

          <article className="step-card tiltable" data-in>
            <div className="step-card__media step-card__media--logs">
              <StepLogs />
              <div className="step-card__num">02</div>
              <div className="step-card__ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
              </div>
            </div>
            <div className="step-card__body">
              <h3>Notice</h3>
              <p>
                Everything you said is transcribed on device and tagged with a
                mood. Scroll the day back. Read yourself in your own words.
              </p>
            </div>
          </article>

          <article className="step-card tiltable" data-in>
            <div className="step-card__media step-card__media--patterns">
              <StepTrend />
              <div className="step-card__num">03</div>
              <div className="step-card__ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 3v18h18" />
                  <path d="m7 14 4-4 4 4 5-5" />
                </svg>
              </div>
            </div>
            <div className="step-card__body">
              <h3>Grow</h3>
              <p>
                After a few weeks the patterns start to show. Mood shifts. The
                themes you keep circling back to. What helped and what didn&apos;t.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
