"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LINES = [
  "ok so the thing I can't stop thinking about is…",
  "the meeting was fine. I'm still wired about it though.",
  "I think I'm more tired than sad. just tired.",
  "fine. let's say it out loud and see if it's actually real.",
  "honestly, I know what I need to do. I'm just avoiding it.",
];

export function LiveDemo() {
  const waveRef = useRef<HTMLCanvasElement | null>(null);
  const [clock, setClock] = useState("00:00");
  const [transcript, setTranscript] = useState("");

  // Waveform
  useEffect(() => {
    const canvas = waveRef.current;
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

    const start = performance.now();
    const N = 140;
    const seeds = Array.from({ length: N }, () => Math.random() * 1000);

    let raf: number | null = null;
    let visible = true;
    const draw = (t: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const mid = h / 2;
      const gap = w / N;
      const bw = gap * 0.6;
      const time = (t - start) / 1000;

      for (let i = 0; i < N; i++) {
        const s1 = Math.sin(time * 2.2 + seeds[i] * 0.02 + i * 0.35);
        const s2 = Math.sin(time * 5.5 + seeds[i] * 0.07 + i * 0.18);
        const s3 = Math.sin(time * 1.1 + seeds[i] * 0.03 + i * 0.1);
        const a = s1 * 0.5 + s2 * 0.28 + s3 * 0.32;
        const env = Math.sin((i / N) * Math.PI);
        const amp = (Math.abs(a) * 0.65 + 0.08) * env * (h * 0.46);
        const x = i * gap + (gap - bw) / 2;
        const alpha = 0.35 + env * 0.55;
        ctx.fillStyle = `rgba(245,166,35,${alpha})`;
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

      const secs = Math.floor(time) % 60;
      const mins = Math.floor(time / 60) % 60;
      setClock(
        String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0")
      );

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          visible = e.isIntersecting;
          if (visible && raf === null) raf = requestAnimationFrame(draw);
          if (!visible && raf !== null) {
            cancelAnimationFrame(raf);
            raf = null;
          }
        });
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", resize);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  // Transcript typewriter
  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setTranscript(LINES[0]);
      return;
    }
    let li = 0;
    let ci = 0;
    let del = false;
    let timer: number | null = null;

    const step = () => {
      const full = LINES[li];
      if (!del) {
        ci++;
        setTranscript(full.slice(0, ci));
        if (ci >= full.length) {
          del = true;
          timer = window.setTimeout(step, 1800);
          return;
        }
      } else {
        ci -= 2;
        if (ci < 0) ci = 0;
        setTranscript(full.slice(0, ci));
        if (ci <= 0) {
          del = false;
          li = (li + 1) % LINES.length;
          timer = window.setTimeout(step, 400);
          return;
        }
      }
      timer = window.setTimeout(
        step,
        del ? 18 : 34 + Math.random() * 28
      );
    };
    timer = window.setTimeout(step, 400);
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="hero__demo" data-in>
      <div className="live-panel">
        <div className="live-panel__head">
          <div className="live-panel__left">
            <span className="live-panel__rec">
              <span className="live-panel__recdot" />
              REC
            </span>
            <span className="live-panel__time">{clock}</span>
          </div>
          <div className="live-panel__mid">
            <span className="live-panel__label">
              Log #128 · Wednesday evening
            </span>
          </div>
          <div className="live-panel__right">
            <span className="mood-chip">😵‍💫 overwhelmed</span>
          </div>
        </div>

        <div className="live-panel__body">
          <canvas
            ref={waveRef}
            className="live-wave"
            width={1600}
            height={180}
            aria-hidden="true"
          />
          <div className="live-transcript" aria-live="polite">
            {transcript}
          </div>
        </div>

        <div className="live-panel__foot">
          <div className="live-panel__actions">
            <span className="live-action">▶ replay</span>
            <span className="live-action">✎ read transcript</span>
            <span className="live-action">✨ add to patterns</span>
          </div>
          <div className="live-panel__meta">
            <span className="dot-live" />
            on-device · not uploaded
          </div>
        </div>
      </div>

      <div className="hero__phone">
        <div className="hero__phone-render">
          <Image
            src="/assets/hero-phone.webp"
            alt="Mialo app. Tap to speak."
            width={1400}
            height={2769}
            sizes="(max-width: 900px) 60vw, 420px"
            priority
          />
        </div>
        <div className="float-tag float-tag--a">
          <span>↳</span> transcribed locally
        </div>
        <div className="float-tag float-tag--b">
          <span>✦</span> mood detected: settling
        </div>
        <div className="float-tag float-tag--c">
          <span>●</span> 12-day streak
        </div>
      </div>
    </div>
  );
}
