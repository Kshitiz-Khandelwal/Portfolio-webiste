"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Terminal, ArrowRight, FileDown, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function Hero() {
  const [isColor, setIsColor] = useState(false);

  const tags = [
    { label: "Java & Spring Boot", color: "#F0A89C", border: "#E25543" },
    { label: "Split Fed Learning", color: "#B2C4B0", border: "#5C755A" },
    { label: "Network Threat Intel", color: "#F8DC96", border: "#9A7E30" },
    { label: "Embedded RTOS", color: "#D2C4D9", border: "#7B6285" },
  ];

  const handleResumeClick = () => {
    toast.success("Downloading Resume...", {
      description: "Kshitiz_Khandelwal_Resume.pdf",
    });
  };

  const togglePhotoColor = () => {
    setIsColor((prev) => {
      const next = !prev;
      toast.info(next ? "✨ Photo switched to Natural Color" : "🖤 Photo switched to Monochrome", {
        duration: 1500,
      });
      return next;
    });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 overflow-hidden sketch-grid">
      {/* Floating Handcrafted Doodles */}
      <div className="font-gochi absolute top-20 left-8 hidden items-center gap-3 text-4xl text-[#6D6358]/40 sm:flex pointer-events-none select-none">
        <span>✦</span>
        <span className="text-2xl text-[#E25543]/40">⚙️ ✎﹏﹏</span>
      </div>

      <div className="font-gochi absolute top-24 right-12 hidden text-5xl text-[#6D6358]/30 sm:block pointer-events-none select-none">
        ✸ ✂
      </div>

      <div
        className="font-gochi absolute bottom-12 left-10 hidden rounded-lg border border-[#6D6358]/40 p-3 text-xs text-[#D4BAA3]/50 md:block pointer-events-none select-none"
        style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
      >
        // systems_kshitiz.craft 🛠️
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Systems & Research Banner Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#F8DC96] border-2 border-[#3E3124] rounded-full text-[#3E3124] font-gochi text-sm sm:text-base shadow-[2px_2px_0px_#3E3124] mb-4 -rotate-1">
            <span>⚙️</span>
            <span className="font-bold">Code &amp; Systems</span>
            <span>•</span>
            <span>High-Throughput Java + Edge AI</span>
          </div>

          {/* Greeting */}
          <p className="text-[#D4BAA3] font-bree text-2xl sm:text-3xl mb-1">
            Hi, I&apos;m
          </p>

          {/* Name in Large Editorial Display with Handcrafted Brush Underline */}
          <div className="relative mb-6">
            <h1 className="font-bree font-extrabold text-5xl sm:text-7xl lg:text-8xl text-[#F5E1CD] tracking-tight leading-none">
              Kshitiz Khandelwal
            </h1>
            {/* Painted Brush Underline SVG */}
            <svg
              className="w-full max-w-md h-4 text-[#E25543] -mt-1 opacity-85"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8 C60 2, 180 11, 297 5"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Handcrafted Felt Swatch Tags */}
          <div className="flex flex-wrap gap-2.5 mb-7">
            {tags.map((t, idx) => (
              <div
                key={t.label}
                className="relative inline-flex items-center justify-center px-4 py-1.5 border-2 border-[#3E3124] rounded-xl font-gochi text-base sm:text-lg text-[#3E3124] font-bold shadow-[2px_2px_0px_#3E3124] hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundColor: t.color,
                  transform: `rotate(${((idx % 4) - 1.5) * 1.5}deg)`,
                }}
              >
                <span>{t.label}</span>
              </div>
            ))}
          </div>

          {/* Narrative Bio */}
          <p className="font-gochi text-lg sm:text-xl text-[#F5E1CD] leading-relaxed max-w-xl mb-8">
            Backend &amp; Systems Engineer specializing in high-throughput Java microservices (<span className="text-[#E25543] font-bold">Intern @ Zarthi</span>) and privacy-preserving Split Federated Learning on IoMT networks (<span className="text-[#F8DC96] font-bold">Research Fellow @ IIIT Trichy</span>). I build defensible, production-grade distributed architectures.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="sketch-button sketch-button-filled"
            >
              <span>Explore Engineering Systems</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>

            <a
              href="/Kshitiz_Khandelwal_Resume.pdf"
              download="Kshitiz_Khandelwal_Resume.pdf"
              onClick={handleResumeClick}
              className="sketch-button"
            >
              <FileDown className="w-5 h-5 mr-2" />
              <span>Download Resume 📄</span>
            </a>
          </div>
        </div>

        {/* Right Column: Handcrafted Workstation Paper Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md bg-[#F5E1CD] border-[3.5px] border-[#3E3124] rounded-[26px] p-6 shadow-paper rotate-1 hover:rotate-0 transition-transform">
            {/* Washi Tape on Top */}
            <div className="washi-tape-coral -top-3.5 left-10 rotate-[-6deg]" />
            <div className="washi-tape-sage -top-3.5 right-10 rotate-[5deg]" />

            {/* Coffee Stain inside Card */}
            <div className="coffee-stain absolute bottom-3 right-3 w-24 h-24 opacity-25" />

            {/* Header Stamp */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-dashed border-[#3E3124]/30">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#E25543]" />
                <span className="font-bree font-bold text-sm text-[#3E3124]">
                  SYSTEM_STATUS: ACTIVE
                </span>
              </div>
              <span className="font-gochi text-xs px-2.5 py-0.5 rounded-full bg-[#B2C4B0] text-[#3E3124] border border-[#3E3124] font-bold">
                ● ONLINE (PROD)
              </span>
            </div>

            {/* Profile Photo Frame */}
            <div
              className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#3E3124] bg-[#E9D3BB] mb-4 cursor-pointer group shadow-sm"
              onClick={togglePhotoColor}
              title="Click to toggle monochrome / natural color"
            >
              <Image
                src="/profile pic.jpg"
                alt="Kshitiz Khandelwal"
                fill
                priority
                className={`object-cover object-center transition-all duration-700 group-hover:scale-105 ${
                  isColor ? "filter-none" : "grayscale contrast-110"
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#1F1D1B]/80 p-2 text-center">
                <span className="font-gochi text-xs text-[#F5E1CD]">
                  {isColor ? "🎨 Natural Studio Color (Click for B&W)" : "🖤 Monochrome Portrait (Click for Color)"}
                </span>
              </div>
            </div>

            {/* Active Telemetry Notes */}
            <div className="space-y-2 font-gochi text-sm text-[#3E3124] bg-[#F7E8D8] p-3.5 rounded-xl border border-[#3E3124]/20 mb-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#E25543]">Role:</span>
                <span>Backend Developer Intern @ Zarthi</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#E25543]">Research:</span>
                <span>SplitFed IoMT Fellow @ IIIT Trichy</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#E25543]">Academics:</span>
                <span>BMSIT&amp;M CSBS (CGPA: 9.43)</span>
              </div>
            </div>

            {/* Terminal Command Snippet */}
            <div className="bg-[#1F1D1B] border-2 border-[#3E3124] rounded-xl p-3 font-mono text-xs text-[#F5E1CD]">
              <div className="text-[#E25543] font-bold">$ whoami</div>
              <div className="text-[#D4BAA3] mt-0.5">&gt; Distributed systems architect &amp; AI researcher</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
