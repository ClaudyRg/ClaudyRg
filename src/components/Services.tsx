"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Trophy, Video, Heart } from "lucide-react";

const SERVICES = [
  {
    title: "Full Stack Dev",
    desc: "End-to-end development with Go, Next.js, and PHP. From API design to pixel-perfect frontends.",
    icon: <Code2 size={24} />,
    gradient: "from-purple-primary to-purple-bright",
  },
  {
    title: "System Architecture",
    desc: "Scalable infrastructure design. Distributed systems, caching strategies, and cloud-native solutions.",
    icon: <GraduationCap size={24} />,
    gradient: "from-purple-bright to-purple-soft",
  },
  {
    title: "UI/UX Design",
    desc: "Creative interfaces that feel alive. Tailwind mastery, motion design, and aesthetic storytelling.",
    icon: <Trophy size={24} />,
    gradient: "from-purple-soft to-accent-warm",
  },
  {
    title: "3D Animation",
    desc: "Blender worlds and visual stories. Motion graphics that speak and narratives that move.",
    icon: <Video size={24} />,
    gradient: "from-accent-warm to-purple-primary",
  },
  {
    title: "Creative Vision",
    desc: "The passion that drives it all. Basketball discipline meets digital creativity. Always building.",
    icon: <Heart size={24} />,
    gradient: "from-purple-primary to-accent-teal",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 bg-[#0C0918]/60">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="badge mb-6 inline-block">What I Do</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight">
            Dream &{" "}
            <span className="text-gradient-purple">Drive</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-light leading-relaxed">
            More than just metrics — these are the pillars of the person I am becoming.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-7 h-full flex flex-col items-start transition-all duration-500">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-purple-soft transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-primary/0 via-purple-primary/5 to-purple-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
