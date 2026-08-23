"use client";

import React, { useState } from "react";
import { evidenceSkillsData } from "@/data/skills";
import { Cpu, Brain, Shield, Layers, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function EvidenceSkills() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const selectedCategory = evidenceSkillsData[activeCategoryIdx];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#FFD700] font-bold mb-3">
            Defensible Technical Stack
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Evidence-Based Technical Skills
          </h2>
        </div>
        <p className="font-sans text-sm text-[#9A9AA4] max-w-md">
          Zero arbitrary percentage bars. Every listed technology is tied directly to real-world architectures, internships, and research implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Category Selector Tabs in Dark Obsidian */}
        <div className="lg:col-span-4 space-y-3">
          {evidenceSkillsData.map((cat, idx) => {
            const isSelected = idx === activeCategoryIdx;

            return (
              <button
                key={cat.categoryName}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`w-full p-4.5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between shadow-xs ${
                  isSelected
                    ? "bg-[#181824] border-[#D4AF37] ring-2 ring-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                    : "bg-[#0E0E12] border-[#22222A] hover:border-[#D4AF37]/50 text-slate-400 hover:text-white hover:bg-[#14141C]"
                }`}
              >
                <div>
                  <h3 className={`font-sans font-bold text-xs sm:text-sm leading-tight mb-1 ${
                    isSelected ? "text-white" : "text-slate-300"
                  }`}>
                    {cat.categoryName}
                  </h3>
                  <span className="font-mono text-[10px] text-[#8A8A94]">
                    {cat.skills.length} Technical Specialties
                  </span>
                </div>
                <span
                  className={`text-sm font-mono font-bold transition-transform ${
                    isSelected ? "text-[#FFD700] translate-x-1" : "text-[#555566]"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Skills & Project Evidence Cards in Dark Obsidian */}
        <div className="lg:col-span-8 bg-[#121216] border border-[#22222A] rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="border-b border-[#22222A] pb-4 mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="font-sans font-bold text-xl text-white">
                {selectedCategory.categoryName}
              </h3>
            </div>
            <p className="font-sans text-xs text-[#A1A1AA]">
              {selectedCategory.categoryDesc}
            </p>
          </div>

          <div className="space-y-4">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4.5 rounded-2xl bg-[#161620] border border-[#2A2A38] hover:border-[#D4AF37] transition-all space-y-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-sans font-bold text-sm text-white">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#0E0E12] text-[#FFD700] border border-[#D4AF37]/40 font-bold shadow-xs">
                    {skill.levelDescriptor}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#C7C7CF] leading-relaxed">
                  {skill.context}
                </p>

                {/* Direct Project Evidence Links */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#22222A]">
                  <span className="font-mono text-[10px] text-[#8A8A94] mr-1">Implemented in:</span>
                  {skill.usedIn.map((proj) => (
                    <span
                      key={proj}
                      className="px-2 py-0.5 rounded-md bg-[#0A0A0C] border border-[#2A2A38] font-mono text-[10px] text-slate-300 shadow-xs"
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
