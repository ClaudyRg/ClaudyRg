"use client";

import { motion } from "framer-motion";
import { Sparkles, Cherry, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center min-h-[90vh] overflow-hidden">
      {/* The Blossom Portal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative mb-16 group"
      >
        {/* Soft Floral Glow */}
        <div className="absolute inset-0 bg-blossom-accent/20 rounded-full blur-[100px] group-hover:bg-blossom-accent/30 transition-all duration-1000" />
        
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1.5 bg-gradient-to-tr from-blossom-accent via-blossom-pink to-blossom-teal shadow-[0_0_50px_rgba(240,98,146,0.2)]">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-blossom-black bg-blossom-deep relative">
            <img 
              src="/profile.jpg" 
              alt="ClauRg" 
              key={Date.now()}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/adventurer/svg?seed=ClauRg";
              }}
            />
          </div>
          
          {/* Status Badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blossom-black border border-blossom-accent/20 px-5 py-2 rounded-full blossom-glass flex items-center gap-2 shadow-2xl z-20">
            <div className="w-2 h-2 rounded-full bg-blossom-accent animate-pulse shadow-[0_0_10px_rgba(240,98,146,1)]" />
            <span className="text-[10px] font-bold text-blossom-pink uppercase tracking-[0.2em] font-body">In Bloom</span>
          </div>
        </div>
      </motion.div>

      {/* Identity & Legacy */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="z-10 w-full flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blossom-accent/5 border border-blossom-accent/10 text-blossom-pink text-[10px] font-bold uppercase tracking-[0.4em] mb-10 backdrop-blur-sm font-body">
          <Sparkles size={14} className="text-blossom-accent" /> The Digital Blossom
        </div>
        
        <h1 className="text-7xl md:text-9xl font-heading font-medium mb-8 pb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-blossom-pink to-blossom-accent/40 tracking-tight leading-[1.1]">
          ClauRg
        </h1>
        
        {/* Soft Persona Bio */}
        <div className="max-w-3xl mx-auto mb-14 px-6 text-center">
          <p className="text-2xl md:text-3xl text-blossom-pink font-light leading-relaxed italic mb-8 opacity-90 tracking-wide font-heading">
            "A delicate blossom in the digital vastness, <br/> blooming with singular, absolute vision." 🌸
          </p>
          <p className="text-lg md:text-xl text-blossom-text-muted font-light leading-relaxed max-w-2xl mx-auto font-body">
            A visionary <span className="text-white font-medium uppercase tracking-[0.1em]">Full Stack Developer</span> 
            crafting experiences that feel alive. From core architecture to the softest UI touch, 
            I build digital universes with soul.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="blossom-button group flex items-center gap-3 px-12">
            Initiate Pulse <Cherry size={20} className="group-hover:rotate-12 transition-transform" />
          </button>
          <a href="#dream-drive" className="text-blossom-text-muted hover:text-white transition-all text-sm font-medium tracking-[0.3em] uppercase flex items-center gap-3 group border-b border-transparent hover:border-blossom-accent/30 py-1 font-body">
            Explore Garden <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform animate-bounce text-blossom-accent" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
