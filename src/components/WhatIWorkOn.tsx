"use client";

import React, { useState } from "react";
import { Server, Shield, Cpu, Brain, ArrowRight, Zap, CheckCircle2, Terminal, Code2 } from "lucide-react";

export function WhatIWorkOn() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const domains = [
    {
      id: "backend-systems",
      title: "Backend & Distributed Systems",
      subtitle: "Production Java & Spring Boot Microservices",
      icon: <Server className="w-5 h-5" />,
      color: "#F0A89C",
      border: "#E25543",
      role: "Intern @ Zarthi Technologies",
      summary:
        "Architecting resilient REST microservices in Java and Spring Boot. Building asynchronous worker pools, circuit breakers, and zero-copy packet ingestion pipelines designed for continuous high throughput.",
      keyCapabilities: [
        "Thread-pool tuning, non-blocking I/O & asynchronous event loops",
        "Connection pooling, query plan optimization & database indexing",
        "Resilience4j circuit breakers, retry backoffs & graceful degradation",
      ],
      telemetry: {
        latency: "< 25ms P99",
        concurrency: "5,000 QPS",
        stack: "Java 21 • Spring Boot • PostgreSQL • Redis",
      },
      ascii: `[ Client Requests ]
       │  (HTTP / JSON)
       ▼
[ Spring API Gateway ] ──► [ Redis Token Bucket Rate Limiter ]
       │
       ▼
[ Async Thread Pool ] ──► [ Zero-Copy Event Ingestion Buffer ]
       │
       ▼
[ PostgreSQL / Prisma ] ──► [ Read Replicas & Connection Pool ]`,
    },
    {
      id: "ai-federated-learning",
      title: "Privacy-Preserving & Edge AI",
      subtitle: "Split Federated Learning on Medical IoMT Telemetry",
      icon: <Brain className="w-5 h-5" />,
      color: "#F8DC96",
      border: "#9A7E30",
      role: "Research Fellow @ IIIT Tiruchirappalli",
      summary:
        "Formulating distributed AI architectures where raw patient data never leaves edge sensors. Training global neural models across decentralized hospital nodes while defending against gradient inversion attacks.",
      keyCapabilities: [
        "NoPeek distance correlation loss preventing intermediate reconstruction",
        "Spiking Neural Network cut-layers with sub-1.2ms inference latency floors",
        "Benchmarked on 100k+ sample physiological datasets (PTB-XL & Ton-IoT)",
      ],
      telemetry: {
        latency: "1.18ms Floor",
        samples: "100,000+ Datapoints",
        stack: "PyTorch • SNNs • NoPeek Loss • Flower FL",
      },
      ascii: `[ Medical Sensor Node (Client) ]
       │  (ECG / PPG Telemetry)
       ▼
[ Private Feature Extraction Cut-Layer ] ──► [ NoPeek Loss Penalty ]
       │  (Smashed Latent Gradients only)
       ▼
[ Encrypted TLS Stream ] ──────────────► [ Central Server Aggregator ]
                                                │
                                                ▼
                                         [ FedAvg Global Update ]`,
    },
    {
      id: "cybersecurity-forensics",
      title: "Network Threat Intel & SOC Forensics",
      subtitle: "Wire-Speed DGA Detection & Model Explainability",
      icon: <Shield className="w-5 h-5" />,
      color: "#B2C4B0",
      border: "#5C755A",
      role: "DNS Shield AI Platform • SIH Scope",
      summary:
        "Developing real-time packet inspection engines combining fast heuristic filters with TreeSHAP-explainable machine learning classifiers to intercept malicious botnet beaconing before name resolution.",
      keyCapabilities: [
        "Fast lexical n-gram entropy parsing with sub-1.2ms wire-speed budgets",
        "TreeSHAP waterfall forensics attributing DGA algorithmic botnet families",
        "Zero dependency on lagging static blocklist databases",
      ],
      telemetry: {
        latency: "< 1.2ms / DNS Query",
        throughput: "100,000 req/s",
        stack: "FastAPI • LightGBM • TreeSHAP • Scapy",
      },
      ascii: `[ Inbound DNS Packet Query ]
       │
       ▼
[ Heuristic Shannon Entropy Pre-Filter ] ──► (Whitelisted: Bypass)
       │  (Flagged Suspicious)
       ▼
[ LightGBM Lexical n-gram Classifier ]
       │
       ├──► [ TreeSHAP Feature Attribution: SHAP Score > 0.85 ]
       │
       ▼
[ Zero-Copy Socket Intercept: SINKHOLE & Host Quarantine ]`,
    },
    {
      id: "embedded-iot",
      title: "Deterministic Embedded RTOS",
      icon: <Cpu className="w-5 h-5" />,
      color: "#D2C4D9",
      border: "#7B6285",
      role: "Hardware & Firmware Lab",
      summary:
        "Writing deterministic bare-metal C/C++ and Zephyr RTOS firmware for ARM Cortex-M33 microcontrollers (RP2350) with sensor telemetry, thread-safe ring buffers, and hardware PWM motor actuation.",
      keyCapabilities: [
        "West build toolchain, devicetree overlays, and custom Kconfig drivers",
        "Cooperative multi-threading with thread-safe IPC ring buffers",
        "Real-time PWM motor drivers and edge anomaly acoustic alerts",
      ],
      telemetry: {
        latency: "< 10ms Deterministic",
        hardware: "RP2350 Dual Cortex-M33",
        stack: "C/C++ • Zephyr RTOS • FreeRTOS • West",
      },
      ascii: `[ Dual-Core ARM Cortex-M33 (RP2350) ]
       │
       ├──► Core 0: [ Zephyr RTOS Cooperative Thread Pool ]
       │                 │
       │                 ├── Thread A: Ultrasonic Distance Sampling
       │                 └── Thread B: Thread-Safe Ring Buffer FIFO
       │
       └──► Core 1: [ Hardware PWM L298N Motor Actuation & Anomaly Buzzer ]`,
    },
  ];

  const current = domains[activeTab];

  return (
    <section id="domains" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4BAA3] mb-2">
          Specialized Engineering Pillars
        </span>
        <h2 className="font-bree text-5xl sm:text-6xl md:text-7xl text-[#F5E1CD]">
          What I Work On
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#D4BAA3] mt-2 max-w-xl">
          Select any architectural domain below to inspect its technical implementation, telemetry budgets, and system pipeline.
        </p>
      </div>

      {/* Interactive Architectural Workstation Container */}
      <div className="bg-[#E9D3BB] border-[4px] border-[#2B2015] rounded-[28px] p-6 sm:p-8 shadow-paper relative overflow-hidden">
        <div className="washi-tape-coral -top-3.5 left-10 rotate-[-5deg]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Domain Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {domains.map((dom, idx) => {
              const isSelected = idx === activeTab;

              return (
                <button
                  key={dom.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full p-4 rounded-2xl border-[3px] border-[#2B2015] text-left transition-all duration-200 flex items-start gap-3.5 cursor-pointer ${
                    isSelected
                      ? "bg-[#F5E1CD] shadow-sketch translate-x-1 border-[#E25543]"
                      : "bg-[#F7E8D8] hover:bg-[#F5E1CD] opacity-80 hover:opacity-100"
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-xl border-2 border-[#2B2015] flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: dom.color, color: "#2B2015" }}
                  >
                    {dom.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#6B5B4D]">
                        PILLAR 0{idx + 1}
                      </span>
                      {isSelected && (
                        <span className="font-sans text-[11px] px-2 py-0.5 rounded-full bg-[#E25543] text-white font-bold">
                          ACTIVE VIEW
                        </span>
                      )}
                    </div>
                    <h3 className="font-bree font-bold text-base text-[#2B2015] leading-snug">
                      {dom.title}
                    </h3>
                    <p className="font-sans text-xs text-[#E25543] font-semibold mt-0.5 truncate">
                      {dom.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Domain Architecture & Pipeline Visualizer */}
          <div className="lg:col-span-7 bg-[#F5E1CD] border-[3.5px] border-[#2B2015] rounded-2xl p-6 shadow-sketch flex flex-col justify-between min-h-[460px]">
            <div>
              {/* Header Stamp */}
              <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b-2 border-dashed border-[#2B2015]/30 gap-2">
                <div>
                  <span className="font-sans text-xs px-3 py-0.5 rounded-full bg-[#2B2015] text-[#F5E1CD] font-mono font-bold">
                    {current.role}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#2B2015]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>VERIFIED PIPELINE</span>
                </div>
              </div>

              {/* Title & Narrative */}
              <h3 className="font-bree font-bold text-2xl text-[#2B2015] mb-1">
                {current.title}
              </h3>
              <p className="font-sans text-sm text-[#2B2015] leading-relaxed mb-4">
                {current.summary}
              </p>

              {/* Key Capabilities */}
              <div className="space-y-1.5 bg-[#F7E8D8] p-3.5 rounded-xl border-2 border-dashed border-[#2B2015]/20 mb-4 font-sans text-xs sm:text-sm text-[#2B2015]">
                {current.keyCapabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E25543] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* ASCII Architecture Flowchart */}
              <div className="mb-4">
                <span className="font-sans text-xs uppercase tracking-wider font-bold text-[#6B5B4D] block mb-1.5">
                  Engineered Execution Flow:
                </span>
                <pre className="p-3.5 rounded-xl bg-[#181615] text-[#F5E1CD] border-2 border-[#2B2015] font-mono text-[10.5px] sm:text-xs overflow-x-auto leading-tight shadow-xs whitespace-pre">
                  {current.ascii}
                </pre>
              </div>
            </div>

            {/* Verified Telemetry Strip */}
            <div className="pt-3 border-t-2 border-dashed border-[#2B2015]/30 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <span className="text-[#E25543] font-bold">
                {current.telemetry.stack}
              </span>
              <a
                href="#projects"
                className="inline-flex items-center gap-1 text-[#2B2015] hover:text-[#E25543] font-bold font-sans transition-colors"
              >
                <span>View Full Systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
