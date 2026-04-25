"use client";

import Image from "next/image";

export function LiveDemo() {
  return (
    <div className="hero__demo hero__demo--phone-only" data-in>
      <div className="hero__phone">
        <div className="hero__phone-render">
          <Image
            src="/assets/hero-phone.webp"
            alt="Mialo app. Tap to speak."
            width={1400}
            height={2769}
            sizes="(max-width: 900px) 70vw, 460px"
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
