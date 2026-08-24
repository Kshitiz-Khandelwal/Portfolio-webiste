"use client";

import React, { useState } from "react";
import Image from "next/image";
import { credentialsData, CredentialItem } from "@/data/credentials";
import { Award, FileText, CheckCircle2, X, ExternalLink, ShieldCheck, Sparkles, ImageIcon, Briefcase, ChevronRight } from "lucide-react";

export function CredentialsVault() {
  const [selectedCred, setSelectedCred] = useState<CredentialItem | null>(null);
  const [activeVenueTab, setActiveVenueTab] = useState<number>(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const tapeStyles = ["washi-tape-coral", "washi-tape-sage", "washi-tape-mustard", "washi-tape-lavender"];

  return (
    <section id="credentials" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-bree text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4BAA3] mb-2">
          Verified Evidence
        </span>
        <h2 className="font-bree text-5xl sm:text-6xl md:text-7xl text-[#F5E1CD]">
          Experience &amp; Credentials Vault
        </h2>
        <p className="font-gochi text-base sm:text-lg text-[#D4BAA3] mt-2 max-w-md">
          Current industry internship at Zarthi, research fellowship at IIIT Trichy with verified certificate, and workshop event galleries.
        </p>
      </div>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {credentialsData.map((cred, idx) => {
          const TapeClass = tapeStyles[idx % tapeStyles.length];

          return (
            <div
              key={cred.id}
              onClick={() => {
                setSelectedCred(cred);
                setActiveVenueTab(0);
              }}
              className="relative bg-[#F5E1CD] border-[3.5px] border-[#3E3124] rounded-[26px] p-6 shadow-sketch flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sketchLg cursor-pointer group"
              style={{
                transform: `rotate(${idx % 2 === 0 ? -0.8 : 0.8}deg)`,
              }}
            >
              <div className={`${TapeClass} -top-3.5 left-6 rotate-[-5deg] !w-16 !h-4`} />

              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b-2 border-dashed border-[#3E3124]/30">
                  <span className="font-gochi text-xs px-2.5 py-0.5 rounded-full bg-[#E25543] text-white border border-[#3E3124] font-bold">
                    {cred.categoryLabel}
                  </span>
                  <span className="font-gochi text-xs text-[#6D6358]">{cred.date}</span>
                </div>

                <h3 className="font-bree font-bold text-lg text-[#3E3124] group-hover:text-[#E25543] transition-colors mb-1 leading-snug">
                  {cred.title}
                </h3>
                <p className="font-gochi text-sm text-[#E25543] font-bold mb-4">
                  {cred.issuer}
                </p>

                {/* Visual Preview Frame */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#E9D3BB] border-2 border-[#3E3124] flex flex-col items-center justify-center p-2 text-center mb-4 transition-colors">
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
                      <Briefcase className="w-8 h-8 text-[#E25543] mb-1" />
                      <span className="font-gochi text-xs text-[#3E3124] font-bold">
                        {cred.placeholderText}
                      </span>
                    </div>
                  )}

                  {(cred.imagePath || cred.photos) && (
                    <div className="absolute inset-x-0 bottom-0 bg-[#1F1D1B]/90 flex items-end p-1.5">
                      <span className="font-gochi text-xs text-[#F5E1CD]">
                        {cred.placeholderText}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="space-y-1 mb-4 pt-2 border-t-2 border-dashed border-[#3E3124]/30">
                  {cred.skillsVerified.slice(0, 2).map((s, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 font-gochi text-xs text-[#3E3124]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E25543]" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between font-gochi text-xs text-[#6D6358] group-hover:text-[#E25543] pt-2 border-t border-[#3E3124]/20 font-bold">
                  <span>Inspect Record</span>
                  <span>View Details ➔</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Credential Inspection Modal */}
      {selectedCred && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="fixed inset-0" onClick={() => setSelectedCred(null)} />
          <div className="relative w-full max-w-3xl bg-[#F5E1CD] border-[4px] border-[#3E3124] rounded-[28px] p-6 sm:p-8 z-10 shadow-paper my-8">
            <button
              onClick={() => setSelectedCred(null)}
              className="absolute top-5 right-5 p-1.5 rounded-xl bg-[#E9D3BB] border-2 border-[#3E3124] text-[#3E3124] hover:bg-[#E25543] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-gochi text-xs px-3 py-0.5 rounded-full bg-[#E25543] text-white border border-[#3E3124] font-bold inline-block mb-3">
              {selectedCred.categoryLabel} • {selectedCred.date}
            </span>

            <h3 className="font-bree font-bold text-2xl sm:text-3xl text-[#3E3124] mb-1">
              {selectedCred.title}
            </h3>
            <p className="font-gochi text-base text-[#E25543] font-bold mb-6">
              Organization / Issuer: {selectedCred.issuer}
            </p>

            {/* IIIT Certificate Direct Image Preview */}
            {selectedCred.imagePath && (
              <div className="mb-6">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#3E3124] shadow-sketch cursor-pointer group bg-[#1F1D1B]"
                  onClick={() => setZoomedImage(selectedCred.imagePath || null)}
                >
                  <Image
                    src={selectedCred.imagePath}
                    alt="Verified Certificate"
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-[#F5E1CD] font-gochi text-sm font-bold text-[#3E3124] border-2 border-[#3E3124] shadow-sketch">
                      Click to Enlarge High-Res Certificate 🔍
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Multi-Venue Workshop Event Photo Gallery */}
            {selectedCred.photos && selectedCred.photos.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 pb-3 mb-4 border-b-2 border-dashed border-[#3E3124]/30">
                  {selectedCred.photos.map((venue, idx) => (
                    <button
                      key={venue.venue}
                      onClick={() => setActiveVenueTab(idx)}
                      className={`px-3.5 py-1 rounded-xl font-gochi text-sm font-bold border-2 border-[#3E3124] transition-all cursor-pointer ${
                        activeVenueTab === idx
                          ? "bg-[#E25543] text-white shadow-xs"
                          : "bg-[#E9D3BB] text-[#3E3124] hover:bg-[#F7E8D8]"
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
                      className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#3E3124] hover:border-[#E25543] cursor-pointer group bg-[#1F1D1B]"
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
            <div className="space-y-4 font-gochi text-base text-[#3E3124] leading-relaxed mb-6">
              <p>{selectedCred.summary}</p>
            </div>

            {/* Verified Skills */}
            <div className="space-y-2 pt-4 border-t-2 border-dashed border-[#3E3124]/30 mb-6">
              <span className="font-bree text-sm text-[#3E3124] font-bold block">
                Verified Technical Domains:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCred.skillsVerified.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#262626] text-[#D4BAA3] border border-[#5B5248]"
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
                className="sketch-button sketch-button-filled text-sm"
              >
                <span>View Full Certificate PDF</span>
                <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Lightbox Zoom */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#F5E1CD] border-2 border-[#3E3124] text-[#3E3124] hover:bg-[#E25543] hover:text-white transition-colors shadow-sketch"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] overflow-hidden rounded-2xl border-[4px] border-[#3E3124] bg-[#1F1D1B] shadow-paper">
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
