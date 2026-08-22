"use client";

import React from "react";
import { Trophy, Users, Award, MapPin, CheckCircle2, ExternalLink } from "lucide-react";

export function HackathonExperience() {
  const experiences = [
    {
      period: "2024",
      title: "College Ideathon — SIH-Aligned Problem Statement",
      organization: "Internal Institutional Ideathon",
      role: "Team Leader — Krishi360 Platform",
      badge: "3rd Place, College Ideathon",
      description:
        "Led the team at a college-level Ideathon built on an official Smart India Hackathon problem statement, architecting Krishi360's Crop Suitability Index mathematical model and presenting the prototype to the internal judging panel.",
      photoPlaceholder: "[📷 PASTE IDEATHON STAGE PRESENTATION PHOTO HERE]",
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
      description:
        "Engineered the complete Predictive NOC Copilot architecture for Problem Statement 13 (Predictive Ground Station MPLS Fault Anomaly Detection).",
      photoPlaceholder: "[📷 PASTE ISRO BAH TELEMETRY ARCHITECTURE / TEAM PHOTO HERE]",
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
      description:
        "Co-planned and instructed a full-day hardware and edge AI workshop for students from rural engineering colleges, covering microcontroller programming, sensor networks, and IoT telemetry.",
      photoPlaceholder: "[📷 PASTE WORKSHOP AT VIVEKANANDA INSTITUTE PHOTO HERE]",
      driveLink: "https://drive.google.com/drive/folders/1CoQVyV7Sa2AYsYbT_DRMpaDwqQDjCcnu",
      highlights: [
        "Delivered hands-on modules in ESP32, Raspberry Pi, C/C++ firmware, and real-time cloud data pipelines.",
        "Facilitated hardware debugging and live cyber-physical sensor integration.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
            Competitions &amp; Leadership
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Hackathons &amp; Technical Outreach
          </h2>
        </div>
        <p className="font-sans text-sm text-slate-600 max-w-md">
          Leading engineering squads under tight build deadlines and conducting technical hardware workshops.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 hover:border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-sm transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Experience Details */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-[#D4AF37]">
                    {exp.period}
                  </span>
                  <span className="px-3 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider bg-slate-100 border border-slate-200 text-slate-900">
                    {exp.badge}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl sm:text-2xl text-slate-900">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 font-sans">
                  <span className="text-[#D4AF37] font-bold">{exp.organization}</span>
                  <span>•</span>
                  <span>{exp.role}</span>
                  {exp.location && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-slate-500">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </>
                  )}
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                  {exp.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
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
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#D4AF37] font-bold hover:underline"
                    >
                      <span>View Outreach Event Photos on Drive</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Right: Structured Photo Placeholder Frame */}
              <div className="lg:col-span-5">
                <div className="aspect-[16/10] rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300 hover:border-[#D4AF37] flex flex-col items-center justify-center p-6 text-center transition-colors">
                  <Trophy className="w-8 h-8 text-[#D4AF37] mb-2 opacity-90" />
                  <span className="font-mono text-xs text-slate-900 font-bold mb-1">
                    Event Photo Documentation
                  </span>
                  <p className="font-mono text-[10px] text-[#D4AF37] max-w-xs font-semibold">
                    {exp.photoPlaceholder}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
