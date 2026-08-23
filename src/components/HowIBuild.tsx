"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function HowIBuild() {
  const [activeNote, setActiveNote] = useState<string | null>("research");

  const notesInfo: Record<string, { title: string; desc: string }> = {
    research: {
      title: "Research — Has someone solved this?",
      desc: "Before writing any code or picking heavy ML frameworks, I do exhaustive ground-truth reconnaissance: reading IEEE/arXiv papers, studying existing open-source implementations, and testing if a simpler heuristic or mathematical model solves 90% of the problem with 10x less overhead.",
    },
    architecture: {
      title: "Architecture & System Boundaries",
      desc: "Deconstructing constraints into clean interfaces: defining latency budgets, memory bounds, database indexes, and failure modes before laying down code.",
    },
    ai: {
      title: "AI / Heuristic Boundary",
      desc: "Use AI only where it genuinely provides a non-linear advantage. If a deterministic hash map or bloom filter does the job, don't force a heavy neural network.",
    },
    model: {
      title: "Model Selection",
      desc: "Evaluating LightGBM vs. XGBoost vs. neural networks based on inference latency floors (<1.2ms) and TreeSHAP explainability requirements.",
    },
    db: {
      title: "Storage & State Engines",
      desc: "Choosing stateful vs. stateless stores, SQLite/ChromaDB for offline edge RAG, or zero-copy memory buffers for real-time packet inspection.",
    },
    scale: {
      title: "Throughput & Scale Ceiling",
      desc: "Benchmarking hot paths against synthetic high-velocity workloads (e.g., 100,000 DNS queries/sec) to verify queue stability and zero packet drops.",
    },
    prototype: {
      title: "Prototype — Build it Ugly First",
      desc: "Get an end-to-end working loop running in 24 hours. Validate data ingestion and output formats before obsessing over polish.",
    },
    breakIt: {
      title: "Break It (Adversarial Stress)",
      desc: "Subject the prototype to edge-case anomalies, malformed packets, network timeouts, and synthetic DGA botnets to find where it fractures.",
    },
    fixIt: {
      title: "Fix It & Refactor",
      desc: "Eliminate performance bottlenecks, optimize zero-copy buffers, write comprehensive test assertions, and document APIs cleanly.",
    },
    ship: {
      title: "Ship & Observe",
      desc: "Deploy with continuous telemetry, evaluate real-world metrics against holdout sets, and iterate rapidly based on ground truth.",
    },
  };

  return (
    <section id="how-i-build" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#FFD700] font-bold mb-3">
            Engineering Methodology
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            How I Approach Things
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9A9AA4] mt-1 max-w-xl">
            A handcrafted mindmap of my engineering lifecycle: from problem reconnaissance to architectural tradeoffs, adversarial stress-testing, and shipping.
          </p>
        </div>
        <div className="font-hand text-lg text-[#FFD700] hidden md:block">
          * Click any note to read my engineering rationale
        </div>
      </div>

      {/* Dark Obsidian & Gold Handcrafted Sticky Note Flow Canvas */}
      <div className="relative bg-[#0E0E14] border-2 border-dashed border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.08)] overflow-hidden">
        {/* Subtle Ambient Gold Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Structured Desktop Mindmap Board with Precision Connecting Lines */}
        <div className="relative z-10 hidden lg:block">
          {/* Top Row: Heading Card & Research */}
          <div className="flex items-start justify-between gap-8 mb-10">
            {/* 1. Top Left: Main Heading Note */}
            <div
              className={`relative w-80 p-6 rounded-2xl bg-[#161622] border-2 transition-all duration-300 -rotate-2 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.7),0_0_15px_rgba(212,175,55,0.15)] ${
                activeNote === "research" ? "border-[#FFD700] scale-105" : "border-[#D4AF37]/50 hover:border-[#FFD700]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              <div className="red-tape" />
              <h3 className="font-hand font-bold text-3xl text-[#FFD700] text-center leading-tight">
                How I Approach Things
              </h3>
            </div>

            {/* Connecting Bridge Line */}
            <div className="flex-1 flex items-center justify-center pt-8">
              <div className="w-full border-t-2 border-dashed border-[#D4AF37]/60 relative">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700]" />
              </div>
            </div>

            {/* 2. Top Right: Research Card */}
            <div
              className={`relative w-96 p-5 rounded-2xl bg-[#161622] border-2 transition-all duration-300 rotate-1 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.7)] ${
                activeNote === "research" ? "border-[#FFD700] scale-105" : "border-[#D4AF37]/50 hover:border-[#FFD700]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              <div className="red-tape" />
              <h4 className="font-hand font-bold text-2xl text-white text-center leading-snug">
                Research — has someone solved this?
              </h4>
            </div>
          </div>

          {/* Middle Row: Architecture & 4 Mini Branching Nodes */}
          <div className="grid grid-cols-12 gap-6 items-center mb-10">
            {/* Connecting vertical drop to Architecture */}
            <div className="col-span-12 flex justify-center -mt-6 mb-2">
              <div className="h-8 border-l-2 border-dashed border-[#D4AF37]/60" />
            </div>

            {/* Center: Architecture Card (6 cols) */}
            <div className="col-span-6 flex justify-end pr-4">
              <div
                className={`relative w-80 p-6 rounded-2xl bg-[#181826] border-2 transition-all duration-300 -rotate-1 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.7)] ${
                  activeNote === "architecture" ? "border-[#FFD700] scale-105" : "border-[#D4AF37]/50 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("architecture")}
              >
                <div className="red-tape" />
                <h4 className="font-hand font-bold text-3xl text-white text-center">
                  Architecture
                </h4>
              </div>
            </div>

            {/* 4 Mini Branching Nodes (6 cols) with seamless bracket connectors */}
            <div className="col-span-6 pl-4 relative border-l-2 border-dashed border-[#D4AF37]/60 py-2">
              <div className="grid grid-cols-2 gap-3">
                <div
                  className={`relative p-3 rounded-xl bg-[#14141E] border transition-all rotate-1 cursor-pointer text-center ${
                    activeNote === "ai" ? "border-[#FFD700] bg-[#1C1C2A]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("ai")}
                >
                  <div className="red-pin" />
                  <span className="font-hand font-bold text-2xl text-[#FFD700]">AI?</span>
                </div>

                <div
                  className={`relative p-3 rounded-xl bg-[#14141E] border transition-all -rotate-1 cursor-pointer text-center ${
                    activeNote === "model" ? "border-[#FFD700] bg-[#1C1C2A]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("model")}
                >
                  <div className="red-pin" />
                  <span className="font-hand font-bold text-2xl text-[#FFD700]">Model?</span>
                </div>

                <div
                  className={`relative p-3 rounded-xl bg-[#14141E] border transition-all -rotate-2 cursor-pointer text-center ${
                    activeNote === "db" ? "border-[#FFD700] bg-[#1C1C2A]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("db")}
                >
                  <div className="red-pin" />
                  <span className="font-hand font-bold text-2xl text-[#FFD700]">DB?</span>
                </div>

                <div
                  className={`relative p-3 rounded-xl bg-[#14141E] border transition-all rotate-2 cursor-pointer text-center ${
                    activeNote === "scale" ? "border-[#FFD700] bg-[#1C1C2A]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("scale")}
                >
                  <div className="red-pin" />
                  <span className="font-hand font-bold text-2xl text-[#FFD700]">Scale?</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Prototype -> Break it -> Fix it -> Ship */}
          <div className="pt-4 border-t-2 border-dashed border-[#D4AF37]/30">
            <div className="flex items-center justify-between gap-3">
              {/* Prototype Card */}
              <div
                className={`relative w-80 p-5 rounded-2xl bg-[#161622] border-2 transition-all duration-300 -rotate-1 cursor-pointer shadow-md ${
                  activeNote === "prototype" ? "border-[#FFD700] scale-105" : "border-[#D4AF37]/50 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("prototype")}
              >
                <div className="red-tape" />
                <h4 className="font-hand font-bold text-2xl text-white text-center">
                  Prototype — build it ugly
                </h4>
              </div>

              {/* Arrow Connector */}
              <div className="border-t-2 border-dashed border-[#D4AF37]/60 w-10 relative">
                <span className="absolute -top-1.5 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FFD700] rotate-45" />
              </div>

              {/* Break it */}
              <div
                className={`relative w-36 p-4 rounded-xl bg-[#14141E] border transition-all rotate-1 cursor-pointer text-center ${
                  activeNote === "breakIt" ? "border-[#FFD700] bg-[#1C1C2A]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("breakIt")}
              >
                <div className="red-pin" />
                <span className="font-hand font-bold text-2xl text-[#FFD700]">Break it</span>
              </div>

              {/* Arrow Connector */}
              <div className="border-t-2 border-dashed border-[#D4AF37]/60 w-8 relative">
                <span className="absolute -top-1.5 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FFD700] rotate-45" />
              </div>

              {/* Fix it */}
              <div
                className={`relative w-36 p-4 rounded-xl bg-[#14141E] border transition-all -rotate-1 cursor-pointer text-center ${
                  activeNote === "fixIt" ? "border-[#FFD700] bg-[#1C1C2A]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("fixIt")}
              >
                <div className="red-pin" />
                <span className="font-hand font-bold text-2xl text-[#FFD700]">Fix it</span>
              </div>

              {/* Arrow Connector */}
              <div className="border-t-2 border-dashed border-[#D4AF37]/60 w-8 relative">
                <span className="absolute -top-1.5 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FFD700] rotate-45" />
              </div>

              {/* Ship */}
              <div
                className={`relative w-36 p-4 rounded-xl bg-[#181826] border-2 transition-all rotate-2 cursor-pointer text-center shadow-[0_0_15px_rgba(212,175,55,0.2)] ${
                  activeNote === "ship" ? "border-[#FFD700] scale-105" : "border-[#D4AF37] hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("ship")}
              >
                <div className="red-pin" />
                <span className="font-hand font-bold text-2xl text-[#FFD700]">Ship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Responsive Vertical Flow */}
        <div className="lg:hidden space-y-4">
          <div className="relative p-5 rounded-2xl bg-[#161622] border-2 border-[#D4AF37]/50 text-center">
            <div className="red-tape" />
            <h3 className="font-hand font-bold text-3xl text-[#FFD700]">
              How I Approach Things
            </h3>
          </div>

          <div
            onClick={() => setActiveNote("research")}
            className={`relative p-4 rounded-2xl bg-[#161622] border cursor-pointer ${
              activeNote === "research" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
            }`}
          >
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-2xl text-white text-center">
              1. Research — has someone solved this?
            </h4>
          </div>

          <div
            onClick={() => setActiveNote("architecture")}
            className={`relative p-4 rounded-2xl bg-[#161622] border cursor-pointer ${
              activeNote === "architecture" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
            }`}
          >
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-2xl text-white text-center">
              2. Architecture (AI? Model? DB? Scale?)
            </h4>
          </div>

          <div
            onClick={() => setActiveNote("prototype")}
            className={`relative p-4 rounded-2xl bg-[#161622] border cursor-pointer ${
              activeNote === "prototype" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
            }`}
          >
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-2xl text-white text-center">
              3. Prototype — build it ugly
            </h4>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div
              onClick={() => setActiveNote("breakIt")}
              className={`relative p-3 rounded-xl bg-[#14141E] border text-center cursor-pointer ${
                activeNote === "breakIt" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
              }`}
            >
              <div className="red-pin" />
              <span className="font-hand font-bold text-xl text-[#FFD700]">Break it</span>
            </div>
            <div
              onClick={() => setActiveNote("fixIt")}
              className={`relative p-3 rounded-xl bg-[#14141E] border text-center cursor-pointer ${
                activeNote === "fixIt" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
              }`}
            >
              <div className="red-pin" />
              <span className="font-hand font-bold text-xl text-[#FFD700]">Fix it</span>
            </div>
            <div
              onClick={() => setActiveNote("ship")}
              className={`relative p-3 rounded-xl bg-[#14141E] border-2 text-center cursor-pointer ${
                activeNote === "ship" ? "border-[#FFD700]" : "border-[#D4AF37]"
              }`}
            >
              <div className="red-pin" />
              <span className="font-hand font-bold text-xl text-[#FFD700]">Ship</span>
            </div>
          </div>
        </div>

        {/* Selected Field Note Explanatory Card */}
        {activeNote && notesInfo[activeNote] && (
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#14141E] border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)] animate-fadeIn">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#2A2A35]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                <h4 className="font-sans font-bold text-base sm:text-lg text-[#FFD700]">
                  {notesInfo[activeNote].title}
                </h4>
              </div>
              <span className="font-mono text-[10px] text-[#8A8A94] uppercase tracking-wider">
                ENGINEERING RATIONALE
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
              {notesInfo[activeNote].desc}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
