"use client";

import React from "react";
import { Quote, Award, CheckCircle2, Building2, BookOpen } from "lucide-react";

export function MentorshipTestimonials() {
  const testimonials = [
    {
      author: "Dr. R. Jennie Bharathi",
      role: "Assistant Professor & Research Supervisor",
      institution: "IIIT Tiruchirappalli (AICTE-QIP-PG Programme)",
      quote:
        "Kshitiz demonstrated exceptional research curiosity and mathematical rigor while formulating the NoPeek distance loss and Spiking Neural Network cut-layer abstractions for our Split Federated Learning research on IoMT networks.",
      tag: "RESEARCH SUPERVISION",
      tapeColor: "washi-tape-coral",
    },
    {
      author: "BMSIT&M Department & Innovation Cell",
      role: "Faculty Mentorship & Hackathon Panel",
      institution: "BMS Institute of Technology & Management",
      quote:
        "Consistent top-tier academic performance (9.43 CGPA) paired with practical leadership — instructing over 100 undergraduates in microcontroller programming and winning accolades in institutional hackathons.",
      tag: "ACADEMIC EXCELLENCE",
      tapeColor: "washi-tape-sage",
    },
    {
      author: "Engineering Mentorship @ Zarthi",
      role: "Backend & Systems Lead",
      institution: "Zarthi Technologies",
      quote:
        "Rapidly grasps production microservices concepts in Java and Spring Boot, delivering clean asynchronous REST endpoints, resilient error handling, and optimized database query plans.",
      tag: "BACKEND INTERNSHIP",
      tapeColor: "washi-tape-mustard",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-bree text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D4BAA3] mb-2">
          Third-Party Validation
        </span>
        <h2 className="font-bree text-5xl sm:text-6xl md:text-7xl text-[#F5E1CD]">
          Mentorship &amp; Endorsements
        </h2>
        <p className="font-gochi text-base sm:text-lg text-[#D4BAA3] mt-2 max-w-md">
          Feedback from academic research supervisors, university faculty, and industry engineering leads.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="relative bg-[#F5E1CD] border-[3.5px] border-[#3E3124] rounded-[26px] p-6 shadow-sketch flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sketchLg group"
            style={{
              transform: `rotate(${idx % 2 === 0 ? -0.8 : 0.8}deg)`,
            }}
          >
            <div className={`${t.tapeColor} -top-3.5 left-6 rotate-[-5deg] !w-16 !h-4`} />

            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-dashed border-[#3E3124]/30">
                <span className="font-gochi text-xs px-2.5 py-0.5 rounded-full bg-[#E25543] text-white border border-[#3E3124] font-bold">
                  {t.tag}
                </span>
                <Quote className="w-5 h-5 text-[#E25543] opacity-80" />
              </div>

              <p className="font-gochi text-base text-[#3E3124] leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-3 border-t-2 border-dashed border-[#3E3124]/30">
              <h4 className="font-bree font-bold text-base text-[#3E3124] group-hover:text-[#E25543] transition-colors">
                {t.author}
              </h4>
              <p className="font-gochi text-xs text-[#E25543] font-bold">
                {t.role}
              </p>
              <p className="font-gochi text-xs text-[#6D6358] mt-0.5">
                {t.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
