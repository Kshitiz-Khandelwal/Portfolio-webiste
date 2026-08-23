"use client";

import React, { useState, useEffect } from "react";
import { FileDown, Menu, X, Sparkles, Terminal } from "lucide-react";
import { toast } from "sonner";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = () => {
    toast.success("Resume download initiated", {
      description: "Fetching Kshitiz_Khandelwal_Resume.pdf",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Hanging Top Straps */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between pointer-events-none relative z-10">
        <div className="w-3 h-3 bg-[#D4AF37]/70 border-x border-[#D4AF37] ml-6 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
        <div className="w-3 h-3 bg-[#D4AF37]/70 border-x border-[#D4AF37] mr-6 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
      </div>

      {/* Main Ripped Hanging Paper Banner in Dark Obsidian & Gold Theme — Full Width Fit */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pointer-events-auto relative">
        <div
          className={`relative transition-all duration-300 ${
            scrolled ? "translate-y-[-2px]" : "translate-y-0"
          }`}
        >
          {/* Dark Obsidian Paper Body */}
          <div className="relative bg-[#14141C] text-[#F4F4F7] shadow-[0_12px_35px_-5px_rgba(0,0,0,0.9),0_0_15px_rgba(212,175,55,0.15)] border-t border-[#D4AF37]/50 px-5 sm:px-8 pt-3 pb-6 rounded-t-2xl">
            {/* Hanging Metallic Grommets */}
            <div className="absolute top-2 left-6 w-3 h-3 rounded-full bg-[#0A0A0C] border-2 border-[#D4AF37] shadow-inner" />
            <div className="absolute top-2 right-6 w-3 h-3 rounded-full bg-[#0A0A0C] border-2 border-[#D4AF37] shadow-inner" />

            <div className="flex items-center justify-between">
              {/* Left Brand: Clean Title & Red/Gold Emblem */}
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg border border-[#D4AF37] bg-[#0A0A0C] flex items-center justify-center p-1 shadow-[0_0_10px_rgba(212,175,55,0.25)] group-hover:scale-105 transition-transform">
                  <svg className="w-full h-full text-[#D4AF37] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5l6.5 6.5-6.5 6.5-6.5-6.5L12 5.5zM12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-hand font-bold text-xl sm:text-2xl text-white group-hover:text-[#FFD700] transition-colors leading-tight">
                    Kshitiz Khandelwal
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8] tracking-wider uppercase hidden sm:block">
                    Systems &amp; AI Engineer • BMSIT&amp;M
                  </span>
                </div>
              </a>

              {/* Center & Right Navigation Links */}
              <nav className="hidden lg:flex items-center gap-6 font-hand text-lg text-[#CBD5E1]">
                <a href="#about" className="hover:text-[#FFD700] transition-colors">
                  About
                </a>
                <a href="#skills" className="hover:text-[#FFD700] transition-colors">
                  Skills
                </a>
                <a href="#projects" className="hover:text-[#FFD700] transition-colors">
                  Projects
                </a>
                <a href="#how-i-build" className="hover:text-[#FFD700] transition-colors">
                  How I Approach Things
                </a>
                <a href="#other-projects" className="hover:text-[#FFD700] transition-colors text-[#FFD700] font-bold">
                  🎥 IoT Videos
                </a>
                <a
                  href="/resume.pdf"
                  download="Kshitiz_Khandelwal_Resume.pdf"
                  onClick={handleResumeClick}
                  className="hover:text-[#FFD700] transition-colors"
                >
                  Resume
                </a>
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {/* Yellow Sticky Note Style Contact Button */}
                <a
                  href="#contact"
                  className="px-5 py-1.5 rounded-lg bg-[#FFD700] text-black font-hand font-bold text-lg shadow-[2px_3px_0px_#000000] hover:shadow-[3px_4px_0px_#000000] hover:scale-105 active:scale-95 transition-all rotate-[-1deg] border border-black"
                >
                  Contact
                </a>

                {/* Mobile Hamburger Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1.5 rounded-lg bg-[#1E1E28] border border-[#2A2A38] text-slate-300 lg:hidden hover:text-white transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Ripped Bottom Zig-Zag Edge */}
          <div
            className="w-full h-4 bg-[#14141C] border-b border-[#D4AF37]/40 relative"
            style={{
              clipPath:
                "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)",
            }}
          />

          {/* Mobile Menu Dropdown Panel */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#14141C] border-2 border-[#D4AF37] rounded-2xl shadow-2xl p-5 font-hand text-xl space-y-3 z-50 animate-in fade-in slide-in-from-top-2">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-200 hover:text-[#FFD700] py-1 border-b border-[#22222A]"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-200 hover:text-[#FFD700] py-1 border-b border-[#22222A]"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-200 hover:text-[#FFD700] py-1 border-b border-[#22222A]"
              >
                Projects
              </a>
              <a
                href="#how-i-build"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-200 hover:text-[#FFD700] py-1 border-b border-[#22222A]"
              >
                How I Approach Things
              </a>
              <a
                href="#other-projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#FFD700] font-bold py-1 border-b border-[#22222A]"
              >
                🎥 IoT Videos
              </a>
              <a
                href="/resume.pdf"
                download="Kshitiz_Khandelwal_Resume.pdf"
                onClick={() => {
                  handleResumeClick();
                  setMobileMenuOpen(false);
                }}
                className="block text-slate-200 hover:text-[#FFD700] py-1"
              >
                Resume
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
