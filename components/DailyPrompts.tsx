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
      className="section section--white has-index"
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
            different from evening ones. Or skip the prompt entirely and just
            talk about whatever&apos;s on your mind. Either way, it&apos;s
            saved and waiting when you come back.
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
          Tap the prompt to swap it. Tap the mic to skip it and just talk.
          Both give you something to look back on in a few weeks.
        </p>
      </div>
    </section>
  );
}
