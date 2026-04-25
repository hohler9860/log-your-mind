"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onScroll = () => {
      const bar = barRef.current;
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      bar.style.width = pct + "%";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__bar" ref={barRef} />
    </div>
  );
}
