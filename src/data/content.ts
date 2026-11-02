import type { Project, ServiceItem, CapabilityItem, ProcessStep } from '../types';

export const COMPANY_INFO = {
  name: "GROVEIL",
  tagline: "THE INVISIBLE SHIELD ALL OVER THE FIELD",
  descriptor: "SOFTWARE DEVELOPMENT STUDIO · COIMBATORE, INDIA",
  subheading: "Founded by students building practical technology for real-world problems.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "groveiltechnology@gmail.com",
  contactPhone: "+91 (0) 422 · Coimbatore Studio",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  collegeAffiliation: "PSG College of Arts & Science / Coimbatore Student Consortium",
};

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Web Applications & Portals",
    description: "Custom portals with authentication, user roles, dashboards and administrative tools.",
    deliverables: [
      "Role-based access controls (RBAC)",
      "High-throughput administrative panels",
      "Real-time database sync & API integrations",
      "Secure authentication & session handling"
    ],
    icon: "LayoutGrid"
  },
  {
    number: "02",
    title: "Mobile Applications",
    description: "Android and iOS applications built using Flutter and Expo.",
    deliverables: [
      "Cross-platform Flutter & React Native / Expo apps",
      "Camera & barcode/QR hardware integration",
      "Offline-first sync & local SQLite storage",
      "Play Store & App Store deployment pipelines"
    ],
    icon: "Smartphone"
  },
  {
    number: "03",
    title: "Business Automation",
    description: "Email alerts, automated reminders, Excel imports and exports, and workflow automation.",
    deliverables: [
      "Automated transactional emails & reminder triggers",
      "High-volume Excel & CSV batch processing (14k+ rows)",
      "Webhook listeners & scheduled cron triggers",
      "Audit logs & error recovery routines"
    ],
    icon: "Cpu"
  },
  {
    number: "04",
    title: "Dashboards & Reporting",
    description: "Data visualizations, leaderboards, reports and actionable insights.",
    deliverables: [
      "Interactive departmental leaderboards",
      "Automated PDF & XLSX compliance reports",
      "Real-time analytics & trend charts",
      "Granular drill-downs by department & student"
    ],
    icon: "BarChart3"
  }
];

export const TECH_STACK = [
  { name: "Flutter", role: "Mobile Engines" },
  { name: "React", role: "Frontend UI" },
  { name: "Expo", role: "Cross-Platform" },
  { name: "Supabase", role: "Backend & Auth" },
  { name: "Netlify", role: "Edge Hosting" },
  { name: "GitHub", role: "CI/CD & Code" },
  { name: "Python", role: "Vision & Automation" },
  { name: "Node.js", role: "Server Runtime" },
];

