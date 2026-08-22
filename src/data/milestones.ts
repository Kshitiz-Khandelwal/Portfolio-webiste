export interface Milestone {
  period: string;
  title: string;
  organization: string;
  role: string;
  location?: string;
  badge: string;
  description: string;
  highlights: string[];
  type: "hackathon" | "leadership" | "education";
}

export const milestonesData: Milestone[] = [
  {
    period: "2024 — 2028 (Present)",
    title: "B.E. Computer Science & Business Systems",
    organization: "BMS Institute of Technology & Management",
    role: "Undergraduate Scholar",
    location: "Bangalore, India",
    badge: "CGPA: 9.43",
    description:
      "Top-tier academic standing with deep focus on Data Structures & Algorithms, Systems Programming, Database Internals, Operating Systems, and Cyber-Physical Systems.",
    highlights: [
      "Consistent 9.43 CGPA across all semesters.",
      "Delivered multiple end-to-end software architectures combining low-level systems, ML, and web interfaces.",
      "Active team lead in national hackathons and developer initiatives.",
    ],
    type: "education",
  },
  {
    period: "2026",
    title: "ISRO Build-A-Hackathon 2026 (PS13)",
    organization: "Indian Space Research Organisation (ISRO)",
    role: "System Architect & ML Lead",
    badge: "National Finalist Submission",
    description:
      "Designed and delivered the end-to-end Predictive NOC Copilot architecture for Problem Statement 13 (Predictive Ground Station MPLS Fault Anomaly Detection).",
    highlights: [
      "Implemented dual-engine predictive modeling with Prophet time-series trend decomposition and XGBoost fault classification.",
      "Engineered an offline ChromaDB RAG knowledge base for instant aerospace incident runbook retrieval.",
      "Visualized real-time multi-hop router link degradation and SHAP risk attribution.",
    ],
    type: "hackathon",
  },
  {
    period: "2024",
    title: "College-Level Ideathon (SIH Problem Statements) — 3rd Place",
    organization: "Internal Ideathon, aligned with Smart India Hackathon problem statements",
    role: "Team Leader — Krishi360 Platform",
    badge: "🥉 3rd Place, College Ideathon",
    description:
      "Led the team at a college-level Ideathon built around official Smart India Hackathon problem statements, architecting Krishi360's Crop Suitability Index mathematical model and presenting the prototype to the internal judging panel.",
    highlights: [
      "Secured 3rd place at the institution's internal ideathon round on an SIH-aligned problem statement.",
      "Coordinated task breakdown, ML model training, and API integration within tight hackathon sprints.",
      "Delivered a live interactive farmer advisory platform with soil and rainfall recommendation algorithms.",
    ],
    type: "hackathon",
  },
  {
    period: "May 18, 2026",
    title: "IoT & Edge AI Technical Outreach Workshop",
    organization: "Vivekananda Institute of Technology",
    role: "Co-Organizer & Instructor",
    location: "Bangalore, India",
    badge: "100+ Students Trained",
    description:
      "Co-planned and instructed a full-day hardware and edge AI workshop for students from rural engineering colleges, covering microcontroller programming, sensor networks, and IoT telemetry.",
    highlights: [
      "Delivered hands-on modules in ESP32, Raspberry Pi, C/C++ firmware, and real-time cloud data pipelines.",
      "Facilitated hardware debugging and live cyber-physical sensor integration.",
      "Received overwhelming positive feedback from participating students and faculty.",
    ],
    type: "leadership",
  },
  {
    period: "2024 — Present",
    title: "Collegiate Hackathon Team Leadership",
    organization: "BMSIT&M & National Competitions",
    role: "Lead Systems & Backend Architect",
    badge: "3 Major Hackathon Builds",
    description:
      "Led multidisciplinary engineering squads across Krishi360, Finova, and Campus Connect, orchestrating high-velocity code development, architecture reviews, and final presentations.",
    highlights: [
      "Maintained rapid build cadence under 24-36 hour hackathon constraints.",
      "Mentored junior peers in REST API design, Git workflows, and deployment pipelines.",
    ],
    type: "leadership",
  },
  {
    period: "Nov 2024 — Apr 2025",
    title: "IIC Council & Innovation Initiatives",
    organization: "Institution's Innovation Council (IIC), BMSIT&M",
    role: "Outreach & Marketing Lead",
    badge: "Campus Innovation",
    description:
      "Drove sponsorship acquisition, external outreach, and student engagement for college innovation summits and national ideathons.",
    highlights: [
      "Engaged tech businesses and sponsors for national-level campus hackathons.",
      "Coordinated publicity campaigns driving peak student registration across departments.",
    ],
    type: "leadership",
  },
];
