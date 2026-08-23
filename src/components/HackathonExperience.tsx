"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trophy, Users, Award, MapPin, CheckCircle2, ExternalLink, X } from "lucide-react";

export function HackathonExperience() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const experiences = [
    {
      period: "2024",
      title: "College Ideathon — SIH-Aligned Problem Statement",
      organization: "Internal Institutional Ideathon",
      role: "Team Leader — Krishi360 Platform",
      badge: "3rd Place Podium, College Ideathon",
      imageSrc: "/events/bmsit/bmsit_1.jpeg",
      tilt: "-rotate-0.8",
      description:
        "Led the team at a college-level Ideathon built on an official Smart India Hackathon problem statement, architecting Krishi360's Crop Suitability Index mathematical model and presenting the prototype to the internal judging panel.",
      highlights: [
        "Secured 3rd place at the institution's internal ideathon round.",
        "Coordinated task breakdown, ML model training, and API integration within tight hackathon sprints.",
        "Delivered a live interactive farmer advisory platform with soil and rainfall recommendation algorithms.",
      ],
    },
    {
      period: "2026",
      title: "ISRO Build-A-Hackathon 2026 (PS13)",
      organization: "Indian Space Research Organisation (ISRO)",
      role: "System Architect & ML Lead",
      badge: "Finalist Solution Submission",
      imageSrc: null,
      tilt: "rotate-0.8",
      description:
        "Engineered the complete Predictive NOC Copilot architecture for Problem Statement 13 (Predictive Ground Station MPLS Fault Anomaly Detection).",
      highlights: [
        "Implemented dual-engine predictive modeling with Prophet time-series trend decomposition and XGBoost fault classification.",
        "Engineered an offline ChromaDB RAG knowledge base for instant aerospace incident runbook retrieval.",
      ],
    },
    {
      period: "May 18, 2026",
      title: "IoT & Edge AI Technical Outreach Workshop",
      organization: "Vivekananda Institute of Technology & BMSIT&M",
      role: "Co-Organizer & Instructor",
      location: "Bangalore, India",
      badge: "100+ Students Trained",
      imageSrc: "/events/vkit/vkit_1.jpeg",
      tilt: "-rotate-0.8",
      description:
        "Co-planned and instructed a full-day hardware and edge AI workshop for students from rural engineering colleges, covering microcontroller programming, sensor networks, and IoT telemetry.",
      driveLink: "https://drive.google.com/drive/folders/1CoQVyV7Sa2AYsYbT_DRMpaDwqQDjCcnu",
      highlights: [
        "Delivered hands-on modules in ESP32, Raspberry Pi Pico 2, C/C++ firmware, and real-time cloud data pipelines.",
        "Facilitated hardware debugging and live cyber-physical sensor integration for over 100 undergraduates.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#FFD700] font-bold mb-3">
            Competitions &amp; Leadership
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Hackathons &amp; Technical Outreach
          </h2>
        </div>
        <p className="font-sans text-sm text-[#94A3B8] max-w-md">
          Leading engineering squads under tight build deadlines and conducting technical hardware workshops.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`relative bg-[#181C28] border-2 border-[#2B3245] hover:border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-sketch hover:shadow-sketchLg transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 group ${exp.tilt}`}
          >
            {/* Washi Tape Accent */}
            <div className="washi-tape-gold -top-2 left-10 rotate-[-4deg]" />
            <div className="absolute top-4 right-6 text-xl select-none pointer-events-none opacity-80 group-hover:scale-110 transition-transform">
              📎
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Experience Details */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b-2 border-dashed border-[#2B3245]">
                  <span className="font-mono text-xs font-bold text-[#FFD700]">
                    {exp.period}
                  </span>
                  <span className="px-3 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider bg-[#10121A] border border-[#D4AF37]/40 text-[#FFD700]">
                    {exp.badge}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-[#FFD700] transition-colors">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#CBD5E1] font-sans">
                  <span className="text-[#FFD700] font-bold">{exp.organization}</span>
                  <span>•</span>
                  <span>{exp.role}</span>
                  {exp.location && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-[#94A3B8]">
                        <MapPin className="w-3 h-3 text-[#DC143C]" /> {exp.location}
                      </span>
                    </>
                  )}
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#E2E8F0] leading-relaxed pt-1">
                  {exp.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {exp.driveLink && (
                  <div className="pt-2">
                    <a
                      href={exp.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FFD700] font-bold hover:underline"
                    >
                      <span>View Outreach Event Photos on Drive</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Right: Real Photo / Frame */}
              <div className="lg:col-span-5">
                {exp.imageSrc ? (
                  <div
                    className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0E0E12] border-2 border-[#2B3245] hover:border-[#D4AF37] shadow-xl group/photo cursor-pointer transition-all duration-300 hover:shadow-[0_10px_25px_rgba(212,175,55,0.2)]"
                    onClick={() => setZoomedImage(exp.imageSrc)}
                  >
                    <Image
                      src={exp.imageSrc}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover/photo:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 flex flex-col justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-white/80 self-end">
                        Click to Zoom 🔍
                      </span>
                      <span className="font-mono text-[10px] text-[#FFD700] font-bold">
                        {exp.badge}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[16/10] rounded-2xl bg-[#10121A] border-2 border-dashed border-[#2B3245] hover:border-[#D4AF37] flex flex-col items-center justify-center p-6 text-center transition-colors">
                    <Trophy className="w-8 h-8 text-[#FFD700] mb-2 opacity-90" />
                    <span className="font-mono text-xs text-white font-bold mb-1">
                      Finalist Solution Architecture
                    </span>
                    <p className="font-mono text-[10px] text-[#FFD700] max-w-xs font-semibold">
                      Predictive Ground Station MPLS Fault Detection
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
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
              alt="Zoomed Hackathon Event Photo"
              fill
              className="object-contain bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
