"use client";

import React from "react";
import { GraduationCap, Cpu, Sparkles, Server, Shield, Brain } from "lucide-react";

export function AboutSection() {
  const engineeringPillars = [
    { name: "High-Throughput Java & Spring Boot", color: "#F0A89C" },
    { name: "Privacy-Preserving SplitFed AI", color: "#F8DC96" },
    { name: "Deterministic Embedded RTOS (RP2350)", color: "#B2C4B0" },
    { name: "TreeSHAP Explainable Threat Forensics", color: "#D2C4D9" },
    { name: "Zero-Copy Memory Ingestion Buffers", color: "#F7E8D8" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4BAA3] mb-2">
          Systems &amp; Architecture
        </span>
        <h2 className="font-bree text-5xl sm:text-6xl md:text-7xl text-[#F5E1CD]">
          About Me
        </h2>
      </div>

      {/* Taped Paper Container */}
      <div className="relative rounded-[28px] border-[4px] border-[#2B2015] bg-[#E9D3BB] p-6 sm:p-8 shadow-paper overflow-hidden">
        {/* Background Coffee Stains */}
        <div className="coffee-stain absolute top-10 right-10 w-32 h-32 rotate-45 opacity-25" />
        <div className="coffee-stain absolute -bottom-10 -left-10 w-40 h-40 -rotate-12 opacity-20" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: My Story & Philosophy (Left Column) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative bg-[#F5E1CD] border-[3px] border-[#2B2015] rounded-2xl p-6 shadow-sketch -rotate-1 hover:rotate-0 transition-transform">
              <div className="washi-tape-coral -top-3 left-10 rotate-[-8deg]" />
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-[#E25543]" />
                  <h3 className="font-bree text-xl text-[#2B2015] font-bold">
                    Where Systems Meet Machine Learning
                  </h3>
                </div>
                <span className="text-xl">⚙️</span>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#2B2015] leading-relaxed mb-4">
                I focus on building production-grade software where performance, determinism, and mathematical rigor converge. At <span className="text-[#E25543] font-bold">Zarthi</span>, I develop high-throughput Java and Spring Boot microservices, building resilient REST APIs, asynchronous pipelines, and optimized database layers.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#2B2015] leading-relaxed">
                In my research fellowship at <span className="text-[#E25543] font-bold">IIIT Tiruchirappalli</span>, I formulate privacy-preserving Split Federated Learning algorithms using NoPeek distance correlation loss and Spiking Neural Network cut-layers for medical IoT telemetry.
              </p>
            </div>

            {/* Academic Dual-Track Card */}
            <div className="relative bg-[#F7E8D8] border-[3px] border-[#2B2015] rounded-2xl p-6 shadow-sketch rotate-1 hover:rotate-0 transition-transform">
              <div className="washi-tape-sage -top-3 right-10 rotate-[6deg]" />

              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-[#E25543]" />
                <h3 className="font-bree text-xl text-[#2B2015] font-bold">
                  Education &amp; Research Track
                </h3>
              </div>

              <div className="space-y-3 font-sans text-sm text-[#2B2015]">
                <div className="p-3.5 bg-[#EAD9C7]/70 rounded-xl border border-[#2B2015]/30">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-base text-[#2B2015]">BMS Institute of Technology &amp; Management</span>
                    <span className="text-xs text-[#E25543] font-bold">2024 – 2028</span>
                  </div>
                  <div className="text-xs text-[#6B5B4D] mt-0.5">
                    B.E. in Computer Science &amp; Business Systems (CSBS) • <span className="font-bold text-[#2B2015]">CGPA: 9.43</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#EAD9C7]/70 rounded-xl border border-[#2B2015]/30">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-base text-[#2B2015]">IIIT Tiruchirappalli Research Fellowship</span>
                    <span className="text-xs text-[#E25543] font-bold">AICTE-QIP-PG</span>
                  </div>
                  <div className="text-xs text-[#6B5B4D] mt-0.5">
                    Split Federated Learning, NoPeek Distance Loss &amp; Spiking Cut Layers
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Engineering Competencies & Verified Metrics (Right Column) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative bg-[#F5E1CD] border-[3px] border-[#2B2015] rounded-2xl p-6 shadow-sketch flex-1 flex flex-col justify-between">
              <div className="washi-tape-mustard -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-5 h-5 text-[#E25543]" />
                  <h3 className="font-bree text-xl text-[#2B2015] font-bold">
                    Technical Competencies
                  </h3>
                </div>

                <p className="font-sans text-sm text-[#2B2015] leading-relaxed mb-5">
                  I specialize in distributed backend engineering, zero-copy telemetry buffers, explainable cybersecurity analytics, and real-time embedded RTOS firmware.
                </p>

                {/* Handcrafted Color Swatches */}
                <div className="mb-6 p-3.5 bg-[#E9D3BB]/70 rounded-xl border-2 border-dashed border-[#2B2015]/30">
                  <span className="font-sans text-xs text-[#6B5B4D] uppercase tracking-wider block mb-2 font-bold">
                    🛠️ Core Architecture Domains:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {engineeringPillars.map((m) => (
                      <span
                        key={m.name}
                        className="px-3 py-1 border-2 border-[#2B2015] rounded-lg font-sans text-xs text-[#2B2015] font-bold shadow-[2px_2px_0px_#2B2015] hover:scale-105 transition-transform"
                        style={{ backgroundColor: m.color }}
                      >
                        {m.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Substantive High-Value Architectural Metric Badges */}
                <div className="grid grid-cols-2 gap-2.5 font-sans text-[#2B2015]">
                  <div className="p-3 bg-[#F8E8B8] border-2 border-[#2B2015] rounded-xl text-center shadow-xs">
                    <span className="text-xl font-bold font-mono block text-[#E25543]">9.43</span>
                    <span className="text-xs font-semibold text-[#2B2015]">BMSIT&amp;M CGPA</span>
                  </div>
                  <div className="p-3 bg-[#B2C4B0] border-2 border-[#2B2015] rounded-xl text-center shadow-xs">
                    <span className="text-xl font-bold font-mono block text-[#2B2015]">&lt; 1.2ms</span>
                    <span className="text-xs font-semibold text-[#2B2015]">Kernel Latency Floor</span>
                  </div>
                  <div className="p-3 bg-[#D2C4D9] border-2 border-[#2B2015] rounded-xl text-center shadow-xs">
                    <span className="text-xl font-bold font-mono block text-[#2B2015]">100k+</span>
                    <span className="text-xs font-semibold text-[#2B2015]">Telemetry Samples</span>
                  </div>
                  <div className="p-3 bg-[#F0A89C] border-2 border-[#2B2015] rounded-xl text-center shadow-xs">
                    <span className="text-xl font-bold font-mono block text-[#2B2015]">100+</span>
                    <span className="text-xs font-semibold text-[#2B2015]">Students Mentored</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quote Stamp */}
              <div className="mt-6 pt-4 border-t-2 border-dashed border-[#2B2015]/30 font-sans text-xs text-[#6B5B4D] italic text-center">
                &ldquo;Systems should be defensible under load, mathematically sound, and simple to verify.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
