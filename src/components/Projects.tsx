"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Zap, Shield, Globe, Terminal, Cpu } from "lucide-react";

const PROJECTS = [
  {
    title: "StarLight Network",
    category: "Binary Core / Minecraft Server",
    desc: "A custom-engineered Minecraft galaxy. Handcrafted engine optimizations, sharded databases, and zero-lag infrastructure for thousands of travelers.",
    icon: <Cpu size={20} className="text-galaxy-blue" />,
    link: "#",
    tech: ["PHP (PMMP)", "Custom Binary", "Redis", "MySQL Shards"],
  },
  {
    title: "StarLight Web Portal",
    category: "Quantum Web / Next.js",
    desc: "A Next.js 14 bridge between game reality and the web. Featuring Ghost-Auth V3, real-time balance syncing, and elite glassmorphism UI.",
    icon: <Globe size={20} className="text-galaxy-cyan" />,
    link: "#",
    tech: ["Next.js 14", "TailwindCSS", "SWR", "Framer Motion"],
  },
  {
    title: "Ghost-Auth Protocol",
    category: "Security / Optimization",
    desc: "Proprietary in-game-to-web verification system. Zero third-party middlemen, pure StarLight security for astral-speed synchronization.",
    icon: <Shield size={20} className="text-galaxy-sky" />,
    link: "#",
    tech: ["In-Game Verif", "Secure Handshake", "Pulse Sync"],
  },
];

export function Projects() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-galaxy-blue/10 border border-galaxy-blue/20 text-galaxy-sky text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
        >
          <Sparkles size={12} /> The Archives
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Architectural Masterpieces
        </h2>
        <p className="text-galaxy-text-muted font-light max-w-2xl mx-auto italic leading-relaxed">
          The heavy artillery of my digital arsenal—where pure code meets absolute vibes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="group relative"
          >
            <div className="galaxy-glass p-8 rounded-galaxy-lg neon-border-blue h-full flex flex-col items-start overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                {project.icon}
              </div>
              
              <div className="mb-8 p-3 rounded-galaxy-md bg-white/5 border border-white/10 text-galaxy-blue shadow-lg shadow-blue-500/10">
                {project.icon}
              </div>
              
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-galaxy-cyan mb-3">
                {project.category}
              </p>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-galaxy-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-light text-galaxy-text-muted leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-[9px] font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-galaxy-text-muted uppercase tracking-tighter">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 w-full pt-6 border-t border-white/5">
                <a href={project.link} className="text-galaxy-text-muted hover:text-white transition-all transform hover:scale-110">
                  <Github size={18} />
                </a>
                <a href={project.link} className="text-galaxy-text-muted hover:text-white transition-all transform hover:scale-110">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
