"use client";

import { useEffect } from "react";

/** 3D tilt on cards matching `.tiltable`. Disabled on touch-only & reduced motion. */
export function useTilt(selector = ".tiltable") {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || coarse) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const handlers = new Map<HTMLElement, { move: (e: PointerEvent) => void; leave: () => void }>();

    els.forEach((card) => {
      const move = (e: PointerEvent) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.classList.add("is-tilt");
        card.style.setProperty("--tx", `-4px`);
        card.style.setProperty("--ty", `-4px`);
        card.style.setProperty("--ry", `${x * 6}deg`);
        card.style.setProperty("--rx", `${-y * 6}deg`);
      };
      const leave = () => {
        card.classList.remove("is-tilt");
        card.style.removeProperty("--tx");
        card.style.removeProperty("--ty");
        card.style.removeProperty("--rx");
        card.style.removeProperty("--ry");
      };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      handlers.set(card, { move, leave });
    });

    return () => {
      handlers.forEach(({ move, leave }, card) => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", leave);
      });
    };
  }, [selector]);
}
