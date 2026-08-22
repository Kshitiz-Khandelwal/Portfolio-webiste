export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  category: "hackathon" | "internship" | "workshop" | "academic";
  categoryLabel: string;
  date: string;
  credentialId?: string;
  summary: string;
  skillsVerified: string[];
  placeholderText: string;
  hasPhoto: boolean;
}

export const credentialsData: CredentialItem[] = [
  {
    id: "sih-2024-ideathon-3rd",
    title: "College Ideathon (SIH-Aligned Problem Statements) — 3rd Place",
    issuer: "Internal Institutional Ideathon",
    category: "hackathon",
    categoryLabel: "College Hackathon",
    date: "2024",
    summary:
      "Awarded 3rd place for conceptualizing, engineering, and presenting the Krishi360 Precision Agriculture & Crop Suitability Platform, built on an official Smart India Hackathon problem statement, to the internal judging panel.",
    skillsVerified: ["Team Leadership", "Machine Learning Architecture", "REST API Backend", "Presentation & Defense"],
    placeholderText: "[📜 PASTE COLLEGE IDEATHON 3RD PLACE CERTIFICATE PHOTO HERE]",
    hasPhoto: false,
  },
  {
    id: "isro-bah-2026",
    title: "ISRO Build-A-Hackathon 2026 — Finalist Submission (PS13)",
    issuer: "Indian Space Research Organisation (ISRO)",
    category: "hackathon",
    categoryLabel: "National Space Hackathon",
    date: "2026",
    summary:
      "Recognized for designing the complete Predictive NOC Copilot architecture for Problem Statement 13 (Predictive Ground Station MPLS Fault Anomaly Detection).",
    skillsVerified: ["Time-Series Forecasting", "XGBoost Telemetry", "ChromaDB Offline RAG", "System Architecture"],
    placeholderText: "[📜 PASTE ISRO BAH 2026 SUBMISSION CERTIFICATE / RECORD HERE]",
    hasPhoto: false,
  },
  {
    id: "iot-outreach-instructor",
    title: "IoT & Edge AI Outreach Workshop — Co-Organizer & Instructor",
    issuer: "Vivekananda Institute of Technology & BMSIT&M",
    category: "workshop",
    categoryLabel: "Technical Instruction",
    date: "May 18, 2026",
    summary:
      "Official recognition for organizing and instructing a full-day hands-on hardware engineering workshop for 100+ rural college students on microcontrollers and IoT telemetry.",
    skillsVerified: ["Embedded C/C++", "Hardware Debugging", "Technical Pedagogy", "Event Logistics"],
    placeholderText: "[📜 PASTE WORKSHOP ORGANIZER & INSTRUCTOR CERTIFICATE HERE]",
    hasPhoto: false,
  },
  {
    id: "software-internship-cred",
    title: "Systems & Backend Software Engineering Internship Certificate",
    issuer: "Industry Partner / Engineering Lab",
    category: "internship",
    categoryLabel: "Industry Internship",
    date: "2024 — 2025",
    summary:
      "Hands-on engineering across backend API routing, database schema modeling, and asynchronous task pipelines.",
    skillsVerified: ["Backend Systems", "FastAPI / Python", "Database Modeling", "Git Workflows"],
    placeholderText: "[📜 PASTE INTERNSHIP COMPLETION CERTIFICATE HERE]",
    hasPhoto: false,
  },
  {
    id: "academic-excellence-bmsit",
    title: "B.E. Computer Science & Business Systems Academic Scholar (CGPA 9.43)",
    issuer: "BMS Institute of Technology & Management",
    category: "academic",
    categoryLabel: "Academic Record",
    date: "2024 — 2028",
    summary:
      "Consistent academic top-tier standing across Data Structures & Algorithms, Operating Systems, Database Internals, and Computer Networks.",
    skillsVerified: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks"],
    placeholderText: "[📜 PASTE ACADEMIC TRANSCRIPT / MERIT CERTIFICATE HERE]",
    hasPhoto: false,
  },
];
