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
  }[];
  liveUrl?: string;
  githubUrl?: string;
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
      "A real-time DNS threat defense platform analyzing domain characteristics, lexical n-grams, and Shannon entropy to intercept malware C2 beaconing and DGA botnets before name resolution.",
    problem:
      "Modern malware (e.g. Locky, CryptoLocker, Mirai) utilizes Domain Generation Algorithms (DGAs) and DNS tunneling to dynamically generate thousands of pseudo-random domains daily. Traditional signature-based DNS firewalls and static blocklists suffer a 24–72 hour threat intelligence lag, leaving enterprise networks vulnerable to zero-day Command & Control (C2) callback beacons.",
    limitationsOfExisting: [
      "Static blocklists fail completely against algorithmic pseudo-random domains generated on the fly.",
      "Deep Packet Inspection (DPI) introduces severe latency overhead (30ms+) incompatible with wire-speed resolver throughput.",
      "Traditional black-box neural networks lack explainability required by SOC analysts to justify host quarantine actions.",
    ],
    solution:
      "Engineered a high-throughput, multi-tiered AI DNS defense pipeline. The system combines lightweight Shannon entropy calculation and lexical n-gram extraction with an ultra-fast LightGBM classifier. It attributes domains to 50+ known malware DGA families in under 1.2ms and exposes TreeSHAP feature attributions so SOC analysts understand why a domain was blocked.",
    architectureAscii: `
[ Client DNS Request ]
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
    ┌────┴──────────────────────────┐
    ▼                               ▼
[ ALLOW / PASS ]             [ BLOCK / QUARANTINE ]
Resolver Resolves IP         Sinkhole Redirection (0.0.0.0)
                             + Real-Time TreeSHAP Explanations Dispatched to SOC
`,
    datasetDetails:
      "Trained on a curated benchmark of 1,200,000 domains: 600,000 benign queries (Tranco & Cisco Umbrella Top 1M) and 600,000 confirmed malicious DGA domains across 50 malware families (BAM / Netlab 360 DGA Feed). Evaluated on a 20% holdout test set (240K domains).",
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
      { label: "Inference Latency", value: "<1.2ms", note: "Benchmark on 100K queries" },
      { label: "DGA Detection Rate", value: "99.4%", note: "240K domain holdout test" },
      { label: "Throughput Capacity", value: "100K+ QPS", note: "Multi-worker asynchronous engine" },
      { label: "Malware Families", value: "50+ DGA Types", note: "Netlab 360 dataset" },
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
      "Healthcare institutions cannot pool patient medical data due to strict data privacy regulations (HIPAA, GDPR) and clinical liabilities. Traditional centralized training risks data leakage, while standard Federated Learning (FL) leaks private raw features through gradient inversion attacks and suffers high client-side computation costs.",
    limitationsOfExisting: [
      "Centralized ML requires aggregating raw clinical scans, violating patient privacy laws.",
      "Standard Federated Averaging (FedAvg) transfers full model weights, enabling malicious reconstruction via gradient inversion.",
      "Edge hospital servers often lack massive GPU clusters required to train modern deep learning models locally.",
    ],
    solution:
      "Implemented a Split Federated Learning (SplitFed) architecture. The early feature-extraction layers of a convolutional network reside locally on hospital nodes, while heavy classification layers reside on a secure central aggregator. Feature smashes passed across the cut layer are regularized using NoPeek loss to eliminate raw pixel reconstructability.",
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
      "94.6% pathology classification accuracy, within 0.5% of centralized training baseline.",
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
      { label: "Global Model Acc.", value: "94.6%", note: "5-fold cross-validation" },
      { label: "Data Leakage", value: "Zero Raw Share", note: "HIPAA compliant architecture" },
      { label: "Bandwidth Savings", value: "75% Reduction", note: "8-bit tensor quantization" },
      { label: "Client Compute Load", value: "-68% Overhead", note: "Split cut-layer offload" },
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
      "Cardiovascular diseases are the leading cause of global mortality. Traditional 1D time-series ML models struggle to capture subtle temporal morphological shifts (e.g. ST-elevation, inverted T-waves, bundle branch blocks) obscured by baseline wander and electromyographic noise.",
    limitationsOfExisting: [
      "1D Recurrent Neural Networks (RNN/LSTM) suffer vanishing gradients over long multi-lead cardiac recording windows.",
      "Fourier Transform (FFT) discards crucial time localization needed to identify intermittent ectopic beats.",
      "Manual ECG interpretation by cardiologists is prone to fatigue during prolonged 24-hour Holter monitoring.",
    ],
    solution:
      "Developed a hybrid Signal-to-Vision diagnostic pipeline. Raw 12-lead ECG signals are filtered for powerline interference and baseline wander, then transformed into 2D time-frequency scalograms using complex Morlet Continuous Wavelet Transforms (CWT). An EfficientNet-B4 convolutional backbone classifies 5 distinct arrhythmia categories with Grad-CAM visual heatmaps.",
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
                 │
                 ▼
