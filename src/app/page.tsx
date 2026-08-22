import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { HowIBuild } from "@/components/HowIBuild";
import { HorizontalProjectRail } from "@/components/HorizontalProjectRail";
import { OtherProjectsAndIoT } from "@/components/OtherProjectsAndIoT";
import { EvidenceSkills } from "@/components/EvidenceSkills";
import { CredentialsVault } from "@/components/CredentialsVault";
import { HackathonExperience } from "@/components/HackathonExperience";
import { EducationSection } from "@/components/EducationSection";
import { GitHubSection } from "@/components/GitHubSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0C] text-[#F4F4F7] overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <HowIBuild />
        <HorizontalProjectRail />
        <OtherProjectsAndIoT />
        <EvidenceSkills />
        <CredentialsVault />
        <HackathonExperience />
        <EducationSection />
        <GitHubSection />
        <ContactSection />
      </main>

      {/* Signature Minimal Footer */}
      <Footer />
    </div>
  );
}
