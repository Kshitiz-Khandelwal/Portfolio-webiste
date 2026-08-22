"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, FileDown, Mail, Shield, Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const handleResume = () => {
    toast.success("Resume download initiated", {
      description: "Fetching Kshitiz_Khandelwal_Resume.pdf",
    });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden ambient-grid">
      {/* Background Subtle Radial Glows — slow drift animation */}
      <div className="ambient-glow absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="ambient-glow absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#DC143C]/8 rounded-full blur-[100px] pointer-events-none -z-10" style={{ animationDelay: "-7s" }} />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
      >
        {/* Left Column: Headline, Bio & Interactive Terminal */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
        >
          {/* Top Domain Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#121216] border border-[#D4AF37]/60 font-mono text-xs text-[#FFD700] font-bold shadow-xs">
              AI / ML
            </span>
            <span className="text-[#22222A]">•</span>
            <span className="px-3 py-1 rounded-full bg-[#121216] border border-[#22222A] font-mono text-xs text-[#C7C7CF] shadow-xs">
              Full Stack
            </span>
            <span className="text-[#22222A]">•</span>
            <span className="px-3 py-1 rounded-full bg-[#121216] border border-[#22222A] font-mono text-xs text-[#C7C7CF] shadow-xs">
              Cybersecurity
            </span>
            <span className="text-[#22222A]">•</span>
            <span className="px-3 py-1 rounded-full bg-[#121216] border border-[#22222A] font-mono text-xs text-[#C7C7CF] shadow-xs">
              System Design
            </span>
          </div>

          {/* Cinematic Name & Title */}
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-3">
            Kshitiz Khandelwal
          </h1>
          <p className="font-mono text-base sm:text-lg text-[#D4AF37] font-bold mb-6">
            AI/ML • Software Engineering • Product Development
          </p>

          {/* Narrative Positioning */}
          <p className="font-sans text-base sm:text-lg text-[#C7C7CF] max-w-xl leading-relaxed mb-8">
            I build AI-powered and full-stack systems that solve real-world problems — spanning{" "}
            <span className="text-white font-semibold underline decoration-[#D4AF37]/70">cybersecurity threat filtering</span>,{" "}
            <span className="text-white font-semibold underline decoration-[#DC143C]/70">privacy-preserving healthcare AI</span>, and{" "}
            <span className="text-white font-semibold underline decoration-[#FFD700]/60">real-time embedded hardware</span>.
          </p>

          {/* Terminal Card: $ whoami */}
          <div className="w-full max-w-xl bg-[#121216] border border-[#22222A] rounded-2xl p-4 sm:p-5 shadow-md mb-8 font-mono text-xs text-[#E4E4E9] relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#22222A]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#DC143C]" />
                <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-[#6B6B76] text-[11px] ml-2">bash — kshitiz@workstation</span>
              </div>
              <span className="text-[#D4AF37] font-bold text-[10px]">SYS_STATUS: ACTIVE</span>
            </div>

            <div className="space-y-1.5 leading-relaxed">
              <div>
                <span className="text-[#D4AF37] font-bold">$ whoami</span>
              </div>
              <div className="text-white font-bold">
                Kshitiz Khandelwal — Computer Science Student (BMSIT&amp;M)
              </div>
              <div className="text-[#8A8A94] pt-1">
                Currently building:
              </div>
              <div className="text-[#C7C7CF] pl-3 border-l-2 border-[#D4AF37] space-y-0.5 font-medium">
                <div>→ AI systems &amp; DNS threat defense pipelines</div>
                <div>→ Privacy-preserving federated healthcare ML</div>
                <div>→ Real-time embedded RTOS on Raspberry Pi Pico 2</div>
                <div>→ High-throughput full-stack products</div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="#featured-projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#D4AF37] text-[#0A0A0C] font-sans font-bold text-sm hover:bg-[#FFD700] hover:shadow-[0_0_24px_rgba(255,215,0,0.35)] shadow-sm transition-all active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/Kshitiz-Khandelwal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#121216] text-[#E4E4E9] border border-[#22222A] hover:border-[#D4AF37] text-sm font-sans font-medium hover:text-[#FFD700] shadow-xs transition-all active:scale-[0.98]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <button
              onClick={handleResume}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#121216] text-[#E4E4E9] border border-[#22222A] hover:border-[#D4AF37] text-sm font-sans font-medium hover:text-[#FFD700] shadow-xs transition-all active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4 text-[#D4AF37]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#121216] text-[#E4E4E9] border border-[#22222A] hover:border-[#D4AF37] text-sm font-sans font-medium hover:text-[#FFD700] shadow-xs transition-all active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>Contact Me</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Stylized Profile Image with Technical Coordinates */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center justify-center z-10"
        >
          <div className="relative w-full max-w-md bg-[#121216] border border-[#22222A] hover:border-[#D4AF37] rounded-3xl p-4 sm:p-5 shadow-xl transition-all duration-300">
            {/* Technical Frame Top Coordinate Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#22222A] font-mono text-[10px] text-[#8A8A94]">
              <span className="text-[#D4AF37] font-bold">ENG_ID: KSHITIZ-9491</span>
              <span>LOC: 13.13° N, 77.56° E</span>
            </div>

            {/* Profile Picture Container with Engineered Monochromatic Hover Reveal */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#1A1A1F] border border-[#22222A] group">
              <Image
                src="/profile.jpg"
                alt="Kshitiz Khandelwal"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top profile-engineered"
              />

              {/* Bottom Gradient Overlay with Label */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-left">
                <span className="font-mono text-xs uppercase tracking-widest text-white font-bold block">
                  Kshitiz Khandelwal
                </span>
                <span className="font-mono text-[11px] text-[#FFD700] block">
                  BMSIT&amp;M Bangalore • CSBS (9.43 CGPA)
                </span>
                <p className="font-sans text-[11px] text-[#9A9AA4] mt-1">
                  Hover to view natural photo • Systems &amp; AI
                </p>
              </div>
            </div>

            {/* Technical Frame Bottom Telemetry Bar */}
            <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#22222A] font-mono text-[10px] text-[#9A9AA4]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>SYSTEM CORE: ONLINE</span>
              </span>
              <span className="text-[#D4AF37] font-bold">SEC_LEVEL: ALPHA</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
