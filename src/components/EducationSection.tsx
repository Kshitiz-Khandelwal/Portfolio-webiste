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
    <section id="education" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg badge-blue text-[11px] font-mono uppercase tracking-wider font-semibold mb-3">
            Academic Background
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#111827] tracking-tight">
            Education &amp; Core Coursework
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-md">
          Theoretical foundation in computer science, systems engineering, and business intelligence.
        </p>
      </div>

      <div className="relative bg-[#F7F7F5] border border-[#E5E7EB] hover:border-[#2563EB] rounded-3xl p-6 sm:p-8 shadow-clean hover:shadow-clean-md transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shrink-0 shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl text-[#111827]">
                BMS Institute of Technology &amp; Management
              </h3>
              <p className="font-sans text-xs text-[#2563EB] font-semibold">
                B.E. in Computer Science and Business Systems (CSBS)
              </p>
            </div>
          </div>

          <div className="flex flex-col md:items-end text-left md:text-right">
            <span className="font-mono text-xs font-bold text-[#111827]">2024 — 2028 (Present)</span>
            <span className="font-mono text-[11px] text-[#2563EB] font-semibold">Bangalore, India • CGPA: 9.43</span>
          </div>
        </div>

        <div>
          <h4 className="font-sans text-xs uppercase tracking-wider text-[#111827] mb-4 flex items-center gap-2 font-bold">
            <BookOpen className="w-4 h-4 text-[#2563EB]" />
            <span>Key Academic Coursework</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {coursework.map((course, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] font-sans text-xs text-[#111827] flex items-center gap-2 transition-colors shadow-xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
