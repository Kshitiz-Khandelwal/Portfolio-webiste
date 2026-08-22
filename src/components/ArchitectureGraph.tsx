"use client";

import React, { useState } from "react";
import { Cpu, Database, Network, Shield, Brain, Layers, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

interface Node {
  id: string;
  name: string;
  category: "systems" | "ai" | "security" | "fullstack";
  role: string;
  description: string;
  connections: string[];
  techUsed: string[];
  icon: any;
}

export function ArchitectureGraph() {
  const [selectedNode, setSelectedNode] = useState<string>("rust-tauri");

  const nodes: Node[] = [
    {
      id: "rust-tauri",
      name: "Rust & Tauri v2 Core",
      category: "systems",
      role: "On-Device Runtime & IPC Engine",
      description:
        "The core native backbone of Atlas Identity OS. Executes zero-leak native threads, deterministic OS controls, and handles zero-cost memory safety.",
      connections: ["sqlcipher-vault", "onnx-runtime", "next-frontend"],
      techUsed: ["Rust", "Tauri v2", "WMI PowerShell", "secrecy crate", "tokio"],
      icon: Cpu,
    },
    {
      id: "sqlcipher-vault",
      name: "Encrypted SQLite Vault",
      category: "security",
      role: "Zero-Knowledge Memory & Keys",
      description:
        "AES-256 encrypted database vault hardened with Argon2id key derivation (64MB memory-hard) and BIP39 seed recovery.",
      connections: ["rust-tauri", "onnx-runtime"],
      techUsed: ["SQLCipher", "Argon2id", "AES-256", "BIP39"],
      icon: Shield,
    },
    {
      id: "onnx-runtime",
      name: "On-Device ONNX Embeddings",
      category: "ai",
      role: "384-Dim Local Vector Memory",
      description:
        "Runs bge-small-en-v1.5 embeddings natively in-process, querying sqlite-vec for hybrid cosine + graph centrality semantic memory retrieval.",
      connections: ["rust-tauri", "sqlcipher-vault", "python-ml"],
      techUsed: ["ONNX Runtime", "sqlite-vec", "bge-small-en-v1.5", "KNN"],
      icon: Brain,
    },
    {
      id: "python-ml",
      name: "Python ML & XAI Pipeline",
      category: "ai",
      role: "Gradient Boosting & SHAP Telemetry",
      description:
        "Dual-engine predictive models (XGBoost, LightGBM, CatBoost) with SHAP tree explainability and Prophet seasonal time-series decomposition.",
      connections: ["dns-pipeline", "next-frontend", "onnx-runtime"],
      techUsed: ["Python", "XGBoost", "LightGBM", "SHAP", "Prophet", "PyTorch"],
      icon: Network,
    },
    {
      id: "dns-pipeline",
      name: "DNS Shield Inspection Engine",
      category: "security",
      role: "Shannon Entropy & Multi-Stage Filter",
      description:
        "Sub-millisecond lexical scoring, DGA algorithm fingerprinting, and automated device fleet isolation via Model Context Protocol (MCP).",
      connections: ["python-ml", "next-frontend"],
      techUsed: ["FastAPI", "Shannon Entropy", "Bloom Filters", "MCP Server"],
      icon: Zap,
    },
    {
      id: "next-frontend",
      name: "Next.js & shadcn/ui Interface",
      category: "fullstack",
      role: "High-Taste Reactive UI & Dashboards",
      description:
        "App Router full-stack web applications featuring Emil Kowalski spring physics, Impeccable component states, and Tailwind CSS token systems.",
      connections: ["rust-tauri", "python-ml", "dns-pipeline"],
      techUsed: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
      icon: Layers,
    },
  ];

  const active = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono uppercase tracking-wider text-amber-400 mb-3">
            System Topology
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-zinc-100 tracking-tight">
            Cross-Domain System Architecture
          </h2>
        </div>
        <p className="font-sans text-sm text-zinc-400 max-w-md">
          How native Rust runtimes, on-device vector engines, gradient boosted models, and Next.js interfaces seamlessly interlock.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Node Matrix Selector */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {nodes.map((node) => {
            const isSelected = node.id === selectedNode;
            const isConnected = active.connections.includes(node.id);
            const Icon = node.icon;

            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between min-h-[130px] ${
                  isSelected
                    ? "bg-zinc-900 border-amber-500/80 shadow-[0_0_20px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/40"
                    : isConnected
                    ? "bg-zinc-900/60 border-amber-500/30 hover:border-amber-500/50"
                    : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50"
                }`}
              >
                {/* Connection Indicator Ring */}
                {isConnected && !isSelected && (
                  <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                )}

                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected
                        ? "bg-amber-500 text-zinc-950"
                        : isConnected
                        ? "bg-amber-500/20 text-amber-300"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-zinc-100 tracking-tight leading-tight">
                      {node.name}
                    </h3>
                    <span className="font-mono text-[10px] text-zinc-500">{node.role}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-zinc-800/60">
                  <span className="font-mono text-[10px] text-zinc-400">
                    {node.connections.length} Interlinks
                  </span>
                  <span
                    className={`text-[11px] font-mono ${
                      isSelected ? "text-amber-400" : "text-zinc-500"
                    }`}
                  >
                    {isSelected ? "Active Node" : isConnected ? "Direct Link" : "View"} →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Node Deep-Dive Panel */}
        <div className="lg:col-span-5 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700/60">
              {active.category} Module
            </span>
            <span className="font-mono text-[10px] text-zinc-500">ID: {active.id}</span>
          </div>

          <h3 className="font-sans font-bold text-xl text-zinc-100 mb-1">{active.name}</h3>
          <p className="font-mono text-xs text-amber-400 mb-4">{active.role}</p>

          <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
            {active.description}
          </p>

          {/* Direct Interlinks */}
          <div className="mb-6">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2.5">
              Direct System Interlinks
            </h4>
            <div className="space-y-1.5">
              {active.connections.map((connId) => {
                const target = nodes.find((n) => n.id === connId);
                if (!target) return null;
                return (
                  <div
                    key={connId}
                    className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-zinc-950/70 border border-zinc-800 text-xs"
                  >
                    <div className="flex items-center gap-2 text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-amber-400" />
                      <span>{target.name}</span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500">{target.category}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech Used Pills */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2">
              Implementation Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {active.techUsed.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded bg-zinc-800/80 border border-zinc-700/60 text-[11px] font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
