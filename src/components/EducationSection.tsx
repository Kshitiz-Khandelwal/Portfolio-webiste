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
    <section id="education" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#E0C9AE]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl badge-coral text-[11px] font-mono uppercase tracking-wider font-bold mb-3">
            Academic Background
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#3A2E22] tracking-tight">
            Education &amp; Core Coursework
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#8A7A63] max-w-md">
          Theoretical foundation in computer science, systems engineering, and business intelligence.
        </p>
      </div>

      <div className="relative bg-[#FDF8F2] border border-[#E0C9AE] hover:border-[#E8846B] rounded-3xl p-6 sm:p-8 shadow-warm hover:shadow-warmLg transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E0C9AE]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F3D9C4] border border-[#E0C9AE] flex items-center justify-center text-[#B5432C] shrink-0 shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl text-[#3A2E22]">
                BMS Institute of Technology &amp; Management
              </h3>
              <p className="font-mono text-xs text-[#E8846B] font-bold">
                B.E. in Computer Science and Business Systems (CSBS)
              </p>
            </div>
          </div>

          <div className="flex flex-col md:items-end text-left md:text-right">
            <span className="font-mono text-xs font-bold text-[#3A2E22]">2024 — 2028 (Present)</span>
            <span className="font-mono text-[11px] text-[#B5432C] font-bold">Bangalore, India • CGPA: 9.43</span>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#3A2E22] mb-4 flex items-center gap-2 font-bold">
            <BookOpen className="w-4 h-4 text-[#E8846B]" />
            <span>Key Academic Coursework</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {coursework.map((course, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#FAF3E8] border border-[#E0C9AE] hover:border-[#E8846B] font-sans text-xs text-[#3A2E22] flex items-center gap-2 transition-colors shadow-xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8FBFA0] shrink-0" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
