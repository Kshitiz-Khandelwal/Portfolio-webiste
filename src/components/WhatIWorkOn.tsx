"use client";

import React from "react";
import { Brain, ShieldCheck, Cpu, Code2, Server, Laptop } from "lucide-react";

export function WhatIWorkOn() {
  const domains = [
    {
      id: "backend-engineering",
      page: "PAGE 01 // BACKEND",
      title: "Backend & Distributed Systems",
      badge: "Java & Spring Boot @ Zarthi",
      icon: Server,
      badgeClass: "badge-blue",
      description:
        "Building production backend services and microservices architectures using Java and Spring Boot (currently interning at Zarthi), asynchronous FastAPI microservices, and optimized SQL schemas.",
      topics: ["Java", "Spring Boot", "Microservices", "REST API Design", "PostgreSQL / SQL"],
    },
    {
      id: "embedded-iot",
      page: "PAGE 02 // EMBEDDED",
      title: "Embedded Systems & IoT",
      badge: "Zephyr RTOS & RP2350",
      icon: Cpu,
      badgeClass: "badge-neutral",
      description:
        "Firmware development on ARM Cortex-M33 (Raspberry Pi Pico 2 / RP2350) and ESP32, deterministic FreeRTOS task scheduling, UART/I2C/SPI sensor interfaces, and live telemetry streams.",
      topics: ["Zephyr RTOS", "Raspberry Pi Pico 2", "ESP32 FreeRTOS", "Sensor Telemetry", "C / C++"],
    },
    {
      id: "cybersecurity",
      page: "PAGE 03 // SECURITY",
      title: "Cybersecurity & Threat Defense",
      badge: "Network & DNS Defense",
      icon: ShieldCheck,
      badgeClass: "badge-neutral",
      description:
        "Sub-millisecond DNS threat filtering (DNS Shield), algorithmic DGA domain attribution, Shannon entropy scoring, and two-stage network intrusion detection engines.",
      topics: ["DGA Malware Defense", "DNS Tunneling", "TON-IoT IDS", "Wire-Speed Packet Filters"],
    },
    {
      id: "applied-ai-research",
      page: "PAGE 04 // AI RESEARCH",
      title: "Applied AI / ML & Research",
      badge: "IIIT Trichy Research Fellow",
      icon: Brain,
      badgeClass: "badge-blue",
      description:
        "Privacy-preserving Split Federated Learning on IoMT networks (Research Intern at IIIT Trichy), time-series link fault forecasting (ISRO Hackathon Finalist), and TreeSHAP explainability.",
      topics: ["Split Federated Learning", "IoMT Privacy", "Time-Series Prophet", "TreeSHAP Explainability"],
    },
  ];

  return (
    <section id="what-i-work-on" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg badge-blue text-[11px] font-mono uppercase tracking-wider font-semibold mb-3">
            Core Technical Focus
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#111827] tracking-tight">
            What I Work On
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6B7280] mt-1 max-w-xl">
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
              className="relative bg-white border border-[#E5E7EB] hover:border-[#2563EB] rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-clean-md shadow-clean flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#F3F4F6]">
                  <span className="font-mono text-[10px] text-[#6B7280] font-semibold">
                    {d.page}
                  </span>
                  <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold ${d.badgeClass}`}>
                    {d.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center border border-[#BFDBFE] bg-[#EFF6FF] text-[#2563EB] shrink-0 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#111827] group-hover:text-[#2563EB] transition-colors leading-tight">
                    {d.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-[#4B5563] leading-relaxed mb-6">
                  {d.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#F3F4F6]">
                  {d.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium badge-neutral"
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
