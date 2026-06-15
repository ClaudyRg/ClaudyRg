"use client";

import { motion } from "framer-motion";

// Floating SVG illustrations matching the reference design
export function Decorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* === STARS & SPARKLES === */}
      {[
        { top: "8%", left: "15%", delay: 0, size: 6 },
        { top: "12%", left: "85%", delay: 1.2, size: 4 },
        { top: "25%", left: "70%", delay: 0.6, size: 5 },
        { top: "45%", left: "5%", delay: 2, size: 4 },
        { top: "60%", left: "90%", delay: 1.5, size: 6 },
        { top: "75%", left: "20%", delay: 0.8, size: 5 },
        { top: "85%", left: "75%", delay: 2.5, size: 4 },
        { top: "35%", left: "92%", delay: 1.8, size: 3 },
        { top: "50%", left: "3%", delay: 0.3, size: 5 },
      ].map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{ top: star.top, left: star.left }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width={star.size * 4} height={star.size * 4} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
              fill="white"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}

      {/* === MOON (top-left area) === */}
      <motion.div
        className="absolute top-[6%] left-[8%]"
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-70">
          {/* Moon body */}
          <circle cx="40" cy="40" r="32" fill="#1E1B29" stroke="#6B5CE7" strokeWidth="3" />
          <circle cx="40" cy="40" r="28" fill="#2A2534" />
          {/* Crescent shadow */}
          <path
            d="M40 12C54.36 12 66 23.64 66 38C66 52.36 54.36 64 40 64C36 64 32.2 63.1 28.8 61.5C35.6 58 40 51 40 43C40 32 33 22.5 23 18.5C27.5 14.3 33.4 12 40 12Z"
            fill="#6B5CE7"
            opacity="0.3"
          />
          {/* Smiley face */}
          <circle cx="32" cy="36" r="3" fill="#8A5CFF" />
          <circle cx="48" cy="36" r="3" fill="#8A5CFF" />
          <path d="M32 48 Q40 55 48 48" stroke="#8A5CFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* === FLOATING EYES (top-right) === */}
      <motion.div
        className="absolute top-[10%] right-[10%]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="opacity-60">
          {/* Left eye */}
          <ellipse cx="35" cy="30" rx="25" ry="22" fill="#1E1B29" stroke="#6B5CE7" strokeWidth="2.5" />
          <circle cx="38" cy="30" r="10" fill="#6B5CE7" />
          <circle cx="40" cy="28" r="4" fill="white" />
          {/* Right eye */}
          <ellipse cx="85" cy="30" rx="25" ry="22" fill="#1E1B29" stroke="#6B5CE7" strokeWidth="2.5" />
          <circle cx="82" cy="30" r="10" fill="#6B5CE7" />
          <circle cx="84" cy="28" r="4" fill="white" />
          {/* Dots around */}
          <circle cx="5" cy="15" r="2" fill="#6B5CE7" opacity="0.5" />
          <circle cx="115" cy="10" r="2" fill="#8A5CFF" opacity="0.5" />
          <circle cx="60" cy="5" r="1.5" fill="white" opacity="0.4" />
        </svg>
      </motion.div>

      {/* === CAT CREATURE (bottom-left) === */}
      <motion.div
        className="absolute bottom-[12%] left-[5%]"
        animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <svg width="100" height="110" viewBox="0 0 100 110" fill="none" className="opacity-60">
          {/* Body */}
          <ellipse cx="50" cy="70" rx="30" ry="32" fill="#2A2534" stroke="#6B5CE7" strokeWidth="2.5" />
          {/* Ears */}
          <path d="M25 45 L20 20 L38 38Z" fill="#2A2534" stroke="#6B5CE7" strokeWidth="2.5" />
          <path d="M75 45 L80 20 L62 38Z" fill="#2A2534" stroke="#6B5CE7" strokeWidth="2.5" />
          {/* X Eyes */}
          <path d="M35 55 L42 62 M42 55 L35 62" stroke="#8A5CFF" strokeWidth="3" strokeLinecap="round" />
          <path d="M58 55 L65 62 M65 55 L58 62" stroke="#8A5CFF" strokeWidth="3" strokeLinecap="round" />
          {/* Mouth with teeth */}
          <path d="M38 75 L50 82 L62 75" stroke="white" strokeWidth="2" fill="none" />
          <path d="M42 75 L42 78" stroke="white" strokeWidth="1.5" />
          <path d="M50 76 L50 80" stroke="white" strokeWidth="1.5" />
          <path d="M58 75 L58 78" stroke="white" strokeWidth="1.5" />
          {/* Dangling key */}
          <motion.line
            x1="50" y1="100" x2="50" y2="108"
            stroke="#6B5CE7" strokeWidth="2"
            animate={{ y1: [100, 103, 100], y2: [108, 111, 108] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <circle cx="50" cy="105" r="4" fill="none" stroke="#6B5CE7" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* === HAT CHARACTER (bottom-right) === */}
      <motion.div
        className="absolute bottom-[15%] right-[6%]"
        animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <svg width="90" height="110" viewBox="0 0 90 110" fill="none" className="opacity-55">
          {/* Hat */}
          <path d="M20 40 L45 8 L70 40Z" fill="#2A2534" stroke="#6B5CE7" strokeWidth="2.5" />
          <rect x="15" y="38" width="60" height="8" rx="2" fill="#2A2534" stroke="#6B5CE7" strokeWidth="2" />
          {/* # symbol on hat */}
          <text x="38" y="32" fill="#8A5CFF" fontSize="14" fontWeight="bold" fontFamily="monospace">#</text>
          {/* Body (round) */}
          <ellipse cx="45" cy="70" rx="28" ry="28" fill="#2A2534" stroke="#6B5CE7" strokeWidth="2.5" />
          {/* One big eye */}
          <circle cx="45" cy="65" r="14" fill="#1E1B29" stroke="#8A5CFF" strokeWidth="2" />
          <circle cx="45" cy="65" r="7" fill="#6B5CE7" />
          <circle cx="47" cy="63" r="3" fill="white" />
          {/* Zigzag mouth */}
          <path d="M30 85 L37 80 L44 85 L51 80 L58 85" stroke="#8A5CFF" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Feet */}
          <ellipse cx="32" cy="100" rx="8" ry="5" fill="#2A2534" stroke="#6B5CE7" strokeWidth="1.5" />
          <ellipse cx="58" cy="100" rx="8" ry="5" fill="#2A2534" stroke="#6B5CE7" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* === SQUIGGLY LINES scattered === */}
      <motion.div
        className="absolute top-[40%] left-[2%]"
        animate={{ rotate: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
          <path d="M10 5 Q20 15 10 25 Q0 35 10 45 Q20 55 10 65" stroke="#6B5CE7" strokeWidth="2" opacity="0.4" fill="none" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[55%] right-[3%]"
        animate={{ rotate: [0, -8, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="30" height="50" viewBox="0 0 30 50" fill="none">
          <path d="M15 0 Q25 10 15 20 Q5 30 15 40 Q25 50 15 60" stroke="#8A5CFF" strokeWidth="2" opacity="0.3" fill="none" />
        </svg>
      </motion.div>

      {/* === PINE TREE SILHOUETTES (bottom) === */}
      <svg className="absolute bottom-0 left-0 w-full opacity-[0.06]" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none" style={{ height: "200px" }}>
        <path d="M0 200 L60 80 L80 120 L100 60 L120 120 L140 80 L200 200Z" fill="#2A2534" />
        <path d="M180 200 L220 100 L240 140 L260 70 L280 130 L300 90 L340 200Z" fill="#1E1B29" />
        <path d="M400 200 L440 120 L460 150 L480 90 L500 140 L520 110 L560 200Z" fill="#2A2534" />
        <path d="M700 200 L740 100 L760 140 L780 80 L800 130 L820 100 L860 200Z" fill="#1E1B29" />
        <path d="M900 200 L940 130 L960 160 L980 110 L1000 150 L1020 120 L1060 200Z" fill="#2A2534" />
        <path d="M1100 200 L1140 90 L1160 130 L1180 70 L1200 120 L1220 90 L1260 200Z" fill="#1E1B29" />
        <path d="M1300 200 L1340 110 L1360 150 L1380 80 L1400 140 L1420 100 L1440 200Z" fill="#2A2534" />
      </svg>
    </div>
  );
}
