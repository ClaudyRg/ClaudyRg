"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const FOOTER_SERVICES = ["Full Stack Dev", "System Design", "UI/UX", "3D Art"];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-6">
      <div className="section-divider mb-16" />

      <div className="max-w-6xl mx-auto">
        {/* Top: CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4">
            Let&apos;s Build Something{" "}
            <span className="text-gradient-purple">Together</span>
          </h2>
          <p className="text-text-muted text-lg mb-8 font-light">
            Ready to turn your vision into reality? Let&apos;s connect.
          </p>
          <a href="mailto:claudy.dev@starlight.net" className="btn-primary inline-flex items-center gap-3">
            <Mail size={18} />
            Get In Touch
          </a>
        </motion.div>

        {/* Middle: Services row + Logo (matching reference) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 border-t border-b border-night-border"
        >
          {/* Left services */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {FOOTER_SERVICES.slice(0, 2).map((s) => (
              <span key={s} className="text-sm font-display font-bold text-text-secondary uppercase tracking-wider">
                {s}
              </span>
            ))}
          </div>

          {/* Center logo */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl font-script text-purple-bright drop-shadow-[0_0_20px_rgba(138,92,255,0.5)]">
              Claudy
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-text-muted">
              StarLight Network
            </span>
          </div>

          {/* Right services */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            {FOOTER_SERVICES.slice(2).map((s) => (
              <span key={s} className="text-sm font-display font-bold text-text-secondary uppercase tracking-wider">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
          {/* Social links */}
          <div className="flex items-center gap-5">
            {[
              { icon: <Github size={18} />, href: "#", label: "GitHub" },
              { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
              { icon: <Mail size={18} />, href: "mailto:claudy.dev@starlight.net", label: "Email" },
              { icon: <Globe size={18} />, href: "#", label: "Website" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-night-card border border-night-border flex items-center justify-center text-text-muted hover:text-purple-bright hover:border-purple-primary/30 hover:bg-purple-primary/5 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-3 text-text-muted text-sm">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-purple-bright"
            >
              ♥
            </motion.span>
            <span className="font-light">
              © 2026 ClaudyRg. Handcrafted with precision.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
