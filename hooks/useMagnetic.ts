"use client";

import { useEffect } from "react";

/** Pull buttons toward the cursor. Touch-friendly: skipped on coarse pointers. */
export function useMagnetic(selector = "[data-magnetic]", strength = 12) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || coarse) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const handlers: Array<() => void> = [];

    els.forEach((btn) => {
      const move = (e: PointerEvent) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${(x / r.width) * strength}px, ${(y / r.height) * strength}px)`;
      };
      const leave = () => {
        btn.style.transform = "";
      };
      btn.addEventListener("pointermove", move);
      btn.addEventListener("pointerleave", leave);
      handlers.push(() => {
        btn.removeEventListener("pointermove", move);
        btn.removeEventListener("pointerleave", leave);
      });
    });

    return () => handlers.forEach((fn) => fn());
  }, [selector, strength]);
}
