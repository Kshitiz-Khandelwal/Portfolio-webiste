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
      tapeColor: "washi-tape-coral",
    },
    {
      name: "Atlas-Identity-OS",
      desc: "Local-first AI desktop OS assistant built in Rust + Tauri v2 with AES-256 SQLCipher memory vault.",
      tech: "Rust • Tauri v2 • ONNX • React",
      url: "https://github.com/Kshitiz-Khandelwal/Atlas-ai-personal-timeline-",
      tapeColor: "washi-tape-sage",
    },
    {
      name: "Zephyr-Edge-AI-Kit",
      desc: "Real-time embedded RTOS programs for IoT on the Raspberry Pi Pico 2 (RP2350).",
      tech: "C / C++ • Zephyr RTOS • West",
      url: "https://github.com/Kshitiz-Khandelwal/Zephyr-Edge-AI-Kit",
      tapeColor: "washi-tape-mustard",
    },
    {
      name: "ECG-Wavelet-Arrhythmia",
      desc: "Continuous Wavelet Transform + EfficientNet-B4 multi-label cardiac diagnostic pipeline.",
      tech: "PyTorch • CWT • LightGBM",
      url: "https://github.com/Kshitiz-Khandelwal/ECG-Arrhythmia-Classification",
      tapeColor: "washi-tape-lavender",
    },
  ];

  return (
    <section id="github" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-bree text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4BAA3] mb-2">
          Open Source
        </span>
        <h2 className="font-bree text-5xl sm:text-6xl md:text-7xl text-[#F5E1CD]">
          I Learn by Building
        </h2>
        <p className="font-gochi text-base sm:text-lg text-[#D4BAA3] mt-2 max-w-md">
          Most of my architectures, experiments, and production builds are openly documented on GitHub.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {pinnedRepos.map((repo, idx) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-6 rounded-[24px] bg-[#F5E1CD] border-[3.5px] border-[#3E3124] shadow-sketch hover:shadow-sketchLg transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            style={{
              transform: `rotate(${idx % 2 === 0 ? -0.8 : 0.8}deg)`,
            }}
          >
            <div className={`${repo.tapeColor} -top-3.5 left-6 rotate-[-5deg] !w-16 !h-4`} />

            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[#3E3124] group-hover:text-[#E25543] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span className="font-bree text-lg font-bold">{repo.name}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#6D6358] group-hover:text-[#E25543]" />
              </div>

              <p className="font-gochi text-base text-[#3E3124] leading-relaxed mb-4">
                {repo.desc}
              </p>
            </div>

            <div className="pt-3 border-t-2 border-dashed border-[#3E3124]/30 flex items-center justify-between font-mono text-xs">
              <span className="text-[#E25543] font-bold">{repo.tech}</span>
              <span className="font-gochi text-sm text-[#3E3124] group-hover:underline">Open Repo ➔</span>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://github.com/Kshitiz-Khandelwal"
          target="_blank"
          rel="noopener noreferrer"
          className="sketch-button"
        >
          <span>Explore All Repositories on GitHub ➔</span>
        </a>
      </div>
    </section>
  );
}
