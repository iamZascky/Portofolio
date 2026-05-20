import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/layout/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEURAL_DEV // Portfolio & AI Infrastructure Architect",
  description: "L7 Systems Engineer portfolio specializing in distributed AI infrastructure, high-concurrency neural processing, and low-latency extreme-scale pipelines.",
  keywords: ["AI Architect", "Systems Engineer", "Portfolio", "Next.js", "Distributed Systems"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="bg-[#050709] relative min-h-screen">
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
