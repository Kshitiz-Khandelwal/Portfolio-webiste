"use client";

import React, { useState } from "react";
import { evidenceSkillsData } from "@/data/skills";
import { Cpu, Brain, Shield, Layers, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function EvidenceSkills() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const selectedCategory = evidenceSkillsData[activeCategoryIdx];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-bree text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4BAA3] mb-2">
          Defensible Stack
        </span>
        <h2 className="font-bree text-5xl sm:text-6xl md:text-7xl text-[#F5E1CD]">
          Evidence-Based Skills
        </h2>
        <p className="font-gochi text-base sm:text-lg text-[#D4BAA3] mt-2 max-w-md">
          Zero arbitrary percentage bars. Every listed technology is tied directly to real-world architectures and research implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Category Selector Tabs */}
        <div className="lg:col-span-4 space-y-3.5">
          {evidenceSkillsData.map((cat, idx) => {
            const isSelected = idx === activeCategoryIdx;

            return (
              <button
                key={cat.categoryName}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`w-full p-4 rounded-2xl border-[3px] border-[#3E3124] text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? "bg-[#E25543] text-white shadow-sketchLg -translate-y-0.5"
                    : "bg-[#F5E1CD] text-[#3E3124] hover:bg-[#F7E8D8] shadow-sketch"
                }`}
              >
                <div>
                  <h3 className="font-bree font-bold text-lg leading-tight mb-0.5">
                    {cat.categoryName}
                  </h3>
                  <span className={`font-gochi text-xs ${isSelected ? "text-white/90" : "text-[#6D6358]"}`}>
                    {cat.skills.length} Technical Specialties
                  </span>
                </div>
                <span className="text-lg font-bold">➔</span>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Skills & Evidence Cards */}
        <div className="lg:col-span-8 bg-[#E9D3BB] border-[4px] border-[#3E3124] rounded-[28px] p-6 sm:p-8 shadow-paper">
          <div className="border-b-2 border-dashed border-[#3E3124]/30 pb-4 mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-[#E25543]" />
              <h3 className="font-bree font-bold text-2xl text-[#3E3124]">
                {selectedCategory.categoryName}
              </h3>
            </div>
            <p className="font-gochi text-base text-[#6D6358]">
              {selectedCategory.categoryDesc}
            </p>
          </div>

          <div className="space-y-4">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#3E3124] shadow-sketch hover:shadow-sketchLg transition-all space-y-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bree font-bold text-lg text-[#3E3124]">
                    {skill.name}
                  </span>
                  <span className="font-gochi text-xs px-3 py-0.5 rounded-full bg-[#F8DC96] text-[#3E3124] border border-[#3E3124] font-bold">
                    {skill.levelDescriptor}
                  </span>
                </div>

                <p className="font-gochi text-base text-[#3E3124] leading-relaxed">
                  {skill.context}
                </p>

                {/* Implemented in Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-dashed border-[#3E3124]/30 font-mono text-xs">
                  <span className="text-[#6D6358] font-gochi text-xs mr-1">Implemented in:</span>
                  {skill.usedIn.map((proj) => (
                    <span
                      key={proj}
                      className="px-2 py-0.5 rounded-md bg-[#262626] text-[#D4BAA3] border border-[#5B5248]"
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
