import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { Decorations } from "@/components/Decorations";

function SectionDivider() {
  return (
    <div className="relative w-full h-24 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Wavy line divider */}
      <svg className="w-full max-w-3xl h-6 opacity-30" viewBox="0 0 600 20" fill="none" preserveAspectRatio="none">
        <path d="M0 10 Q40 2 80 10 T160 10 T240 10 T320 10 T400 10 T480 10 T560 10 L600 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {/* Center sparkle */}
      <svg className="absolute w-5 h-5 text-purple-bright/50" viewBox="0 0 24 24" fill="none">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Decorations />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Services />
      <Footer />
    </main>
  );
}
