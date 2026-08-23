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
      {/* Main Hanging Paper Banner in Warm Cream Sketchbook Palette */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pointer-events-auto relative pt-3">
        <div
          className={`relative transition-all duration-300 ${
            scrolled ? "translate-y-[-2px]" : "translate-y-0"
          }`}
        >
          {/* Warm Paper Body */}
          <div className="relative bg-[#FDF8F2] text-[#3A2E22] shadow-warm border border-[#E0C9AE] px-5 sm:px-8 py-3.5 rounded-2xl">
            <div className="flex items-center justify-between">
              {/* Left Brand: Clean Title & Coral Emblem */}
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-xl border border-[#E0C9AE] bg-[#F3D9C4] flex items-center justify-center p-1.5 shadow-xs group-hover:scale-105 transition-transform">
                  <svg className="w-full h-full text-[#E8846B] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5l6.5 6.5-6.5 6.5-6.5-6.5L12 5.5zM12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-hand font-bold text-xl sm:text-2xl text-[#3A2E22] group-hover:text-[#E8846B] transition-colors leading-tight">
                    Kshitiz Khandelwal
                  </span>
                  <span className="text-[10px] font-mono text-[#8A7A63] tracking-wider uppercase hidden sm:block">
                    Systems &amp; AI Engineer • BMSIT&amp;M
                  </span>
                </div>
              </a>

              {/* Center & Right Navigation Links */}
              <nav className="hidden lg:flex items-center gap-6 font-hand text-lg text-[#5C4D3C]">
                <a href="#about" className="hover:text-[#E8846B] transition-colors">
                  About
                </a>
                <a href="#skills" className="hover:text-[#E8846B] transition-colors">
                  Skills
                </a>
                <a href="#projects" className="hover:text-[#E8846B] transition-colors">
                  Projects
                </a>
                <a href="#how-i-build" className="hover:text-[#E8846B] transition-colors">
                  How I Approach Things
                </a>
                <a href="#other-projects" className="hover:text-[#E8846B] transition-colors text-[#E8846B] font-bold">
                  🎥 IoT Videos
                </a>
                <a
                  href="/resume.pdf"
                  download="Kshitiz_Khandelwal_Resume.pdf"
                  onClick={handleResumeClick}
                  className="hover:text-[#E8846B] transition-colors"
                >
                  Resume
                </a>
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {/* Coral Fill Contact Button */}
                <a
                  href="#contact"
                  className="px-5 py-2 rounded-xl bg-[#E8846B] text-[#FAF3E8] font-sans font-bold text-sm shadow-warm hover:bg-[#D9735A] hover:scale-105 active:scale-95 transition-all"
                >
                  Contact
                </a>

                {/* Mobile Hamburger Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-xl bg-[#F3D9C4] border border-[#E0C9AE] text-[#3A2E22] lg:hidden hover:text-[#E8846B] transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown Panel */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#FDF8F2] border border-[#E0C9AE] rounded-2xl shadow-warmLg p-5 font-hand text-xl space-y-3 z-50 animate-in fade-in slide-in-from-top-2">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#3A2E22] hover:text-[#E8846B] py-1 border-b border-[#E0C9AE]"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#3A2E22] hover:text-[#E8846B] py-1 border-b border-[#E0C9AE]"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#3A2E22] hover:text-[#E8846B] py-1 border-b border-[#E0C9AE]"
              >
                Projects
              </a>
              <a
                href="#how-i-build"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#3A2E22] hover:text-[#E8846B] py-1 border-b border-[#E0C9AE]"
              >
                How I Approach Things
              </a>
              <a
                href="#other-projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#E8846B] font-bold py-1 border-b border-[#E0C9AE]"
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
                className="block text-[#3A2E22] hover:text-[#E8846B] py-1"
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
