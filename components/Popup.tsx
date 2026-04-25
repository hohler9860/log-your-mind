"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { isValidEmail, markPopupSeen, wasPopupSeenRecently } from "@/lib/email";

export function Popup() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [hint, setHint] = useState({
    text: "No spam. One email when TestFlight goes live.",
    kind: "idle" as "idle" | "ok" | "err",
  });
  const openedOnce = useRef(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const doOpen = useCallback(() => {
    if (openedOnce.current) return;
    if (wasPopupSeenRecently()) return;
    openedOnce.current = true;
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    markPopupSeen();
  }, []);

  // Lock scroll when open, focus email input
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Esc to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Triggers: 45% scroll + exit intent on desktop
  useEffect(() => {
    const scrollTrigger = () => {
      if (openedOnce.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      if (pct >= 0.45) {
        doOpen();
      }
    };
    window.addEventListener("scroll", scrollTrigger, { passive: true });

    const exitTrigger = (e: MouseEvent) => {
      if (openedOnce.current) return;
      if (e.clientY <= 4) doOpen();
    };
    if (window.matchMedia("(hover: hover)").matches) {
      document.addEventListener("mouseout", exitTrigger);
    }

    const onSuppress = () => {
      // if someone signs up inline, suppress the popup entirely
      openedOnce.current = true;
    };
    window.addEventListener("lym:waitlist-signup", onSuppress);

    return () => {
      window.removeEventListener("scroll", scrollTrigger);
      document.removeEventListener("mouseout", exitTrigger);
      window.removeEventListener("lym:waitlist-signup", onSuppress);
    };
  }, [doOpen]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();
    if (!isValidEmail(email)) {
      setHint({
        text: "That email doesn't look right. Try again.",
        kind: "err",
      });
      return;
    }
    setDone(true);
    markPopupSeen();
    window.dispatchEvent(new CustomEvent("lym:waitlist-signup"));
    setTimeout(close, 3200);
  };

  const hintClass =
    hint.kind === "ok"
      ? "popup__hint is-ok"
      : hint.kind === "err"
      ? "popup__hint is-err"
      : "popup__hint";

  return (
    <div
      className={`popup ${open ? "is-open" : ""} ${done ? "is-done" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popupH"
      aria-hidden={!open}
    >
      <div className="popup__backdrop" onClick={close} />
      <div className="popup__card">
        <button
          type="button"
          className="popup__close"
          onClick={close}
          aria-label="Close dialog"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="popup__aurora" aria-hidden="true">
          <span className="popup__ray" />
          <span className="popup__ray popup__ray--2" />
        </div>

        <div className="popup__body">
          <span className="eyebrow popup__eye">
            <span className="eyebrow-dot" aria-hidden="true" />
            First-access list · Limited spots
          </span>
          <h3 className="display popup__h" id="popupH">
            Be the first <em className="display-serif">to talk back.</em>
          </h3>
          <p className="popup__sub">
            TestFlight goes out to the first 500 people on the list. Drop your
            email and jump the line. No drip, no pitch. One link when it&apos;s
            ready.
          </p>

          <form className="popup__form" onSubmit={onSubmit} noValidate>
            <label className="sr-only" htmlFor="popupEmail">
              Email
            </label>
            <div className="popup__row">
              <input
                ref={inputRef}
                className="popup__input"
                id="popupEmail"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@domain.com"
              />
              <button className="popup__submit" type="submit">
                <span>Get my spot</span>
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
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className={hintClass}>{hint.text}</p>
          </form>

          <button
            type="button"
            className="popup__dismiss"
            onClick={close}
          >
            No thanks, I&apos;ll find it later
          </button>

          <div className="popup__done" role="status">
            ✓ You&apos;re in. We&apos;ll email you the TestFlight link the
            moment it&apos;s live. Talk soon.
          </div>
        </div>
      </div>
    </div>
  );
}
