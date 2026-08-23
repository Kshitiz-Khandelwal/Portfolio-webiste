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
    <div className="relative min-h-screen bg-[#1A1025] text-[#E5DAF7] overflow-x-hidden selection:bg-[#A78BFA]/30 selection:text-[#E5DAF7]">
      {/* Interactive Canvas & Glows */}
      <BackgroundEffects />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Page Flow */}
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

      {/* Signature Deep Violet Footer */}
      <Footer />
    </div>
  );
}
