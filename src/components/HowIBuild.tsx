"use client";

import React, { useState } from "react";
import { Sparkles, Zap, Puzzle, Cpu, Rocket, Network, Star, ArrowRight } from "lucide-react";

export function HowIBuild() {
  const [activeNote, setActiveNote] = useState<string | null>("research");

  const notesInfo: Record<string, { title: string; desc: string }> = {
    research: {
      title: "1. Research — Has someone solved this?",
      desc: "Before writing any code or picking heavy ML frameworks, I do exhaustive ground-truth reconnaissance: reading IEEE/arXiv papers, studying existing open-source implementations, and testing if a simpler heuristic or mathematical model solves 90% of the problem with 10x less overhead.",
    },
    architecture: {
      title: "2. Architecture & System Boundaries",
      desc: "Deconstructing constraints into clean interfaces: defining latency budgets, memory bounds, database indexes, and failure modes before laying down code.",
    },
    ai: {
      title: "Branch A: AI / Heuristic Boundary",
      desc: "Use AI only where it genuinely provides a non-linear advantage. If a deterministic hash map or bloom filter does the job, don't force a heavy neural network.",
    },
    model: {
      title: "Branch B: Model Selection",
      desc: "Evaluating LightGBM vs. XGBoost vs. neural networks based on inference latency floors (<1.2ms) and TreeSHAP explainability requirements.",
    },
    db: {
      title: "Branch C: Storage & State Engines",
      desc: "Choosing stateful vs. stateless stores, SQLite/ChromaDB for offline edge RAG, or zero-copy memory buffers for real-time packet inspection.",
    },
    scale: {
      title: "Branch D: Throughput & Scale Ceiling",
      desc: "Benchmarking hot paths against synthetic high-velocity workloads (e.g., 100,000 DNS queries/sec) to verify queue stability and zero packet drops.",
    },
    prototype: {
      title: "3. Prototype — Build it Ugly First",
      desc: "Get an end-to-end working loop running in 24 hours. Validate data ingestion and output formats before obsessing over polish.",
    },
    breakIt: {
      title: "4. Break It (Adversarial Stress)",
      desc: "Subject the prototype to edge-case anomalies, malformed packets, network timeouts, and synthetic DGA botnets to find where it fractures.",
    },
    fixIt: {
      title: "5. Fix It & Refactor",
      desc: "Eliminate performance bottlenecks, optimize zero-copy buffers, write comprehensive test assertions, and document APIs cleanly.",
    },
    ship: {
      title: "6. Ship & Observe",
      desc: "Deploy with continuous telemetry, evaluate real-world metrics against holdout sets, and iterate rapidly based on ground truth.",
    },
  };

  return (
    <section id="how-i-build" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#FFD700] font-bold mb-3">
            ENGINEERING METHODOLOGY
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            How I Approach Things
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9A9AA4] mt-1 max-w-xl">
            A handcrafted mind map of my engineering lifecycle: from problem reconnaissance to architectural tradeoffs, adversarial stress-testing, and shipping.
          </p>
        </div>
        <div className="font-hand text-lg text-[#FFD700] hidden md:block">
          * Check any note to read my engineering rationale
        </div>
      </div>

      {/* Main Dark Obsidian Mindmap Canvas Container */}
      <div className="relative bg-[#0A0A0F] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.08)] overflow-hidden">
        {/* Subtle Background Particle Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Structured Desktop Mindmap Diagram */}
        <div className="relative z-10 hidden lg:block space-y-8">
          {/* Top Row: Heading Card & Research */}
          <div className="flex items-center justify-between gap-6">
            {/* 1. Left: Main Heading Card */}
            <div
              className={`relative w-[340px] p-5 rounded-2xl bg-[#12121A] border transition-all duration-300 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.7)] ${
                activeNote === "research" ? "border-[#FFD700] shadow-[0_0_15px_rgba(212,175,55,0.25)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              <div className="red-tape" />
              <h3 className="font-hand font-bold text-2xl text-[#FFD700] text-center leading-tight">
                How I Approach Things
              </h3>
              <p className="font-mono text-[10px] text-[#A1A1AA] text-center mt-1">
                SYSTEMS LIFECYCLE MAP
              </p>
              <div className="w-16 h-0.5 bg-[#D4AF37]/60 mx-auto mt-2 rounded-full" />
            </div>

            {/* Connecting Dotted Line with Step 1 Pill */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
              <div className="w-full border-t border-dashed border-[#D4AF37]/50 relative flex items-center justify-center">
                <span className="px-3.5 py-1 rounded-full bg-[#12121A] border border-[#D4AF37]/60 font-mono text-[10px] text-[#FFD700] font-bold shadow-xs">
                  Step 1: Reconnaissance ➔
                </span>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700] mt-1" />
            </div>

            {/* 2. Right: Research Card */}
            <div
              className={`relative w-[420px] p-5 rounded-2xl bg-[#12121A] border transition-all duration-300 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.7)] ${
                activeNote === "research" ? "border-[#FFD700] shadow-[0_0_15px_rgba(212,175,55,0.25)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              <div className="red-tape" />
              <h4 className="font-hand font-bold text-xl text-white text-center leading-snug">
                Research — has someone solved this?
              </h4>
              <p className="font-sans text-xs text-[#CBD5E1] text-center mt-1">
                Prior art, IEEE papers &amp; heuristics vs ML tradeoffs
              </p>
              <div className="w-20 h-0.5 bg-[#D4AF37]/60 mx-auto mt-2 rounded-full" />
            </div>
          </div>

          {/* Middle Row: Architecture + 4 Branching Decision Nodes */}
          <div className="grid grid-cols-12 gap-8 items-center pt-2 pb-4">
            {/* Left: Architecture with Glowing Network Icon */}
            <div className="col-span-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#12121A] border border-[#D4AF37] flex items-center justify-center text-[#FFD700] shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <Network className="w-7 h-7" />
              </div>

              <div
                className={`relative flex-1 p-5 rounded-2xl bg-[#12121A] border transition-all duration-300 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.7)] ${
                  activeNote === "architecture" ? "border-[#FFD700] shadow-[0_0_15px_rgba(212,175,55,0.25)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("architecture")}
              >
                <div className="red-tape" />
                <h4 className="font-hand font-bold text-2xl text-white text-center">
                  Architecture
                </h4>
                <p className="font-sans text-xs text-[#CBD5E1] text-center mt-1">
                  Latency budgets, API contracts &amp; State bounds
                </p>
                <div className="w-16 h-0.5 bg-[#D4AF37]/60 mx-auto mt-2 rounded-full" />
              </div>
            </div>

            {/* Right: 2x2 Decision Grid (AI, Model, DB, Scale) */}
            <div className="col-span-6 pl-4 border-l border-dashed border-[#D4AF37]/40">
              <div className="grid grid-cols-2 gap-3.5">
                {/* AI? */}
                <div
                  className={`relative p-3.5 rounded-2xl bg-[#12121A] border transition-all cursor-pointer text-center ${
                    activeNote === "ai" ? "border-[#FFD700] bg-[#1A1A24]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("ai")}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mx-auto mb-1" />
                  <span className="font-hand font-bold text-lg text-[#FFD700] block">AI?</span>
                  <span className="font-sans text-[11px] text-[#CBD5E1]">Heuristic vs DNN</span>
                  <div className="w-8 h-0.5 bg-[#D4AF37]/50 mx-auto mt-1.5 rounded-full" />
                </div>

                {/* Model? */}
                <div
                  className={`relative p-3.5 rounded-2xl bg-[#12121A] border transition-all cursor-pointer text-center ${
                    activeNote === "model" ? "border-[#FFD700] bg-[#1A1A24]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("model")}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mx-auto mb-1" />
                  <span className="font-hand font-bold text-lg text-[#FFD700] block">Model?</span>
                  <span className="font-sans text-[11px] text-[#CBD5E1]">LightGBM &lt;1.2ms</span>
                  <div className="w-8 h-0.5 bg-[#D4AF37]/50 mx-auto mt-1.5 rounded-full" />
                </div>

                {/* DB? */}
                <div
                  className={`relative p-3.5 rounded-2xl bg-[#12121A] border transition-all cursor-pointer text-center ${
                    activeNote === "db" ? "border-[#FFD700] bg-[#1A1A24]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("db")}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mx-auto mb-1" />
                  <span className="font-hand font-bold text-lg text-[#FFD700] block">DB?</span>
                  <span className="font-sans text-[11px] text-[#CBD5E1]">Zero-copy vs SQL</span>
                  <div className="w-8 h-0.5 bg-[#D4AF37]/50 mx-auto mt-1.5 rounded-full" />
                </div>

                {/* Scale? */}
                <div
                  className={`relative p-3.5 rounded-2xl bg-[#12121A] border transition-all cursor-pointer text-center ${
                    activeNote === "scale" ? "border-[#FFD700] bg-[#1A1A24]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("scale")}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mx-auto mb-1" />
                  <span className="font-hand font-bold text-lg text-[#FFD700] block">Scale?</span>
                  <span className="font-sans text-[11px] text-[#CBD5E1]">100k req/sec load</span>
                  <div className="w-8 h-0.5 bg-[#D4AF37]/50 mx-auto mt-1.5 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Prototype ➔ Break it ➔ Fix it ➔ Ship */}
          <div className="pt-6 border-t border-dashed border-[#D4AF37]/30">
            <div className="flex items-center justify-between gap-3">
              {/* Step 1: Prototype */}
              <div
                className={`relative flex-1 p-4 rounded-2xl bg-[#12121A] border flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-md ${
                  activeNote === "prototype" ? "border-[#FFD700] shadow-[0_0_15px_rgba(212,175,55,0.25)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("prototype")}
              >
                <div className="red-tape" />
                <div className="w-11 h-11 rounded-full bg-[#1A1A24] border border-[#D4AF37] flex items-center justify-center text-[#FFD700] shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-hand font-bold text-base text-white truncate">
                    Prototype — build it ugly
                  </h4>
                  <p className="font-sans text-[10px] text-[#CBD5E1] truncate">
                    24-hr fast iteration loop
                  </p>
                  <div className="w-12 h-0.5 bg-[#D4AF37]/50 mt-1 rounded-full" />
                </div>
              </div>

              {/* Arrow Connector */}
              <span className="text-[#FFD700] font-mono text-base font-bold shrink-0">➔</span>

              {/* Step 2: Break it */}
              <div
                className={`relative flex-1 p-4 rounded-2xl bg-[#12121A] border flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-md ${
                  activeNote === "breakIt" ? "border-[#FFD700] shadow-[0_0_15px_rgba(212,175,55,0.25)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("breakIt")}
              >
                <div className="w-11 h-11 rounded-full bg-[#1A1A24] border border-[#D4AF37] flex items-center justify-center text-[#FFD700] shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  <Puzzle className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-hand font-bold text-base text-[#FFD700] truncate">
                    Break it
                  </h4>
                  <p className="font-sans text-[10px] text-[#CBD5E1] truncate">
                    Fuzzing &amp; Strides
                  </p>
                  <div className="w-10 h-0.5 bg-[#D4AF37]/50 mt-1 rounded-full" />
                </div>
              </div>

              {/* Arrow Connector */}
              <span className="text-[#FFD700] font-mono text-base font-bold shrink-0">➔</span>

              {/* Step 3: Fix it */}
              <div
                className={`relative flex-1 p-4 rounded-2xl bg-[#12121A] border flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-md ${
                  activeNote === "fixIt" ? "border-[#FFD700] shadow-[0_0_15px_rgba(212,175,55,0.25)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("fixIt")}
              >
                <div className="w-11 h-11 rounded-full bg-[#1A1A24] border border-[#D4AF37] flex items-center justify-center text-[#FFD700] shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-hand font-bold text-base text-[#FFD700] truncate">
                    Fix it
                  </h4>
                  <p className="font-sans text-[10px] text-[#CBD5E1] truncate">
                    Memory Refactor
                  </p>
                  <div className="w-10 h-0.5 bg-[#D4AF37]/50 mt-1 rounded-full" />
                </div>
              </div>

              {/* Arrow Connector */}
              <span className="text-[#FFD700] font-mono text-base font-bold shrink-0">➔</span>

              {/* Step 4: Ship */}
              <div
                className={`relative flex-1 p-4 rounded-2xl bg-[#12121A] border flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-md ${
                  activeNote === "ship" ? "border-[#FFD700] shadow-[0_0_15px_rgba(212,175,55,0.25)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("ship")}
              >
                <div className="w-11 h-11 rounded-full bg-[#1A1A24] border border-[#D4AF37] flex items-center justify-center text-[#FFD700] shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-hand font-bold text-base text-[#FFD700] truncate">
                    Ship
                  </h4>
                  <p className="font-sans text-[10px] text-[#CBD5E1] truncate">
                    Telemetry &amp; CI/CD
                  </p>
                  <div className="w-8 h-0.5 bg-[#D4AF37]/50 mt-1 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Quote Banner */}
          <div className="pt-4 text-center">
            <div className="inline-flex items-center justify-center gap-2.5 px-6 py-2 rounded-full bg-[#12121A] border border-[#D4AF37]/40 text-xs font-mono text-[#FFD700] shadow-sm">
              <Star className="w-4 h-4 fill-current text-[#FFD700]" />
              <span>Iterate relentlessly. Measure everything. Ship with confidence.</span>
            </div>
          </div>
        </div>

        {/* Mobile Responsive Layout */}
        <div className="lg:hidden space-y-4">
          <div className="relative p-5 rounded-2xl bg-[#12121A] border border-[#D4AF37]/50 text-center">
            <div className="red-tape" />
            <h3 className="font-hand font-bold text-3xl text-[#FFD700]">
              How I Approach Things
            </h3>
            <p className="font-mono text-[10px] text-[#A1A1AA] mt-1">
              SYSTEMS LIFECYCLE MAP
            </p>
          </div>

          <div
            onClick={() => setActiveNote("research")}
            className={`relative p-4 rounded-2xl bg-[#12121A] border cursor-pointer ${
              activeNote === "research" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
            }`}
          >
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-xl text-white text-center">
              1. Research — has someone solved this?
            </h4>
            <p className="font-sans text-xs text-[#CBD5E1] text-center mt-1">
              Prior art, IEEE papers &amp; heuristics vs ML tradeoffs
            </p>
          </div>

          <div
            onClick={() => setActiveNote("architecture")}
            className={`relative p-4 rounded-2xl bg-[#12121A] border cursor-pointer ${
              activeNote === "architecture" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
            }`}
          >
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-xl text-white text-center">
              2. Architecture (AI? Model? DB? Scale?)
            </h4>
            <p className="font-sans text-xs text-[#CBD5E1] text-center mt-1">
              Latency budgets, API contracts &amp; memory limits
            </p>
          </div>

          <div
            onClick={() => setActiveNote("prototype")}
            className={`relative p-4 rounded-2xl bg-[#12121A] border cursor-pointer ${
              activeNote === "prototype" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
            }`}
          >
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-xl text-white text-center">
              3. Prototype — build it ugly
            </h4>
            <p className="font-sans text-xs text-[#CBD5E1] text-center mt-1">
              24-hour rapid end-to-end MVP iteration
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div
              onClick={() => setActiveNote("breakIt")}
              className={`relative p-3 rounded-xl bg-[#12121A] border text-center cursor-pointer ${
                activeNote === "breakIt" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
              }`}
            >
              <span className="font-hand font-bold text-base text-[#FFD700] block">Break it</span>
              <span className="font-sans text-[10px] text-[#CBD5E1]">Fuzzing</span>
            </div>
            <div
              onClick={() => setActiveNote("fixIt")}
              className={`relative p-3 rounded-xl bg-[#12121A] border text-center cursor-pointer ${
                activeNote === "fixIt" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
              }`}
            >
              <span className="font-hand font-bold text-base text-[#FFD700] block">Fix it</span>
              <span className="font-sans text-[10px] text-[#CBD5E1]">Refactor</span>
            </div>
            <div
              onClick={() => setActiveNote("ship")}
              className={`relative p-3 rounded-xl bg-[#12121A] border text-center cursor-pointer ${
                activeNote === "ship" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
              }`}
            >
              <span className="font-hand font-bold text-base text-[#FFD700] block">Ship</span>
              <span className="font-sans text-[10px] text-[#CBD5E1]">Deploy</span>
            </div>
          </div>
        </div>

        {/* Selected Field Note Explanatory Card */}
        {activeNote && notesInfo[activeNote] && (
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#12121A] border border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)] animate-fadeIn">
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
