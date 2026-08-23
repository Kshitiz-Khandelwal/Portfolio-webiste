"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { Sparkles, Video } from "lucide-react";

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
      <div className="max-w-5xl mx-auto px-6 flex justify-between pointer-events-none relative z-10">
        <div className="w-2.5 h-3 bg-[#D4AF37]/60 border-x border-[#D4AF37]/80 ml-6 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
        <div className="w-2.5 h-3 bg-[#D4AF37]/60 border-x border-[#D4AF37]/80 mr-6 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
      </div>

      {/* Main Ripped Hanging Paper Banner in Dark Obsidian & Gold Theme */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pointer-events-auto relative">
        <div
          className={`relative transition-all duration-300 ${
            scrolled ? "translate-y-[-2px]" : "translate-y-0"
          }`}
        >
          {/* Dark Obsidian Paper Body */}
          <div className="relative bg-[#14141C] text-[#F4F4F7] shadow-[0_12px_35px_-5px_rgba(0,0,0,0.9),0_0_15px_rgba(212,175,55,0.15)] border-t border-[#D4AF37]/40 px-5 sm:px-8 pt-3 pb-6 rounded-t-xl">
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

              {/* Navigation Links in Handwritten Font */}
              <nav className="hidden md:flex items-center gap-6 font-hand text-xl text-[#C7C7CF]">
                <a
                  href="#about"
                  className="hover:text-[#FFD700] hover:-rotate-1 transition-all"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="hover:text-[#FFD700] hover:rotate-1 transition-all"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="hover:text-[#FFD700] hover:-rotate-1 transition-all"
                >
                  Projects
                </a>
                <a
                  href="#how-i-build"
                  className="hover:text-[#FFD700] hover:rotate-1 transition-all"
                >
                  How I Approach Things
                </a>
                <a
                  href="#iot-videos"
                  className="hover:text-[#FFD700] flex items-center gap-1 text-[#D4AF37] hover:-rotate-1 transition-all font-bold"
                >
                  <Video className="w-4 h-4 text-[#D4AF37]" />
                  <span>IoT Videos</span>
                </a>
                <a
                  href="/resume.pdf"
                  download="Kshitiz_Khandelwal_Resume.pdf"
                  onClick={handleResumeClick}
                  className="hover:text-[#FFD700] hover:-rotate-1 transition-all"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  className="px-3.5 py-1 rounded-md bg-[#D4AF37] text-black font-hand font-bold text-lg hover:bg-[#FFD700] hover:scale-105 transition-all shadow-sm"
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden font-hand text-lg font-bold text-[#D4AF37] px-2.5 py-1 border border-[#D4AF37]/50 rounded bg-[#0A0A0C]"
              >
                {mobileMenuOpen ? "Close ✕" : "Menu ☰"}
              </button>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
              <div className="md:hidden pt-4 pb-2 border-t border-[#2A2A35] mt-3 flex flex-col gap-2.5 font-hand text-xl text-[#C7C7CF]">
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#FFD700]"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#FFD700]"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#FFD700]"
                >
                  Projects
                </a>
                <a
                  href="#how-i-build"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#FFD700]"
                >
                  How I Approach Things
                </a>
                <a
                  href="#iot-videos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#FFD700] text-[#D4AF37] flex items-center gap-1.5"
                >
                  <Video className="w-4 h-4" />
                  <span>IoT Demo Videos</span>
                </a>
                <a
                  href="/resume.pdf"
                  download="Kshitiz_Khandelwal_Resume.pdf"
                  onClick={() => {
                    handleResumeClick();
                    setMobileMenuOpen(false);
                  }}
                  className="hover:text-[#FFD700]"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#FFD700]"
                >
                  Contact
                </a>
              </div>
            )}

            {/* Organic Deckled/Torn Bottom Edge matching Dark Obsidian */}
            <div className="absolute -bottom-3 left-0 right-0 h-3.5 overflow-hidden pointer-events-none">
              <svg
                viewBox="0 0 1200 24"
                preserveAspectRatio="none"
                className="w-full h-full text-[#14141C] fill-current drop-shadow-[0_2px_4px_rgba(212,175,55,0.2)]"
              >
                <path d="M0,0 L1200,0 L1200,8 L1160,20 L1120,4 L1080,22 L1040,6 L1000,18 L960,3 L920,24 L880,8 L840,19 L800,5 L760,22 L720,7 L680,18 L640,4 L600,24 L560,8 L520,20 L480,5 L440,22 L400,6 L360,19 L320,3 L280,24 L240,7 L200,21 L160,5 L120,23 L80,6 L40,19 L0,8 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
