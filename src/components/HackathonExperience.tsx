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
      badgeClass: "badge-coral",
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
      badgeClass: "badge-sage",
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
      badgeClass: "badge-coral",
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
    <section id="hackathons" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#E0C9AE]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl badge-coral text-[11px] font-mono uppercase tracking-wider font-bold mb-3">
            Competitive Builds &amp; Workshops
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#3A2E22] tracking-tight">
            Hackathons &amp; Technical Leadership
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#8A7A63] max-w-md">
          Competitive building under time constraints, university hackathons, and technical workshop leadership.
        </p>
      </div>

      {/* Grid of Hackathon Experiences */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative bg-[#FDF8F2] border border-[#E0C9AE] hover:border-[#E8846B] rounded-3xl p-6 sm:p-7 shadow-warm hover:shadow-warmLg transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E0C9AE]">
                <span className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold ${exp.badgeClass}`}>
                  {exp.badge}
                </span>
                <span className="font-mono text-xs text-[#8A7A63] font-semibold">{exp.period}</span>
              </div>

              {/* Photo or Custom Architectural Banner */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#FAF3E8] border border-[#E0C9AE] mb-4">
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
                    <div className="absolute inset-0 bg-[#3A2E22]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-[#FAF3E8] border border-[#E8846B] text-xs font-mono text-[#3A2E22] font-bold shadow-sm">
                        Enlarge Photo 🔍
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#F3D9C4]/60">
                    <Trophy className="w-8 h-8 text-[#E8846B] mb-2" />
                    <span className="font-sans font-bold text-xs sm:text-sm text-[#3A2E22] block leading-tight">
                      {exp.customCardTitle}
                    </span>
                    <span className="font-mono text-[10px] text-[#5C4D3C] mt-1 block">
                      {exp.customCardSubtitle}
                    </span>
                    <span className="mt-2 font-mono text-[9px] px-2 py-0.5 rounded bg-[#FAF3E8] text-[#B5432C] border border-[#E8846B]/30 font-semibold">
                      Verified Competition Submission
                    </span>
                  </div>
                )}
              </div>

              <h3 className="font-sans font-bold text-base sm:text-lg text-[#3A2E22] group-hover:text-[#E8846B] transition-colors mb-1">
                {exp.title}
              </h3>
              <p className="font-mono text-xs text-[#E8846B] mb-3 font-semibold">
                {exp.role} • {exp.organization}
              </p>

              <p className="font-sans text-xs text-[#5C4D3C] leading-relaxed mb-4">
                {exp.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E0C9AE] space-y-2">
              {exp.highlights.map((h, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2 text-xs text-[#5C4D3C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8FBFA0] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}

              {exp.driveLink && (
                <div className="pt-2">
                  <a
                    href={exp.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E8846B] hover:text-[#B5432C] font-bold"
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
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-[#3A2E22]/90 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#FDF8F2] border border-[#E0C9AE] text-[#3A2E22] hover:text-[#E8846B] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] overflow-hidden rounded-2xl border-2 border-[#E8846B] bg-[#FAF3E8]">
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
