"use client";

import React from "react";
import { GraduationCap, BookOpen, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems & IPC",
    "Computer Networks & Protocols",
    "Object-Oriented Programming (C++/Java)",
    "Machine Learning & Data Mining",
    "Internet of Things & Embedded Systems",
    "Design & Analysis of Algorithms",
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
            Academic Background
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Education &amp; Core Coursework
          </h2>
        </div>
        <p className="font-sans text-sm text-[#9A9AA4] max-w-md">
          Theoretical foundation in computer science, systems engineering, and business intelligence.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl text-slate-900">
                BMS Institute of Technology &amp; Management
              </h3>
              <p className="font-mono text-xs text-[#D4AF37] font-bold">
                B.E. in Computer Science and Business Systems (CSBS)
              </p>
            </div>
          </div>

          <div className="flex flex-col md:items-end text-left md:text-right">
            <span className="font-mono text-xs font-bold text-slate-700">2024 — 2028 (Present)</span>
            <span className="font-mono text-[11px] text-[#D4AF37] font-bold">Bangalore, India • CGPA: 9.43</span>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-600 mb-4 flex items-center gap-2 font-bold">
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            <span>Key Academic Coursework</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {coursework.map((course, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 font-sans text-xs text-slate-700 flex items-center gap-2"
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
