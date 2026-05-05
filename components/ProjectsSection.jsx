"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FolderGit2, ExternalLink } from "lucide-react";

import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yTitle = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacityTitle = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="projects" ref={ref} style={{ padding: "100px 20px", minHeight: "100vh" }}>
      <motion.div style={{ maxWidth: "1000px", margin: "0 auto", y: yTitle, opacity: opacityTitle }}>
        <h2 style={{ fontSize: "2.5rem", color: "var(--text-primary)", borderBottom: "2px solid var(--accent-cyan)", paddingBottom: "10px", display: "inline-block", marginBottom: "3rem" }}>
          <span style={{ color: "var(--accent-cyan)" }}>02.</span> Projects
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {projects.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} style={{ textDecoration: 'none', display: 'flex' }}>
              <ProjectCard project={project} index={index} />
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{ 
          background: "var(--bg-secondary)", 
          padding: "2rem", 
          borderRadius: "8px",
          border: "1px solid var(--border-color)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          height: "100%",
          width: "100%",
        }}
        whileHover={{ y: -10, borderColor: "var(--accent-cyan)", boxShadow: "0 10px 30px rgba(0, 255, 255, 0.1)" }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <FolderGit2 size={32} color="var(--accent-cyan)" />
            <span style={{ color: "var(--text-secondary)" }}>
              <ExternalLink size={20} />
            </span>
          </div>
          <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>{project.title}</h3>
          <p style={{ color: "var(--text-secondary)", marginTop: "1rem", fontSize: "0.95rem" }}>
            {project.description}
          </p>
        </div>
      
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "2rem", listStyleType: "none", padding: 0 }}>
        {project.tech.map((tech, i) => (
          <li key={i} className="text-mono" style={{ fontSize: "0.8rem", color: "var(--accent-green)", background: "rgba(0, 255, 65, 0.1)", padding: "4px 8px", borderRadius: "4px" }}>
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
