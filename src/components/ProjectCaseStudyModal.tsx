"use client";

import React, { useState, useEffect } from "react";
import { ProjectCaseStudy } from "@/data/projects";
import { X, ExternalLink, CheckCircle2, ChevronDown, ChevronUp, Zap, Sparkles, Terminal, AlertTriangle, Lightbulb, FileText } from "lucide-react";

interface ProjectCaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  const [showFullBreakdown, setShowFullBreakdown] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card in Warm Sketchbook Theme */}
      <div className="relative w-full max-w-4xl bg-[#F5E1CD] border-[4px] border-[#3E3124] text-[#3E3124] rounded-[28px] shadow-paper p-6 sm:p-10 z-10 my-8 max-h-[92vh] overflow-y-auto">
        <div className="washi-tape-coral -top-3.5 left-10 rotate-[-5deg]" />
        <div className="washi-tape-sage -top-3.5 right-12 rotate-[6deg]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#E9D3BB] border-2 border-[#3E3124] text-[#3E3124] hover:bg-[#E25543] hover:text-white transition-colors cursor-pointer"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-gochi text-xs px-3 py-0.5 rounded-full bg-[#E25543] text-white border border-[#3E3124] font-bold">
            {project.categoryLabel}
          </span>
          <span className="font-gochi text-xs px-3 py-0.5 rounded-full bg-[#F8DC96] text-[#3E3124] border border-[#3E3124] font-bold">
            {project.badge}
          </span>
        </div>

        {/* Title & Tagline */}
        <h2 className="font-bree font-bold text-3xl sm:text-5xl text-[#3E3124] tracking-tight mb-2">
          {project.title}
        </h2>
        <p className="font-gochi text-base sm:text-lg text-[#E25543] font-bold mb-5 leading-relaxed">
          {project.tagline}
        </p>

        {/* Benchmark Citation Line */}
        {project.benchmarkCitation && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F7E8D8] border-2 border-[#3E3124] font-mono text-xs text-[#3E3124] mb-7 shadow-xs">
            <FileText className="w-4 h-4 text-[#E25543] shrink-0" />
            <span><strong>Benchmark Reference:</strong> {project.benchmarkCitation}</span>
          </div>
        )}

        {/* Verified Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="bg-[#F7E8D8] border-2 border-[#3E3124] p-3.5 rounded-2xl text-left flex flex-col justify-between shadow-xs">
              <div>
                <span className="font-mono text-[10px] text-[#6D6358] uppercase block">{m.label}</span>
                <span className="font-mono text-base sm:text-lg font-bold text-[#E25543] mt-0.5 block">
                  {m.value}
                </span>
              </div>
              <div className="mt-2 pt-2 border-t border-[#3E3124]/20">
                {m.note && (
                  <span className="font-gochi text-xs text-[#3E3124] block font-bold">{m.note}</span>
                )}
                {m.citation && (
                  <span className="font-mono text-[9px] text-[#6D6358] block truncate">Ref: {m.citation}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Interview Focus Callout */}
        {project.interviewHighlight && (
          <div className="mb-8 p-4 rounded-2xl bg-[#F8E8B8] border-2 border-[#3E3124] shadow-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <Lightbulb className="w-4 h-4 text-[#E25543]" />
              <span className="font-bree text-xs uppercase tracking-wider text-[#3E3124] font-bold">
                Key Technical Interview Focus
              </span>
            </div>
            <p className="font-gochi text-base text-[#3E3124] leading-relaxed">
              {project.interviewHighlight}
            </p>
          </div>
        )}

        {/* 01 — Executive Summary & Problem */}
        <div className="space-y-6 mb-8 font-gochi">
          <div>
            <h3 className="font-bree text-base uppercase tracking-wider text-[#3E3124] font-bold mb-2">
              01 — Problem Statement &amp; Real-World Context
            </h3>
            <p className="text-base text-[#3E3124] leading-relaxed bg-[#F7E8D8] p-4 rounded-2xl border-2 border-[#3E3124]">
              {project.problem}
            </p>
          </div>

          {/* 02 — Why Traditional Solutions Fail */}
          <div>
            <h3 className="font-bree text-base uppercase tracking-wider text-[#3E3124] font-bold mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-[#E25543]" /> 02 — Why Traditional Solutions Are Limited
            </h3>
            <div className="space-y-2 bg-[#F7E8D8] p-4 rounded-2xl border-2 border-[#3E3124]">
              {project.limitationsOfExisting.map((lim, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-base text-[#3E3124]">
                  <span className="text-[#E25543] font-bold mt-0.5">✕</span>
                  <span>{lim}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 03 — Implemented Solution */}
          <div>
            <h3 className="font-bree text-base uppercase tracking-wider text-[#E25543] font-bold mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E25543]" /> 03 — Implemented Engineering Approach
            </h3>
            <p className="text-base text-[#3E3124] leading-relaxed bg-[#F7E8D8] p-4 rounded-2xl border-2 border-[#3E3124]">
              {project.solution}
            </p>
          </div>
        </div>

        {/* 04 — System Architecture Diagram */}
        <div className="mb-8">
          <h3 className="font-bree text-base uppercase tracking-wider text-[#3E3124] font-bold mb-2 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#E25543]" /> 04 — End-to-End System Architecture
          </h3>
          <pre className="p-4 sm:p-5 rounded-2xl bg-[#1F1D1B] text-[#F5E1CD] border-2 border-[#3E3124] font-mono text-[11px] sm:text-xs overflow-x-auto leading-relaxed whitespace-pre shadow-xs">
            {project.architectureAscii.trim()}
          </pre>
        </div>

        {/* Progressive Disclosure Toggle */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowFullBreakdown(!showFullBreakdown)}
            className="sketch-button"
          >
            <span>
              {showFullBreakdown
                ? "Collapse Deep Technical Details"
                : "Read Full Technical Whitepaper (All 12 Sections)"}
            </span>
            {showFullBreakdown ? (
              <ChevronUp className="w-4 h-4 ml-2" />
            ) : (
              <ChevronDown className="w-4 h-4 ml-2" />
            )}
          </button>
        </div>

        {/* Deep Technical Breakdown (Sections 05 through 11) */}
        {showFullBreakdown && (
          <div className="space-y-8 animate-fadeIn border-t-2 border-dashed border-[#3E3124]/30 pt-8 mb-8 font-gochi">
            {/* 05 & 06 — Dataset & Feature Engineering */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bree text-base uppercase tracking-wider text-[#3E3124] font-bold mb-2">
                  05 — Dataset &amp; Benchmarks
                </h3>
                <p className="text-base text-[#3E3124] leading-relaxed bg-[#F7E8D8] p-4 rounded-2xl border-2 border-[#3E3124] h-full">
                  {project.datasetDetails}
                </p>
              </div>

              <div>
                <h3 className="font-bree text-base uppercase tracking-wider text-[#3E3124] font-bold mb-2">
                  06 — Feature Engineering Details
                </h3>
                <div className="space-y-2 bg-[#F7E8D8] p-4 rounded-2xl border-2 border-[#3E3124] h-full">
                  {project.featureEngineering.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-base text-[#3E3124]">
                      <span className="text-[#E25543] font-bold mt-0.5">●</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 07 — ML Model Comparison Table */}
            <div>
              <h3 className="font-bree text-base uppercase tracking-wider text-[#3E3124] font-bold mb-3">
                07 — Model Selection &amp; Benchmark Evaluation
              </h3>
              <div className="overflow-x-auto rounded-2xl border-2 border-[#3E3124] shadow-xs">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-[#E9D3BB] text-[#3E3124] border-b-2 border-[#3E3124]">
                    <tr>
                      <th className="p-3">Model Candidate</th>
                      <th className="p-3">Primary Score</th>
                      <th className="p-3">Latency / Metric 2</th>
                      <th className="p-3">Engineering Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#3E3124]/20 bg-[#F5E1CD]">
                    {project.modelComparison.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#F7E8D8] transition-colors">
                        <td className="p-3 font-bold text-[#3E3124]">{row.model}</td>
                        <td className="p-3 text-[#E25543] font-bold">{row.metric1}</td>
                        <td className="p-3 text-[#3E3124]">{row.metric2}</td>
                        <td className="p-3 text-[#6D6358]">{row.verdict}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 08 — Explainability */}
            <div>
              <h3 className="font-bree text-base uppercase tracking-wider text-[#3E3124] font-bold mb-2">
                08 — Explainability &amp; Model Auditing
              </h3>
              <p className="text-base text-[#3E3124] leading-relaxed bg-[#F7E8D8] p-4 rounded-2xl border-2 border-[#3E3124]">
                {project.explainability}
              </p>
            </div>

            {/* 09 — Key Engineering Results */}
            <div>
              <h3 className="font-bree text-base uppercase tracking-wider text-[#3E3124] font-bold mb-3">
                09 — Verified Results &amp; Deliverables
              </h3>
              <div className="space-y-2">
                {project.keyResults.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-base text-[#3E3124]">
                    <CheckCircle2 className="w-5 h-5 text-[#E25543] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 10 — Challenges & Mitigations */}
            <div>
              <h3 className="font-bree text-base uppercase tracking-wider text-[#3E3124] font-bold mb-3">
                10 — Key Challenges &amp; Technical Mitigations
              </h3>
              <div className="space-y-3">
                {project.challengesAndMitigations.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#F7E8D8] border-2 border-[#3E3124] text-sm">
                    <div className="text-[#E25543] font-bold mb-1">Challenge: {item.challenge}</div>
                    <div className="text-[#3E3124]">Mitigation: {item.mitigation}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 11 — What I Learned */}
            <div>
              <h3 className="font-bree text-base uppercase tracking-wider text-[#3E3124] font-bold mb-2">
                11 — Key Engineering Takeaways
              </h3>
              <p className="text-base text-[#3E3124] leading-relaxed bg-[#F7E8D8] p-4 rounded-2xl border-2 border-[#3E3124]">
                {project.whatILearned}
              </p>
            </div>
          </div>
        )}

        {/* 12 — Tech Stack Tags */}
        <div className="mb-8">
          <h3 className="font-gochi text-sm uppercase tracking-wider text-[#6D6358] mb-2 font-bold">
            12 — Technologies &amp; Libraries Implemented:
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#262626] text-[#D4BAA3] border border-[#5B5248]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-6 border-t-2 border-dashed border-[#3E3124]/30 font-gochi">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-button sketch-button-filled text-sm"
            >
              <span>Launch Live Deployment</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-button text-sm"
            >
              <svg className="w-4 h-4 fill-current mr-2" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>View Repository</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 text-sm text-[#6D6358] hover:text-[#3E3124] font-bold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
