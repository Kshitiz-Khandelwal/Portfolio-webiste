"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Pin, X, Sparkles, ExternalLink, ZoomIn } from "lucide-react";

export function WorkshopCollage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [zoomedPhoto, setZoomedPhoto] = useState<{
    src: string;
    venue: string;
    title: string;
    caption: string;
  } | null>(null);

  const allPhotos = [
    { src: "/events/vkit/vkit_1.jpeg", venue: "VKIT", title: "Hands-on Microcontroller Lab", caption: "Instructing 100+ students on Raspberry Pi Pico 2 (RP2350)", tilt: "-rotate-2" },
    { src: "/events/scjit/scjit_1.jpeg", venue: "SCJIT", title: "Live Hardware Demonstration", caption: "Sensor interfacing and motor driver diagnostics", tilt: "rotate-1" },
    { src: "/events/vkit/vkit_2.jpeg", venue: "VKIT", title: "Student Guidance & Firmware", caption: "Debugging FreeRTOS real-time telemetry on breadboards", tilt: "-rotate-1" },
    { src: "/events/scjit/scjit_3.jpeg", venue: "SCJIT", title: "Interactive Q&A Session", caption: "Exploring cyber-physical systems and IoT protocols", tilt: "rotate-2" },
    { src: "/events/bmsit/bmsit_1.jpeg", venue: "BMSIT&M", title: "IIC Innovation Promotions", caption: "Promoting national-level hackathons and technical builds", tilt: "-rotate-2" },
    { src: "/events/vkit/vkit_3.jpeg", venue: "VKIT", title: "Batch Group Interaction", caption: "Full auditorium workshop session at VKIT Bangalore", tilt: "rotate-1" },
    { src: "/events/scjit/scjit_2.jpeg", venue: "SCJIT", title: "Circuit Wiring & Actuation", caption: "Wiring L298N drivers and ultrasonic distance sensors", tilt: "-rotate-1" },
    { src: "/events/bmsit/bmsit_2.jpeg", venue: "BMSIT&M", title: "Campus Ideathon Review", caption: "Reviewing embedded architecture blueprints", tilt: "rotate-2" },
    { src: "/events/scjit/scjit_4.jpeg", venue: "SCJIT", title: "Hardware Verification Run", caption: "Final student prototype testing & certificate wrap-up", tilt: "-rotate-2" },
  ];

  const filtered = activeFilter === "all" ? allPhotos : allPhotos.filter((p) => p.venue.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="mt-10 bg-[#0E0E14] border-2 border-dashed border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.08)] relative overflow-hidden">
      {/* Background Subtle Pinboard Texture Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#22222A] relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Pin className="w-5 h-5 text-[#DC2626] fill-current rotate-45" />
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
              Workshop Idea Pinboard &amp; Photo Proof
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#9A9AA4]">
            Pinned memories from 3 engineering campuses • Click any photo to enlarge in full resolution.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {["all", "VKIT", "SCJIT", "BMSIT&M"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeFilter === tab
                  ? "bg-[#D4AF37] text-black shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                  : "bg-[#181822] text-slate-400 hover:text-white border border-[#2A2A38]"
              }`}
            >
              {tab === "all" ? "All Pinned Photos (9)" : `${tab} Campus`}
            </button>
          ))}
        </div>
      </div>

      {/* Tactile Pinboard Polaroid Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {filtered.map((item, idx) => (
          <div
            key={item.src}
            className={`group relative bg-[#181824] border border-[#2A2A38] hover:border-[#D4AF37] p-3 sm:p-3.5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 hover:-translate-y-2 hover:rotate-0 hover:z-20 cursor-pointer ${item.tilt}`}
            onClick={() => setZoomedPhoto(item)}
          >
            {/* 3D Red Push-Pin at Top Center */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#DC2626] border-2 border-[#7F1D1D] shadow-[0_3px_6px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center z-30 group-hover:scale-110 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            </div>

            {/* Photo Inside Polaroid Frame */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0A0A0C] border border-white/5 mb-3">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Zoom Prompt Badge */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-lg bg-black/80 border border-[#D4AF37] text-xs font-mono font-bold text-[#FFD700] flex items-center gap-1.5 shadow-lg">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge Photo</span>
                </span>
              </div>
            </div>

            {/* Handwritten / Polaroid Label Area */}
            <div className="pt-1 px-1">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="font-sans font-bold text-xs sm:text-sm text-white group-hover:text-[#FFD700] transition-colors leading-tight">
                  {item.title}
                </h4>
                <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#FFD700] border border-[#D4AF37]/30 shrink-0">
                  {item.venue}
                </span>
              </div>
              <p className="font-sans text-[11px] text-[#A1A1AA] line-clamp-1 leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Lightbox Zoom Modal */}
      {zoomedPhoto && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setZoomedPhoto(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#14141C] border-2 border-[#D4AF37] rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setZoomedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#1E1E28] border border-[#2A2A38] text-slate-400 hover:text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Red Push-Pin Graphic */}
            <div className="absolute top-2 left-6 flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#DC2626] border border-[#7F1D1D] shadow-xs" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#FFD700] font-bold">
                {zoomedPhoto.venue} Campus • Workshop Demonstration
              </span>
            </div>

            {/* Encircled Enlarged Image */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black border border-[#2A2A38] mt-6 mb-4">
              <Image
                src={zoomedPhoto.src}
                alt={zoomedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Detailed Description */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-[#22222A]">
              <div>
                <h3 className="font-sans font-bold text-base sm:text-lg text-white">
                  {zoomedPhoto.title}
                </h3>
                <p className="font-sans text-xs text-[#C7C7CF] mt-0.5">
                  {zoomedPhoto.caption}
                </p>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1CoQVyV7Sa2AYsYbT_DRMpaDwqQDjCcnu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D4AF37] text-black text-xs font-bold hover:bg-[#FFD700] transition-colors shrink-0"
              >
                <span>View Google Drive Folder</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
