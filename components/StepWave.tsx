"use client";

import { useEffect, useRef } from "react";

export function StepWave() {
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

    const N = 32;
    const seeds = Array.from({ length: N }, () => Math.random() * 100);
    const start = performance.now();
    let raf: number | null = null;

    const draw = (t: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const mid = h / 2;
      const gap = w / N;
      const bw = gap * 0.55;
      const time = (t - start) / 1000;
      for (let i = 0; i < N; i++) {
        const s = Math.sin(time * 2.5 + seeds[i] * 0.3 + i * 0.4);
        const env = Math.sin((i / N) * Math.PI);
        const amp = (Math.abs(s) * 0.6 + 0.15) * env * (h * 0.42);
        const x = i * gap + (gap - bw) / 2;
        ctx.fillStyle = "rgba(26,26,26,0.9)";
        const r = Math.min(bw / 2, 3);
        const top = mid - amp;
        const height = amp * 2;
        ctx.beginPath();
        ctx.moveTo(x + r, top);
        ctx.lineTo(x + bw - r, top);
        ctx.quadraticCurveTo(x + bw, top, x + bw, top + r);
        ctx.lineTo(x + bw, top + height - r);
        ctx.quadraticCurveTo(x + bw, top + height, x + bw - r, top + height);
        ctx.lineTo(x + r, top + height);
        ctx.quadraticCurveTo(x, top + height, x, top + height - r);
        ctx.lineTo(x, top + r);
        ctx.quadraticCurveTo(x, top, x + r, top);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          if (raf === null) raf = requestAnimationFrame(draw);
        } else if (raf !== null) {
          cancelAnimationFrame(raf);
          raf = null;
        }
      });
    });
    io.observe(canvas);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", resize);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="step-wave"
      width={600}
      height={260}
      aria-hidden="true"
    />
  );
}
