"use client";

import React from "react";
import { FileSearch, Users, Network, Code2, LineChart, Rocket } from "lucide-react";

export function HowIBuild() {
  const steps = [
    {
      num: "01",
      phase: "DEFINE",
      title: "Start with the Problem",
      description:
        "Identify the actual inefficiency, threat, or user constraint before writing code or choosing model architectures.",
      icon: FileSearch,
    },
    {
      num: "02",
      phase: "UNDERSTAND",
      title: "Understand the User",
      description:
        "Define users, constraints, latency budgets, privacy bounds, and what success actually looks like in production.",
      icon: Users,
    },
    {
      num: "03",
      phase: "ARCHITECTURE",
      title: "Design the System",
      description:
        "Break the problem into data flow, microservices, feature extraction, explainability layers, and deployment boundaries.",
      icon: Network,
    },
    {
      num: "04",
      phase: "BUILD",
      title: "Implement & Modularize",
      description:
        "Build modular pipelines, APIs, ML backbones, interfaces, and firmware with clean separation of concerns.",
      icon: Code2,
    },
    {
      num: "05",
      phase: "EVALUATE",
      title: "Measure with Evidence",
      description:
        "Benchmark models against holdout sets, cross-validation, edge cases, and feature attribution (SHAP) rather than vanity metrics.",
      icon: LineChart,
    },
    {
      num: "06",
      phase: "DEPLOY",
      title: "Ship & Continuously Iterate",
      description:
        "Deploy the system, observe real-world telemetry, identify bottlenecks and failure modes, and iterate rapidly.",
      icon: Rocket,
    },
  ];

  return (
    <section id="how-i-build" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
            Engineering Methodology
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            How I Build Systems
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9A9AA4] mt-1 max-w-xl">
            I start with the problem, design the system around its constraints, and use AI only where it actually adds value.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="bg-[#121216] border border-[#22222A] hover:border-[#D4AF37] rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px]">
                    <span className="text-[#D4AF37] font-bold">{step.num}</span>
                    <span className="text-[#6B6B76]">•</span>
                    <span className="text-[#8A8A94] uppercase tracking-wider">{step.phase}</span>
                  </div>
                </div>

                <h3 className="font-sans font-bold text-lg text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#22222A] flex items-center justify-between font-mono text-[10px] text-[#6B6B76]">
                <span>STAGE {step.num}</span>
                <span className="text-[#8A8A94] group-hover:text-[#D4AF37] transition-colors">SYSTEM PIPELINE</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
