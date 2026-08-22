"use client";

import React, { useState } from "react";
import { evidenceSkillsData } from "@/data/skills";
import { Cpu, Brain, Shield, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

export function EvidenceSkills() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const selectedCategory = evidenceSkillsData[activeCategoryIdx];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
            Defensible Technical Stack
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Evidence-Based Technical Skills
          </h2>
        </div>
        <p className="font-sans text-sm text-[#9A9AA4] max-w-md">
          Zero arbitrary percentage bars. Every listed technology is tied directly to real-world architectures and project implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Category Selector Tabs */}
        <div className="lg:col-span-4 space-y-2">
          {evidenceSkillsData.map((cat, idx) => {
            const isSelected = idx === activeCategoryIdx;

            return (
              <button
                key={cat.categoryName}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between shadow-xs ${
                  isSelected
                    ? "bg-white border-[#D4AF37] ring-2 ring-[#D4AF37]/30"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div>
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-slate-900 leading-tight mb-1">
                    {cat.categoryName}
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500">
                    {cat.skills.length} Technical Specialties
                  </span>
                </div>
                <span
                  className={`text-xs font-mono font-bold ${
                    isSelected ? "text-[#D4AF37]" : "text-slate-400"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Skills & Project Evidence Cards */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h3 className="font-sans font-bold text-xl text-slate-900 mb-1">
              {selectedCategory.categoryName}
            </h3>
            <p className="font-sans text-xs text-slate-600">
              {selectedCategory.categoryDesc}
            </p>
          </div>

          <div className="space-y-4">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#D4AF37] transition-all space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-sans font-bold text-sm text-slate-900">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-white text-[#D4AF37] border border-[#D4AF37]/40 font-bold shadow-xs">
                    {skill.levelDescriptor}
                  </span>
                </div>

                <p className="font-sans text-xs text-slate-700 leading-relaxed">
                  {skill.context}
                </p>

                {/* Direct Project Evidence Links */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/80">
                  <span className="font-mono text-[10px] text-slate-500 mr-1">Implemented in:</span>
                  {skill.usedIn.map((proj) => (
                    <span
                      key={proj}
                      className="px-2 py-0.5 rounded-md bg-white border border-slate-200 font-mono text-[10px] text-slate-700 shadow-xs"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
