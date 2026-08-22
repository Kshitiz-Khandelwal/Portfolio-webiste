"use client";

import React from "react";
import { Brain, ShieldCheck, Cpu, Code2, ArrowUpRight } from "lucide-react";

export function WhatIWorkOn() {
  const domains = [
    {
      id: "ai-ml",
      title: "Applied AI / ML",
      badge: "Vision & Signal ML",
      icon: Brain,
      color: "#FFD700",
      description:
        "Applied machine learning pipelines, Continuous Wavelet Transforms (CWT) for biosignals, and transparent model explainability using SHAP and Grad-CAM.",
      topics: ["Time-Series Transforms", "Convolutional Backbones", "TreeSHAP", "Model Evaluation"],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Threat Defense",
      badge: "Network & DNS Defense",
      icon: ShieldCheck,
      color: "#DC143C",
      description:
        "Sub-millisecond DNS threat filtering, DGA family classification, Shannon entropy analysis, and two-stage network intrusion detection engines.",
      topics: ["DGA Malware Attribution", "DNS Tunneling", "TON-IoT IDS", "Wire-Speed Filters"],
    },
    {
      id: "software-engineering",
      title: "Software Engineering",
      badge: "Full Stack & Microservices",
      icon: Code2,
      color: "#D4AF37",
      description:
        "End-to-end full-stack architectures, asynchronous FastAPI microservices, PostgreSQL/Supabase data schemas, and responsive Next.js web applications.",
      topics: ["Next.js 15 App Router", "FastAPI Asynchronous APIs", "System Architecture", "TypeScript"],
    },
    {
      id: "research-systems",
      title: "Research & Systems",
      badge: "Distributed AI & Embedded",
      icon: Cpu,
      color: "#38BDF8",
      description:
        "Decentralized privacy-preserving federated learning (SplitFed), cut-layer activation smashes, and deterministic real-time firmware on ARM microcontrollers.",
      topics: ["Split Learning", "NoPeek Loss", "Differential Privacy", "Zephyr RTOS"],
    },
  ];

  return (
    <section id="what-i-work-on" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
            Core Focus Areas
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            What I Work On
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9A9AA4] mt-1 max-w-xl">
            My primary technical domains spanning intelligent algorithms, threat defense pipelines, and production systems.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {domains.map((d) => {
          const Icon = d.icon;
          return (
            <div
              key={d.id}
              className="bg-[#121216] border border-[#22222A] hover:border-[#D4AF37] rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center border transition-colors"
                    style={{
                      backgroundColor: `${d.color}15`,
                      borderColor: `${d.color}35`,
                      color: d.color,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase text-[#8A8A94] tracking-wider px-2 py-0.5 rounded-full bg-[#18181F] border border-[#22222A]">
                    {d.badge}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                  {d.title}
                </h3>
                <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed mb-6">
                  {d.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#22222A]">
                  {d.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-[#18181F] text-[#8A8A94] text-[10px] font-mono border border-[#22222A]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
