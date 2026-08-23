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
      badgeClass: "badge-coral",
    },
    {
      author: "BMSIT&M Department & Innovation Cell",
      role: "Faculty Mentorship & Hackathon Panel",
      institution: "BMS Institute of Technology & Management",
      quote:
        "Consistent top-tier academic performance (9.43 CGPA) paired with practical leadership — instructing over 100 undergraduates in microcontroller programming and winning accolades in institutional hackathons.",
      tag: "ACADEMIC & LEADERSHIP EXCELLENCE",
      badgeClass: "badge-sage",
    },
    {
      author: "Engineering Mentorship @ Zarthi",
      role: "Backend & Systems Lead",
      institution: "Zarthi Technologies",
      quote:
        "Rapidly grasps production microservices concepts in Java and Spring Boot, delivering clean asynchronous REST endpoints, resilient error handling, and optimized database query plans.",
      tag: "INDUSTRY BACKEND INTERNSHIP",
      badgeClass: "badge-tan",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#E0C9AE]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl badge-coral text-[11px] font-mono uppercase tracking-wider font-bold mb-3">
            Third-Party Validation
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#3A2E22] tracking-tight">
            Institutional Mentorship &amp; Faculty Endorsements
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#8A7A63] max-w-md">
          Feedback from academic research supervisors, university faculty, and industry engineering leads.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="relative bg-[#FDF8F2] border border-[#E0C9AE] hover:border-[#E8846B] rounded-3xl p-6 sm:p-7 shadow-warm hover:shadow-warmLg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E0C9AE]">
                <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold ${t.badgeClass}`}>
                  {t.tag}
                </span>
                <Quote className="w-5 h-5 text-[#E8846B] opacity-70" />
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#5C4D3C] leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-[#E0C9AE]">
              <h4 className="font-sans font-bold text-sm text-[#3A2E22] group-hover:text-[#E8846B] transition-colors">
                {t.author}
              </h4>
              <p className="font-mono text-xs text-[#E8846B] font-semibold">
                {t.role}
              </p>
              <p className="font-sans text-[11px] text-[#8A7A63] mt-0.5">
                {t.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
