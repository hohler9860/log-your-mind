# Log Your Mind

Marketing site for Log Your Mind — built with Next.js 15 (App Router) and TypeScript. Orange-and-white palette, dialo-style design DNA.

## Run locally

```bash
npm install
npm run dev
```

Opens on [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

Push the repo to GitHub and connect it to Vercel, or:

```bash
npx vercel
```

No env vars required for the current build. Waitlist submissions currently only run client-side (fake success) — hook up a backend (Supabase / ConvertKit / Beehiiv / Resend) by editing `components/Access.tsx` and `components/Popup.tsx`.

## Project layout

```
app/
  layout.tsx        root layout, loads fonts, metadata
  page.tsx          composes every section
  globals.css       full style system (tokens, cards, popup, etc)

components/
  Nav.tsx           sticky pill nav + mobile drawer
  Hero.tsx          headline + rotor + CTAs
  LiveDemo.tsx      live waveform + typing transcript + 3D phone
  PhoneFrame.tsx    reusable titanium iPhone mockup
  Marquee.tsx       charcoal features marquee
  Problem.tsx       3 animated stat cards
  Stats.tsx         4-up stat grid
  HowItWorks.tsx    3 step cards
  StepWave.tsx      canvas wave for step 1
  Features.tsx      6-up feature grid
  Mcp.tsx           AI context section
  McpTerm.tsx       terminal with typewriter + URL scramble
  Audience.tsx      "Built for" grid
  Access.tsx        inline waitlist capture
  Testimonial.tsx   quote card with mini waveform
  FAQ.tsx           accordion
  Finale.tsx        amber CTA block with aurora rays
  Footer.tsx        back-to-top + wordmark
  Popup.tsx         exit-intent / 45%-scroll waitlist modal
  ClientEffects.tsx page-wide reveal/tilt/magnetic hooks
  BrandLogo.tsx     mark + wordmark subcomponents
  Grain.tsx         noise overlay
  ScrollProgress.tsx top progress bar
  Counter.tsx       animated number component

hooks/
  useReveal.ts      IntersectionObserver reveal
  useTilt.ts        3D card tilt
  useMagnetic.ts    magnetic cursor pull on buttons
  useCountUp.ts     animated count-up

lib/
  email.ts          email validation + popup storage helpers

public/assets/      app screenshots (jpeg)
```

## Responsive strategy

- **Mobile (≤520px)**: single-column grids, sheet-style popup from the bottom, section numbers hidden, nav collapses to hamburger + slide-in drawer.
- **Tablet (≤900px)**: hero demo stacks (live panel over phone), MCP section stacks, float tags on phone hide.
- **Desktop (>900px)**: full side-by-side layouts, 3D tilt on cards, magnetic cursor on buttons.
- `prefers-reduced-motion` disables animations, transitions, and the rotor cycle.

## Next steps

- Wire the waitlist submits to a real backend (Resend + Supabase recommended).
- Add OG image: drop `app/opengraph-image.tsx`.
- Swap App Store link + analytics in `Finale.tsx`.
