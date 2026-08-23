"use client";

import React, { useState } from "react";
import { evidenceSkillsData } from "@/data/skills";
import { Cpu, Brain, Shield, Layers, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function EvidenceSkills() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const selectedCategory = evidenceSkillsData[activeCategoryIdx];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#E0C9AE]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl badge-coral text-[11px] font-mono uppercase tracking-wider font-bold mb-3">
            Defensible Technical Stack
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#3A2E22] tracking-tight">
            Evidence-Based Technical Skills
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#8A7A63] max-w-md">
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
                className={`w-full p-4.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between shadow-warm ${
                  isSelected
                    ? "bg-[#F3D9C4] border-[#E8846B] text-[#3A2E22] ring-2 ring-[#E8846B]/20"
                    : "bg-[#FDF8F2] border-[#E0C9AE] hover:border-[#E8846B] text-[#5C4D3C] hover:text-[#3A2E22]"
                }`}
              >
                <div>
                  <h3 className={`font-sans font-bold text-xs sm:text-sm leading-tight mb-1 ${
                    isSelected ? "text-[#3A2E22]" : "text-[#5C4D3C]"
                  }`}>
                    {cat.categoryName}
                  </h3>
                  <span className="font-mono text-[10px] text-[#8A7A63]">
                    {cat.skills.length} Technical Specialties
                  </span>
                </div>
                <span
                  className={`text-sm font-mono font-bold transition-transform ${
                    isSelected ? "text-[#E8846B] translate-x-1" : "text-[#8A7A63]"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Skills & Evidence Cards */}
        <div className="lg:col-span-8 bg-[#FDF8F2] border border-[#E0C9AE] rounded-3xl p-6 sm:p-8 shadow-warmLg">
          <div className="border-b border-[#E0C9AE] pb-4 mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#E8846B]" />
              <h3 className="font-sans font-bold text-xl text-[#3A2E22]">
                {selectedCategory.categoryName}
              </h3>
            </div>
            <p className="font-sans text-xs text-[#5C4D3C]">
              {selectedCategory.categoryDesc}
            </p>
          </div>

          <div className="space-y-4">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4.5 rounded-2xl bg-[#FAF3E8] border border-[#E0C9AE] hover:border-[#E8846B] transition-all space-y-2.5 shadow-warm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-sans font-bold text-sm text-[#3A2E22]">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full badge-coral font-bold shadow-xs">
                    {skill.levelDescriptor}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#5C4D3C] leading-relaxed">
                  {skill.context}
                </p>

                {/* Implemented in Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#E0C9AE]">
                  <span className="font-mono text-[10px] text-[#8A7A63] mr-1">Implemented in:</span>
                  {skill.usedIn.map((proj, pIdx) => (
                    <span
                      key={proj}
                      className={`px-2 py-0.5 rounded-md font-mono text-[10px] ${
                        pIdx % 2 === 0 ? "badge-sage" : "badge-tan"
                      }`}
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