export const PROJECTS: Project[] = [
  {
    id: "groveil",
    name: "Groveil",
    status: "CONCEPT",
    title: "Palm health, checked before it’s too late.",
    description: "Groveil is an autonomous rover and trunk-climbing system that patrols coconut plantations row by row. It listens for hidden borers inside palm trunks, inspects crown leaves up close, and gives farmers expert-verified advice for each tree.",
    features: [
      "Multi-height trunk acoustic sensing for hidden borers",
      "Close-up crown leaf inspection by trunk climbing",
      "4-layer sensor fusion: acoustic, thermal/NIR, VOC gas and palm history",
      "Per-palm health history that flags changes from each tree’s own baseline",
      "Geotagged palm-by-palm health map over 4G",
      "Expert-reviewed advice and containment steps, with the owner deciding on treatment"
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
    title: "Attendance, without the paperwork.",
    description: "AttendHub is a QR and barcode-based attendance management platform that helps staff record student attendance through smartphone scanning.",
    features: [
      "QR and barcode scanning",
      "Scan confirmation and progress indicators",
      "Torch support for low-light halls",
      "Excel import supporting 14,000+ student records",
      "Attendance export in standard spreadsheet formats",
      "Role-based access (Faculty, Hod, Admin)",
      "Android and web applications",
      "Crash diagnostics and offline queueing"
    ],
    technology: ["Flutter", "Supabase", "Netlify"],
    highlight: "Launched at our own college.",
    category: "live",
    mockupType: "attendhub",
    fullArchitecture: {
      problem: "Massive college symposiums and daily hall entries caused long queues and manual paper ledger errors across thousands of students.",
      solution: "Engineered an ultra-fast Flutter scanner app syncing with Supabase in sub-100ms, paired with a web admin portal for bulk uploads.",
      metrics: ["14,000+ Records handled", "Sub-100ms Barcode Read", "Zero Paper Logs"],
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
    title: "Bringing every department into one place.",
    description: "IIC Tracker centralizes departmental activity submissions, calculates activity counts and displays a department-wise leaderboard.",
    features: [
      "Activity submissions with document uploads",
      "Department-wise tracking & activity breakdown",
      "Automated leaderboard updated in real-time",
      "Automated email notifications to coordinators",
      "Remark alerts and peer review notes",
      "Missing submission reminders before deadline"
    ],
    technology: ["Web Application", "Supabase", "Email Automation"],
    highlight: "Pilot launch at PSG College of Arts & Science.",
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
    title: "Connecting applications with intelligent hardware.",
    description: "Nutri360 is a child nutrition and growth screening platform combining mobile applications, web technology, a Supabase backend and connected ESP32 hardware.",
    features: [
      "Hardware-to-Cloud telemetry over Bluetooth & WiFi",
      "Digital stadiometer & weight sensor integration",
      "WHO growth standard percentile calculations",
      "Offline field survey logging with cloud sync",
      "Role-based healthcare worker mobile dashboard",
      "Exportable clinical nutritional health cards"
    ],
    technology: ["Expo", "Supabase", "ESP32"],
    highlight: "Field-tested physical sensor integration.",
    category: "ai-iot",
    mockupType: "nutri360",
    fullArchitecture: {
      problem: "Rural and suburban child health camps rely on manual height-weight measurement tapes and paper charts, leading to calculation mistakes in stunting/wasting data.",
      solution: "Paired custom ESP32 ultrasonic and strain-gauge hardware with an Expo mobile app that instantly plots child growth curves against WHO benchmarks.",
      metrics: ["Instant WHO percentile calculation", "ESP32 telemetry stream", "Automated nutrition risk flagging"],
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
    description: "A multi-camera classroom monitoring system with zone-based analysis and a browser dashboard.",
    features: [
      "Multi-camera RTSP stream processing",
      "Zone-based student seating engagement analysis",
      "Head pose estimation & gaze distribution",
      "Aggregated privacy-preserving browser dashboard",
      "Session timeline charts and lecture engagement metrics"
    ],
    technology: ["Python", "OpenCV", "MediaPipe", "YOLO"],
    highlight: "Non-intrusive aggregate engagement metrics.",
    category: "ai-iot",
    mockupType: "vision",
    fullArchitecture: {
      problem: "Lecturers and educational researchers have no objective data on whether instructional pacing keeps students attentive across different lecture hall zones.",
      solution: "Built a Python-based computer vision pipeline that computes aggregated head orientation without recording identifying personal facial features.",
      metrics: ["Privacy-first aggregated metrics", "60 FPS real-time detection", "Zone heatmap visualization"],
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
    title: "Making everyday progress measurable.",
    description: "A productivity and fitness tracking web application with secure data management.",
    features: [
      "Customizable daily streak habits & target goals",
      "Lightweight micro-journaling entries",
      "Encrypted user session data storage",
      "Visual streak heatmap and velocity indicators",
      "Keyboard shortcut driven quick updates"
    ],
    technology: ["Supabase", "Netlify"],
    highlight: "Focused on daily execution without distraction.",
    category: "web-mobile",
    mockupType: "dailytarget",
    fullArchitecture: {
      problem: "Commercial habit apps are bloated with ads, expensive subscriptions, and excessive notifications.",
      solution: "Crafted a clean, lightning-fast habit tracking interface focused entirely on friction-free daily updates and visual momentum.",
      metrics: ["Sub-50ms load time", "Zero clutter interface", "Instant habit check-in"],
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
    title: "Visualizing pain indicators through an intelligent interface.",
    description: "A React-based prototype featuring a clinical-style interface for pain indicator visualization.",
    features: [
      "Interactive 2D anatomical body mapping",
      "Severity rating scales (VAS/NRS clinical standards)",
      "Temporal symptom recurrence tracking",
      "Structured summary export for clinician consultations",
      "High-contrast accessible clinical design system"
    ],
    technology: ["React"],
    highlight: "Interactive clinical-grade UI experiment.",
    category: "ai-iot",
    mockupType: "painsense",
    fullArchitecture: {
      problem: "Patients struggle to communicate radiating or intermittent pain accurately to physicians during brief clinical visits.",
      solution: "Engineered a digital anatomical locator where patients tap specific muscle/joint zones, indicate severity, and generate a standardized report.",
      metrics: ["Standardized VAS scale", "Interactive SVG anatomical zones", "Clinician-ready PDF export"],
      stack: [
        { layer: "UI Engine", tools: "React with interactive SVG coordinate mapping" },
        { layer: "State Management", tools: "Client-side Zustand state store" }
      ]
    }
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    title: "Role-Based Access",
    description: "Different users see only the features and information relevant to them.",
    metric: "Granular RLS",
    tag: "Security"
  },
  {
    title: "Scalable Data Handling",
    description: "Applications designed to handle large datasets, including student lists exceeding 14,000 records.",
    metric: "14,000+ Records",
    tag: "Performance"
  },
  {
    title: "Bulk Data Operations",
    description: "Excel imports and exports for convenient onboarding and reporting.",
    metric: "Instant XLSX Parser",
    tag: "Productivity"
  },
  {
    title: "Automated Notifications",
    description: "Email alerts for status changes, reminders and missing submissions.",
    metric: "Zero Dropped Triggers",
    tag: "Automation"
  },
  {
    title: "Payment Integration",
    description: "Licensed payment partners are integrated for payment-related projects. We do not hold customer funds.",
    metric: "PCI-Compliant Gateways",
    tag: "Compliance"
  },
  {
    title: "Staged Delivery",
    description: "Start with a working core and progressively add integrations and advanced features.",
    metric: "Working Core First",
    tag: "Methodology"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    name: "Discover",
    description: "Understand the problem, users and requirements.",
    deliverable: "Problem statement & User workflow audit"
  },
  {
    number: "02",
    name: "Plan",
    description: "Define scope, architecture and milestones.",
    deliverable: "System architecture & Staged delivery roadmap"
  },
  {
    number: "03",
    name: "Develop",
    description: "Build a functional, reliable and user-friendly solution.",
    deliverable: "Tested codebase & Core feature milestones"
  },
  {
    number: "04",
    name: "Deploy",
    description: "Launch the application for real-world usage.",
    deliverable: "Cloud hosting, on-prem setup & user onboarding"
  },
  {
    number: "05",
    name: "Improve",
    description: "Gather feedback and continuously enhance the product.",
    deliverable: "Performance tuning & Feature expansions"
  }
];

export const PROOF_POINTS = [
  {
    stat: "14,000+",
    label: "Student Records Supported",
    description: "Bulk attendance & data ingestion running without hitch."
  },
  {
    stat: "PSG CAS",
    label: "Pilot Launch Partner",
    description: "Centralized department activity tracking at PSG College of Arts & Science."
  },
  {
    stat: "Multi-Platform",
    label: "Android & Web Support",
    description: "Native mobile hardware access with modern web portal synchronization."
  },
  {
    stat: "100%",
    label: "Live Tested Deployment",
    description: "Built and deployed in actual institutional halls, replacing paper ledgers."
  }
];
