export interface Project {
  id: string;
  name: string;
  status: 'LIVE' | 'PILOT LAUNCH' | 'IN DEVELOPMENT' | 'BUILT' | 'PROTOTYPE' | 'CONCEPT';
  title: string;
  description: string;
  features: string[];
  technology: string[];
  highlight?: string;
  category: 'all' | 'live' | 'web-mobile' | 'ai-iot';
  mockupType: 'groveil' | 'attendhub' | 'iic' | 'nutri360' | 'vision' | 'dailytarget' | 'painsense';
  fullArchitecture?: {
    problem: string;
    solution: string;
    metrics: string[];
    stack: { layer: string; tools: string }[];
  };
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface CapabilityItem {
  title: string;
  description: string;
  metric: string;
  tag: string;
}

export interface ProcessStep {
  number: string;
  name: string;
  description: string;
  deliverable: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
  timeline?: string;
}
