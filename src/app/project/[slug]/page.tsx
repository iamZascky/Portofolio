import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal, Cpu, Layout, Shield } from "lucide-react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050709] text-[#9ca3af] selection:bg-[#00f0ff]/20 selection:text-[#00f0ff] pb-20">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none flex items-start justify-center opacity-30 overflow-hidden">
        <div className="w-[800px] h-[500px] rounded-full bg-gradient-to-b from-[#00f0ff]/10 via-purple-500/5 to-transparent blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 pt-12 md:pt-24">
        {/* Top Navigation */}
        <nav className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/5 border border-white/10 hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 text-xs font-mono tracking-widest text-white transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            RETURN_TO_CORE
          </Link>
        </nav>

        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse"></div>
            <span className="font-mono text-xs tracking-widest text-[#00f0ff]">
              {project.category} {"// ASSET_LOADED"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase mb-6 drop-shadow-[0_0_15px_rgba(0,240,255,0.1)]">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-[#d1d5db] font-light max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Tags and Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-16 pb-12 border-b border-white/5">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1.5 rounded-sm bg-[#0a0d14] border border-white/10 text-[#00f0ff] font-mono text-xs tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Main Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white tracking-wide mb-6 flex items-center gap-3">
              <Layout className="w-5 h-5 text-[#00f0ff]" />
              SYSTEM_OVERVIEW
            </h2>
            <div className="prose prose-invert prose-p:text-[#9ca3af] prose-p:leading-loose max-w-none mb-12">
              <p>{project.longDescription}</p>
            </div>

            <h2 className="text-xl font-bold text-white tracking-wide mb-6 flex items-center gap-3">
              <Cpu className="w-5 h-5 text-purple-400" />
              KEY_CAPABILITIES
            </h2>
            <ul className="space-y-4">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                  <span className="text-[#d1d5db]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="p-6 md:p-8 rounded bg-[#0a0d14] border border-white/5 glass-box sticky top-24">
              <h3 className="font-mono text-xs tracking-widest text-[#6b7280] mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                EXECUTION_DETAILS
              </h3>

              <div className="space-y-6">
                <div>
                  <span className="block font-mono text-[10px] text-[#6b7280] mb-1">STATUS</span>
                  <span className="flex items-center gap-2 text-sm text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    ONLINE_AND_ACTIVE
                  </span>
                </div>

                <div>
                  <span className="block font-mono text-[10px] text-[#6b7280] mb-1">ACCESS_LEVEL</span>
                  <span className="flex items-center gap-2 text-sm text-white">
                    <Shield className="w-4 h-4 text-orange-400" />
                    PUBLIC_RESTRICTED
                  </span>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <button className="w-full px-4 py-3 rounded bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs tracking-widest font-bold transition-all">
                    REQUEST_DEMO_ACCESS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
