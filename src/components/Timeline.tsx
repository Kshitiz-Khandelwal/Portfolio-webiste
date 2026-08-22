"use client";

import React, { useState } from "react";
import { milestonesData } from "@/data/milestones";
import { Award, Trophy, GraduationCap, Users, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Timeline() {
  const [filter, setFilter] = useState<string>("all");

  const filteredMilestones = milestonesData.filter((m) => {
    if (filter === "all") return true;
    return m.type === filter;
  });

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-zinc-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono uppercase tracking-wider text-amber-400 mb-3">
            Track Record & Impact
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-zinc-100 tracking-tight">
            Hackathons, Leadership & Education
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900/80 border border-zinc-800 rounded-xl self-start md:self-auto">
          {["all", "hackathon", "leadership", "education"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-lg text-xs font-sans capitalize transition-all ${
                filter === f
                  ? "bg-amber-500 text-zinc-950 font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {f === "all" ? "All History" : f}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Timeline Rail */}
      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800/90 space-y-10">
        {filteredMilestones.map((item, idx) => {
          const isHackathon = item.type === "hackathon";
          const isEdu = item.type === "education";

          return (
            <div key={idx} className="relative group">
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[35px] sm:-left-[43px] top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-110 ${
                  isHackathon
                    ? "bg-amber-500/20 border-amber-500/50 text-amber-400"
                    : isEdu
                    ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                    : "bg-zinc-800 border-zinc-700 text-zinc-300"
                }`}
              >
                {isHackathon ? (
                  <Trophy className="w-3.5 h-3.5" />
                ) : isEdu ? (
                  <GraduationCap className="w-3.5 h-3.5" />
                ) : (
                  <Users className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Milestone Card */}
              <div className="bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-5 sm:p-6 transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold text-amber-400">
                    {item.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider bg-zinc-800 border border-zinc-700 text-zinc-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg sm:text-xl text-zinc-100 mb-0.5">
                  {item.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-sans mb-4">
                  <span className="text-zinc-300 font-medium">{item.organization}</span>
                  <span>•</span>
                  <span>{item.role}</span>
                  {item.location && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-zinc-500">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </span>
                    </>
                  )}
                </div>

                <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-zinc-800/60">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/70 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
