"use client";

import React, { useState } from "react";
import { evidenceSkillsData } from "@/data/skills";
import { Cpu, Brain, Shield, Layers, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function EvidenceSkills() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const selectedCategory = evidenceSkillsData[activeCategoryIdx];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg badge-blue text-[11px] font-mono uppercase tracking-wider font-semibold mb-3">
            Defensible Technical Stack
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#111827] tracking-tight">
            Evidence-Based Technical Skills
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-md">
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
                className={`w-full p-4.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between shadow-clean ${
                  isSelected
                    ? "bg-[#EFF6FF] border-[#BFDBFE] text-[#1D4ED8] ring-2 ring-[#BFDBFE]"
                    : "bg-white border-[#E5E7EB] hover:border-[#2563EB] text-[#4B5563] hover:text-[#111827]"
                }`}
              >
                <div>
                  <h3 className={`font-sans font-semibold text-xs sm:text-sm leading-tight mb-1 ${
                    isSelected ? "text-[#1D4ED8]" : "text-[#111827]"
                  }`}>
                    {cat.categoryName}
                  </h3>
                  <span className="font-mono text-[10px] text-[#6B7280]">
                    {cat.skills.length} Technical Specialties
                  </span>
                </div>
                <span
                  className={`text-sm font-mono font-bold transition-transform ${
                    isSelected ? "text-[#2563EB] translate-x-1" : "text-[#9CA3AF]"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Skills & Evidence Cards */}
        <div className="lg:col-span-8 bg-[#F7F7F5] border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 shadow-clean-md">
          <div className="border-b border-[#E5E7EB] pb-4 mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#2563EB]" />
              <h3 className="font-sans font-bold text-xl text-[#111827]">
                {selectedCategory.categoryName}
              </h3>
            </div>
            <p className="font-sans text-xs text-[#6B7280]">
              {selectedCategory.categoryDesc}
            </p>
          </div>

          <div className="space-y-4">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4.5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] transition-all space-y-2.5 shadow-clean"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-sans font-semibold text-sm text-[#111827]">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full badge-blue font-semibold shadow-xs">
                    {skill.levelDescriptor}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#4B5563] leading-relaxed">
                  {skill.context}
                </p>

                {/* Implemented in Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#F3F4F6]">
                  <span className="font-mono text-[10px] text-[#6B7280] mr-1">Implemented in:</span>
                  {skill.usedIn.map((proj) => (
                    <span
                      key={proj}
                      className="px-2 py-0.5 rounded-md font-mono text-[10px] badge-neutral"
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
