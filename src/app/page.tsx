import { Navbar } from "@/components/Navbar";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Hero } from "@/components/Hero";
import { WhatIWorkOn } from "@/components/WhatIWorkOn";
import { HorizontalProjectRail } from "@/components/HorizontalProjectRail";
import { HowIBuild } from "@/components/HowIBuild";
import { OtherProjectsAndIoT } from "@/components/OtherProjectsAndIoT";
import { EvidenceSkills } from "@/components/EvidenceSkills";
import { CredentialsVault } from "@/components/CredentialsVault";
import { HackathonExperience } from "@/components/HackathonExperience";
import { EducationSection } from "@/components/EducationSection";
import { GitHubSection } from "@/components/GitHubSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0F121A] text-[#F8FAFC] overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Interactive Constellation Canvas & Cursor Spotlight */}
      <BackgroundEffects />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10">
        <Hero />
        <WhatIWorkOn />
        <HorizontalProjectRail />
        <HowIBuild />
        <OtherProjectsAndIoT />
        <EvidenceSkills />
        <CredentialsVault />
        <HackathonExperience />
        <EducationSection />
        <GitHubSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Signature Minimal Footer */}
      <Footer />
    </div>
  );
}
