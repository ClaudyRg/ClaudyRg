"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Cherry, Shield, Globe, Terminal, Cpu } from "lucide-react";

const PROJECTS = [
  {
    title: "StarLight Network",
    category: "Binary Core / Server",
    desc: "A custom-engineered Minecraft garden. Handcrafted optimizations and zero-lag infrastructure for thousands of travelers.",
    icon: <Cpu size={20} className="text-blossom-accent" />,
    link: "#",
    tech: ["PHP", "Binary Core", "Redis", "MySQL"],
  },
  {
    title: "Blossom Web Portal",
    category: "Web Architecture",
    desc: "A Next.js bridge between reality and the digital garden. High-speed sync and premium floral aesthetics.",
    icon: <Globe size={20} className="text-blossom-teal" />,
    link: "#",
    tech: ["Next.js 15", "Tailwind", "Framer Motion"],
  },
  {
    title: "Ghost-Auth Protocol",
    category: "Security Protocol",
    desc: "Proprietary verification system. Zero third-party middlemen, pure architectural security for astral synchronization.",
    icon: <Shield size={20} className="text-blossom-pink" />,
    link: "#",
    tech: ["Legacy Sys", "Secure Handshake"],
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blossom-accent/5 border border-blossom-accent/10 text-blossom-pink text-[10px] font-bold uppercase tracking-[0.2em] mb-6 font-body"
        >
          <Cherry size={12} className="text-blossom-accent" /> The Archives
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-heading font-medium text-white mb-6">
          Architectural Masterpieces
        </h2>
        <p className="text-blossom-text-muted font-heading italic text-lg max-w-2xl mx-auto opacity-80">
          The heavy artillery of my digital arsenal—where pure code meets the softest vibes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="group relative"
          >
            <div className="blossom-glass p-10 rounded-blossom-lg neon-border-pink h-full flex flex-col items-start overflow-hidden hover:bg-white/[0.03] transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                {project.icon}
              </div>
              
              <div className="mb-8 p-3.5 rounded-blossom-sm bg-blossom-accent/5 border border-blossom-accent/10 text-blossom-accent shadow-lg shadow-pink-500/5">
                {project.icon}
              </div>
              
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-blossom-teal mb-3 font-body">
                {project.category}
              </p>
              <h3 className="text-2xl font-heading font-medium mb-4 text-white group-hover:text-blossom-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-light text-blossom-text-muted leading-relaxed mb-8 flex-grow font-body">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t) => (
                  <span key={t} className="text-[9px] font-bold px-2.5 py-1 rounded bg-blossom-accent/5 border border-blossom-accent/10 text-blossom-pink uppercase tracking-tighter font-body">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 w-full pt-8 border-t border-white/5">
                <a href={project.link} className="text-blossom-text-muted hover:text-white transition-all transform hover:scale-110">
                  <Github size={18} />
                </a>
                <a href={project.link} className="text-blossom-text-muted hover:text-white transition-all transform hover:scale-110">
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
