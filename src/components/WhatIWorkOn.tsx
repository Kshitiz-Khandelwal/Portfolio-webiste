"use client";

import React from "react";
import { Brain, ShieldCheck, Cpu, Code2, Server, Laptop } from "lucide-react";

export function WhatIWorkOn() {
  const domains = [
    {
      id: "backend-engineering",
      title: "Backend & Distributed Systems",
      badge: "Java & Spring Boot @ Zarthi",
      icon: Server,
      color: "#FFD700",
      description:
        "Building production backend services and microservices architectures using Java and Spring Boot (currently interning at Zarthi), asynchronous FastAPI microservices, and optimized SQL schemas.",
      topics: ["Java", "Spring Boot", "Microservices", "REST API Design", "PostgreSQL / SQL"],
    },
    {
      id: "embedded-iot",
      title: "Embedded Systems & IoT",
      badge: "Zephyr RTOS & RP2350",
      icon: Cpu,
      color: "#38BDF8",
      description:
        "Firmware development on ARM Cortex-M33 (Raspberry Pi Pico 2 / RP2350) and ESP32, deterministic FreeRTOS task scheduling, UART/I2C/SPI sensor interfaces, and live telemetry streams.",
      topics: ["Zephyr RTOS", "Raspberry Pi Pico 2", "ESP32 FreeRTOS", "Sensor Telemetry", "C / C++"],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Threat Defense",
      badge: "Network & DNS Defense",
      icon: ShieldCheck,
      color: "#DC143C",
      description:
        "Sub-millisecond DNS threat filtering (DNS Shield), algorithmic DGA domain attribution, Shannon entropy scoring, and two-stage network intrusion detection engines.",
      topics: ["DGA Malware Defense", "DNS Tunneling", "TON-IoT IDS", "Wire-Speed Packet Filters"],
    },
    {
      id: "applied-ai-research",
      title: "Applied AI / ML & Research",
      badge: "IIIT Trichy Research Fellow",
      icon: Brain,
      color: "#10B981",
      description:
        "Privacy-preserving Split Federated Learning on IoMT networks (Research Intern at IIIT Trichy), time-series link fault forecasting (ISRO Hackathon Finalist), and TreeSHAP explainability.",
      topics: ["Split Federated Learning", "IoMT Privacy", "Time-Series Prophet", "TreeSHAP Explainability"],
    },
  ];

  return (
    <section id="what-i-work-on" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#FFD700] font-bold mb-3">
            Core Technical Focus
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            What I Work On
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9A9AA4] mt-1 max-w-xl">
            My primary technical domains spanning production backend architectures, embedded firmware, cybersecurity defense, and applied research.
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
                  <span className="font-mono text-[10px] uppercase text-[#D4AF37] tracking-wider px-2 py-0.5 rounded-full bg-[#18181F] border border-[#D4AF37]/30 font-bold">
                    {d.badge}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-white group-hover:text-[#FFD700] transition-colors mb-2">
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
