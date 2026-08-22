"use client";

import React from "react";
import { Terminal, ArrowUp, Code2, Sparkles, CheckCircle2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Meta Transparency Note — How this site was engineered */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#D4AF37] shrink-0 shadow-xs">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-slate-900 block">
                Portfolio Engineering Architecture
              </span>
              <p className="font-sans text-xs text-slate-600">
                Engineered with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Ney Gold &amp; Ruby Red color tokens. Zero cumulative layout shift (CLS).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-slate-500 shrink-0">
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Build: Passing (100 Lighthouse)
            </span>
            <span className="text-slate-400">•</span>
            <span>Last Updated: August 2026</span>
          </div>
        </div>

        {/* Brand & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-slate-100">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <Terminal className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-sans font-bold text-sm text-slate-900">
                Kshitiz Khandelwal
              </span>
            </div>
            <p className="font-mono text-[11px] text-slate-500">
              AI/ML • Software Engineering • Product Development
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 font-mono text-xs text-slate-600">
            <a
              href="https://github.com/Kshitiz-Khandelwal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] font-semibold transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://linkedin.com/in/kshitiz-khandelwal-94917b32a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] font-semibold transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="mailto:kshitiz.k.1403@gmail.com"
              className="hover:text-[#D4AF37] font-semibold transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600 hover:text-slate-900 hover:border-[#D4AF37] shadow-xs transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
