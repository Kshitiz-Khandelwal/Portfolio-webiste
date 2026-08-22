export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  categoryLabel: string;
  summary: string;
  skillsVerified: string[];
  placeholderText: string;
}

export const credentialsData: CredentialItem[] = [
  {
    id: "cred-sih-2024",
    title: "College Ideathon — SIH-Aligned Problem Statement",
    issuer: "Internal Institutional Ideathon (BMSIT&M)",
    date: "2024",
    categoryLabel: "Hackathon Podium",
    summary:
      "Secured 3rd place in college-level ideathon round evaluating Krishi360 agricultural advisory system against official Smart India Hackathon problem statements.",
    skillsVerified: ["Mathematical Modeling", "Team Leadership", "Pitch & Architecture"],
    placeholderText: "[📜 PASTE IDEATHON 3RD PLACE CERTIFICATE HERE]",
  },
  {
    id: "cred-isro-bah-2026",
    title: "Predictive Ground Station NOC Copilot (PS13)",
    issuer: "ISRO Build-A-Hackathon 2026",
    date: "2026",
    categoryLabel: "Space Tech Submission",
    summary:
      "Finalist submission proposing Prophet time-series trend decomposition, XGBoost fault classification, and offline RAG knowledge base for ISRO ground station telemetry.",
    skillsVerified: ["Time-Series Forecasting", "Offline RAG", "System Reliability"],
    placeholderText: "[📜 PASTE ISRO BAH SUBMISSION RECORD HERE]",
  },
  {
    id: "cred-iot-outreach-2026",
    title: "IoT & Edge AI Workshop Instructor Certification",
    issuer: "Vivekananda Institute of Technology & BMSIT&M",
    date: "May 2026",
    categoryLabel: "Technical Outreach",
    summary:
      "Co-organized and instructed full-day hands-on hardware workshop training 100+ rural engineering students in ESP32, sensor networks, and edge ML pipelines.",
    skillsVerified: ["Microcontroller Firmware", "Technical Teaching", "Sensor Integration"],
    placeholderText: "[📜 PASTE WORKSHOP INSTRUCTOR CERTIFICATE HERE]",
  },
  {
    id: "cred-backend-internship",
    title: "Systems & Backend Software Engineering Internship",
    issuer: "Confidential Engineering Client (Details Available on Request)",
    date: "2025 – 2026",
    categoryLabel: "Industry Experience",
    summary:
      "Engineered high-throughput REST APIs, asynchronous worker pipelines, and database optimization for cloud telemetry processing under strict NDA.",
    skillsVerified: ["FastAPI", "Database Indexing", "System Architecture"],
    placeholderText: "[📜 PASTE INTERNSHIP VERIFICATION / NDA LETTER HERE]",
  },
];
