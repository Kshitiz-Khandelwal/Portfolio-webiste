"use client";

import React, { useState, useEffect } from "react";
import { Terminal, FileDown, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { toast } from "sonner";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f10]/85 backdrop-blur-md border-b border-zinc-800/80 shadow-[0_4px_24px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-zinc-100 hover:text-amber-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-amber-400 group-hover:border-amber-500/50 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.2)] transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-zinc-100 group-hover:text-amber-400 transition-colors">
              Kshitiz Khandelwal
            </span>
            <span className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">
              Systems & AI • BMSIT&M
            </span>
          </div>
        </a>

        {/* Live Status Pill */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px] text-zinc-400">
            Open to Summer 2025/2026 Roles & Research
          </span>
        </div>

        {/* Navigation Actions */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <a
            href="#projects"
            className="hidden sm:inline-block text-xs font-medium text-zinc-400 hover:text-zinc-100 px-2.5 py-1.5 rounded-md hover:bg-zinc-800/60 transition-colors"
          >
            Projects
          </a>
          <a
            href="#sandboxes"
            className="hidden sm:inline-block text-xs font-medium text-zinc-400 hover:text-zinc-100 px-2.5 py-1.5 rounded-md hover:bg-zinc-800/60 transition-colors"
          >
            Interactive Lab
          </a>
          <a
            href="#skills"
            className="hidden sm:inline-block text-xs font-medium text-zinc-400 hover:text-zinc-100 px-2.5 py-1.5 rounded-md hover:bg-zinc-800/60 transition-colors"
          >
            Architecture
          </a>
          <a
            href="#timeline"
            className="hidden sm:inline-block text-xs font-medium text-zinc-400 hover:text-zinc-100 px-2.5 py-1.5 rounded-md hover:bg-zinc-800/60 transition-colors"
          >
            Milestones
          </a>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="text-xs font-medium bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/30 px-3.5 py-1.5 rounded-lg transition-all active:scale-[0.98]"
          >
            Connect
          </a>
        </nav>
      </div>
    </header>
  );
}
