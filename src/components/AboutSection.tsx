"use client";

import React from "react";
import { Brain, Cpu, Shield, Sparkles, Layers, Terminal, ArrowRight, Briefcase, Award } from "lucide-react";

export function AboutSection() {
  const exploringTopics = [
    { title: "Distributed & Split Federated Learning", desc: "NoPeek distance loss, cut-layer smash data, non-IID client drift (IIIT Trichy Research)" },
    { title: "Java & Spring Boot Microservices", desc: "High-throughput asynchronous REST APIs, dependency injection, JPA/Hibernate ORM (Zarthi Internship)" },
    { title: "DNS Threat Defense & ML", desc: "Shannon entropy lexical models, DGA attribution, wire-speed filtering (DNS Shield)" },
    { title: "Real-Time Embedded RTOS", desc: "Zephyr RTOS, ARM Cortex-M33 RP2350, ESP32 FreeRTOS, edge anomaly detection" },
    { title: "Biomedical Signal Transforms", desc: "12-lead ECG scalograms via Continuous Wavelet Transforms & EfficientNet-B4" },
    { title: "Explainable AI & Auditing", desc: "TreeSHAP feature attribution & Grad-CAM visual heatmaps for transparent ML" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Bio Narrative */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#FFD700] font-bold">
            About &amp; Engineering Philosophy
          </div>

          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Engineering Systems From Concept to High-Impact Deployment
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#E2E8F0] leading-relaxed">
            I am a Computer Science &amp; Business Systems student at <span className="text-white font-bold">BMSIT&amp;M, Bangalore</span> (9.43 CGPA), currently working as a <span className="text-[#FFD700] font-bold">Backend Developer Intern at Zarthi</span> (Java &amp; Spring Boot) and conducting research under the <span className="text-[#38BDF8] font-bold">AICTE-QIP-PG Programme at IIIT Trichy</span>.
          </p>

          <p className="font-sans text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
            Whether architecting decentralized federated learning pipelines for hospitals, wire-speed DNS threat filters, or real-time embedded firmware on microcontrollers, I focus on building <span className="text-[#FFD700] font-bold">practical, defensible, and latency-bounded solutions</span>.
          </p>

          {/* Quick Pillars with Tactile Style */}
          <div className="pt-2 grid grid-cols-2 gap-3.5 font-mono text-xs">
            <div className="relative p-4 rounded-2xl bg-[#181C28] border border-[#2B3245] shadow-sketch -rotate-1 hover:rotate-0 transition-transform">
              <div className="washi-tape-gold -top-2 left-6 rotate-[-4deg] !w-14 !h-3.5" />
              <span className="text-[#FFD700] block font-bold text-sm mb-0.5">Backend &amp; Cloud</span>
              <span className="text-[11px] text-slate-300">Java, Spring Boot, Microservices &amp; SQL</span>
            </div>
            <div className="relative p-4 rounded-2xl bg-[#181C28] border border-[#2B3245] shadow-sketch rotate-1 hover:rotate-0 transition-transform">
              <div className="washi-tape-ruby -top-2 right-6 rotate-[4deg] !w-14 !h-3.5" />
              <span className="text-[#38BDF8] block font-bold text-sm mb-0.5">Embedded &amp; AI</span>
              <span className="text-[11px] text-slate-300">Zephyr RTOS, RP2350, SFL on IoMT</span>
            </div>
          </div>
        </div>

        {/* Right Column: Currently Exploring Grid in Dark Obsidian Tactile Frame */}
        <div className="lg:col-span-7 bg-[#181C28] border-2 border-[#2B3245] rounded-3xl p-6 sm:p-8 shadow-sketchLg relative overflow-hidden">
          <div className="washi-tape-gold -top-2 left-10 rotate-[-5deg]" />
          <div className="washi-tape-slate -bottom-2 right-10 rotate-[4deg]" />
          <div className="absolute top-4 right-6 text-xl select-none pointer-events-none opacity-80">
            📎
          </div>

          <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-dashed border-[#2B3245]">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFD700] animate-pulse" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                Currently Exploring &amp; Researching
              </h3>
            </div>
            <span className="font-mono text-[10px] text-[#FFD700] bg-[#10121A] px-2.5 py-0.5 rounded-md border border-[#D4AF37]/40 font-bold">
              PIPELINE: ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {exploringTopics.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#10121A] border border-[#2B3245] hover:border-[#D4AF37] transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-white group-hover:text-[#FFD700] transition-colors">
                    {item.title}
                  </h4>
                  <span className="font-mono text-[10px] text-[#94A3B8]">0{idx + 1}</span>
                </div>
                <p className="font-sans text-[11px] text-[#CBD5E1] leading-relaxed">
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
