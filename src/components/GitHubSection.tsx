"use client";

import React from "react";
import { ExternalLink, Terminal, GitBranch, Star, Code2 } from "lucide-react";

export function GitHubSection() {
  const pinnedRepos = [
    {
      name: "DNS-Shield-AI-Platform",
      desc: "AI-powered secure DNS threat filtering, DGA family attribution, and real-time SHAP analytics.",
      tech: "Python • FastAPI • LightGBM • Next.js",
      url: "https://github.com/Kshitiz-Khandelwal/DNS-Shield-AI-Platform",
    },
    {
      name: "Atlas-Identity-OS",
      desc: "Local-first AI desktop OS assistant built in Rust + Tauri v2 with AES-256 SQLCipher memory vault.",
      tech: "Rust • Tauri v2 • ONNX • React",
      url: "https://github.com/Kshitiz-Khandelwal/Atlas-ai-personal-timeline-",
    },
    {
      name: "Zephyr-Edge-AI-Kit",
      desc: "Real-time embedded RTOS programs for IoT on the Raspberry Pi Pico 2 (RP2350).",
      tech: "C / C++ • Zephyr RTOS • West",
      url: "https://github.com/Kshitiz-Khandelwal/Zephyr-Edge-AI-Kit",
    },
    {
      name: "ECG-Wavelet-Arrhythmia",
      desc: "Continuous Wavelet Transform + EfficientNet-B4 multi-label cardiac diagnostic pipeline.",
      tech: "PyTorch • CWT • LightGBM",
      url: "https://github.com/Kshitiz-Khandelwal/ECG-Arrhythmia-Classification",
    },
  ];

  return (
    <section id="github" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-[#F7F7F5] rounded-3xl my-8 border border-[#E5E7EB]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg badge-blue text-[11px] font-mono uppercase tracking-wider font-semibold mb-3">
            Open Source &amp; Code
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#111827] tracking-tight">
            I Learn by Building
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-md">
          Most of my architectures, experiments, and production builds are openly documented on GitHub.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {pinnedRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] shadow-clean hover:shadow-clean-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[#111827] group-hover:text-[#2563EB] transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span className="font-mono text-sm font-bold">{repo.name}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#9CA3AF] group-hover:text-[#2563EB]" />
              </div>

              <p className="font-sans text-xs text-[#4B5563] leading-relaxed mb-4">
                {repo.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between font-mono text-[11px] text-[#6B7280]">
              <span className="text-[#2563EB] font-semibold">{repo.tech}</span>
              <span className="group-hover:text-[#2563EB] transition-colors">Open Repository →</span>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://github.com/Kshitiz-Khandelwal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] text-xs font-sans text-[#111827] hover:text-[#2563EB] shadow-clean transition-all"
        >
          <span>Explore All Repositories on github.com/Kshitiz-Khandelwal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
