export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  categoryLabel: string;
  summary: string;
  skillsVerified: string[];
  placeholderText: string;
  certificateUrl?: string;
  imagePath?: string;
  photos?: {
    venue: string;
    images: string[];
  }[];
  photosUrl?: string;
}

export const credentialsData: CredentialItem[] = [
  {
    id: "cred-zarthi-internship",
    title: "Backend Developer Intern",
    issuer: "Zarthi",
    date: "Current / Ongoing",
    categoryLabel: "Industry Internship",
    summary:
      "Engineering robust backend services, microservices architectures, and high-performance REST APIs using Java and Spring Boot, integrated with SQL databases and production infrastructure.",
    skillsVerified: ["Java", "Spring Boot", "Microservices", "REST APIs", "SQL & Database Design"],
    placeholderText: "💼 ZARTHI — JAVA & SPRING BOOT BACKEND INTERNSHIP",
  },
  {
    id: "cred-iiit-trichy-research",
    title: "Research Intern — IoMT Privacy & Split Federated Learning",
    issuer: "Indian Institute of Information Technology Tiruchirappalli (IIIT Trichy)",
    date: "Mar 2026 – May 2026",
    categoryLabel: "Research Fellowship",
    summary:
      "Completed research internship under the AICTE-QIP-PG Certificate Programme on Machine Learning & Cyber Physical Systems (Supervised by Dr. R. Jennie Bharathi). Contributed to 'An SNN-based Split Federated Learning Framework for Privacy Preserving Intrusion Detection in IoMT Networks'.",
    skillsVerified: ["Split Federated Learning", "Spiking Neural Networks (SNN)", "IoMT Cybersecurity", "Differential Privacy"],
    placeholderText: "📜 VERIFIED AICTE-QIP-PG RESEARCH CERTIFICATE",
    imagePath: "/iiit_trichy_certificate.jpeg",
    certificateUrl: "https://drive.google.com/file/d/1dyT0s3BKhlt2c8Qz7MZqIhBUK2SkKdxP/view?usp=sharing",
  },
  {
    id: "cred-iot-workshops",
    title: "IoT & Edge AI Workshop Instructor & Co-Organizer",
    issuer: "BMSIT&M • SCJIT • Vivekananda Institute of Technology (VKIT)",
    date: "May 2026",
    categoryLabel: "Technical Outreach & Teaching",
    summary:
      "Conducted intensive hands-on embedded systems and edge ML workshops for 100+ engineering students across multiple colleges, covering Raspberry Pi Pico 2 (RP2350), ESP32, GPIO/I2C sensor interfacing, and FreeRTOS telemetry.",
    skillsVerified: ["Raspberry Pi Pico (RP2350)", "ESP32 & FreeRTOS", "Sensor Telemetry", "Technical Instruction"],
    placeholderText: "📸 WORKSHOP EVENT PHOTOS GALLERY (3 CAMPUSES)",
    photos: [
      {
        venue: "Vivekananda Institute of Technology (VKIT)",
        images: ["/events/vkit/vkit_1.jpeg", "/events/vkit/vkit_2.jpeg", "/events/vkit/vkit_3.jpeg"],
      },
      {
        venue: "SCJIT Campus",
        images: ["/events/scjit/scjit_1.jpeg", "/events/scjit/scjit_2.jpeg", "/events/scjit/scjit_3.jpeg", "/events/scjit/scjit_4.jpeg"],
      },
      {
        venue: "BMSIT&M Campus",
        images: ["/events/bmsit/bmsit_1.jpeg", "/events/bmsit/bmsit_2.jpeg"],
      },
    ],
    photosUrl: "https://drive.google.com/drive/folders/1CoQVyV7Sa2AYsYbT_DRMpaDwqQDjCcnu",
  },
  {
    id: "cred-isro-bah-2026",
    title: "Predictive Ground Station NOC Copilot (PS13)",
    issuer: "ISRO Build-A-Hackathon 2026",
    date: "2026",
    categoryLabel: "National Space Hackathon",
    summary:
      "National finalist solution proposing Prophet time-series trend decomposition, XGBoost fault forecasting, and offline ChromaDB RAG knowledge base for ISRO ground station telemetry.",
    skillsVerified: ["Time-Series Forecasting", "Offline RAG", "System Reliability", "XGBoost"],
    placeholderText: "🚀 ISRO BAH 2026 PS13 SUBMISSION RECORD",
  },
  {
    id: "cred-sih-2024",
    title: "Krishi360 — 3rd Place College Ideathon Podium",
    issuer: "Internal Institutional Ideathon (BMSIT&M)",
    date: "2024",
    categoryLabel: "Hackathon Podium",
    summary:
      "Secured 3rd place podium in SIH-aligned problem statement for the Krishi360 agricultural advisory system with multi-factor Crop Suitability Index mathematical modeling.",
    skillsVerified: ["Mathematical Modeling", "Team Leadership", "Pitch & Architecture"],
    placeholderText: "🏆 3RD PLACE IDEATHON PODIUM CERTIFICATE",
  },
];
