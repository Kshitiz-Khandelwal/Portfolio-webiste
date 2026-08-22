"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Cpu, Layers, ShieldCheck, Terminal, Zap } from "lucide-react";

export function HowIBuild() {
  const steps = [
    {
      num: "01",
      title: "Real-World Problem",
      desc: "Identify the root inefficiency, safety vulnerability, or clinical constraint before writing a single line of code.",
    },
    {
      num: "02",
      title: "User & Stakeholders",
      desc: "Understand whether the user is a SOC analyst, rural farmer, cardiologist, or embedded developer.",
    },
    {
      num: "03",
      title: "System Architecture",
      desc: "Design data flow, determine model boundaries, latency budgets, and security/privacy guarantees.",
    },
    {
      num: "04",
      title: "Implementation",
      desc: "Build modular pipelines in Python, Rust, or C/C++ paired with modern TypeScript web interfaces.",
    },
    {
      num: "05",
      title: "Evaluation & Testing",
      desc: "Rigorous benchmarking against standard datasets, edge case stress testing, and SHAP explainability.",
    },
    {
      num: "06",
      title: "Deployment & Iteration",
      desc: "Deploy interactive web platforms or edge firmware, monitor performance, and iterate based on telemetry.",
    },
  ];

  return (
    <section id="how-i-build" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
            Product Thinking &amp; Engineering Lifecycle
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            How I Build Systems
          </h2>
        </div>
        <p className="font-sans text-sm text-slate-600 max-w-md">
          I build systems around real problems rather than isolated, theoretical machine learning models.
        </p>
      </div>

      {/* 6-Step Lifecycle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#D4AF37] hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xl font-bold text-[#D4AF37]">
                  {step.num}
                </span>
                <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#FFD700] transition-colors" />
              </div>
              <h3 className="font-sans font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#D4AF37] transition-colors mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-[10px] text-slate-400">
              <span>PHASE 0{idx + 1}</span>
              <span className="text-slate-500 group-hover:text-[#D4AF37] transition-colors font-semibold">
                VERIFIED →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
