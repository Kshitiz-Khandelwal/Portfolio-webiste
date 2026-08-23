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
      badgeClass: "badge-blue",
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
      badgeClass: "badge-neutral",
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
      badgeClass: "badge-blue",
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
    <section id="hackathons" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg badge-blue text-[11px] font-mono uppercase tracking-wider font-semibold mb-3">
            Competitive Builds &amp; Workshops
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#111827] tracking-tight">
            Hackathons &amp; Technical Leadership
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-md">
          Competitive building under time constraints, university hackathons, and technical workshop leadership.
        </p>
      </div>

      {/* Grid of Hackathon Experiences */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative bg-white border border-[#E5E7EB] hover:border-[#2563EB] rounded-3xl p-6 sm:p-7 shadow-clean hover:shadow-clean-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F3F4F6]">
                <span className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-semibold ${exp.badgeClass}`}>
                  {exp.badge}
                </span>
                <span className="font-mono text-xs text-[#6B7280] font-semibold">{exp.period}</span>
              </div>

              {/* Photo or Custom Architectural Banner */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F7F7F5] border border-[#E5E7EB] mb-4">
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
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-white text-xs font-sans font-medium text-[#111827] shadow-clean">
                        Enlarge Photo 🔍
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#EFF6FF]">
                    <Trophy className="w-8 h-8 text-[#2563EB] mb-2" />
                    <span className="font-sans font-bold text-xs sm:text-sm text-[#111827] block leading-tight">
                      {exp.customCardTitle}
                    </span>
                    <span className="font-mono text-[10px] text-[#4B5563] mt-1 block">
                      {exp.customCardSubtitle}
                    </span>
                    <span className="mt-2 font-mono text-[9px] px-2 py-0.5 rounded bg-white text-[#2563EB] border border-[#BFDBFE] font-medium">
                      Verified Competition Submission
                    </span>
                  </div>
                )}
              </div>

              <h3 className="font-sans font-bold text-base sm:text-lg text-[#111827] group-hover:text-[#2563EB] transition-colors mb-1">
                {exp.title}
              </h3>
              <p className="font-sans text-xs text-[#2563EB] mb-3 font-medium">
                {exp.role} • {exp.organization}
              </p>

              <p className="font-sans text-xs text-[#4B5563] leading-relaxed mb-4">
                {exp.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F3F4F6] space-y-2">
              {exp.highlights.map((h, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}

              {exp.driveLink && (
                <div className="pt-2">
                  <a
                    href={exp.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-[#2563EB] hover:text-[#1D4ED8] font-medium"
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
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white border border-[#E5E7EB] text-[#111827] hover:text-[#2563EB] transition-colors shadow-clean"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-clean-lg">
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
