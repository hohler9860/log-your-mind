"use client";

import { useEffect, useRef, useState } from "react";

/** Animated count-up from 0 to `end` once element is visible. */
export function useCountUp(end: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const played = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!el) return;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      setValue(end);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || played.current) return;
          played.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(eased * end));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return { ref, value };
}
