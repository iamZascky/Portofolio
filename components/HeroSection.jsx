"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [text, setText] = useState("");
  const fullText = "root@workspace:~# ./init_environment.sh\n> Compiling system kernel...\n> Initializing Premiere Pro...\n> Rendering timeline...\nWorkspace ready for Code & Creativity.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container" style={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      
      {/* Parallax Background */}
      <motion.div 
        className="hero-bg" 
        style={{ 
          y: yBg,
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(circle at center, var(--bg-secondary) 0%, var(--bg-primary) 100%)",
          zIndex: -1 
        }} 
      >
        <div className="grid-overlay" style={{
          position: "absolute", width: "100%", height: "100%",
          backgroundImage: "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.2
        }}></div>
      </motion.div>

      {/* Foreground Content */}
      <motion.div 
        style={{ y: yText, opacity }} 
        className="hero-content"
      >
        <h1 style={{ fontSize: "3rem", color: "var(--accent-green)", marginBottom: "1rem", lineHeight: "1.2" }}>
          Hi, I am a Systems Programmer<br/>
          <span style={{ color: "var(--accent-cyan)" }}>&amp; Video Editor</span>
        </h1>
        <div className="terminal-window" style={{
          backgroundColor: "rgba(19, 26, 42, 0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid var(--border-color)",
          borderRadius: "12px",
          padding: "1.5rem",
          minHeight: "180px",
          width: "100%",
          maxWidth: "650px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
        }}>
          <div className="terminal-header" style={{ display: "flex", gap: "8px", marginBottom: "1rem" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ff5f56" }}></div>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ffbd2e" }}></div>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27c93f" }}></div>
          </div>
          <pre className="text-mono text-accent-cyan" style={{ whiteSpace: "pre-wrap", margin: 0 }}>
            {text}
            <span className="cursor" style={{ animation: "blink 1s step-end infinite" }}>_</span>
          </pre>
        </div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
