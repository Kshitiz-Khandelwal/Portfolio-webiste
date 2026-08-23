"use client";

import React, { useState } from "react";
import { credentialsData, CredentialItem } from "@/data/credentials";
import { Award, FileText, CheckCircle2, X, ExternalLink, ShieldCheck, Sparkles, Image, Briefcase } from "lucide-react";

export function CredentialsVault() {
  const [selectedCred, setSelectedCred] = useState<CredentialItem | null>(null);

  return (
    <section id="credentials" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#22222A]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono uppercase tracking-wider text-[#FFD700] font-bold mb-3">
            Experience &amp; Institutional Proof
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Work Experience &amp; Credentials Vault
          </h2>
        </div>
        <p className="font-sans text-sm text-[#9A9AA4] max-w-md">
          Current industry internship at Zarthi, research fellowship at IIIT Trichy, and verified event outreach records.
        </p>
      </div>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {credentialsData.map((cred) => (
          <div
            key={cred.id}
            onClick={() => setSelectedCred(cred)}
            className="bg-[#121216] border border-[#22222A] hover:border-[#D4AF37] rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#FFD700] border border-[#D4AF37]/30 font-bold">
                  {cred.categoryLabel}
                </span>
                <span className="font-mono text-[10px] text-[#8A8A94]">{cred.date}</span>
              </div>

              <h3 className="font-sans font-bold text-base sm:text-lg text-white group-hover:text-[#FFD700] transition-colors mb-1.5 leading-snug">
                {cred.title}
              </h3>
              <p className="font-mono text-xs text-[#D4AF37] mb-4">
                {cred.issuer}
              </p>

              {/* Structured Visual Frame */}
              <div className="aspect-[16/9] rounded-2xl bg-[#0A0A0C] border-2 border-dashed border-[#22222A] group-hover:border-[#D4AF37]/50 flex flex-col items-center justify-center p-3 text-center mb-4 transition-colors">
                {cred.certificateUrl ? (
                  <FileText className="w-6 h-6 text-[#FFD700] mb-1" />
                ) : cred.photosUrl ? (
                  <Image className="w-6 h-6 text-[#38BDF8] mb-1" />
                ) : (
                  <Briefcase className="w-6 h-6 text-[#D4AF37] mb-1" />
                )}
                <span className="font-mono text-[10px] text-[#C7C7CF] font-medium">
                  {cred.placeholderText}
                </span>
              </div>
            </div>

            <div>
              <div className="space-y-1 mb-4 pt-2 border-t border-[#22222A]">
                {cred.skillsVerified.slice(0, 2).map((s, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 font-mono text-[10px] text-[#A1A1AA]">
                    <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#8A8A94] group-hover:text-[#FFD700] pt-2 border-t border-[#22222A] font-bold">
                <span>Inspect Record</span>
                <span>View Details →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Credential Inspection Modal */}
      {selectedCred && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setSelectedCred(null)} />
          <div className="relative w-full max-w-2xl bg-[#14141C] border border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl">
            <button
              onClick={() => setSelectedCred(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#1E1E28] border border-[#2A2A38] text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#FFD700] font-bold inline-block mb-3">
              {selectedCred.categoryLabel} • {selectedCred.date}
            </span>

            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white mb-1">
              {selectedCred.title}
            </h3>
            <p className="font-mono text-xs text-[#D4AF37] font-bold mb-6">
              Organization: {selectedCred.issuer}
            </p>

            <div className="aspect-[16/9] rounded-2xl bg-[#0A0A0C] border-2 border-dashed border-[#D4AF37]/60 flex flex-col items-center justify-center p-6 text-center mb-6">
              <Award className="w-10 h-10 text-[#D4AF37] mb-2" />
              <span className="font-mono text-xs text-white font-bold mb-1">
                Verified Verification Record
              </span>
              <p className="font-mono text-[11px] text-[#FFD700] font-bold">
                {selectedCred.placeholderText}
              </p>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#C7C7CF] leading-relaxed mb-6">
              {selectedCred.summary}
            </p>

            {/* External Links to Drive/Certificate */}
            <div className="flex flex-wrap gap-3 mb-6">
              {selectedCred.certificateUrl && (
                <a
                  href={selectedCred.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4AF37] text-black text-xs font-bold hover:bg-[#FFD700] transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Verified IIIT Trichy Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {selectedCred.photosUrl && (
                <a
                  href={selectedCred.photosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold hover:bg-[#38BDF8]/30 transition-colors"
                >
                  <Image className="w-4 h-4" />
                  <span>Open Workshop Event Photos (Google Drive)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <div className="border-t border-[#22222A] pt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {selectedCred.skillsVerified.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded-md bg-[#181822] border border-[#22222A] text-[10px] font-mono text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedCred(null)}
                className="px-4 py-2 rounded-xl bg-[#1E1E28] text-xs font-mono text-slate-300 hover:bg-[#2A2A38]"
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
