import type { Project, ServiceItem, CapabilityItem, ProcessStep } from '../types';

export const COMPANY_INFO = {
  name: "GROVEIL",
  tagline: "The Invisible Shield All Over The Field",
  descriptor: "SOFTWARE DEVELOPMENT STUDIO · COIMBATORE, INDIA",
  subheading: "Building practical technology for real-world problems.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "groveiltechnology@gmail.com",
  contactPhone: "+91 (0) 422 · Coimbatore Studio",
  githubUrl: "https://github.com/phoenix-0327/groveiltech",
  linkedinUrl: "https://linkedin.com",
  collegeAffiliation: "PSG College of Arts & Science / Coimbatore Student Consortium",
  pilotAvailability: "2–3 partners per academic term",
};

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Web Applications & Portals",
    description: "Custom portals, role-based access control, administrative panels and real-time synchronization.",
    deliverables: [
      "Role-based access control (RBAC)",
      "High-throughput administrative panels",
      "Real-time database sync & API integrations",
      "Secure authentication & session handling"
    ],
    icon: "LayoutGrid"
  },
  {
    number: "02",
    title: "Mobile Applications",
    description: "Cross-platform Flutter and React Native applications with barcode scanning and sensor integration.",
    deliverables: [
      "Cross-platform Flutter & React Native / Expo apps",
      "Sub-100ms camera barcode & QR decoding",
      "Offline-first local SQLite cache & auto-sync",
      "Hardware sensor Bluetooth & WiFi telemetry"
    ],
    icon: "Smartphone"
  },
  {
    number: "03",
    title: "Automation & Hardware Integration",
    description: "ESP32, Raspberry Pi firmware, automated email dispatchers and sensor telemetry.",
    deliverables: [
      "Microcontroller firmware (ESP32-S3, Raspberry Pi 5)",
      "Automated transactional emails & scheduled cron triggers",
      "Multi-modal sensor fusion (acoustic, thermal, VOC gas)",
      "Cellular 4G LTE IoT telemetry & remote diagnostics"
    ],
    icon: "Cpu"
  },
  {
    number: "04",
    title: "Dashboards & Analytics",
    description: "Live leaderboards, metric visualizations and Excel/CSV batch exports.",
    deliverables: [
      "Real-time weighted ranking engines & leaderboards",
      "High-volume Excel & CSV batch processing (14k+ rows)",
      "Interactive data visualizations & audit feeds",
      "Exportable compliance summaries & PDF reports"
    ],
    icon: "BarChart3"
  }
];

export const TECH_STACK = [
  { name: "React", role: "Frontend UI" },
  { name: "TypeScript", role: "Type Safety" },
  { name: "Tailwind CSS", role: "Design System" },
  { name: "Vite", role: "Build Tooling" },
  { name: "Supabase", role: "PostgreSQL & Auth" },
  { name: "PostgreSQL", role: "Relational DB" },
  { name: "Flutter", role: "Mobile SDK" },
  { name: "Node.js", role: "Server Runtime" },
  { name: "ESP32-S3", role: "Edge Hardware" },
  { name: "Raspberry Pi 5", role: "Edge AI Compute" },
];

