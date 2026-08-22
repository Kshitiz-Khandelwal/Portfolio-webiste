"use client";

import React, { useState, useEffect } from "react";
import { ProjectCaseStudy } from "@/data/projects";
import { X, ExternalLink, CheckCircle2, ChevronDown, ChevronUp, Zap, Sparkles, Terminal, AlertTriangle } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-10 z-10 my-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-[#D4AF37] transition-colors"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] font-bold">
            {project.categoryLabel}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
            {project.badge}
          </span>
        </div>

        {/* Title & Tagline */}
        <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight mb-2">
          {project.title}
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#D4AF37] font-semibold mb-8 leading-relaxed">
          {project.tagline}
        </p>

        {/* Verified Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-left">
              <span className="font-mono text-[10px] text-slate-500 uppercase block">{m.label}</span>
              <span className="font-mono text-base sm:text-lg font-bold text-slate-900 mt-0.5 block">
                {m.value}
              </span>
              {m.note && (
                <span className="font-mono text-[9px] text-slate-600 mt-1 block">{m.note}</span>
              )}
            </div>
          ))}
        </div>

        {/* 01 — Executive Summary & Problem */}
        <div className="space-y-6 mb-10">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-2">
              01 — Executive Summary &amp; Real-World Problem
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
              {project.problem}
            </p>
          </div>

          {/* 02 — Why Traditional Solutions Fail */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#DC143C] font-bold mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> 02 — Why Traditional Solutions Are Limited
            </h3>
            <div className="space-y-2 bg-rose-50/50 p-4 rounded-2xl border border-rose-100">
              {project.limitationsOfExisting.map((lim, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <span className="text-[#DC143C] font-bold mt-0.5">✕</span>
                  <span>{lim}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 03 — Implemented Solution */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-700 font-bold mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 03 — Implemented Engineering Solution
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100">
              {project.solution}
            </p>
          </div>
        </div>

        {/* 04 — System Architecture Diagram */}
        <div className="mb-10">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-2 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" /> 04 — End-to-End System Architecture &amp; Data Pipeline
          </h3>
          <pre className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 font-mono text-[11px] sm:text-xs overflow-x-auto leading-relaxed whitespace-pre shadow-inner">
            {project.architectureAscii.trim()}
          </pre>
        </div>

        {/* Progressive Disclosure Toggle */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowFullBreakdown(!showFullBreakdown)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs font-mono font-bold transition-all"
          >
            <span>
              {showFullBreakdown
                ? "Collapse Deep Technical Details"
                : "Read Full Technical Whitepaper (All 12 Sections)"}
            </span>
            {showFullBreakdown ? (
              <ChevronUp className="w-4 h-4 text-[#D4AF37]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
            )}
          </button>
        </div>

        {/* Deep Technical Breakdown (Sections 05 through 11) */}
        {showFullBreakdown && (
          <div className="space-y-10 animate-in fade-in slide-in-from-top-4 duration-300 border-t border-slate-200 pt-8 mb-10">
            {/* 05 & 06 — Dataset & Feature Engineering */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-2">
                  05 — Dataset &amp; Benchmarks
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200 h-full">
                  {project.datasetDetails}
                </p>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-2">
                  06 — Feature Engineering Details
                </h3>
                <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200 h-full">
                  {project.featureEngineering.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-[#D4AF37] font-bold mt-0.5">●</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 07 — ML Model Comparison Table */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-3">
                07 — Model Selection &amp; Benchmark Evaluation
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-slate-100 text-slate-600 border-b border-slate-200">
                    <tr>
                      <th className="p-3">Model Candidate</th>
                      <th className="p-3">Primary Score</th>
                      <th className="p-3">Latency / Metric 2</th>
                      <th className="p-3">Engineering Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {project.modelComparison.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">{row.model}</td>
                        <td className="p-3 text-[#D4AF37] font-bold">{row.metric1}</td>
                        <td className="p-3 text-slate-700">{row.metric2}</td>
                        <td className="p-3 text-slate-500">{row.verdict}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 08 — Explainability & Trust */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-2">
                08 — Explainability &amp; Model Auditing
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {project.explainability}
              </p>
            </div>

            {/* 09 — Key Engineering Results */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-3">
                09 — Verified Results &amp; Deliverables
              </h3>
              <div className="space-y-2">
                {project.keyResults.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 10 — Challenges & Mitigations */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-3">
                10 — Key Challenges &amp; Technical Mitigations
              </h3>
              <div className="space-y-3">
                {project.challengesAndMitigations.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="text-[#DC143C] font-mono font-bold mb-1">Challenge: {item.challenge}</div>
                    <div className="text-slate-700 font-sans">Mitigation: {item.mitigation}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 11 — What I Learned */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-2">
                11 — Key Engineering Takeaways
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {project.whatILearned}
              </p>
            </div>
          </div>
        )}

        {/* 12 — Tech Stack Tags */}
        <div className="mb-10">
          <h3 className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mb-2.5">
            12 — Technologies &amp; Libraries Implemented
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-200">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] text-slate-900 font-sans font-bold text-xs sm:text-sm hover:bg-[#FFD700] transition-all active:scale-[0.98]"
            >
              <span>Launch Live Deployment</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-sans font-medium text-xs sm:text-sm hover:bg-slate-200 transition-all active:scale-[0.98]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Inspect GitHub Source</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto px-4 py-2.5 rounded-xl text-xs font-mono text-slate-500 hover:text-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
