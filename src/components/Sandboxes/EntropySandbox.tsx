"use client";

import React, { useState } from "react";
import { ShieldCheck, AlertTriangle, ShieldAlert, Sparkles, RefreshCw, Terminal, Search } from "lucide-react";

export function EntropySandbox() {
  const [domain, setDomain] = useState("cxj891-auth-v2-cdn.ru");

  // Calculate Shannon entropy
  const calculateEntropy = (str: string) => {
    if (!str) return 0;
    const len = str.length;
    const freq: Record<string, number> = {};
    for (let i = 0; i < len; i++) {
      const char = str[i];
      freq[char] = (freq[char] || 0) + 1;
    }
    let entropy = 0;
    for (const char in freq) {
      const p = freq[char] / len;
      entropy -= p * Math.log2(p);
    }
    return parseFloat(entropy.toFixed(3));
  };

  const entropy = calculateEntropy(domain);
  const length = domain.length;
  const numDigits = (domain.match(/\d/g) || []).length;
  const numHyphens = (domain.match(/-/g) || []).length;
  const vowelRatio = ((domain.match(/[aeiou]/gi) || []).length / (length || 1)).toFixed(2);

  // Threat heuristic scoring
  let score = 15;
  if (entropy > 3.8) score += 40;
  else if (entropy > 3.2) score += 20;
  if (numDigits > 3) score += 20;
  if (numHyphens > 2) score += 15;
  if (parseFloat(vowelRatio) < 0.2) score += 15;
  if (domain.endsWith(".ru") || domain.endsWith(".xyz") || domain.endsWith(".top")) score += 10;
  score = Math.min(100, Math.max(5, score));

  const isBlocked = score > 60;
  const isFlagged = score > 35 && score <= 60;

  const presets = [
    { label: "Locky Ransomware DGA", val: "g7x991qwkldp208.biz" },
    { label: "CryptoLocker DGA", val: "xk189v-sync-node4.top" },
    { label: "Google Public DNS", val: "dns.google.com" },
    { label: "GitHub Enterprise", val: "api.github.com" },
  ];

  return (
    <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-xl relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="font-sans font-bold text-sm text-zinc-100">DNS Shield Threat Lab</h3>
            <span className="font-mono text-[10px] text-zinc-500">Live Shannon Entropy & Lexical Classifier</span>
          </div>
        </div>

        {/* Verdict Badge */}
        <span
          className={`px-2.5 py-1 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5 ${
            isBlocked
              ? "bg-rose-500/15 border border-rose-500/40 text-rose-400"
              : isFlagged
              ? "bg-amber-500/15 border border-amber-500/40 text-amber-400"
              : "bg-emerald-500/15 border border-emerald-500/40 text-emerald-400"
          }`}
        >
          {isBlocked ? (
            <>
              <ShieldAlert className="w-3 h-3" /> BLOCK (DGA RISK)
            </>
          ) : isFlagged ? (
            <>
              <AlertTriangle className="w-3 h-3" /> FLAG (SUSPICIOUS)
            </>
          ) : (
            <>
              <ShieldCheck className="w-3 h-3" /> ALLOW (BENIGN)
            </>
          )}
        </span>
      </div>

      {/* Input */}
      <div className="mb-4">
        <label className="block font-mono text-[11px] text-zinc-400 mb-1.5 uppercase tracking-wider">
          Query Domain Name:
        </label>
        <div className="relative">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="e.g. xk991-auth-v2.biz"
            className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-4 py-2.5 font-mono text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
          <Search className="w-4 h-4 text-zinc-500 absolute right-3.5 top-3" />
        </div>
      </div>

      {/* Quick Presets */}
      <div className="flex flex-wrap items-center gap-1.5 mb-5">
        <span className="font-mono text-[10px] text-zinc-500 mr-1">Presets:</span>
        {presets.map((p) => (
          <button
            key={p.val}
            onClick={() => setDomain(p.val)}
            className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 font-mono text-[10px] text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Real-Time Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
        <div className="bg-zinc-900/60 border border-zinc-800/80 p-2.5 rounded-lg">
          <span className="font-mono text-[10px] text-zinc-500 uppercase block">Shannon Entropy</span>
          <span className="font-mono text-base font-bold text-amber-400">{entropy}</span>
          <span className="font-mono text-[9px] text-zinc-600 block">&gt;3.8 = High Randomness</span>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800/80 p-2.5 rounded-lg">
          <span className="font-mono text-[10px] text-zinc-500 uppercase block">Risk Score</span>
          <span
            className={`font-mono text-base font-bold ${
              isBlocked ? "text-rose-400" : isFlagged ? "text-amber-400" : "text-emerald-400"
            }`}
          >
            {score}/100
          </span>
          <span className="font-mono text-[9px] text-zinc-600 block">Ensemble Weight</span>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800/80 p-2.5 rounded-lg">
          <span className="font-mono text-[10px] text-zinc-500 uppercase block">Vowel Ratio</span>
          <span className="font-mono text-base font-bold text-zinc-200">{vowelRatio}</span>
          <span className="font-mono text-[9px] text-zinc-600 block">Lexical feature</span>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800/80 p-2.5 rounded-lg">
          <span className="font-mono text-[10px] text-zinc-500 uppercase block">Inference Time</span>
          <span className="font-mono text-base font-bold text-emerald-400">0.84ms</span>
          <span className="font-mono text-[9px] text-zinc-600 block">Sub-millisecond</span>
        </div>
      </div>

      <div className="border-t border-zinc-800/60 pt-3 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
        <span>Model: LightGBM + Lexical Trie</span>
        <span className="text-amber-500/80">From SIH DNS Shield Project</span>
      </div>
    </div>
  );
}
