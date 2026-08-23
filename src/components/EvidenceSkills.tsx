"use client";

import React, { useState } from "react";
import { evidenceSkillsData } from "@/data/skills";
import { Cpu, Brain, Shield, Layers, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function EvidenceSkills() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const selectedCategory = evidenceSkillsData[activeCategoryIdx];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-[#1A1025]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg badge-violet text-[11px] font-mono uppercase tracking-wider font-semibold mb-3">
            Defensible Technical Stack
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#E5DAF7] tracking-tight">
            Evidence-Based Technical Skills
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#A99BC2] max-w-md">
          Zero arbitrary percentage bars. Every listed technology is tied directly to real-world architectures, internships, and research implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Category Selector Tabs */}
        <div className="lg:col-span-4 space-y-3">
          {evidenceSkillsData.map((cat, idx) => {
            const isSelected = idx === activeCategoryIdx;

            return (
              <button
                key={cat.categoryName}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`w-full p-4.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between shadow-violet ${
                  isSelected
                    ? "bg-[#271A38] border-[#A78BFA] text-[#E5DAF7] ring-2 ring-[#A78BFA]/30"
                    : "bg-[#1F142D] border-[#3D2B55] hover:border-[#A78BFA] text-[#C4B5FD] hover:text-white"
                }`}
              >
                <div>
                  <h3 className={`font-sans font-semibold text-xs sm:text-sm leading-tight mb-1 ${
                    isSelected ? "text-[#A78BFA]" : "text-[#E5DAF7]"
                  }`}>
                    {cat.categoryName}
                  </h3>
                  <span className="font-mono text-[10px] text-[#A99BC2]">
                    {cat.skills.length} Technical Specialties
                  </span>
                </div>
                <span
                  className={`text-sm font-mono font-bold transition-transform ${
                    isSelected ? "text-[#A78BFA] translate-x-1" : "text-[#A99BC2]"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Skills & Evidence Cards */}
        <div className="lg:col-span-8 bg-[#271A38] border border-[#3D2B55] rounded-3xl p-6 sm:p-8 shadow-violet-lg">
          <div className="border-b border-[#3D2B55] pb-4 mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#A78BFA]" />
              <h3 className="font-sans font-bold text-xl text-[#E5DAF7]">
                {selectedCategory.categoryName}
              </h3>
            </div>
            <p className="font-sans text-xs text-[#A99BC2]">
              {selectedCategory.categoryDesc}
            </p>
          </div>

          <div className="space-y-4">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4.5 rounded-2xl bg-[#1F142D] border border-[#3D2B55] hover:border-[#A78BFA] transition-all space-y-2.5 shadow-violet"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-sans font-semibold text-sm text-[#E5DAF7]">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full badge-violet font-semibold shadow-xs">
                    {skill.levelDescriptor}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#C4B5FD] leading-relaxed">
                  {skill.context}
                </p>

                {/* Implemented in Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#3D2B55]">
                  <span className="font-mono text-[10px] text-[#A99BC2] mr-1">Implemented in:</span>
                  {skill.usedIn.map((proj) => (
                    <span
                      key={proj}
                      className="px-2 py-0.5 rounded-md font-mono text-[10px] badge-subtle"
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
