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
    <div className="mt-10 bg-[#E9D3BB] border-[4px] border-[#3E3124] rounded-[28px] p-6 sm:p-8 shadow-paper relative overflow-hidden">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-dashed border-[#3E3124]/30 relative z-10">
        <div>
          <h3 className="font-bree font-bold text-2xl sm:text-3xl text-[#3E3124]">
            Workshop Idea Gallery &amp; Photo Documentation
          </h3>
          <p className="font-gochi text-base text-[#6D6358] mt-0.5">
            Documented sessions across 3 engineering campuses • Click any photo to enlarge.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {["all", "VKIT", "SCJIT", "BMSIT&M"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1 rounded-xl text-sm font-gochi font-bold border-2 border-[#3E3124] transition-all shadow-[2px_2px_0px_#3E3124] cursor-pointer ${
                activeFilter === tab
                  ? "bg-[#E25543] text-white -translate-y-0.5"
                  : "bg-[#F5E1CD] text-[#3E3124] hover:bg-[#F7E8D8]"
              }`}
            >
              {tab === "all" ? "All Photos (9)" : `${tab} Campus`}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {filtered.map((item, idx) => (
          <div
            key={item.src}
            className="group relative bg-[#F5E1CD] border-[3px] border-[#3E3124] p-3.5 rounded-2xl shadow-sketch hover:shadow-sketchLg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            style={{
              transform: `rotate(${idx % 2 === 0 ? -0.8 : 0.8}deg)`,
            }}
            onClick={() => setZoomedPhoto(item)}
          >
            {/* Photo Frame */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1F1D1B] border-2 border-[#3E3124] mb-3">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Zoom Prompt */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-xl bg-[#F5E1CD] text-xs font-gochi font-bold text-[#3E3124] border-2 border-[#3E3124] flex items-center gap-1.5 shadow-sketch">
                  <ZoomIn className="w-3.5 h-3.5 text-[#E25543]" />
                  <span>Enlarge Photo</span>
                </span>
              </div>
            </div>

            {/* Label Area */}
            <div className="pt-1 px-1">
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-gochi text-xs px-2 py-0.5 rounded-md bg-[#F8DC96] text-[#3E3124] border border-[#3E3124] font-bold">
                  {item.venue} Campus
                </span>
                <span className="font-gochi text-xs text-[#E25543] font-bold">✓ Verified</span>
              </div>
              <h4 className="font-bree font-bold text-base text-[#3E3124] group-hover:text-[#E25543] transition-colors leading-snug">
                {item.title}
              </h4>
              <p className="font-gochi text-xs text-[#6D6358] mt-1 line-clamp-2">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomedPhoto && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setZoomedPhoto(null)}
        >
          <button
            onClick={() => setZoomedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#F5E1CD] border-2 border-[#3E3124] text-[#3E3124] hover:bg-[#E25543] hover:text-white transition-colors shadow-sketch"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-4xl bg-[#F5E1CD] border-[4px] border-[#3E3124] rounded-[28px] p-6 shadow-paper overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#1F1D1B] border-2 border-[#3E3124] mb-4">
              <Image
                src={zoomedPhoto.src}
                alt={zoomedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t-2 border-dashed border-[#3E3124]/30">
              <div>
                <span className="font-gochi text-xs uppercase font-bold text-[#E25543]">
                  {zoomedPhoto.venue} Campus Session
                </span>
                <h3 className="font-bree font-bold text-xl text-[#3E3124]">
                  {zoomedPhoto.title}
                </h3>
                <p className="font-gochi text-sm text-[#6D6358] mt-0.5">
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
