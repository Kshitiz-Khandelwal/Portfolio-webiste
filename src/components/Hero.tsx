"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Terminal, ArrowRight, FileDown, ExternalLink, Sparkles, CheckCircle2, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export function Hero() {
  const [isColor, setIsColor] = useState(true);
  const [activeTab, setActiveTab] = useState<"bio" | "stack" | "quick">("bio");
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const copyEmail = () => {
    navigator.clipboard.writeText("kshitiz.k.1403@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!", { description: "kshitiz.k.1403@gmail.com" });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 overflow-hidden sketch-grid">
      {/* Floating Handcrafted Doodles & Engineering Math Glyphs */}
      <div className="font-gochi absolute top-20 left-8 hidden items-center gap-3 text-4xl text-[#6D6358]/40 sm:flex pointer-events-none select-none">
        <span>✦</span>
        <span className="text-2xl text-[#E25543]/40">⚙️ 01_KERNEL ✎﹏﹏</span>
      </div>

      <div className="font-gochi absolute top-24 right-12 hidden text-4xl text-[#6D6358]/35 sm:block pointer-events-none select-none">
        ✸ ⬡ ∫ λ
      </div>

      <div
        className="font-gochi absolute bottom-12 left-10 hidden rounded-lg border-2 border-dashed border-[#6D6358]/40 p-3 text-xs text-[#D4BAA3]/60 md:block pointer-events-none select-none"
        style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
      >
        // systems_lab_notebook_vol1 🛠️
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Engineering Lab & Systems Banner Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F8DC96] border-2 border-[#3E3124] rounded-full text-[#3E3124] font-gochi text-sm sm:text-base shadow-[2px_2px_0px_#3E3124] mb-4 -rotate-1">
            <span>⚙️</span>
            <span className="font-bold">Systems &amp; AI Lab Notebook</span>
            <span>•</span>
            <span>Production Java + Edge ML</span>
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
              className="w-full max-w-md h-4 text-[#E25543] -mt-1 opacity-90"
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

          {/* Handcrafted Felt Swatch Tags with Hover Spring */}
          <div className="flex flex-wrap gap-2.5 mb-7">
            {tags.map((t, idx) => (
              <div
                key={t.label}
                className="relative inline-flex items-center justify-center px-4 py-1.5 border-2 border-[#3E3124] rounded-xl font-gochi text-base sm:text-lg text-[#3E3124] font-bold shadow-[2px_2px_0px_#3E3124] hover:scale-105 hover:-rotate-1 transition-transform cursor-pointer"
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
            Backend &amp; Systems Engineer specializing in high-throughput Java microservices (<span className="text-[#E25543] font-bold underline decoration-wavy">Intern @ Zarthi</span>) and privacy-preserving Split Federated Learning on IoMT networks (<span className="text-[#F8DC96] font-bold">Research Fellow @ IIIT Trichy</span>). I build defensible distributed systems that perform deterministically under stress.
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

        {/* Right Column: Handcrafted Polaroid & Interactive Lab Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md bg-[#F5E1CD] border-[3.5px] border-[#3E3124] rounded-[28px] p-6 shadow-paper rotate-1 hover:rotate-0 transition-transform">
            {/* Washi Tapes on Top */}
            <div className="washi-tape-coral -top-3.5 left-10 rotate-[-6deg]" />
            <div className="washi-tape-sage -top-3.5 right-10 rotate-[5deg]" />

            {/* Coffee Stain inside Card */}
            <div className="coffee-stain absolute bottom-2 right-2 w-24 h-24 opacity-25" />

            {/* Header Stamp */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-dashed border-[#3E3124]/30">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#E25543]" />
                <span className="font-bree font-bold text-sm text-[#3E3124]">
                  ENGINEER_ID: KSHITIZ-9491
                </span>
              </div>
              <span className="font-gochi text-xs px-2.5 py-0.5 rounded-full bg-[#B2C4B0] text-[#3E3124] border border-[#3E3124] font-bold">
                ● PROD READY
              </span>
            </div>

            {/* Polaroid Photo Frame with Crisp Clear Image */}
            <div className="relative p-2.5 bg-[#FFFFFF] border-2 border-[#3E3124] rounded-2xl shadow-sketch mb-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#2C2C2C]">
                <Image
                  src="/profile.jpg"
                  alt="Kshitiz Khandelwal Portrait"
                  fill
                  priority
                  className={`object-cover object-center transition-all duration-500 hover:scale-105 ${
                    isColor ? "filter-none brightness-105" : "grayscale contrast-125"
                  }`}
                />
              </div>

              {/* Polaroid Bottom Caption with Color Toggle */}
              <div className="pt-2 flex items-center justify-between font-gochi text-xs text-[#3E3124]">
                <span className="font-bold">Kshitiz Khandelwal • Bangalore</span>
                <button
                  onClick={() => setIsColor(!isColor)}
                  className="px-2 py-0.5 rounded bg-[#F8DC96] border border-[#3E3124] hover:bg-[#E25543] hover:text-white transition-colors cursor-pointer"
                >
                  {isColor ? "🖤 Switch B&W" : "🎨 Switch Color"}
                </button>
              </div>
            </div>

            {/* Interactive Lab Tabs */}
            <div className="flex gap-2 mb-3 font-gochi text-xs">
              <button
                onClick={() => setActiveTab("bio")}
                className={`flex-1 py-1 px-2 rounded-lg border-2 border-[#3E3124] transition-all cursor-pointer ${
                  activeTab === "bio" ? "bg-[#E25543] text-white font-bold" : "bg-[#F7E8D8] text-[#3E3124]"
                }`}
              >
                Profile Note
              </button>
              <button
                onClick={() => setActiveTab("stack")}
                className={`flex-1 py-1 px-2 rounded-lg border-2 border-[#3E3124] transition-all cursor-pointer ${
                  activeTab === "stack" ? "bg-[#E25543] text-white font-bold" : "bg-[#F7E8D8] text-[#3E3124]"
                }`}
              >
                Active Roles
              </button>
              <button
                onClick={() => setActiveTab("quick")}
                className={`flex-1 py-1 px-2 rounded-lg border-2 border-[#3E3124] transition-all cursor-pointer ${
                  activeTab === "quick" ? "bg-[#E25543] text-white font-bold" : "bg-[#F7E8D8] text-[#3E3124]"
                }`}
              >
                Quick Connect
              </button>
            </div>

            {/* Tab Body */}
            {activeTab === "bio" && (
              <div className="p-3 bg-[#F7E8D8] rounded-xl border border-[#3E3124]/20 font-gochi text-sm text-[#3E3124] space-y-1">
                <p className="leading-snug">
                  🛠️ <strong>Focus:</strong> Low-latency backend APIs, real-time threat intel, and zero-copy pipelines.
                </p>
                <p className="text-xs text-[#6D6358]">
                  🎓 <strong>Academics:</strong> BMSIT&amp;M CSBS (CGPA: 9.43) • 100+ Students Mentored
                </p>
              </div>
            )}

            {activeTab === "stack" && (
              <div className="p-3 bg-[#F7E8D8] rounded-xl border border-[#3E3124]/20 font-gochi text-sm text-[#3E3124] space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#E25543]">Zarthi Technologies:</span>
                  <span>Backend Intern (Java &amp; Spring)</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#E25543]">IIIT Tiruchirappalli:</span>
                  <span>AICTE Research Fellow</span>
                </div>
              </div>
            )}

            {activeTab === "quick" && (
              <div className="p-3 bg-[#F7E8D8] rounded-xl border border-[#3E3124]/20 font-gochi text-sm text-[#3E3124] flex items-center justify-between">
                <span className="font-mono text-xs text-[#3E3124] truncate">kshitiz.k.1403@gmail.com</span>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 bg-[#3E3124] text-white rounded-lg text-xs font-gochi hover:bg-[#E25543] transition-colors shrink-0 ml-2"
                >
                  {copiedEmail ? "Copied! ✓" : "Copy 📋"}
                </button>
              </div>
            )}

            {/* Monospace Quick Command Prompt */}
            <div className="mt-3 bg-[#1F1D1B] border-2 border-[#3E3124] rounded-xl p-2.5 font-mono text-xs text-[#F5E1CD] flex items-center justify-between">
              <div>
                <span className="text-[#E25543] font-bold">$ sys.status()</span>
                <span className="text-[#D4BAA3] block text-[10px] mt-0.5">&gt; All services passing 100% test coverage</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
