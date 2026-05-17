"use client";

import React, { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Dynamic particle count based on screen size
    const particleCount = Math.min(Math.floor(width / 25), 50);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      age: number;
      maxAge: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3.5 + 2,
        alpha: Math.random() * 0.5 + 0.2,
        age: Math.random() * 400,
        maxAge: Math.random() * 400 + 200,
      });
    }

    const getColorForRatio = (ratio: number, alpha: number) => {
      let hue = 180; // Cyan
      let lightness = 50;

      if (ratio < 0.6) {
        // Young to Mid-Life: Cyan (180) to Basic Blue (220)
        hue = Math.floor(180 + (ratio / 0.6) * 40);
      } else {
        // Mid-Life to Old Age: Basic Blue (220) to White (100% lightness)
        hue = 220;
        const oldRatio = (ratio - 0.6) / 0.4;
        lightness = Math.floor(50 + oldRatio * 50);
      }

      return `hsla(${hue}, 100%, ${lightness}%, ${alpha})`;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.age++;

        // Lifecycle expiration / respawn
        if (p.age >= p.maxAge) {
          p.age = 0;
          p.x = Math.random() * width;
          p.y = Math.random() * height;
          p.vx = (Math.random() - 0.5) * 0.5;
          p.vy = (Math.random() - 0.5) * 0.5;
        }

        // Wrap around borders smoothly
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const ageRatio = p.age / p.maxAge;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = getColorForRatio(ageRatio, p.alpha);
        ctx.fill();

        // Connect nearby particles with subtle vector constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const p2Ratio = p2.age / p2.maxAge;
            const avgRatio = (ageRatio + p2Ratio) / 2;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = getColorForRatio(avgRatio, (1 - dist / 130) * 0.15);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  );
}
