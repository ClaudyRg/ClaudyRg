"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* === YEAR BADGE (top right) === */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-10 right-10 md:top-16 md:right-20"
      >
        <span className="text-4xl md:text-5xl font-display font-black italic text-purple-bright opacity-80">
          2026
        </span>
      </motion.div>

      {/* === MAIN CONTENT GRID === */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* LEFT: Text content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Portfolio title */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-4 select-none"
          >
            <div className="flex items-baseline gap-0">
              <span className="text-[4.5rem] md:text-[7rem] lg:text-[8.5rem] font-display font-black text-white leading-none tracking-tight" style={{ transform: "rotate(-3deg)" }}>
                P
              </span>
              <span className="relative text-[4.5rem] md:text-[7rem] lg:text-[8.5rem] font-display font-black text-white leading-none tracking-tight">
                <span className="relative">
                  O
                  <svg className="absolute" width="40%" height="40%" viewBox="0 0 24 24" fill="none" style={{ top: "30%", left: "30%" }}>
                    <path d="M4 4L20 20M20 4L4 20" stroke="#120F1A" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
              <span className="text-[4.5rem] md:text-[7rem] lg:text-[8.5rem] font-display font-black text-purple-primary leading-none tracking-tight">
                R
              </span>
              <span className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-script text-white leading-none -ml-1 md:-ml-2">
                t
              </span>
              <span className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-script text-white leading-none -ml-2">
                f
              </span>
              <span className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-script text-white leading-none -ml-1">
                o
              </span>
              <span className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-script text-white leading-none -ml-1">
                l
              </span>
              <span className="relative text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-script text-white leading-none -ml-1">
                <svg className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#8A5CFF" />
                </svg>
                i
              </span>
              <span className="relative text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-script text-white leading-none -ml-1">
                O
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#6B5CE7" />
                </svg>
              </span>
            </div>

            {/* Wavy underline */}
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, delay: 1 }}
              className="w-full h-3 mt-1"
              viewBox="0 0 500 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 6 Q30 0 60 6 T120 6 T180 6 T240 6 T300 6 T360 6 T420 6 T480 6 L500 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-script text-purple-bright drop-shadow-[0_4px_20px_rgba(107,92,231,0.4)]">
              ClaudyRg
            </h2>
          </motion.div>

          {/* Tagline & CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="w-full flex flex-col items-center lg:items-start"
          >
            <div className="badge mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#8A5CFF" />
              </svg>
              Full Stack Developer & Creative Architect
            </div>

            <p className="text-lg md:text-xl text-text-secondary font-light leading-relaxed max-w-xl mb-10 lg:text-left text-center">
              Full-stack developer and CS student who also happens to be obsessed with 3D animation and design.
              <span className="text-purple-soft font-medium"> I handle everything — from writing backend logic to crafting interfaces that actually look good.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
              <a href="#about" className="btn-primary group flex items-center gap-3">
                Explore My Work
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#projects" className="text-text-muted hover:text-white transition-all text-sm font-medium tracking-[0.2em] uppercase flex items-center gap-3 group border-b border-transparent hover:border-purple-primary/40 py-1">
                View Projects
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Photo — tilted polaroid style, NOT a circle */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: -6 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-shrink-0"
        >
          {/* Soft purple glow behind the card */}
          <div className="absolute -inset-12 bg-purple-primary/15 blur-[80px] rounded-full" />

          {/* Polaroid-style photo card */}
          <motion.div
            animate={{ rotate: [3, 5, 3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Tape strip on top */}
            <div className="absolute -top-5 left-1/2 w-20 h-8 bg-white/20 backdrop-blur-sm rounded-sm z-20 shadow-sm" style={{ transform: "translateX(-50%) rotate(-2deg)" }} />

            {/* Card frame */}
            <div className="relative bg-[#1C1828] border-2 border-purple-primary/20 rounded-2xl p-4 pb-16 shadow-[0_25px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(107,92,231,0.1)]">
              {/* Photo */}
              <div className="relative w-60 h-72 md:w-72 md:h-84 rounded-lg overflow-hidden bg-night-mid">
                <img
                  src="/profile.jpg"
                  alt="ClaudyRg"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/adventurer/svg?seed=ClaudyRg";
                  }}
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-night-deep/40 via-transparent to-night-deep/10 pointer-events-none" />
              </div>

              {/* Handwritten caption at bottom of polaroid */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-xl font-script text-purple-soft/80">claudy, 2026</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-purple-primary/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-purple-bright"
          />
        </div>
      </motion.div>
    </section>
  );
}
