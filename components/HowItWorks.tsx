import { StepQuestion } from "./StepQuestion";
import { StepCountdown } from "./StepCountdown";
import { StepWave } from "./StepWave";
import { StepLogs } from "./StepLogs";
import { StepFollowUp } from "./StepFollowUp";

type Step = {
  num: string;
  title: string;
  body: string;
  media: React.ReactNode;
  ico: React.ReactNode;
  tone: "cream" | "white" | "amber" | "peach";
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "A question finds you",
    body: "The app opens with a question picked for you. Morning ones are different from evening ones. Sixty-five prompts across thirteen categories.",
    media: <StepQuestion />,
    tone: "cream",
    ico: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Sit with it",
    body: "Ten seconds to think before you tap. No pressure. Just a little room to arrive at the answer.",
    media: <StepCountdown />,
    tone: "peach",
    ico: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Press and talk",
    body: "Hit the mic and go. Thirty seconds, unfiltered. Say the thing you've been carrying around. The app just listens.",
    media: <StepWave />,
    tone: "amber",
    ico: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="9" y="2" width="6" height="13" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0" />
        <path d="M12 18v4" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "It writes itself down",
    body: "Your words get transcribed automatically. Mood tagged. Entry saved. You close the app and move on.",
    media: <StepLogs />,
    tone: "cream",
    ico: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "It checks back on you",
    body: "Days later, a notification: you were excited about something, how did it go? The app remembers what you said and follows up like a thoughtful friend.",
    media: <StepFollowUp />,
    tone: "white",
    ico: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

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
          <h2 className="display section__h" data-in style={{ maxWidth: "20ch" }}>
            Five minutes a day. <em className="display-serif">A record of who you actually are.</em>
          </h2>
          <p className="section__sub" data-in>
            A question, a pause, a voice note, and an AI that pays attention
            over time.
          </p>
        </div>

        <div className="steps5">
          {STEPS.map((s) => (
            <article
              key={s.num}
              className={`step-card step-card--${s.tone} tiltable`}
              data-in
            >
              <div className={`step-card__media step-card__media--${s.tone}`}>
                {s.media}
                <div className="step-card__num">{s.num}</div>
                <div className="step-card__ico">{s.ico}</div>
              </div>
              <div className="step-card__body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
