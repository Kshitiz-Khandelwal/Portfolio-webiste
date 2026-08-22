"use client";

import React, { useState } from "react";
import { Terminal, Send, Shield, Sparkles, CornerDownLeft, Play } from "lucide-react";

export function AtlasCliSandbox() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<
    { sender: "user" | "atlas"; text: string; details?: string; time: string }[]
  >([
    {
      sender: "atlas",
      text: "Atlas Identity OS (v2.4.0-rust-native) initialized. Memory Vault: AES-256-GCM Locked. ONNX Vector Engine: Ready.",
      time: "12:00:01",
    },
    {
      sender: "atlas",
      text: 'Type a natural language prompt or command (e.g. "diagnostics", "search-memory neural networks", "vault-status", "ocean-fingerprint").',
      time: "12:00:02",
    },
  ]);

  const handleCommand = (cmdStr?: string) => {
    const query = (cmdStr || input).trim();
    if (!query) return;

    const time = new Date().toLocaleTimeString();
    const newLogs = [...logs, { sender: "user" as const, text: query, time }];

    const lower = query.toLowerCase();

    if (lower.includes("diagnostics") || lower.includes("cpu") || lower.includes("ram") || lower.includes("system")) {
      newLogs.push({
        sender: "atlas",
        text: "⚡ WMI PowerShell Diagnostic Telemetry:",
        details:
          "[CPU Usage]: 8.4% (Multi-threaded) | [RAM Vault]: 142 MB allocated | [OS Tool Pipeline]: 13 Tools Active | [Process Status]: Running Native Rust Tokio Threads.",
        time,
      });
    } else if (lower.includes("vault") || lower.includes("encrypt") || lower.includes("argon")) {
      newLogs.push({
        sender: "atlas",
        text: "🔒 SQLCipher Encrypted Memory Vault Status:",
        details:
          "[Cipher]: AES-256-GCM | [Key Derivation]: Argon2id (64MB memory-hard, GPU-resistant) | [Recovery]: BIP39 12-word seed | [Memory Zeroing]: Active via secrecy crate.",
        time,
      });
    } else if (lower.includes("ocean") || lower.includes("personality") || lower.includes("behavior")) {
      newLogs.push({
        sender: "atlas",
        text: "🧠 26-Question Behavioral Evidence Engine:",
        details:
          "[Persona Fingerprint]: Openness (89%), Conscientiousness (94%), Extraversion (68%), Agreeableness (78%), Neuroticism (22%) | [Context Injection]: Ready for next session.",
        time,
      });
    } else if (lower.includes("search") || lower.includes("memory") || lower.includes("onnx") || lower.includes("knn")) {
      newLogs.push({
        sender: "atlas",
        text: "🔍 Local ONNX Vector Embedding & KNN Retrieval:",
        details:
          '[Query Vector]: 384-dim (bge-small-en-v1.5) | [Nearest Hit]: "ISRO BAH 2026 Telemetry & Fault Anomaly Architecture" (Similarity: 0.941, KNN latency: 7.2ms).',
        time,
      });
    } else if (lower.includes("help")) {
      newLogs.push({
        sender: "atlas",
        text: "Atlas OS CLI Capabilities:",
        details:
          'Available commands:\n• "diagnostics" (WMI live CPU/RAM metrics)\n• "vault-status" (AES-256 Argon2id security)\n• "ocean-fingerprint" (Behavioral research engine)\n• "search-memory <topic>" (Local ONNX KNN search)\n• "clear" (Reset console)',
        time,
      });
    } else if (lower.includes("clear")) {
      setLogs([]);
      setInput("");
      return;
    } else {
      newLogs.push({
        sender: "atlas",
        text: `🤖 Executed Agentic OS Tool for: "${query}"`,
        details:
          "[Action]: Parsed intent via local Ollama LLM → Dispatched native Rust OS handler → Execution status: 0 (Success) with zero cloud transmission.",
        time,
      });
    }

    setLogs(newLogs);
    setInput("");
  };

  const commandPresets = ["diagnostics", "vault-status", "ocean-fingerprint", "search-memory space telemetry"];

  return (
    <div className="bg-zinc-950/90 border border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-xl relative flex flex-col h-full">
      <div className="flex items-center justify-between mb-3 border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="font-mono text-xs text-zinc-400 ml-2 font-medium">atlas-terminal@kshitiz-pc:~</span>
        </div>
        <span className="font-mono text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
          Rust Native Runtime
        </span>
      </div>

      {/* Terminal Log Output */}
      <div className="flex-1 min-h-[220px] max-h-[260px] overflow-y-auto font-mono text-xs space-y-3 p-3 bg-zinc-900/60 rounded-xl border border-zinc-800/80 mb-3 text-zinc-300">
        {logs.map((l, idx) => (
          <div key={idx} className="leading-relaxed">
            <span className="text-zinc-600 text-[10px] mr-2">[{l.time}]</span>
            {l.sender === "user" ? (
              <span className="text-amber-400 font-bold">$ {l.text}</span>
            ) : (
              <div>
                <span className="text-emerald-400 font-semibold">{l.text}</span>
                {l.details && (
                  <p className="text-zinc-400 mt-1 pl-4 border-l-2 border-zinc-700 whitespace-pre-line text-[11px]">
                    {l.details}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Preset Command Buttons */}
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        <span className="font-mono text-[10px] text-zinc-500 mr-1">Quick Run:</span>
        {commandPresets.map((preset) => (
          <button
            key={preset}
            onClick={() => handleCommand(preset)}
            className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 font-mono text-[10px] text-zinc-400 hover:text-amber-300 transition-all flex items-center gap-1"
          >
            <Play className="w-2.5 h-2.5 text-amber-500" />
            <span>{preset}</span>
          </button>
        ))}
      </div>

      {/* Command Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand();
        }}
        className="flex items-center gap-2"
      >
        <div className="relative flex-1">
          <span className="absolute left-3.5 top-2.5 text-amber-400 font-mono text-xs">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command or natural prompt..."
            className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl pl-8 pr-4 py-2 font-mono text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>
        <button
          type="submit"
          className="px-3.5 py-2 rounded-xl bg-amber-500 text-zinc-950 hover:bg-amber-400 font-mono text-xs font-bold transition-all active:scale-[0.98] flex items-center gap-1"
        >
          <span>Run</span>
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
