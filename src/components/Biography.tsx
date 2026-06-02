"use client";

import { motion } from "framer-motion";
import { User, Cpu, Palmtree, Gamepad2, Sparkles, Cherry } from "lucide-react";

export function Biography() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blossom-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Visual Bio - The Aesthetic */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="blossom-glass p-10 rounded-blossom-lg neon-border-pink relative z-10 transition-colors duration-500">
              <h3 className="text-3xl font-heading font-medium text-white mb-8 flex items-center gap-3">
                <User className="text-blossom-accent" /> The Identity
              </h3>
              
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-blossom-sm bg-blossom-accent/10 flex items-center justify-center shrink-0">
                    <Sparkles size={22} className="text-blossom-accent" />
                  </div>
                  <div>
                    <h4 className="text-blossom-pink font-bold uppercase text-[10px] tracking-widest mb-2 font-body">Style & Aura</h4>
                    <p className="text-sm text-blossom-text-muted leading-relaxed font-body">
                      Clean wolf-cut—sharp, edgy, yet effortless. Warm brown eyes reflect a calm focus, always solving the next big problem.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-blossom-sm bg-blossom-accent/10 flex items-center justify-center shrink-0">
                    <Cherry size={22} className="text-blossom-accent" />
                  </div>
                  <div>
                    <h4 className="text-blossom-pink font-bold uppercase text-[10px] tracking-widest mb-2 font-body">Vibe</h4>
                    <p className="text-sm text-blossom-text-muted leading-relaxed font-body">
                      Lowkey but magnetic. Standing out like a digital blossom in full bloom, bringing life and color to the digital expanse.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-blossom-sm bg-blossom-accent/10 flex items-center justify-center shrink-0">
                    <Gamepad2 size={22} className="text-blossom-accent" />
                  </div>
                  <div>
                    <h4 className="text-blossom-pink font-bold uppercase text-[10px] tracking-widest mb-2 font-body">Dual Life</h4>
                    <p className="text-sm text-blossom-text-muted leading-relaxed font-body">
                      Switching between the intensity of basketball practice and the precision of 3D animation. Creative and disciplined.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtle glow behind the card */}
            <div className="absolute -inset-4 bg-blossom-accent/5 blur-[40px] rounded-blossom-lg" />
          </motion.div>

          {/* Narrative Bio - The Drive */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blossom-accent/5 border border-blossom-accent/10 text-blossom-pink text-[10px] font-bold uppercase tracking-[0.2em] mb-8 font-body">
              Architectural Core
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-medium text-white mb-8 leading-tight">
              One Mind, <br /> 
              <span className="text-blossom-accent">Infinite Output.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-blossom-text-muted font-light leading-relaxed font-body">
              <p>
                StarLight Network isn&apos;t just a project; it&apos;s a singular vision. While others rely on teams, I move with the precision of nature—handcrafting every line of logic, every engine, and every curve.
              </p>
              <p>
                My journey toward <span className="text-white font-medium">NUS Computer Science</span> is fueled by a desire to master the deep layers of technology and build futures that people can truly feel.
              </p>
              <p>
                I don&apos;t just code; I cultivate digital universes where every pixel has a purpose.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/5 pt-8">
              <div>
                <p className="text-2xl font-heading text-white">Visionary</p>
                <p className="text-[10px] uppercase tracking-widest text-blossom-accent font-body font-bold">Character</p>
              </div>
              <div>
                <p className="text-2xl font-heading text-white">Full Stack</p>
                <p className="text-[10px] uppercase tracking-widest text-blossom-accent font-body font-bold">Capability</p>
              </div>
              <div>
                <p className="text-2xl font-heading text-white">3D Artist</p>
                <p className="text-[10px] uppercase tracking-widest text-blossom-accent font-body font-bold">Aesthetic</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
