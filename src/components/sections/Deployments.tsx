"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import ParallaxWrapper from "@/components/ui/ParallaxWrapper";

const ProjectCard = ({ proj }: { proj: Project }) => {
  return (
    <div className="glass-box flex flex-col group relative overflow-hidden">
      <Link href={`/project/${proj.slug}`} className="p-6 md:p-8 flex flex-col justify-between flex-grow w-full h-full relative">
        {/* Top Row Accent / Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] tracking-widest text-[#00f0ff]/80 font-semibold">
            {proj.category}
          </span>
          <ArrowUpRight className="w-4 h-4 text-[#6b7280] group-hover:text-[#00f0ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 flex-grow mb-6 items-center relative">
          <div className={`${proj.hasSvg ? "sm:col-span-7 flex flex-col justify-between" : "sm:col-span-12 flex flex-col justify-between"} relative`}>
            <ParallaxWrapper speed={40}>
              <div>
                <h3 className="font-mono text-xl font-bold text-white tracking-wide mb-3 group-hover:text-[#00f0ff] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9ca3af] font-sans font-light leading-relaxed">
                  {proj.description}
                </p>
              </div>
            </ParallaxWrapper>
          </div>

          {/* Vector Artwork matching reference cards exactly */}
          {proj.hasSvg && (
            <div className="sm:col-span-5 relative">
              <ParallaxWrapper speed={-40}>
                <div className="flex items-center justify-center p-2 bg-[#050709]/60 rounded border border-white/5 relative group-hover:border-[#00f0ff]/20 transition-all duration-500 overflow-hidden min-h-[120px] group-hover:min-h-[240px]">
                  {proj.svgType === "network" ? (
                    <svg className="absolute inset-0 w-full h-full p-2 opacity-75 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
                      <line x1="20" y1="50" x2="50" y2="20" stroke="#00f0ff" strokeWidth="0.5" strokeDasharray="2" />
                      <line x1="50" y1="20" x2="80" y2="40" stroke="#a855f7" strokeWidth="0.5" />
                      <line x1="80" y1="40" x2="60" y2="80" stroke="#00f0ff" strokeWidth="0.5" />
                      <line x1="60" y1="80" x2="20" y2="50" stroke="#ec4899" strokeWidth="0.5" strokeDasharray="1" />
                      <line x1="50" y1="20" x2="60" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                      
                      <circle cx="20" cy="50" r="3" fill="#050709" stroke="#00f0ff" strokeWidth="1" />
                      <circle cx="50" cy="20" r="4" fill="#050709" stroke="#a855f7" strokeWidth="1" />
                      <circle cx="80" cy="40" r="3" fill="#050709" stroke="#00f0ff" strokeWidth="1" />
                      <circle cx="60" cy="80" r="4" fill="#050709" stroke="#ec4899" strokeWidth="1" />
                    </svg>
                  ) : proj.svgType === "streams" ? (
                    <svg className="absolute inset-0 w-full h-full p-2 opacity-75 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
                      <path d="M 10 50 Q 25 20, 50 50 T 90 50" fill="none" stroke="#a855f7" strokeWidth="1" />
                      <path d="M 10 60 Q 30 40, 60 60 T 90 60" fill="none" stroke="#ec4899" strokeWidth="0.5" strokeDasharray="2" />
                      <path d="M 10 40 Q 40 70, 70 40 T 90 40" fill="none" stroke="#00f0ff" strokeWidth="0.5" strokeDasharray="1 2" />
                    </svg>
                  ) : proj.svgType === "chat" ? (
                    <svg className="absolute inset-0 w-full h-full p-2 opacity-75 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
                      <rect x="20" y="30" width="40" height="25" rx="4" fill="none" stroke="#00f0ff" strokeWidth="1" />
                      <path d="M 25 55 L 25 65 L 35 55" fill="none" stroke="#00f0ff" strokeWidth="1" />
                      <line x1="28" y1="38" x2="52" y2="38" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                      <line x1="28" y1="45" x2="45" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                      
                      <rect x="40" y="50" width="40" height="25" rx="4" fill="none" stroke="#a855f7" strokeWidth="1" />
                      <path d="M 75 75 L 75 85 L 65 75" fill="none" stroke="#a855f7" strokeWidth="1" />
                      <line x1="48" y1="58" x2="72" y2="58" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    </svg>
                  ) : (
                    <svg className="absolute inset-0 w-full h-full p-2 opacity-75 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
                      <polygon points="40,30 40,70 70,50" fill="none" stroke="#ec4899" strokeWidth="1.5" />
                      <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4" />
                      <line x1="10" y1="50" x2="20" y2="50" stroke="#00f0ff" strokeWidth="1" />
                      <line x1="80" y1="50" x2="90" y2="50" stroke="#00f0ff" strokeWidth="1" />
                    </svg>
                  )}
                </div>
              </ParallaxWrapper>
            </div>
          )}
        </div>

        {/* Bottom Tag List */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5 mt-auto">
          {proj.tags.map((t: string) => (
            <span 
              key={t}
              className="px-2.5 py-1 rounded bg-[#050709] border border-white/5 text-[#9ca3af] font-mono text-[10px] tracking-wider group-hover:border-[#00f0ff]/20 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default function Deployments() {
  return (
    <section id="deployments" className="py-20 px-4 md:px-12 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-1 h-8 bg-[#00f0ff] rounded-full"></div>
        <h2 className="font-mono text-xl sm:text-2xl font-extrabold tracking-wider text-white uppercase">
          FEATURED_PROJECTS
        </h2>
      </div>

      {/* Deployments List */}
      <div className="flex flex-col gap-6 relative">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} proj={proj} />
        ))}
      </div>
    </section>
  );
}
