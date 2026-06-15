"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Gamepad2, Sparkles } from "lucide-react";

const traits = [
  {
    icon: <Code2 size={22} />,
    label: "Engineering",
    desc: "Full-stack mastery with Go, Next.js, and PHP. Building systems that scale with elegance.",
  },
  {
    icon: <Palette size={22} />,
    label: "Design Sense",
    desc: "Pixel-perfect UI with an eye for aesthetics. Where logic meets visual storytelling.",
  },
  {
    icon: <Gamepad2 size={22} />,
    label: "Creative Drive",
    desc: "3D animation in Blender, basketball discipline, and an unwavering pursuit of craft.",
  },
  {
    icon: <Sparkles size={22} />,
    label: "Vision",
    desc: "Aspiring NUS Computer Scientist. Building futures that people can truly feel.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="badge mb-6 inline-block">About Me</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight">
            One Mind,{" "}
            <span className="text-gradient-purple">Infinite Output</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-light leading-relaxed">
            More than code — I cultivate digital universes where every pixel has purpose,
            every interaction tells a story, and every system breathes life.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-purple-primary/10 flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="ClaudyRg"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/adventurer/svg?seed=ClaudyRg";
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">ClaudyRg</h3>
                <p className="text-sm text-purple-soft font-medium">Fullstack Architect</p>
              </div>
            </div>

            <div className="space-y-6 text-text-secondary font-light leading-relaxed">
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
              <p>
                I don&apos;t just code; I cultivate digital universes where every pixel has a purpose.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-night-border flex flex-wrap gap-8">
              {[
                { value: "3+", label: "Years Coding" },
                { value: "10+", label: "Projects Built" },
                { value: "∞", label: "Ideas Brewing" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-display font-black text-purple-bright">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-7 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-primary/10 flex items-center justify-center text-purple-bright mb-5 group-hover:bg-purple-primary/20 group-hover:scale-110 transition-all">
                  {trait.icon}
                </div>
                <h4 className="text-lg font-display font-bold text-white mb-2 group-hover:text-purple-soft transition-colors">
                  {trait.label}
                </h4>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
