import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { DreamDrive } from "@/components/DreamDrive";
import { Biography } from "@/components/Biography";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <Biography />
      <DreamDrive />
      <Projects />

      {/* Footer */}
      <footer className="relative pt-32 pb-16 px-6 border-t border-white/5 bg-blossom-black/40 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-heading font-medium text-white mb-8 tracking-tight">ClauRg</h3>
            <p className="text-base text-blossom-text-muted font-body font-light leading-relaxed max-w-sm mb-8 opacity-90">
              Blossom Architect of the StarLight Network. Cultivating digital gardens with singular, absolute vision.
            </p>
            <div className="flex gap-4">
               {/* Add social links here */}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blossom-accent mb-8 font-body">Branches</h4>
            <ul className="space-y-5 text-sm font-body text-blossom-text-muted">
              <li><a href="#" className="hover:text-blossom-pink transition-colors">The Archives</a></li>
              <li><a href="#" className="hover:text-blossom-pink transition-colors">Pulse Status</a></li>
              <li><a href="#" className="hover:text-blossom-pink transition-colors">Garden Bed</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blossom-teal mb-8 font-body">Legal Blossom</h4>
            <p className="text-[10px] text-blossom-text-muted/60 uppercase tracking-[0.2em] leading-relaxed font-body">
              Copyright © 2026 StarLight Garden. All Rights Reserved. Intellectual Property of Cavie.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5">
          <p className="text-[9px] text-blossom-text-muted/50 uppercase tracking-[0.3em] mb-6 md:mb-0 font-body">
            Grown from the seeds of pure code.
          </p>
          <div className="flex items-center gap-3 text-[9px] text-blossom-text-muted/50 uppercase tracking-[0.3em] font-body">
            <span>Garden Health</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blossom-teal animate-pulse" />
            <span className="text-blossom-accent font-bold">In Bloom</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