export const PROJECTS: Project[] = [
  {
    id: "groveil",
    name: "GROVEIL",
    status: "CONCEPT",
    title: "Palm health, checked before it's too late.",
    description: "An autonomous ground rover and trunk-climbing inspection system designed for coconut plantations. It listens for hidden borers, inspects crown leaves and provides farmers with actionable health insights.",
    features: [
      "Multi-height acoustic stethoscope",
      "0.8–3.2 kHz borer feed detection",
      "MLX90640 thermal crown imaging",
      "NoIR camera",
      "BME688 AI VOC fingerprinting",
      "Geotagged palm health mapping",
      "4G LTE connectivity"
    ],
    technology: [
      "Raspberry Pi 5",
      "ESP32-S3",
      "MLX90640 Thermal",
      "NoIR Camera",
      "BME688",
      "4G LTE"
    ],
    highlight: "Field-studied across 5 plantations",
    category: "ai-iot",
    mockupType: "groveil",
    fullArchitecture: {
      problem: "Hidden borers (Red Palm Weevil and Rhinoceros Beetle) hollow out mature coconut palms from inside before external wilt symptoms appear, making traditional visual inspection too late.",
      solution: "Engineered an autonomous rover and trunk-climbing robot with contact acoustic stethoscopes, canopy thermal/NoIR vision, and VOC gas sensors, benchmarking each palm against its baseline.",
      metrics: ["5 Plantations Field-Studied", "4-Layer Sensor Fusion", "Trunk Acoustic + Crown Climb"],
      stack: [
        { layer: "Edge Compute & AI", tools: "Raspberry Pi 5 (Python, TFLite, Signal Processing)" },
        { layer: "Motion & Mechanism", tools: "ESP32-S3 Dual-Core Microcontroller, Motor Drives" },
        { layer: "Multi-Modal Sensors", tools: "Acoustic Contact Sensor, MLX90640 Thermal, NoIR Camera, BME688 VOC" },
        { layer: "Connectivity & Maps", tools: "Quectel 4G LTE, High-Precision GPS Geotagging, Supabase Cloud" }
      ]
    }
  },
  {
    id: "attendhub",
    name: "AttendHub",
    status: "LIVE",
    title: "Attendance without the paperwork.",
    description: "AttendHub is a QR and barcode-based attendance management platform that helps staff record student attendance through smartphone scanning with sub-100ms sync.",
    features: [
      "QR and barcode mobile camera scanner",
      "Instant attendance confirmation & sync indicators",
      "Torch support for low-light halls",
      "Excel import supporting 14,000+ student records",
      "Attendance export in standard spreadsheet formats",
      "Role-based access (Faculty, HoD, Administrator)",
      "Android and responsive web applications",
      "Crash diagnostics and offline queueing"
    ],
    technology: ["Flutter", "Supabase", "Netlify"],
    highlight: "14,000+ records · Sub-100ms reported sync",
    category: "live",
    mockupType: "attendhub",
    fullArchitecture: {
      problem: "Massive college symposiums and daily hall entries caused long queues and manual paper ledger errors across thousands of students.",
      solution: "Engineered an ultra-fast Flutter scanner app syncing with Supabase in sub-100ms, paired with a web admin portal for bulk uploads.",
      metrics: ["14,000+ Records Handled", "Sub-100ms Barcode Read", "Zero Paper Logs"],
      stack: [
        { layer: "Mobile Scanner", tools: "Flutter (Android/iOS), Camera API with Torch toggle" },
        { layer: "Backend Database", tools: "Supabase (PostgreSQL with Row Level Security)" },
        { layer: "Web Administration", tools: "React + Vite hosted on Netlify Edge" },
        { layer: "Data Operations", tools: "Streaming XLSX Parser for 14,000+ batch records" }
      ]
    }
  },
  {
    id: "iic-tracker",
    name: "IIC Tracker",
    status: "PILOT LAUNCH",
    title: "Every department. One clear picture.",
    description: "IIC Tracker centralizes departmental activity submissions, calculates weighted activity ranks and displays a live department-wise leaderboard for college administration.",
    features: [
      "Activity submissions with document uploads",
      "Department-wise tracking & activity breakdown",
      "Automated leaderboard updated in real-time",
      "Automated HoD reminder emails before deadlines",
      "Remark alerts and peer review notes",
      "Missing submission monitoring & compliance stats"
    ],
    technology: ["Web Application", "Supabase", "Email Automation"],
    highlight: "Pilot launch across 24 departments at PSG CAS",
    category: "live",
    mockupType: "iic",
    fullArchitecture: {
      problem: "Academic councils struggle to compile quarterly Innovation Cell activity submissions from 20+ distinct departments via WhatsApp and emails.",
      solution: "Created a single authoritative portal where departments submit activities, automated scoring weights calculate rank, and automated reminders notify coordinators.",
      metrics: ["24+ Departments Unified", "Automated Ranking Engine", "100% Submission Compliance"],
      stack: [
        { layer: "Frontend Portal", tools: "TypeScript + React with strict form validation" },
        { layer: "Data Engine", tools: "Supabase Database & Realtime Subscriptions" },
        { layer: "Notification Daemon", tools: "Node.js email automation with template rendering" },
        { layer: "Institution", tools: "PSG College of Arts & Science Pilot" }
      ]
    }
  },
  {
    id: "nutri360",
    name: "Nutri360",
    status: "IN DEVELOPMENT",
    title: "Connected technology for child growth screening.",
    description: "Nutri360 is a child nutrition and growth screening platform combining an Expo mobile app with connected ESP32 stadiometer and weight hardware to calculate WHO growth benchmarks.",
    features: [
      "Hardware-to-Cloud telemetry over Bluetooth & WiFi",
      "Digital ESP32 stadiometer & load cell integration",
      "Automated WHO growth standard percentile calculations",
      "Offline field survey logging with automatic cloud sync",
      "Role-based healthcare worker mobile dashboard",
      "Exportable clinical nutritional health summary cards"
    ],
    technology: ["Expo", "Supabase", "ESP32"],
    highlight: "Connected sensor hardware & growth analytics",
    category: "ai-iot",
    mockupType: "nutri360",
    fullArchitecture: {
      problem: "Rural and suburban child health camps rely on manual height-weight measurement tapes and paper charts, leading to calculation mistakes in stunting/wasting data.",
      solution: "Paired custom ESP32 ultrasonic and strain-gauge hardware with an Expo mobile app that instantly plots child growth curves against WHO benchmarks.",
      metrics: ["Instant WHO Percentile Calculation", "ESP32 Telemetry Stream", "Automated Nutrition Risk Flagging"],
      stack: [
        { layer: "Embedded Device", tools: "ESP32 Microcontroller, Ultrasonic & Load Sensors" },
        { layer: "Field App", tools: "React Native / Expo with Bluetooth Low Energy (BLE)" },
        { layer: "Cloud Database", tools: "Supabase with encrypted medical records" },
        { layer: "Health Analytics", tools: "Automated WHO growth standard curves" }
      ]
    }
  },
  {
    id: "classroom-attention-monitor",
    name: "Classroom Attention Monitor",
    status: "BUILT",
    title: "Understanding classroom engagement through computer vision.",
    description: "A multi-camera classroom monitoring pipeline using YOLOv8 and MediaPipe Face Mesh for zone-based aggregate student attentiveness without storing individual facial biometrics.",
    features: [
      "Multi-camera RTSP stream video processing",
      "Zone-based student seating engagement analysis",
      "Head pose estimation & gaze distribution",
      "Aggregated privacy-preserving browser dashboard",
      "Session timeline charts and lecture engagement metrics"
    ],
    technology: ["Python", "OpenCV", "MediaPipe", "YOLO"],
    highlight: "Privacy-first aggregate engagement heatmaps",
    category: "ai-iot",
    mockupType: "vision",
    fullArchitecture: {
      problem: "Lecturers and educational researchers have no objective data on whether instructional pacing keeps students attentive across different lecture hall zones.",
      solution: "Built a Python-based computer vision pipeline that computes aggregated head orientation without recording identifying personal facial features.",
      metrics: ["Privacy-First Aggregated Metrics", "60 FPS Real-Time Detection", "Zone Heatmap Visualization"],
      stack: [
        { layer: "Vision Inference", tools: "YOLOv8 + MediaPipe Face Mesh" },
        { layer: "Stream Pipeline", tools: "Python, OpenCV RTSP multi-threaded consumer" },
        { layer: "Dashboard", tools: "React browser interface with Chart.js heatmaps" }
      ]
    }
  },
  {
    id: "daily-target",
    name: "Daily Target",
    status: "BUILT",
    title: "Make every day count.",
    description: "A focused productivity and habit-tracking web application engineered for friction-free streak execution, visual velocity, and encrypted session security.",
    features: [
      "Customizable daily streak habits & target goals",
      "Lightweight micro-journaling entries",
      "Encrypted user session data storage",
      "Visual streak heatmap and velocity indicators",
      "Keyboard shortcut driven quick updates"
    ],
    technology: ["Supabase", "Netlify"],
    highlight: "Focused on daily execution without distraction",
    category: "web-mobile",
    mockupType: "dailytarget",
    fullArchitecture: {
      problem: "Commercial habit apps are bloated with ads, expensive subscriptions, and excessive notifications.",
      solution: "Crafted a clean, lightning-fast habit tracking interface focused entirely on friction-free daily updates and visual momentum.",
      metrics: ["Sub-50ms Load Time", "Zero Clutter Interface", "Instant Habit Check-In"],
      stack: [
        { layer: "Frontend", tools: "React, Tailwind CSS, Netlify CDN" },
        { layer: "Database", tools: "Supabase Auth & Row-Level Security" }
      ]
    }
  },
  {
    id: "painsense-ai",
    name: "PainSense AI",
    status: "PROTOTYPE",
    title: "Making pain indicators easier to visualize.",
    description: "A clinical prototype featuring an interactive 2D anatomical body mapping interface and standardized VAS severity rating scales to streamline physician consultations.",
    features: [
      "Interactive 2D anatomical body mapping",
      "Severity rating scales (VAS/NRS clinical standards)",
      "Temporal symptom recurrence tracking",
      "Structured summary export for clinician consultations",
      "High-contrast accessible clinical design system"
    ],
    technology: ["React"],
    highlight: "Clinical UI prototype (demonstration experiment)",
    category: "ai-iot",
    mockupType: "painsense",
    fullArchitecture: {
      problem: "Patients struggle to communicate radiating or intermittent pain accurately to physicians during brief clinical visits.",
      solution: "Engineered a digital anatomical locator where patients tap specific muscle/joint zones, indicate severity, and generate a standardized report.",
      metrics: ["Standardized VAS Scale", "Interactive SVG Anatomical Zones", "Clinician-Ready PDF Export"],
      stack: [
        { layer: "UI Engine", tools: "React with interactive SVG coordinate mapping" },
        { layer: "State Management", tools: "Client-side Zustand state store" }
      ]
    }
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    title: "01 — Production-Grade Security",
    description: "Row-Level Security (RLS) on PostgreSQL, encrypted session cookies, and strict role-based access control across faculty and admin tiers.",
    metric: "Granular RLS",
    tag: "Security"
  },
  {
    title: "02 — Structured Schemas",
    description: "Normalized relational databases and deterministic foreign key constraints that eliminate data drift across multi-year institutional lifecycles.",
    metric: "Zero Drift",
    tag: "Architecture"
  },
  {
    title: "03 — Spreadsheet Interoperability",
    description: "High-throughput streaming XLSX/CSV import and export engines handling tens of thousands of student records in seconds.",
    metric: "Instant Parser",
    tag: "Productivity"
  },
  {
    title: "04 — Automated Notifications",
    description: "Background email dispatchers and webhook listeners that trigger HoD reminders and peer review alerts without manual oversight.",
    metric: "Zero Dropped",
    tag: "Automation"
  },
  {
    title: "05 — Commerce & Invoicing",
    description: "Licensed payment gateway integrations for event ticketing, receipts, and membership fees. Groveil does not hold customer funds.",
    metric: "PCI-Compliant",
    tag: "Integrations"
  },
  {
    title: "06 — Modular Architecture",
    description: "Decoupled frontend and serverless micro-endpoints ensuring fast load times, modular refactoring, and zero vendor lock-in.",
    metric: "Clean Stacks",
    tag: "Engineering"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    name: "Problem Discovery & Workflow Audit",
    description: "We shadow the actual coordinators, invigilators and administrators to audit manual pain points.",
    deliverable: "Problem Specification & Scope"
  },
  {
    number: "02",
    name: "Data Architecture & Prototype",
    description: "Define the relational schema, API contracts and produce a functional interactive UI mockup.",
    deliverable: "Interactive Clickable Prototype"
  },
  {
    number: "03",
    name: "Core Build & Rapid Iteration",
    description: "Sprint-based development focusing on high-frequency core workflows first, backed by live staging builds.",
    deliverable: "Weekly Testable Deployments"
  },
  {
    number: "04",
    name: "Pilot Deployment & Onboarding",
    description: "In-person campus rollout with real user training, device calibration, and live concurrency testing.",
    deliverable: "Pilot Launch"
  },
  {
    number: "05",
    name: "Monitoring, Telemetry & Refinement",
    description: "Active latency telemetry, edge logging, user feedback cycles, and continuous performance tuning.",
    deliverable: "Monitoring & Active Maintenance Plan"
  }
];

export const PROOF_POINTS = [
  {
    stat: "14,000+",
    label: "Student Records Processed",
    description: "Bulk attendance & data ingestion across collegiate sessions without failure."
  },
  {
    stat: "24",
    label: "Departments in Pilot",
    description: "Active centralized Innovation Cell tracking at PSG College of Arts & Science."
  },
  {
    stat: "7",
    label: "Systems Designed",
    description: "Web apps, mobile scanners, computer vision pipelines & embedded robotics."
  },
  {
    stat: "< 100ms",
    label: "Reported Scan Response",
    description: "Sub-100ms camera barcode decoding on field smartphones."
  }
];

