"use client";

import React, { useState } from "react";
import { Sparkles, Zap, Puzzle, Cpu, Rocket, Network, Star, ArrowRight } from "lucide-react";

// Realistic 3D Push Pin Component
function PushPin({ color = "red", className = "" }: { color?: "red" | "gold"; className?: string }) {
  return (
    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)] ${className}`}>
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
        <defs>
          <radialGradient id={`pinGrad-${color}`} cx="35%" cy="30%" r="70%">
            {color === "red" ? (
              <>
                <stop offset="0%" stopColor="#FFA4A4" />
                <stop offset="40%" stopColor="#DC2626" />
                <stop offset="85%" stopColor="#991B1B" />
                <stop offset="100%" stopColor="#450A0A" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#FFF099" />
                <stop offset="40%" stopColor="#FFD700" />
                <stop offset="80%" stopColor="#B45309" />
                <stop offset="100%" stopColor="#78350F" />
              </>
            )}
          </radialGradient>
          <linearGradient id="metalShaft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        {/* Needle shaft going into board */}
        <path d="M10 14 L11 23 L12 14 Z" fill="url(#metalShaft)" />
        {/* Pin Body Lower Ring */}
        <ellipse cx="11" cy="13.5" rx="5" ry="2" fill="#000" opacity="0.3" />
        <ellipse cx="11" cy="13" rx="4.5" ry="1.8" fill={`url(#pinGrad-${color})`} />
        {/* Pin Head Sphere with Gloss */}
        <circle cx="11" cy="7" r="6" fill={`url(#pinGrad-${color})`} />
        {/* Specular Highlight */}
        <ellipse cx="8.5" cy="4.5" rx="2" ry="1.2" transform="rotate(-30 8.5 4.5)" fill="#FFF" opacity="0.75" />
      </svg>
    </div>
  );
}

