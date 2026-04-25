"use client";

const QUERIES = [
  "what have I been anxious about this month?",
  "do you see any patterns in how I've been talking about work?",
  "summarize this week in three sentences.",
  "when did I last feel actually rested?",
];

export function AIChat() {
  return (
    <section
      id="chat"
      className="section section--white has-index"
      data-index="06"
    >
      <div className="container">
        <div className="ai-chat">
          <div className="ai-chat__copy">
            <span className="eyebrow" data-in>
              Talk to your journal
            </span>
            <h2 className="display section__h section__h--left" data-in style={{ maxWidth: "16ch" }}>
              Ask the AI <em className="display-serif">what it sees.</em>
            </h2>
            <p className="section__sub section__sub--left" data-in>
              Have a conversation with an AI that has read every entry. Like
              a therapist&apos;s notes you can actually query, or a friend
              with perfect recall who only remembers what you said out loud.
            </p>
            <ul className="ai-chat__queries" data-in>
              {QUERIES.map((q) => (
                <li key={q}>
                  <span className="ai-chat__qbullet" aria-hidden="true">&ldquo;</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <div className="ai-chat__demo" data-in>
            <div className="ai-chat__win">
              <div className="ai-chat__head">
                <span className="ai-chat__avatar">M</span>
                <span className="ai-chat__title">mialo · ask</span>
              </div>
              <div className="ai-chat__body">
                <div className="ai-chat__bubble ai-chat__bubble--you">
                  what have I been circling lately?
                </div>
                <div className="ai-chat__bubble ai-chat__bubble--ai">
                  Three things keep coming up. Sleep, the conversation with
                  your dad you haven&apos;t had yet, and a project you keep
                  saying you&apos;re excited about but also avoiding. Want to
                  start with one?
                </div>
                <div className="ai-chat__bubble ai-chat__bubble--you">
                  the project. why am I avoiding it?
                </div>
                <div className="ai-chat__bubble ai-chat__bubble--typing">
                  <span /><span /><span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
