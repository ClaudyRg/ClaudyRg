"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Gamepad2, Sparkles } from "lucide-react";

const traits = [
  {
    icon: <Code2 size={20} />,
    label: "Engineering",
    desc: "Full-stack mastery with Go, Next.js, and PHP. Building systems that scale.",
  },
  {
    icon: <Palette size={20} />,
    label: "Design Sense",
    desc: "Pixel-perfect UI with an eye for aesthetics. Logic meets visual storytelling.",
  },
  {
    icon: <Gamepad2 size={20} />,
    label: "Creative Drive",
    desc: "3D animation in Blender, basketball discipline, and pursuit of craft.",
  },
  {
    icon: <Sparkles size={20} />,
    label: "Vision",
    desc: "Aspiring NUS Computer Scientist. Building futures people can feel.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* === HEADER — left-aligned, asymmetric === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-2xl"
        >
          <span className="badge mb-5 inline-block">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-5 leading-[1.15]">
            One Mind,{" "}
            <span className="text-gradient-purple">Infinite Output</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg font-light leading-relaxed">
            More than code — I cultivate digital universes where every pixel has purpose,
            every interaction tells a story, and every system breathes life.
          </p>
        </motion.div>

        {/* === MAIN CONTENT — 3-column asymmetric grid === */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">

          {/* LEFT COLUMN (5 cols): Avatar + Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            {/* Avatar + Name */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/small.jpg"
                alt="ClaudyRg"
                className="w-14 h-14 rounded-full object-cover border-2 border-purple-primary/30 shadow-[0_0_20px_rgba(107,92,231,0.2)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/profile.jpg";
                }}
              />
              <div>
                <h3 className="text-2xl font-display font-black text-white leading-tight">ClaudyRg</h3>
                <p className="text-xs text-purple-soft font-bold uppercase tracking-widest">Fullstack Architect</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-text-secondary font-light leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-medium">Claudy</span> — a Fullstack
                Architect building high-performance systems with{" "}
                <span className="text-purple-bright font-medium">Go, Next.js, and PHP</span>.
                StarLight Network isn&apos;t just a project; it&apos;s a singular vision.
              </p>
              <p>
                While others rely on teams, I move with the precision of nature — handcrafting
                every line of logic, every engine, and every curve. My journey toward{" "}
                <span className="text-white font-medium">NUS Computer Science</span> fuels
                the deep layers of technology I master.
              </p>
            </div>

            {/* Stats — compact horizontal */}
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              {[
                { value: "3+", label: "Years" },
                { value: "10+", label: "Projects" },
                { value: "∞", label: "Ideas" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {i > 0 && <div className="w-1 h-1 rounded-full bg-night-border" />}
                  <span className="text-xl font-display font-black text-purple-bright">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SPACER */}
          <div className="hidden md:block md:col-span-1" />

          {/* RIGHT COLUMN (6 cols): Traits as numbered list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6"
          >
            <div className="space-y-0">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 py-6 border-b border-night-border/40 last:border-b-0 group cursor-default"
                >
                  {/* Number */}
                  <span className="text-[10px] font-mono font-bold text-purple-primary/40 pt-1 shrink-0">
                    0{i + 1}
                  </span>
                  {/* Icon + Text */}
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-purple-primary/8 flex items-center justify-center text-purple-bright shrink-0 group-hover:bg-purple-primary/15 transition-colors">
                      {trait.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-display font-bold text-white group-hover:text-purple-soft transition-colors">
                        {trait.label}
                      </h4>
                      <p className="text-sm text-text-muted font-light leading-relaxed mt-0.5">
                        {trait.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
