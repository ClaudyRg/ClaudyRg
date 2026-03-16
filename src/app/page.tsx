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
      <footer className="relative pt-20 pb-12 px-6 border-t border-white/5 bg-galaxy-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tighter">ClauRg</h3>
            <p className="text-sm text-galaxy-text-muted leading-relaxed max-w-sm mb-6">
              Grand Architect of the StarLight Network. Building digital universes one line of binary at a time. Singular vision, absolute execution.
            </p>
            <div className="flex gap-4">
               {/* Add social/github links here if needed */}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-galaxy-blue mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-galaxy-text-muted">
              <li><a href="#" className="hover:text-galaxy-cyan transition-colors">The Archives</a></li>
              <li><a href="#" className="hover:text-galaxy-cyan transition-colors">Pulse Status</a></li>
              <li><a href="#" className="hover:text-galaxy-cyan transition-colors">Engine Room</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-galaxy-cyan mb-6">Legal Protocol</h4>
            <p className="text-[10px] text-galaxy-text-muted uppercase tracking-[0.1em] leading-relaxed">
              Copyright © 2026 StarLight Network. All Rights Reserved. Intellectual Property of Cavie/ClaudyRg.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-[10px] text-galaxy-text-muted uppercase tracking-[0.2em] mb-4 md:mb-0">
            Forged in the fires of pure code.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-galaxy-text-muted uppercase tracking-[0.2em]">
            <span>System Pulse</span>
            <div className="w-1.5 h-1.5 rounded-full bg-galaxy-cyan animate-pulse" />
            <span className="text-galaxy-blue">Online</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
