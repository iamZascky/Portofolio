export interface Project {
  slug: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  hasSvg?: boolean;
  svgType?: string;
  longDescription: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "nexus-ecommerce",
    category: "FULL-STACK // COMMERCE",
    title: "NEXUS_ECOMMERCE",
    description: "High-performance modern e-commerce platform featuring real-time inventory synchronization, secure checkout, and highly optimized fluid user interfaces.",
    tags: ["Next.js", "React", "Stripe", "Tailwind"],
    hasSvg: true,
    svgType: "network",
    longDescription: "NEXUS_ECOMMERCE was built to handle immense transaction volume while maintaining sub-100ms interaction latency. The architecture leverages Next.js App Router for aggressive static regeneration, Stripe for secure edge-verified payments, and a fully custom Tailwind design system focusing on micro-interactions and glassmorphic layers.",
    features: ["Real-time Cart Sync via WebSockets", "Edge-based authentication", "Dynamic Route Rendering", "Global CDN Asset Delivery"]
  },
  {
    slug: "cloud-telemetry",
    category: "DATA VISUALIZATION // METRICS",
    title: "CLOUD_TELEMETRY",
    description: "Enterprise analytics dashboard delivering rich interactive chart widgets, sub-second telemetry aggregation, and customizable query workspaces.",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    hasSvg: true,
    svgType: "streams",
    longDescription: "Built for DevOps and SRE teams, CLOUD_TELEMETRY ingests millions of events per second via a high-throughput Node.js stream pipeline into optimized PostgreSQL partitions. The frontend provides a fully modular layout system for users to build their own monitoring dashboards.",
    features: ["Sub-second data stream ingestion", "Custom interactive SVG charting engine", "Draggable/Resizable layout grid", "Automated anomaly alerting"]
  },
  {
    slug: "decentralized-chat",
    category: "REAL-TIME // CLUSTERS",
    title: "DECENTRALIZED_CHAT",
    description: "Secure collaborative workspace suite with end-to-end encrypted message channels, custom WebSocket clusters, and responsive glassmorphic interfaces.",
    tags: ["Go", "WebSockets", "React"],
    hasSvg: true,
    svgType: "chat",
    longDescription: "A military-grade communication suite that ensures absolute privacy. The backend is written in high-concurrency Go, managing distributed WebSocket clusters that route AES-256 encrypted messages peer-to-peer. The UI is a polished, native-feeling React web app.",
    features: ["AES-256 E2E Encryption", "Distributed Go WebSocket Brokers", "Zero-Knowledge Architecture", "Sub-20ms message delivery"]
  },
  {
    slug: "cinematic-reel-2026",
    category: "VIDEO PRODUCTION // CREATIVE",
    title: "CINEMATIC_REEL_2026",
    description: "High-end video production showcase featuring advanced motion graphics, professional color grading, and dynamic storytelling cuts.",
    tags: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    hasSvg: true,
    svgType: "video",
    longDescription: "A comprehensive showcase demonstrating advanced video production capabilities. Features include 3D camera tracking in After Effects, professional color-space grading in DaVinci Resolve, and high-impact pacing editing in Premiere Pro to create immersive visual experiences.",
    features: ["Advanced 3D Motion Graphics", "Log/RAW Color Grading", "Audio-Synced Dynamic Cuts", "VFX Compositing"]
  },
];
