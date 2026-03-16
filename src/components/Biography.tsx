"use client";

import { motion } from "framer-motion";
import { User, Cpu, Palmtree, Gamepad2, Sparkles } from "lucide-react";

export function Biography() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-galaxy-blue/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Visual Bio - The Aesthetic */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="galaxy-glass p-8 rounded-galaxy-lg neon-border-blue relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <User className="text-galaxy-cyan" /> The Identity
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-galaxy-sm bg-galaxy-blue/20 flex items-center justify-center shrink-0">
                    <Sparkles size={20} className="text-galaxy-cyan" />
                  </div>
                  <div>
                    <h4 className="text-galaxy-sky font-bold uppercase text-xs tracking-widest mb-2">Style & Aura</h4>
                    <p className="text-sm text-galaxy-text-muted leading-relaxed">
                      Clean wolf-cut—sharp, edgy, yet effortless. Warm brown eyes reflect a calm focus, always solving the next big problem.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-galaxy-sm bg-galaxy-blue/20 flex items-center justify-center shrink-0">
                    <Palmtree size={20} className="text-galaxy-cyan" />
                  </div>
                  <div>
                    <h4 className="text-galaxy-sky font-bold uppercase text-xs tracking-widest mb-2">Vibe</h4>
                    <p className="text-sm text-galaxy-text-muted leading-relaxed">
                      Lowkey but magnetic. Standing out like a digital blossom in full bloom, bringing life and color to the endless galaxy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-galaxy-sm bg-galaxy-blue/20 flex items-center justify-center shrink-0">
                    <Gamepad2 size={20} className="text-galaxy-cyan" />
                  </div>
                  <div>
                    <h4 className="text-galaxy-sky font-bold uppercase text-xs tracking-widest mb-2">Dual Life</h4>
                    <p className="text-sm text-galaxy-text-muted leading-relaxed">
                      Switching between the intensity of basketball practice and the precision of Blender 3D animation. Creative and sporty, balanced in one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtle glow behind the card */}
            <div className="absolute -inset-4 bg-galaxy-blue/10 blur-[40px] rounded-galaxy-lg" />
          </motion.div>

          {/* Narrative Bio - The Drive */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-galaxy-blue/10 border border-galaxy-blue/20 text-galaxy-sky text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              System Architecture
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              One Mind, <br /> 
              <span className="text-galaxy-blue">Infinite Output.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-galaxy-text-muted font-light leading-relaxed">
              <p>
                StarLight Network isn&apos;t just a project; it&apos;s a singular vision. While others rely on teams, I move at the speed of light—handcrafting every line of logic, every binary engine, and every UI curve.
              </p>
              <p>
                My drive to become an <span className="text-white font-medium">NUS Computer Science</span> student is fueled by a desire to master the deep layers of technology and build futures that people can actually experience.
              </p>
              <p>
                I don&apos;t just code applications; I forge digital universes with soul.
              </p>
            </div>

            <div className="mt-12 flex gap-8 border-t border-white/5 pt-8">
              <div>
                <p className="text-2xl font-bold text-white">Visionary</p>
                <p className="text-[10px] uppercase tracking-widest text-galaxy-cyan">Character</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Full Stack</p>
                <p className="text-[10px] uppercase tracking-widest text-galaxy-cyan">Capability</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">3D Artist</p>
                <p className="text-[10px] uppercase tracking-widest text-galaxy-cyan">Aesthetic</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
