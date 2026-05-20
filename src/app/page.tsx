"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import FloatingNav from "@/components/layout/FloatingNav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Deployments from "@/components/sections/Deployments";
import Integrity from "@/components/sections/Integrity";
import ProjectPreview from "@/components/sections/ProjectPreview";
import History from "@/components/sections/History";
import Contact from "@/components/sections/Contact";

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
