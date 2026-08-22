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
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-slate-900 hover:text-[#D4AF37] transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all shadow-sm">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-slate-900 group-hover:text-[#D4AF37] transition-colors">
              Kshitiz Khandelwal
            </span>
            <span className="font-mono text-[10px] text-slate-500 tracking-wider uppercase">
              Systems &amp; AI Engineer
            </span>
          </div>
        </a>

        {/* Live Availability Signal */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
          </span>
          <span className="font-mono text-[11px] text-slate-600">
            Available for Engineering &amp; Research Roles
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <a
            href="#featured-projects"
            className="hidden sm:inline-block text-xs font-medium text-slate-600 hover:text-[#D4AF37] px-2.5 py-1.5 rounded-md hover:bg-slate-100 transition-colors"
          >
            Featured Projects
          </a>
          <a
            href="#how-i-build"
            className="hidden md:inline-block text-xs font-medium text-slate-600 hover:text-[#D4AF37] px-2.5 py-1.5 rounded-md hover:bg-slate-100 transition-colors"
          >
            How I Build
          </a>
          <a
            href="#iot-lab"
            className="hidden md:inline-block text-xs font-medium text-slate-600 hover:text-[#D4AF37] px-2.5 py-1.5 rounded-md hover:bg-slate-100 transition-colors"
          >
            IoT Lab
          </a>
          <a
            href="#skills"
            className="hidden sm:inline-block text-xs font-medium text-slate-600 hover:text-[#D4AF37] px-2.5 py-1.5 rounded-md hover:bg-slate-100 transition-colors"
          >
            Skills
          </a>
          <a
            href="#credentials"
            className="hidden sm:inline-block text-xs font-medium text-slate-600 hover:text-[#D4AF37] px-2.5 py-1.5 rounded-md hover:bg-slate-100 transition-colors"
          >
            Credentials
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="text-xs font-semibold bg-[#D4AF37] text-slate-900 hover:bg-[#FFD700] px-3.5 py-1.5 rounded-lg shadow-xs transition-all active:scale-[0.98]"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}
