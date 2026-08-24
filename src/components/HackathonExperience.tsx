"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trophy, Users, Award, MapPin, CheckCircle2, ExternalLink, X, Sparkles } from "lucide-react";

export function HackathonExperience() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const experiences = [
    {
      period: "2024",
      title: "College Ideathon — SIH-Aligned Problem Statement",
      organization: "Internal Institutional Ideathon",
      role: "Team Leader — Krishi360 Platform",
      badge: "3rd Place Podium, College Ideathon",
      tapeColor: "washi-tape-coral",
      imageSrc: null,
      customCardTitle: "Krishi360 Precision Agriculture Platform",
      customCardSubtitle: "Smart India Hackathon Aligned Architecture",
      description:
        "Led the team at a college-level Ideathon built on an official Smart India Hackathon problem statement, architecting Krishi360's Crop Suitability Index mathematical model and presenting the prototype to the internal judging panel.",
      highlights: [
        "Secured 3rd place podium finish at the institution's internal ideathon round.",
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
      tapeColor: "washi-tape-sage",
      imageSrc: null,
      customCardTitle: "Predictive Ground Station NOC Copilot",
      customCardSubtitle: "ISRO PS13 Fault Anomaly Detection",
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
      tapeColor: "washi-tape-mustard",
      imageSrc: "/events/vkit/vkit_1.jpeg",
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
    <section id="hackathons" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-bree text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4BAA3] mb-2">
          Competitive Builds
        </span>
        <h2 className="font-bree text-5xl sm:text-6xl md:text-7xl text-[#F5E1CD]">
          Hackathons &amp; Leadership
        </h2>
        <p className="font-gochi text-base sm:text-lg text-[#D4BAA3] mt-2 max-w-md">
          Competitive building under time constraints, university hackathons, and technical workshop leadership.
        </p>
      </div>

      {/* Grid of Hackathon Experiences */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative bg-[#F5E1CD] border-[3.5px] border-[#3E3124] rounded-[26px] p-6 shadow-sketch flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sketchLg group"
            style={{
              transform: `rotate(${idx % 2 === 0 ? -0.8 : 0.8}deg)`,
            }}
          >
            <div className={`${exp.tapeColor} -top-3.5 left-6 rotate-[-5deg] !w-16 !h-4`} />

            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-dashed border-[#3E3124]/30">
                <span className="font-gochi text-xs px-2.5 py-0.5 rounded-full bg-[#E25543] text-white border border-[#3E3124] font-bold">
                  {exp.badge}
                </span>
                <span className="font-gochi text-xs text-[#6D6358] font-bold">{exp.period}</span>
              </div>

              {/* Photo or Custom Architectural Banner */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#E9D3BB] border-2 border-[#3E3124] mb-4">
                {exp.imageSrc ? (
                  <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setZoomedImage(exp.imageSrc)}
                  >
                    <Image
                      src={exp.imageSrc}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-[#F5E1CD] font-gochi text-xs text-[#3E3124] border-2 border-[#3E3124] shadow-sketch">
                        Enlarge Photo 🔍
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#E9D3BB]">
                    <Trophy className="w-8 h-8 text-[#E25543] mb-1.5" />
                    <span className="font-bree font-bold text-base text-[#3E3124] block leading-tight">
                      {exp.customCardTitle}
                    </span>
                    <span className="font-gochi text-xs text-[#6D6358] mt-1 block">
                      {exp.customCardSubtitle}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="font-bree font-bold text-lg text-[#3E3124] group-hover:text-[#E25543] transition-colors mb-1">
                {exp.title}
              </h3>
              <p className="font-gochi text-sm text-[#E25543] mb-3 font-bold">
                {exp.role} • {exp.organization}
              </p>

              <p className="font-gochi text-sm text-[#3E3124] leading-relaxed mb-4">
                {exp.description}
              </p>
            </div>

            <div className="pt-3 border-t-2 border-dashed border-[#3E3124]/30 space-y-2 font-gochi">
              {exp.highlights.map((h, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2 text-sm text-[#3E3124]">
                  <CheckCircle2 className="w-4 h-4 text-[#E25543] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}

              {exp.driveLink && (
                <div className="pt-2">
                  <a
                    href={exp.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-gochi text-[#E25543] hover:underline font-bold"
                  >
                    <span>View Workshop Photo Proof Album</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#F5E1CD] border-2 border-[#3E3124] text-[#3E3124] hover:bg-[#E25543] hover:text-white transition-colors shadow-sketch"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] overflow-hidden rounded-2xl border-[4px] border-[#3E3124] bg-[#1F1D1B] shadow-paper">
            <Image
              src={zoomedImage}
              alt="Zoomed Hackathon / Workshop Photo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