[ Grad-CAM Visual Heatmap ] ──► Highlights Exact Cardiac Cycles Triggering the Arrhythmia Diagnosis
`,
    datasetDetails:
      "Trained and evaluated on the PTB-XL ECG dataset (21,837 clinical 12-lead ECG records from 18,885 patients, 10-second duration). Tested with 10-fold cross-validation matching inter-patient split benchmarks.",
    featureEngineering: [
      "Complex Morlet Wavelet Decomposition across 64 scale frequencies.",
      "Zero-phase Butterworth bandpass filtering (0.5 Hz – 45 Hz) eliminating baseline respiratory wander.",
      "Dynamic lead-weighting layer prioritizing diagnostic precordial leads (V1–V6) for ventricular arrhythmias.",
    ],
    modelComparison: [
      {
        model: "CWT + EfficientNet-B4 (Proposed)",
        metric1: "97.1% (PTB-XL Val)",
        metric2: "92.4% Exact Match",
        verdict: "Highest multi-label diagnostic accuracy and clinical localization fidelity.",
      },
      {
        model: "1D-ResNet18",
        metric1: "91.8% (PTB-XL Val)",
        metric2: "84.2% Exact Match",
        verdict: "Fails to capture subtle cross-lead morphology correlation.",
      },
      {
        model: "XGBoost on Extracted Wavelet Features",
        metric1: "88.6% (PTB-XL Val)",
        metric2: "79.1% Exact Match",
        verdict: "Requires rigid hand-crafted feature engineering, misses complex multi-beat rhythms.",
      },
    ],
    explainability:
      "Grad-CAM heatmaps overlay directly on the ECG trace, visually proving to physicians that the model focused precisely on the irregular R-R interval or premature ventricular contraction (PVC) spike rather than recording noise.",
    keyResults: [
      "97.1% weighted AUC across 5 major cardiac diagnostic superclasses.",
      "0.94 F1-score specifically on Atrial Fibrillation detection.",
      "Published interactive visualization allowing doctors to scrub time-frequency scalograms in real time.",
    ],
    challengesAndMitigations: [
      {
        challenge: "High memory cost of generating 12 separate 2D scalogram images per patient.",
        mitigation: "Stacked 12 leads into multi-channel tensor inputs and used depthwise separable convolutions.",
      },
      {
        challenge: "Severe class imbalance with rare arrhythmia subtypes.",
        mitigation: "Implemented Focal Loss (gamma=2.0) to dynamically downweight easy negative examples during training.",
      },
    ],
    whatILearned:
      "Transforming 1D signals into 2D representations allows biomedical engineering to leverage state-of-the-art computer vision backbones without inventing novel custom architectures from scratch.",
    tags: ["PyTorch", "Continuous Wavelet Transform", "EfficientNet-B4", "Grad-CAM", "Biomedical Signals", "LightGBM"],
    metrics: [
      { label: "Weighted AUC", value: "97.1%", note: "PTB-XL 10-fold cross-validation" },
      { label: "Classification Acc.", value: "92.4%", note: "5-class exact match" },
      { label: "AFib F1-Score", value: "0.94", note: "Atrial fibrillation detection" },
      { label: "Inference Speed", value: "14ms", note: "Full 12-lead evaluation" },
    ],
    githubUrl: "https://github.com/Kshitiz-Khandelwal/ECG-Wavelet-Arrhythmia",
  },
  {
    id: "ton-iot-ids",
    title: "TON-IoT Network Intrusion Detection Engine",
    category: "cybersecurity",
    categoryLabel: "Network Security & ML",
    badge: "IoT Telemetry • Multi-Attack Classification",
    tagline: "Two-Stage Threat Filtering with XGBoost Anomaly Detection & LightGBM Multi-Class Attribution",
    summary:
      "A high-throughput network security pipeline built on heterogeneous IoT telemetry, detecting DDoS, scanning, backdoor, and ransomware attacks across industrial sensor layers.",
    problem:
      "Edge IoT networks (smart meters, medical monitors, industrial sensors) are increasingly targeted by automated cyber-attacks. Traditional signature-based firewalls cannot run on resource-constrained gateways, and single-stage ML classifiers suffer from excessive false alarm rates under high telemetry volume.",
    limitationsOfExisting: [
      "Snort/Suricata signature rules require high CPU/RAM and miss zero-day polymorphic traffic.",
      "Single-stage multiclass classifiers waste compute classifying massive streams of benign background traffic.",
      "High false-positive alarm rates overwhelm SOC security personnel.",
    ],
    solution:
      "Engineered a two-stage hierarchical IDS. Stage 1 executes an ultra-lean binary anomaly filter separating benign traffic from suspicious flows. Stage 2 routes detected anomalies into an optimized LightGBM classifier that pinpoints the exact attack family (DDoS, Scanning, Backdoor, Ransomware, XSS) with SHAP attribution.",
    architectureAscii: `
