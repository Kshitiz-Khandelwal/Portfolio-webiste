"use client";

import React from "react";
import { Terminal, ArrowUp, Code2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-[3.5px] border-[#3E3124] bg-[#F5E1CD] py-12 px-4 sm:px-6 text-[#3E3124] relative">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Meta Transparency Note */}
        <div className="p-6 rounded-[22px] bg-[#E9D3BB] border-2 border-[#3E3124] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sketch">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5E1CD] border-2 border-[#3E3124] flex items-center justify-center text-[#E25543] shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bree text-base font-bold text-[#3E3124] block">
                Portfolio Craft &amp; Engineering
              </span>
              <p className="font-gochi text-sm text-[#6D6358]">
                Handcrafted with Next.js 15 (App Router), React 19, TypeScript, and a warm studio sketchbook aesthetic inspired by Gargi&apos;s portfolio.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 font-gochi text-xs text-[#3E3124] shrink-0">
            <span className="px-3 py-1 rounded-full bg-[#B2C4B0] border border-[#3E3124] font-bold">
              Build: 100 Lighthouse
            </span>
            <span>•</span>
            <span>August 2026</span>
          </div>
        </div>

        {/* Brand & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t-2 border-dashed border-[#3E3124]/30">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-0.5">
              <Terminal className="w-4 h-4 text-[#E25543]" />
              <span className="font-bree font-bold text-lg text-[#3E3124]">
                Kshitiz Khandelwal
              </span>
            </div>
            <p className="font-gochi text-sm text-[#6D6358]">
              Systems &amp; AI Engineer • Backend Intern @ Zarthi • BMSIT&amp;M
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 font-gochi text-base text-[#3E3124]">
            <a
              href="https://github.com/Kshitiz-Khandelwal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E25543] font-bold transition-colors"
            >
              GitHub
            </a>
            <span className="text-[#3E3124]">•</span>
            <a
              href="https://linkedin.com/in/kshitiz-khandelwal-94917b32a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E25543] font-bold transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#3E3124]">•</span>
            <a
              href="mailto:kshitiz.k.1403@gmail.com"
              className="hover:text-[#E25543] font-bold transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#E9D3BB] border-2 border-[#3E3124] font-gochi text-sm text-[#3E3124] hover:bg-[#E25543] hover:text-white shadow-xs transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
