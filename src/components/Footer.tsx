"use client";

import React from "react";
import { Terminal, ArrowUp, Code2, Sparkles, CheckCircle2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E5E7EB] bg-[#F7F7F5] py-14 px-4 sm:px-6 text-[#111827]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Meta Transparency Note */}
        <div className="p-6 rounded-3xl bg-white border border-[#E5E7EB] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-clean">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shrink-0 shadow-xs">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#111827] block">
                Portfolio Engineering Architecture
              </span>
              <p className="font-sans text-xs text-[#6B7280]">
                Engineered with Next.js 15 (App Router), React 19, TypeScript, and a light minimal palette with strict WCAG AA contrast.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-[#6B7280] shrink-0">
            <span className="px-2.5 py-1 rounded-full badge-blue font-semibold flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              Build: Passing (100 Lighthouse)
            </span>
            <span>•</span>
            <span>Last Updated: August 2026</span>
          </div>
        </div>

        {/* Brand & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-[#E5E7EB]">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <Terminal className="w-4 h-4 text-[#2563EB]" />
              <span className="font-sans font-bold text-sm text-[#111827]">
                Kshitiz Khandelwal
              </span>
            </div>
            <p className="font-mono text-[11px] text-[#6B7280]">
              Systems &amp; AI Engineer • Backend Intern @ Zarthi • BMSIT&amp;M
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 font-sans text-xs text-[#4B5563]">
            <a
              href="https://github.com/Kshitiz-Khandelwal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563EB] font-medium transition-colors"
            >
              GitHub
            </a>
            <span className="text-[#E5E7EB]">•</span>
            <a
              href="https://linkedin.com/in/kshitiz-khandelwal-94917b32a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563EB] font-medium transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#E5E7EB]">•</span>
            <a
              href="mailto:kshitiz.k.1403@gmail.com"
              className="hover:text-[#2563EB] font-medium transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#E5E7EB] text-xs font-sans text-[#4B5563] hover:text-[#2563EB] hover:border-[#2563EB] shadow-clean transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
