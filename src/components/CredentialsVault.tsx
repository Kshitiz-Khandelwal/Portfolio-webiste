"use client";

import React, { useState } from "react";
import { credentialsData, CredentialItem } from "@/data/credentials";
import { Award, FileText, CheckCircle2, X, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

export function CredentialsVault() {
  const [selectedCred, setSelectedCred] = useState<CredentialItem | null>(null);

  return (
    <section id="credentials" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
            Proof &amp; Institutional Recognition
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Certificates &amp; Credentials Vault
          </h2>
        </div>
        <p className="font-sans text-sm text-[#9A9AA4] max-w-md">
          Verified academic records, hackathon podium recognitions, and technical outreach certifications.
        </p>
      </div>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {credentialsData.map((cred) => (
          <div
            key={cred.id}
            onClick={() => setSelectedCred(cred)}
            className="bg-white border border-slate-200 hover:border-[#D4AF37] rounded-3xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 font-bold">
                  {cred.categoryLabel}
                </span>
                <span className="font-mono text-[10px] text-slate-500">{cred.date}</span>
              </div>

              <h3 className="font-sans font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#D4AF37] transition-colors mb-1.5 leading-snug">
                {cred.title}
              </h3>
              <p className="font-mono text-xs text-slate-500 mb-4">
                {cred.issuer}
              </p>

              {/* Structured Placeholder Frame */}
              <div className="aspect-[16/9] rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300 group-hover:border-[#D4AF37]/50 flex flex-col items-center justify-center p-3 text-center mb-4 transition-colors">
                <FileText className="w-6 h-6 text-[#D4AF37] mb-1 opacity-80" />
                <span className="font-mono text-[10px] text-slate-600 font-medium">
                  {cred.placeholderText}
                </span>
              </div>
            </div>

            <div>
              <div className="space-y-1 mb-4 pt-2 border-t border-slate-100">
                {cred.skillsVerified.slice(0, 2).map((s, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 font-mono text-[10px] text-slate-600">
                    <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-600 group-hover:text-[#D4AF37] pt-2 border-t border-slate-100 font-bold">
                <span>Inspect Credential</span>
                <span>View Details →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Credential Inspection Modal */}
      {selectedCred && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setSelectedCred(null)} />
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl">
            <button
              onClick={() => setSelectedCred(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] font-bold inline-block mb-3">
              {selectedCred.categoryLabel} • {selectedCred.date}
            </span>

            <h3 className="font-sans font-bold text-xl sm:text-2xl text-slate-900 mb-1">
              {selectedCred.title}
            </h3>
            <p className="font-mono text-xs text-[#D4AF37] font-bold mb-6">
              Issued by: {selectedCred.issuer}
            </p>

            <div className="aspect-[16/9] rounded-2xl bg-slate-50 border-2 border-dashed border-[#D4AF37]/60 flex flex-col items-center justify-center p-6 text-center mb-6">
              <Award className="w-10 h-10 text-[#D4AF37] mb-2" />
              <span className="font-mono text-xs text-slate-900 font-bold mb-1">
                Verified Credential Record
              </span>
              <p className="font-mono text-[11px] text-[#D4AF37] font-bold">
                {selectedCred.placeholderText}
              </p>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
              {selectedCred.summary}
            </p>

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {selectedCred.skillsVerified.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedCred(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-mono text-slate-700 hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