[ Ingress Network Telemetry (PCAP / Flow Records) ]
                       │
                       ▼
[ Flow Feature Extractor (44 Network Attributes) ]
                       │
                       ▼
[ Stage 1: Ultra-Fast Binary Anomaly Gate (XGBoost) ]
           │                                 │
      (Safe Traffic)                   (Anomaly Detected)
           ▼                                 ▼
    [ PASS / ALLOW ]          [ Stage 2: Multi-Class LightGBM Classifier ]
                              - DDoS, Ransomware, Backdoor, MITM, Injection
                                             │
                                             ▼
                              [ SOC Telemetry Alert + SHAP Attribution ]
`,
    datasetDetails:
      "Trained on the comprehensive TON_IoT Network Dataset collected by UNSW Canberra Cyber, comprising over 22 million network flow records across heterogeneous edge IoT environments.",
    featureEngineering: [
      "Flow Duration & Inter-Arrival Time (IAT) statistics capturing automated packet flooding.",
      "Source/Destination Port Entropy and TCP flag distribution (SYN/ACK ratio).",
      "Payload byte distribution variance and packet length skewness.",
    ],
    modelComparison: [
      {
        model: "Hierarchical XGBoost + LightGBM (Proposed)",
        metric1: "99.2% Multi-Class F1",
        metric2: "185K Flows / sec",
        verdict: "Highest throughput; two-stage design offloads 92% of benign flows in Stage 1.",
      },
      {
        model: "Single Deep MLP",
        metric1: "96.4% Multi-Class F1",
        metric2: "32K Flows / sec",
        verdict: "Heavy compute overhead, lower accuracy on imbalanced attack classes.",
      },
      {
        model: "Decision Tree Baseline",
        metric1: "91.2% Multi-Class F1",
        metric2: "210K Flows / sec",
        verdict: "Prone to high false-alarm rates on benign bursty traffic.",
      },
    ],
    explainability:
      "TreeSHAP summary plots identify that TCP Window Size, Flow IAT Min, and Destination Port are the three dominant features distinguishing ransomware lateral movement from standard file transfers.",
    keyResults: [
      "99.2% overall multi-class F1-score across 9 distinct cyber-attack families on TON_IoT test split.",
      "185,000 network flows per second processing throughput.",
      "92% compute reduction by filtering normal traffic at Stage 1.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Extreme class imbalance where attack flows comprise less than 2% of total traffic.",
        mitigation: "Trained Stage 1 with dynamic scale_pos_weight adjustment and cost-sensitive loss.",
      },
      {
        challenge: "High memory consumption during real-time feature aggregation.",
        mitigation: "Designed rolling ring-buffer data structures in C++ with Python bindings.",
      },
    ],
    whatILearned:
      "Hierarchical modeling architectures outperform monolithic models in throughput-critical systems by filtering out common cases early with minimal compute.",
    tags: ["Python", "XGBoost", "LightGBM", "Network Security", "SHAP", "FastAPI"],
    metrics: [
      { label: "Multi-Class F1", value: "99.2%", note: "TON_IoT 9-attack test split" },
      { label: "Throughput", value: "185K Flows/s", note: "Hierarchical two-stage engine" },
      { label: "Benign Filter Gate", value: "92% Fast-Path", note: "Stage 1 anomaly offload" },
      { label: "Attack Types", value: "9 Families", note: "DDoS, Backdoor, Ransomware, etc." },
    ],
    githubUrl: "https://github.com/Kshitiz-Khandelwal/TON-IoT-Intrusion-Detection",
  },
  {
    id: "verifake",
    title: "Verdict AI / VeriFake Multi-Modal Engine",
    category: "full-stack",
    categoryLabel: "Multi-Modal AI & Web",
    badge: "NLP + Computer Vision • Production App",
    tagline: "Cross-Modal Discrepancy Detection & Evidence Verification Engine",
    summary:
      "A production multi-modal verification platform combining fine-tuned DeBERTa-v3 NLP and Swin Transformer vision backbones to detect manipulated media and text-image inconsistencies.",
    problem:
      "Misinformation spreads 6x faster than factual reporting on social media platforms. Modern fake news relies heavily on 'out-of-context' media pairing—where a genuine image is combined with a fabricated, sensationalist headline.",
    limitationsOfExisting: [
      "Text-only NLP models fail when headlines are linguistically well-formed but contradict attached imagery.",
      "Reverse image search identifies image origin but cannot reason over semantic text contradictions.",
      "Consumer tools lack explainable evidence rationales required to build reader trust.",
    ],
    solution:
      "Built an end-to-end multi-modal verification platform. DeBERTa-v3 encodes textual claims while Swin Transformer extracts semantic visual feature vectors. A cross-attention fusion layer computes a similarity/contradiction score and retrieves contextual fact-checking evidence.",
    architectureAscii: `
