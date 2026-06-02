"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Linkedin, 
  Globe, 
  Target, 
  Zap, 
  Cpu, 
  Smile,
  Code2,
  Terminal,
  ShieldCheck,
  Fingerprint,
  X,
  Activity,
  Lock,
  Unlock,
  ChevronDown,
  ArrowDown
} from "lucide-react";
import Image from "next/image";

const TacticalDossier = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isPaperVisible, setIsPaperVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const headerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const footerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const paperVariants = {
    hidden: { height: 0, opacity: 1 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        height: { duration: 2.5, ease: [0.16, 1, 0.3, 1] } 
      }
    }
  };

  const tabContent = {
    "Precision": {
      title: "Tactical Precision",
      desc: "Meticulous attention to every pixel and logic flow. Zero tolerance for redundant code.",
      stats: ["99.9% Test Coverage", "Pixel-Perfect UI", "Optimized Algorithms"]
    },
    "Performance": {
      title: "System Performance",
      desc: "Optimizing for speed and scalability. Ensuring minimal latency in high-traffic environments.",
      stats: ["<100ms Response Time", "Lighthouse Score 100", "Efficient Caching"]
    },
    "Architecture": {
      title: "Core Architecture",
      desc: "Building sustainable and scalable digital foundations using Go microservices and Next.js.",
      stats: ["Clean Architecture", "Domain Driven Design", "Scalable Microservices"]
    },
    "Clean Code": {
      title: "Code Integrity",
      desc: "Writing readable, maintainable, and self-documenting code following SOLID principles.",
      stats: ["DRY Principle", "Self-Documenting", "Maintainable Base"]
    },
    "Security": {
      title: "Security Protocol",
      desc: "Hardening systems against vulnerabilities. Implementing robust authentication and encryption.",
      stats: ["JWT/OAuth2", "Data Encryption", "OWASP Standards"]
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 flex flex-col items-center justify-center bg-[#050505] font-mono text-tactical-text relative overflow-x-hidden">
      <div className="scanline opacity-10" />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f0629208_1px,transparent_1px)] [background-size:30px_30px] opacity-20" />
      </div>

      <motion.div 
        layout
        className={`w-full max-w-[1100px] relative z-20 flex flex-col items-center transition-all duration-1000 ${!isOpened ? "justify-center" : ""}`}
      >
        {/* TOP HEADER */}
        <motion.div 
          layout
          variants={headerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className={`relative h-24 bg-tactical-accent flex items-center justify-between px-10 border-b-4 border-black/20 border-x-[12px] border-black/20 z-50 overflow-hidden shrink-0 ${!isOpened ? "rounded-t-2xl" : ""}`}
        >
          <div className="absolute inset-0 tactical-dot-grid opacity-10" />
          <div className="flex gap-8 relative z-10">
            {[
              { icon: Target, label: "Precision" },
              { icon: Zap, label: "Performance" },
              { icon: Cpu, label: "Architecture" },
              { icon: Code2, label: "Clean Code" },
              { icon: ShieldCheck, label: "Security" }
            ].map((item, idx) => (
              <motion.button 
                key={idx}
                onClick={() => isOpened && setActiveTab(activeTab === item.label ? null : item.label)}
                whileHover={isOpened ? { y: -2, backgroundColor: "rgba(0, 0, 0, 0.1)" } : {}}
                whileTap={isOpened ? { scale: 0.95 } : {}}
                className={`flex flex-col items-center group cursor-pointer px-4 py-2 rounded-xl transition-all border border-transparent ${activeTab === item.label ? "bg-black/20 border-black/30" : ""}`}
              >
                <item.icon size={20} className={`${activeTab === item.label ? "text-black" : "text-black/60"} group-hover:text-black transition-colors`} />
                <span className={`text-[8px] font-black uppercase mt-2 tracking-widest ${activeTab === item.label ? "text-black" : "text-black/40"} group-hover:text-black`}>{item.label}</span>
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-6 relative z-10">
            <div className="bg-black/10 p-4 rounded-xl backdrop-blur-md border border-black/10 flex items-center gap-4">
               <div className="flex flex-col items-end">
                 <span className="text-[9px] font-black text-black/60 leading-none tracking-tighter uppercase">SYSTEM STATUS:</span>
                 <span className="text-[10px] font-bold text-black leading-tight text-right max-w-[140px] uppercase">CLAUDY_PROTOCOL_ACTIVE</span>
               </div>
               <div className="w-10 h-10 border-2 border-black/20 rounded-lg flex items-center justify-center text-[12px] font-black text-black bg-black/5">
                 ID<br/>27
               </div>
            </div>
          </div>

          <AnimatePresence>
            {activeTab && isOpened && (
              <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="absolute top-full left-0 w-full bg-[#111] border-b border-tactical-accent/30 p-8 z-40 shadow-2xl backdrop-blur-xl"
              >
                <div className="max-w-4xl mx-auto flex items-start gap-10">
                  <div className="p-4 bg-tactical-accent/10 rounded-2xl text-tactical-accent">
                    <Activity size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white uppercase tracking-[0.2em] mb-2">
                      {tabContent[activeTab as keyof typeof tabContent]?.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6 font-medium">
                      {tabContent[activeTab as keyof typeof tabContent]?.desc}
                    </p>
                    <div className="flex gap-4">
                      {tabContent[activeTab as keyof typeof tabContent]?.stats.map((stat, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                          <div className="w-1.5 h-1.5 bg-tactical-accent rounded-full" />
                          <span className="text-[9px] font-black text-white/60 uppercase tracking-widest">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => setActiveTab(null)} className="text-white/20 hover:text-tactical-accent">
                    <X size={20} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {!isOpened && (
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-[#050505] w-12 h-8 rounded-t-full flex items-center justify-center border-t-2 border-black/10"
            >
              <ArrowDown size={18} className="text-tactical-accent" />
            </motion.div>
          )}
        </motion.div>

        {/* TACTICAL SEAL TRIGGER (STEMPEL BULAT) */}
        {!isOpened && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70]"
          >
            <motion.button
              onClick={() => {
                setIsOpened(true);
                setTimeout(() => setIsPaperVisible(true), 500);
              }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="relative w-32 h-32 flex items-center justify-center group"
            >
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-black/20 bg-tactical-accent shadow-[0_0_30px_rgba(240,98,146,0.4)]" />
              
              {/* Inner Decorative Rings */}
              <div className="absolute inset-2 rounded-full border-2 border-black/10 border-dashed animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border-4 border-double border-black/20" />
              
              {/* Seal Content */}
              <div className="relative flex flex-col items-center justify-center text-black">
                <Fingerprint size={32} className="mb-1" />
                <span className="text-[8px] font-black tracking-widest uppercase">Unseal</span>
                <span className="text-[6px] font-bold opacity-40 uppercase leading-none">Protocol</span>
              </div>

              {/* Wax Seal Drips (Stylized) */}
              <div className="absolute -bottom-2 left-1/4 w-4 h-6 bg-tactical-accent rounded-full border-b-2 border-black/10 blur-[1px]" />
              <div className="absolute -bottom-1 right-1/3 w-3 h-4 bg-tactical-accent rounded-full border-b-2 border-black/10 blur-[1px]" />
            </motion.button>
          </motion.div>
        )}

        {/* PAPER BODY */}
        <motion.div 
          layout
          variants={paperVariants}
          initial="hidden"
          animate={isPaperVisible ? "visible" : "hidden"}
          className="relative z-20 overflow-hidden bg-black/20"
        >
          <div className="tactical-paper p-16 min-h-[1400px] border-x-[12px] border-black/20 relative shadow-2xl">
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isPaperVisible ? "visible" : "hidden"}
              className="relative z-10"
            >
              {/* Content Sections */}
              <motion.div variants={itemVariants} className="flex items-center justify-between mb-16 border-b-2 border-black/10 pb-6">
                <div className="flex items-center gap-4">
                  <Terminal size={18} className="text-tactical-accent" />
                  <span className="text-[10px] font-black tracking-[0.4em] text-black/30 uppercase">Fullstack Architecture Protocol // v2.0.1</span>
                </div>
                <div className="text-2xl font-black italic text-black/5 select-none">CLAUDY</div>
              </motion.div>

              <motion.section variants={itemVariants} className="mb-24">
                <div className="flex justify-between items-end mb-14">
                  <h2 className="text-6xl font-black text-tactical-accent font-tactical uppercase tracking-tighter glitch-text" data-text="CLAUDY">Claudy</h2>
                  <div className="text-right">
                    <span className="text-xs font-black tracking-[0.5em] text-black/20 uppercase block mb-1">Core Identity</span>
                    <div className="w-32 h-1.5 bg-black/10 ml-auto" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16">
                  <div className="relative group">
                    <div className="relative aspect-square bg-white p-3 border-[10px] border-black/5 rounded-lg shadow-2xl overflow-hidden">
                      <div className="w-full h-full bg-pink-50 relative overflow-hidden">
                         <Image src="/profile.jpg" alt="Claudy" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                      </div>
                      <div className="absolute top-1/2 -right-6 w-12 h-12 bg-white rounded-full border-4 border-black/5 flex items-center justify-center shadow-lg z-20 group-hover:scale-110 transition-transform">
                        <Smile size={24} className="text-tactical-accent" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-10">
                     <p className="text-2xl leading-relaxed font-medium text-black/80">
                       I&apos;m <span className="tactical-underline font-black px-2">Claudy</span>. A <span className="italic font-bold">Fullstack Architect</span> building high-performance systems with <span className="font-black text-tactical-accent">Go, Next.js, and PHP</span>. 
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {[
                         { icon: Mail, val: "claudy.dev@starlight.net" },
                         { icon: Linkedin, val: "linkedin.com/in/claudyrg" },
                         { icon: Globe, val: "claudyrg.me" }
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-4 group cursor-pointer p-2 hover:bg-black/5 rounded-lg transition-all">
                           <div className="p-2 bg-black/5 rounded-lg group-hover:bg-tactical-accent/20">
                             <item.icon size={18} className="text-black/40 group-hover:text-tactical-accent" />
                           </div>
                           <span className="text-xs font-black text-black/50 group-hover:text-black">{item.val}</span>
                         </div>
                       ))}
                     </div>
                  </div>
                </div>
              </motion.section>

              <motion.div variants={itemVariants} className="w-full border-t-2 border-dotted border-black/10 mb-20" />

              <motion.section variants={itemVariants}>
                <div className="flex justify-between items-end mb-16">
                  <h2 className="text-5xl font-black text-tactical-accent font-tactical uppercase tracking-tighter">Mission Log</h2>
                  <div className="text-right">
                    <span className="text-xs font-black tracking-[0.5em] text-black/20 uppercase block mb-1">Tactical Records</span>
                    <div className="w-32 h-1.5 bg-black/10 ml-auto" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
                  <div className="space-y-16">
                     <div className="space-y-8">
                       {[
                         { date: "2024 - PRESENT", role: "Senior Fullstack Engineer", company: "StarLight Network", color: "bg-tactical-accent" },
                         { date: "2022 - 2024", role: "Backend Developer", company: "Red Orca Systems", color: "bg-black/20" }
                       ].map((exp, i) => (
                         <div key={i} className="relative pl-10 border-l-4 border-black/5 group hover:border-tactical-accent/30 transition-all">
                           <div className={`absolute -left-[10px] top-0 w-4 h-4 rounded-full ${exp.color} shadow-lg`} />
                           <div className="text-[10px] font-black text-black/30 mb-2 tracking-widest">{exp.date}</div>
                           <div className="text-xl font-black text-black/80">{exp.role}</div>
                           <div className="text-sm font-bold text-tactical-accent uppercase tracking-wider">{exp.company}</div>
                         </div>
                       ))}
                     </div>

                     <div className="bg-black/95 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                       <div className="absolute inset-0 tactical-dot-grid opacity-10" />
                       <div className="grid grid-cols-2 gap-8 relative z-10">
                          {[
                            "Distributed Systems", "API Design", "Cloud Architecture", "Security Hardening"
                          ].map((skill, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-tactical-accent rounded-sm shadow-[0_0_8px_#f06292]" />
                              <span className="text-[10px] font-black text-white uppercase tracking-widest">{skill}</span>
                            </div>
                          ))}
                       </div>
                     </div>
                  </div>

                  <div className="relative">
                     <div className="relative h-[600px] bg-[#080808] rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white/5">
                        <Image src="/profile.jpg" alt="Portrait" fill className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                        <div className="absolute top-10 left-8 z-20">
                           <span className="text-white/10 text-[10px] font-black uppercase tracking-[0.8em] [writing-mode:vertical-lr]">Tactical.Visuals</span>
                        </div>
                        <div className="absolute bottom-16 -left-8 z-30 rotate-[-15deg]">
                           <div className="tactical-stamp text-xl px-8 py-2 bg-white/5 backdrop-blur-md border-4">CERTIFIED</div>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          </div>
        </motion.div>

        {/* BOTTOM FOOTER */}
        <motion.div 
          layout
          variants={footerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className={`h-28 bg-[#0a0a0a] flex items-center justify-between px-14 text-white/20 text-[10px] font-black uppercase tracking-[0.6em] relative border-t-4 border-black/20 border-x-[12px] border-black/20 z-40 shrink-0 ${!isOpened ? "rounded-b-2xl" : ""}`}
        >
          <div className="flex items-center gap-8">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-tactical-accent text-xl">❤</motion.div>
            <div className="flex flex-col gap-1">
              <span className="text-white/40 tracking-[0.3em]">Claudy Protocol v2.0</span>
              <span className="text-[7px] opacity-20 lowercase italic tracking-widest">Handcrafted with tactical precision.</span>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-[#0a0a0a] w-20 h-12 rounded-t-full flex items-center justify-center border-t-4 border-black/40">
             <div className="w-8 h-8 rounded-full border-4 border-white/5 flex items-center justify-center">
                <div className="w-2 h-2 bg-tactical-accent rounded-full animate-pulse" />
             </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex flex-col items-end gap-1">
              <span className="text-white/30 tracking-[0.3em]">Node_Origin: IDN</span>
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }} className="w-1.5 h-1.5 bg-tactical-accent/40 rounded-sm" />
                ))}
              </div>
            </div>
            <div className="text-4xl font-black text-white/[0.03] italic tracking-tighter">01</div>
          </div>
          
          {!isOpened && (
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-full h-1 bg-tactical-accent/10 blur-sm" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TacticalDossier;
