"use client";

import React from "react";
import { Layers, Database, Container, Server, Shield, Cpu, Code2, Video } from "lucide-react";
import ParallaxWrapper from "./ParallaxWrapper";

const metrics = [
  { label: "FRONTEND_ARCHITECTURE", percentage: 99, icon: Layers, desc: "Fluid animations, responsive layouts, and modern glassmorphism UI." },
  { label: "BACKEND_PIPELINES", percentage: 95, icon: Server, desc: "High-throughput data layers and secure API endpoints." },
  { label: "VIDEO_PRODUCTION", percentage: 95, icon: Video, desc: "Cinematic timeline editing, color grading, and VFX." },
  { label: "UI/UX_FIDELITY", percentage: 92, icon: Shield, desc: "Pixel-perfect implementation of design tokens and typography." },
];

const technologies = [
  { name: "React/JS", icon: Code2, color: "text-[#00f0ff]" },
  { name: "Premiere Pro", icon: Video, color: "text-purple-400" },
  { name: "After Effects", icon: Video, color: "text-purple-500" },
  { name: "PostgreSQL", icon: Database, color: "text-indigo-400" },
  { name: "Docker", icon: Container, color: "text-cyan-400" },
  { name: "Go", icon: Server, color: "text-cyan-300" },
  { name: "Next.js", icon: Cpu, color: "text-white" },
];

export default function Integrity() {
  return (
    <section id="integrity" className="py-20 px-4 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header & Description */}
      <div className="mb-12">
        <h2 className="font-mono text-xl sm:text-2xl font-extrabold tracking-wider text-white uppercase mb-4">
          TECHNICAL_EXPERTISE
        </h2>
        
        <p className="max-w-3xl text-xs sm:text-sm text-[#9ca3af] font-sans font-light leading-relaxed">
          Modern web stack crafted for extreme responsiveness, performance, and cross-platform compatibility. Every layer is structured to scale smoothly under heavy enterprise loads.
        </p>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Skill feature cards */}
        <div className="lg:col-span-6">
          <ParallaxWrapper speed={40}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map((item) => {
                const IconComp = item.icon || Layers;
                return (
                  <div 
                    key={item.label}
                    className="glass-box p-5 flex flex-col gap-4 border border-white/5 group hover:border-[#00f0ff]/30 transition-all duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 rounded bg-[#050709] border border-white/10 flex items-center justify-center text-[#6b7280] group-hover:text-[#00f0ff] group-hover:bg-[#00f0ff]/5 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs sm:text-sm text-white font-bold mb-1.5">{item.label}</h3>
                      <p className="font-sans text-[11px] sm:text-xs text-[#9ca3af] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ParallaxWrapper>
        </div>

        {/* Right Column: Technologies Grid matching reference screenshot exactly */}
        <div className="lg:col-span-6">
          <ParallaxWrapper speed={-40}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technologies.map((tech) => {
                const IconComp = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="glass-box p-4 flex flex-col items-center justify-center gap-3 text-center group cursor-default hover:-translate-y-1 transition-transform"
                  >
                    <div className="p-2 rounded bg-[#050709] border border-white/5 group-hover:border-[#00f0ff]/30 transition-colors">
                      <IconComp className={`w-5 h-5 ${tech.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                    </div>
                    <span className="font-mono text-[11px] tracking-wider text-[#d1d5db] group-hover:text-white transition-colors font-semibold">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </ParallaxWrapper>
        </div>
      </div>
    </section>
  );
}
