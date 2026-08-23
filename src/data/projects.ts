export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: "ai-systems" | "cybersecurity" | "full-stack" | "research";
  categoryLabel: string;
  badge: string;
  tagline: string;
  summary: string;
  problem: string;
  limitationsOfExisting: string[];
  solution: string;
  architectureAscii: string;
  datasetDetails: string;
  benchmarkCitation: string;
  interviewHighlight: string;
  featureEngineering: string[];
  modelComparison: {
    model: string;
    metric1: string;
    metric2: string;
    verdict: string;
  }[];
  explainability: string;
  keyResults: string[];
  challengesAndMitigations: {
    challenge: string;
    mitigation: string;
  }[];
  whatILearned: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
    note?: string;
    citation?: string;
  }[];
  liveUrl?: string;
  githubUrl: string;
}

export const featuredProjects: ProjectCaseStudy[] = [
  {
    id: "dns-shield",
    title: "DNS Shield AI Platform",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity & ML",
    badge: "Cybersecurity Flagship • SIH 2024 Scope",
    tagline: "Wire-Speed DNS Threat Defense, DGA Attribution & Real-Time TreeSHAP Auditing",
    summary:
      "A wire-speed DNS threat defense platform analyzing domain characteristics, lexical n-grams, and Shannon entropy to intercept malware C2 beaconing and DGA botnets before name resolution.",
    problem:
      "Malicious domains — phishing pages, DGA-generated command-and-control endpoints, botnet callbacks — often get one shot at a DNS lookup before they connect out. Blocklists lag by hours or days; by the time a domain is flagged, the damage is already done.",
    limitationsOfExisting: [
      "Static blocklists fail completely against algorithmic pseudo-random domains generated on the fly.",
      "Deep Packet Inspection (DPI) introduces severe latency overhead (30ms+) incompatible with wire-speed resolver throughput.",
      "Traditional black-box neural networks lack explainability required by SOC analysts to justify host quarantine actions.",
    ],
    solution:
      "Built a wire-speed DNS filtering pipeline that scores every outbound domain lookup in real time, using lexical n-gram features and Shannon entropy to catch algorithmically-generated domains (DGAs) that blocklists have never seen before — with zero reliance on static signature databases. Fast Python & FastAPI inference layer tuned to stay under strict sub-1.2ms latency budgets.",
    architectureAscii: `
[ Client Outbound DNS Lookup ]
              │
              ▼
[ Ingestion & Normalization ] ──► Extracts FQDN, TLD, Subdomain Levels
              │
              ▼
[ Feature Extraction Engine ] ──► Shannon Entropy, Vowel-Consonant Ratio, Bigram/Trigram Probabilities
              │
              ▼
[ LightGBM Ensemble Classifier ] ──► Malicious vs Legitimate Scoring (Threshold: 0.85)
              │
     ┌────────┴──────────────────────────┐
     ▼                                   ▼
[ ALLOW / PASS ]                [ BLOCK / SINKHOLE ]
Resolver Resolves IP            Sinkhole Redirection (0.0.0.0)
                                + Real-Time TreeSHAP Explanations Dispatched to SOC
`,
    datasetDetails:
      "Trained on a curated benchmark of 1,200,000 domains: 600,000 benign queries (Tranco & Cisco Umbrella Top 1M) and 600,000 confirmed malicious DGA domains across 50 malware families (BAM / Netlab 360 DGA Feed). Evaluated on a 20% holdout test set (240K domains).",
    benchmarkCitation: "Tranco Top 1M (Benign) + Netlab 360 DGArchive Feed (50 DGA Families, 1.2M Samples)",
    interviewHighlight:
      "The core engineering tradeoff between detection accuracy and resolution latency — most ML security tooling assumes you have milliseconds to spare, but DNS resolvers have a strict sub-2ms budget before client timeouts occur.",
    featureEngineering: [
      "Shannon Entropy: Quantifies randomness in character distribution (DGA domains exhibit entropy > 3.85).",
      "Vowel-to-Consonant Ratio & Consecutive Consonants count to identify machine-generated text.",
      "N-Gram Lexical Frequency: Normalized transition probabilities against English dictionary corpus.",
      "Structural Tokens: Length of domain name, digit-to-letter ratio, and uncommon TLD categorization.",
    ],
    modelComparison: [
      {
        model: "LightGBM (Proposed)",
        metric1: "99.4% (Holdout Set)",
        metric2: "0.85ms / query",
        verdict: "Optimal for production deployment: highest precision and sub-millisecond inference.",
      },
      {
        model: "Random Forest",
        metric1: "98.7% (Holdout Set)",
        metric2: "4.2ms / query",
        verdict: "High accuracy but 5x slower inference under heavy concurrent loads.",
      },
      {
        model: "1D-CNN + BiLSTM",
        metric1: "99.1% (Holdout Set)",
        metric2: "18.6ms / query",
        verdict: "High compute and memory overhead; impractical for real-time resolver gateway.",
      },
    ],
    explainability:
      "Integrated TreeSHAP (SHapley Additive exPlanations) to output exact per-prediction contribution weights. When a domain like 'x89kqlz91m.biz' is blocked, the SOC dashboard explicitly highlights that high Shannon entropy (+0.42 SHAP) and low dictionary n-gram frequency (+0.31 SHAP) were the driving factors.",
    keyResults: [
      "99.4% detection rate across 50+ DGA families on 240,000 holdout domain queries.",
      "Sub-1.2ms average end-to-end inference latency on standard server hardware.",
      "Zero false positive rate on Top 10,000 global Alexa/Tranco domains.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Dictionary-based DGA attacks (e.g. Suppobox) mimicking real English words.",
        mitigation: "Engineered semantic word-boundary tokenizers and bigram transition probability scoring.",
      },
      {
        challenge: "Real-time explanation latency bottleneck.",
        mitigation: "Pre-compiled TreeSHAP C++ runtime extensions to compute SHAP values in sub-2ms.",
      },
    ],
    whatILearned:
      "Designing for cybersecurity requires balancing model predictive power with strict latency budgets. A model is only viable in production if it executes within the DNS resolver's sub-millisecond timeout envelope.",
    tags: ["Python", "FastAPI", "DNS Protocol", "Shannon Entropy", "LightGBM", "SHAP", "Next.js"],
    metrics: [
      { label: "Inference Latency", value: "<1.2ms", note: "Sub-2ms budget", citation: "100k queries benchmark" },
      { label: "DGA Detection Rate", value: "99.4%", note: "50+ DGA families", citation: "240k holdout test set" },
      { label: "Throughput Capacity", value: "100K+ QPS", note: "Asynchronous pipeline", citation: "Uvicorn worker pool" },
      { label: "Zero Day Defense", value: "100% Signature-Free", note: "Pure lexical scoring", citation: "Tranco Top 1M holdout" },
    ],
    githubUrl: "https://github.com/Kshitiz-Khandelwal/DNS-Shield-AI-Platform",
  },
  {
    id: "federated-healthcare",
    title: "Privacy-Preserving Federated & Split Learning",
    category: "research",
    categoryLabel: "Distributed AI & Privacy",
    badge: "Research Flagship • Distributed Healthcare ML",
    tagline: "Decentralized Multi-Hospital Diagnostic Model Training with Cut-Layer Feature Smashes & NoPeek Loss",
    summary:
      "A distributed, privacy-preserving machine learning framework enabling medical institutions to collaboratively train diagnostic models on multi-modal medical records without sharing patient data.",
    problem:
      "Hospitals want to collaboratively train better diagnostic models, but patient data cannot legally or ethically leave institutional walls (HIPAA, GDPR) — and naive federated learning still leaks sensitive patient features through gradient inversion or intermediate activation reconstruction.",
    limitationsOfExisting: [
      "Centralized ML requires aggregating raw clinical scans, violating patient privacy laws.",
      "Standard Federated Averaging (FedAvg) transfers full model weights, enabling malicious reconstruction via gradient inversion.",
      "Edge hospital servers often lack massive GPU clusters required to train modern deep learning models locally.",
    ],
    solution:
      "Combined split learning (cutting the model at a 'smash layer' so raw data never leaves the hospital) with NoPeek distance loss — a regularization technique that penalizes smashed-layer activations for correlating too closely with raw input pixels, mathematically preventing reconstruction while preserving diagnostic accuracy.",
    architectureAscii: `
[ Hospital Node A (Client) ]        [ Hospital Node B (Client) ]
   - Local Radiographs (Private)       - Local Radiographs (Private)
   - Client Sub-Network (Conv1-3)      - Client Sub-Network (Conv1-3)
               │                                   │
   [ Smashed Activations ]             [ Smashed Activations ]
   (NoPeek Regularized)                (NoPeek Regularized)
               │                                   │
               └───────────────┬───────────────────┘
                               ▼
                [ Secure Central Server ]
                   - Server Sub-Network (Conv4-Dense)
                   - Aggregated Gradient Computation
                   - FedAvg Update on Cut-Layer Weights
`,
    datasetDetails:
      "Evaluated across partitioned multi-hospital distributions using the NIH Chest X-Ray 14 dataset (112,120 frontal-view X-ray images) and MIMIC-CXR database across 5 simulated clinical silos with non-IID class distributions. 5-fold cross-validation.",
    benchmarkCitation: "NIH Chest X-Ray 14 (112k scans) + MIMIC-CXR across 5 Non-IID Hospital Silos",
    interviewHighlight:
      "How non-IID client drift was handled — this is the exact constraint that breaks naive federated learning demos in the real world since hospitals have vastly different patient distributions. I compensate using FedProx proximal term regularization and NoPeek distance correlation loss.",
    featureEngineering: [
      "Cut-Layer Feature Obfuscation: Non-invertible mathematical perturbation applied to smashed activation tensors.",
      "Distance Correlation Loss (NoPeek): Minimizes statistical correlation between cut-layer activations and raw pixel inputs.",
      "Differential Privacy Gradient Clipping: Limits gradient norm per client update to bound privacy loss epsilon.",
    ],
    modelComparison: [
      {
        model: "SplitFed + NoPeek (Proposed)",
        metric1: "94.6% (5-Fold CV)",
        metric2: "Zero Raw Sharing",
        verdict: "Preserves clinical classification performance while providing mathematical defense against gradient inversion.",
      },
      {
        model: "Standard FedAvg",
        metric1: "95.1% (5-Fold CV)",
        metric2: "Vulnerable to Inversion",
        verdict: "High reconstruction risk under deep gradient leakage attacks.",
      },
      {
        model: "Isolated Local Training",
        metric1: "81.3% (5-Fold CV)",
        metric2: "Data Starvation",
        verdict: "Severely impaired accuracy due to small local dataset size and class imbalance.",
      },
    ],
    explainability:
      "Employed Integrated Gradients on server-side representations mapped back to cut-layer activations, allowing radiologists to verify that the distributed model focuses on pathological lung consolidations rather than imaging artifacts.",
    keyResults: [
      "94.6% pathology classification accuracy across 5 hospital clients, within 0.5% of centralized baseline.",
      "100% resistance against gradient inversion attacks (zero raw pixel reconstruction).",
      "68% reduction in client-side compute requirements compared to full-model local training.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Client drift caused by non-IID patient demographics across hospitals.",
        mitigation: "Integrated FedProx proximal term regularization to penalize local client parameter divergence.",
      },
      {
        challenge: "Communication bandwidth bottlenecks during activation transfers.",
        mitigation: "Quantized cut-layer activation tensors to 8-bit integers, reducing network payload by 75%.",
      },
    ],
    whatILearned:
      "Privacy in machine learning is not an all-or-nothing proposition. Split learning architectures provide a practical compromise between mathematical security guarantees and production engineering constraints.",
    tags: ["Python", "PyTorch", "Federated Learning", "Split Learning", "Differential Privacy", "FastAPI"],
    metrics: [
      { label: "Global Model Acc.", value: "94.6%", note: "5-fold cross-validation", citation: "NIH Chest X-Ray 14 non-IID" },
      { label: "Data Leakage", value: "Zero Raw Share", note: "HIPAA compliant architecture", citation: "NoPeek distance loss" },
      { label: "Bandwidth Savings", value: "75% Reduction", note: "8-bit tensor quantization", citation: "Payload benchmark" },
      { label: "Client Compute Load", value: "-68% Overhead", note: "Split cut-layer offload", citation: "GPU profiling" },
    ],
    githubUrl: "https://github.com/Kshitiz-Khandelwal/Federated-Healthcare-ML",
  },
  {
    id: "ecg-arrhythmia",
    title: "12-Lead ECG Arrhythmia Classification Platform",
    category: "ai-systems",
    categoryLabel: "Clinical ML & Vision",
    badge: "Clinical ML • Physical Signal Transform",
    tagline: "Continuous Wavelet Transform (CWT) Scalograms & Multi-Lead CNN Diagnostic Engine",
    summary:
      "A clinical-grade cardiac diagnostic system converting raw 12-lead ECG time-series signals into Continuous Wavelet Transform scalograms for deep multi-label arrhythmia classification.",
    problem:
      "Manual 12-lead ECG interpretation is slow and inconsistent across clinicians; automated systems that only output a single 'abnormal' flag aren't clinically useful — cardiologists need multi-label, explainable risk breakdowns.",
    limitationsOfExisting: [
      "1D Recurrent Neural Networks (RNN/LSTM) suffer vanishing gradients over long multi-lead cardiac recording windows.",
      "Fourier Transform (FFT) discards crucial time localization needed to identify intermittent ectopic beats.",
      "Manual ECG interpretation by cardiologists is prone to fatigue during prolonged 24-hour Holter monitoring.",
    ],
    solution:
      "Converted raw 12-lead ECG time-series into Continuous Wavelet Transform (CWT) scalograms — turning a 1D signal problem into a 2D image classification problem where spatial CNN architectures excel at picking up rhythm irregularities that are hard to catch in raw waveform space. Evaluated on PhysioNet/Computing in Cardiology 2020.",
    architectureAscii: `
[ 12-Lead Raw ECG Biosignal ] (500 Hz Sampling)
                 │
                 ▼
[ Bandpass Filter (0.5 - 45 Hz) & Notch Filter ] ──► Removes Baseline Wander & Powerline Noise
                 │
                 ▼
[ Continuous Wavelet Transform (CWT) Engine ] ──► Generates 2D Time-Frequency Scalogram Images
                 │
                 ▼
[ EfficientNet-B4 Feature Backbone ] ──► Spatial & Temporal Convolutional Feature Extraction
                 │
                 ▼
[ Multi-Label Classification Head ] ──► Normal, AFib, PAC, PVC, Bundle Branch Block
`,
    datasetDetails:
      "PhysioNet / Computing in Cardiology Challenge 2020 dataset (43,101 12-lead clinical ECG recordings sampled at 500 Hz across diverse patient demographics). Stratified 80/10/10 train/val/test split with patient-level stratification.",
    benchmarkCitation: "PhysioNet Challenge 2020 Dataset (43,101 12-Lead ECG Records, 500 Hz)",
    interviewHighlight:
      "Why CWT scalograms over raw 1D CNNs on the waveform — the signal-to-image conversion is the core architectural design decision. Complex Morlet wavelets preserve temporal localization while capturing frequency shifts that 1D filters miss.",
    featureEngineering: [
      "Continuous Wavelet Transform (CWT) using Complex Morlet Wavelet across 64 frequency scales.",
      "Pan-Tompkins QRS Complex Detection to extract R-peak intervals and Heart Rate Variability (HRV) metrics.",
      "Baseline Wander Removal using dual median filters (200ms and 600ms kernels).",
      "Lead Cross-Correlation: Computes inter-lead synchronization between precordial leads (V1-V6) and limb leads.",
    ],
    modelComparison: [
      {
        model: "CWT + EfficientNet-B4 (Proposed)",
        metric1: "97.1% (Weighted AUC)",
        metric2: "92.4% Acc",
        verdict: "Highest diagnostic sensitivity across subtle ectopic arrhythmias and complex conduction blocks.",
      },
      {
        model: "1D ResNet-34 (Raw Signal)",
        metric1: "91.8% (Weighted AUC)",
        metric2: "86.2% Acc",
        verdict: "Struggles to differentiate atrial fibrillation from sinus rhythm during noisy segments.",
      },
      {
        model: "BiLSTM + Attention",
        metric1: "88.4% (Weighted AUC)",
        metric2: "83.1% Acc",
        verdict: "Slow training convergence and excessive inference latency on 10-second multi-lead strips.",
      },
    ],
    explainability:
      "Integrated Grad-CAM (Gradient-weighted Class Activation Mapping) on final convolutional layers to generate heatmaps over scalograms, highlighting the exact P-wave, QRS-complex, or ST-segment triggering the diagnostic prediction.",
    keyResults: [
      "97.1% weighted Area Under ROC Curve (AUC) across all 5 arrhythmia classes.",
      "92.4% multi-label classification accuracy on unseen test cohort.",
      "Sub-45ms inference latency per 10-second 12-lead ECG recording.",
    ],
    challengesAndMitigations: [
      {
        challenge: "High memory footprint of generating 12 separate 2D scalograms per recording.",
        mitigation: "Stacked 12 leads into multi-channel tensor inputs and used depthwise separable convolutions.",
      },
      {
        challenge: "Severe class imbalance (Atrial Fibrillation vs rare Junctional Rhythms).",
        mitigation: "Trained using Focal Loss with gamma=2.0 and lead-specific data augmentation (random noise injection).",
      },
    ],
    whatILearned:
      "Transforming complex 1D physical telemetry into 2D time-frequency representations unlocks powerful computer vision backbones for medical signal processing that outperform native 1D sequence models.",
    tags: ["Python", "PyTorch", "CWT", "Signal Processing", "EfficientNet", "LightGBM", "PhysioNet"],
    metrics: [
      { label: "Weighted AUC", value: "97.1%", note: "5 arrhythmia classes", citation: "PhysioNet 2020 Challenge test" },
      { label: "Classification Acc.", value: "92.4%", note: "Unseen holdout test", citation: "4,310 test strips" },
      { label: "Signal Sampling", value: "500 Hz", note: "12 simultaneous leads", citation: "Clinical standard" },
      { label: "Inference Speed", value: "45ms", note: "Per 10s recording strip", citation: "PyTorch GPU runtime" },
    ],
    githubUrl: "https://github.com/Kshitiz-Khandelwal/ECG-Arrhythmia-Classification",
  },
  {
    id: "ton-iot-ids",
    title: "Two-Stage Network Intrusion Detection Engine",
    category: "cybersecurity",
    categoryLabel: "Network Defense & AI",
    badge: "Cyber-Physical Defense • TON_IoT Scope",
    tagline: "High-Throughput Binary Filter & Multi-Attack Classifier with TreeSHAP Feature Attribution",
    summary:
      "A dual-stage machine learning network intrusion detection system capable of wire-speed binary filtering followed by granular multi-class attack attribution with TreeSHAP explainability.",
    problem:
      "Industrial IoT networks face massive volumes of high-rate cyber attacks (DDoS, MITM, ransomware injections, port scans). Deploying monolithic deep neural networks directly in the high-speed packet path creates CPU exhaustion and intolerable packet latency.",
    limitationsOfExisting: [
      "Single-stage multi-class deep neural networks are computationally expensive for inspecting every packet.",
      "Signature-based firewalls (Snort, Suricata) fail against mutated zero-day cyber-attacks.",
      "High false positive rates in traditional heuristics cause alarm fatigue among SOC analysts.",
    ],
    solution:
      "Engineered a two-stage hierarchical detection architecture. Stage 1 executes an ultra-lightweight decision tree binary filter under 0.15ms to discard 90%+ benign traffic. Stage 2 routes suspicious flow records to a multi-class XGBoost classifier attributing specific attack categories (DDoS, Ransomware, Backdoor) with TreeSHAP feature attributions.",
    architectureAscii: `
[ Ingress Network Flow Records ]
              │
              ▼
[ Stage 1: Ultra-Fast Binary Filter ] (Latency: <0.15ms)
              │
     ┌────────┴──────────────────────────┐
     ▼                                   ▼
[ BENIGN TRAFFIC ]             [ SUSPICIOUS FLOWS ]
Forwarded Instantly                      │
(90%+ of total volume)                   ▼
                        [ Stage 2: Multi-Class Attack Classifier ]
                        Attribution: DDoS, MITM, Ransomware, Injection
                                         │
                                         ▼
                        [ SOC Alert + Real-Time TreeSHAP Attribution ]
`,
    datasetDetails:
      "TON_IoT telemetry dataset containing 461,043 network flow records collected from realistic cyber-physical Industry 4.0 testbeds (Modbus, MQTT, HTTP). Evaluated on a 20% holdout test partition.",
    benchmarkCitation: "TON_IoT Industry 4.0 Network Telemetry Dataset (461,043 flow records)",
    interviewHighlight:
      "The two-stage architectural pattern — separating the high-volume binary rejection filter (<0.15ms) from the computationally heavier multi-class attribution engine allows scaling to wire-speed traffic without dropping packets.",
    featureEngineering: [
      "Flow Duration and Inter-Arrival Time (IAT) statistics (mean, std, max).",
      "TCP Flag Distribution: SYN, ACK, FIN, RST counts per flow window.",
      "Payload byte distribution and byte-rate ratios between client and server endpoints.",
      "Protocol-specific features: Modbus function codes, MQTT topic lengths, and HTTP error ratios.",
    ],
    modelComparison: [
      {
        model: "Two-Stage Tree Ensemble (Proposed)",
        metric1: "99.8% Multi-Class F1",
        metric2: "0.22ms Average Latency",
        verdict: "Highest overall throughput and resilience against high-volume DDoS floods.",
      },
      {
        model: "Monolithic Multi-Class MLP",
        metric1: "97.4% Multi-Class F1",
        metric2: "3.80ms Average Latency",
        verdict: "Introduces significant queue buffering delays under peak network traffic.",
      },
      {
        model: "Support Vector Machine (SVM)",
        metric1: "93.1% Multi-Class F1",
        metric2: "12.4ms Average Latency",
        verdict: "Computationally intractable for wire-speed network packet inspection.",
      },
    ],
    explainability:
      "Real-time TreeSHAP feature attribution decomposes every security alert into constituent flow metrics (e.g. flagging that a DDoS alert was triggered by extreme SYN-flag ratio and high backward packet count).",
    keyResults: [
      "99.8% multi-class F1 score across 9 distinct attack categories on TON_IoT test partition.",
      "85% reduction in overall system compute load compared to monolithic deep learning models.",
      "Zero dropped packets during simulated 10Gbps line-rate burst testing.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Subtle Man-in-the-Middle (MITM) attacks mimicking legitimate traffic profiles.",
        mitigation: "Engineered rolling-window inter-packet arrival time variance features to detect packet injection delays.",
      },
      {
        challenge: "Feature drift across evolving industrial IoT network protocols.",
        mitigation: "Integrated automated statistical feature drift monitors alerting when input distributions shift > 15%.",
      },
    ],
    whatILearned:
      "In high-throughput systems, hierarchical pipeline design consistently outperforms monolithic deep architectures by matching computational complexity to threat probability.",
    tags: ["Python", "XGBoost", "TON_IoT", "TreeSHAP", "Network Defense", "FastAPI"],
    metrics: [
      { label: "Multi-Class F1", value: "99.8%", note: "TON_IoT benchmark", citation: "461k flow records" },
      { label: "Stage 1 Latency", value: "<0.15ms", note: "Binary filter gate", citation: "C++ extension runtime" },
      { label: "Compute Savings", value: "85% Less CPU", note: "Hierarchical routing", citation: "Load profiling" },
      { label: "Attack Types", value: "9 Categories", note: "DDoS, MITM, Injection", citation: "TON_IoT taxonomy" },
    ],
    githubUrl: "https://github.com/Kshitiz-Khandelwal/TON-IoT-Network-Intrusion-Detection",
  },
  {
    id: "campus-events-platform",
    title: "Campus Event Discovery & RSVP System",
    category: "full-stack",
    categoryLabel: "Full-Stack & Systems",
    badge: "Full-Stack Web App • Live Deployment",
    tagline: "Event Management Platform with JWT Authentication, Redis Caching & QR Check-Ins",
    summary:
      "A production-grade campus event management platform handling real-time ticket registration, concurrent RSVP rate limiting, and authenticated administrative workflows.",
    problem:
      "University hackathons and technical symposiums suffer high RSVP drop-off rates, ticket hoarding bots, and chaotic on-site QR verification queues without a unified digital platform.",
    limitationsOfExisting: [
      "Generic event tools (Eventbrite) charge high platform fees and lack university SSO integration.",
      "Google Forms registrations result in duplicate RSVPs, manual spreadsheet reconciliation, and no real-time check-in validation.",
      "Lack of concurrency controls leads to overselling popular workshops during registration surges.",
    ],
    solution:
      "Engineered a scalable full-stack web application using Next.js 14, Tailwind CSS, Node.js REST APIs, PostgreSQL with Prisma ORM, and Redis for atomic inventory decrements during ticket rushes. Features cryptographic QR code generation for sub-second on-site check-ins.",
    architectureAscii: `
[ Client Browser / Mobile Web ]
              │
              ▼
[ Next.js 14 App Router Edge Gateway ] ──► Server-Side Rendering (SSR) & Static Optimization
              │
              ▼
[ REST API Layer (Node.js / Express) ] ──► JWT Auth Middleware & Zod Schema Validation
              │
     ┌────────┴──────────────────────────┐
     ▼                                   ▼
[ Redis Cache & Rate Limiter ]    [ PostgreSQL Database (Prisma ORM) ]
Atomic Ticket Decrement Tokens    Persistent Event Schemas, Users & RSVPs
`,
    datasetDetails:
      "Tested with simulated stress test of 5,000 concurrent user registrations hitting ticket reservation endpoints via k6 load testing.",
    benchmarkCitation: "k6 Concurrency Load Test (5,000 concurrent simulated registrations)",
    interviewHighlight:
      "Using Redis atomic decrement operations (DECRBY) with Lua scripting to eliminate race conditions during high-demand event registration spikes without locking the primary PostgreSQL database.",
    featureEngineering: [
      "Redis Atomic Inventory Lock: Prevents ticket overselling during registration rushes.",
      "Cryptographic HMAC-SHA256 Signed QR Codes for fraud-proof physical attendance scanning.",
      "JWT Session Tokens stored in HttpOnly, SameSite strict cookies for secure credential handling.",
      "Optimistic UI Updates with SWR for instantaneous visual feedback on RSVP buttons.",
    ],
    modelComparison: [
      {
        model: "Redis In-Memory Concurrency (Implemented)",
        metric1: "1,200 Req/Sec",
        metric2: "Zero Overselling",
        verdict: "Flawless race condition prevention under heavy simulated traffic bursts.",
      },
      {
        model: "PostgreSQL Row Locking (Baseline)",
        metric1: "180 Req/Sec",
        metric2: "Lock Contention",
        verdict: "Severe database connection pool exhaustion and high 500 error rates under load.",
      },
    ],
    explainability:
      "Built-in audit trail logging all ticket claim events with IP address, user ID, timestamp, and token generation metadata for organizer security inspection.",
    keyResults: [
      "Handled 5,000 concurrent user registration requests with zero ticket overselling.",
      "Sub-25ms average API response time for authenticated event queries.",
      "Live deployment accessible on Vercel with responsive mobile-first UI.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Database connection exhaustion during high-concurrency ticket drops.",
        mitigation: "Implemented connection pooling with Prisma Accelerate and Redis token bucket rate limiting.",
      },
      {
        challenge: "Offline venue network connectivity for QR ticket scanners.",
        mitigation: "Built Service Worker PWA caching allowing scanners to validate cryptographically signed QR codes offline.",
      },
    ],
    whatILearned:
      "Handling concurrency in web applications requires moving high-velocity state mutations out of relational databases and into fast, atomic in-memory layers.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Redis", "JWT"],
    metrics: [
      { label: "Concurrent Scale", value: "5,000 Users", note: "k6 stress tested", citation: "Load benchmark" },
      { label: "API Latency", value: "<25ms", note: "Cached endpoints", citation: "Redis hit rate 94%" },
      { label: "Overselling Errors", value: "Zero Race Cond.", note: "Atomic Lua locks", citation: "Concurrency test" },
      { label: "QR Check-In", value: "<0.5s Scan", note: "HMAC signed codes", citation: "Offline PWA" },
    ],
    liveUrl: "https://campus-events-platform.vercel.app",
    githubUrl: "https://github.com/Kshitiz-Khandelwal/Campus-Event-RSVP-Platform",
  },
];
