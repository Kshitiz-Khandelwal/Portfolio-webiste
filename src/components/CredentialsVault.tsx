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
    <section id="credentials" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-[#F7F7F5] rounded-3xl my-8 border border-[#E5E7EB]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg badge-blue text-[11px] font-mono uppercase tracking-wider font-semibold mb-3">
            Experience &amp; Institutional Proof
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#111827] tracking-tight">
            Work Experience &amp; Credentials Vault
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-md">
          Current industry internship at Zarthi, research fellowship at IIIT Trichy with verified certificate, and workshop event galleries.
        </p>
      </div>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {credentialsData.map((cred) => {
          return (
            <div
              key={cred.id}
              onClick={() => {
                setSelectedCred(cred);
                setActiveVenueTab(0);
              }}
              className="relative bg-white border border-[#E5E7EB] hover:border-[#2563EB] rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-clean-md shadow-clean cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b border-[#F3F4F6]">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full badge-blue font-semibold">
                    {cred.categoryLabel}
                  </span>
                  <span className="font-mono text-[10px] text-[#6B7280]">{cred.date}</span>
                </div>

                <h3 className="font-sans font-bold text-base sm:text-lg text-[#111827] group-hover:text-[#2563EB] transition-colors mb-1.5 leading-snug">
                  {cred.title}
                </h3>
                <p className="font-sans text-xs text-[#2563EB] mb-4 font-medium">
                  {cred.issuer}
                </p>

                {/* Visual Preview Frame */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F3F4F6] border border-[#E5E7EB] group-hover:border-[#BFDBFE] flex flex-col items-center justify-center p-2 text-center mb-4 transition-colors">
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
                      <Briefcase className="w-8 h-8 text-[#2563EB] mb-2" />
                      <span className="font-mono text-[10px] text-[#111827] font-medium">
                        {cred.placeholderText}
                      </span>
                    </div>
                  )}

                  {/* Badge Overlay */}
                  {(cred.imagePath || cred.photos) && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-2">
                      <span className="font-mono text-[10px] text-white font-semibold">
                        {cred.placeholderText}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="space-y-1 mb-4 pt-2 border-t border-[#F3F4F6]">
                  {cred.skillsVerified.slice(0, 2).map((s, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 font-mono text-[10px] text-[#4B5563]">
                      <CheckCircle2 className="w-3 h-3 text-[#2563EB]" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-sans text-[#6B7280] group-hover:text-[#2563EB] pt-2 border-t border-[#F3F4F6] font-medium">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          <div className="fixed inset-0" onClick={() => setSelectedCred(null)} />
          <div className="relative w-full max-w-3xl bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 z-10 shadow-clean-lg my-8">
            <button
              onClick={() => setSelectedCred(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#F3F4F6] border border-[#E5E7EB] text-[#6B7280] hover:text-[#111827] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full badge-blue font-semibold inline-block mb-3">
              {selectedCred.categoryLabel} • {selectedCred.date}
            </span>

            <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#111827] mb-1">
              {selectedCred.title}
            </h3>
            <p className="font-sans text-xs text-[#2563EB] font-semibold mb-6">
              Organization / Issuer: {selectedCred.issuer}
            </p>

            {/* 1. IIIT Certificate Direct Image Preview */}
            {selectedCred.imagePath && (
              <div className="mb-6">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-clean cursor-pointer group bg-[#F3F4F6]"
                  onClick={() => setZoomedImage(selectedCred.imagePath || null)}
                >
                  <Image
                    src={selectedCred.imagePath}
                    alt="Verified Certificate"
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-white text-xs font-sans font-medium text-[#111827] shadow-clean">
                      Click to Enlarge High-Res Certificate 🔍
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Multi-Venue Workshop Event Photo Gallery */}
            {selectedCred.photos && selectedCred.photos.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 pb-3 mb-4 border-b border-[#E5E7EB]">
                  {selectedCred.photos.map((venue, idx) => (
                    <button
                      key={venue.venue}
                      onClick={() => setActiveVenueTab(idx)}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-medium transition-all ${
                        activeVenueTab === idx
                          ? "bg-[#2563EB] text-white shadow-clean"
                          : "bg-[#F3F4F6] text-[#4B5563] hover:text-[#111827] border border-[#E5E7EB]"
                      }`}
                    >
                      {venue.venue} ({venue.images.length} Photos)
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedCred.photos[activeVenueTab]?.images.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E5E7EB] hover:border-[#2563EB] cursor-pointer group bg-[#F3F4F6]"
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
            <div className="space-y-4 text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
              <p>{selectedCred.summary}</p>
            </div>

            {/* Verified Skills */}
            <div className="space-y-2 pt-4 border-t border-[#E5E7EB] mb-6">
              <span className="font-mono text-xs text-[#111827] font-semibold block">
                Verified Technical Domains:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCred.skillsVerified.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono badge-neutral"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate PDF Link */}
            {selectedCred.certificateUrl && (
              <a
                href={selectedCred.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] text-white font-medium text-xs hover:bg-[#1D4ED8] transition-colors shadow-clean"
              >
                <span>View Full Certificate PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Lightbox Zoom */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white border border-[#E5E7EB] text-[#111827] hover:text-[#2563EB] transition-colors shadow-clean"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-clean-lg">
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
