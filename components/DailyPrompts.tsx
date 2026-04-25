"use client";

const PROMPTS = [
  { time: "6:30 am", category: "morning intent", text: "What are you avoiding today?" },
  { time: "9:15 am", category: "work + focus", text: "What's the one thing that would make today feel done?" },
  { time: "12:30 pm", category: "midday check-in", text: "How tired are you actually, on a scale of one to ten?" },
  { time: "4:00 pm", category: "patterns", text: "What's been on a loop in your head this week?" },
  { time: "8:45 pm", category: "evening reflection", text: "What's one thing you handled better than you thought you would?" },
  { time: "10:30 pm", category: "wind down", text: "If you could only remember one moment from today, which one?" },
];

export function DailyPrompts() {
  return (
    <section
      id="prompts"
      className="section section--cream has-index"
      data-index="04"
    >
      <div className="container">
        <div className="center">
          <span className="eyebrow" data-in>
            Daily prompts
          </span>
          <h2 className="display section__h" data-in style={{ maxWidth: "20ch" }}>
            You don&apos;t stare at a blank page. <em className="display-serif">A question is already waiting.</em>
          </h2>
          <p className="section__sub" data-in>
            Sixty-five prompts across thirteen categories. Morning ones are
            different from evening ones. The app picks based on what you said
            mattered to you when you set it up.
          </p>
        </div>

        <div className="prompt-grid" data-in>
          {PROMPTS.map((p) => (
            <article key={p.time} className="prompt-card">
              <div className="prompt-card__head">
                <span className="prompt-card__time">{p.time}</span>
                <span className="prompt-card__cat">{p.category}</span>
              </div>
              <p className="prompt-card__text">
                {p.text}
              </p>
            </article>
          ))}
        </div>

        <p className="prompt-foot" data-in>
          Plus a tap to swap if today&apos;s question doesn&apos;t fit.
        </p>
      </div>
    </section>
  );
}
