"use client";

import { BrandMark, BrandWordmark } from "./BrandLogo";

export function Footer() {
  const backToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };
  return (
    <footer className="foot" role="contentinfo">
      <div className="foot__inner">
        <button
          type="button"
          className="foot__top"
          aria-label="Back to top"
          data-magnetic
          onClick={backToTop}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
          </svg>
        </button>

        <a href="#top" className="foot__brand" aria-label="Mialo">
          <BrandMark />
          <BrandWordmark />
        </a>

        <p className="foot__tag">
          <em>Made for people who think out loud.</em>
        </p>
        <p className="foot__meta">
          © {new Date().getFullYear()} Mialo · Your thoughts stay on your phone.
        </p>
      </div>
    </footer>
  );
}
