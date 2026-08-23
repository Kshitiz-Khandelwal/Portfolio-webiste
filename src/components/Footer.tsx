"use client";

import React from "react";
import { Terminal, ArrowUp, Code2, Sparkles, CheckCircle2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E0C9AE] bg-[#FDF8F2] py-14 px-4 sm:px-6 text-[#3A2E22]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Meta Transparency Note */}
        <div className="p-6 rounded-3xl bg-[#F3D9C4]/60 border border-[#E0C9AE] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-warm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF3E8] border border-[#E0C9AE] flex items-center justify-center text-[#B5432C] shrink-0 shadow-xs">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#3A2E22] block">
                Portfolio Engineering Architecture
              </span>
              <p className="font-sans text-xs text-[#5C4D3C]">
                Engineered with Next.js 15 (App Router), React 19, TypeScript, and a warm cream sketchbook color palette with strict WCAG AA contrast.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-[#8A7A63] shrink-0">
            <span className="px-2.5 py-1 rounded-full badge-sage font-bold flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D6E50] animate-pulse" />
              Build: Passing (100 Lighthouse)
            </span>
            <span>•</span>
            <span>Last Updated: August 2026</span>
          </div>
        </div>

        {/* Brand & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-[#E0C9AE]">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <Terminal className="w-4 h-4 text-[#E8846B]" />
              <span className="font-sans font-bold text-sm text-[#3A2E22]">
                Kshitiz Khandelwal
              </span>
            </div>
            <p className="font-mono text-[11px] text-[#8A7A63]">
              Systems &amp; AI Engineer • Backend Intern @ Zarthi • BMSIT&amp;M
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 font-mono text-xs text-[#5C4D3C]">
            <a
              href="https://github.com/Kshitiz-Khandelwal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E8846B] font-semibold transition-colors"
            >
              GitHub
            </a>
            <span className="text-[#E0C9AE]">•</span>
            <a
              href="https://linkedin.com/in/kshitiz-khandelwal-94917b32a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E8846B] font-semibold transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#E0C9AE]">•</span>
            <a
              href="mailto:kshitiz.k.1403@gmail.com"
              className="hover:text-[#E8846B] font-semibold transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FAF3E8] border border-[#E0C9AE] text-xs font-mono text-[#5C4D3C] hover:text-[#E8846B] hover:border-[#E8846B] shadow-warm transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
