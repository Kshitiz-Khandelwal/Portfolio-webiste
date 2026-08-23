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
    <section id="how-i-build" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#E0C9AE]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl badge-coral text-[11px] font-mono uppercase tracking-wider font-bold mb-3">
            Engineering Methodology
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#3A2E22] tracking-tight">
            How I Approach Things
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#8A7A63] mt-1 max-w-xl">
            A structured mindmap of my engineering lifecycle: from problem reconnaissance to architectural tradeoffs, adversarial stress-testing, and shipping.
          </p>
        </div>
        <div className="font-hand text-lg text-[#E8846B] hidden md:block">
          * Click any note to read my engineering rationale
        </div>
      </div>

      {/* Warm Cream & Peach Flow Canvas */}
      <div className="relative bg-[#FDF8F2] border border-[#E0C9AE] rounded-3xl p-6 sm:p-10 shadow-warmLg overflow-hidden">
        {/* Structured Desktop Mindmap Board */}
        <div className="relative z-10 hidden lg:block">
          {/* Top Row: Heading Card & Research */}
          <div className="flex items-start justify-between gap-8 mb-10">
            {/* 1. Top Left: Main Heading Note */}
            <div
              className={`relative w-80 p-5 rounded-2xl bg-[#F3D9C4] border transition-all duration-300 cursor-pointer shadow-warm ${
                activeNote === "research" ? "border-[#E8846B] scale-105" : "border-[#E0C9AE] hover:border-[#E8846B]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              <h3 className="font-hand font-bold text-3xl text-[#3A2E22] text-center leading-tight">
                How I Approach Things
              </h3>
              <p className="font-mono text-[10px] text-[#8A7A63] text-center mt-1">
                SYSTEMS LIFECYCLE MAP
              </p>
            </div>

            {/* Connecting Bridge Line with Arrow */}
            <div className="flex-1 flex items-center justify-center pt-8">
              <div className="w-full border-t-2 border-dashed border-[#E0C9AE] relative flex items-center justify-center">
                <span className="px-3 py-0.5 rounded-full badge-coral font-mono text-[10px] font-bold shadow-xs">
                  Step 1: Reconnaissance ➔
                </span>
              </div>
            </div>

            {/* 2. Top Right: Research Card */}
            <div
              className={`relative w-96 p-5 rounded-2xl bg-[#EFE3D3] border transition-all duration-300 cursor-pointer shadow-warm ${
                activeNote === "research" ? "border-[#E8846B] scale-105" : "border-[#E0C9AE] hover:border-[#E8846B]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              <h4 className="font-hand font-bold text-2xl text-[#3A2E22] text-center leading-snug">
                Research — has someone solved this?
              </h4>
              <p className="font-sans text-[11px] text-[#5C4D3C] text-center mt-1">
                Prior art, IEEE papers &amp; heuristic vs ML tradeoffs
              </p>
            </div>
          </div>

          {/* Middle Row: Architecture & 4 Mini Branching Nodes */}
          <div className="grid grid-cols-12 gap-6 items-center mb-10">
            {/* Connecting vertical drop */}
            <div className="col-span-12 flex justify-center -mt-6 mb-2">
              <div className="h-8 border-l-2 border-dashed border-[#E0C9AE] flex items-center justify-center relative">
                <span className="w-2 h-2 rounded-full bg-[#E8846B]" />
              </div>
            </div>

            {/* Center: Architecture Card (6 cols) */}
            <div className="col-span-6 flex justify-end pr-4">
              <div
                className={`relative w-80 p-5 rounded-2xl bg-[#F3D9C4] border transition-all duration-300 cursor-pointer shadow-warm ${
                  activeNote === "architecture" ? "border-[#E8846B] scale-105" : "border-[#E0C9AE] hover:border-[#E8846B]"
                }`}
                onClick={() => setActiveNote("architecture")}
              >
                <h4 className="font-hand font-bold text-3xl text-[#3A2E22] text-center">
                  Architecture
                </h4>
                <p className="font-sans text-[11px] text-[#5C4D3C] text-center mt-1">
                  Latency budgets, API contracts &amp; State bounds
                </p>
              </div>
            </div>

            {/* 4 Mini Branching Nodes (6 cols) */}
            <div className="col-span-6 pl-4 relative border-l-2 border-dashed border-[#E0C9AE] py-2">
              <div className="grid grid-cols-2 gap-3">
                <div
                  className={`p-3 rounded-xl bg-[#EFE3D3] border transition-all cursor-pointer text-center ${
                    activeNote === "ai" ? "border-[#E8846B] bg-[#F6D9CF]" : "border-[#E0C9AE] hover:border-[#E8846B]"
                  }`}
                  onClick={() => setActiveNote("ai")}
                >
                  <span className="font-hand font-bold text-xl text-[#B5432C] block">AI?</span>
                  <span className="font-sans text-[10px] text-[#5C4D3C]">Heuristic vs DNN</span>
                </div>

                <div
                  className={`p-3 rounded-xl bg-[#EFE3D3] border transition-all cursor-pointer text-center ${
                    activeNote === "model" ? "border-[#E8846B] bg-[#F6D9CF]" : "border-[#E0C9AE] hover:border-[#E8846B]"
                  }`}
                  onClick={() => setActiveNote("model")}
                >
                  <span className="font-hand font-bold text-xl text-[#B5432C] block">Model?</span>
                  <span className="font-sans text-[10px] text-[#5C4D3C]">LightGBM &lt;1.2ms</span>
                </div>

                <div
                  className={`p-3 rounded-xl bg-[#EFE3D3] border transition-all cursor-pointer text-center ${
                    activeNote === "db" ? "border-[#E8846B] bg-[#F6D9CF]" : "border-[#E0C9AE] hover:border-[#E8846B]"
                  }`}
                  onClick={() => setActiveNote("db")}
                >
                  <span className="font-hand font-bold text-xl text-[#2D5E40] block">Storage?</span>
                  <span className="font-sans text-[10px] text-[#5C4D3C]">Zero-Copy vs SQLite</span>
                </div>

                <div
                  className={`p-3 rounded-xl bg-[#EFE3D3] border transition-all cursor-pointer text-center ${
                    activeNote === "scale" ? "border-[#E8846B] bg-[#F6D9CF]" : "border-[#E0C9AE] hover:border-[#E8846B]"
                  }`}
                  onClick={() => setActiveNote("scale")}
                >
                  <span className="font-hand font-bold text-xl text-[#2D5E40] block">Scale?</span>
                  <span className="font-sans text-[10px] text-[#5C4D3C]">100K QPS Stress</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Execution Chain: Prototype -> Break it -> Fix it -> Ship */}
          <div className="pt-4 border-t-2 border-dashed border-[#E0C9AE]">
            <div className="flex items-center justify-between gap-4">
              {/* Prototype */}
              <div
                className={`flex-1 p-4 rounded-2xl bg-[#EFE3D3] border transition-all cursor-pointer text-center shadow-warm ${
                  activeNote === "prototype" ? "border-[#E8846B] scale-105" : "border-[#E0C9AE] hover:border-[#E8846B]"
                }`}
                onClick={() => setActiveNote("prototype")}
              >
                <span className="font-mono text-[9px] text-[#8A7A63] block">PHASE 03</span>
                <h5 className="font-hand font-bold text-xl text-[#3A2E22]">Prototype</h5>
                <span className="font-sans text-[10px] text-[#5C4D3C]">Build it ugly first</span>
              </div>

              <span className="font-mono text-[#E8846B] font-bold text-lg">➔</span>

              {/* Break It */}
              <div
                className={`flex-1 p-4 rounded-2xl bg-[#F6D9CF] border transition-all cursor-pointer text-center shadow-warm ${
                  activeNote === "breakIt" ? "border-[#B5432C] scale-105" : "border-[#E8846B]/40 hover:border-[#B5432C]"
                }`}
                onClick={() => setActiveNote("breakIt")}
              >
                <span className="font-mono text-[9px] text-[#B5432C] block">PHASE 04</span>
                <h5 className="font-hand font-bold text-xl text-[#B5432C]">Break It</h5>
                <span className="font-sans text-[10px] text-[#5C4D3C]">Adversarial stress</span>
              </div>

              <span className="font-mono text-[#E8846B] font-bold text-lg">➔</span>

              {/* Fix It */}
              <div
                className={`flex-1 p-4 rounded-2xl bg-[#E2EFE7] border transition-all cursor-pointer text-center shadow-warm ${
                  activeNote === "fixIt" ? "border-[#2D5E40] scale-105" : "border-[#8FBFA0]/50 hover:border-[#2D5E40]"
                }`}
                onClick={() => setActiveNote("fixIt")}
              >
                <span className="font-mono text-[9px] text-[#2D5E40] block">PHASE 05</span>
                <h5 className="font-hand font-bold text-xl text-[#2D5E40]">Fix It</h5>
                <span className="font-sans text-[10px] text-[#5C4D3C]">Zero-copy refactor</span>
              </div>

              <span className="font-mono text-[#E8846B] font-bold text-lg">➔</span>

              {/* Ship */}
              <div
                className={`flex-1 p-4 rounded-2xl bg-[#F3D9C4] border transition-all cursor-pointer text-center shadow-warm ${
                  activeNote === "ship" ? "border-[#E8846B] scale-105" : "border-[#E0C9AE] hover:border-[#E8846B]"
                }`}
                onClick={() => setActiveNote("ship")}
              >
                <span className="font-mono text-[9px] text-[#8A7A63] block">PHASE 06</span>
                <h5 className="font-hand font-bold text-xl text-[#B5432C]">Ship &amp; Observe</h5>
                <span className="font-sans text-[10px] text-[#5C4D3C]">Telemetry &amp; metrics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical Step Flow */}
        <div className="space-y-4 lg:hidden relative z-10">
          {Object.entries(notesInfo).map(([key, info], idx) => (
            <div
              key={key}
              onClick={() => setActiveNote(key)}
              className={`p-4 rounded-2xl bg-[#F3D9C4] border transition-all cursor-pointer ${
                activeNote === key ? "border-[#E8846B] shadow-warm" : "border-[#E0C9AE]"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-hand font-bold text-xl text-[#3A2E22]">{info.title}</h4>
                <span className="font-mono text-xs text-[#8A7A63]">0{idx + 1}</span>
              </div>
              <p className="font-sans text-xs text-[#5C4D3C]">{info.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Inspector Note (Deep Dive Panel) */}
        {activeNote && notesInfo[activeNote] && (
          <div className="mt-8 pt-6 border-t border-[#E0C9AE] relative z-10 animate-in fade-in duration-200">
            <div className="bg-[#F3D9C4]/70 border border-[#E0C9AE] rounded-2xl p-5 sm:p-6 shadow-warm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#E8846B]" />
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#3A2E22] font-bold">
                  {notesInfo[activeNote].title}
                </h4>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#3A2E22] leading-relaxed">
                {notesInfo[activeNote].desc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
