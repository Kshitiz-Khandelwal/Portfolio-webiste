"use client";

import React, { useState } from "react";
import { Sparkles, Zap, Puzzle, Cpu, Rocket, Network, Star, ArrowRight } from "lucide-react";

// Realistic 3D Push Pin Component
function PushPin({ color = "red", className = "" }: { color?: "red" | "coral" | "gold"; className?: string }) {
  return (
    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] ${className}`}>
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
        <defs>
          <radialGradient id={`pinGrad-${color}`} cx="35%" cy="30%" r="70%">
            {color === "red" || color === "coral" ? (
              <>
                <stop offset="0%" stopColor="#FFA4A4" />
                <stop offset="40%" stopColor="#E25543" />
                <stop offset="85%" stopColor="#991B1B" />
                <stop offset="100%" stopColor="#450A0A" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#FFF099" />
                <stop offset="40%" stopColor="#F8DC96" />
                <stop offset="80%" stopColor="#9A7E30" />
                <stop offset="100%" stopColor="#52390E" />
              </>
            )}
          </radialGradient>
          <linearGradient id="metalShaft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        <path d="M10 14 L11 23 L12 14 Z" fill="url(#metalShaft)" />
        <ellipse cx="11" cy="13.5" rx="5" ry="2" fill="#000" opacity="0.2" />
        <ellipse cx="11" cy="13" rx="4.5" ry="1.8" fill={`url(#pinGrad-${color})`} />
        <circle cx="11" cy="7" r="6" fill={`url(#pinGrad-${color})`} />
        <ellipse cx="8.5" cy="4.5" rx="2" ry="1.2" transform="rotate(-30 8.5 4.5)" fill="#FFF" opacity="0.75" />
      </svg>
    </div>
  );
}

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
          <span className="font-bree text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4BAA3] mb-2 block">
            Engineering Methodology
          </span>
          <h2 className="font-bree text-5xl sm:text-6xl md:text-7xl text-[#F5E1CD]">
            How I Approach Things
          </h2>
          <p className="font-gochi text-base sm:text-lg text-[#D4BAA3] mt-1 max-w-xl">
            A handcrafted mind map of my engineering lifecycle: from problem reconnaissance to architectural tradeoffs, adversarial stress-testing, and shipping.
          </p>
        </div>
        <div className="font-gochi text-lg text-[#F8DC96] hidden md:block">
          * Click any note to read my engineering rationale
        </div>
      </div>

      {/* Main Studio Sketchbook Pinboard Container */}
      <div className="relative bg-[#E9D3BB] border-[4px] border-[#3E3124] rounded-[28px] p-6 sm:p-10 shadow-paper overflow-hidden">
        {/* Background Stains */}
        <div className="coffee-stain absolute top-6 right-8 w-28 h-28 opacity-25" />
        <div className="coffee-stain absolute bottom-4 left-6 w-32 h-32 opacity-20" />

        {/* Structured Desktop Pinboard Flow Diagram */}
        <div className="relative z-10 hidden lg:block space-y-8 my-2">
          {/* Top Row: Heading Card & Research */}
          <div className="flex items-center justify-between gap-6">
            {/* 1. Left: Main Heading Sticky Note */}
            <div
              className={`relative w-[340px] p-5 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#3E3124] transition-all duration-300 -rotate-1 cursor-pointer shadow-sketch ${
                activeNote === "research" ? "scale-105 shadow-sketchLg border-[#E25543]" : "hover:border-[#E25543]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              <PushPin color="coral" />
              <div className="washi-tape-coral -top-3 left-6 rotate-[-5deg] !w-16 !h-4" />

              <h3 className="font-bree font-bold text-2xl text-[#3E3124] text-center leading-tight mt-1">
                How I Approach Things
              </h3>
              <p className="font-gochi text-xs text-[#6D6358] text-center mt-1">
                SYSTEMS LIFECYCLE MAP
              </p>
              <div className="w-16 h-1 bg-[#E25543]/60 mx-auto mt-2 rounded-full" />
            </div>

            {/* Connecting Pin-String / Dotted Line with Step 1 Pill */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
              <div className="w-full border-t-2 border-dashed border-[#3E3124]/40 relative flex items-center justify-center">
                <span className="px-3.5 py-1 rounded-full bg-[#F5E1CD] border-2 border-[#3E3124] font-gochi text-sm text-[#3E3124] font-bold shadow-xs">
                  Step 1: Reconnaissance ➔
                </span>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#E25543] shadow-xs mt-1" />
            </div>

            {/* 2. Right: Research Sticky Card */}
            <div
              className={`relative w-[420px] p-5 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#3E3124] transition-all duration-300 rotate-1 cursor-pointer shadow-sketch ${
                activeNote === "research" ? "scale-105 shadow-sketchLg border-[#E25543]" : "hover:border-[#E25543]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              <PushPin color="coral" />
              <div className="washi-tape-sage -top-3 right-6 rotate-[5deg] !w-16 !h-4" />

              <h4 className="font-bree font-bold text-xl text-[#3E3124] text-center leading-snug mt-1">
                Research — has someone solved this?
              </h4>
              <p className="font-gochi text-sm text-[#6D6358] text-center mt-1">
                Prior art, IEEE papers &amp; heuristics vs ML tradeoffs
              </p>
              <div className="w-20 h-1 bg-[#E25543]/60 mx-auto mt-2 rounded-full" />
            </div>
          </div>

          {/* Middle Row: Architecture + 4 Decision Branch Nodes */}
          <div className="grid grid-cols-12 gap-8 items-center pt-2 pb-4">
            {/* Left: Architecture Card with Network Icon */}
            <div className="col-span-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#F5E1CD] border-2 border-[#3E3124] flex items-center justify-center text-[#E25543] shrink-0 shadow-sketch">
                <Network className="w-7 h-7" />
              </div>

              <div
                className={`relative flex-1 p-5 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#3E3124] transition-all duration-300 -rotate-1 cursor-pointer shadow-sketch ${
                  activeNote === "architecture" ? "scale-105 shadow-sketchLg border-[#E25543]" : "hover:border-[#E25543]"
                }`}
                onClick={() => setActiveNote("architecture")}
              >
                <PushPin color="coral" />

                <h4 className="font-bree font-bold text-2xl text-[#3E3124] text-center mt-1">
                  Architecture
                </h4>
                <p className="font-gochi text-sm text-[#6D6358] text-center mt-1">
                  Latency budgets, API contracts &amp; State bounds
                </p>
                <div className="w-16 h-1 bg-[#E25543]/60 mx-auto mt-2 rounded-full" />
              </div>
            </div>

            {/* Right: 2x2 Decision Grid (AI, Model, DB, Scale) pinned to board */}
            <div className="col-span-6 pl-4 border-l-2 border-dashed border-[#3E3124]/30">
              <div className="grid grid-cols-2 gap-3.5">
                {/* AI? */}
                <div
                  className={`relative p-3.5 rounded-2xl bg-[#F5E1CD] border-2 border-[#3E3124] transition-all rotate-1 cursor-pointer text-center shadow-xs ${
                    activeNote === "ai" ? "bg-[#F7E8D8] border-[#E25543] shadow-sketch" : "hover:border-[#E25543]"
                  }`}
                  onClick={() => setActiveNote("ai")}
                >
                  <PushPin color="gold" className="-top-2.5 scale-90" />
                  <span className="font-bree font-bold text-lg text-[#E25543] block mt-0.5">AI?</span>
                  <span className="font-gochi text-xs text-[#3E3124]">Heuristic vs DNN</span>
                  <div className="w-8 h-0.5 bg-[#E25543]/50 mx-auto mt-1 rounded-full" />
                </div>

                {/* Model? */}
                <div
                  className={`relative p-3.5 rounded-2xl bg-[#F5E1CD] border-2 border-[#3E3124] transition-all -rotate-1 cursor-pointer text-center shadow-xs ${
                    activeNote === "model" ? "bg-[#F7E8D8] border-[#E25543] shadow-sketch" : "hover:border-[#E25543]"
                  }`}
                  onClick={() => setActiveNote("model")}
                >
                  <PushPin color="gold" className="-top-2.5 scale-90" />
                  <span className="font-bree font-bold text-lg text-[#E25543] block mt-0.5">Model?</span>
                  <span className="font-gochi text-xs text-[#3E3124]">LightGBM &lt;1.2ms</span>
                  <div className="w-8 h-0.5 bg-[#E25543]/50 mx-auto mt-1 rounded-full" />
                </div>

                {/* DB? */}
                <div
                  className={`relative p-3.5 rounded-2xl bg-[#F5E1CD] border-2 border-[#3E3124] transition-all -rotate-1 cursor-pointer text-center shadow-xs ${
                    activeNote === "db" ? "bg-[#F7E8D8] border-[#E25543] shadow-sketch" : "hover:border-[#E25543]"
                  }`}
                  onClick={() => setActiveNote("db")}
                >
                  <PushPin color="gold" className="-top-2.5 scale-90" />
                  <span className="font-bree font-bold text-lg text-[#E25543] block mt-0.5">DB?</span>
                  <span className="font-gochi text-xs text-[#3E3124]">Zero-copy vs SQL</span>
                  <div className="w-8 h-0.5 bg-[#E25543]/50 mx-auto mt-1 rounded-full" />
                </div>

                {/* Scale? */}
                <div
                  className={`relative p-3.5 rounded-2xl bg-[#F5E1CD] border-2 border-[#3E3124] transition-all rotate-1 cursor-pointer text-center shadow-xs ${
                    activeNote === "scale" ? "bg-[#F7E8D8] border-[#E25543] shadow-sketch" : "hover:border-[#E25543]"
                  }`}
                  onClick={() => setActiveNote("scale")}
                >
                  <PushPin color="gold" className="-top-2.5 scale-90" />
                  <span className="font-bree font-bold text-lg text-[#E25543] block mt-0.5">Scale?</span>
                  <span className="font-gochi text-xs text-[#3E3124]">100k req/sec load</span>
                  <div className="w-8 h-0.5 bg-[#E25543]/50 mx-auto mt-1 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Execution Chain: Prototype ➔ Break it ➔ Fix it ➔ Ship */}
          <div className="pt-6 border-t-2 border-dashed border-[#3E3124]/30">
            <div className="flex items-center justify-between gap-3">
              {/* Step 1: Prototype */}
              <div
                className={`relative flex-1 p-4 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#3E3124] flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-sketch ${
                  activeNote === "prototype" ? "scale-105 shadow-sketchLg border-[#E25543]" : "hover:border-[#E25543]"
                }`}
                onClick={() => setActiveNote("prototype")}
              >
                <PushPin color="coral" />
                <div className="w-11 h-11 rounded-full bg-[#E9D3BB] border-2 border-[#3E3124] flex items-center justify-center text-[#E25543] shrink-0 mt-1">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left flex-1 min-w-0 mt-1">
                  <h4 className="font-bree font-bold text-base text-[#3E3124] truncate">
                    Prototype
                  </h4>
                  <p className="font-gochi text-xs text-[#6D6358] truncate">
                    24-hr fast iteration loop
                  </p>
                </div>
              </div>

              {/* Arrow Connector */}
              <span className="text-[#E25543] font-mono text-base font-bold shrink-0">➔</span>

              {/* Step 2: Break it */}
              <div
                className={`relative flex-1 p-4 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#3E3124] flex items-center gap-3 transition-all duration-300 rotate-1 cursor-pointer shadow-sketch ${
                  activeNote === "breakIt" ? "scale-105 shadow-sketchLg border-[#E25543]" : "hover:border-[#E25543]"
                }`}
                onClick={() => setActiveNote("breakIt")}
              >
                <PushPin color="gold" />
                <div className="w-11 h-11 rounded-full bg-[#E9D3BB] border-2 border-[#3E3124] flex items-center justify-center text-[#9A7E30] shrink-0 mt-1">
                  <Puzzle className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0 mt-1">
                  <h4 className="font-bree font-bold text-base text-[#3E3124] truncate">
                    Break it
                  </h4>
                  <p className="font-gochi text-xs text-[#6D6358] truncate">
                    Fuzzing &amp; Strides
                  </p>
                </div>
              </div>

              {/* Arrow Connector */}
              <span className="text-[#E25543] font-mono text-base font-bold shrink-0">➔</span>

              {/* Step 3: Fix it */}
              <div
                className={`relative flex-1 p-4 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#3E3124] flex items-center gap-3 transition-all duration-300 -rotate-1 cursor-pointer shadow-sketch ${
                  activeNote === "fixIt" ? "scale-105 shadow-sketchLg border-[#E25543]" : "hover:border-[#E25543]"
                }`}
                onClick={() => setActiveNote("fixIt")}
              >
                <PushPin color="gold" />
                <div className="w-11 h-11 rounded-full bg-[#E9D3BB] border-2 border-[#3E3124] flex items-center justify-center text-[#5C755A] shrink-0 mt-1">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0 mt-1">
                  <h4 className="font-bree font-bold text-base text-[#3E3124] truncate">
                    Fix it
                  </h4>
                  <p className="font-gochi text-xs text-[#6D6358] truncate">
                    Memory Refactor
                  </p>
                </div>
              </div>

              {/* Arrow Connector */}
              <span className="text-[#E25543] font-mono text-base font-bold shrink-0">➔</span>

              {/* Step 4: Ship */}
              <div
                className={`relative flex-1 p-4 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#3E3124] flex items-center gap-3 transition-all duration-300 rotate-1 cursor-pointer shadow-sketch ${
                  activeNote === "ship" ? "scale-105 shadow-sketchLg border-[#E25543]" : "hover:border-[#E25543]"
                }`}
                onClick={() => setActiveNote("ship")}
              >
                <PushPin color="coral" />
                <div className="w-11 h-11 rounded-full bg-[#E9D3BB] border-2 border-[#3E3124] flex items-center justify-center text-[#E25543] shrink-0 mt-1">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0 mt-1">
                  <h4 className="font-bree font-bold text-base text-[#3E3124] truncate">
                    Ship
                  </h4>
                  <p className="font-gochi text-xs text-[#6D6358] truncate">
                    Telemetry &amp; CI/CD
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Quote Pill */}
          <div className="pt-4 text-center">
            <div className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-[#F5E1CD] border-2 border-[#3E3124] text-sm font-gochi text-[#3E3124] shadow-sketch font-bold">
              <Star className="w-4 h-4 fill-current text-[#E25543]" />
              <span>Iterate relentlessly. Measure everything. Ship with confidence.</span>
            </div>
          </div>
        </div>

        {/* Selected Field Note Explanatory Card */}
        {activeNote && notesInfo[activeNote] && (
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#3E3124] shadow-sketch animate-fadeIn">
            <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-dashed border-[#3E3124]/30">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E25543]" />
                <h4 className="font-bree font-bold text-lg text-[#3E3124]">
                  {notesInfo[activeNote].title}
                </h4>
              </div>
              <span className="font-gochi text-xs text-[#6D6358] uppercase tracking-wider font-bold">
                ENGINEERING RATIONALE
              </span>
            </div>
            <p className="font-gochi text-base sm:text-lg text-[#3E3124] leading-relaxed">
              {notesInfo[activeNote].desc}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
