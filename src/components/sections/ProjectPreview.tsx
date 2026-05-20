"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Monitor } from "lucide-react";
import Link from "next/link";
import ParallaxWrapper from "@/components/ui/ParallaxWrapper";

import { projects } from "@/data/projects";

const slides = projects.map((proj, index) => {
  let accent = "from-[#00f0ff] to-blue-500";
  let artworkType = "ecommerce";
  
  if (proj.svgType === "streams") {
     accent = "from-purple-500 to-pink-500";
     artworkType = "analytics";
  } else if (proj.svgType === "chat") {
     accent = "from-emerald-400 to-cyan-500";
     artworkType = "workspace";
  } else if (proj.svgType === "video") {
     accent = "from-purple-600 to-indigo-500";
     artworkType = "video";
  }

  return {
    id: index,
    title: proj.category,
    subtitle: proj.title,
    description: proj.description,
    metrics: proj.features ? proj.features.slice(0, 3) : proj.tags.slice(0, 3),
    accent,
    artworkType,
    slug: proj.slug,
  };
});

export default function ProjectPreview() {
  const [current, setCurrent] = useState(0);

  // Auto advance slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current];

  return (
    <section id="preview" className="py-20 px-4 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-[#00f0ff] rounded-full"></div>
          <div>
            <h2 className="font-mono text-xl sm:text-2xl font-extrabold tracking-wider text-white uppercase">
              PROJECT_PREVIEW
            </h2>
            <span className="font-mono text-[10px] text-[#6b7280] tracking-widest block mt-0.5">
              AUTO_ADVANCE // 10s INTERVAL ACTIVE
            </span>
          </div>
        </div>

        {/* Manual Slide Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button 
            onClick={handlePrev}
            className="p-2 rounded bg-[#050709] border border-white/5 hover:border-[#00f0ff]/40 text-[#9ca3af] hover:text-white transition-all duration-200"
            title="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1.5 px-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === current ? "w-6 bg-[#00f0ff]" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                title={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="p-2 rounded bg-[#050709] border border-white/5 hover:border-[#00f0ff]/40 text-[#9ca3af] hover:text-white transition-all duration-200"
            title="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Carousel Display Box Wrapper */}
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#050709]/80 shadow-2xl backdrop-blur-md min-h-[440px] flex flex-col group">
        {/* Animated Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 md:p-10 items-center"
          >
            {/* Left side info */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full gap-6">
              <ParallaxWrapper speed={40}>
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#00f0ff] font-bold block mb-2">
                    {slide.title}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                    {slide.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#d1d5db] font-sans font-light leading-relaxed mb-6">
                    {slide.description}
                  </p>

                  {/* Highlights list */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-white/5 font-mono text-xs">
                    {slide.metrics.map((m, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <span className="text-[9px] text-[#6b7280]">METRIC_{i+1}</span>
                        <span className="text-[11px] font-bold text-[#9ca3af]">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA action button */}
                <div className="pt-6">
                  <Link 
                    href={`/project/${slide.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white tracking-wider hover:text-[#00f0ff] transition-all duration-200"
                  >
                    <span>ACCESS_FULL_REPOSITORY</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </Link>
                </div>
              </ParallaxWrapper>
            </div>

            {/* Right side procedural UI artwork window simulator */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <ParallaxWrapper speed={-40}>
                <div className="w-full aspect-video max-w-lg rounded-md bg-[#0a0d14] border border-white/5 overflow-hidden shadow-inner flex flex-col relative group-hover:border-white/15 transition-all duration-500">
                {/* Mac window header bar */}
                <div className="bg-[#030508] px-3 py-2 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/60"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500/60"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500/60"></span>
                  </div>
                  <span className="font-mono text-[9px] text-[#6b7280] tracking-widest truncate max-w-[200px]">
                    https://preview.neuraldev.io/slide_{slide.id}
                  </span>
                  <div className="w-3"></div>
                </div>

                {/* Simulated workspace dynamic render */}
                <div className="flex-grow p-4 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-transparent via-transparent to-white/[0.01]">
                  {/* Subtle vector grid */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <div className={`w-48 h-48 rounded-full bg-gradient-to-tr ${slide.accent} blur-2xl`} />
                  </div>

                  {slide.artworkType === "ecommerce" && (
                    <div className="relative z-10 w-full h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <div className="w-16 h-3 bg-white/10 rounded"></div>
                        <div className="flex gap-2">
                          <div className="w-6 h-2 bg-[#00f0ff]/40 rounded"></div>
                          <div className="w-6 h-2 bg-white/10 rounded"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 my-auto">
                        <div className="aspect-square bg-white/5 rounded border border-white/5 p-1.5 flex flex-col justify-between">
                          <div className="w-full h-8 bg-gradient-to-t from-[#00f0ff]/20 to-transparent rounded-sm"></div>
                          <div className="w-10 h-1 bg-white/20 rounded"></div>
                        </div>
                        <div className="aspect-square bg-white/5 rounded border border-[#00f0ff]/20 p-1.5 flex flex-col justify-between relative shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                          <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#00f0ff]"></div>
                          <div className="w-full h-8 bg-gradient-to-t from-[#00f0ff]/40 to-transparent rounded-sm"></div>
                          <div className="w-12 h-1 bg-white/40 rounded"></div>
                        </div>
                        <div className="aspect-square bg-white/5 rounded border border-white/5 p-1.5 flex flex-col justify-between">
                          <div className="w-full h-8 bg-gradient-to-t from-blue-500/20 to-transparent rounded-sm"></div>
                          <div className="w-8 h-1 bg-white/20 rounded"></div>
                        </div>
                      </div>
                      <div className="w-full h-4 bg-[#00f0ff]/10 rounded flex items-center justify-center font-mono text-[8px] text-[#00f0ff] tracking-widest font-bold">
                        SECURE_CHECKOUT_ACTIVE
                      </div>
                    </div>
                  )}

                  {slide.artworkType === "analytics" && (
                    <div className="relative z-10 w-full h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-[#9ca3af]">CLUSTER_LOAD_INDEX</span>
                        <span className="font-mono text-[9px] text-purple-400">98.2%</span>
                      </div>
                      {/* Procedural wave columns */}
                      <div className="h-20 w-full flex items-end gap-1 px-2 border-b border-white/5 pb-1">
                        {[30, 45, 20, 60, 80, 50, 90, 70, 85, 40, 75, 95].map((h, i) => (
                          <div 
                            key={i} 
                            style={{ height: `${h}%` }} 
                            className="flex-1 bg-gradient-to-t from-purple-500/20 via-purple-500/60 to-purple-400 rounded-t-sm transition-all duration-300 group-hover:opacity-100 opacity-80"
                          ></div>
                        ))}
                      </div>
                      <div className="flex justify-between font-mono text-[8px] text-[#6b7280]">
                        <span>T-60s</span>
                        <span>T-30s</span>
                        <span>NOW</span>
                      </div>
                    </div>
                  )}

                  {slide.artworkType === "workspace" && (
                    <div className="relative z-10 w-full h-full flex flex-col justify-center gap-3 items-center text-center">
                      <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 animate-pulse">
                        <Monitor className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-white block font-bold">ENCRYPTED_TUNNEL_ESTABLISHED</span>
                        <span className="font-mono text-[8px] text-[#6b7280] block mt-0.5">PEER_ID: 0x9F82..C1A4</span>
                      </div>
                      <div className="flex gap-1.5 mt-1">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-[8px] font-mono text-emerald-400">TLS_1.3</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 text-[8px] font-mono text-[#9ca3af]">ZERO_LOGS</span>
                      </div>
                    </div>
                  )}

                  {slide.artworkType === "video" && (
                    <div className="relative z-10 w-full h-full flex flex-col justify-center gap-2 items-center">
                      <div className="w-full bg-[#0a0d14] rounded overflow-hidden flex aspect-[21/9] border border-white/10 shadow-lg relative">
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                           <div className="w-8 h-8 rounded-full bg-purple-500/80 flex items-center justify-center pl-1 backdrop-blur-sm shadow-[0_0_15px_#a855f7]">
                              <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent"></div>
                           </div>
                        </div>
                        <div className="w-1/3 bg-purple-500/20 h-full border-r border-purple-500/30"></div>
                        <div className="w-1/3 bg-pink-500/20 h-full border-r border-pink-500/30"></div>
                        <div className="w-1/3 bg-indigo-500/20 h-full"></div>
                      </div>
                      <div className="h-4 w-full bg-white/5 rounded border border-white/5 flex gap-1 p-0.5 relative overflow-hidden">
                         <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-red-500 z-20"></div>
                         <div className="h-full w-1/4 bg-blue-500/40 rounded-sm"></div>
                         <div className="h-full w-1/2 bg-cyan-500/40 rounded-sm"></div>
                         <div className="h-full w-1/4 bg-blue-500/40 rounded-sm"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ParallaxWrapper>
          </div>
        </motion.div>
        </AnimatePresence>

        {/* Subtle dynamic bottom timeline loader bar matching exactly the 10-second tick */}
        <div className="h-0.5 w-full bg-[#050709] absolute bottom-0 left-0">
          <motion.div
            key={current}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 10, ease: "linear" }}
            className="h-full bg-gradient-to-r from-transparent via-[#00f0ff] to-white"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
