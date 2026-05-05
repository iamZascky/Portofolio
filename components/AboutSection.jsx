"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yCode1 = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const yCode2 = useTransform(scrollYProgress, [0, 1], [-100, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} style={{ position: "relative", minHeight: "100vh", padding: "100px 20px", display: "flex", alignItems: "center", overflow: "hidden" }}>
      
      {/* Parallax Background Elements */}
      <motion.div style={{ y: yCode1, position: "absolute", right: "5%", top: "20%", opacity: 0.1, zIndex: -1 }}>
        <pre className="text-mono" style={{ fontSize: "0.8rem", color: "var(--accent-green)" }}>
{`struct inode {
    umode_t i_mode;
    unsigned short i_opflags;
    kuid_t i_uid;
    kgid_t i_gid;
    unsigned int i_flags;
#ifdef CONFIG_FS_POSIX_ACL
    struct posix_acl *i_acl;
    struct posix_acl *i_default_acl;
#endif
};`}
        </pre>
      </motion.div>

      <motion.div style={{ y: yCode2, position: "absolute", left: "2%", bottom: "10%", opacity: 0.1, zIndex: -1 }}>
        <pre className="text-mono" style={{ fontSize: "0.8rem", color: "var(--accent-cyan)" }}>
{`fn main() {
    let mut vec = Vec::new();
    vec.push(1);
    vec.push(2);

    for x in &vec {
        println!("{}", x);
    }
}`}
        </pre>
      </motion.div>

      {/* Foreground Content */}
      <motion.div style={{ opacity: opacityText, maxWidth: "800px", margin: "0 auto", zIndex: 1 }}>
        <h2 style={{ fontSize: "2.5rem", color: "var(--text-primary)", borderBottom: "2px solid var(--accent-green)", paddingBottom: "10px", display: "inline-block" }}>
          <span style={{ color: "var(--accent-green)" }}>01.</span> About Me
        </h2>
        
        <p style={{ fontSize: "1.1rem", marginTop: "2rem", color: "var(--text-secondary)" }}>
          I am a passionate Systems Programmer and Video Editor. I specialize in low-level engineering, performance optimization, and building robust infrastructure. But beyond code, I have a strong creative side, editing high-quality videos using tools like Adobe Premiere Pro. I enjoy both writing code that speaks directly to the hardware and crafting compelling visual narratives.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
          
          <div style={{ background: "var(--bg-secondary)", padding: "1.5rem", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            <h3 className="text-mono text-accent-cyan">Languages</h3>
            <ul style={{ listStyleType: "none", color: "var(--text-secondary)", marginTop: "1rem" }}>
              <li>▹ C / C++</li>
              <li>▹ Rust</li>
              <li>▹ Assembly (x86_64, ARM)</li>
              <li>▹ Go</li>
            </ul>
          </div>

          <div style={{ background: "var(--bg-secondary)", padding: "1.5rem", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            <h3 className="text-mono text-accent-purple">Domains</h3>
            <ul style={{ listStyleType: "none", color: "var(--text-secondary)", marginTop: "1rem" }}>
              <li>▹ OS Development</li>
              <li>▹ Embedded Systems</li>
              <li>▹ Compilers</li>
              <li>▹ Network Stacks</li>
            </ul>
          </div>

          <div style={{ background: "var(--bg-secondary)", padding: "1.5rem", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            <h3 className="text-mono" style={{ color: "#ff8a00" }}>Creative</h3>
            <ul style={{ listStyleType: "none", color: "var(--text-secondary)", marginTop: "1rem" }}>
              <li>▹ Video Editing</li>
              <li>▹ Adobe Premiere Pro</li>
              <li>▹ Motion Graphics</li>
              <li>▹ Visual Storytelling</li>
            </ul>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
