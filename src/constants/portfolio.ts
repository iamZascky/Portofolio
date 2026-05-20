import { Layers, Database, Container, Server, Shield, Cpu, Code2, Video } from "lucide-react";
import { TimelineItem, MetricItem, TechnologyItem } from "@/types";

export const NAVIGATION_SECTIONS = [
  { id: "hero", title: "Top" },
  { id: "deployments", title: "Projects" },
  { id: "integrity", title: "Stats" },
  { id: "preview", title: "Preview" },
  { id: "history", title: "History" },
  { id: "transmit", title: "Contact" },
] as const;

export const TIMELINE_DATA: TimelineItem[] = [
  {
    period: "2024 - PRESENT",
    role: "LEAD_SOFTWARE_ENGINEER",
    company: "GlobalTech Solutions",
    description: "Spearheading frontend/backend architectures, optimizing distributed microservices, and leading high-performing cross-functional dev teams.",
    align: "right",
  },
  {
    period: "2021 - 2024",
    role: "FULL-STACK_DEV_&_VIDEO_EDITOR",
    company: "CreativeLabs Digital",
    description: "Engineered robust responsive user interfaces using React/Next.js and produced high-quality video content featuring advanced motion graphics.",
    align: "left",
  },
];

export const SKILL_METRICS: MetricItem[] = [
  { 
    label: "FRONTEND_ARCHITECTURE", 
    percentage: 99, 
    icon: Layers, 
    desc: "Fluid animations, responsive layouts, and modern glassmorphism UI." 
  },
  { 
    label: "BACKEND_PIPELINES", 
    percentage: 95, 
    icon: Server, 
    desc: "High-throughput data layers and secure API endpoints." 
  },
  { 
    label: "VIDEO_PRODUCTION", 
    percentage: 95, 
    icon: Video, 
    desc: "Cinematic timeline editing, color grading, and VFX." 
  },
  { 
    label: "UI/UX_FIDELITY", 
    percentage: 92, 
    icon: Shield, 
    desc: "Pixel-perfect implementation of design tokens and typography." 
  },
];

export const TECHNOLOGIES: TechnologyItem[] = [
  { name: "React/JS", icon: Code2, color: "text-[#00f0ff]" },
  { name: "Premiere Pro", icon: Video, color: "text-purple-400" },
  { name: "After Effects", icon: Video, color: "text-purple-500" },
  { name: "PostgreSQL", icon: Database, color: "text-indigo-400" },
  { name: "Docker", icon: Container, color: "text-cyan-400" },
  { name: "Go", icon: Server, color: "text-cyan-300" },
  { name: "Next.js", icon: Cpu, color: "text-white" },
];