[ User Submits Article URL / Text + Image ]
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
[ DeBERTa-v3 NLP Encoder ]   [ Swin Transformer Vision ]
(Extracts Claim Embeddings)   (Extracts Image Embeddings)
         │                       │
         └───────────┬───────────┘
                     ▼
       [ Cross-Modal Attention Fusion ] ──► Calculates Semantic Compatibility & Inconsistency Score
                     │
                     ▼
       [ Verdict Scoring & Evidence RAG ] ──► Queries Verified Fact-Checking Knowledge Bases
                     │
                     ▼
     [ Interactive Next.js Verdict Report with Visual Breakdown ]
`,
    datasetDetails:
      "Trained on Fakeddit (1M+ multi-modal samples) and COSMOS datasets with synthetic adversarial out-of-context pairings.",
    featureEngineering: [
      "Cross-modal cosine similarity score between image caption embeddings and article claim vectors.",
      "Named entity extraction (NER) consistency checking between text and visual OCR text.",
      "Emotional sentiment polarity and clickbait linguistic markers.",
    ],
    modelComparison: [
      {
        model: "DeBERTa-v3 + Swin Transformer (Proposed)",
        metric1: "93.8% F1-Score",
        metric2: "240ms Latency",
        verdict: "Superior reasoning over subtle cross-modal contextual contradictions.",
      },
      {
        model: "CLIP ViT-B/32 Baseline",
        metric1: "86.2% F1-Score",
        metric2: "95ms Latency",
        verdict: "Fast but misses nuanced linguistic negations and fine-grained visual details.",
      },
      {
        model: "Text-Only RoBERTa",
        metric1: "78.4% F1-Score",
        metric2: "60ms Latency",
        verdict: "Blind to out-of-context image manipulation attacks.",
      },
    ],
    explainability:
      "The UI highlights contradictory entities in text and draws attention bounding boxes on the corresponding image regions, showing users exactly why a claim was flagged as misleading.",
    keyResults: [
      "93.8% verification F1-score across 50,000 multi-modal benchmark test articles.",
      "Deployed full-stack Next.js web application with live URL scraping and image OCR analysis.",
      "Sub-300ms end-to-end processing pipeline including fact-check retrieval.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Satirical content falsely flagged as malicious misinformation.",
        mitigation: "Trained a dedicated satire classification head using domain-specific lexical style markers.",
      },
      {
        challenge: "High inference cost of hosting two large foundation models simultaneously.",
        mitigation: "Quantized weights to ONNX FP16 and implemented intelligent Redis caching for frequent URLs.",
      },
    ],
    whatILearned:
      "Building trustworthy AI applications requires designing transparent user interfaces that clearly communicate model uncertainty rather than returning a binary black-box score.",
    tags: ["Next.js", "TypeScript", "PyTorch", "DeBERTa-v3", "Transformers", "Tailwind CSS", "FastAPI"],
    metrics: [
      { label: "Multi-Modal F1", value: "93.8%", note: "Fakeddit benchmark test split" },
      { label: "End-to-End Latency", value: "<300ms", note: "ONNX FP16 optimized inference" },
      { label: "Supported Modalities", value: "Text + Image + URL", note: "Full-stack automated scraping" },
      { label: "Evidence Retrieval", value: "Automated RAG", note: "Live fact-checking knowledge base" },
    ],
    githubUrl: "https://github.com/Kshitiz-Khandelwal/verdict-ai",
  },
  {
    id: "ayurveda-intelligence",
    title: "Ayurveda Intelligence & Classical Synonym Engine",
    category: "ai-systems",
    categoryLabel: "NLP & Biomedical AI",
    badge: "Domain NLP • Classical Sanskrit Knowledge",
    tagline: "Sanskrit Medical Synonym Normalization, Prakriti Profiling & Hybrid Herb Ranking Engine",
    summary:
      "An intelligent medical search and clinical discovery engine reconciling ancient Sanskrit Ayurvedic formulations (Charaka & Sushruta Samhita) with modern biomedical taxonomy.",
    problem:
      "Classical Ayurvedic formulations use ancient Sanskrit terminology with hundreds of dialectical synonyms (e.g. Ashwagandha has 15+ classical Sanskrit names). Modern clinical researchers cannot easily map these to standard botanical identifiers and active biochemical constituents.",
    limitationsOfExisting: [
      "Standard biomedical search engines (PubMed) fail on Sanskrit transliterations and classical terminology.",
      "Static herbal databases lack intelligent dosha interaction modeling.",
      "No automated system currently bridges classical Sanskrit medical shlokas to modern pharmacology.",
    ],
    solution:
      "Engineered an intelligent domain NLP platform. Built a custom Sanskrit synonym normalization dictionary resolving variant spellings to canonical botanical entities, paired with a hybrid semantic search engine and interactive Prakriti diagnostic recommendation engine.",
    architectureAscii: `
