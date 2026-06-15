"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiNextdotjs,
  SiBlender,
  SiNodedotjs,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

// --- DOODLE: Smiling Moon (top-left) ---
function DoodleMoon() {
  return (
    <motion.svg
      width="120" height="120" viewBox="0 0 120 120" fill="none"
      animate={{ y: [0, -12, 0], rotate: [-2, 3, -2] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="opacity-90"
    >
      {/* Outer glow ring */}
      <circle cx="60" cy="60" r="50" fill="none" stroke="#6B5CE7" strokeWidth="2" opacity="0.25" strokeDasharray="6 8" />
      {/* Moon body */}
      <circle cx="60" cy="60" r="40" fill="#1E1B29" stroke="white" strokeWidth="3.5" />
      {/* Crescent shadow */}
      <path d="M60 20C78 20 92 34 92 52C92 70 78 84 60 84C54 84 48.5 82.5 43.5 80C53 76 60 66 60 54C60 39 50 26 36 20C42.5 16 51 20 60 20Z" fill="#6B5CE7" opacity="0.3" />
      {/* Eyes — dot style */}
      <circle cx="48" cy="52" r="4" fill="#8A5CFF" />
      <circle cx="72" cy="52" r="4" fill="#8A5CFF" />
      {/* Smile */}
      <path d="M48 70 Q60 80 72 70" stroke="#8A5CFF" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Tiny stars around */}
      <circle cx="15" cy="25" r="2.5" fill="white" opacity="0.5" />
      <circle cx="105" cy="35" r="2" fill="white" opacity="0.4" />
      <circle cx="95" cy="12" r="1.5" fill="#8A5CFF" opacity="0.5" />
    </motion.svg>
  );
}

// --- DOODLE: Cat with X-eyes + whiskers + keychain (bottom-left) ---
function DoodleCat() {
  return (
    <motion.svg
      width="150" height="180" viewBox="0 0 150 180" fill="none"
      animate={{ y: [0, -8, 0], rotate: [-2, 3, -2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="opacity-85"
    >
      {/* Body */}
      <ellipse cx="75" cy="100" rx="45" ry="48" fill="#2A2534" stroke="white" strokeWidth="3.5" />
      {/* Left ear */}
      <path d="M36 62 L26 18 L55 52Z" fill="#2A2534" stroke="white" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M38 56 L30 26 L52 50Z" fill="#6B5CE7" opacity="0.25" />
      {/* Right ear */}
      <path d="M114 62 L124 18 L95 52Z" fill="#2A2534" stroke="white" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M112 56 L120 26 L98 50Z" fill="#6B5CE7" opacity="0.25" />
      {/* X Eyes — thick */}
      <path d="M50 82 L62 94 M62 82 L50 94" stroke="#8A5CFF" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M88 82 L100 94 M100 82 L88 94" stroke="#8A5CFF" strokeWidth="4.5" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="20" y1="90" x2="44" y2="87" stroke="white" strokeWidth="2" opacity="0.45" />
      <line x1="18" y1="100" x2="42" y2="97" stroke="white" strokeWidth="2" opacity="0.45" />
      <line x1="130" y1="90" x2="106" y2="87" stroke="white" strokeWidth="2" opacity="0.45" />
      <line x1="132" y1="100" x2="108" y2="97" stroke="white" strokeWidth="2" opacity="0.45" />
      {/* Mouth with teeth */}
      <path d="M56 112 L75 124 L94 112" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <line x1="63" y1="112" x2="63" y2="117" stroke="white" strokeWidth="2" />
      <line x1="75" y1="114" x2="75" y2="120" stroke="white" strokeWidth="2" />
      <line x1="87" y1="112" x2="87" y2="117" stroke="white" strokeWidth="2" />
      {/* Dangling keychain */}
      <motion.g animate={{ y: [0, 4, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
        <line x1="75" y1="148" x2="75" y2="165" stroke="#6B5CE7" strokeWidth="2.5" />
        <circle cx="75" cy="168" r="7" fill="none" stroke="#6B5CE7" strokeWidth="2.5" />
        <circle cx="75" cy="168" r="2.5" fill="#6B5CE7" opacity="0.4" />
      </motion.g>
    </motion.svg>
  );
}

// --- DOODLE: Floating Eyes (top-right) ---
function DoodleEyes() {
  return (
    <motion.svg
      width="170" height="90" viewBox="0 0 170 90" fill="none"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="opacity-85"
    >
      {/* Left eye */}
      <ellipse cx="50" cy="45" rx="38" ry="33" fill="#1E1B29" stroke="white" strokeWidth="3.5" />
      <circle cx="55" cy="45" r="16" fill="#6B5CE7" />
      <circle cx="58" cy="41" r="6" fill="white" />
      {/* Right eye */}
      <ellipse cx="125" cy="45" rx="38" ry="33" fill="#1E1B29" stroke="white" strokeWidth="3.5" />
      <circle cx="120" cy="45" r="16" fill="#6B5CE7" />
      <circle cx="123" cy="41" r="6" fill="white" />
      {/* Floating dots */}
      <circle cx="8" cy="22" r="3" fill="#6B5CE7" opacity="0.5" />
      <circle cx="162" cy="18" r="2.5" fill="#8A5CFF" opacity="0.5" />
      <circle cx="88" cy="8" r="2" fill="white" opacity="0.4" />
      <circle cx="150" cy="80" r="2.5" fill="#8A5CFF" opacity="0.35" />
    </motion.svg>
  );
}

// --- DOODLE: Hat Creature with # (bottom-right) ---
function DoodleHatCreature() {
  return (
    <motion.svg
      width="140" height="170" viewBox="0 0 140 170" fill="none"
      animate={{ y: [0, -10, 0], rotate: [0, -4, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      className="opacity-80"
    >
      {/* Hat triangle */}
      <path d="M28 58 L70 10 L112 58Z" fill="#2A2534" stroke="white" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Hat brim */}
      <rect x="20" y="55" width="100" height="14" rx="4" fill="#2A2534" stroke="white" strokeWidth="3" />
      {/* # on hat */}
      <text x="58" y="46" fill="#8A5CFF" fontSize="22" fontWeight="900" fontFamily="monospace">#</text>
      {/* Round body */}
      <ellipse cx="70" cy="105" rx="42" ry="40" fill="#2A2534" stroke="white" strokeWidth="3.5" />
      {/* One big eye */}
      <circle cx="70" cy="98" r="22" fill="#1E1B29" stroke="#8A5CFF" strokeWidth="3" />
      <circle cx="70" cy="98" r="12" fill="#6B5CE7" />
      <circle cx="73" cy="94" r="5" fill="white" />
      {/* Zigzag mouth */}
      <path d="M44 126 L54 118 L64 126 L74 118 L84 126 L94 118" stroke="#8A5CFF" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Feet */}
      <ellipse cx="50" cy="148" rx="13" ry="8" fill="#2A2534" stroke="white" strokeWidth="2.5" />
      <ellipse cx="90" cy="148" rx="13" ry="8" fill="#2A2534" stroke="white" strokeWidth="2.5" />
      {/* Dangling string from hat tip */}
      <motion.g animate={{ y: [0, 3, 0] }} transition={{ duration: 3, repeat: Infinity }}>
        <path d="M70 10 Q63 -4 56 6" stroke="#8A5CFF" strokeWidth="2" fill="none" />
        <circle cx="55" cy="5" r="4" fill="#8A5CFF" opacity="0.5" />
      </motion.g>
    </motion.svg>
  );
}

// --- DOODLE: Game Controller Buttons (X + -) ---
function DoodleController() {
  return (
    <motion.svg
      width="70" height="45" viewBox="0 0 70 45" fill="none"
      animate={{ y: [0, -5, 0], rotate: [-4, 4, -4] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      className="opacity-50"
    >
      <circle cx="18" cy="22" r="15" fill="none" stroke="white" strokeWidth="2.5" />
      <path d="M12 16 L24 28 M24 16 L12 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="52" cy="22" r="15" fill="none" stroke="white" strokeWidth="2.5" />
      <line x1="44" y1="22" x2="60" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </motion.svg>
  );
}

// --- DOODLE: Sparkle Star ---
function DoodleStar({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="white" opacity="0.65" />
    </svg>
  );
}

// ============================================
// MAIN HERO COMPONENT
// ============================================
export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between px-4 md:px-8 py-10 overflow-hidden">

      {/* ===== DOODLE CHARACTERS (framing the composition) ===== */}

      {/* Moon — top-left */}
      <div className="absolute top-[4%] left-[3%] md:top-[6%] md:left-[6%]">
        <DoodleMoon />
      </div>

      {/* Floating Eyes — top-right */}
      <div className="absolute top-[6%] right-[3%] md:top-[8%] md:right-[6%]">
        <DoodleEyes />
      </div>

      {/* Cat — bottom-left */}
      <div className="absolute bottom-[14%] left-[2%] md:bottom-[16%] md:left-[5%]">
        <DoodleCat />
      </div>

      {/* Hat Creature — bottom-right */}
      <div className="absolute bottom-[14%] right-[2%] md:bottom-[16%] md:right-[5%]">
        <DoodleHatCreature />
      </div>

      {/* Game Controller — center-top, above title */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 md:top-[15%]">
        <DoodleController />
      </div>

      {/* ===== SCATTERED STARS ===== */}
      {[
        { top: "8%", left: "20%", delay: 0 },
        { top: "5%", left: "50%", delay: 0.7 },
        { top: "12%", left: "72%", delay: 1.1 },
        { top: "28%", left: "88%", delay: 0.4 },
        { top: "35%", left: "6%", delay: 1.8 },
        { top: "55%", left: "93%", delay: 1.3 },
        { top: "62%", left: "4%", delay: 2.0 },
        { top: "72%", left: "85%", delay: 0.6 },
        { top: "82%", left: "30%", delay: 1.5 },
        { top: "40%", left: "40%", delay: 0.9 },
        { top: "20%", left: "35%", delay: 0.3 },
        { top: "90%", left: "60%", delay: 1.7 },
      ].map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: s.top, left: s.left }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 3, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <DoodleStar size={14 + (i % 4) * 4} />
        </motion.div>
      ))}

      {/* Squiggle left */}
      <motion.div
        className="absolute top-[38%] left-[1%]"
        animate={{ rotate: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <svg width="40" height="70" viewBox="0 0 40 70" fill="none">
          <path d="M10 5 Q22 16 10 28 Q-2 40 10 52 Q22 64 10 75" stroke="#6B5CE7" strokeWidth="3" opacity="0.4" fill="none" />
        </svg>
      </motion.div>

      {/* Squiggle right */}
      <motion.div
        className="absolute top-[52%] right-[1%]"
        animate={{ rotate: [0, -8, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      >
        <svg width="35" height="60" viewBox="0 0 35 60" fill="none">
          <path d="M18 0 Q28 10 18 22 Q8 34 18 45 Q28 56 18 65" stroke="#8A5CFF" strokeWidth="3" opacity="0.35" fill="none" />
        </svg>
      </motion.div>

      {/* ===== MAIN CONTENT: LEFT text + RIGHT profile card ===== */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-16 flex-1 justify-center px-2">

        {/* LEFT: Portfolio title + name + bio + CTA */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

          {/* "Portfolio" — mixed typography with doodle style */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-1 select-none"
          >
            <div className="flex items-baseline gap-0 flex-wrap">
              <span className="text-[5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[9rem] font-display font-black text-white leading-none"
                style={{ transform: "rotate(-4deg) translateY(3px)", textShadow: "3px 3px 0 rgba(0,0,0,0.5)" }}>P</span>
              <span className="relative text-[5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[9rem] font-display font-black text-white leading-none"
                style={{ transform: "translateY(-2px)", textShadow: "3px 3px 0 rgba(0,0,0,0.5)" }}>
                O
                <svg className="absolute" width="38%" height="38%" viewBox="0 0 24 24" fill="none" style={{ top: "32%", left: "31%" }}>
                  <path d="M5 5L19 19M19 5L5 19" stroke="#6B5CE7" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-[5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[9rem] font-display font-black text-purple-primary leading-none"
                style={{ transform: "translateY(2px)", textShadow: "3px 3px 0 rgba(0,0,0,0.5)" }}>R</span>
              <span className="text-[3.8rem] sm:text-[5rem] md:text-[6.2rem] lg:text-[7.2rem] font-script text-white leading-none -ml-1"
                style={{ textShadow: "2px 3px 0 rgba(0,0,0,0.4)" }}>t</span>
              <span className="text-[3.8rem] sm:text-[5rem] md:text-[6.2rem] lg:text-[7.2rem] font-script text-white leading-none -ml-2"
                style={{ textShadow: "2px 3px 0 rgba(0,0,0,0.4)" }}>f</span>
              <span className="text-[3.8rem] sm:text-[5rem] md:text-[6.2rem] lg:text-[7.2rem] font-script text-white leading-none -ml-1"
                style={{ textShadow: "2px 3px 0 rgba(0,0,0,0.4)" }}>o</span>
              <span className="text-[3.8rem] sm:text-[5rem] md:text-[6.2rem] lg:text-[7.2rem] font-script text-white leading-none -ml-1"
                style={{ textShadow: "2px 3px 0 rgba(0,0,0,0.4)" }}>l</span>
              <span className="relative text-[3.8rem] sm:text-[5rem] md:text-[6.2rem] lg:text-[7.2rem] font-script text-white leading-none -ml-1"
                style={{ textShadow: "2px 3px 0 rgba(0,0,0,0.4)" }}>
                <svg className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#8A5CFF" />
                </svg>
                i
              </span>
              <span className="relative text-[3.8rem] sm:text-[5rem] md:text-[6.2rem] lg:text-[7.2rem] font-script text-white leading-none -ml-1"
                style={{ textShadow: "2px 3px 0 rgba(0,0,0,0.4)" }}>
                O
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#6B5CE7" />
                </svg>
              </span>
            </div>

            {/* Wavy underline */}
            <svg className="w-full h-4 mt-1 opacity-50" viewBox="0 0 500 14" fill="none" preserveAspectRatio="none">
              <path d="M0 7 Q30 1 60 7 T120 7 T180 7 T240 7 T300 7 T360 7 T420 7 T480 7 L500 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            {/* Year */}
            <span className="absolute -top-2 -right-4 md:-right-8 text-3xl md:text-4xl font-display font-black italic text-purple-bright opacity-80">
              2026
            </span>
          </motion.div>

          {/* Name — purple cursive */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-script text-purple-bright mb-8"
            style={{ textShadow: "0 4px 30px rgba(138,92,255,0.5)" }}
          >
            ClaudyRg
          </motion.h2>

          {/* Bio + CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col max-w-lg"
          >
            <p className="text-base md:text-lg text-text-secondary font-light leading-relaxed mb-8">
              Full-stack developer and CS student who also happens to be obsessed with 3D animation and design.
              <span className="text-purple-soft font-medium"> I handle everything — from writing backend logic to crafting interfaces that actually look good.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center md:items-start">
              <a href="#about" className="btn-primary group flex items-center gap-3">
                Explore My Work
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#projects" className="text-text-muted hover:text-white transition-all text-sm font-medium tracking-[0.2em] uppercase group border-b border-transparent hover:border-purple-primary/40 py-1">
                View Projects
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Polaroid profile card + floating tech icons */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 hidden md:block relative"
        >
          {/* Purple glow behind card */}
          <div className="absolute -inset-16 bg-purple-primary/15 blur-[90px] rounded-full" />

          {/* === FLOATING TECH ICONS (react-icons, no bg, dynamic positions) === */}
          {[
            { Icon: SiReact, color: "#61DAFB", top: "-12%", left: "50%", size: 34, delay: 0, dur: 5 },
            { Icon: SiJavascript, color: "#F7DF1E", top: "-5%", left: "-8%", size: 32, delay: 0.4, dur: 4.5 },
            { Icon: SiTypescript, color: "#3178C6", top: "20%", left: "-12%", size: 32, delay: 1.0, dur: 5.5 },
            { Icon: SiPhp, color: "#777BB4", top: "55%", left: "-14%", size: 40, delay: 0.6, dur: 4.8 },
            { Icon: SiNextdotjs, color: "#ffffff", top: "85%", left: "95%", size: 32, delay: 0.2, dur: 4.3 },
            { Icon: SiBlender, color: "#F5792A", top: "-10%", left: "95%", size: 30, delay: 0.8, dur: 5.8 },
            { Icon: SiNodedotjs, color: "#5FA04E", top: "25%", left: "100%", size: 30, delay: 1.2, dur: 4.6 },
            { Icon: SiTailwindcss, color: "#06B6D4", top: "60%", left: "102%", size: 30, delay: 0.5, dur: 5.1 },
            { Icon: SiDocker, color: "#2496ED", top: "95%", left: "40%", size: 28, delay: 1.6, dur: 4.9 },
          ].map(({ Icon, color, top, left, size, delay, dur }, i) => (
            <motion.div
              key={i}
              className="absolute z-30"
              style={{ top, left }}
              animate={{
                y: [0, -10 - (i % 3) * 4, 0],
                rotate: [0, (i % 2 === 0 ? 1 : -1) * (5 + i % 4 * 2), 0],
              }}
              transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
            >
              <Icon size={size} color={color} className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" />
            </motion.div>
          ))}

          {/* Go icon — custom circular design */}
          <motion.div
            className="absolute z-30"
            style={{ top: "80%", left: "-8%" }}
            animate={{ y: [0, -14, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          >
            <div className="w-10 h-10 rounded-full bg-[#00ADD8] flex items-center justify-center shadow-[0_4px_16px_rgba(0,173,216,0.4)]">
              <span className="text-white font-black text-sm tracking-tighter leading-none">Go</span>
            </div>
          </motion.div>

          {/* === POLAROID CARD === */}
          <motion.div
            animate={{ rotate: [3, 5.5, 3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Tape strip */}
            <div className="absolute -top-5 left-1/2 w-20 h-8 bg-white/20 backdrop-blur-sm rounded-sm z-20 shadow-sm" style={{ transform: "translateX(-50%) rotate(-2deg)" }} />

            {/* Card frame — improved with gradient border */}
            <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-purple-primary/40 via-purple-bright/20 to-purple-primary/10">
              <div className="relative bg-[#1C1828] rounded-2xl p-4 pb-16 shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_80px_rgba(107,92,231,0.12)]">
                {/* Photo */}
                <div className="relative w-64 h-80 md:w-72 md:h-[22rem] rounded-xl overflow-hidden bg-night-mid">
                  <img
                    src="/profile.jpg"
                    alt="ClaudyRg"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/adventurer/svg?seed=ClaudyRg";
                    }}
                  />
                  {/* Better vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1828] via-transparent to-transparent opacity-40 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1C1828]/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Caption */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="text-xl font-script text-purple-soft/80">claudy, 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== BOTTOM SERVICES ROW (matching reference) ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 w-full pb-4"
      >
        <div className="flex items-center justify-center gap-5 sm:gap-8 md:gap-12 lg:gap-16 px-4 flex-wrap">
          <span className="text-xs sm:text-sm md:text-base font-display font-bold text-white/70 uppercase tracking-wider">
            Full Stack Dev
          </span>
          <span className="text-xs sm:text-sm md:text-base font-display font-bold text-white/70 uppercase tracking-wider">
            System Design
          </span>

          {/* Center logo */}
          <span className="text-2xl sm:text-3xl md:text-4xl font-script text-purple-bright mx-2 md:mx-4"
            style={{ textShadow: "0 0 15px rgba(138,92,255,0.5)" }}>
            Claudy
          </span>

          <span className="text-xs sm:text-sm md:text-base font-display font-bold text-white/70 uppercase tracking-wider">
            UI/UX Design
          </span>
          <span className="text-xs sm:text-sm md:text-base font-display font-bold text-white/70 uppercase tracking-wider">
            3D Art
          </span>
        </div>
      </motion.div>

      {/* Pine trees silhouette */}
      <svg className="absolute bottom-0 left-0 w-full opacity-[0.1] pointer-events-none" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none" style={{ height: "200px" }}>
        <path d="M0 200 L50 80 L70 120 L90 50 L110 110 L130 70 L180 200Z" fill="#2A2534" />
        <path d="M200 200 L240 100 L260 140 L280 60 L300 130 L320 90 L360 200Z" fill="#1E1B29" />
        <path d="M450 200 L490 110 L510 150 L530 70 L550 140 L570 100 L610 200Z" fill="#2A2534" />
        <path d="M700 200 L740 90 L760 130 L780 55 L800 120 L820 85 L860 200Z" fill="#1E1B29" />
        <path d="M950 200 L990 100 L1010 140 L1030 60 L1050 130 L1070 95 L1110 200Z" fill="#2A2534" />
        <path d="M1200 200 L1240 80 L1260 120 L1280 50 L1300 110 L1320 75 L1360 200Z" fill="#1E1B29" />
        <path d="M1400 200 L1420 110 L1440 150Z" fill="#2A2534" />
      </svg>
    </section>
  );
}
