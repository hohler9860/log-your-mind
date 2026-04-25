import { Counter } from "./Counter";

export function Stats() {
  return (
    <section className="section section--white has-index" data-index="02">
      <div className="container">
        <div className="center">
          <span className="eyebrow" data-in>
            The deal
          </span>
          <h2 className="display section__h" data-in style={{ maxWidth: "16ch" }}>
            Everything the App Store{" "}
            <em className="display-serif">is missing.</em>
          </h2>
          <p className="section__sub" data-in>
            Voice-first. On-device. No account. Built for the people journaling
            apps forgot about.
          </p>
        </div>

        <div className="grid grid--4 stats">
          <article className="card card--peach tiltable" data-in>
            <div className="stat-big">
              <Counter end={30} />
              <span className="stat-suffix">s</span>
            </div>
            <p className="stat-lbl">to log a thought</p>
            <p className="stat-src">From open to closed</p>
          </article>
          <article className="card card--amber tiltable" data-in>
            <div className="stat-big">
              <Counter end={0} />
            </div>
            <p className="stat-lbl">accounts · emails · cloud</p>
            <p className="stat-src">Nothing to sign up for</p>
          </article>
          <article className="card card--sand tiltable" data-in>
            <div className="stat-big">
              <Counter end={100} />
              <span className="stat-suffix">%</span>
            </div>
            <p className="stat-lbl">on-device &amp; encrypted</p>
            <p className="stat-src">AES-256 · local-first</p>
          </article>
          <article className="card card--white tiltable" data-in>
            <div className="stat-big">
              <Counter end={1} />
            </div>
            <p className="stat-lbl">tap to brief your AI</p>
            <p className="stat-src">Personal MCP endpoint</p>
          </article>
        </div>
      </div>
    </section>
  );
}