[ User Queries Symptom / Sanskrit Herb / Dosha Imbalance ]
                          │
                          ▼
[ Sanskrit Synonym Normalization Layer (Fuzzy + Lexical Match) ]
                          │
                          ▼
[ Hybrid Ranking Engine (BM25 Keyword + BGE-M3 Dense Embeddings) ]
                          │
                          ▼
[ Multi-Factor Herb Recommendation & Dosha Alignment (Vata/Pitta/Kapha) ]
                          │
                          ▼
[ Evidence-Backed Clinical Output with Botanical Taxa & Classical Citations ]
`,
    datasetDetails:
      "Digitized and structured clinical corpus from the Charaka Samhita, Sushruta Samhita, and Ayurvedic Pharmacopoeia of India (API), indexing over 1,200 medicinal plants and 5,000 formulations.",
    featureEngineering: [
      "Sanskrit Devanagari to IAST/ITRANS phonetic transliteration mapping.",
      "Tri-Dosha mathematical balance scoring (Rasa, Guna, Virya, Vipaka coordinates).",
      "Dense semantic vector embeddings capturing therapeutic action correlations.",
    ],
    modelComparison: [
      {
        model: "Hybrid Dense + Sparse Sanskrit Engine (Proposed)",
        metric1: "95.2% Top-5 Recall",
        metric2: "35ms Response Time",
        verdict: "Highest retrieval precision on noisy transliterated queries and synonyms.",
      },
      {
        model: "Standard BM25 Only",
        metric1: "68.4% Top-5 Recall",
        metric2: "12ms Response Time",
        verdict: "Misses semantic synonyms and variant phonetic spellings.",
      },
      {
        model: "Generic OpenAI text-embedding-3",
        metric1: "79.1% Top-5 Recall",
        metric2: "180ms Response Time",
        verdict: "Lacks specialized training on ancient Sanskrit Ayurvedic vocabulary.",
      },
    ],
    explainability:
      "Every herbal recommendation displays its classical Samhita textual citation alongside its modern pharmacological constituents (e.g. Withanolides in Withania somnifera).",
    keyResults: [
      "95.2% top-5 retrieval recall across 1,200 classical Sanskrit formulations.",
      "Structured Sanskrit knowledge graph linking symptoms, doshas, herbs, and modern botanical taxa.",
      "Interactive responsive Next.js frontend with real-time Prakriti diagnostic questionnaire.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Handling variable phonetic transliterations of Sanskrit terms by non-academic users.",
        mitigation: "Implemented Soundex-based phonetic matching tailored for Indo-Aryan consonants.",
      },
      {
        challenge: "Complex multi-herb formulation interactions with counteracting properties.",
        mitigation: "Built a mathematical formulation balance matrix calculating net doshic impact.",
      },
    ],
    whatILearned:
      "Domain-specific AI shines brightest when paired with deep cultural and historical knowledge engineering, unlocking centuries of observational science for modern research.",
    tags: ["Python", "FastAPI", "NLP", "Next.js", "TypeScript", "Knowledge Graphs", "Tailwind CSS"],
    metrics: [
      { label: "Retrieval Recall", value: "95.2%", note: "Top-5 recall on classical queries" },
      { label: "Corpus Size", value: "1,200+ Plants", note: "Charaka & Sushruta Samhita" },
      { label: "Formulations", value: "5,000+ Records", note: "Ayurvedic Pharmacopoeia" },
      { label: "Query Latency", value: "<40ms", note: "Hybrid dense-sparse retrieval" },
    ],
    githubUrl: "https://github.com/Kshitiz-Khandelwal/ayurveda-intelligence-engine",
  },
];

export interface OtherProject {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  summary: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  photoPlaceholder?: string;
}

export const otherProjects: OtherProject[] = [
  {
    id: "zephyr-pico-lab",
    title: "Zephyr RTOS Edge AI & IoT Lab",
    badge: "Embedded & Systems Lab",
    tagline: "Deterministic Real-Time Firmware on Raspberry Pi Pico 2 (RP2350)",
    summary:
      "A hands-on embedded systems testbench exploring real-time multi-threading, hardware PWM motor drivers, sensor acquisition, and deterministic execution on the dual-core ARM Cortex-M33 RP2350 microcontroller.",
    highlights: [
      "Configured West build toolchain, devicetree overlays, and Kconfig parameters for the RP2350.",
      "Implemented cooperative multi-threading with thread-safe IPC ring buffers for sensor data acquisition.",
      "Developed PWM motor drivers and edge anomaly detection routines running with sub-10ms determinism.",
    ],
    tags: ["C / C++", "Zephyr RTOS", "ARM Cortex-M33", "RP2350", "West", "IoT Telemetry"],
    githubUrl: "https://github.com/Kshitiz-Khandelwal/Zephyr-Edge-AI-Kit",
    photoPlaceholder: "[📷 PASTE IOT KIT / RP2350 BREADBOARD HARDWARE PHOTO HERE]",
  },
  {
    id: "crews-climate",
    title: "CREWS — Climate Resilience Early Warning System",
    badge: "Environmental AI",
    tagline: "Multi-Source Climate Risk Forecasting & Farmer Advisory Network",
    summary:
      "A climate intelligence platform aggregating satellite precipitation data, soil moisture telemetry, and localized weather forecasts to deliver automated early warnings for extreme weather events to agricultural communities.",
    highlights: [
      "Engineered data ingestion pipelines processing global weather models and satellite raster data.",
      "Integrated crop risk scoring algorithms providing localized planting recommendations.",
      "Designed responsive progressive web application for low-bandwidth rural mobile networks.",
    ],
    tags: ["Python", "FastAPI", "Next.js", "GIS Telemetry", "Machine Learning"],
    githubUrl: "https://github.com/Kshitiz-Khandelwal/crews-climate-resilience",
  },
  {
    id: "campus-event-finder",
    title: "Campus Event Discovery & RSVP System",
    badge: "Full-Stack Web App",
    tagline: "Real-Time Student Activity Discovery, Calendar Sync & Event Management",
    summary:
      "A full-stack campus platform connecting college clubs, technical workshops, and student hackathons with interactive RSVP ticketing and automated calendar integration.",
    highlights: [
      "Built with Next.js App Router, Supabase PostgreSQL, and Tailwind CSS.",
      "Implemented role-based access control (RBAC) for student organizers and faculty coordinators.",
      "Automated QR code check-in scanner and instant calendar invitation dispatch.",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/Kshitiz-Khandelwal/campus-event-finder",
  },
];
