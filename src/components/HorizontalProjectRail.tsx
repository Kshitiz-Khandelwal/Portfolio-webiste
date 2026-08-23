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

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const AUTO_SCROLL_SPEED = 0.55;
    let frameId: number;

    const tick = () => {
      if (!isPausedRef.current && el) {
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
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
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-[#F7F7F5] rounded-3xl my-8 border border-[#E5E7EB]">
      <div id="featured-projects" className="scroll-mt-24" />

      {/* Section Header with Navigation Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg badge-blue text-[11px] font-mono uppercase tracking-wider font-semibold mb-3">
            Flagship Engineering &amp; Research
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#111827] tracking-tight">
            Featured Systems &amp; Architectures
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6B7280] mt-1 max-w-xl">
            Infinite looping horizontal rail with in-card telemetry previews. Hover over any project to inspect the pipeline or click to open the case study.
          </p>
        </div>

        {/* Scroll Control Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollWithPause("left")}
            className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#374151] hover:text-[#2563EB] hover:border-[#2563EB] shadow-clean transition-all active:scale-[0.95]"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollWithPause("right")}
            className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#374151] hover:text-[#2563EB] hover:border-[#2563EB] shadow-clean transition-all active:scale-[0.95]"
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
          const pageNum = (index % featuredProjects.length) + 1;

          return (
            <div
              key={uniqueKey}
              onMouseEnter={() => setHoveredProjectId(uniqueKey)}
              onMouseLeave={() => setHoveredProjectId(null)}
              onClick={() => setActiveCaseStudy(project)}
              className={`snap-start shrink-0 w-[340px] sm:w-[420px] bg-white border rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group shadow-clean ${
                isHovered
                  ? "border-[#2563EB] -translate-y-2 shadow-clean-lg z-10 scale-[1.01]"
                  : "border-[#E5E7EB] hover:border-[#2563EB]"
              }`}
            >
              <div>
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b border-[#F3F4F6]">
                  <span className="font-mono text-[10px] text-[#6B7280] font-semibold">
                    ENTRY 0{pageNum} // {project.categoryLabel}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full badge-blue font-semibold truncate max-w-[180px]">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-sans font-bold text-xl text-[#111827] group-hover:text-[#2563EB] transition-colors mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <p className="font-sans text-xs text-[#4B5563] line-clamp-2 mb-4 leading-relaxed h-[36px]">
                  {project.summary}
                </p>

                {/* In-Card Fixed Height Preview Container */}
                <div className="mb-4 bg-[#F3F4F6] border border-[#E5E7EB] rounded-2xl p-3.5 h-[88px] relative overflow-hidden transition-all flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#E5E7EB]">
                    <span className="font-mono text-[10px] uppercase text-[#6B7280] font-semibold flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-[#2563EB]" />
                      <span>{isHovered ? "Live Pipeline Flow" : "Verified Benchmark"}</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#2563EB] font-bold">
                      {isHovered ? "PREVIEW ACTIVE" : "01 — CORE"}
                    </span>
                  </div>

                  {/* Cross-fading Content */}
                  <div className="relative flex-1 pt-1.5">
                    {isHovered ? (
                      <div className="font-mono text-[10px] text-[#111827] space-y-0.5 animate-in fade-in duration-150">
                        <div className="text-[#2563EB] font-semibold truncate">➔ Input: {project.metrics[0].label}</div>
                        <div className="text-[#111827] font-semibold truncate">➔ Score: {project.metrics[1].value} ({project.metrics[1].label})</div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2 animate-in fade-in duration-150">
                        <div className="text-left">
                          <span className="font-mono text-[9px] text-[#6B7280] uppercase block leading-none">{project.metrics[0].label}</span>
                          <span className="font-mono text-xs font-bold text-[#111827] mt-0.5 block">{project.metrics[0].value}</span>
                        </div>
                        <div className="text-left">
                          <span className="font-mono text-[9px] text-[#6B7280] uppercase block leading-none">{project.metrics[1].label}</span>
                          <span className="font-mono text-xs font-bold text-[#2563EB] mt-0.5 block">{project.metrics[1].value}</span>
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
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium badge-neutral"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-[#6B7280]">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Bottom Card Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[#F3F4F6] text-xs">
                  <span className="font-sans font-medium text-[#4B5563] group-hover:text-[#111827] transition-colors flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Open Case Study</span>
                  </span>
                  <span className="font-mono text-[#2563EB] font-semibold group-hover:translate-x-1 transition-transform">
                    Inspect Specs ➔
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
