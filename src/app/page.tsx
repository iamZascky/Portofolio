"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Deployments from "@/components/Deployments";
import Integrity from "@/components/Integrity";
import ProjectPreview from "@/components/ProjectPreview";
import History from "@/components/History";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  // Force page to start at the top on every reload
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative selection:bg-[#00f0ff]/20 selection:text-[#00f0ff]">
      <FloatingNav />

      <Navbar />
      <main className="flex-1 relative">
        <Hero />
        <Deployments />
        <Integrity />
        <ProjectPreview />
        <History />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
