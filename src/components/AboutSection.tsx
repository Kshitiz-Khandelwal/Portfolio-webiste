"use client";

import React from "react";
import { Brain, Cpu, Shield, Sparkles, Layers, Terminal, ArrowRight, Briefcase, Award, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const exploringTopics = [
    {
      title: "Java & Spring Boot Microservices",
      desc: "High-throughput asynchronous REST APIs, dependency injection, and JPA/Hibernate query optimization (Zarthi Backend Internship).",
      tag: "BACKEND CORE",
    },
    {
      title: "Distributed & Split Federated Learning",
      desc: "NoPeek distance correlation loss, cut-layer smash representations, and mitigating non-IID client drift in hospital networks (IIIT Trichy Research).",
      tag: "AI RESEARCH",
    },
    {
      title: "DNS Threat Defense & Wire-Speed ML",
      desc: "Shannon entropy lexical models, DGA attribution, and sub-1.2ms inference resolution pipelines (DNS Shield).",
      tag: "SECURITY",
    },
    {
      title: "Real-Time Embedded Firmware & RTOS",
      desc: "Deterministic multi-threading, devicetree overlays, and sensor telemetry on dual-core ARM Cortex-M33 RP2350 (Zephyr RTOS).",
      tag: "EMBEDDED",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Bio Narrative */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#FFD700] font-bold">
            About &amp; Engineering Focus
          </div>

          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Building Defensible Systems From Theory to High-Impact Code
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#E2E8F0] leading-relaxed">
            I am a Computer Science &amp; Business Systems undergraduate at <span className="text-white font-bold">BMSIT&amp;M, Bangalore</span> (9.43 CGPA), working as a <span className="text-[#FFD700] font-bold">Backend Developer Intern at Zarthi</span> (Java &amp; Spring Boot) and conducting research under the <span className="text-[#38BDF8] font-bold">AICTE-QIP-PG Programme at IIIT Trichy</span>.
          </p>

          <p className="font-sans text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
            Whether architecting decentralized federated learning pipelines for hospital networks, wire-speed DNS threat filters, or real-time embedded firmware on microcontrollers, I focus on building <span className="text-[#FFD700] font-bold">scalable, latency-bounded, and production-tested solutions</span>.
          </p>

          {/* Quick Pillars */}
          <div className="pt-2 grid grid-cols-2 gap-3.5 font-mono text-xs">
            <div className="relative p-4 rounded-2xl bg-[#181C28] border border-[#2B3245] shadow-sketch -rotate-1 hover:rotate-0 transition-transform">
              <div className="washi-tape-gold -top-2 left-6 rotate-[-4deg] !w-14 !h-3.5" />
              <span className="text-[#FFD700] block font-bold text-sm mb-0.5">Backend &amp; Cloud</span>
              <span className="text-[11px] text-slate-300">Java, Spring Boot, REST APIs &amp; SQL</span>
            </div>
            <div className="relative p-4 rounded-2xl bg-[#181C28] border border-[#2B3245] shadow-sketch rotate-1 hover:rotate-0 transition-transform">
              <div className="washi-tape-ruby -top-2 right-6 rotate-[4deg] !w-14 !h-3.5" />
              <span className="text-[#38BDF8] block font-bold text-sm mb-0.5">Embedded &amp; AI</span>
              <span className="text-[11px] text-slate-300">Zephyr RTOS, RP2350, SFL on IoMT</span>
            </div>
          </div>
        </div>

        {/* Right Column: Currently Exploring Grid (4 Sharp Focus Items) */}
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
                Core Engineering Competencies
              </h3>
            </div>
            <span className="font-mono text-[10px] text-[#FFD700] bg-[#10121A] px-2.5 py-0.5 rounded-md border border-[#D4AF37]/40 font-bold">
              4 ACTIVE PILLARS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exploringTopics.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#10121A] border border-[#2B3245] hover:border-[#D4AF37] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#181C28] text-[#FFD700] border border-[#D4AF37]/30 font-bold">
                      {item.tag}
                    </span>
                    <span className="font-mono text-[10px] text-[#94A3B8]">0{idx + 1}</span>
                  </div>
                  <h4 className="font-sans font-bold text-sm text-white group-hover:text-[#FFD700] transition-colors mb-1.5">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-[#CBD5E1] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
