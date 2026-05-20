"use client";

import React, { useState, useEffect } from "react";
import { NAVIGATION_SECTIONS } from "@/constants/portfolio";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Offset by 1/3 of the viewport height to trigger section change early
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = "hero";
      for (const section of NAVIGATION_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          if (el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll, { capture: true });
  }, []);

  return (
    <div className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col gap-6 items-center z-40 opacity-40 hover:opacity-100 transition-opacity">
      {NAVIGATION_SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeSection === section.id
              ? "bg-[#00f0ff] scale-150 shadow-[0_0_8px_#00f0ff]"
              : "bg-white/40 hover:bg-[#00f0ff] hover:scale-150"
          }`}
          title={section.title}
        ></a>
      ))}
      <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"></div>
    </div>
  );
}

