"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function HowIBuild() {
  const [activeNote, setActiveNote] = useState<string | null>(null);

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
      desc: "Use AI only where it genuinely provides a non-linear advantage. If a deterministic hash map or bloom filter does the job, don't force a transformer.",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
            Engineering Methodology
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            How I Approach Things
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9A9AA4] mt-1 max-w-xl">
            A handcrafted mindmap of my engineering lifecycle: from problem reconnaissance to architectural tradeoffs, adversarial stress-testing, and shipping.
          </p>
        </div>
        <div className="font-hand text-lg text-[#D4AF37] hidden md:block">
          * Click any note to read my field notes
        </div>
      </div>

      {/* Handcrafted Sticky Note Flow Diagram Board */}
      <div className="relative bg-[#0E0E12] border-2 border-dashed border-[#3A3226] rounded-3xl p-6 sm:p-12 shadow-2xl overflow-hidden">
        {/* Background Paper Grid Accent */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Desktop Mindmap Visual Canvas */}
        <div className="relative z-10 hidden md:block min-h-[580px]">
          {/* SVG Connecting Dashed Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#6B553F] stroke-[2.5] stroke-dasharray-[8,8]">
            {/* Top Left -> Top Right */}
            <path d="M 330 75 Q 430 85 490 85" fill="none" />
            {/* Top Right -> Center Architecture */}
            <path d="M 600 135 Q 490 190 440 210" fill="none" />
            {/* Center Architecture -> Bottom Left Prototype */}
            <path d="M 370 285 Q 310 330 290 370" fill="none" />
            {/* Center Architecture -> 4 Mini Notes Bracket */}
            <path d="M 525 240 L 565 240" fill="none" />
            <path d="M 565 200 L 565 290" fill="none" />
            <path d="M 565 185 L 590 185" fill="none" />
            <path d="M 565 215 L 690 215" fill="none" />
            <path d="M 565 285 L 590 285" fill="none" />
            <path d="M 565 315 L 690 315" fill="none" />
            {/* Bottom Prototype -> Break it -> Fix it -> Ship */}
            <path d="M 390 415 L 435 440" fill="none" />
            <path d="M 560 455 L 600 480" fill="none" />
            <path d="M 720 500 L 760 530" fill="none" />
          </svg>

          {/* 1. Top Left: Main Heading Note */}
          <div
            className="absolute top-2 left-6 w-72 paper-sticky p-6 -rotate-2 cursor-pointer"
            onClick={() => setActiveNote("research")}
          >
            <div className="red-tape" />
            <h3 className="font-hand font-bold text-3xl sm:text-4xl text-[#261B11] text-center leading-tight">
              How I Approach Things
            </h3>
          </div>

          {/* 2. Top Right: Research Note */}
          <div
            className="absolute top-4 right-16 w-80 paper-sticky p-5 rotate-1 cursor-pointer hover:border-[#D4AF37]"
            onClick={() => setActiveNote("research")}
          >
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-2xl text-[#261B11] text-center leading-snug">
              Research — has someone solved this?
            </h4>
          </div>

          {/* 3. Center: Architecture Note */}
          <div
            className="absolute top-48 left-1/3 w-64 paper-sticky p-5 -rotate-1 cursor-pointer hover:border-[#D4AF37]"
            onClick={() => setActiveNote("architecture")}
          >
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-3xl text-[#261B11] text-center">
              Architecture
            </h4>
          </div>

          {/* 4. Mini Branching Notes (AI, Model, DB, Scale) */}
          <div className="absolute top-40 right-28 flex flex-col gap-3">
            <div className="flex gap-4">
              <div
                className="w-28 paper-sticky p-3 rotate-1 cursor-pointer text-center"
                onClick={() => setActiveNote("ai")}
              >
                <div className="red-pin" />
                <span className="font-hand font-bold text-2xl text-[#261B11]">AI?</span>
              </div>
              <div
                className="w-32 paper-sticky p-3 -rotate-1 cursor-pointer text-center"
                onClick={() => setActiveNote("model")}
              >
                <div className="red-pin" />
                <span className="font-hand font-bold text-2xl text-[#261B11]">Model?</span>
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              <div
                className="w-28 paper-sticky p-3 -rotate-2 cursor-pointer text-center"
                onClick={() => setActiveNote("db")}
              >
                <div className="red-pin" />
                <span className="font-hand font-bold text-2xl text-[#261B11]">DB?</span>
              </div>
              <div
                className="w-32 paper-sticky p-3 rotate-2 cursor-pointer text-center"
                onClick={() => setActiveNote("scale")}
              >
                <div className="red-pin" />
                <span className="font-hand font-bold text-2xl text-[#261B11]">Scale?</span>
              </div>
            </div>
          </div>

          {/* 5. Bottom Left: Prototype */}
          <div
            className="absolute bottom-28 left-12 w-72 paper-sticky p-5 -rotate-2 cursor-pointer hover:border-[#D4AF37]"
            onClick={() => setActiveNote("prototype")}
          >
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-2xl text-[#261B11] text-center">
              Prototype — build it ugly
            </h4>
          </div>

          {/* 6. Bottom Sequence: Break it -> Fix it -> Ship */}
          <div
            className="absolute bottom-20 left-[42%] w-36 paper-sticky p-4 rotate-1 cursor-pointer text-center hover:border-[#D4AF37]"
            onClick={() => setActiveNote("breakIt")}
          >
            <div className="red-pin" />
            <span className="font-hand font-bold text-2xl text-[#261B11]">Break it</span>
          </div>

          <div
            className="absolute bottom-12 left-[58%] w-36 paper-sticky p-4 -rotate-1 cursor-pointer text-center hover:border-[#D4AF37]"
            onClick={() => setActiveNote("fixIt")}
          >
            <div className="red-pin" />
            <span className="font-hand font-bold text-2xl text-[#261B11]">Fix it</span>
          </div>

          <div
            className="absolute bottom-4 right-12 w-36 paper-sticky p-4 rotate-2 cursor-pointer text-center hover:border-[#D4AF37]"
            onClick={() => setActiveNote("ship")}
          >
            <div className="red-pin" />
            <span className="font-hand font-bold text-2xl text-[#261B11]">Ship</span>
          </div>
        </div>

        {/* Mobile Responsive Vertical Flow */}
        <div className="md:hidden space-y-4">
          <div className="paper-sticky p-5 -rotate-1 text-center">
            <div className="red-tape" />
            <h3 className="font-hand font-bold text-3xl text-[#261B11]">
              How I Approach Things
            </h3>
          </div>

          <div
            onClick={() => setActiveNote("research")}
            className="paper-sticky p-4 rotate-1 cursor-pointer"
          >
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-2xl text-[#261B11] text-center">
              1. Research — has someone solved this?
            </h4>
          </div>

          <div
            onClick={() => setActiveNote("architecture")}
            className="paper-sticky p-4 -rotate-1 cursor-pointer"
          >
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-2xl text-[#261B11] text-center">
              2. Architecture (AI? Model? DB? Scale?)
            </h4>
          </div>

          <div
            onClick={() => setActiveNote("prototype")}
            className="paper-sticky p-4 rotate-1 cursor-pointer"
          >
            <div className="red-tape" />
            <h4 className="font-hand font-bold text-2xl text-[#261B11] text-center">
              3. Prototype — build it ugly
            </h4>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div
              onClick={() => setActiveNote("breakIt")}
              className="paper-sticky p-3 text-center cursor-pointer"
            >
              <div className="red-pin" />
              <span className="font-hand font-bold text-xl text-[#261B11]">Break it</span>
            </div>
            <div
              onClick={() => setActiveNote("fixIt")}
              className="paper-sticky p-3 text-center cursor-pointer"
            >
              <div className="red-pin" />
              <span className="font-hand font-bold text-xl text-[#261B11]">Fix it</span>
            </div>
            <div
              onClick={() => setActiveNote("ship")}
              className="paper-sticky p-3 text-center cursor-pointer"
            >
              <div className="red-pin" />
              <span className="font-hand font-bold text-xl text-[#261B11]">Ship</span>
            </div>
          </div>
        </div>

        {/* Selected Field Note Explanatory Card */}
        {activeNote && notesInfo[activeNote] && (
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#1A1A22] border-2 border-[#D4AF37]/60 shadow-xl animate-fadeIn">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#2A2A35]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                  {notesInfo[activeNote].title}
                </h4>
              </div>
              <button
                onClick={() => setActiveNote(null)}
                className="text-xs text-[#8A8A94] hover:text-white px-2 py-1 bg-[#22222D] rounded"
              >
                Close ✕
              </button>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#C7C7CF] leading-relaxed">
              {notesInfo[activeNote].desc}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
