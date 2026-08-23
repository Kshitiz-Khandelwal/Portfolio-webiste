"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, X, MapPin } from "lucide-react";

export function WorkshopCollage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [zoomedPhoto, setZoomedPhoto] = useState<{
    src: string;
    venue: string;
    title: string;
    caption: string;
  } | null>(null);

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
    <div className="mt-10 bg-[#FDF8F2] border border-[#E0C9AE] rounded-3xl p-6 sm:p-10 shadow-warm relative overflow-hidden">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E0C9AE] relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#3A2E22]">
              Workshop Idea Gallery &amp; Photo Documentation
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#8A7A63]">
            Documented sessions across 3 engineering campuses • Click any photo to enlarge in full resolution.
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
                  ? "bg-[#E8846B] text-[#FAF3E8] shadow-xs"
                  : "bg-[#F3D9C4] text-[#5C4D3C] hover:text-[#3A2E22] border border-[#E0C9AE]"
              }`}
            >
              {tab === "all" ? "All Photos (9)" : `${tab} Campus`}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {filtered.map((item) => (
          <div
            key={item.src}
            className="group relative bg-[#FAF3E8] border border-[#E0C9AE] hover:border-[#E8846B] p-3.5 rounded-2xl shadow-warm hover:shadow-warmLg transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
            onClick={() => setZoomedPhoto(item)}
          >
            {/* Photo Frame */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F3D9C4] border border-[#E0C9AE] mb-3">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Zoom Prompt Badge */}
              <div className="absolute inset-0 bg-[#3A2E22]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-lg bg-[#FAF3E8] border border-[#E8846B] text-xs font-mono font-bold text-[#3A2E22] flex items-center gap-1.5 shadow-sm">
                  <ZoomIn className="w-3.5 h-3.5 text-[#E8846B]" />
                  <span>Enlarge Photo</span>
                </span>
              </div>
            </div>

            {/* Label Area */}
            <div className="pt-1 px-1">
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md badge-coral font-bold">
                  {item.venue} Campus
                </span>
                <span className="font-mono text-[9px] text-[#8A7A63]">Verified Session</span>
              </div>
              <h4 className="font-sans font-bold text-sm text-[#3A2E22] group-hover:text-[#E8846B] transition-colors leading-snug">
                {item.title}
              </h4>
              <p className="font-sans text-xs text-[#5C4D3C] mt-1 line-clamp-2">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomedPhoto && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-[#3A2E22]/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setZoomedPhoto(null)}
        >
          <button
            onClick={() => setZoomedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#FDF8F2] border border-[#E0C9AE] text-[#3A2E22] hover:text-[#E8846B] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-4xl bg-[#FDF8F2] border-2 border-[#E8846B] rounded-3xl p-4 sm:p-6 shadow-warmLg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF3E8] border border-[#E0C9AE] mb-4">
              <Image
                src={zoomedPhoto.src}
                alt={zoomedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#E0C9AE]">
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-[#E8846B]">
                  {zoomedPhoto.venue} Campus Session
                </span>
                <h3 className="font-sans font-bold text-lg text-[#3A2E22]">
                  {zoomedPhoto.title}
                </h3>
                <p className="font-sans text-xs text-[#5C4D3C] mt-0.5">
                  {zoomedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
