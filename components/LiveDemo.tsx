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

      // Soft amber glow background (pre-bars)
      const glow = ctx.createRadialGradient(w / 2, mid, 40, w / 2, mid, w * 0.5);
      glow.addColorStop(0, "rgba(245,166,35,0.18)");
      glow.addColorStop(0.6, "rgba(245,166,35,0.04)");
      glow.addColorStop(1, "rgba(245,166,35,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Bars: gradient amber -> peach + mirror reflection
      for (let i = 0; i < N; i++) {
        const s1 = Math.sin(time * 2.2 + seeds[i] * 0.02 + i * 0.35);
        const s2 = Math.sin(time * 5.5 + seeds[i] * 0.07 + i * 0.18);
        const s3 = Math.sin(time * 1.1 + seeds[i] * 0.03 + i * 0.1);
        const a = s1 * 0.5 + s2 * 0.28 + s3 * 0.32;
        const env = Math.sin((i / N) * Math.PI);
        const amp = (Math.abs(a) * 0.65 + 0.08) * env * (h * 0.42);
        const x = i * gap + (gap - bw) / 2;
        const r = Math.min(bw / 2, 2.5);

        // top half (full amber gradient, top -> mid)
        const top = mid - amp;
        const grad = ctx.createLinearGradient(0, top, 0, mid);
        grad.addColorStop(0, "rgba(255,212,140,0.95)");
        grad.addColorStop(0.55, "rgba(245,166,35,0.95)");
        grad.addColorStop(1, "rgba(245,166,35,0.65)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(x + r, top);
        ctx.lineTo(x + bw - r, top);
        ctx.quadraticCurveTo(x + bw, top, x + bw, top + r);
        ctx.lineTo(x + bw, mid);
        ctx.lineTo(x, mid);
        ctx.lineTo(x, top + r);
        ctx.quadraticCurveTo(x, top, x + r, top);
        ctx.fill();

        // bottom half (mirrored, faded)
        const bot = mid + amp;
        const grad2 = ctx.createLinearGradient(0, mid, 0, bot);
        grad2.addColorStop(0, "rgba(245,166,35,0.55)");
        grad2.addColorStop(0.7, "rgba(245,166,35,0.18)");
        grad2.addColorStop(1, "rgba(245,166,35,0.04)");
        ctx.fillStyle = grad2;
        ctx.beginPath();
        ctx.moveTo(x, mid);
        ctx.lineTo(x + bw, mid);
        ctx.lineTo(x + bw, bot - r);
        ctx.quadraticCurveTo(x + bw, bot, x + bw - r, bot);
        ctx.lineTo(x + r, bot);
        ctx.quadraticCurveTo(x, bot, x, bot - r);
        ctx.lineTo(x, mid);
        ctx.fill();
      }

      // Center hairline for elegance
      ctx.fillStyle = "rgba(245,166,35,0.18)";
      ctx.fillRect(0, mid - 0.5, w, 1);

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
        <div className="live-panel__glow" aria-hidden="true" />

        <div className="live-panel__head">
          <div className="live-panel__left">
            <span className="live-panel__rec">
              <span className="live-panel__recdot" />
              REC
            </span>
            <span className="live-panel__time">{clock}</span>
            <span className="live-panel__sig" aria-hidden="true">
              <span /><span /><span /><span />
            </span>
          </div>
          <div className="live-panel__mid">
            <span className="live-panel__label">
              Log #128
              <span className="live-panel__sep">·</span>
              <em>Wednesday evening</em>
            </span>
          </div>
          <div className="live-panel__right">
            <span className="mood-chip">
              <span className="mood-chip__dot" />
              overwhelmed
            </span>
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
          <div className="live-transcript-wrap">
            <span className="live-transcript-quote" aria-hidden="true">&ldquo;</span>
            <div className="live-transcript" aria-live="polite">
              {transcript}
            </div>
          </div>
        </div>

        <div className="live-panel__foot">
          <div className="live-panel__actions">
            <span className="live-action">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="6 4 20 12 6 20 6 4" />
              </svg>
              Replay
            </span>
            <span className="live-action">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
              </svg>
              Read transcript
            </span>
            <span className="live-action">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m12 3 1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z" />
              </svg>
              Add to patterns
            </span>
          </div>
          <div className="live-panel__meta">
            <span className="dot-live" />
            <span>On-device</span>
            <span className="live-panel__metasep">·</span>
            <span>Not uploaded</span>
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
