"use client";

import React from "react";
import { Server, Shield, Cpu, Activity, ArrowRight } from "lucide-react";

export function WhatIWorkOn() {
  const domains = [
    {
      id: "backend-systems",
      title: "Backend & Distributed Systems",
      icon: "⚙️",
      tapeColor: "washi-tape-coral",
      accent: "#E25543",
      tagline: "High-Throughput Java & Production Microservices",
      description:
        "Building resilient REST APIs, asynchronous worker pools, and database optimizations in Java and Spring Boot (currently contributing at Zarthi).",
      bullets: [
        "Spring Boot microservices architecture with thread pools and circuit breakers.",
        "Optimized query plans, indexing strategies, and connection pooling.",
        "High-velocity event streams with zero-copy buffer pipelines.",
      ],
      badge: "PRODUCTION BACKEND",
      rotate: "-rotate-1",
    },
    {
      id: "ai-federated-learning",
      title: "Privacy-Preserving & Edge AI",
      icon: "🧠",
      tapeColor: "washi-tape-sage",
      accent: "#5C755A",
      tagline: "Split Federated Learning & Medical IoMT Security",
      description:
        "Researching distributed AI algorithms where sensitive client data remains on-device while training global models over IoMT telemetry.",
      bullets: [
        "Formulated NoPeek distance correlation loss preventing gradient reconstruction.",
        "Engineered Spiking Neural Network cut-layers with sub-1.2ms latency floors.",
        "Benchmarked on 100k+ sample telemetry datasets (PTB-XL, Ton-IoT).",
      ],
      badge: "IIIT TRICHY RESEARCH",
      rotate: "rotate-1",
    },
    {
      id: "cybersecurity-forensics",
      title: "Network Threat Intel & Forensics",
      icon: "🛡️",
      tapeColor: "washi-tape-mustard",
      accent: "#9A7E30",
      tagline: "Real-Time DGA Detection & Model Explainability",
      description:
        "Developing real-time packet inspection engines combining fast heuristic filters with TreeSHAP-explainable machine learning classifiers.",
      bullets: [
        "99.4% detection rate on algorithmically generated malicious domains (DGA).",
        "Sub-1.2ms inference latency floor with LightGBM and custom entropy metrics.",
        "TreeSHAP waterfall explanations giving SOC analysts defensible root causes.",
      ],
      badge: "CYBERSECURITY & SOC",
      rotate: "-rotate-1",
    },
    {
      id: "embedded-iot",
      title: "Deterministic Embedded RTOS",
      icon: "🔌",
      tapeColor: "washi-tape-lavender",
      accent: "#7B6285",
      tagline: "Real-Time Firmware on Raspberry Pi Pico 2 (RP2350)",
      description:
        "Writing deterministic bare-metal C/C++ and Zephyr RTOS firmware for ARM Cortex-M33 microcontrollers with sensor and motor actuation.",
      bullets: [
        "West build system, devicetree overlays, and Kconfig custom hardware drivers.",
        "Cooperative multi-threading with thread-safe ring buffers.",
        "Real-time PWM motor drivers and edge anomaly acoustic alerts.",
      ],
      badge: "EMBEDDED HARDWARE",
      rotate: "rotate-1",
    },
  ];

  return (
    <section id="domains" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-bree text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4BAA3] mb-2">
          Engineering Focus
        </span>
        <h2 className="font-bree text-5xl sm:text-6xl md:text-7xl text-[#F5E1CD]">
          What I Work On
        </h2>
        <p className="font-gochi text-base sm:text-lg text-[#D4BAA3] mt-2 max-w-lg">
          The four specialized technical pillars behind my software and research architectures.
        </p>
      </div>

      {/* 2x2 Grid of Sketched Paper Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {domains.map((dom, idx) => (
          <div
            key={dom.id}
            className={`relative bg-[#F5E1CD] border-[3.5px] border-[#3E3124] rounded-[26px] p-6 shadow-sketch flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sketchLg group ${dom.rotate}`}
          >
            {/* Washi Tape Strip */}
            <div
              className={`${dom.tapeColor} -top-3.5 ${
                idx % 2 === 0 ? "left-8 rotate-[-6deg]" : "right-8 rotate-[5deg]"
              }`}
            />

            {/* Paperclip */}
            <div className="absolute top-3 right-4 text-xl select-none pointer-events-none opacity-80 group-hover:scale-110 transition-transform">
              {idx % 2 === 0 ? "📎" : "📌"}
            </div>

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-2 mb-3 border-b-2 border-dashed border-[#3E3124]/30">
                <span className="font-gochi text-xs text-[#6D6358] font-bold">
                  PILLAR 0{idx + 1}
                </span>
                <span className="font-gochi text-xs px-3 py-0.5 rounded-full bg-[#E25543] text-white border border-[#3E3124] font-bold shadow-[1px_1px_0px_#3E3124]">
                  {dom.badge}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="flex items-start gap-2.5 mb-2">
                <span className="text-2xl">{dom.icon}</span>
                <h3 className="font-bree font-bold text-xl sm:text-2xl text-[#3E3124] group-hover:text-[#E25543] transition-colors leading-snug">
                  {dom.title}
                </h3>
              </div>

              <p className="font-gochi text-sm text-[#E25543] font-bold mb-3">
                {dom.tagline}
              </p>

              <p className="font-gochi text-base text-[#3E3124] leading-relaxed mb-4">
                {dom.description}
              </p>

              {/* Bullets on Warm Paper Inset */}
              <div className="space-y-1.5 font-gochi text-sm text-[#3E3124] bg-[#F7E8D8] p-3.5 rounded-xl border-2 border-dashed border-[#3E3124]/20 mb-4">
                {dom.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2">
                    <span className="text-[#E25543] font-bold">➔</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t-2 border-dashed border-[#3E3124]/30 flex items-center justify-between font-gochi text-sm text-[#3E3124]">
              <span className="text-[#6D6358]">Verified in Production &amp; Research</span>
              <a
                href="#projects"
                className="inline-flex items-center gap-1 text-[#E25543] font-bold hover:underline"
              >
                <span>View Systems</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
