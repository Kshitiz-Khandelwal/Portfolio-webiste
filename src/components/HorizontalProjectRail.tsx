"use client";

import React, { useRef, useState, useEffect } from "react";
import { featuredProjects, ProjectCaseStudy } from "@/data/projects";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { ChevronLeft, ChevronRight, Eye, Terminal } from "lucide-react";

export function HorizontalProjectRail() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScrollEvent = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 440;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="featured-projects" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200">
      {/* Section Header with Navigation Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
            Flagship Engineering &amp; Research
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Featured Systems &amp; Architectures
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Horizontal scroll rail with in-card telemetry previews. Hover over any project to inspect the pipeline or click to open the case study.
          </p>
        </div>

        {/* Scroll Control Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#D4AF37] hover:border-[#D4AF37] shadow-xs transition-all active:scale-[0.95]"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#D4AF37] hover:border-[#D4AF37] shadow-xs transition-all active:scale-[0.95]"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress Track Bar */}
      <div className="w-full bg-slate-200 h-1 rounded-full mb-6 overflow-hidden">
        <div
          className="bg-[#D4AF37] h-full transition-all duration-150 rounded-full"
          style={{ width: `${Math.max(scrollProgress * 100, 16)}%` }}
        />
      </div>

      {/* Horizontal Scroll Rail */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScrollEvent}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory items-stretch"
      >
        {featuredProjects.map((project) => {
          const isHovered = hoveredProjectId === project.id;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              onClick={() => setActiveCaseStudy(project)}
              className="snap-start shrink-0 w-[340px] sm:w-[420px] bg-white border border-slate-200 hover:border-[#D4AF37] rounded-3xl p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg cursor-pointer flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle Top Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-colors pointer-events-none" />

              <div>
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 font-bold">
                    {project.categoryLabel}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500 truncate max-w-[190px]">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-sans font-bold text-xl text-slate-900 group-hover:text-[#D4AF37] transition-colors mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <p className="font-sans text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {project.summary}
                </p>

                {/* In-Card Dynamic Preview / Architecture Reveal on Hover */}
                <div className="mb-4 bg-slate-50 border border-slate-200 rounded-2xl p-3.5 transition-all">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200">
                    <span className="font-mono text-[10px] uppercase text-slate-500 font-semibold flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-[#D4AF37]" />
                      <span>{isHovered ? "Live Pipeline Flow" : "Verified Benchmark"}</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#D4AF37] font-bold">
                      {isHovered ? "PREVIEW ACTIVE" : "01 — CORE"}
                    </span>
                  </div>

                  {isHovered ? (
                    /* Live Pipeline Flow Preview */
                    <div className="font-mono text-[10px] text-slate-800 space-y-1 animate-in fade-in duration-200">
                      <div className="text-[#D4AF37] font-bold truncate">➔ Input: {project.metrics[0].label}</div>
                      <div className="text-slate-600 truncate">➔ Pipeline: {project.metrics[3]?.value || "Multi-Stage ML"}</div>
                      <div className="text-emerald-700 font-bold">➔ Metric: {project.metrics[1].value} ({project.metrics[1].label})</div>
                    </div>
                  ) : (
                    /* Default Metrics Snapshot */
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-left">
                        <span className="font-mono text-[9px] text-slate-500 uppercase block">{project.metrics[0].label}</span>
                        <span className="font-mono text-xs font-bold text-slate-900 mt-0.5 block">{project.metrics[0].value}</span>
                      </div>
                      <div className="text-left">
                        <span className="font-mono text-[9px] text-slate-500 uppercase block">{project.metrics[1].label}</span>
                        <span className="font-mono text-xs font-bold text-[#D4AF37] mt-0.5 block">{project.metrics[1].value}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Bottom Card Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  <span className="font-sans font-medium text-slate-600 group-hover:text-slate-900 transition-colors flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Open Case Study</span>
                  </span>
                  <span className="font-mono text-[#D4AF37] font-bold group-hover:translate-x-1 transition-transform">
                    Inspect Specs →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Study Modal Trigger */}
      <ProjectCaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
}
