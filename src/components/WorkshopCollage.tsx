"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";

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
    <div className="mt-10 bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 shadow-clean relative overflow-hidden">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E5E7EB] relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#111827]">
              Workshop Idea Gallery &amp; Photo Documentation
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
            Documented sessions across 3 engineering campuses • Click any photo to enlarge in full resolution.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {["all", "VKIT", "SCJIT", "BMSIT&M"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                activeFilter === tab
                  ? "bg-[#2563EB] text-white shadow-clean"
                  : "bg-[#F3F4F6] text-[#4B5563] hover:text-[#111827] border border-[#E5E7EB]"
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
            className="group relative bg-[#F7F7F5] border border-[#E5E7EB] hover:border-[#2563EB] p-3.5 rounded-2xl shadow-clean hover:shadow-clean-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            onClick={() => setZoomedPhoto(item)}
          >
            {/* Photo Frame */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#E5E7EB] mb-3">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Zoom Prompt Badge */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-lg bg-white text-xs font-sans font-medium text-[#111827] flex items-center gap-1.5 shadow-clean">
                  <ZoomIn className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Enlarge Photo</span>
                </span>
              </div>
            </div>

            {/* Label Area */}
            <div className="pt-1 px-1">
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md badge-blue font-semibold">
                  {item.venue} Campus
                </span>
                <span className="font-mono text-[9px] text-[#6B7280]">Verified Session</span>
              </div>
              <h4 className="font-sans font-bold text-sm text-[#111827] group-hover:text-[#2563EB] transition-colors leading-snug">
                {item.title}
              </h4>
              <p className="font-sans text-xs text-[#6B7280] mt-1 line-clamp-2">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomedPhoto && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setZoomedPhoto(null)}
        >
          <button
            onClick={() => setZoomedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white border border-[#E5E7EB] text-[#111827] hover:text-[#2563EB] transition-colors shadow-clean"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-4xl bg-white border border-[#E5E7EB] rounded-3xl p-4 sm:p-6 shadow-clean-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F3F4F6] border border-[#E5E7EB] mb-4">
              <Image
                src={zoomedPhoto.src}
                alt={zoomedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#E5E7EB]">
              <div>
                <span className="font-mono text-[10px] uppercase font-semibold text-[#2563EB]">
                  {zoomedPhoto.venue} Campus Session
                </span>
                <h3 className="font-sans font-bold text-lg text-[#111827]">
                  {zoomedPhoto.title}
                </h3>
                <p className="font-sans text-xs text-[#6B7280] mt-0.5">
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
