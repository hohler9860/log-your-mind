import Image from "next/image";

export function Showcase() {
  return (
    <section
      id="showcase"
      className="section section--white has-index showcase"
      data-index="05"
    >
      <div className="container">
        <div className="center">
          <span className="eyebrow" data-in>
            The app
          </span>
          <h2
            className="display section__h"
            data-in
            style={{ maxWidth: "20ch" }}
          >
            Built to get out of the{" "}
            <em className="display-serif">way.</em>
          </h2>
          <p className="section__sub" data-in>
            Three screens. That&apos;s most of the app. Log it, read it,
            connect it to your AI when you want to.
          </p>
        </div>

        <div className="showcase__render" data-in>
          <Image
            src="/assets/showcase-trio.webp"
            alt="Log Your Mind app screens. Your Logs, Your Account, and MCP endpoint."
            width={2000}
            height={2200}
            sizes="(max-width: 900px) 100vw, 1100px"
          />
        </div>

        <div className="showcase__captions" data-in>
          <div className="showcase__cap">
            <span className="showcase__num">01</span>
            <div>
              <strong>Your Logs</strong>
              <p>Every thought you&apos;ve spoken, organized by day. Search, skim, replay.</p>
            </div>
          </div>
          <div className="showcase__cap">
            <span className="showcase__num">02</span>
            <div>
              <strong>Your Account</strong>
              <p>End-to-end encryption, local-only storage, PIN + Face ID. All on by default.</p>
            </div>
          </div>
          <div className="showcase__cap">
            <span className="showcase__num">03</span>
            <div>
              <strong>AI Context</strong>
              <p>One MCP URL. Paste it into Claude or ChatGPT. Your AI finally knows you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
