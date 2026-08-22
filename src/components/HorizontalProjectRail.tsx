"use client";

import React, { useRef, useState, useEffect } from "react";
import { featuredProjects, ProjectCaseStudy } from "@/data/projects";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { ChevronLeft, ChevronRight, Eye, Terminal } from "lucide-react";

export function HorizontalProjectRail() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const isPausedRef = useRef(false);

  // Seamless infinite array (duplicated to create continuous smooth looping)
  const displayProjects = [...featuredProjects, ...featuredProjects];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 440;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Continuous seamless auto-scroll loop
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const AUTO_SCROLL_SPEED = 0.55; // Smooth ambient drifting speed
    let frameId: number;

    const tick = () => {
      if (!isPausedRef.current && el) {
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          // Seamless reset to beginning of loop with zero jump
          el.scrollLeft -= halfWidth;
        } else {
          el.scrollLeft += AUTO_SCROLL_SPEED;
        }
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    const pause = () => (isPausedRef.current = true);
    const resume = () => {
      setTimeout(() => (isPausedRef.current = false), 800);
    };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);
    el.addEventListener("wheel", pause, { passive: true });
    el.addEventListener("pointerdown", pause);

    return () => {
      cancelAnimationFrame(frameId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      el.removeEventListener("wheel", pause);
      el.removeEventListener("pointerdown", pause);
    };
  }, []);

  const scrollWithPause = (direction: "left" | "right") => {
    isPausedRef.current = true;
    scroll(direction);
    setTimeout(() => (isPausedRef.current = false), 2000);
  };

  return (
    <section id="featured-projects" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      {/* Section Header with Navigation Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
            Flagship Engineering &amp; Research
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Featured Systems &amp; Architectures
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9A9AA4] mt-1 max-w-xl">
            Infinite looping horizontal rail with in-card telemetry previews. Hover over any project to inspect the pipeline or click to open the case study.
          </p>
        </div>

        {/* Scroll Control Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollWithPause("left")}
            className="p-2.5 rounded-xl bg-[#121216] border border-[#22222A] text-[#9A9AA4] hover:text-[#FFD700] hover:border-[#D4AF37] shadow-xs transition-all active:scale-[0.95]"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollWithPause("right")}
            className="p-2.5 rounded-xl bg-[#121216] border border-[#22222A] text-[#9A9AA4] hover:text-[#FFD700] hover:border-[#D4AF37] shadow-xs transition-all active:scale-[0.95]"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Rail */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory items-stretch"
      >
        {displayProjects.map((project, index) => {
          const uniqueKey = `${project.id}-${index}`;
          const isHovered = hoveredProjectId === uniqueKey;

          return (
            <div
              key={uniqueKey}
              onMouseEnter={() => setHoveredProjectId(uniqueKey)}
              onMouseLeave={() => setHoveredProjectId(null)}
              onClick={() => setActiveCaseStudy(project)}
              className={`snap-start shrink-0 w-[340px] sm:w-[420px] bg-white border rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                isHovered
                  ? "border-[#D4AF37] -translate-y-2 shadow-[0_15px_40px_rgba(212,175,55,0.2)] z-10 scale-[1.01]"
                  : "border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              {/* Subtle Top Glow on Hover */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/15 rounded-full blur-3xl transition-opacity pointer-events-none ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />

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
                <p className="font-sans text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed h-[36px]">
                  {project.summary}
                </p>

                {/* In-Card Fixed Height Preview Container (Zero Layout Shift) */}
                <div className="mb-4 bg-slate-50 border border-slate-200 rounded-2xl p-3.5 h-[88px] relative overflow-hidden transition-all flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                    <span className="font-mono text-[10px] uppercase text-slate-500 font-semibold flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-[#D4AF37]" />
                      <span>{isHovered ? "Live Pipeline Flow" : "Verified Benchmark"}</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#D4AF37] font-bold">
                      {isHovered ? "PREVIEW ACTIVE" : "01 — CORE"}
                    </span>
                  </div>

                  {/* Cross-fading Content without Height Change */}
                  <div className="relative flex-1 pt-1.5">
                    {isHovered ? (
                      /* Live Pipeline Flow Preview */
                      <div className="font-mono text-[10px] text-slate-800 space-y-0.5 animate-in fade-in duration-150">
                        <div className="text-[#D4AF37] font-bold truncate">➔ Input: {project.metrics[0].label}</div>
                        <div className="text-emerald-700 font-bold truncate">➔ Score: {project.metrics[1].value} ({project.metrics[1].label})</div>
                      </div>
                    ) : (
                      /* Default Metrics Snapshot */
                      <div className="grid grid-cols-2 gap-2 animate-in fade-in duration-150">
                        <div className="text-left">
                          <span className="font-mono text-[9px] text-slate-500 uppercase block leading-none">{project.metrics[0].label}</span>
                          <span className="font-mono text-xs font-bold text-slate-900 mt-0.5 block">{project.metrics[0].value}</span>
                        </div>
                        <div className="text-left">
                          <span className="font-mono text-[9px] text-slate-500 uppercase block leading-none">{project.metrics[1].label}</span>
                          <span className="font-mono text-xs font-bold text-[#D4AF37] mt-0.5 block">{project.metrics[1].value}</span>
                        </div>
                      </div>
                    )}
                  </div>
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
