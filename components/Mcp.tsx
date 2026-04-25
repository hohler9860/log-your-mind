import { McpTerm } from "./McpTerm";

export function Mcp() {
  return (
    <section
      id="mcp"
      className="section section--cream has-index"
      data-index="06"
    >
      <div className="container">
        <div className="mcp">
          <div className="mcp__copy">
            <span className="eyebrow" data-in>
              AI context
            </span>
            <h2
              className="display section__h section__h--left"
              data-in
              style={{ maxWidth: "14ch" }}
            >
              Your AI, <em className="display-serif">actually briefed.</em>
            </h2>
            <p className="section__sub section__sub--left" data-in>
              One tap in Settings gives you a personal MCP endpoint. Paste it
              into Claude or ChatGPT. Now your AI already knows what kind of
              week you&apos;ve been having, without you re-explaining yourself
              every time.
            </p>
            <ul className="ticks" data-in>
              <li>
                <span className="tick">✓</span> Private by default. You choose
                what to expose
              </li>
              <li>
                <span className="tick">✓</span> Revokable anytime in Settings
              </li>
              <li>
                <span className="tick">✓</span> Works with any MCP-ready
                assistant
              </li>
            </ul>
          </div>

          <McpTerm />
        </div>
      </div>
    </section>
  );
}
