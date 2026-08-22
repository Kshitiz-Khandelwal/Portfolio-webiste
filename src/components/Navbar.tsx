"use client";

import React, { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0C]/90 backdrop-blur-md border-b border-[#22222A] shadow-lg py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-white hover:text-[#D4AF37] transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-[#121216] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-xs">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
              Kshitiz Khandelwal
            </span>
            <span className="font-mono text-[10px] text-[#8A8A94] tracking-wider uppercase">
              CS Student • BMSIT&amp;M
            </span>
          </div>
        </a>

        {/* Live Availability Signal */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#121216] border border-[#22222A] text-xs shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
          </span>
          <span className="font-mono text-[11px] text-[#C7C7CF]">
            Open to Engineering &amp; Research Opportunities
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1.5 sm:gap-3">
          <a
            href="#featured-projects"
            className="hidden sm:inline-block text-xs font-medium text-[#A1A1AA] hover:text-[#FFD700] px-2.5 py-1.5 rounded-md hover:bg-[#18181F] transition-colors"
          >
            Projects
          </a>
          <a
            href="#what-i-work-on"
            className="hidden md:inline-block text-xs font-medium text-[#A1A1AA] hover:text-[#FFD700] px-2.5 py-1.5 rounded-md hover:bg-[#18181F] transition-colors"
          >
            Focus Areas
          </a>
          <a
            href="#how-i-build"
            className="hidden md:inline-block text-xs font-medium text-[#A1A1AA] hover:text-[#FFD700] px-2.5 py-1.5 rounded-md hover:bg-[#18181F] transition-colors"
          >
            How I Build
          </a>
          <a
            href="#skills"
            className="hidden sm:inline-block text-xs font-medium text-[#A1A1AA] hover:text-[#FFD700] px-2.5 py-1.5 rounded-md hover:bg-[#18181F] transition-colors"
          >
            Skills
          </a>
          <a
            href="#about"
            className="hidden sm:inline-block text-xs font-medium text-[#A1A1AA] hover:text-[#FFD700] px-2.5 py-1.5 rounded-md hover:bg-[#18181F] transition-colors"
          >
            About
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="text-xs font-bold bg-[#D4AF37] text-black hover:bg-[#FFD700] px-3.5 py-1.5 rounded-lg shadow-sm transition-all active:scale-[0.98]"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}
