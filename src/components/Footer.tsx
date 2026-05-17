import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-12 border-t border-white/5 font-mono text-[10px] text-[#6b7280] tracking-widest mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Left */}
        <div className="font-bold text-white tracking-wider">
          NEURAL_DEV
        </div>

        {/* Middle */}
        <div>
          // SYS_NODE: SEC_2026. ALL SYSTEMS OPERATIONAL.
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors">
            GITHUB
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors">
            LINKEDIN
          </a>
          <a href="#deployments" className="hover:text-[#00f0ff] transition-colors">
            DOCS
          </a>
          <a href="#hero" className="hover:text-[#a855f7] transition-colors">
            SECRET
          </a>
        </div>
      </div>
    </footer>
  );
}
