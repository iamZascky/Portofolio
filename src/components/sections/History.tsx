"use client";

import React from "react";
import ParallaxWrapper from "@/components/ui/ParallaxWrapper";
import { TIMELINE_DATA } from "@/constants/portfolio";

export default function History() {
  return (
    <section id="history" className="py-20 px-4 md:px-12 max-w-5xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <h2 className="font-mono text-xl sm:text-2xl font-extrabold tracking-wider text-white uppercase text-center mb-16">
        PROFESSIONAL_EXPERIENCE
      </h2>

      {/* Vertical Timeline Tree */}
      <div className="relative max-w-3xl mx-auto">
        {/* Central glowing guideline */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-[#00f0ff] via-white/10 to-transparent hidden md:block"></div>

          <div className="flex flex-col gap-12 relative z-10">
            {TIMELINE_DATA.map((item) => {
              const isRight = item.align === "right";

              return (
                <div
                  key={item.role}
                  className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 relative group"
                >
                  {/* Desktop Left Side Content */}
                  <div className={`w-full md:w-[45%] ${isRight ? "md:text-right" : "md:order-2 md:text-left"} text-center`}>
                    <ParallaxWrapper speed={40}>
                      <span className="font-mono text-[10px] tracking-widest text-[#00f0ff] block mb-1">
                        {item.period}
                      </span>
                      <h3 className="font-mono text-lg sm:text-xl font-extrabold text-white tracking-wide group-hover:text-[#00f0ff] transition-colors">
                        {item.role}
                      </h3>
                      <span className="font-mono text-xs text-[#9ca3af] block mt-0.5">
                        {item.company}
                      </span>
                    </ParallaxWrapper>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="w-3 h-3 rounded-full bg-[#050709] border-2 border-[#00f0ff] absolute left-1/2 -translate-x-1/2 shadow-[0_0_10px_#00f0ff] hidden md:block group-hover:scale-125 transition-transform"></div>

                  {/* Desktop Right Side / Description Box */}
                  <div className={`w-full md:w-[45%] ${isRight ? "md:order-2" : ""}`}>
                    <ParallaxWrapper speed={-40}>
                      <div className="glass-box p-4 md:p-5 text-left group-hover:border-[#00f0ff]/20 transition-colors">
                        <p className="text-xs sm:text-sm text-[#d1d5db] font-sans font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </ParallaxWrapper>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </section>
  );
}
