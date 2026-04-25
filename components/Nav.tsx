"use client";

import { useEffect, useState } from "react";
import { BrandMark, BrandWordmark } from "./BrandLogo";

const LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#mcp", label: "AI context" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`nav ${stuck ? "is-stuck" : ""}`} role="banner">
        <div className="nav__inner">
          <div className="nav__pill">
            <a
              href="#top"
              className="nav__brand"
              aria-label="Log Your Mind home"
            >
              <BrandMark />
              <BrandWordmark />
            </a>

            <nav className="nav__links" aria-label="Primary">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>

            <a href="#app" className="btn-primary nav__cta" data-magnetic>
              Get the app
            </a>

            <button
              type="button"
              className={`nav__burger ${open ? "is-open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="nav-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`nav__drawer-backdrop ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <nav
        id="nav-drawer"
        className={`nav__drawer ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href="#app"
          className="btn-primary"
          onClick={() => setOpen(false)}
        >
          Get the app
        </a>
      </nav>
    </>
  );
}
