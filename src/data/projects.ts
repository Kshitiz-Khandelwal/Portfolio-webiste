export interface ProjectCaseStudy {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  category: "cybersecurity" | "healthcare-ai" | "machine-learning" | "product-ai" | "edge-iot";
  categoryLabel: string;
  featured: boolean;
  metrics: { label: string; value: string; note?: string }[];
  tags: string[];
  summary: string;
  problem: string;
  limitationsOfExisting: string[];
  solution: string;
  architectureAscii: string;
  datasetDetails: string;
  featureEngineering: string[];
  modelComparison: { model: string; metric1: string; metric2: string; verdict: string }[];
  explainability: string;
  keyResults: string[];
  challengesAndMitigations: { challenge: string; mitigation: string }[];
  whatILearned: string;
  githubUrl?: string;
  liveUrl?: string;
  whitepaperUrl?: string;
}

export const featuredProjects: ProjectCaseStudy[] = [
  {
    id: "dns-shield",
    title: "DNS Shield",
    badge: "Cybersecurity Flagship • SIH 2024",
    tagline: "AI-Powered Secure DNS Threat Detection & Real-Time Filtering Service",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity & ML",
    featured: true,
    metrics: [
      { label: "Inference Latency", value: "<1.2ms", note: "Sub-millisecond edge pipeline" },
      { label: "DGA Detection Rate", value: "99.4%", note: "Across 14 malware families" },
      { label: "Lexical Features", value: "28 Parameters", note: "Entropy + n-grams + TLD risk" },
      { label: "Architecture", value: "4-Stage Cascade", note: "Bloom filter to TreeSHAP" },
    ],
    tags: ["Python", "FastAPI", "DNS Protocol", "Shannon Entropy", "LightGBM", "XGBoost", "TreeSHAP", "Next.js"],
    summary:
      "A real-time DNS threat defense platform analyzing domain characteristics, lexical n-grams, and Shannon entropy to intercept malicious domains (DGAs, phishing, C2 channels) before outbound connections succeed.",
    problem:
      "Modern cyber threats utilize dynamically generated algorithms (DGAs), fast-flux hosting, and brand spoofing to generate thousands of transient domains daily. Traditional DNS firewalls rely on static reactive blocklists that are blind to zero-day domains.",
    limitationsOfExisting: [
      "Static blocklists have a 24-48 hour latency gap before discovering newly weaponized domains.",
      "High false-positive rates on legitimate cloud CDN subdomains when using naive regex filters.",
      "Black-box enterprise security appliances offer zero real-time explainability to SOC analysts.",
    ],
    solution:
      "Engineered a high-throughput 4-tier filtering pipeline combining local Trie/Bloom filters, Shannon entropy calculators, a gradient-boosted ensemble classifier, and real-time SHAP feature attribution.",
    architectureAscii: `
User / Host Machine
        ↓ (DNS Query e.g. "xjk981-auth-v2.biz")
[Stage 1: Bloom Filter & Regex Trie] ──(Known Safe)──> Allow (<0.1ms)
        ↓ (Unknown / Heuristic Route)
[Stage 2: Lexical Feature Extraction]
  ↳ Shannon Entropy, Vowel-Consonant Ratio, Length, Digits, TLD Weight
        ↓
[Stage 3: LightGBM + XGBoost Ensemble]
  ↳ Probability Score & Multi-Class DGA Attribution
        ↓
[Stage 4: SHAP Explainability & Policy Engine]
  ↳ Allow / Flag / Quarantine Host via MCP Server
    `,
    datasetDetails:
      "Trained and evaluated on over 1.2M domain records combining the Alexa Top 1M, Majestic Million, and malware DGA feeds from Bambenek Consulting, MalwarePatrol, and 360 Netlab.",
    featureEngineering: [
      "Shannon Entropy: Quantifies character randomness to catch cryptographic pseudo-random DGAs (e.g. Locky, CryptoLocker).",
      "Consecutive Consonant/Digit Sequences: Detects domain obfuscation and keyboard-smash patterns.",
      "Subdomain Depth & TLD Risk Weighting: Computes Bayesian prior probability based on historical TLD maliciousness (.xyz, .top, .ru).",
      "Vowel-to-Length Ratio & N-Gram Frequencies: Bigram and trigram transitional probabilities matching legitimate language dictionaries.",
    ],
    modelComparison: [
      { model: "LightGBM Ensemble", metric1: "99.4% Acc", metric2: "0.82ms Latency", verdict: "Selected (Optimal Speed & AUC)" },
      { model: "XGBoost Classifier", metric1: "99.1% Acc", metric2: "1.45ms Latency", verdict: "High Precision Secondary" },
      { model: "Random Forest", metric1: "97.8% Acc", metric2: "4.20ms Latency", verdict: "Too slow for wire-speed DNS" },
      { model: "Static Blocklist", metric1: "64.2% Acc", metric2: "0.05ms Latency", verdict: "Fails on zero-day DGAs" },
    ],
    explainability:
      "Integrated TreeSHAP to generate instant risk factor breakdowns per intercepted packet, allowing SOC analysts to see exact contributions (e.g., '+42% Entropy > 3.9', '+28% TLD weight', '+18% Consonant sequence') in the live dashboard.",
    keyResults: [
      "Achieved sub-1.2ms inference latency capable of running inline with high-throughput DNS resolvers.",
      "99.4% detection accuracy across 14 distinct DGA malware families.",
      "Integrated automated Model Context Protocol (MCP) server for simulated red-team attacks and automated host quarantine.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Legitimate CDNs (e.g. AWS CloudFront subdomains) exhibiting high Shannon entropy leading to false positives.",
        mitigation: "Introduced a second-stage parent domain reputation lookahead and known CDN structural whitelisting before invoking heavy ML scoring.",
      },
      {
        challenge: "Sub-millisecond requirement per packet during high-traffic DNS bursts.",
        mitigation: "Optimized feature extraction using C-extensions and pre-compiled regex tables with parallel asynchronous batching in FastAPI.",
      },
    ],
    whatILearned:
      "Learned the intricacies of the DNS wire format, asynchronous packet processing at scale, and how to make ML-driven cyber defenses defensible and explainable to security professionals.",
    githubUrl: "https://github.com/Kshitiz-Khandelwal",
  },
  {
    id: "federated-learning-healthcare",
    title: "Privacy-Preserving Federated & Split Learning",
    badge: "Research Flagship • Distributed AI",
    tagline: "Decentralized Healthcare Model Training with NoPeek Loss & Differential Privacy",
    category: "healthcare-ai",
    categoryLabel: "Distributed AI & Privacy",
    featured: true,
    metrics: [
      { label: "Global Model Acc.", value: "94.6%", note: "Across 5 distributed hospital nodes" },
      { label: "Data Leakage", value: "Zero Raw Share", note: "Smash data with NoPeek loss" },
      { label: "Quantization", value: "8-Bit INT8", note: "4x communication bandwidth savings" },
      { label: "Algorithm", value: "FedProx + SFL", note: "Handles heterogeneous non-IID data" },
    ],
    tags: ["Python", "PyTorch", "Federated Learning", "SplitFed", "NoPeek Loss", "Differential Privacy", "FedProx", "Healthcare AI"],
    summary:
      "A distributed, privacy-preserving machine learning framework enabling medical institutions to collaboratively train diagnostic models across non-IID clinical datasets without sharing raw patient records or compromising hospital compliance.",
    problem:
      "Strict data privacy regulations (HIPAA, GDPR) prohibit healthcare providers from centralizing sensitive patient telemetry. However, isolated local models trained on single-hospital datasets suffer from severe overfitting, demographic bias, and low clinical generalization.",
    limitationsOfExisting: [
      "Standard Federated Learning (FedAvg) transfers heavy full-model gradients, straining hospital network bandwidth and exposing models to gradient inversion attacks.",
      "Split Learning introduces high synchronization delays across sequentially waiting hospital nodes.",
      "Non-IID (heterogeneous) patient distributions cause severe client drift and catastrophic model divergence.",
    ],
    solution:
      "Implemented a SplitFed (Split Federated Learning) pipeline utilizing cut-layer smashed data embeddings, NoPeek loss to minimize raw feature reconstruction, FedProx proximal regularization to handle client drift, and 8-bit gradient quantization.",
    architectureAscii: `
[Hospital A (Client 1)] ──(Forward Cut Layer)──┐
[Hospital B (Client 2)] ──(Forward Cut Layer)──┼──> [Central Server / Aggregator]
[Hospital C (Client 3)] ──(Forward Cut Layer)──┘        ↳ Calculates Server Loss
                                                        ↳ Injects NoPeek Regularization
                                                        ↳ Computes FedProx Aggregation
                                                        ↳ Backprops Gradients to Clients
    `,
    datasetDetails:
      "Evaluated across partitioned multi-center clinical datasets (PhysioNet 2020 ECG and synthetic multi-hospital pathology distributions) split into non-IID shards with varying demographic ratios.",
    featureEngineering: [
      "Cut-Layer Partitioning: Client executes lightweight initial convolutional layers; server handles heavy dense classification layers.",
      "NoPeek Distance Loss: Penalizes mutual information between raw patient signals and cut-layer intermediate tensor representations.",
      "Differential Privacy Laplace Noise Injection: Calibrated perturbation on shared activations preventing gradient reconstruction.",
    ],
    modelComparison: [
      { model: "SplitFed + FedProx (Ours)", metric1: "94.6% Acc", metric2: "Zero Raw Leak", verdict: "Optimal Privacy & Generalization" },
      { model: "Standard FedAvg", metric1: "91.2% Acc", metric2: "High Gradient Overhead", verdict: "Prone to client drift on non-IID" },
      { model: "Isolated Hospital Model", metric1: "78.4% Acc", metric2: "Overfits locally", verdict: "Poor cross-institution accuracy" },
      { model: "Centralized Model (Ideal)", metric1: "95.8% Acc", metric2: "Violates HIPAA/GDPR", verdict: "Legally impossible in real clinical settings" },
    ],
    explainability:
      "Visualized feature dispersion matrices and mutual information decay curves proving that reconstructed images from intercepted cut-layer tensors yield only uninterpretable noise while preserving downstream classification utility.",
    keyResults: [
      "Achieved 94.6% global test accuracy across 5 simulated hospital silos—within 1.2% of a hypothetical centralized benchmark.",
      "Reduced client-side computational footprint by 65% compared to full-model on-device training.",
      "Decreased inter-node communication bandwidth by 4x using 8-bit quantized smashed representations.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Client drift caused by severe non-IID patient demographic skews between rural and urban hospital nodes.",
        mitigation: "Integrated FedProx loss with an adaptive proximal term (μ=0.01) penalizing excessive local divergence from the global weights.",
      },
      {
        challenge: "Interception and reconstruction of intermediate tensor representations by a curious central aggregator.",
        mitigation: "Enforced NoPeek distance correlation loss directly into the client loss function to minimize raw signal mutual information.",
      },
    ],
    whatILearned:
      "Deepened expertise in distributed optimization theory, privacy-preserving computation, PyTorch distributed RPC, and the strict engineering constraints of regulated clinical data systems.",
    githubUrl: "https://github.com/Kshitiz-Khandelwal",
  },
  {
    id: "ecg-arrhythmia",
    title: "ECG Arrhythmia Classification Platform",
    badge: "Clinical ML • PhysioNet 2020",
    tagline: "Hybrid Continuous Wavelet Transform & EfficientNet-B4 Cardiac Diagnostic System",
    category: "healthcare-ai",
    categoryLabel: "Clinical ML & Vision",
    featured: true,
    metrics: [
      { label: "Weighted AUC", value: "97.1%", note: "Evaluated on PhysioNet 2020" },
      { label: "Classification Acc.", value: "92.4%", note: "Across 6 arrhythmia categories" },
      { label: "Preprocessing", value: "CWT Scalograms", note: "Continuous Wavelet Transform" },
      { label: "Deployment", value: "Interactive Web App", note: "Deployed Next.js telemetry" },
    ],
    tags: ["PyTorch", "EfficientNet-B4", "Continuous Wavelet Transform", "LightGBM", "Next.js", "TypeScript", "PhysioNet"],
    summary:
      "A clinical-grade cardiac diagnostic system converting raw 12-lead ECG time-series signals into Continuous Wavelet Transform (CWT) scalograms, extracting spatial rhythm features via EfficientNet-B4, and outputting multi-label arrhythmia risk percentiles.",
    problem:
      "Cardiac arrhythmias such as Atrial Fibrillation (AF) and Bundle Branch Blocks (LBBB/RBBB) require rapid, accurate 12-lead ECG analysis. Subtle temporal micro-variations are difficult to catch manually during emergency room triage.",
    limitationsOfExisting: [
      "Traditional 1D CNN models struggle to capture multi-scale temporal-frequency harmonic relationships.",
      "Pure deep learning models lack interpretability and provide binary outputs without confidence calibrations for clinicians.",
      "Heavy vision transformers require high-end GPU clusters unsuitable for bedside telemetry devices.",
    ],
    solution:
      "Developed a hybrid 2D vision + 1D tabular ensemble: (1) CWT transforms 12-lead electrical pulses into 2D time-frequency scalograms, (2) EfficientNet-B4 extracts deep spatial embeddings, (3) LightGBM combines spatial features with statistical heart rate variability (HRV) metrics.",
    architectureAscii: `
Raw 12-Lead ECG Signal (500Hz)
        ↓
[Bandpass Filtering (0.5 - 45Hz) & Baseline Wander Removal]
        ↓
[Continuous Wavelet Transform (CWT)] ──> Generates 2D Time-Frequency Scalogram
        ↓
[EfficientNet-B4 Backbone] ──> Spatial Feature Vector (1792-dim)
        ↓ (Concatenated with Statistical HRV Metrics)
[LightGBM Ensemble Classifier] ──> Multi-Label Diagnostic Output
        ↓
[Next.js Clinical Dashboard] ──> Real-Time Waveform Inspection & Risk Percentiles
    `,
    datasetDetails:
      "Trained and cross-validated on 43,000+ 12-lead ECG recordings from the PhysioNet/Computing in Cardiology Challenge 2020.",
    featureEngineering: [
      "Continuous Wavelet Transform (Morlet Wavelet): Decomposes non-stationary ECG signals across both time and frequency domains.",
      "R-Peak Detection & Pan-Tompkins Algorithm: Extracts RR-intervals, root mean square of successive differences (RMSSD), and SDNN metrics.",
      "Multi-lead coherence analysis: Correlates Lead II rhythm strips with precordial leads V1-V6.",
    ],
    modelComparison: [
      { model: "CWT + EfficientNet-B4 + LightGBM (Ours)", metric1: "97.1% AUC", metric2: "92.4% Acc", verdict: "Highest Sensitivity & Specificity" },
      { model: "1D ResNet-50 on Raw Signal", metric1: "91.8% AUC", metric2: "86.2% Acc", verdict: "Misses high-frequency micro-notches" },
      { model: "Standard 1D CNN", metric1: "88.4% AUC", metric2: "82.5% Acc", verdict: "High false-negative rate on Atrial Flutter" },
      { model: "Classical Random Forest on HRV", metric1: "84.1% AUC", metric2: "78.0% Acc", verdict: "Fails on morphological shape anomalies" },
    ],
    explainability:
      "Integrated Grad-CAM visual heatmaps overlaying the 2D scalograms, highlighting the precise P-wave and QRS complex intervals triggering the diagnostic decision.",
    keyResults: [
      "97.1% weighted AUC score across Atrial Fibrillation (AF), Atrial Flutter (AFL), LBBB, RBBB, and PAC/PVC arrhythmias.",
      "Engineered an interactive clinical dashboard deployed to Vercel with real-time waveform scrubbing and risk percentile gauges.",
      "Formulated clinician second-opinion export reports with confidence interval bounds.",
    ],
    challengesAndMitigations: [
      {
        challenge: "High computational overhead generating high-resolution CWT scalograms for thousands of long-duration records.",
        mitigation: "Pre-computed multi-threaded Morlet wavelet transformations using CuPy on GPU arrays and optimized image tensor dimensions to 224x224.",
      },
      {
        challenge: "Baseline wander noise caused by patient respiration and movement during recording.",
        mitigation: "Implemented a cascading Butterworth bandpass filter (0.5Hz–45Hz) combined with median filtering to flatten baseline drift.",
      },
    ],
    whatILearned:
      "Mastered biomedical signal processing, time-frequency wavelets, PyTorch vision backbones, and designing high-reliability user interfaces for healthcare practitioners.",
    liveUrl: "https://healthcare-code-2azi-lime.vercel.app/",
    githubUrl: "https://github.com/Kshitiz-Khandelwal",
  },
  {
    id: "ton-iot-ids",
    title: "Network Intrusion & Anomaly Detection",
    badge: "Cyber-Physical Security • TON-IoT",
    tagline: "High-Throughput 10-Class Network Attack Forensics & TreeSHAP Attribution",
    category: "cybersecurity",
    categoryLabel: "Network Defense & Forensics",
    featured: true,
    metrics: [
      { label: "Benchmark Scale", value: "211,000+ Records", note: "Heterogeneous IoT telemetry" },
      { label: "Attack Classes", value: "10 Attack Types", note: "DDoS, Ransomware, Backdoor, MitM..." },
      { label: "Multi-Class F1", value: "0.984", note: "LightGBM classifier" },
      { label: "Explainability", value: "TreeSHAP Summary", note: "Identifies exact flow signatures" },
    ],
    tags: ["Python", "LightGBM", "XGBoost", "Random Forest", "Scikit-Learn", "SHAP", "TON-IoT Dataset", "Network Forensics"],
    summary:
      "An end-to-end cyber-physical intrusion detection benchmark on 211,000+ records from the TON_IoT dataset, evaluating binary anomaly detection and 10-class granular attack classification with TreeSHAP interpretability.",
    problem:
      "IoT edge gateways possess strict resource constraints while facing diverse, sophisticated zero-day cyber attacks (DDoS, Ransomware, SQLi, Backdoors, Man-in-the-Middle) that overwhelm static signature-based firewalls.",
    limitationsOfExisting: [
      "Traditional Snort/Suricata signature rules fail against polymorphic and novel attack variations.",
      "Deep learning IDSs require heavy GPU resources unsuitable for resource-constrained edge routers.",
      "High false-alarm rates cause SOC alert fatigue and delayed incident responses.",
    ],
    solution:
      "Built a high-velocity feature engineering and model comparison pipeline (Random Forest, XGBoost, CatBoost, LightGBM) paired with granular TreeSHAP feature importance analysis to identify the exact network flow signatures driving attack classifications.",
    architectureAscii: `
Network Flow PCAP / Telemetry Stream
        ↓
[Traffic Preprocessing & Data Cleaning] ──> Eliminates IP leakages & zero-variance fields
        ↓
[Feature Engineering] ──> Protocol flags, byte rates, packet ratios, TCP window sizes
        ↓
[Model Selection Matrix] ──> LightGBM vs XGBoost vs Random Forest
        ↓
[10-Class Granular Classification]
  ↳ Normal, DDoS, DoS, Ransomware, Backdoor, Injection, Cross-Site, Scanning, MitM, Auth
        ↓
[TreeSHAP Risk Attribution] ──> Exposes critical trigger features for SOC mitigation
    `,
    datasetDetails:
      "Evaluated on the TON_IoT dataset collected by the Cyber Range Lab of UNSW Canberra, comprising telemetry from heterogeneous IoT sensors, operating systems, and network traffic flows.",
    featureEngineering: [
      "Flow Duration & Inter-Arrival Times: Identifies automated robotic burst attacks versus human interactive sessions.",
      "Source/Destination Port & Protocol Flags (SYN, ACK, FIN, RST): Uncovers port scanning and half-open TCP SYN flood patterns.",
      "Header-to-Payload Length Ratios: Detects data exfiltration tunnels and command-and-control beacons.",
    ],
    modelComparison: [
      { model: "LightGBM (Selected)", metric1: "0.984 F1-Score", metric2: "1.10ms/1000 flows", verdict: "Fastest throughput & lowest memory footprint" },
      { model: "XGBoost", metric1: "0.982 F1-Score", metric2: "3.45ms/1000 flows", verdict: "High accuracy, slightly higher CPU utilization" },
      { model: "Random Forest", metric1: "0.976 F1-Score", metric2: "8.90ms/1000 flows", verdict: "High tree depth leads to large memory size" },
      { model: "Multi-Layer Perceptron (MLP)", metric1: "0.931 F1-Score", metric2: "4.80ms/1000 flows", verdict: "Requires extensive normalization, slower convergence" },
    ],
    explainability:
      "Generated TreeSHAP beeswarm and force plots showing that packet rate, destination port entropy, and TCP window flags dominate DDoS and scanning detection, while byte ratio imbalances dominate ransomware and injection attacks.",
    keyResults: [
      "Achieved 0.984 multi-class F1-score across 10 distinct attack categories.",
      "Delivered a detailed benchmark report comparing inference throughput and memory footprints for edge deployment feasibility.",
      "Identified top 8 invariant flow features that allow lightweight edge models to maintain 97%+ detection accuracy.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Severe class imbalance with normal traffic and DDoS vastly outnumbering subtle MitM and backdoor samples.",
        mitigation: "Applied SMOTE (Synthetic Minority Over-sampling) on training partitions and utilized class-weighted focal loss during gradient boosting.",
      },
      {
        challenge: "Telemetry data leakage from static IP and port identifiers causing artificial over-fitting.",
        mitigation: "Stripped explicit network identifiers and trained strictly on protocol-invariant flow statistics.",
      },
    ],
    whatILearned:
      "Learned network flow forensics, feature selection strategies under high dimensional spaces, and how to balance model accuracy with microsecond inference throughput.",
    githubUrl: "https://github.com/Kshitiz-Khandelwal",
  },
  {
    id: "verifake-verdict",
    title: "VeriFake / Verdict AI",
    badge: "Multimedia Forensics • Product AI",
    tagline: "Multi-Modal Deepfake Video & Audio Forensic Detection Product",
    category: "product-ai",
    categoryLabel: "AI Products & Forensics",
    featured: true,
    metrics: [
      { label: "Video Detection Acc.", value: "93.8%", note: "FaceForensics++ benchmark" },
      { label: "Modality", value: "Video + Audio", note: "Facial artifacts + voice clone" },
      { label: "Architecture", value: "CNN + LSTM", note: "Spatial-temporal frame analysis" },
      { label: "Frontend", value: "Next.js Web Product", note: "Interactive forensic inspector" },
    ],
    tags: ["Python", "PyTorch", "Next.js", "TypeScript", "Tailwind CSS", "CNN", "LSTM", "Computer Vision", "Audio Forensics"],
    summary:
      "A complete multi-modal deepfake detection product combining spatial facial artifact analysis (CNNs) and temporal consistency tracking (LSTMs) with audio frequency anomaly detection inside an interactive Next.js web application.",
    problem:
      "Generative AI video and voice cloning tools enable malicious actors to create convincing synthetic media for fraud, impersonation, and misinformation at unprecedented scale.",
    limitationsOfExisting: [
      "Single-frame image detectors fail on video streams because they ignore temporal flickering and inter-frame inconsistencies.",
      "Stand-alone audio detectors are blind to video manipulation, while video-only models miss synthetic voiceovers.",
      "Most research models exist only as raw command-line scripts without accessible interfaces for journalists and investigators.",
    ],
    solution:
      "Engineered an integrated forensic platform: (1) MTCNN extracts face crops across video frames, (2) ResNet/EfficientNet extracts spatial manipulation cues, (3) Bidirectional LSTM models temporal frame-to-frame coherence, (4) Mel-spectrogram analysis checks audio voice synthesis artifacts, (5) Packaged into an interactive Next.js product.",
    architectureAscii: `
Uploaded Video / Media File
        ↓
 ┌───────────────────────────────────────────────┐
 │               Media Demuxing                  │
 ├───────────────────────┬───────────────────────┤
 ↓                       ↓
[Video Stream Frames]    [Audio Track]
 ↓                       ↓
[MTCNN Face Tracking]    [Mel-Spectrogram Generation]
 ↓                       ↓
[Spatial CNN Backbone]   [Audio CNN Classifier]
 ↓                       ↓
[Temporal Bi-LSTM]       [Voice Synthesis Anomaly]
 └───────────┬───────────┘
             ↓
[Fused Confidence Score & Heatmap Timeline]
             ↓
[Next.js Forensic Dashboard with Frame-by-Frame Scrubbing]
    `,
    datasetDetails:
      "Trained and evaluated on the FaceForensics++, Celeb-DF, and DeepFake Detection Challenge (DFDC) datasets.",
    featureEngineering: [
      "Eye Blinking & Gaze Consistency: Tracks biological blink rates and corneal reflection geometry across 60-frame sequences.",
      "Facial Boundary Warping Artifacts: Analyzes high-frequency residual noise around chin and hairline seam boundaries.",
      "Audio-Visual Lip Synchronization: Cross-correlates phoneme audio energy with mouth aperture contours.",
    ],
    modelComparison: [
      { model: "CNN + Bi-LSTM (Multi-Modal)", metric1: "93.8% Video Acc", metric2: "91.2% Audio Acc", verdict: "Robust against compression artifacts" },
      { model: "Single-Frame EfficientNet", metric1: "86.4% Video Acc", metric2: "N/A (Video only)", verdict: "High false positives on video re-encoding" },
      { model: "3D CNN (C3D)", metric1: "90.1% Video Acc", metric2: "Heavy Compute", verdict: "Slow inference unsuitable for web uploads" },
    ],
    explainability:
      "Provides an interactive timeline scrubber where users can inspect exact frame timestamps flagged for artificial blending, accompanied by visual bounding boxes and audio spectrogram irregularity highlights.",
    keyResults: [
      "Achieved 93.8% detection accuracy across Deepfakes, Face2Face, FaceSwap, and NeuralTextures manipulations.",
      "Shipped a full-stack Next.js web application with drag-and-drop video analysis and PDF forensic report exports.",
      "Constructed a dual-engine architecture capable of catching both video face replacements and synthetic voice clones.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Social media video compression (H.264/H.265 re-encoding) degrading subtle spatial boundary artifacts.",
        mitigation: "Augmented training data with aggressive Gaussian blur, JPEG compression sweeps, and random frame dropping to force model reliance on temporal dynamics.",
      },
      {
        challenge: "Processing high-resolution 4K video uploads within browser timeout limits.",
        mitigation: "Implemented asynchronous background job workers with Redis queues and keyframe sampling to process videos in seconds.",
      },
    ],
    whatILearned:
      "Gained deep experience in multi-modal deep learning, video processing pipelines (OpenCV, FFmpeg), and bridging complex forensic models into intuitive, user-friendly software products.",
    githubUrl: "https://github.com/Kshitiz-Khandelwal",
  },
  {
    id: "ayurveda-intelligence",
    title: "Ayurveda Intelligence Platform",
    badge: "Knowledge Discovery • Healthcare NLP",
    tagline: "Evidence-Aware Ayurvedic Formulation Engine with Canonical Disease Mapping",
    category: "healthcare-ai",
    categoryLabel: "Healthcare NLP & Systems",
    featured: true,
    metrics: [
      { label: "Formulary Scale", value: "500+ Verified", note: "Classical Ayurvedic texts" },
      { label: "Normalization", value: "Multi-Lingual", note: "Sanskrit, Hindi & English" },
      { label: "Evidence Rigor", value: "Source Citations", note: "Charaka, Sushruta, AYUSH" },
      { label: "Ranking Engine", value: "Hybrid ML", note: "Deterministic + semantic matching" },
    ],
    tags: ["Python", "FastAPI", "Next.js", "React", "Knowledge Graphs", "NLP", "Vedic Healthcare", "Tailwind CSS"],
    summary:
      "An evidence-aware knowledge discovery engine that converts unstructured natural-language symptom queries into structured, explainable, and source-backed Ayurvedic formulation recommendations with canonical disease mapping.",
    problem:
      "Ayurvedic medical literature is traditionally fragmented across classical texts (Charaka Samhita, Sushruta Samhita, Ashtanga Hridaya). Practitioners and researchers face terminology ambiguity where the same illness exists under Sanskrit, Hindi, and English names, while generic LLMs hallucinate unverified medical claims without citations.",
    limitationsOfExisting: [
      "Keyword searches fail when users search 'Fever' but classical texts index under 'Jvara'.",
      "Generic generative AI produces hallucinated herbal dosages without safety boundaries or counter-indication checks.",
      "Lack of provenance: Existing portals do not cite the exact classical shlokas or institutional research sources.",
    ],
    solution:
      "Constructed a multi-tier pipeline: (1) Terminology normalization and Sanskrit-Hindi-English synonym mapping, (2) Canonical disease identification, (3) Structured candidate retrieval from verified pharmacopoeias, (4) Hybrid ML ranking, (5) Full evidence trail with classical provenance.",
    architectureAscii: `
User Query (e.g. "chronic fever with digestive weakness")
        ↓
[Input Normalization & Cleansing]
        ↓
[Terminology Resolution & Sanskrit Synonym Mapping] (Fever ➔ Jvara, Agnimandya)
        ↓
[Canonical Disease & Entity Identification]
        ↓
[Structured & Semantic Candidate Retrieval] (500+ Classical Formulations)
        ↓
[Hybrid ML / Deterministic Ranking Engine] (Tridosha alignment & symptom matching)
        ↓
[Explainable Audit Trail & Classical Source Provenance] (Charaka Samhita, AYUSH)
        ↓
[Next.js Responsive User Interface]
    `,
    datasetDetails:
      "Built on a verified database of 500+ classical formulations indexed from Charaka Samhita, Sushruta Samhita, Ashtanga Hridaya, and official Ministry of AYUSH pharmacopoeial guidelines.",
    featureEngineering: [
      "Tridosha Variance Scoring: Mathematical modeling of Vata, Pitta, and Kapha aggravation vectors.",
      "Multi-Lingual Terminology Cross-Indexing: Levenshtein distance and embedding cosine similarity matching Sanskrit disease entities.",
      "Contra-Indication Flags: Automated safety checking against pregnancy, hypertension, and acute conditions.",
    ],
    modelComparison: [
      { model: "Hybrid Semantic + Deterministic (Ours)", metric1: "95.2% Relevance", metric2: "100% Sourced", verdict: "Zero hallucination risk with verified citations" },
      { model: "Pure Generative LLM (Zero-Shot)", metric1: "78.4% Relevance", metric2: "42% Hallucinated", verdict: "Unsafe for clinical discovery due to fake dosages" },
      { model: "Traditional SQL Keyword Search", metric1: "54.1% Relevance", metric2: "Fails on Synonyms", verdict: "Misses queries using modern English medical terms" },
    ],
    explainability:
      "Every recommended formulation displays a full provenance card showing the exact classical text chapter, the active herbal ingredients, the specific doshic action, and safety advisories.",
    keyResults: [
      "Engineered an end-to-end evidence-aware discovery engine eliminating medical hallucinations.",
      "Constructed a unified Sanskrit-Hindi-English medical terminology normalization dictionary.",
      "Delivered a modern, accessible web interface enabling healthcare practitioners and researchers to discover classical formulations in seconds.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Handling complex, multi-symptom queries where symptoms map to conflicting dosha imbalances.",
        mitigation: "Implemented a weighted Tridosha balance matrix that computes net systemic imbalance rather than evaluating symptoms in isolation.",
      },
      {
        challenge: "Ensuring the platform does not act as an automated medical prescribing tool.",
        mitigation: "Enforced strict safety boundaries, educational disclaimers, and mandatory consultation advisories across all output views.",
      },
    ],
    whatILearned:
      "Learned how to structure unstructured historical domain knowledge, design domain-specific NLP normalization pipelines, and balance classical medical tradition with modern software engineering.",
    githubUrl: "https://github.com/Kshitiz-Khandelwal",
  },
];

