"use client";

import { motion } from "framer-motion";
import { Starfield } from "./Starfield";
import { Sparkles, Rocket, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center min-h-[90vh] overflow-hidden">
      <Starfield />
      
      {/* The Architect's Portal */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative mb-16 group"
      >
        {/* Intense Celestial Glow */}
        <div className="absolute inset-0 bg-galaxy-blue/40 rounded-full blur-[100px] group-hover:bg-galaxy-cyan/50 transition-all duration-1000" />
        
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-2 bg-gradient-to-tr from-galaxy-blue via-galaxy-cyan to-galaxy-sky shadow-[0_0_50px_rgba(59,130,246,0.5)]">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-galaxy-black bg-galaxy-deep-blue relative">
            <img 
              src="/profile.jpg" 
              alt="ClauRg" 
              key={Date.now()}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/adventurer/svg?seed=ClauRg";
              }}
            />
          </div>
          
          {/* Refined Status Badge - Positioned inside or clearly outside */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-galaxy-black border border-galaxy-blue/40 px-4 py-1.5 rounded-full galaxy-glass flex items-center gap-2 shadow-2xl z-20">
            <div className="w-2.5 h-2.5 rounded-full bg-galaxy-cyan animate-pulse shadow-[0_0_12px_rgba(6,182,212,1)]" />
            <span className="text-[11px] font-bold text-galaxy-sky uppercase tracking-widest">Architect Mode</span>
          </div>
        </div>
      </motion.div>

      {/* Identity & Legacy */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="z-10 w-full flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-galaxy-blue/10 border border-galaxy-blue/20 text-galaxy-sky text-[11px] font-bold uppercase tracking-[0.4em] mb-10 backdrop-blur-sm">
          <Sparkles size={14} className="text-galaxy-cyan" /> The Grand Architect
        </div>
        
        <h1 className="text-7xl md:text-9xl font-medium mb-8 pb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-galaxy-sky/30 tracking-normal leading-[1.1] drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          ClauRg
        </h1>
        
        {/* Magnetic Persona Bio */}
        <div className="max-w-3xl mx-auto mb-14 px-6 text-center">
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed italic mb-8 opacity-90 tracking-widest">
            "A digital blossom in the vast galaxy, unfolding with singular vision." 🌸
          </p>
          <p className="text-lg md:text-xl text-galaxy-text-muted font-light leading-relaxed max-w-2xl mx-auto">
            A visionary <span className="text-white font-medium uppercase tracking-[0.1em]">Full Stack Developer</span> 
            shaping digital universes. From the core logic of StarLight to pixel-perfect interfaces, 
            I build experiences with singular, absolute vision.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="galaxy-button group flex items-center gap-3 px-12">
            Initiate Pulse <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <a href="#dream-drive" className="text-galaxy-text-muted hover:text-white transition-all text-sm font-bold tracking-[0.3em] uppercase flex items-center gap-3 group border-b border-transparent hover:border-galaxy-cyan/30 py-1">
            Explore Orbit <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform animate-bounce text-galaxy-cyan" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
