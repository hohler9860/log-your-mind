const QS = [
  {
    q: "Is this a therapy replacement?",
    a: "No. It's a tool for getting the stuff in your head out of your head. If you need a therapist, see a therapist. This makes those sessions, and the weeks in between, a lot more useful.",
  },
  {
    q: "How does it stay private if AI analyzes?",
    a: "Transcription and pattern analysis run on device. When you enable the MCP endpoint, you choose which AI sees your journal, and only what you let it see.",
  },
  {
    q: "What happens if I delete the app?",
    a: "It's gone. No backups, no shadow copies, no \"we still have this on a server for debugging.\" You can wipe your data without deleting the app too, from Settings.",
  },
  {
    q: "Do I have to pay?",
    a: "The core journal is free. Long-range patterns and the MCP endpoint are on a quiet paid tier when you're ready.",
  },
  {
    q: "Will the nudges drive me crazy?",
    a: "No. A couple of gentle nudges at random times. Log once and we stop for the rest of the day.",
  },
  {
    q: "What phones does it work on?",
    a: "iPhone today. Android next. iPad along for the ride.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="section section--white has-index"
      data-index="09"
    >
      <div className="container">
        <div className="center">
          <span className="eyebrow" data-in>
            Questions
          </span>
          <h2 className="display section__h" data-in style={{ maxWidth: "16ch" }}>
            The quick <em className="display-serif">rundown.</em>
          </h2>
        </div>

        <div className="grid grid--2 faqs">
          {QS.map((item) => (
            <details className="card faq-card" data-in key={item.q}>
              <summary>
                <span>{item.q}</span>
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
