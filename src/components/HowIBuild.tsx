"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, ArrowDown } from "lucide-react";

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
              className={`relative w-80 p-5 rounded-2xl bg-[#161622] border-2 transition-all duration-300 -rotate-2 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.7),0_0_15px_rgba(212,175,55,0.15)] ${
                activeNote === "research" ? "border-[#FFD700] scale-105" : "border-[#D4AF37]/50 hover:border-[#FFD700]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              <div className="red-tape" />
              <h3 className="font-hand font-bold text-3xl text-[#FFD700] text-center leading-tight">
                How I Approach Things
              </h3>
              <p className="font-mono text-[10px] text-[#A1A1AA] text-center mt-1">
                SYSTEMS LIFECYCLE MAP
              </p>
            </div>

            {/* Connecting Bridge Line with Arrow */}
            <div className="flex-1 flex items-center justify-center pt-8">
              <div className="w-full border-t-2 border-dashed border-[#D4AF37]/60 relative flex items-center justify-center">
                <span className="px-3 py-0.5 rounded-full bg-[#181824] border border-[#D4AF37]/50 font-mono text-[10px] text-[#FFD700] font-bold shadow-xs">
                  Step 1: Reconnaissance ➔
                </span>
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
              <p className="font-sans text-[11px] text-[#C7C7CF] text-center mt-1">
                Prior art, IEEE papers &amp; heuristic vs ML tradeoffs
              </p>
            </div>
          </div>

          {/* Middle Row: Architecture & 4 Mini Branching Nodes */}
          <div className="grid grid-cols-12 gap-6 items-center mb-10">
            {/* Connecting vertical drop to Architecture */}
            <div className="col-span-12 flex justify-center -mt-6 mb-2">
              <div className="h-8 border-l-2 border-dashed border-[#D4AF37]/60 flex items-center justify-center relative">
                <span className="w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_6px_#FFD700]" />
              </div>
            </div>

            {/* Center: Architecture Card (6 cols) */}
            <div className="col-span-6 flex justify-end pr-4">
              <div
                className={`relative w-80 p-5 rounded-2xl bg-[#181826] border-2 transition-all duration-300 -rotate-1 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.7)] ${
                  activeNote === "architecture" ? "border-[#FFD700] scale-105" : "border-[#D4AF37]/50 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("architecture")}
              >
                <div className="red-tape" />
                <h4 className="font-hand font-bold text-3xl text-white text-center">
                  Architecture
                </h4>
                <p className="font-sans text-[11px] text-[#C7C7CF] text-center mt-1">
                  Latency budgets, API contracts &amp; State bounds
                </p>
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
                  <span className="font-hand font-bold text-xl text-[#FFD700] block">AI?</span>
                  <span className="font-sans text-[10px] text-slate-300">Heuristic vs DNN</span>
                </div>

                <div
                  className={`relative p-3 rounded-xl bg-[#14141E] border transition-all -rotate-1 cursor-pointer text-center ${
                    activeNote === "model" ? "border-[#FFD700] bg-[#1C1C2A]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("model")}
                >
                  <div className="red-pin" />
                  <span className="font-hand font-bold text-xl text-[#FFD700] block">Model?</span>
                  <span className="font-sans text-[10px] text-slate-300">LightGBM &lt;1.2ms</span>
                </div>

                <div
                  className={`relative p-3 rounded-xl bg-[#14141E] border transition-all -rotate-2 cursor-pointer text-center ${
                    activeNote === "db" ? "border-[#FFD700] bg-[#1C1C2A]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("db")}
                >
                  <div className="red-pin" />
                  <span className="font-hand font-bold text-xl text-[#FFD700] block">DB?</span>
                  <span className="font-sans text-[10px] text-slate-300">Zero-copy vs SQL</span>
                </div>

                <div
                  className={`relative p-3 rounded-xl bg-[#14141E] border transition-all rotate-2 cursor-pointer text-center ${
                    activeNote === "scale" ? "border-[#FFD700] bg-[#1C1C2A]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                  }`}
                  onClick={() => setActiveNote("scale")}
                >
                  <div className="red-pin" />
                  <span className="font-hand font-bold text-xl text-[#FFD700] block">Scale?</span>
                  <span className="font-sans text-[10px] text-slate-300">100k req/sec load</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Prototype -> Break it -> Fix it -> Ship with Clear Arrows */}
          <div className="pt-4 border-t-2 border-dashed border-[#D4AF37]/30">
            <div className="flex items-center justify-between gap-2.5">
              {/* Prototype Card */}
              <div
                className={`relative w-72 p-4 rounded-2xl bg-[#161622] border-2 transition-all duration-300 -rotate-1 cursor-pointer shadow-md ${
                  activeNote === "prototype" ? "border-[#FFD700] scale-105" : "border-[#D4AF37]/50 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("prototype")}
              >
                <div className="red-tape" />
                <h4 className="font-hand font-bold text-xl text-white text-center">
                  Prototype — build it ugly
                </h4>
                <p className="font-sans text-[10px] text-[#A1A1AA] text-center mt-0.5">
                  24-hr fast iteration loop
                </p>
              </div>

              {/* Arrow Connector */}
              <div className="flex items-center gap-1">
                <span className="text-[#FFD700] font-mono text-base font-bold">➔</span>
              </div>

              {/* Break it */}
              <div
                className={`relative w-40 p-3.5 rounded-xl bg-[#14141E] border transition-all rotate-1 cursor-pointer text-center ${
                  activeNote === "breakIt" ? "border-[#FFD700] bg-[#1C1C2A]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("breakIt")}
              >
                <div className="red-pin" />
                <span className="font-hand font-bold text-xl text-[#FFD700] block">Break it</span>
                <span className="font-sans text-[10px] text-slate-300">Fuzzing &amp; Stress</span>
              </div>

              {/* Arrow Connector */}
              <div className="flex items-center gap-1">
                <span className="text-[#FFD700] font-mono text-base font-bold">➔</span>
              </div>

              {/* Fix it */}
              <div
                className={`relative w-40 p-3.5 rounded-xl bg-[#14141E] border transition-all -rotate-1 cursor-pointer text-center ${
                  activeNote === "fixIt" ? "border-[#FFD700] bg-[#1C1C2A]" : "border-[#D4AF37]/40 hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("fixIt")}
              >
                <div className="red-pin" />
                <span className="font-hand font-bold text-xl text-[#FFD700] block">Fix it</span>
                <span className="font-sans text-[10px] text-slate-300">Memory Refactor</span>
              </div>

              {/* Arrow Connector */}
              <div className="flex items-center gap-1">
                <span className="text-[#FFD700] font-mono text-base font-bold">➔</span>
              </div>

              {/* Ship */}
              <div
                className={`relative w-40 p-3.5 rounded-xl bg-[#181826] border-2 transition-all rotate-2 cursor-pointer text-center shadow-[0_0_15px_rgba(212,175,55,0.2)] ${
                  activeNote === "ship" ? "border-[#FFD700] scale-105" : "border-[#D4AF37] hover:border-[#FFD700]"
                }`}
                onClick={() => setActiveNote("ship")}
              >
                <div className="red-pin" />
                <span className="font-hand font-bold text-xl text-[#FFD700] block">Ship</span>
                <span className="font-sans text-[10px] text-slate-300">Telemetry &amp; CI/CD</span>
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
            <p className="font-sans text-xs text-slate-300 text-center mt-1">
              Prior art, IEEE literature &amp; heuristic vs ML tradeoffs
            </p>
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
            <p className="font-sans text-xs text-slate-300 text-center mt-1">
              Latency budgets, API contracts &amp; memory limits
            </p>
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
            <p className="font-sans text-xs text-slate-300 text-center mt-1">
              24-hour rapid end-to-end MVP iteration
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div
              onClick={() => setActiveNote("breakIt")}
              className={`relative p-3 rounded-xl bg-[#14141E] border text-center cursor-pointer ${
                activeNote === "breakIt" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
              }`}
            >
              <div className="red-pin" />
              <span className="font-hand font-bold text-lg text-[#FFD700] block">Break it</span>
              <span className="font-sans text-[9px] text-slate-300">Fuzzing</span>
            </div>
            <div
              onClick={() => setActiveNote("fixIt")}
              className={`relative p-3 rounded-xl bg-[#14141E] border text-center cursor-pointer ${
                activeNote === "fixIt" ? "border-[#FFD700]" : "border-[#D4AF37]/40"
              }`}
            >
              <div className="red-pin" />
              <span className="font-hand font-bold text-lg text-[#FFD700] block">Fix it</span>
              <span className="font-sans text-[9px] text-slate-300">Refactor</span>
            </div>
            <div
              onClick={() => setActiveNote("ship")}
              className={`relative p-3 rounded-xl bg-[#14141E] border-2 text-center cursor-pointer ${
                activeNote === "ship" ? "border-[#FFD700]" : "border-[#D4AF37]"
              }`}
            >
              <div className="red-pin" />
              <span className="font-hand font-bold text-lg text-[#FFD700] block">Ship</span>
              <span className="font-sans text-[9px] text-slate-300">Deploy</span>
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
