"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Image as ImageIcon, X, ExternalLink, Users, ChevronLeft, ChevronRight } from "lucide-react";

export function WorkshopCollage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const allPhotos = [
    { src: "/events/vkit/vkit_1.jpeg", venue: "VKIT", title: "Hands-on Microcontroller Lab", caption: "Instructing 100+ students on Raspberry Pi Pico 2 (RP2350)" },
    { src: "/events/scjit/scjit_1.jpeg", venue: "SCJIT", title: "Live Hardware Demonstration", caption: "Sensor interfacing and motor driver diagnostics" },
    { src: "/events/vkit/vkit_2.jpeg", venue: "VKIT", title: "Student Guidance & Firmware", caption: "Debugging FreeRTOS real-time telemetry on breadboards" },
    { src: "/events/scjit/scjit_3.jpeg", venue: "SCJIT", title: "Interactive Q&A Session", caption: "Exploring cyber-physical systems and IoT protocols" },
    { src: "/events/bmsit/bmsit_1.jpeg", venue: "BMSIT&M", title: "IIC Innovation Promotions", caption: "Promoting national-level hackathons and technical builds" },
    { src: "/events/vkit/vkit_3.jpeg", venue: "VKIT", title: "Batch Group Interaction", caption: "Full auditorium workshop session at VKIT Bangalore" },
    { src: "/events/scjit/scjit_2.jpeg", venue: "SCJIT", title: "Circuit Wiring & Actuation", caption: "Wiring L298N drivers and ultrasonic distance sensors" },
    { src: "/events/bmsit/bmsit_2.jpeg", venue: "BMSIT&M", title: "Campus Ideathon Review", caption: "Reviewing embedded architecture blueprints" },
    { src: "/events/scjit/scjit_4.jpeg", venue: "SCJIT", title: "Hardware Verification Run", caption: "Final student prototype testing & certificate wrap-up" },
  ];

  const filtered = activeFilter === "all" ? allPhotos : allPhotos.filter((p) => p.venue.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="mt-8 bg-[#0E0E14] border border-[#22222A] rounded-3xl p-6 sm:p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-[#22222A]">
        <div>
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-[#FFD700]" />
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
              Animated Workshop &amp; Outreach Photo Collage
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#8A8A94] mt-0.5">
            Photographic proof from 3 campuses • 100+ engineering students trained in embedded systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {["all", "VKIT", "SCJIT", "BMSIT&M"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                activeFilter === tab
                  ? "bg-[#D4AF37] text-black shadow-xs"
                  : "bg-[#181822] text-slate-400 hover:text-white border border-[#2A2A38]"
              }`}
            >
              {tab === "all" ? "All Photos (9)" : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Animated Collage Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((item, idx) => (
          <div
            key={item.src}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#14141E] border border-[#2A2A38] hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.15)] cursor-pointer"
            onClick={() => setZoomedImage(item.src)}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover group-hover:scale-108 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-between p-3.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-[#D4AF37] text-black shadow-xs">
                  {item.venue} CAMPUS
                </span>
                <span className="text-[10px] font-mono text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to Expand 🔍
                </span>
              </div>

              <div>
                <h4 className="font-sans font-bold text-xs sm:text-sm text-white group-hover:text-[#FFD700] transition-colors leading-tight">
                  {item.title}
                </h4>
                <p className="font-sans text-[10px] text-slate-300 mt-0.5 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#1E1E28] border border-[#D4AF37]/50 text-white hover:text-[#FFD700] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[16/10] overflow-hidden rounded-2xl border-2 border-[#D4AF37]">
            <Image
              src={zoomedImage}
              alt="Zoomed Event Photo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
