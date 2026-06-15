import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { Decorations } from "@/components/Decorations";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Decorations />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Footer />
    </main>
  );
}
