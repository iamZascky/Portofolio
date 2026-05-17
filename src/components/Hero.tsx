"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Terminal, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax subtle transformations
  const textY = useTransform(scrollY, [0, 500], [0, 120]);
  const opacityVal = useTransform(scrollY, [0, 400], [1, 0.1]);
  const scaleVal = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8 text-center overflow-hidden"
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#00f0ff]/5 via-purple-500/5 to-transparent blur-3xl" />
      </div>

      <motion.div
        style={{ y: textY, opacity: opacityVal, scale: scaleVal }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Signal Optimum Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0d14] border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
          CURRENTLY_SURVIVING_LIFE
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] uppercase text-center"
        >
          <span className="heading-gradient block">Currently Under Development</span>
          <span className="heading-gradient block">Portofolio</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-[#9ca3af] font-sans font-light leading-relaxed text-center"
        >
          A digital playground featuring responsive interfaces specializing in debugging problems I created myself, Googling error messages professionally, and pretending legacy code makes sense.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto"
        >
          <a
            href="#deployments"
            className="w-full sm:w-auto px-6 py-3 rounded bg-[#0a0d14] border border-white/20 hover:border-[#00f0ff] text-white hover:text-[#00f0ff] font-mono text-xs tracking-widest font-semibold transition-all flex items-center justify-center gap-2 group shadow-lg"
          >
            <span>[ VIEW_PROJECTS ]</span>
            <Terminal className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
          </a>

          <a
            href="#transmit"
            className="w-full sm:w-auto px-6 py-3 rounded bg-white hover:bg-[#e0f7ff] text-[#050709] font-mono text-xs tracking-widest font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <span>CONTACT_ME</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#050709]" />
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Parallax Grid Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 pointer-events-none">
        <span className="font-mono text-[9px] tracking-widest text-[#6b7280]">SCROLL_DOWN_TO_ACCESS</span>
        <div className="w-0.5 h-6 bg-gradient-to-b from-[#00f0ff]/60 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
