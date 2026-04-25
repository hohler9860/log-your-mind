const QS = [
  {
    q: "Do I have to answer the daily prompt?",
    a: "No. The prompt is there if you want a head start, but you can ignore it and just talk about whatever's on your mind. The app is a place to think out loud and have a record of it later. A prompt is one way in, free-form is another.",
  },
  {
    q: "Is Mialo a therapy replacement?",
    a: "No. It's a place to get the stuff in your head out of your head. If you need a therapist, see a therapist. Mialo makes those sessions, and the weeks in between, a lot more useful.",
  },
  {
    q: "How is this different from voice memos?",
    a: "Voice memos give you a wall of unlabeled clips. Mialo asks you a question, transcribes what you say, tags the mood, and follows up days later. It's the difference between hoarding files and having a record you can actually read.",
  },
  {
    q: "What does the AI actually see?",
    a: "Transcription and pattern analysis run on device. Nothing leaves your phone unless you turn on the optional MCP endpoint, and even then you control what it can read. We never see or hear your recordings.",
  },
  {
    q: "What happens after my 7-day trial ends?",
    a: "You keep every recording, every transcript, every mood tag. You can still view and play back everything you logged. You lose new recording, new AI transcription, mood charts, follow-ups, and chat. Subscribe and they're back instantly.",
  },
  {
    q: "What if I delete the app?",
    a: "It's gone. No backups, no shadow copies, no \"we still have this on a server for debugging.\" If you want to wipe data without uninstalling, there's a one-tap reset in Settings.",
  },
  {
    q: "Why voice and not typing?",
    a: "Typing makes you edit. You stop the thought, fix the spelling, second-guess the tone. By the time you hit send, you've sanded down the thing you actually meant. Speaking skips all of that.",
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
      data-index="14"
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
