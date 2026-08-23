"use client";

import React, { useState, useEffect } from "react";
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
      <div className="max-w-5xl mx-auto px-6 flex justify-between pointer-events-none relative z-10">
        <div className="w-2.5 h-3 bg-[#4A4A52] border-x border-[#2A2A30] ml-6 shadow-md" />
        <div className="w-2.5 h-3 bg-[#4A4A52] border-x border-[#2A2A30] mr-6 shadow-md" />
      </div>

      {/* Main Ripped Paper Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pointer-events-auto relative">
        <div
          className={`relative transition-all duration-300 ${
            scrolled ? "translate-y-[-2px]" : "translate-y-0"
          }`}
        >
          {/* Paper Body with Torn / Ripped SVG Mask Shape */}
          <div className="relative bg-[#F7EBD9] text-[#261B11] shadow-[0_12px_30px_-5px_rgba(0,0,0,0.8),0_4px_10px_rgba(0,0,0,0.4)] border-t border-[#E5D2B8] px-5 sm:px-8 pt-3.5 pb-6">
            {/* Hanging Grommet Rings */}
            <div className="absolute top-2 left-6 w-3 h-3 rounded-full bg-[#1A1A20] border-2 border-[#5A5A65] shadow-inner" />
            <div className="absolute top-2 right-6 w-3 h-3 rounded-full bg-[#1A1A20] border-2 border-[#5A5A65] shadow-inner" />

            <div className="flex items-center justify-between">
              {/* Left Brand: Red Stamp Emblem Logo */}
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-md border-2 border-[#DC2626] bg-[#F7EBD9] flex items-center justify-center p-1 shadow-xs group-hover:scale-105 transition-transform">
                  <svg className="w-full h-full text-[#DC2626] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5l6.5 6.5-6.5 6.5-6.5-6.5L12 5.5zM12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-hand font-bold text-xl sm:text-2xl text-[#261B11] group-hover:text-[#DC2626] transition-colors leading-tight">
                    Kshitiz Khandelwal
                  </span>
                  <span className="text-[10px] font-sans font-semibold tracking-wider text-[#735843] uppercase hidden sm:block">
                    Systems &amp; AI • 9.43 CGPA
                  </span>
                </div>
              </a>

              {/* Navigation Links in Handwritten Font */}
              <nav className="hidden md:flex items-center gap-6 font-hand text-xl text-[#261B11]">
                <a
                  href="#about"
                  className="hover:text-[#DC2626] hover:-rotate-1 transition-all"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="hover:text-[#DC2626] hover:rotate-1 transition-all"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="hover:text-[#DC2626] hover:-rotate-1 transition-all"
                >
                  Projects
                </a>
                <a
                  href="#how-i-build"
                  className="hover:text-[#DC2626] hover:rotate-1 transition-all"
                >
                  How I Approach Things
                </a>
                <a
                  href="/resume.pdf"
                  download="Kshitiz_Khandelwal_Resume.pdf"
                  onClick={handleResumeClick}
                  className="hover:text-[#DC2626] hover:-rotate-1 transition-all"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  className="px-3.5 py-1 rounded-md bg-[#DC2626] text-[#F7EBD9] font-hand font-bold text-lg hover:bg-[#B91C1C] hover:scale-105 transition-all shadow-xs"
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden font-hand text-lg font-bold text-[#261B11] px-2 py-1 border border-[#D5C2A8] rounded"
              >
                {mobileMenuOpen ? "Close ✕" : "Menu ☰"}
              </button>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
              <div className="md:hidden pt-4 pb-2 border-t border-[#D5C2A8] mt-3 flex flex-col gap-2 font-hand text-xl text-[#261B11]">
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#DC2626]"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#DC2626]"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#DC2626]"
                >
                  Projects
                </a>
                <a
                  href="#how-i-build"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#DC2626]"
                >
                  How I Approach Things
                </a>
                <a
                  href="/resume.pdf"
                  download="Kshitiz_Khandelwal_Resume.pdf"
                  onClick={() => {
                    handleResumeClick();
                    setMobileMenuOpen(false);
                  }}
                  className="hover:text-[#DC2626]"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#DC2626]"
                >
                  Contact
                </a>
              </div>
            )}

            {/* Organic Torn / Deckled Bottom Edge SVG Silhouette */}
            <div className="absolute -bottom-3 left-0 right-0 h-3.5 overflow-hidden pointer-events-none">
              <svg
                viewBox="0 0 1200 24"
                preserveAspectRatio="none"
                className="w-full h-full text-[#F7EBD9] fill-current"
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
