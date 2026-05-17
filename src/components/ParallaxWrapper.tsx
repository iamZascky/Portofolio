"use client";

import React, { useEffect, useState, useRef } from "react";

export default function ParallaxWrapper({ 
  children, 
  className = "",
  speed = 40 // Retained for prop compatibility across all sections
}: { 
  children: React.ReactNode; 
  className?: string;
  speed?: number;
}) {
  const [opacity, setOpacity] = useState(0.1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if element is in viewport
      if (rect.top <= viewportHeight && rect.bottom >= 0) {
        // Calculate element's center relative to viewport center
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        
        // Distance from center: 0 when perfectly centered, 1 when at edge of screen
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter) / (viewportHeight / 2);
        
        // Map distance to opacity: 2.0 when centered (sustained peak luminosity), 0.1 at viewport edges
        const calculatedOpacity = Math.max(0.1, Math.min(2.0, 2.0 - (distanceFromCenter * 1.9)));
        setOpacity(calculatedOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={`w-full ${className}`}>
      <div 
        style={{ 
          opacity: opacity,
          transition: "opacity 0.3s ease-out",
          willChange: "opacity"
        }} 
        className="w-full h-full"
      >
        {children}
      </div>
    </div>
  );
}
