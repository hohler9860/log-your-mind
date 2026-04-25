"use client";

import { useEffect } from "react";

/**
 * Adds `.is-in` to every element matching the selector once it enters the viewport.
 * Uses IntersectionObserver so it runs cheaply.
 */
export function useReveal(selector = "[data-in], [data-chars]") {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = document.querySelectorAll<HTMLElement>(selector);
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
