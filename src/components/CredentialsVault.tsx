"use client";

import React, { useState } from "react";
import Image from "next/image";
import { credentialsData, CredentialItem } from "@/data/credentials";
import { Award, FileText, CheckCircle2, X, ExternalLink, ShieldCheck, Sparkles, ImageIcon, Briefcase, ChevronRight } from "lucide-react";

export function CredentialsVault() {
  const [selectedCred, setSelectedCred] = useState<CredentialItem | null>(null);
  const [activeVenueTab, setActiveVenueTab] = useState<number>(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const tapeClasses = ["washi-tape-gold", "washi-tape-ruby", "washi-tape-slate"];
  const tilts = ["-rotate-1", "rotate-1", "-rotate-0.8"];

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
        <p className="font-sans text-sm text-[#94A3B8] max-w-md">
          Current industry internship at Zarthi, research fellowship at IIIT Trichy with verified certificate, and workshop event galleries.
        </p>
      </div>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {credentialsData.map((cred, idx) => {
          const tapeClass = tapeClasses[idx % tapeClasses.length];
          const tilt = tilts[idx % tilts.length];

          return (
            <div
              key={cred.id}
              onClick={() => {
                setSelectedCred(cred);
                setActiveVenueTab(0);
              }}
              className={`relative bg-[#181C28] border-2 border-[#2B3245] hover:border-[#D4AF37] rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:rotate-0 hover:shadow-sketchLg shadow-sketch cursor-pointer flex flex-col justify-between group ${tilt}`}
            >
              {/* Washi Tape Accent */}
              <div className={`${tapeClass} -top-2 left-8 rotate-[-4deg]`} />
              <div className="absolute top-3 right-5 text-lg select-none pointer-events-none opacity-80 group-hover:scale-110 transition-transform">
                📎
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b-2 border-dashed border-[#2B3245]">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#10121A] text-[#FFD700] border border-[#D4AF37]/30 font-bold">
                    {cred.categoryLabel}
                  </span>
                  <span className="font-mono text-[10px] text-[#94A3B8]">{cred.date}</span>
                </div>

                <h3 className="font-sans font-bold text-base sm:text-lg text-white group-hover:text-[#FFD700] transition-colors mb-1.5 leading-snug">
                  {cred.title}
                </h3>
                <p className="font-mono text-xs text-[#FFD700] mb-4">
                  {cred.issuer}
                </p>

                {/* Visual Preview Frame */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#0A0A0C] border border-[#2B3245] group-hover:border-[#D4AF37]/50 flex flex-col items-center justify-center p-3 text-center mb-4 transition-colors">
                  {cred.imagePath ? (
                    <Image
                      src={cred.imagePath}
                      alt={cred.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : cred.photos && cred.photos[0]?.images[0] ? (
                    <Image
                      src={cred.photos[0].images[0]}
                      alt={cred.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-3">
                      <Briefcase className="w-8 h-8 text-[#D4AF37] mb-2" />
                      <span className="font-mono text-[10px] text-[#E2E8F0] font-medium">
                        {cred.placeholderText}
                      </span>
                    </div>
                  )}

                  {/* Badge Overlay */}
                  {(cred.imagePath || cred.photos) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                      <span className="font-mono text-[10px] text-[#FFD700] font-bold">
                        {cred.placeholderText}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="space-y-1 mb-4 pt-2 border-t-2 border-dashed border-[#2B3245]">
                  {cred.skillsVerified.slice(0, 2).map((s, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 font-mono text-[10px] text-[#CBD5E1]">
                      <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] group-hover:text-[#FFD700] pt-2 border-t-2 border-dashed border-[#2B3245] font-bold">
                  <span>Inspect Verified Record</span>
                  <span>View Details →</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Credential Inspection & Image Gallery Modal */}
      {selectedCred && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <div className="fixed inset-0" onClick={() => setSelectedCred(null)} />
          <div className="relative w-full max-w-3xl bg-[#14141C] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 z-10 shadow-2xl my-8">
            <button
              onClick={() => setSelectedCred(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#1E1E28] border border-[#2A2A38] text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#FFD700] font-bold inline-block mb-3">
              {selectedCred.categoryLabel} • {selectedCred.date}
            </span>

            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white mb-1">
              {selectedCred.title}
            </h3>
            <p className="font-mono text-xs text-[#FFD700] font-bold mb-6">
              Organization / Issuer: {selectedCred.issuer}
            </p>

            {/* 1. IIIT Certificate Direct Image Preview */}
            {selectedCred.imagePath && (
              <div className="mb-6">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl cursor-pointer group"
                  onClick={() => setZoomedImage(selectedCred.imagePath || null)}
                >
                  <Image
                    src={selectedCred.imagePath}
                    alt="Verified Certificate"
                    fill
                    className="object-contain bg-black"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-black/80 border border-[#D4AF37] text-xs font-mono font-bold text-[#FFD700]">
                      Click to Enlarge High-Res Certificate 🔍
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Multi-Venue Workshop Event Photo Gallery */}
            {selectedCred.photos && selectedCred.photos.length > 0 && (
              <div className="mb-6">
                {/* Venue Tab Selector */}
                <div className="flex flex-wrap gap-2 pb-3 mb-4 border-b border-[#22222A]">
                  {selectedCred.photos.map((venue, idx) => (
                    <button
                      key={venue.venue}
                      onClick={() => setActiveVenueTab(idx)}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                        activeVenueTab === idx
                          ? "bg-[#D4AF37] text-black shadow-xs"
                          : "bg-[#181822] text-slate-400 hover:text-white border border-[#2A2A38]"
                      }`}
                    >
                      {venue.venue} ({venue.images.length} Photos)
                    </button>
                  ))}
                </div>

                {/* Gallery Images Grid for Active Venue */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedCred.photos[activeVenueTab]?.images.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#2A2A38] hover:border-[#D4AF37] cursor-pointer group"
                      onClick={() => setZoomedImage(imgSrc)}
                    >
                      <Image
                        src={imgSrc}
                        alt={`Event photo ${imgIdx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description Narrative */}
            <div className="space-y-4 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6">
              <p>{selectedCred.summary}</p>
            </div>

            {/* Verified Skills */}
            <div className="space-y-2 pt-4 border-t border-[#22222A] mb-6">
              <span className="font-mono text-xs text-white font-bold block">
                Verified Technical Domains:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCred.skillsVerified.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-[#181822] text-[#FFD700] text-xs font-mono border border-[#D4AF37]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate PDF Link if available */}
            {selectedCred.certificateUrl && (
              <a
                href={selectedCred.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs hover:bg-[#FFD700] transition-colors"
              >
                <span>View Full Certificate PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Lightbox Zoom for High-Res Certificate / Event Photos */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#1E1E28] border border-[#D4AF37]/50 text-white hover:text-[#FFD700] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] overflow-hidden rounded-2xl border-2 border-[#D4AF37]">
            <Image
              src={zoomedImage}
              alt="Zoomed Credential / Event Photo"
              fill
              className="object-contain bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
