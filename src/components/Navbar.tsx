"use client";

import React, { useState, useEffect } from "react";
import { FileDown, Menu, X } from "lucide-react";
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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pointer-events-auto relative pt-3">
        <div
          className={`relative transition-all duration-300 ${
            scrolled ? "translate-y-[-2px]" : "translate-y-0"
          }`}
        >
          {/* Deep Violet Card Navbar */}
          <div className="relative bg-[#271A38] text-[#E5DAF7] shadow-violet border border-[#3D2B55] px-5 sm:px-8 py-3.5 rounded-2xl">
            <div className="flex items-center justify-between">
              {/* Left Brand: Title & Violet Emblem */}
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-xl border border-[#3D2B55] bg-[#1F142D] flex items-center justify-center p-1.5 shadow-xs group-hover:border-[#A78BFA] transition-colors">
                  <svg className="w-full h-full text-[#A78BFA] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5l6.5 6.5-6.5 6.5-6.5-6.5L12 5.5zM12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-lg sm:text-xl text-[#E5DAF7] group-hover:text-[#A78BFA] transition-colors leading-tight">
                    Kshitiz Khandelwal
                  </span>
                  <span className="text-[10px] font-mono text-[#A99BC2] tracking-wider uppercase hidden sm:block">
                    Systems &amp; AI Engineer • BMSIT&amp;M
                  </span>
                </div>
              </a>

              {/* Center Navigation Links */}
              <nav className="hidden lg:flex items-center gap-6 font-sans text-sm font-medium text-[#C4B5FD]/80">
                <a href="#about" className="hover:text-[#A78BFA] transition-colors">
                  About
                </a>
                <a href="#skills" className="hover:text-[#A78BFA] transition-colors">
                  Skills
                </a>
                <a href="#projects" className="hover:text-[#A78BFA] transition-colors">
                  Projects
                </a>
                <a href="#how-i-build" className="hover:text-[#A78BFA] transition-colors">
                  How I Approach Things
                </a>
                <a href="#other-projects" className="hover:text-[#A78BFA] transition-colors text-[#A78BFA] font-semibold">
                  IoT Videos
                </a>
                <a
                  href="/resume.pdf"
                  download="Kshitiz_Khandelwal_Resume.pdf"
                  onClick={handleResumeClick}
                  className="hover:text-[#A78BFA] transition-colors"
                >
                  Resume
                </a>
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {/* Primary CTA: Solid Bright Violet Fill with Deep Background Text */}
                <a
                  href="#contact"
                  className="px-5 py-2 rounded-xl bg-[#A78BFA] text-[#1A1025] font-sans font-bold text-sm shadow-violet hover:bg-[#C4B5FD] hover:shadow-violet-lg transition-all active:scale-95"
                >
                  Contact
                </a>

                {/* Mobile Hamburger Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-xl bg-[#1F142D] border border-[#3D2B55] text-[#E5DAF7] lg:hidden hover:text-[#A78BFA] transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown Panel */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#271A38] border border-[#3D2B55] rounded-2xl shadow-violet-lg p-5 font-sans text-base space-y-3 z-50 animate-in fade-in slide-in-from-top-2">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#E5DAF7] hover:text-[#A78BFA] py-1 border-b border-[#3D2B55]"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#E5DAF7] hover:text-[#A78BFA] py-1 border-b border-[#3D2B55]"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#E5DAF7] hover:text-[#A78BFA] py-1 border-b border-[#3D2B55]"
              >
                Projects
              </a>
              <a
                href="#how-i-build"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#E5DAF7] hover:text-[#A78BFA] py-1 border-b border-[#3D2B55]"
              >
                How I Approach Things
              </a>
              <a
                href="#other-projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#A78BFA] font-medium py-1 border-b border-[#3D2B55]"
              >
                IoT Videos
              </a>
              <a
                href="/resume.pdf"
                download="Kshitiz_Khandelwal_Resume.pdf"
                onClick={() => {
                  handleResumeClick();
                  setMobileMenuOpen(false);
                }}
                className="block text-[#E5DAF7] hover:text-[#A78BFA] py-1"
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
