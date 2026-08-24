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
    <section id="education" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-bree text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4BAA3] mb-2">
          Academic Track
        </span>
        <h2 className="font-bree text-5xl sm:text-6xl md:text-7xl text-[#F5E1CD]">
          Education &amp; Coursework
        </h2>
        <p className="font-gochi text-base sm:text-lg text-[#D4BAA3] mt-2 max-w-md">
          Theoretical foundation in computer science, systems engineering, and business intelligence.
        </p>
      </div>

      <div className="relative bg-[#E9D3BB] border-[4px] border-[#3E3124] rounded-[28px] p-6 sm:p-8 shadow-paper">
        <div className="washi-tape-coral -top-3.5 left-10 rotate-[-5deg]" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b-2 border-dashed border-[#3E3124]/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F5E1CD] border-2 border-[#3E3124] flex items-center justify-center text-[#E25543] shrink-0 shadow-sketch">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bree font-bold text-2xl text-[#3E3124]">
                BMS Institute of Technology &amp; Management
              </h3>
              <p className="font-gochi text-base text-[#E25543] font-bold">
                B.E. in Computer Science and Business Systems (CSBS)
              </p>
            </div>
          </div>

          <div className="flex flex-col md:items-end text-left md:text-right font-gochi">
            <span className="text-base font-bold text-[#3E3124]">2024 — 2028 (Present)</span>
            <span className="text-sm text-[#E25543] font-bold">Bangalore, India • CGPA: 9.43</span>
          </div>
        </div>

        <div>
          <h4 className="font-bree text-lg text-[#3E3124] mb-4 flex items-center gap-2 font-bold">
            <BookOpen className="w-5 h-5 text-[#E25543]" />
            <span>Key Academic Coursework</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {coursework.map((course, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#F5E1CD] border-2 border-[#3E3124] font-gochi text-sm text-[#3E3124] flex items-center gap-2 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#E25543] shrink-0" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