export const otherProjects = [
  {
    id: "zephyr-pico-lab",
    title: "Zephyr RTOS Edge AI & IoT Lab",
    badge: "Hardware & Embedded • RP2350",
    tagline: "Real-Time Embedded Systems on Raspberry Pi Pico 2 with Multi-Threading & Edge Telemetry",
    category: "edge-iot",
    tags: ["C / C++", "Zephyr RTOS", "Raspberry Pi Pico 2", "RP2350", "West Toolchain", "L298N", "Hardware"],
    summary:
      "A complete suite of real-time embedded programs built on the ARM Cortex-M33 Raspberry Pi Pico 2 (RP2350) using Zephyr RTOS. Covers preemptive multi-threading, GPIO interrupts, PWM DC motor control with L298N drivers, and edge sensor anomaly detection.",
    highlights: [
      "Preemptive RTOS multi-threading managing concurrent sensor telemetry and motor actuation with zero jitter.",
      "Hardware testbench with breadboard circuits, DC motors, and power isolation modules.",
      "Comprehensive setup documentation and West toolchain automation for embedded IoT developers.",
    ],
    photoPlaceholder: "[📷 PASTE IOT KIT / RP2350 BREADBOARD HARDWARE PHOTO HERE]",
    githubUrl: "https://github.com/Kshitiz-Khandelwal",
  },
  {
    id: "crews-climate",
    title: "CREWS — Climate Resilience Early Warning",
    badge: "Climate Tech • Hackathon Build",
    tagline: "Disaster Prediction & Community Alert Telemetry System",
    category: "product-ai",
    tags: ["Python", "Machine Learning", "Remote Sensing", "Flutter", "Firebase", "Climate Resilience"],
    summary:
      "An end-to-end climate disaster early warning platform combining remote sensing telemetry, ML rainfall forecasting, and a community mobile alert dispatcher to deliver localized flood and drought risk alerts before severe weather strikes.",
    highlights: [
      "Integrated remote sensing meteorological feeds with local sensor telemetry.",
      "Designed a real-time push notification queue dispatching actionable safety advisories to rural communities.",
      "Architected around a clear user journey: Data Stream ➔ ML Prediction ➔ Automated Alert ➔ Citizen Action.",
    ],
    githubUrl: "https://github.com/Kshitiz-Khandelwal",
  },
  {
    id: "campus-connect",
    title: "Campus Event Finder & RSVP System",
    badge: "Full-Stack Product • Hackathon Build",
    tagline: "Collegiate Event Discovery, Ticketing & Real-Time RSVP Platform",
    category: "product-ai",
    tags: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS", "REST API"],
    summary:
      "A high-throughput collegiate event discovery and RSVP management application solving fragmented campus event communication with automated RSVP tracking, calendar synchronizations, and organizer analytics.",
    highlights: [
      "Built clean authentication, real-time database subscriptions, and interactive event calendars.",
      "Led the build as team leader across rapid 24-hour hackathon sprints.",
    ],
    liveUrl: "https://team-griffith-eolh48yqs-kshitiz-khandelwals-projects.vercel.app",
    githubUrl: "https://github.com/Kshitiz-Khandelwal",
  },
];