// Brass Corner Tack for the Main Bulletin Board
function CornerTack({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const posClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  }[position];

  return (
    <div className={`absolute ${posClasses} z-20 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8" fill="#1C1810" stroke="#785920" strokeWidth="1" />
        <circle cx="9" cy="9" r="6.5" fill="radial-gradient(circle at 35% 35%, #FFE27A 0%, #D4AF37 50%, #7A5314 100%)" />
        <circle cx="9" cy="9" r="6.5" fill="#D4AF37" />
        <circle cx="7" cy="7" r="2" fill="#FFF8DC" opacity="0.8" />
        <circle cx="9" cy="9" r="1.5" fill="#52390E" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#FFD700] font-bold mb-3 shadow-xs">
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

      {/* Tactile Dark Cork / Bulletin Pinboard Frame Container */}
      <div className="relative bg-[#0C0D12] border-4 border-[#22232E] rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),inset_0_0_40px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.1)] overflow-hidden">
        {/* Cork / Felt Board Texture Overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Subtle Corkboard Noise Texture Vignette */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_60px_rgba(0,0,0,0.85)] border border-[#D4AF37]/25" />

        {/* 4 Corner Brass Board Mounting Tacks */}
        <CornerTack position="top-left" />
        <CornerTack position="top-right" />
        <CornerTack position="bottom-left" />
        <CornerTack position="bottom-right" />

        {/* Structured Desktop Pinboard Flow Diagram */}
        <div className="relative z-10 hidden lg:block space-y-8 my-2">
          {/* Top Row: Heading Card & Research */}
          <div className="flex items-center justify-between gap-6">
            {/* 1. Left: Main Heading Sticky Note */}
            <div
              className={`relative w-[340px] p-5 rounded-2xl bg-[#141520] border transition-all duration-300 -rotate-1 cursor-pointer shadow-[0_12px_28px_rgba(0,0,0,0.7)] ${
                activeNote === "research" ? "border-[#FFD700] scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              {/* Red Pushpin pinned through top */}
              <PushPin color="red" />
              <div className="red-tape" />

              <h3 className="font-hand font-bold text-2xl text-[#FFD700] text-center leading-tight mt-1">
                How I Approach Things
              </h3>
              <p className="font-mono text-[10px] text-[#A1A1AA] text-center mt-1">
                SYSTEMS LIFECYCLE MAP
              </p>
              <div className="w-16 h-0.5 bg-[#D4AF37]/60 mx-auto mt-2 rounded-full" />
            </div>

            {/* Connecting Pin-String / Dotted Line with Step 1 Pill */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
              <div className="w-full border-t-2 border-dashed border-[#D4AF37]/50 relative flex items-center justify-center">
                <span className="px-3.5 py-1 rounded-full bg-[#141520] border border-[#D4AF37]/60 font-mono text-[10px] text-[#FFD700] font-bold shadow-md">
                  Step 1: Reconnaissance ➔
                </span>
              </div>
              {/* Glowing Yellow Pin Node */}
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700] mt-1" />
            </div>

            {/* 2. Right: Research Sticky Card */}
            <div
              className={`relative w-[420px] p-5 rounded-2xl bg-[#141520] border transition-all duration-300 rotate-1 cursor-pointer shadow-[0_12px_28px_rgba(0,0,0,0.7)] ${
                activeNote === "research" ? "border-[#FFD700] scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              {/* Red Pushpin */}
              <PushPin color="red" />
              <div className="red-tape" />

              <h4 className="font-hand font-bold text-xl text-white text-center leading-snug mt-1">
                Research — has someone solved this?
              </h4>
              <p className="font-sans text-xs text-[#CBD5E1] text-center mt-1">
                Prior art, IEEE papers &amp; heuristics vs ML tradeoffs
              </p>
              <div className="w-20 h-0.5 bg-[#D4AF37]/60 mx-auto mt-2 rounded-full" />
            </div>
          </div>

          {/* Middle Row: Architecture + 4 Decision Branch Nodes */}
          <div className="grid grid-cols-12 gap-8 items-center pt-2 pb-4">
            {/* Left: Architecture Card with Glowing Hierarchy Icon */}
            <div className="col-span-6 flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-[#141520] border-2 border-[#D4AF37] flex items-center justify-center text-[#FFD700] shrink-0 shadow-[0_0_16px_rgba(212,175,55,0.35)]">
                  <Network className="w-7 h-7" />
                </div>
              </div>

              <div
                className={`relative flex-1 p-5 rounded-2xl bg-[#141520] border transition-all duration-300 -rotate-1 cursor-pointer shadow-[0_12px_28px_rgba(0,0,0,0.7)] ${
                  activeNote === "architecture" ? "border-[#FFD700] scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("architecture")}
              >
                {/* Red Pushpin */}
                <PushPin color="red" />
                <div className="red-tape" />

                <h4 className="font-hand font-bold text-2xl text-white text-center mt-1">
                  Architecture
                </h4>
                <p className="font-sans text-xs text-[#CBD5E1] text-center mt-1">
                  Latency budgets, API contracts &amp; State bounds
                </p>
                <div className="w-16 h-0.5 bg-[#D4AF37]/60 mx-auto mt-2 rounded-full" />
              </div>
            </div>

            {/* Right: 2x2 Decision Grid (AI, Model, DB, Scale) pinned to board */}
            <div className="col-span-6 pl-4 border-l-2 border-dashed border-[#D4AF37]/40">
              <div className="grid grid-cols-2 gap-3.5">
                {/* AI? */}
                <div
                  className={`relative p-3.5 rounded-2xl bg-[#141520] border transition-all rotate-1 cursor-pointer text-center ${
                    activeNote === "ai" ? "border-[#FFD700] bg-[#1C1E2C] shadow-[0_0_12px_rgba(212,175,55,0.25)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("ai")}
                >
                  <PushPin color="gold" className="-top-2.5 scale-90" />
                  <span className="font-hand font-bold text-lg text-[#FFD700] block mt-0.5">AI?</span>
                  <span className="font-sans text-[11px] text-[#CBD5E1]">Heuristic vs DNN</span>
                  <div className="w-8 h-0.5 bg-[#D4AF37]/50 mx-auto mt-1.5 rounded-full" />
                </div>

                {/* Model? */}
                <div
                  className={`relative p-3.5 rounded-2xl bg-[#141520] border transition-all -rotate-1 cursor-pointer text-center ${
                    activeNote === "model" ? "border-[#FFD700] bg-[#1C1E2C] shadow-[0_0_12px_rgba(212,175,55,0.25)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("model")}
                >
                  <PushPin color="gold" className="-top-2.5 scale-90" />
                  <span className="font-hand font-bold text-lg text-[#FFD700] block mt-0.5">Model?</span>
                  <span className="font-sans text-[11px] text-[#CBD5E1]">LightGBM &lt;1.2ms</span>
                  <div className="w-8 h-0.5 bg-[#D4AF37]/50 mx-auto mt-1.5 rounded-full" />
                </div>

                {/* DB? */}
                <div
                  className={`relative p-3.5 rounded-2xl bg-[#141520] border transition-all -rotate-1 cursor-pointer text-center ${
                    activeNote === "db" ? "border-[#FFD700] bg-[#1C1E2C] shadow-[0_0_12px_rgba(212,175,55,0.25)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("db")}
                >
                  <PushPin color="gold" className="-top-2.5 scale-90" />
                  <span className="font-hand font-bold text-lg text-[#FFD700] block mt-0.5">DB?</span>
                  <span className="font-sans text-[11px] text-[#CBD5E1]">Zero-copy vs SQL</span>
                  <div className="w-8 h-0.5 bg-[#D4AF37]/50 mx-auto mt-1.5 rounded-full" />
                </div>

                {/* Scale? */}
                <div
                  className={`relative p-3.5 rounded-2xl bg-[#141520] border transition-all rotate-1 cursor-pointer text-center ${
                    activeNote === "scale" ? "border-[#FFD700] bg-[#1C1E2C] shadow-[0_0_12px_rgba(212,175,55,0.25)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("scale")}
                >
                  <PushPin color="gold" className="-top-2.5 scale-90" />
                  <span className="font-hand font-bold text-lg text-[#FFD700] block mt-0.5">Scale?</span>
                  <span className="font-sans text-[11px] text-[#CBD5E1]">100k req/sec load</span>
                  <div className="w-8 h-0.5 bg-[#D4AF37]/50 mx-auto mt-1.5 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Execution Chain: Prototype ➔ Break it ➔ Fix it ➔ Ship */}
          <div className="pt-6 border-t-2 border-dashed border-[#D4AF37]/30">
            <div className="flex items-center justify-between gap-3">
              {/* Step 1: Prototype */}
              <div
                className={`relative flex-1 p-4 rounded-2xl bg-[#141520] border flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-md ${
                  activeNote === "prototype" ? "border-[#FFD700] scale-105 shadow-[0_0_18px_rgba(212,175,55,0.3)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("prototype")}
              >
                <PushPin color="red" />
                <div className="red-tape" />

                <div className="w-11 h-11 rounded-full bg-[#1C1E2C] border border-[#D4AF37] flex items-center justify-center text-[#FFD700] shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)] mt-1">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left flex-1 min-w-0 mt-1">
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
                className={`relative flex-1 p-4 rounded-2xl bg-[#141520] border flex items-center gap-3 transition-all duration-300 rotate-1 cursor-pointer shadow-md ${
                  activeNote === "breakIt" ? "border-[#FFD700] scale-105 shadow-[0_0_18px_rgba(212,175,55,0.3)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("breakIt")}
              >
                <PushPin color="gold" />
                <div className="w-11 h-11 rounded-full bg-[#1C1E2C] border border-[#D4AF37] flex items-center justify-center text-[#FFD700] shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)] mt-1">
                  <Puzzle className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0 mt-1">
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
                className={`relative flex-1 p-4 rounded-2xl bg-[#141520] border flex items-center gap-3 transition-all duration-300 -rotate-1 cursor-pointer shadow-md ${
                  activeNote === "fixIt" ? "border-[#FFD700] scale-105 shadow-[0_0_18px_rgba(212,175,55,0.3)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("fixIt")}
              >
                <PushPin color="gold" />
                <div className="w-11 h-11 rounded-full bg-[#1C1E2C] border border-[#D4AF37] flex items-center justify-center text-[#FFD700] shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)] mt-1">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0 mt-1">
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
                className={`relative flex-1 p-4 rounded-2xl bg-[#141520] border flex items-center gap-3 transition-all duration-300 rotate-1 cursor-pointer shadow-md ${
                  activeNote === "ship" ? "border-[#FFD700] scale-105 shadow-[0_0_18px_rgba(212,175,55,0.3)]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("ship")}
              >
                <PushPin color="red" />
                <div className="w-11 h-11 rounded-full bg-[#1C1E2C] border border-[#D4AF37] flex items-center justify-center text-[#FFD700] shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)] mt-1">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0 mt-1">
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

          {/* Bottom Footer Quote Pill */}
          <div className="pt-4 text-center">
            <div className="inline-flex items-center justify-center gap-2.5 px-6 py-2 rounded-full bg-[#141520] border border-[#D4AF37]/40 text-xs font-mono text-[#FFD700] shadow-inner">
              <Star className="w-4 h-4 fill-current text-[#FFD700]" />
              <span>Iterate relentlessly. Measure everything. Ship with confidence.</span>
            </div>
          </div>
        </div>

        {/* Mobile Responsive Layout */}
        <div className="lg:hidden space-y-4">
          <div className="relative p-5 rounded-2xl bg-[#141520] border border-[#D4AF37]/50 text-center">
            <PushPin color="red" />
            <div className="red-tape" />
            <h3 className="font-hand font-bold text-3xl text-[#FFD700] mt-1">
              How I Approach Things
            </h3>
            <p className="font-mono text-[10px] text-[#A1A1AA] mt-1">
              SYSTEMS LIFECYCLE MAP
            </p>
          </div>

          <div
            onClick={() => setActiveNote("research")}
            className={`relative p-4 rounded-2xl bg-[#141520] border cursor-pointer ${
              activeNote === "research" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
            }`}
          >
            <PushPin color="red" />
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-xl text-white text-center mt-1">
              1. Research — has someone solved this?
            </h4>
            <p className="font-sans text-xs text-[#CBD5E1] text-center mt-1">
              Prior art, IEEE papers &amp; heuristics vs ML tradeoffs
            </p>
          </div>

          <div
            onClick={() => setActiveNote("architecture")}
            className={`relative p-4 rounded-2xl bg-[#141520] border cursor-pointer ${
              activeNote === "architecture" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
            }`}
          >
            <PushPin color="red" />
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-xl text-white text-center mt-1">
              2. Architecture (AI? Model? DB? Scale?)
            </h4>
            <p className="font-sans text-xs text-[#CBD5E1] text-center mt-1">
              Latency budgets, API contracts &amp; memory limits
            </p>
          </div>

          <div
            onClick={() => setActiveNote("prototype")}
            className={`relative p-4 rounded-2xl bg-[#141520] border cursor-pointer ${
              activeNote === "prototype" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
            }`}
          >
            <PushPin color="red" />
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-xl text-white text-center mt-1">
              3. Prototype — build it ugly
            </h4>
            <p className="font-sans text-xs text-[#CBD5E1] text-center mt-1">
              24-hour rapid end-to-end MVP iteration
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div
              onClick={() => setActiveNote("breakIt")}
              className={`relative p-3 rounded-xl bg-[#141520] border text-center cursor-pointer ${
                activeNote === "breakIt" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
              }`}
            >
              <PushPin color="gold" className="-top-2 scale-75" />
              <span className="font-hand font-bold text-base text-[#FFD700] block mt-1">Break it</span>
              <span className="font-sans text-[10px] text-[#CBD5E1]">Fuzzing</span>
            </div>
            <div
              onClick={() => setActiveNote("fixIt")}
              className={`relative p-3 rounded-xl bg-[#141520] border text-center cursor-pointer ${
                activeNote === "fixIt" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
              }`}
            >
              <PushPin color="gold" className="-top-2 scale-75" />
              <span className="font-hand font-bold text-base text-[#FFD700] block mt-1">Fix it</span>
              <span className="font-sans text-[10px] text-[#CBD5E1]">Refactor</span>
            </div>
            <div
              onClick={() => setActiveNote("ship")}
              className={`relative p-3 rounded-xl bg-[#141520] border text-center cursor-pointer ${
                activeNote === "ship" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
              }`}
            >
              <PushPin color="red" className="-top-2 scale-75" />
              <span className="font-hand font-bold text-base text-[#FFD700] block mt-1">Ship</span>
              <span className="font-sans text-[10px] text-[#CBD5E1]">Deploy</span>
            </div>
          </div>
        </div>

        {/* Selected Field Note Explanatory Card */}
        {activeNote && notesInfo[activeNote] && (
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#141520] border border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)] animate-fadeIn">
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
