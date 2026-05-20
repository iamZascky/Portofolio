import React from "react";

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

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  align: "left" | "right";
}

export interface MetricItem {
  label: string;
  percentage: number;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
}

export interface TechnologyItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}
