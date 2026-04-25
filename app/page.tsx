import { Access } from "@/components/Access";
import { Audience } from "@/components/Audience";
import { ClientEffects } from "@/components/ClientEffects";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Finale } from "@/components/Finale";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Marquee } from "@/components/Marquee";
import { Mcp } from "@/components/Mcp";
import { Nav } from "@/components/Nav";
import { Popup } from "@/components/Popup";
import { Problem } from "@/components/Problem";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Showcase } from "@/components/Showcase";
import { Stats } from "@/components/Stats";
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
        <Stats />
        <HowItWorks />
        <Features />
        <Showcase />
        <Mcp />
        <Audience />
        <Access />
        <Testimonial />
        <FAQ />
        <Finale />
      </main>

      <Footer />
      <Popup />
      <ClientEffects />
    </>
  );
}
