"use client";

import React, { useState } from "react";
import Image from "next/image";
import { otherProjects } from "@/data/projects";
import { Cpu, ExternalLink, Play, Video, CheckCircle2, ShieldCheck, Sparkles, ZoomIn, X } from "lucide-react";
import { WorkshopCollage } from "./WorkshopCollage";

export function OtherProjectsAndIoT() {
  const [zoomedHardwarePhoto, setZoomedHardwarePhoto] = useState<boolean>(false);
  const [activeVideoModal, setActiveVideoModal] = useState<{
    id: string;
    title: string;
    embedUrl: string;
    directUrl: string;
    category: string;
    description: string;
  } | null>(null);

  const zephyrProject = otherProjects.find((p) => p.id === "zephyr-pico-lab") || otherProjects[0];
  const remaining = otherProjects.filter((p) => p.id !== "zephyr-pico-lab");

  const driveFolderUrl = "https://drive.google.com/drive/folders/1QIBLL-pikMP5LIY21x9AU-KE2u_0vBqn";

  const videoDemos = [
    {
      id: "driver-drowsiness",
      title: "Driver Drowsiness Detection System",
      category: "Computer Vision & IoT Telemetry",
      description: "Real-time facial landmark tracking and Eye Aspect Ratio (EAR) calculation triggering instant buzzer alerts and telemetry stream when drowsiness thresholds are exceeded.",
      tags: ["OpenCV", "Python", "Buzzer Alarm", "Hardware Hook"],
      embedUrl: "https://drive.google.com/file/d/13AXunM5ePO8qOm-RWkIuxlkMIIOvXp1l/preview",
      directUrl: "https://drive.google.com/file/d/13AXunM5ePO8qOm-RWkIuxlkMIIOvXp1l/view?usp=drive_link",
    },
    {
      id: "mobile-controlled",
      title: "Mobile Controlled IoT System",
      category: "Wireless Actuation & Sockets",
      description: "Mobile web dashboard and real-time socket communication controlling dual-motor drives and sensor feedback over local Wi-Fi / Bluetooth channels with zero lag.",
      tags: ["ESP32", "WebSockets", "Motor Driver L298N", "Mobile UI"],
      embedUrl: "https://drive.google.com/file/d/13vgG0nkYFZ8nUp0Gkg3gGM8iBwO9TKKf/preview",
      directUrl: "https://drive.google.com/file/d/13vgG0nkYFZ8nUp0Gkg3gGM8iBwO9TKKf/view?usp=drive_link",
    },
    {
      id: "iot-kit",
      title: "Embedded IoT Prototyping Kit",
      category: "Edge AI & Microcontrollers",
      description: "Hands-on cyber-physical hardware lab featuring RP2350 / ESP32 sensor integration, analog reading pipelines, and firmware routines built for student outreach.",
      tags: ["RP2350", "FreeRTOS", "Sensor Mesh", "100+ Students"],
      embedUrl: "https://drive.google.com/file/d/13vgG0nkYFZ8nUp0Gkg3gGM8iBwO9TKKf/preview", // Fallback to mobile IoT preview
      directUrl: driveFolderUrl,
    },
  ];

  return (
    <section id="iot-lab" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#FFD700] font-bold mb-3">
            Hardware &amp; IoT Telemetry
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Embedded Systems &amp; Hardware Lab
          </h2>
        </div>
        <p className="font-sans text-sm text-[#9A9AA4] max-w-md">
          Hardware prototyping on Raspberry Pi Pico 2 (RP2350), real-time IoT actuation, and hands-on demonstrations.
        </p>
      </div>

      {/* Featured Hardware Video Vault Box */}
      <div id="iot-videos" className="bg-[#121218] border-2 border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 mb-12 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.1)] relative overflow-hidden">
        {/* Top Glow Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#22222A]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Video className="w-5 h-5 text-[#FFD700]" />
              <h3 className="font-sans font-bold text-2xl text-white">
                Live Hardware Demonstrations &amp; Video Vault
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#E2E8F0]">
              Recorded laboratory footage. Click any video to play directly on this page or view on Google Drive.
            </p>
          </div>

          <a
            href={driveFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs sm:text-sm hover:bg-[#FFD700] hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] shrink-0"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Open Google Drive Vault</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoDemos.map((demo) => (
            <div
              key={demo.id}
              onClick={() => setActiveVideoModal(demo)}
              className="bg-[#181822] border border-[#2A2A38] hover:border-[#D4AF37] rounded-2xl p-5 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer select-none"
            >
              <div>
                {/* Video Card Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#D4AF37]/15 text-[#FFD700] border border-[#D4AF37]/30 font-bold">
                    {demo.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0A0A0C] border border-[#D4AF37]/50 flex items-center justify-center text-[#FFD700] group-hover:scale-115 group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-sm">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>

                <h4 className="font-sans font-bold text-base text-white group-hover:text-[#FFD700] transition-colors mb-2">
                  {demo.title}
                </h4>

                <p className="font-sans text-xs text-[#CBD5E1] leading-relaxed mb-4">
                  {demo.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#22222A] mb-4">
                  {demo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#101016] text-[10px] font-mono text-[#E2E8F0] border border-[#22222A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Play In-Page Button */}
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD700] group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Click to Watch Footage In-Page</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct In-Page Google Drive Video Player Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#14141C] border-2 border-[#D4AF37] rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Controls */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#22222A]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <h3 className="font-sans font-bold text-base sm:text-lg text-white">
                  {activeVideoModal.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeVideoModal.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1E1E28] border border-[#2A2A38] text-xs font-mono text-[#FFD700] hover:text-white transition-colors"
                >
                  <span>Google Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="p-2 rounded-xl bg-[#1E1E28] border border-[#2A2A38] text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Google Drive Video Player Frame */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black border border-[#22222A]">
              <iframe
                src={activeVideoModal.embedUrl}
                title={activeVideoModal.title}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Description Footer */}
            <div className="pt-3 mt-3 border-t border-[#22222A] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="font-sans text-xs text-[#CBD5E1]">
                {activeVideoModal.description}
              </p>
              <span className="font-mono text-[10px] text-[#D4AF37] shrink-0 font-bold">
                {activeVideoModal.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tactile Idea Pinboard Workshop Photo Collage */}
      <WorkshopCollage />

      {/* Featured Hardware Spotlight: Zephyr Edge AI Lab */}
      <div className="bg-[#121216] border border-[#22222A] rounded-3xl p-6 sm:p-8 mt-12 mb-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Project Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#FFD700] font-bold">
                {zephyrProject.badge}
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                ARM Cortex-M33 Dual-Core
              </span>
            </div>

            <h3 className="font-sans font-bold text-2xl text-white">
              {zephyrProject.title}
            </h3>
            <p className="font-mono text-xs text-[#FFD700] font-semibold">
              {zephyrProject.tagline}
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
              {zephyrProject.summary}
            </p>

            {/* Highlights */}
            <div className="space-y-2 pt-2">
              {zephyrProject.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3">
              {zephyrProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-[#181822] border border-[#22222A] text-[11px] font-mono text-[#E2E8F0]"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#181822] border border-[#22222A] hover:border-[#D4AF37] text-xs font-mono text-slate-200 hover:text-[#FFD700] shadow-xs transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View Zephyr RTOS Repository</span>
              </a>
            </div>
          </div>

          {/* Right: Real Rotated RP2350 Hardware Photo */}
          <div className="lg:col-span-5">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0E0E12] border-2 border-[#2A2A38] hover:border-[#D4AF37] shadow-xl group cursor-pointer transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
              onClick={() => setZoomedHardwarePhoto(true)}
            >
              <Image
                src="/rp2350_iot_board.jpeg"
                alt="RP2350 Hardware Lab Setup"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom Tag Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 text-left">
                <span className="font-mono text-xs text-[#FFD700] font-bold block">
                  RP2350 Hardware Lab Board
                </span>
                <span className="font-mono text-[10px] text-[#E2E8F0] mt-0.5 block">
                  Breadboard • L298N Motor Driver • Raspberry Pi Pico 2
                </span>
              </div>

              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 border border-[#D4AF37]/60 text-[10px] font-mono text-[#FFD700] font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <ZoomIn className="w-3 h-3" />
                <span>Zoom</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox for RP2350 Hardware Board */}
      {zoomedHardwarePhoto && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setZoomedHardwarePhoto(false)}
        >
          <button
            onClick={() => setZoomedHardwarePhoto(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#1E1E28] border border-[#D4AF37]/50 text-white hover:text-[#FFD700] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] overflow-hidden rounded-2xl border-2 border-[#D4AF37]">
            <Image
              src="/rp2350_iot_board.jpeg"
              alt="RP2350 Hardware Lab Board Fullscreen"
              fill
              className="object-contain bg-black"
            />
          </div>
        </div>
      )}

      {/* Grid of Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {remaining.map((proj) => (
          <div
            key={proj.id}
            className="bg-[#121216] border border-[#22222A] hover:border-[#D4AF37] rounded-3xl p-6 flex flex-col justify-between shadow-xs transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#FFD700] border border-[#D4AF37]/30 font-bold">
                  {proj.badge}
                </span>
              </div>

              <h3 className="font-sans font-bold text-lg text-white mb-1">
                {proj.title}
              </h3>
              <p className="font-mono text-xs text-[#FFD700] mb-3">
                {proj.tagline}
              </p>
              <p className="font-sans text-xs text-[#CBD5E1] leading-relaxed mb-4">
                {proj.summary}
              </p>

              <div className="space-y-1.5 mb-4">
                {proj.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                    <span className="text-[#D4AF37] font-bold">●</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4 pt-2 border-t border-[#22222A]">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-[#181822] border border-[#22222A] text-[10px] font-mono text-[#E2E8F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#FFD700] hover:underline"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-white"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
