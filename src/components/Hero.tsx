"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, FileDown, ExternalLink } from "lucide-react";
import { BorderBeam } from "./BorderBeam";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const [isColor, setIsColor] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
      >
        {/* Left Column: Focused Positioning, Headline & Terminal */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
        >
          {/* Recruiter Role Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl badge-sage font-mono text-[11px] font-bold mb-4 shadow-warm">
            <span className="w-2 h-2 rounded-full bg-[#3D6E50] animate-pulse" />
            <span>Open to Backend &amp; AI Engineering Roles (Bangalore / Remote • Full-Time &amp; Internships)</span>
          </div>

          {/* Domain Tags */}
          <div className="flex flex-wrap gap-2.5 mb-4">
            <div className="inline-flex items-center px-3.5 py-1 rounded-xl badge-coral font-mono text-xs font-bold shadow-warm">
              <span>JAVA &amp; SPRING BOOT</span>
            </div>
            <div className="inline-flex items-center px-3.5 py-1 rounded-xl badge-sage font-mono text-xs font-bold shadow-warm">
              <span>SPLIT FEDERATED AI</span>
            </div>
            <div className="inline-flex items-center px-3.5 py-1 rounded-xl badge-tan font-mono text-xs font-bold shadow-warm">
              <span>ZEPHYR RTOS</span>
            </div>
          </div>

          {/* Name with Coral Brushstroke Underline */}
          <div className="relative mb-2">
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-[#3A2E22] tracking-tight leading-[1.08]">
              Kshitiz Khandelwal
            </h1>
            <svg className="w-full max-w-md h-3.5 text-[#E8846B] -mt-1 opacity-90" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8 C60 2, 180 11, 297 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          <p className="font-mono text-base sm:text-lg text-[#E8846B] font-bold mb-2">
            Systems, AI &amp; Backend Engineer • Intern @ Zarthi
          </p>

          {/* Credibility Line */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#8A7A63] mb-6">
            <span>BMSIT&amp;M</span>
            <span>•</span>
            <span>CSBS</span>
            <span>•</span>
            <span className="text-[#B5432C] font-bold">9.43 CGPA</span>
            <span>•</span>
            <span className="text-[#2D5E40] font-bold">IIIT Trichy Research Fellow</span>
          </div>

          {/* Narrative Positioning */}
          <p className="font-sans text-base sm:text-lg text-[#5C4D3C] max-w-xl leading-relaxed mb-6">
            I build high-throughput backend microservices in Java &amp; Spring Boot, research privacy-preserving split federated learning on IoMT networks, and develop deterministic firmware on ARM Cortex-M33 microcontrollers.
          </p>

          {/* Focused Terminal Card in Soft Peach Canvas */}
          <div className="w-full max-w-xl bg-[#FDF8F2] border border-[#E0C9AE] rounded-2xl p-4 sm:p-5 shadow-warm mb-8 font-mono text-xs text-[#3A2E22] relative overflow-hidden group">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E0C9AE]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#E8846B]" />
                <div className="w-3 h-3 rounded-full bg-[#E0C9AE]" />
                <div className="w-3 h-3 rounded-full bg-[#8FBFA0]" />
                <span className="text-[#8A7A63] text-[11px] ml-2">bash — kshitiz@workstation</span>
              </div>
              <span className="text-[#B5432C] font-bold text-[10px]">ACTIVE WORKBENCH</span>
            </div>

            <div className="space-y-1.5 leading-relaxed">
              <div>
                <span className="text-[#E8846B] font-bold">$ whoami</span>
              </div>
              <div className="text-[#3A2E22] font-bold">
                Kshitiz Khandelwal — Backend &amp; Systems Engineer (Java / Spring Boot / Rust)
              </div>
              <div className="text-[#8A7A63] pt-1">
                Active Engagements:
              </div>
              <div className="text-[#5C4D3C] pl-3 border-l-2 border-[#E8846B] space-y-0.5 font-medium">
                <div>→ Backend Developer Intern @ Zarthi (Java &amp; Spring Boot)</div>
                <div>→ Research Fellow @ IIIT Trichy (IoMT Split Federated Learning)</div>
                <div>→ Embedded IoT Workshop Instructor (100+ Students Instructed)</div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E8846B] text-[#FAF3E8] font-sans font-bold text-sm hover:bg-[#D9735A] shadow-warm transition-all active:scale-[0.98]"
            >
              <span>Explore Projects ➔</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/Kshitiz-Khandelwal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FDF8F2] text-[#3A2E22] border border-[#E0C9AE] hover:border-[#E8846B] hover:text-[#E8846B] text-sm font-sans font-medium shadow-warm transition-all active:scale-[0.98]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#8A7A63]" />
            </a>

            {/* Direct Hosted Resume Download Link */}
            <a
              href="/resume.pdf"
              download="Kshitiz_Khandelwal_Resume.pdf"
              onClick={handleResumeClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FDF8F2] text-[#3A2E22] border border-[#E0C9AE] hover:border-[#E8846B] hover:text-[#E8846B] text-sm font-sans font-medium shadow-warm transition-all active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4 text-[#E8846B]" />
              <span>Resume (PDF) ↓</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean Warm Photo Card */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center justify-center z-10"
        >
          <div className="relative w-full max-w-md bg-[#FDF8F2] border border-[#E0C9AE] rounded-3xl p-5 shadow-warmLg transition-all duration-300 overflow-hidden group">
            {/* Clean Location Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E0C9AE] font-mono text-[10px] text-[#8A7A63]">
              <span className="text-[#3A2E22] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E8846B]" />
                <span>KSHITIZ KHANDELWAL</span>
              </span>
              <span>BENGALURU, INDIA 🇮🇳</span>
            </div>

            {/* Profile Picture Container with Tap / Click-to-Toggle Natural Color */}
            <div
              onClick={togglePhotoColor}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F3D9C4] border border-[#E0C9AE] cursor-pointer select-none"
              title="Tap or Click to toggle Natural Color / Monochrome photo"
            >
              <Image
                src="/profile.jpg"
                alt="Kshitiz Khandelwal"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                style={{
                  filter: (isColor || isHovered) ? "grayscale(0%) contrast(100%) brightness(102%)" : "grayscale(100%) contrast(110%) brightness(95%)",
                  transition: "filter 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="object-cover object-top"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3A2E22]/90 via-[#3A2E22]/50 to-transparent p-4 text-left pointer-events-none">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FAF3E8] font-bold block">
                  Kshitiz Khandelwal
                </span>
                <span className="font-mono text-[11px] text-[#F3D9C4] block">
                  Computer Science @ BMSIT&amp;M
                </span>
                <p className="font-sans text-[11px] text-[#FAF3E8]/90 mt-1 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isColor ? "bg-[#8FBFA0]" : "bg-[#E8846B]"} animate-pulse`} />
                  <span>{isColor ? "🎨 Natural Color Active (Tap for B&W)" : "✨ Tap / Click to Toggle Natural Color"}</span>
                </p>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#E0C9AE] font-mono text-[10px] text-[#8A7A63]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#8FBFA0]"></span>
                <span className="text-[#2D5E40] font-bold">AVAILABLE FOR HIRE</span>
              </span>
              <span className="text-[#B5432C] font-semibold">9.43 CGPA • CSBS</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
