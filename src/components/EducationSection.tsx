"use client";

import React from "react";
import { GraduationCap, BookOpen, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems & IPC",
    "Computer Networks & Protocols",
    "Object-Oriented Programming (Java/C++)",
    "Machine Learning & Data Mining",
    "Internet of Things & Embedded Systems",
    "Design & Analysis of Algorithms",
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#FFD700] font-bold mb-3">
            Academic Background
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Education &amp; Core Coursework
          </h2>
        </div>
        <p className="font-sans text-sm text-[#94A3B8] max-w-md">
          Theoretical foundation in computer science, systems engineering, and business intelligence.
        </p>
      </div>

      <div className="relative bg-[#181C28] border-2 border-[#2B3245] hover:border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-sketch hover:shadow-sketchLg transition-all duration-300">
        {/* Washi Tape & Paperclip */}
        <div className="washi-tape-gold -top-2 left-10 rotate-[-4deg]" />
        <div className="absolute top-4 right-6 text-xl select-none pointer-events-none opacity-80">
          📎
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-dashed border-[#2B3245]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#FFD700] shrink-0 shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl text-white">
                BMS Institute of Technology &amp; Management
              </h3>
              <p className="font-mono text-xs text-[#FFD700] font-bold">
                B.E. in Computer Science and Business Systems (CSBS)
              </p>
            </div>
          </div>

          <div className="flex flex-col md:items-end text-left md:text-right">
            <span className="font-mono text-xs font-bold text-[#E2E8F0]">2024 — 2028 (Present)</span>
            <span className="font-mono text-[11px] text-[#FFD700] font-bold">Bangalore, India • CGPA: 9.43</span>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-4 flex items-center gap-2 font-bold">
            <BookOpen className="w-4 h-4 text-[#FFD700]" />
            <span>Key Academic Coursework</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {coursework.map((course, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#10121A] border border-[#2B3245] hover:border-[#D4AF37] font-sans text-xs text-[#E2E8F0] flex items-center gap-2 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
