const LINES = [
  "Press record",
  "Never uploaded",
  "No account",
  "AES-256 encrypted",
  "Patterns find themselves",
  "MCP-ready for your AI",
  "Built for ADHD brains",
  "Thirty seconds",
  "One button",
];

export function Marquee() {
  const doubled = [...LINES, ...LINES];
  return (
    <section className="marquee" aria-label="Why Log Your Mind">
      <div className="marquee__track">
        {doubled.map((line, i) => (
          <span key={`${line}-${i}`} style={{ display: "inline-flex", alignItems: "center", gap: 44 }}>
            <span>{line}</span>
            <span className="marquee__star" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
