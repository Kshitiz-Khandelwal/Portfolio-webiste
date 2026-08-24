"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ExternalLink, Cpu, HardDrive, Wifi, Sparkles, Terminal, CheckCircle2, ChevronRight, X, Loader2 } from "lucide-react";
import { WorkshopCollage } from "./WorkshopCollage";

export function OtherProjectsAndIoT() {
  const [activeVideoModal, setActiveVideoModal] = useState<{
    id: string;
    title: string;
    description: string;
    category: string;
    embedUrl: string;
    directUrl: string;
  } | null>(null);

  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [zoomedHardwarePhoto, setZoomedHardwarePhoto] = useState(false);

  const driveFolderUrl = "https://drive.google.com/drive/folders/1QIBLL-pikMP5LIY21x9AU-KE2u_0vBqn";

  const videoDemos = [
    {
      id: "mobile-controlled-iot",
      title: "Mobile-Controlled Cyber-Physical Robot",
      category: "IoT Firmware & RF Telemetry",
      tapeColor: "washi-tape-coral",
      description:
        "Real-time dual-motor drive control over local Wi-Fi / Bluetooth stream with sub-15ms actuation latency, fail-safe disconnect protocols, and hardware interrupt handling.",
      directUrl: "https://drive.google.com/file/d/13vgG0nkYFZ8nUp0Gkg3gGM8iBwO9TKKf/view?usp=drive_link",
      embedUrl: "https://drive.google.com/file/d/13vgG0nkYFZ8nUp0Gkg3gGM8iBwO9TKKf/preview",
      tags: ["ESP32", "L298N H-Bridge", "Wi-Fi Telemetry", "C++ Firmware"],
    },
    {
      id: "driver-drowsiness",
      title: "Real-Time Driver Negligence & Eye-Blink Edge Alert",
      category: "Edge Computer Vision & Safety",
      tapeColor: "washi-tape-sage",
      description:
        "Computer vision edge node computing Eye Aspect Ratio (EAR) and head-pose telemetry at 30 FPS, triggering instantaneous acoustic buzzers upon micro-sleep detection.",
      directUrl: "https://drive.google.com/file/d/13AXunM5ePO8qOm-RWkIuxlkMIIOvXp1l/view?usp=drive_link",
      embedUrl: "https://drive.google.com/file/d/13AXunM5ePO8qOm-RWkIuxlkMIIOvXp1l/preview",
      tags: ["OpenCV", "Eye Aspect Ratio (EAR)", "Edge AI", "Buzzer Alarm"],
    },
    {
      id: "hardware-vault",
      title: "Hardware Bench & Workshop Video Vault",
      category: "Multi-Campus Footage Archive",
      tapeColor: "washi-tape-mustard",
      description:
        "Access the complete Google Drive vault containing live testbench experiments, oscillograms, and workshop participant training sessions across 3 campuses.",
      directUrl: driveFolderUrl,
      embedUrl: "https://drive.google.com/file/d/13vgG0nkYFZ8nUp0Gkg3gGM8iBwO9TKKf/preview",
      tags: ["Google Drive Vault", "RP2350", "ESP32", "100+ Students"],
    },
  ];

  const zephyrProject = {
    title: "Zephyr RTOS Edge AI & IoT Lab",
    badge: "EMBEDDED & SYSTEMS LAB",
    tagline: "Deterministic Real-Time Firmware on Raspberry Pi Pico 2 (RP2350)",
    summary:
      "A hands-on embedded systems testbench exploring real-time multi-threading, hardware PWM motor drivers, sensor acquisition, and deterministic execution on the dual-core ARM Cortex-M33 RP2350 microcontroller.",
    highlights: [
      "Configured West build toolchain, devicetree overlays, and Kconfig parameters for the RP2350.",
      "Implemented cooperative multi-threading with thread-safe IPC ring buffers for sensor data acquisition.",
      "Developed PWM motor drivers and edge anomaly detection routines running with sub-10ms determinism.",
    ],
    tags: ["C / C++", "Zephyr RTOS", "ARM Cortex-M33", "RP2350", "West", "IoT Telemetry"],
    githubUrl: "https://github.com/Kshitiz-Khandelwal/Zephyr-Edge-AI-Kit",
  };

  const openVideo = (demo: typeof videoDemos[0]) => {
    setIsVideoLoading(true);
    setActiveVideoModal(demo);
  };

  return (
    <section id="other-projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Video Demonstrations Vault Banner */}
      <div className="bg-[#E9D3BB] border-[4px] border-[#3E3124] rounded-[28px] p-6 sm:p-8 mb-12 shadow-paper">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8DC96] border-2 border-[#3E3124] text-xs font-gochi font-bold text-[#3E3124] mb-2 shadow-xs -rotate-1">
              <Play className="w-3 h-3 fill-current text-[#E25543]" />
              <span>Interactive Hardware Video Vault</span>
            </div>
            <h3 className="font-bree font-bold text-3xl sm:text-4xl text-[#3E3124]">
              Working Embedded &amp; AI Video Proofs
            </h3>
            <p className="font-gochi text-base text-[#6D6358] mt-1 max-w-xl">
              Click on any video below to stream footage directly inside the website.
            </p>
          </div>

          {/* Primary Coral CTA Button */}
          <a
            href={driveFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-button sketch-button-filled shrink-0 text-base"
          >
            <Play className="w-4 h-4 fill-current mr-2" />
            <span>Open Google Drive Vault</span>
            <ExternalLink className="w-3.5 h-3.5 ml-2" />
          </a>
        </div>

        {/* 3 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoDemos.map((demo, idx) => (
            <div
              key={demo.id}
              onClick={() => openVideo(demo)}
              className="relative bg-[#F5E1CD] border-[3.5px] border-[#3E3124] rounded-2xl p-5 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sketchLg shadow-sketch cursor-pointer select-none"
              style={{
                transform: `rotate(${idx % 2 === 0 ? -0.8 : 0.8}deg)`,
              }}
            >
              <div className={`${demo.tapeColor} -top-3 left-6 rotate-[-5deg] !w-16 !h-4`} />

              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-dashed border-[#3E3124]/30">
                  <span className="font-gochi text-xs px-2.5 py-0.5 rounded-full bg-[#E25543] text-white border border-[#3E3124] font-bold">
                    {demo.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#E9D3BB] border-2 border-[#3E3124] flex items-center justify-center text-[#E25543] group-hover:scale-110 group-hover:bg-[#E25543] group-hover:text-white transition-all shadow-xs">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                </div>

                <h4 className="font-bree font-bold text-lg text-[#3E3124] group-hover:text-[#E25543] transition-colors mb-2 leading-snug">
                  {demo.title}
                </h4>

                <p className="font-gochi text-sm text-[#3E3124] leading-relaxed mb-4">
                  {demo.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-dashed border-[#3E3124]/30 mb-3">
                  {demo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-[#262626] text-[#D4BAA3] border border-[#5B5248]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 font-gochi text-sm text-[#E25543] font-bold group-hover:underline">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Click to Watch Footage In-Page ➔</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct In-Page Google Drive Video Player Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#F5E1CD] border-[4px] border-[#3E3124] rounded-[28px] p-6 shadow-paper overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Controls */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-dashed border-[#3E3124]/30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E25543] animate-pulse" />
                <h3 className="font-bree font-bold text-lg text-[#3E3124]">
                  {activeVideoModal.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeVideoModal.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#E9D3BB] border-2 border-[#3E3124] font-gochi text-sm text-[#3E3124] hover:text-[#E25543]"
                >
                  <span>Open in Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="p-1.5 rounded-xl bg-[#E9D3BB] border-2 border-[#3E3124] text-[#3E3124] hover:bg-[#E25543] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Video Frame */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#1F1D1B] border-2 border-[#3E3124]">
              {isVideoLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1F1D1B] z-10 space-y-3">
                  <Loader2 className="w-8 h-8 text-[#E25543] animate-spin" />
                  <span className="font-mono text-xs text-[#F5E1CD]">
                    Streaming footage from Google Drive Vault...
                  </span>
                </div>
              )}

              <iframe
                src={activeVideoModal.embedUrl}
                title={activeVideoModal.title}
                allow="autoplay; fullscreen"
                allowFullScreen
                loading="eager"
                onLoad={() => setIsVideoLoading(false)}
                className="w-full h-full border-0 relative z-20"
              />
            </div>

            {/* Description Footer */}
            <div className="pt-3 mt-3 border-t-2 border-dashed border-[#3E3124]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-gochi">
              <p className="text-sm text-[#3E3124]">
                {activeVideoModal.description}
              </p>
              <span className="text-xs text-[#E25543] shrink-0 font-bold">
                {activeVideoModal.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Workshop Photo Collage */}
      <WorkshopCollage />

      {/* Featured Hardware Spotlight: Zephyr Edge AI Lab */}
      <div className="relative bg-[#F5E1CD] border-[3.5px] border-[#3E3124] rounded-[28px] p-6 sm:p-8 mt-12 mb-8 shadow-paper">
        <div className="washi-tape-mustard -top-3.5 left-12 rotate-[-4deg]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Project Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2 pb-2 border-b-2 border-dashed border-[#3E3124]/30">
              <span className="font-gochi text-xs px-3 py-0.5 rounded-full bg-[#E25543] text-white border border-[#3E3124] font-bold">
                {zephyrProject.badge}
              </span>
              <span className="font-gochi text-xs text-[#6D6358]">
                ARM Cortex-M33 Dual-Core
              </span>
            </div>

            <h3 className="font-bree font-bold text-3xl text-[#3E3124]">
              {zephyrProject.title}
            </h3>
            <p className="font-gochi text-base text-[#E25543] font-bold">
              {zephyrProject.tagline}
            </p>

            <p className="font-gochi text-base text-[#3E3124] leading-relaxed">
              {zephyrProject.summary}
            </p>

            {/* Highlights with Coral Checkmarks */}
            <div className="space-y-2 pt-2">
              {zephyrProject.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 font-gochi text-base text-[#3E3124]">
                  <CheckCircle2 className="w-5 h-5 text-[#E25543] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-dashed border-[#3E3124]/30">
              {zephyrProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#262626] text-[#D4BAA3] border border-[#5B5248]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <a
                href={zephyrProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-button sketch-button-filled text-sm"
              >
                <svg className="w-4 h-4 fill-current mr-2" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View Zephyr RTOS Repository</span>
              </a>
            </div>
          </div>

          {/* Right: RP2350 Hardware Photo */}
          <div className="lg:col-span-5">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E9D3BB] border-[3px] border-[#3E3124] shadow-sketch group cursor-pointer transition-all duration-300"
              onClick={() => setZoomedHardwarePhoto(true)}
            >
              <Image
                src="/rp2350_iot_board.jpeg"
                alt="RP2350 Hardware Lab Setup"
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#1F1D1B]/90 p-2.5 flex items-center justify-between pointer-events-none">
                <div>
                  <span className="font-bree text-xs text-[#F5E1CD] font-semibold block">
                    RP2350 Hardware Lab Board
                  </span>
                  <span className="font-mono text-[10px] text-[#D4BAA3]">
                    Breadboard • L298N Motor Driver • RP2350
                  </span>
                </div>
                <span className="font-gochi text-xs bg-[#E25543] px-2 py-0.5 rounded text-white font-bold">
                  🔍 Zoom
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomedHardwarePhoto && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setZoomedHardwarePhoto(false)}
        >
          <button
            onClick={() => setZoomedHardwarePhoto(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#F5E1CD] border-2 border-[#3E3124] text-[#3E3124] hover:bg-[#E25543] hover:text-white transition-colors shadow-sketch"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] overflow-hidden rounded-2xl border-[4px] border-[#3E3124] bg-[#1F1D1B] shadow-paper">
            <Image
              src="/rp2350_iot_board.jpeg"
              alt="RP2350 Hardware Lab Setup High Res"
              fill
              className="object-contain p-2"
            />
          </div>
        </div>
      )}
    </section>
  );
}
