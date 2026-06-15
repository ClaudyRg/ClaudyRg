"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Globe, Shield } from "lucide-react";

const PROJECTS = [
  {
    title: "StarLight Network",
    category: "Server Infrastructure",
    desc: "A custom-engineered Minecraft ecosystem. Handcrafted optimizations and zero-lag infrastructure serving thousands of players.",
    icon: <Cpu size={22} />,
    tech: ["PHP", "Redis", "MySQL", "Binary Core"],
    color: "from-purple-primary to-purple-bright",
    github: "https://github.com/STARLIGHT-NETWORK-ID",
    link: "https://github.com/STARLIGHT-NETWORK-ID",
  },
  {
    title: "Web Portal",
    category: "Web Architecture",
    desc: "A Next.js bridge between reality and the digital garden. Blazing-fast performance with premium aesthetic design.",
    icon: <Globe size={22} />,
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    color: "from-purple-bright to-purple-soft",
    github: "https://github.com/ClaudyRg/ClaudyRg",
    link: "https://github.com/ClaudyRg/ClaudyRg",
  },
  {
    title: "Ghost-Auth Protocol",
    category: "Security System",
    desc: "Proprietary verification system. Zero third-party dependencies — pure architectural security for seamless auth.",
    icon: <Shield size={22} />,
    tech: ["Custom Protocol", "JWT", "Encryption"],
    color: "from-purple-soft to-accent-warm",
    github: "https://github.com/ClaudyRg",
    link: "https://github.com/ClaudyRg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="badge mb-6 inline-block">Projects</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight">
            Architectural{" "}
            <span className="text-gradient-purple">Masterpieces</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-light leading-relaxed">
            The heavy artillery of my digital arsenal — where pure code meets creative vision.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col overflow-hidden relative">
                {/* Background icon watermark */}
                <div className="absolute -top-4 -right-4 text-purple-primary/[0.04] group-hover:text-purple-primary/[0.08] transition-colors">
                  <div className="scale-[4]">{project.icon}</div>
                </div>

                {/* Icon badge */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-primary/20 group-hover:scale-110 group-hover:shadow-purple-primary/40 transition-all`}>
                  {project.icon}
                </div>

                {/* Category */}
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-purple-soft mb-3 font-body">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-purple-soft transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted font-light leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-bold px-3 py-1.5 rounded-full bg-[#1E1B29] border border-night-border text-purple-soft uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5 pt-6 border-t border-night-border">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-purple-bright transition-all transform hover:scale-110">
                    <Github size={18} />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-purple-bright transition-all transform hover:scale-110">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
