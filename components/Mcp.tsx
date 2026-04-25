import { McpTerm } from "./McpTerm";

export function Mcp() {
  return (
    <section
      id="mcp"
      className="section section--cream has-index"
      data-index="11"
    >
      <div className="container">
        <div className="mcp">
          <div className="mcp__copy">
            <span className="eyebrow" data-in>
              Claude Desktop · Power user
            </span>
            <h2
              className="display section__h section__h--left"
              data-in
              style={{ maxWidth: "14ch" }}
            >
              Your AI, <em className="display-serif">actually briefed.</em>
            </h2>
            <p className="section__sub section__sub--left" data-in>
              Tap once in Settings to generate a personal MCP URL. Paste it
              into Claude Desktop and your assistant references your journal
              when you ask it questions. We&apos;ll email you the config so
              setup is two clicks.
            </p>
            <ul className="ticks" data-in>
              <li>
                <span className="tick">✓</span> One-tap email setup with the
                config attached
              </li>
              <li>
                <span className="tick">✓</span> You decide what Claude can read
                and what it can&apos;t
              </li>
              <li>
                <span className="tick">✓</span> Revoke the URL anytime in
                Settings
              </li>
            </ul>
          </div>

          <McpTerm />
        </div>
      </div>
    </section>
  );
}
