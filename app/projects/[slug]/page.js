import { getProjectBySlug, projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  // Access params.slug safely for Next.js Next 15+ constraints (params is a promise sometimes, but in App Router static params it can be accessed directly or awaited).
  // Awaiting params to be safe across minor Next versions
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main style={{ minHeight: "100vh", padding: "100px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <Link href="/#projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--accent-cyan)", marginBottom: "2rem", textDecoration: "none" }}>
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </Link>

        <h1 style={{ fontSize: "3rem", color: "var(--text-primary)", marginBottom: "1rem" }}>
          {project.title}
        </h1>

        <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "2rem", listStyleType: "none", padding: 0 }}>
          {project.tech.map((tech, i) => (
            <li key={i} className="text-mono" style={{ fontSize: "0.9rem", color: "var(--accent-green)", background: "rgba(16, 185, 129, 0.1)", padding: "6px 12px", borderRadius: "4px" }}>
              {tech}
            </li>
          ))}
        </ul>

        <div style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "3rem" }}>
          <p>{project.content}</p>
        </div>

        {project.video && (
          <div style={{ marginBottom: "3rem", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-color)", background: "var(--bg-secondary)" }}>
            <div style={{ padding: "10px 15px", borderBottom: "1px solid var(--border-color)", display: "flex", alignItems: "center", gap: "10px" }}>
              <Play size={16} color="var(--accent-purple)" />
              <span className="text-mono" style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>video_preview.mp4</span>
            </div>
            <video 
              controls 
              style={{ width: "100%", display: "block" }} 
              src={project.video}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {project.link !== "#" && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--accent-cyan)",
              color: "var(--text-primary)",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.2s"
            }}
          >
            <span>View Source Code</span>
            <ExternalLink size={20} />
          </a>
        )}

      </div>
    </main>
  );
}
