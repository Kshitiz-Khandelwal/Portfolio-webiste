import { Navbar } from "@/components/Navbar";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { WhatIWorkOn } from "@/components/WhatIWorkOn";
import { HorizontalProjectRail } from "@/components/HorizontalProjectRail";
import { HowIBuild } from "@/components/HowIBuild";
import { OtherProjectsAndIoT } from "@/components/OtherProjectsAndIoT";
import { EvidenceSkills } from "@/components/EvidenceSkills";
import { CredentialsVault } from "@/components/CredentialsVault";
import { HackathonExperience } from "@/components/HackathonExperience";
import { MentorshipTestimonials } from "@/components/MentorshipTestimonials";
import { EducationSection } from "@/components/EducationSection";
import { GitHubSection } from "@/components/GitHubSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0F121A] text-[#F8FAFC] overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Interactive Constellation Canvas & Floating Quotes */}
      <BackgroundEffects />

      {/* Sticky Ripped Paper Navbar */}
      <Navbar />

      {/* Main Page Flow with About positioned high up */}
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <WhatIWorkOn />
        <HorizontalProjectRail />
        <HowIBuild />
        <OtherProjectsAndIoT />
        <EvidenceSkills />
        <CredentialsVault />
        <HackathonExperience />
        <MentorshipTestimonials />
        <EducationSection />
        <GitHubSection />
        <ContactSection />
      </main>

      {/* Signature Minimal Footer */}
      <Footer />
    </div>
  );
}
