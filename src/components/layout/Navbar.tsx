"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between border-b bg-[#0a0d14]/80 backdrop-blur-md border-white/5 shadow-lg"
    >
      {/* Brand Logo */}
      <a href="#hero" className="flex items-center gap-2 group">
        <span className="font-mono font-bold tracking-wider text-sm md:text-base text-white group-hover:text-[#00f0ff] transition-colors">
          NEURAL_DEV_2026
        </span>
      </a>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-[#9ca3af]">
        <a href="#deployments" className="hover:text-[#00f0ff] transition-colors">
          Projects
        </a>
        <a href="#integrity" className="hover:text-[#00f0ff] transition-colors">
          Stats
        </a>
        <a href="#preview" className="hover:text-[#00f0ff] transition-colors">
          Preview
        </a>
        <a href="#history" className="hover:text-[#00f0ff] transition-colors">
          History
        </a>
        <a href="#transmit" className="hover:text-[#00f0ff] transition-colors">
          Contact
        </a>
      </nav>

      {/* Status Button */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] font-mono text-[10px] tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse"></span>
          SYS_SECURE
        </div>
        <a 
          href="#transmit" 
          className="px-4 py-1.5 rounded bg-[#0a0d14] hover:bg-[#00f0ff]/10 text-white hover:text-[#00f0ff] border border-white/10 hover:border-[#00f0ff]/40 font-mono text-xs tracking-wider transition-all"
        >
          COMM_ON
        </a>
      </div>
    </motion.header>
  );
}
