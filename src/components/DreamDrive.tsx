"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Trophy, Video, Heart, Cherry } from "lucide-react";

const DRIFT_ITEMS = [
  {
    title: "NUS Bound",
    desc: "Aspirant at NUS Computer Science. Growing and building the future of tech.",
    icon: <GraduationCap size={24} />,
    color: "from-blossom-accent to-pink-400",
  },
  {
    title: "Code & Create",
    desc: "Turning ideas into reality through logic and design. Every line tells a story.",
    icon: <Code2 size={24} />,
    color: "from-blossom-teal to-teal-400",
  },
  {
    title: "The Court",
    desc: "Polishing basketball skills for the discipline and pure joy the game brings.",
    icon: <Trophy size={24} />,
    color: "from-pink-500/80 to-blossom-accent/80",
  },
  {
    title: "Animated Vision",
    desc: "Creating 3D worlds in Blender—visuals that speak and stories that move.",
    icon: <Video size={24} />,
    color: "from-blossom-accent to-blossom-teal",
  },
  {
    title: "HER✨",
    desc: "The one I choose. A silent inspiration in every dream I imagine.",
    icon: <Heart size={24} fill="currentColor" />,
    color: "from-pink-500 to-rose-400",
  },
];

export function DreamDrive() {
  return (
    <section id="dream-drive" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blossom-accent/5 border border-blossom-accent/10 text-blossom-pink text-[10px] font-bold uppercase tracking-[0.2em] mb-6 font-body"
        >
          <Cherry size={12} className="text-blossom-accent" /> The Manifest
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-heading font-medium text-white mb-6">
          Dream & Drive
        </h2>
        <p className="text-blossom-text-muted max-w-2xl font-light italic font-heading text-lg">
          More than just metrics. These are the pillars of the person I am becoming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {DRIFT_ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative h-full"
          >
            <div className="blossom-glass p-8 rounded-blossom-lg neon-border-pink h-full flex flex-col items-start transition-all duration-500 hover:bg-white/[0.03]">
              <div className={`w-12 h-12 rounded-blossom-sm bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 shadow-lg shadow-pink-500/10 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-medium mb-4 text-white group-hover:text-blossom-pink transition-colors">
                {item.title}
              </h3>
              <p className="text-sm font-light text-blossom-text-muted leading-relaxed font-body">
                {item.desc}
              </p>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blossom-accent/0 via-blossom-accent/5 to-blossom-accent/0 rounded-blossom-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
