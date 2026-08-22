"use client";

import React from "react";
import { Brain, Cpu, Shield, Sparkles, Layers, Terminal, ArrowRight } from "lucide-react";

export function AboutSection() {
  const exploringTopics = [
    { title: "Distributed & Federated Learning", desc: "NoPeek loss, cut-layer smash data, non-IID client drift" },
    { title: "DNS Threat Defense & ML", desc: "Shannon entropy lexical models, DGA attribution, wire-speed filtering" },
    { title: "Real-Time Embedded RTOS", desc: "Zephyr RTOS, ARM Cortex-M33 RP2350, edge anomaly detection" },
    { title: "Biomedical Signal Transforms", desc: "12-lead ECG scalograms via Continuous Wavelet Transforms" },
    { title: "Explainable AI & Auditing", desc: "TreeSHAP feature attribution & Grad-CAM visual heatmaps" },
    { title: "Full-Stack Product Engineering", desc: "Next.js 15, high-taste design systems, zero CLS, REST APIs" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Bio Narrative */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold">
            About &amp; Philosophy
          </div>

          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Engineering Systems From Concept to Deployment
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#C7C7CF] leading-relaxed">
            I am a Computer Science &amp; Business Systems student at <span className="text-white font-bold">BMSIT&amp;M, Bangalore</span>. 
            I specialize in bridging the gap between theoretical machine learning algorithms, low-level systems architectures, and production-ready software products.
          </p>

          <p className="font-sans text-sm sm:text-base text-[#9A9AA4] leading-relaxed">
            Whether architecting decentralized federated learning pipelines for hospitals, wire-speed DNS threat filters, or real-time embedded firmware on microcontrollers, I focus on building <span className="text-[#FFD700] font-bold">practical, defensible, and high-impact solutions</span>.
          </p>

          {/* Quick Pillars */}
          <div className="pt-2 grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[#D4AF37] block font-bold">Research &amp; ML</span>
              <span className="text-[11px] text-slate-500">Signal transforms &amp; distributed AI</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[#D4AF37] block font-bold">Systems &amp; Product</span>
              <span className="text-[11px] text-slate-500">End-to-end full-stack architectures</span>
            </div>
          </div>
        </div>

        {/* Right Column: Currently Exploring Grid */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-900 font-bold">
                Currently Exploring &amp; Researching
              </h3>
            </div>
            <span className="font-mono text-[10px] text-slate-500">PIPELINE: ACTIVE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {exploringTopics.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#D4AF37] transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h4>
                  <span className="font-mono text-[10px] text-slate-400">0{idx + 1}</span>
                </div>
                <p className="font-mono text-[11px] text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
