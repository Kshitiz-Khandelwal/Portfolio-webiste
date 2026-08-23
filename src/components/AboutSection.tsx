"use client";

import React from "react";
import { Brain, Cpu, Shield, Layers, Terminal, ArrowRight, Briefcase, Award, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const exploringTopics = [
    {
      title: "Java & Spring Boot Microservices",
      desc: "High-throughput asynchronous REST APIs, dependency injection, and JPA/Hibernate query optimization (Zarthi Backend Internship).",
      tag: "BACKEND CORE",
      badgeClass: "badge-violet",
    },
    {
      title: "Distributed & Split Federated Learning",
      desc: "NoPeek distance correlation loss, cut-layer smash representations, and mitigating non-IID client drift in hospital networks (IIIT Trichy Research).",
      tag: "AI RESEARCH",
      badgeClass: "badge-emerald",
    },
    {
      title: "DNS Threat Defense & Wire-Speed ML",
      desc: "Shannon entropy lexical models, DGA attribution, and sub-1.2ms inference resolution pipelines (DNS Shield).",
      tag: "SECURITY",
      badgeClass: "badge-subtle",
    },
    {
      title: "Real-Time Embedded Firmware & RTOS",
      desc: "Deterministic multi-threading, devicetree overlays, and sensor telemetry on dual-core ARM Cortex-M33 RP2350 (Zephyr RTOS).",
      tag: "EMBEDDED",
      badgeClass: "badge-violet",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-[#271A38] rounded-3xl my-8 border border-[#3D2B55]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Bio Narrative */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg badge-violet text-[11px] font-mono uppercase tracking-wider font-semibold">
            About &amp; Engineering Focus
          </div>

          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#E5DAF7] tracking-tight">
            Building Defensible Systems From Theory to High-Impact Code
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#C4B5FD] leading-relaxed">
            I am a Computer Science &amp; Business Systems undergraduate at <span className="text-white font-semibold">BMSIT&amp;M, Bangalore</span> (9.43 CGPA), working as a <span className="text-[#A78BFA] font-semibold">Backend Developer Intern at Zarthi</span> (Java &amp; Spring Boot) and conducting research under the <span className="text-[#34D399] font-semibold">AICTE-QIP-PG Programme at IIIT Trichy</span>.
          </p>

          <p className="font-sans text-sm sm:text-base text-[#A99BC2] leading-relaxed">
            Whether architecting decentralized federated learning pipelines for hospital networks, wire-speed DNS threat filters, or real-time embedded firmware on microcontrollers, I focus on building <span className="text-[#E5DAF7] font-semibold">scalable, latency-bounded, and production-tested solutions</span>.
          </p>

          {/* Quick Pillars in Dark Inset Cards */}
          <div className="pt-2 grid grid-cols-2 gap-3.5 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-[#1F142D] border border-[#3D2B55] shadow-violet">
              <span className="text-[#A78BFA] block font-bold text-sm mb-0.5">Backend &amp; Cloud</span>
              <span className="text-[11px] text-[#A99BC2]">Java, Spring Boot, REST APIs &amp; SQL</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#1F142D] border border-[#3D2B55] shadow-violet">
              <span className="text-[#34D399] block font-bold text-sm mb-0.5">Embedded &amp; AI</span>
              <span className="text-[11px] text-[#A99BC2]">Zephyr RTOS, RP2350, SFL on IoMT</span>
            </div>
          </div>
        </div>

        {/* Right Column: Currently Exploring Grid */}
        <div className="lg:col-span-7 bg-[#1F142D] border border-[#3D2B55] rounded-3xl p-6 sm:p-8 shadow-violet-lg relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#3D2B55]">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#A78BFA] animate-pulse" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#E5DAF7] font-bold">
                Core Engineering Competencies
              </h3>
            </div>
            <span className="font-mono text-[10px] text-[#A78BFA] bg-[#A78BFA]/15 px-2.5 py-0.5 rounded-md border border-[#A78BFA]/40 font-bold">
              4 ACTIVE PILLARS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exploringTopics.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#271A38] border border-[#3D2B55] hover:border-[#A78BFA] transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-[9px] px-2 py-0.5 rounded-md font-bold ${item.badgeClass}`}>
                      {item.tag}
                    </span>
                    <span className="font-mono text-[10px] text-[#A99BC2]">0{idx + 1}</span>
                  </div>
                  <h4 className="font-sans font-semibold text-sm text-[#E5DAF7] group-hover:text-[#A78BFA] transition-colors mb-1.5">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-[#A99BC2] leading-relaxed">
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
