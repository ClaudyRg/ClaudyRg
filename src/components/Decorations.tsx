"use client";

import { motion } from "framer-motion";

// Full-page atmospheric layer — stars, trees, clouds across ALL sections
export function Decorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* === STARS scattered across the full page === */}
      {[
        { top: "3%", left: "12%", delay: 0, size: 6 },
        { top: "8%", left: "85%", delay: 1.2, size: 4 },
        { top: "15%", left: "70%", delay: 0.6, size: 5 },
        { top: "22%", left: "5%", delay: 2, size: 4 },
        { top: "30%", left: "92%", delay: 1.5, size: 5 },
        { top: "38%", left: "8%", delay: 0.8, size: 4 },
        { top: "45%", left: "88%", delay: 2.2, size: 5 },
        { top: "52%", left: "3%", delay: 0.3, size: 4 },
        { top: "58%", left: "95%", delay: 1.8, size: 3 },
        { top: "65%", left: "15%", delay: 1.0, size: 5 },
        { top: "72%", left: "82%", delay: 2.5, size: 4 },
        { top: "78%", left: "6%", delay: 0.5, size: 4 },
        { top: "85%", left: "90%", delay: 1.4, size: 5 },
        { top: "92%", left: "20%", delay: 0.7, size: 4 },
        { top: "95%", left: "75%", delay: 2.0, size: 3 },
      ].map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{ top: star.top, left: star.left }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width={star.size * 4} height={star.size * 4} viewBox="0 0 24 24" fill="none">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="white" opacity="0.5" />
          </svg>
        </motion.div>
      ))}

      {/* === PINE TREE SILHOUETTES (full-width, bottom of page) === */}
      <svg className="absolute bottom-0 left-0 w-full opacity-[0.08]" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none" style={{ height: "300px" }}>
        <path d="M0 300 L50 120 L70 160 L90 80 L110 150 L130 100 L180 300Z" fill="#2A2534" />
        <path d="M150 300 L190 140 L210 175 L230 90 L250 165 L270 120 L310 300Z" fill="#1E1B29" />
        <path d="M350 300 L390 160 L410 190 L430 110 L450 180 L470 140 L510 300Z" fill="#2A2534" />
        <path d="M550 300 L590 130 L610 170 L630 80 L650 160 L670 110 L710 300Z" fill="#1E1B29" />
        <path d="M750 300 L790 150 L810 185 L830 100 L850 175 L870 130 L910 300Z" fill="#2A2534" />
        <path d="M950 300 L990 120 L1010 160 L1030 75 L1050 150 L1070 105 L1110 300Z" fill="#1E1B29" />
        <path d="M1150 300 L1190 140 L1210 175 L1230 90 L1250 165 L1270 120 L1310 300Z" fill="#2A2534" />
        <path d="M1350 300 L1380 160 L1400 190 L1420 110 L1440 180Z" fill="#1E1B29" />
      </svg>

      {/* === CLOUD SHAPES (top of page) === */}
      <svg className="absolute top-0 left-0 w-full opacity-[0.035]" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none" style={{ height: "180px" }}>
        <ellipse cx="300" cy="80" rx="260" ry="80" fill="#2A2534" />
        <ellipse cx="850" cy="55" rx="320" ry="55" fill="#1E1B29" />
        <ellipse cx="1200" cy="90" rx="220" ry="70" fill="#2A2534" />
      </svg>

      {/* === SQUIGGLE LINES (mid-page atmosphere) === */}
      <motion.div
        className="absolute top-[40%] left-[1%]"
        animate={{ rotate: [0, 8, 0], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <svg width="35" height="60" viewBox="0 0 35 60" fill="none">
          <path d="M10 5 Q20 14 10 24 Q0 34 10 44 Q20 54 10 64" stroke="#6B5CE7" strokeWidth="2.5" opacity="0.35" fill="none" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[65%] right-[1%]"
        animate={{ rotate: [0, -6, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      >
        <svg width="30" height="50" viewBox="0 0 30 50" fill="none">
          <path d="M15 0 Q24 10 15 20 Q6 30 15 40 Q24 50 15 60" stroke="#8A5CFF" strokeWidth="2.5" opacity="0.3" fill="none" />
        </svg>
      </motion.div>
    </div>
  );
}
