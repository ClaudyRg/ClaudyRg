"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Trophy, Video, Heart, Sparkles } from "lucide-react";

const DRIFT_ITEMS = [
  {
    title: "NUS Bound",
    desc: "Aspirant at NUS Computer Science. Growing, exploring, and building the future of tech.",
    icon: <GraduationCap size={24} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Code & Create",
    desc: "Turning ideas into reality through logic and design. Every line tells a story.",
    icon: <Code2 size={24} />,
    color: "from-cyan-500 to-sky-400",
  },
  {
    title: "Court Confidence",
    desc: "Polishing basketball skills for the discipline and pure joy the game brings.",
    icon: <Trophy size={24} />,
    color: "from-blue-600 to-indigo-500",
  },
  {
    title: "Animated Vision",
    desc: "Creating 3D worlds in Blender—visuals that speak and stories that move.",
    icon: <Video size={24} />,
    color: "from-sky-500 to-blue-400",
  },
  {
    title: "HER✨",
    desc: "The one I choose. A silent inspiration in every dream I imagine for the future.",
    icon: <Heart size={24} fill="currentColor" />,
    color: "from-pink-500 to-rose-400",
  },
];

export function DreamDrive() {
  return (
    <section id="dream-drive" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-galaxy-blue/10 border border-galaxy-blue/20 text-galaxy-sky text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
        >
          <Sparkles size={12} /> The Manifest
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Dream & Drive
        </h2>
        <p className="text-galaxy-text-muted max-w-2xl font-light italic">
          More than just metrics. These are the pillars of the person I am becoming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {DRIFT_ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative h-full"
          >
            <div className="galaxy-glass p-8 rounded-galaxy-lg neon-border-blue h-full flex flex-col items-start transition-all duration-500 hover:bg-white/5">
              <div className={`w-12 h-12 rounded-galaxy-md bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-galaxy-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-sm font-light text-galaxy-text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-galaxy-blue/0 via-galaxy-blue/10 to-galaxy-blue/0 rounded-galaxy-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
