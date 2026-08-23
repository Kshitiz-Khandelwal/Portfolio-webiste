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
      badgeClass: "badge-blue",
    },
    {
      author: "BMSIT&M Department & Innovation Cell",
      role: "Faculty Mentorship & Hackathon Panel",
      institution: "BMS Institute of Technology & Management",
      quote:
        "Consistent top-tier academic performance (9.43 CGPA) paired with practical leadership — instructing over 100 undergraduates in microcontroller programming and winning accolades in institutional hackathons.",
      tag: "ACADEMIC & LEADERSHIP EXCELLENCE",
      badgeClass: "badge-neutral",
    },
    {
      author: "Engineering Mentorship @ Zarthi",
      role: "Backend & Systems Lead",
      institution: "Zarthi Technologies",
      quote:
        "Rapidly grasps production microservices concepts in Java and Spring Boot, delivering clean asynchronous REST endpoints, resilient error handling, and optimized database query plans.",
      tag: "INDUSTRY BACKEND INTERNSHIP",
      badgeClass: "badge-blue",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto bg-[#F7F7F5] rounded-3xl my-8 border border-[#E5E7EB]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg badge-blue text-[11px] font-mono uppercase tracking-wider font-semibold mb-3">
            Third-Party Validation
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#111827] tracking-tight">
            Institutional Mentorship &amp; Faculty Endorsements
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#6B7280] max-w-md">
          Feedback from academic research supervisors, university faculty, and industry engineering leads.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="relative bg-white border border-[#E5E7EB] hover:border-[#2563EB] rounded-3xl p-6 sm:p-7 shadow-clean hover:shadow-clean-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F3F4F6]">
                <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold ${t.badgeClass}`}>
                  {t.tag}
                </span>
                <Quote className="w-5 h-5 text-[#2563EB] opacity-60" />
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-[#F3F4F6]">
              <h4 className="font-sans font-bold text-sm text-[#111827] group-hover:text-[#2563EB] transition-colors">
                {t.author}
              </h4>
              <p className="font-sans text-xs text-[#2563EB] font-medium">
                {t.role}
              </p>
              <p className="font-sans text-[11px] text-[#6B7280] mt-0.5">
                {t.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
