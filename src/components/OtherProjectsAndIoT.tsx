"use client";

import React from "react";
import { otherProjects } from "@/data/projects";
import { Cpu, ExternalLink, Zap, CheckCircle2, Layers } from "lucide-react";

export function OtherProjectsAndIoT() {
  const zephyrProject = otherProjects.find((p) => p.id === "zephyr-pico-lab") || otherProjects[0];
  const remaining = otherProjects.filter((p) => p.id !== "zephyr-pico-lab");

  return (
    <section id="iot-lab" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
            Hardware &amp; Additional Systems
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Embedded IoT Lab &amp; Other Builds
          </h2>
        </div>
        <p className="font-sans text-sm text-[#9A9AA4] max-w-md">
          Hardware prototyping on Raspberry Pi Pico 2 (RP2350), climate resilience systems, and full-stack event applications.
        </p>
      </div>

      {/* Featured Hardware Spotlight: Zephyr Edge AI Lab */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Project Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] font-bold">
                {zephyrProject.badge}
              </span>
              <span className="font-mono text-[10px] text-slate-500">
                ARM Cortex-M33 Dual-Core
              </span>
            </div>

            <h3 className="font-sans font-bold text-2xl text-slate-900">
              {zephyrProject.title}
            </h3>
            <p className="font-mono text-xs text-[#D4AF37] font-semibold">
              {zephyrProject.tagline}
            </p>

            <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
              {zephyrProject.summary}
            </p>

            {/* Highlights */}
            <div className="space-y-2 pt-2">
              {zephyrProject.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3">
              {zephyrProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <a
                href={zephyrProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:border-[#D4AF37] text-xs font-mono text-slate-800 hover:text-[#D4AF37] shadow-xs transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View Zephyr RTOS Repository</span>
              </a>
            </div>
          </div>

          {/* Right: Structured Hardware Photo Frame */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300 hover:border-[#D4AF37] flex flex-col items-center justify-center p-6 text-center transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#D4AF37] mb-3 group-hover:border-[#D4AF37] transition-colors shadow-xs">
                <Cpu className="w-7 h-7" />
              </div>
              <span className="font-mono text-xs text-slate-900 font-bold block mb-1">
                RP2350 Hardware Lab Setup
              </span>
              <p className="font-mono text-[10px] text-[#D4AF37] max-w-xs font-semibold">
                {zephyrProject.photoPlaceholder}
              </p>
              <span className="font-mono text-[9px] text-slate-500 mt-2 block">
                Breadboard • L298N Motor Driver • Pico 2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {remaining.map((proj) => (
          <div
            key={proj.id}
            className="bg-white border border-slate-200 hover:border-[#D4AF37] rounded-3xl p-6 flex flex-col justify-between shadow-xs transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 font-bold">
                  {proj.badge}
                </span>
              </div>

              <h3 className="font-sans font-bold text-lg text-slate-900 mb-1">
                {proj.title}
              </h3>
              <p className="font-mono text-xs text-slate-500 mb-3">
                {proj.tagline}
              </p>
              <p className="font-sans text-xs text-slate-700 leading-relaxed mb-4">
                {proj.summary}
              </p>

              <div className="space-y-1.5 mb-4">
                {proj.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="text-[#D4AF37] font-bold">●</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4 pt-2 border-t border-slate-100">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#D4AF37] hover:underline"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-600 hover:text-slate-900"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
