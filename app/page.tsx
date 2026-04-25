import { Access } from "@/components/Access";
import { AIChat } from "@/components/AIChat";
import { Audience } from "@/components/Audience";
import { ClientEffects } from "@/components/ClientEffects";
import { DailyPrompts } from "@/components/DailyPrompts";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Finale } from "@/components/Finale";
import { FollowUps } from "@/components/FollowUps";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Marquee } from "@/components/Marquee";
import { Mcp } from "@/components/Mcp";
import { MoodPatterns } from "@/components/MoodPatterns";
import { Nav } from "@/components/Nav";
import { Popup } from "@/components/Popup";
import { Pricing } from "@/components/Pricing";
import { Privacy } from "@/components/Privacy";
import { Problem } from "@/components/Problem";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Showcase } from "@/components/Showcase";
import { Testimonial } from "@/components/Testimonial";

export default function Page() {
  return (
    <>
      <Grain />
      <ScrollProgress />
      <Nav />

      <main id="main">
        <Hero />
        <Marquee />
        <Problem />
        <HowItWorks />
        <DailyPrompts />
        <FollowUps />
        <AIChat />
        <Features />
        <MoodPatterns />
        <Showcase />
        <Privacy />
        <Mcp />
        <Audience />
        <Pricing />
        <Testimonial />
        <Access />
        <FAQ />
        <Finale />
      </main>

      <Footer />
      <Popup />
      <ClientEffects />
    </>
  );
}
