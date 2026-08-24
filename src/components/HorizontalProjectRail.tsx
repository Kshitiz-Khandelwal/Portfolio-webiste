"use client";

import React, { useState } from "react";
import { projectCaseStudies, ProjectCaseStudy } from "@/data/projects";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { ExternalLink, Terminal, Shield, Cpu, Activity, Zap, FileText, ArrowRight } from "lucide-react";

export function HorizontalProjectRail() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const tapeStyles = ["washi-tape-coral", "washi-tape-sage", "washi-tape-mustard", "washi-tape-lavender"];

  const filteredProjects =
    activeFilter === "ALL"
      ? projectCaseStudies
      : projectCaseStudies.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4BAA3] mb-2">
          Defensible Architectures
        </span>
        <h2 className="font-bree text-5xl sm:text-6xl md:text-7xl text-[#F5E1CD]">
          Featured Systems &amp; Projects
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#D4BAA3] mt-2 max-w-lg">
          Click &ldquo;Inspect Technical Case Study&rdquo; on any system to read the complete 12-section architectural whitepaper.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {[
            { id: "ALL", label: "All Systems (6)" },
            { id: "cybersecurity", label: "Cybersecurity & Threat Intel" },
            { id: "ai-systems", label: "Edge AI & Healthcare Systems" },
            { id: "full-stack", label: "High-Throughput Web & OS" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full font-sans text-xs sm:text-sm font-semibold border-2 border-[#2B2015] transition-all shadow-[2px_2px_0px_#2B2015] cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#E25543] text-white -translate-y-0.5"
                  : "bg-[#F5E1CD] text-[#2B2015] hover:bg-[#F7E8D8]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Handcrafted Paper Project Cards with Clean Legibility */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => {
          const TapeClass = tapeStyles[idx % tapeStyles.length];

          return (
            <div
              key={project.id}
              className="relative bg-[#F5E1CD] border-[3.5px] border-[#2B2015] rounded-[26px] p-6 sm:p-7 shadow-sketch flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sketchLg group"
              style={{
                transform: `rotate(${idx % 2 === 0 ? -0.7 : 0.7}deg)`,
              }}
            >
              {/* Pastel Washi Tape Strip */}
              <div
                className={`${TapeClass} -top-3.5 ${
                  idx % 2 === 0 ? "left-8 rotate-[-6deg]" : "right-8 rotate-[5deg]"
                }`}
              />

              {/* Decorative Paperclip / Pin */}
              <div className="absolute top-3 right-4 text-xl select-none pointer-events-none opacity-80 group-hover:scale-110 transition-transform">
                {idx % 2 === 0 ? "📎" : "📌"}
              </div>

              <div>
                {/* Category & Badge Note */}
                <div className="flex items-center justify-between pb-2 mb-3 border-b-2 border-dashed border-[#2B2015]/30">
                  <span className="font-sans text-xs text-[#6B5B4D] font-bold uppercase tracking-wider">
                    {project.badge}
                  </span>
                  <span className="font-sans text-xs px-3 py-0.5 rounded-full bg-[#E25543] text-white font-bold shadow-[1px_1px_0px_#2B2015]">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-bree font-bold text-2xl text-[#2B2015] group-hover:text-[#E25543] transition-colors leading-snug mb-1">
                  {project.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#E25543] font-bold mb-3">
                  {project.tagline}
                </p>

                <p className="font-sans text-sm text-[#2B2015] leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Benchmark Citation Note */}
                {project.benchmarkCitation && (
                  <div className="font-mono text-[11px] text-[#6B5B4D] bg-[#F7E8D8] px-3 py-1.5 rounded-lg border border-[#2B2015]/20 mb-4 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#E25543] shrink-0" />
                    <span className="truncate">Ref: {project.benchmarkCitation}</span>
                  </div>
                )}

                {/* Verified Key Metric Strip */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.metrics.slice(0, 2).map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-[#F7E8D8] border border-[#2B2015]/30 p-2.5 rounded-xl text-center"
                    >
                      <span className="font-mono text-[10px] text-[#6B5B4D] uppercase block">
                        {m.label}
                      </span>
                      <span className="font-mono text-base font-bold text-[#E25543] block mt-0.5">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-[#181615] text-[#D4BAA3] text-xs font-mono border border-[#5B5248]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t-2 border-dashed border-[#2B2015]/30 flex items-center justify-between font-sans text-sm">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 bg-[#2B2015] text-[#F5E1CD] rounded-xl text-xs sm:text-sm font-semibold border-2 border-[#2B2015] hover:bg-[#E25543] hover:text-white shadow-[2px_2px_0px_#2B2015] transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Case Study ➔</span>
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#E25543] hover:underline font-bold transition-colors text-xs sm:text-sm"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 12-Section Technical Case Study Modal */}
      {selectedProject && (
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
