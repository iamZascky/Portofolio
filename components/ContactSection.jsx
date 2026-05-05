"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Terminal } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let response = "";
      const cmd = input.trim().toLowerCase();
      
      if (cmd === "help") {
        response = "Available commands: help, email, github, clear";
      } else if (cmd === "email") {
        response = "Opening mail client to send to: dev@system-programmer.local";
        setTimeout(() => window.location.href = "mailto:dev@example.com", 1000);
      } else if (cmd === "github") {
        response = "Redirecting to GitHub profile...";
        setTimeout(() => window.open("https://github.com", "_blank"), 1000);
      } else if (cmd === "clear") {
        setOutput([]);
        setInput("");
        return;
      } else if (cmd !== "") {
        response = `Command not found: ${cmd}. Type 'help' for available commands.`;
      }

      if (cmd !== "") {
        setOutput([...output, { cmd, response }]);
      }
      setInput("");
    }
  };

  return (
    <section ref={ref} style={{ padding: "100px 20px", minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <motion.div 
        style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--text-primary)" }}>
            <span style={{ color: "var(--accent-purple)" }}>03.</span> Establish Connection
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "1rem" }}>
            My inbox is currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div style={{ 
          background: "var(--bg-tertiary)", 
          border: "1px solid var(--border-color)", 
          borderRadius: "8px", 
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
        }}>
          <div style={{ background: "#222", padding: "10px 15px", display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid var(--border-color)" }}>
            <Terminal size={16} color="var(--text-secondary)" />
            <span className="text-mono" style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>contact.sh</span>
          </div>
          
          <div style={{ padding: "20px", minHeight: "300px", display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div className="text-mono" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Type 'help' to see available commands.
              </div>
              
              {output.map((item, i) => (
                <div key={i} className="text-mono" style={{ fontSize: "0.9rem" }}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span style={{ color: "var(--accent-purple)" }}>guest@sys:~{"$"}</span>
                    <span>{item.cmd}</span>
                  </div>
                  {item.response && (
                    <div style={{ color: "var(--accent-cyan)", marginTop: "4px" }}>{item.response}</div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px", borderTop: "1px dashed var(--border-color)", paddingTop: "15px" }}>
              <span className="text-mono" style={{ color: "var(--accent-purple)" }}>guest@sys:~{"$"}</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                autoFocus
                className="text-mono"
                style={{ 
                  background: "transparent", 
                  border: "none", 
                  color: "var(--text-primary)", 
                  width: "100%", 
                  outline: "none",
                  fontSize: "0.9rem"
                }} 
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
