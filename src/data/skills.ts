export interface EvidenceSkillCategory {
  categoryName: string;
  categoryDesc: string;
  skills: {
    name: string;
    levelDescriptor: string; // e.g. "Core Stack" | "Advanced" | "Production"
    usedIn: string[]; // Exact projects where this was used
    context: string;
  }[];
}

export const evidenceSkillsData: EvidenceSkillCategory[] = [
  {
    categoryName: "Programming Languages",
    categoryDesc: "Core languages used for systems programming, data pipelines, and full-stack web products.",
    skills: [
      {
        name: "Python",
        levelDescriptor: "Primary Research & Systems Language",
        usedIn: ["DNS Shield", "SplitFed Healthcare AI", "ECG Classification", "TON-IoT Forensics", "Ayurveda Platform", "CREWS"],
        context: "Data science pipelines, PyTorch neural architectures, FastAPI microservices, CWT signal processing, TreeSHAP explainability.",
      },
      {
        name: "TypeScript & JavaScript",
        levelDescriptor: "Production Full-Stack",
        usedIn: ["Next.js Clinical Dashboards", "VeriFake Web Product", "Campus Event Finder", "DNS Shield Console"],
        context: "Type-safe interfaces, state machines, real-time client hydration, custom interactive hooks, and Tailwind CSS design systems.",
      },
      {
        name: "C & C++",
        levelDescriptor: "Embedded & Systems Core",
        usedIn: ["Zephyr RTOS RP2350 Kit", "Data Structures & Algorithms", "Embedded Firmware"],
        context: "Low-level memory management, microcontroller GPIO interrupts, PWM timers, and RTOS thread scheduling.",
      },
      {
        name: "Rust",
        levelDescriptor: "Systems & Memory Safety",
        usedIn: ["Atlas Identity OS", "Native Desktop Runtimes"],
        context: "Tauri v2 IPC bindings, zero-leak memory zeroization (secrecy crate), Argon2id key derivation, and sqlite-vec vector search.",
      },
      {
        name: "SQL",
        levelDescriptor: "Relational Modeling & Security",
        usedIn: ["SQLCipher Enclaves", "PostgreSQL", "Database Internals"],
        context: "Relational schema architecture, indexed query optimization, and AES-256 encrypted database vaults.",
      },
    ],
  },
  {
    categoryName: "AI, Machine Learning & Signal Processing",
    categoryDesc: "Deep learning models, distributed optimization, signal transforms, and model interpretability.",
    skills: [
      {
        name: "PyTorch",
        levelDescriptor: "Deep Learning Framework",
        usedIn: ["SplitFed Healthcare AI", "ECG EfficientNet-B4", "VeriFake CNN-LSTM"],
        context: "Custom loss functions (NoPeek distance loss), distributed tensor synchronization, multi-modal fusion, and model training.",
      },
      {
        name: "Gradient Boosting (LightGBM & XGBoost)",
        levelDescriptor: "High-Velocity Tabular Classifiers",
        usedIn: ["DNS Shield DGA Filter", "TON-IoT IDS", "ECG Multi-Label Ensemble"],
        context: "Sub-millisecond wire-speed classification, hyper-parameter tuning, and multi-class cyber attack identification.",
      },
      {
        name: "Explainable AI (TreeSHAP & Grad-CAM)",
        levelDescriptor: "Model Transparency & Auditing",
        usedIn: ["DNS Threat Lab", "TON-IoT Network Forensics", "ECG Scalogram Heatmaps"],
        context: "Local feature attribution, global importance beeswarm plots, and visual attention overlays for domain experts.",
      },
      {
        name: "Continuous Wavelet Transform (CWT)",
        levelDescriptor: "Biomedical Signal Processing",
        usedIn: ["ECG Arrhythmia Diagnostic System"],
        context: "Multi-scale Morlet wavelet decomposition of 12-lead electrical pulses into 2D time-frequency scalograms.",
      },
      {
        name: "Federated & Split Learning (SFL)",
        levelDescriptor: "Privacy-Preserving Distributed ML",
        usedIn: ["Multi-Hospital Collaborative AI"],
        context: "Cut-layer smashed representation sharing, FedProx proximal regularization on non-IID data, and differential privacy noise.",
      },
      {
        name: "Computer Vision & Audio Forensics",
        levelDescriptor: "Multi-Modal Analysis",
        usedIn: ["VeriFake / Verdict AI"],
        context: "MTCNN facial tracking, spatial artifact extraction, temporal Bi-LSTM frame sequencing, and Mel-spectrogram analysis.",
      },
    ],
  },
  {
    categoryName: "Web Architectures & Frameworks",
    categoryDesc: "High-taste modern web applications, responsive layouts, micro-motion, and scalable backends.",
    skills: [
      {
        name: "Next.js 15 (App Router) & React 19",
        levelDescriptor: "Production Frontend Framework",
        usedIn: ["DNS Shield Dashboard", "Healthcare ECG Portal", "VeriFake Web App", "Developer Portfolio"],
        context: "Server components, streaming layouts, zero layout shift (CLS), fluid animations, and high accessibility standards.",
      },
      {
        name: "Tailwind CSS & shadcn/ui",
        levelDescriptor: "Design Systems & Component Architecture",
        usedIn: ["All Web Projects", "Ney Heritage Theme System"],
        context: "Calibrated color tokens, strict 4px spacing grids, responsive typography scales, and polished component states.",
      },
      {
        name: "FastAPI & Flask",
        levelDescriptor: "High-Throughput REST Backends",
        usedIn: ["DNS Shield API", "Ayurveda Platform Engine", "Clinical ML Server"],
        context: "Asynchronous endpoint routing, Pydantic validation schemas, CORS handling, and sub-millisecond ML model serving.",
      },
      {
        name: "Framer Motion & CSS Springs",
        levelDescriptor: "Interaction & Physics Animation",
        usedIn: ["Interactive Sandboxes", "Horizontal Project Rails", "Case-Study Modals"],
        context: "Emil Kowalski spring curves, gesture feedback, staggered entrance choreography, and exit transitions.",
      },
    ],
  },
  {
    categoryName: "Security, Systems & Embedded Hardware",
    categoryDesc: "Cybersecurity defense, real-time operating systems, cryptography, and edge microcontrollers.",
    skills: [
      {
        name: "DNS Protocol & Shannon Entropy",
        levelDescriptor: "Cyber Defense & Lexical Analysis",
        usedIn: ["DNS Shield Platform"],
        context: "Packet wire format inspection, DGA algorithmic detection, Bloom filters, and automated threat mitigations.",
      },
      {
        name: "Zephyr RTOS & RP2350 Microcontrollers",
        levelDescriptor: "Real-Time Embedded Systems",
        usedIn: ["Zephyr Edge AI Lab", "IoT Outreach Workshop"],
        context: "West build system, multi-threaded scheduling, GPIO interrupt handlers, PWM motor drivers, and edge sensor pipelines.",
      },
      {
        name: "Cryptography & Vault Security",
        levelDescriptor: "Zero-Knowledge Enclaves",
        usedIn: ["Atlas Identity OS"],
        context: "AES-256-GCM encryption, Argon2id memory-hard key derivation, BIP39 seed recovery, and in-memory key zeroing.",
      },
      {
        name: "Docker, Git & Linux",
        levelDescriptor: "DevOps & Environment Tooling",
        usedIn: ["All Research & Engineering Projects"],
        context: "Containerized reproducible pipelines, multi-branch version control, bash scripting, and Vercel deployments.",
      },
    ],
  },
];
