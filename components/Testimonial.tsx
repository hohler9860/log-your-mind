"use client";

import { useEffect, useRef } from "react";

export function Testimonial() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 48;
    const seeds = Array.from({ length: N }, () => Math.random() * 100);
    const start = performance.now();
    let raf: number | null = null;

    const draw = (t: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const mid = h / 2;
      const gap = w / N;
      const bw = gap * 0.5;
      const time = (t - start) / 1000;
      for (let i = 0; i < N; i++) {
        const s = Math.sin(time * 2.2 + seeds[i] * 0.3 + i * 0.3);
        const env = Math.sin((i / N) * Math.PI);
        const amp = (Math.abs(s) * 0.6 + 0.12) * env * (h * 0.42);
        const x = i * gap + (gap - bw) / 2;
        ctx.fillStyle = "rgba(245,166,35,0.85)";
        ctx.fillRect(x, mid - amp, bw, amp * 2);
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="quote-sec section--cream has-index"
      data-index="08"
    >
      <div className="container container--narrow">
        <div className="quote-card" data-in>
          <span className="quote-card__mark">&quot;</span>
          <blockquote className="quote-card__text">
            I stopped journaling six years ago because I kept running out of
            things to say to a blank page. I never run out of things to say
            when I&apos;m <em className="display-serif">talking</em>.
          </blockquote>
          <div className="quote-card__foot">
            <canvas
              ref={canvasRef}
              className="quote-wave"
              width={240}
              height={40}
              aria-hidden="true"
            />
            <span className="quote-card__attr">
              Early user · three weeks in · logged 47 times
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
