"use client";

import React, { useState } from "react";
import Image from "next/image";
import { credentialsData, CredentialItem } from "@/data/credentials";
import { Award, FileText, CheckCircle2, X, ExternalLink, ShieldCheck, Sparkles, ImageIcon, Briefcase, ChevronRight } from "lucide-react";

export function CredentialsVault() {
  const [selectedCred, setSelectedCred] = useState<CredentialItem | null>(null);
  const [activeVenueTab, setActiveVenueTab] = useState<number>(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <section id="credentials" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#E0C9AE]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl badge-coral text-[11px] font-mono uppercase tracking-wider font-bold mb-3">
            Experience &amp; Institutional Proof
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#3A2E22] tracking-tight">
            Work Experience &amp; Credentials Vault
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#8A7A63] max-w-md">
          Current industry internship at Zarthi, research fellowship at IIIT Trichy with verified certificate, and workshop event galleries.
        </p>
      </div>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {credentialsData.map((cred, idx) => {
          return (
            <div
              key={cred.id}
              onClick={() => {
                setSelectedCred(cred);
                setActiveVenueTab(0);
              }}
              className="relative bg-[#FDF8F2] border border-[#E0C9AE] hover:border-[#E8846B] rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-warmLg shadow-warm cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b border-[#E0C9AE]">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full badge-coral font-bold">
                    {cred.categoryLabel}
                  </span>
                  <span className="font-mono text-[10px] text-[#8A7A63]">{cred.date}</span>
                </div>

                <h3 className="font-sans font-bold text-base sm:text-lg text-[#3A2E22] group-hover:text-[#E8846B] transition-colors mb-1.5 leading-snug">
                  {cred.title}
                </h3>
                <p className="font-mono text-xs text-[#E8846B] mb-4 font-semibold">
                  {cred.issuer}
                </p>

                {/* Visual Preview Frame */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#FAF3E8] border border-[#E0C9AE] group-hover:border-[#E8846B]/50 flex flex-col items-center justify-center p-2 text-center mb-4 transition-colors">
                  {cred.imagePath ? (
                    <Image
                      src={cred.imagePath}
                      alt={cred.title}
                      fill
                      className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
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
                      <Briefcase className="w-8 h-8 text-[#E8846B] mb-2" />
                      <span className="font-mono text-[10px] text-[#3A2E22] font-medium">
                        {cred.placeholderText}
                      </span>
                    </div>
                  )}

                  {/* Badge Overlay */}
                  {(cred.imagePath || cred.photos) && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3A2E22]/90 via-[#3A2E22]/40 to-transparent flex items-end p-2">
                      <span className="font-mono text-[10px] text-[#FAF3E8] font-bold">
                        {cred.placeholderText}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="space-y-1 mb-4 pt-2 border-t border-[#E0C9AE]">
                  {cred.skillsVerified.slice(0, 2).map((s, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 font-mono text-[10px] text-[#5C4D3C]">
                      <CheckCircle2 className="w-3 h-3 text-[#8FBFA0]" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#8A7A63] group-hover:text-[#E8846B] pt-2 border-t border-[#E0C9AE] font-bold">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3A2E22]/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <div className="fixed inset-0" onClick={() => setSelectedCred(null)} />
          <div className="relative w-full max-w-3xl bg-[#FDF8F2] border-2 border-[#E8846B] rounded-3xl p-6 sm:p-8 z-10 shadow-warmLg my-8">
            <button
              onClick={() => setSelectedCred(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#F3D9C4] border border-[#E0C9AE] text-[#5C4D3C] hover:text-[#3A2E22] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full badge-coral font-bold inline-block mb-3">
              {selectedCred.categoryLabel} • {selectedCred.date}
            </span>

            <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#3A2E22] mb-1">
              {selectedCred.title}
            </h3>
            <p className="font-mono text-xs text-[#E8846B] font-bold mb-6">
              Organization / Issuer: {selectedCred.issuer}
            </p>

            {/* 1. IIIT Certificate Direct Image Preview */}
            {selectedCred.imagePath && (
              <div className="mb-6">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E0C9AE] shadow-warm cursor-pointer group bg-[#FAF3E8]"
                  onClick={() => setZoomedImage(selectedCred.imagePath || null)}
                >
                  <Image
                    src={selectedCred.imagePath}
                    alt="Verified Certificate"
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-[#3A2E22]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-[#FAF3E8] border border-[#E8846B] text-xs font-mono font-bold text-[#3A2E22] shadow-sm">
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
                <div className="flex flex-wrap gap-2 pb-3 mb-4 border-b border-[#E0C9AE]">
                  {selectedCred.photos.map((venue, idx) => (
                    <button
                      key={venue.venue}
                      onClick={() => setActiveVenueTab(idx)}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                        activeVenueTab === idx
                          ? "bg-[#E8846B] text-[#FAF3E8] shadow-xs"
                          : "bg-[#F3D9C4] text-[#5C4D3C] hover:text-[#3A2E22] border border-[#E0C9AE]"
                      }`}
                    >
                      {venue.venue} ({venue.images.length} Photos)
                    </button>
                  ))}
                </div>

                {/* Gallery Images Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedCred.photos[activeVenueTab]?.images.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E0C9AE] hover:border-[#E8846B] cursor-pointer group bg-[#FAF3E8]"
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
            <div className="space-y-4 text-xs sm:text-sm text-[#5C4D3C] leading-relaxed mb-6">
              <p>{selectedCred.summary}</p>
            </div>

            {/* Verified Skills */}
            <div className="space-y-2 pt-4 border-t border-[#E0C9AE] mb-6">
              <span className="font-mono text-xs text-[#3A2E22] font-bold block">
                Verified Technical Domains:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCred.skillsVerified.map((skill, sIdx) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono ${
                      sIdx % 2 === 0 ? "badge-coral" : "badge-sage"
                    }`}
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E8846B] text-[#FAF3E8] font-bold text-xs hover:bg-[#D9735A] transition-colors"
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
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-[#3A2E22]/90 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#FDF8F2] border border-[#E0C9AE] text-[#3A2E22] hover:text-[#E8846B] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] overflow-hidden rounded-2xl border-2 border-[#E8846B] bg-[#FAF3E8]">
            <Image
              src={zoomedImage}
              alt="Zoomed Credential / Event Photo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
