import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/content';
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Download, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface SubmissionData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
  timeline: string;
  submittedAt: string;
}

interface ContactProps {
  initialProjectType?: string;
  initialDescription?: string;
}

export const Contact: React.FC<ContactProps> = ({
  initialProjectType = '',
  initialDescription = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  // Multi-select state: array of selected project types
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>(['Web Application']);
  const [customProjectType, setCustomProjectType] = useState('');
  const [description, setDescription] = useState('');
  const [timeline, setTimeline] = useState('Core MVP (2–4 weeks)');
  
  useEffect(() => {
    if (initialProjectType) {
      setSelectedProjectTypes([initialProjectType]);
    }
  }, [initialProjectType]);

  useEffect(() => {
    if (initialDescription) {
      setDescription(initialDescription);
    }
  }, [initialDescription]);
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<SubmissionData | null>(null);
  const [generatedMailtoUrl, setGeneratedMailtoUrl] = useState('');

  const projectTypes = [
    'Web Application',
    'Mobile Application',
    'Administrative Portal',
    'Hardware & Telemetry',
    'Automation & Scripting',
    'Database Migration',
    'Other'
  ];

  const toggleProjectType = (type: string) => {
    if (selectedProjectTypes.includes(type)) {
      if (selectedProjectTypes.length > 1) {
        setSelectedProjectTypes(selectedProjectTypes.filter(t => t !== type));
      }
    } else {
      setSelectedProjectTypes([...selectedProjectTypes, type]);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!company.trim()) newErrors.company = 'Please enter your organisation / company';
    if (selectedProjectTypes.length === 0) newErrors.projectType = 'Please select at least one project type';
    if (selectedProjectTypes.includes('Other') && !customProjectType.trim()) {
      newErrors.projectType = 'Please specify the project type in the text box below';
    }
    if (!description.trim() || description.trim().length < 15) {
      newErrors.description = 'Please provide at least a brief sentence (15+ characters) describing the problem or scope';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const resolvedTypes = selectedProjectTypes.map(t => (t === 'Other' && customProjectType.trim() ? `Other (${customProjectType.trim()})` : t)).join(', ');

    const payload: SubmissionData = {
      fullName,
      email,
      company,
      projectType: resolvedTypes,
      description,
      timeline,
      submittedAt: new Date().toISOString()
    };

    const subject = encodeURIComponent(`Project Inquiry: ${company} — ${resolvedTypes}`);
    const emailBody = encodeURIComponent(`Hello GROVEIL Software Studio,

I would like to inquire about a software development engagement.

CLIENT DETAILS:
- Full Name: ${fullName}
- Contact Email: ${email}
- Company / Organisation: ${company}

PROJECT SCOPE:
- Required Service(s): ${resolvedTypes}
- Target Timeline: ${timeline}

REQUIREMENT OVERVIEW:
${description}

---
Sent via Groveil Website Inquiry Form`);

    const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${emailBody}`;
    setGeneratedMailtoUrl(mailtoUrl);

    // Trigger direct mailto link
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionData(payload);
    }, 400);
  };

  const handleDownloadSummary = () => {
    if (!submissionData) return;
    const content = `=====================================================
GROVEIL SOFTWARE STUDIO — PROJECT INQUIRY BRIEF
=====================================================
Date: ${new Date(submissionData.submittedAt).toLocaleString()}
Coimbatore Software Studio · Tamil Nadu, India
Contact: ${COMPANY_INFO.email}

CLIENT DETAILS:
- Full Name: ${submissionData.fullName}
- Email: ${submissionData.email}
- Organisation: ${submissionData.company}

PROJECT SCOPE:
- Project Type(s): ${submissionData.projectType}
- Target Milestones: ${submissionData.timeline}

REQUIREMENT DESCRIPTION:
${submissionData.description}

ENGINEERING COMMITMENT:
- 100% clean source code ownership upon delivery
- Direct founder/developer communication
- Rapid prototype demo within 14–21 business days
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Groveil_Project_Brief_${submissionData.company.replace(/\s+/g, '_')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase mb-3">
            07 // CONTACT & COLLABORATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-tight">
            Have something worth building?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3A3A3] max-w-2xl leading-relaxed">
            Tell us about your idea, your organisation and the problem you want to solve. We'll come back with a clear architecture scope and a staged delivery plan.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-14 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-[#121212] p-6 sm:p-8 rounded-2xl border border-[#262626] shadow-sm">
            
            {isSubmitted ? (
              <div className="py-8 space-y-6 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#1E110A] text-brand-500 flex items-center justify-center mx-auto border border-brand-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Project Brief Received
                  </h3>
                  <p className="mt-2 text-sm text-[#A3A3A3] max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-white">{submissionData?.fullName}</span>. Our engineering team in Coimbatore will review your requirements and respond within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#181818] border border-[#262626] text-left text-xs space-y-2 max-w-md mx-auto font-mono">
                  <div className="flex justify-between text-[#737373]">
                    <span>Organisation:</span>
                    <span className="font-semibold text-white">{submissionData?.company}</span>
                  </div>
                  <div className="flex justify-between text-[#737373]">
                    <span>Selected Type:</span>
                    <span className="font-semibold text-brand-500">{submissionData?.projectType}</span>
                  </div>
                  <div className="flex justify-between text-[#737373]">
                    <span>Estimated Staging:</span>
                    <span className="font-semibold text-white">{submissionData?.timeline}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  {generatedMailtoUrl && (
                    <a
                      href={generatedMailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-500 hover:bg-[#FF6B1A] text-black font-bold text-xs transition-all shadow-sm active:scale-[0.98]"
                    >
                      <Mail className="w-4 h-4 text-black" />
                      <span>Open in Email App</span>
                    </a>
                  )}

                  <button
                    onClick={handleDownloadSummary}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#181818] hover:bg-[#222] border border-[#262626] text-xs font-semibold text-white transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#A3A3A3]" />
                    <span>Download Project Summary (.txt)</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setEmail('');
                      setCompany('');
                      setDescription('');
                      setSelectedProjectTypes(['Web Application']);
                      setCustomProjectType('');
                    }}
                    className="text-xs font-semibold text-brand-500 hover:text-brand-400 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="text-xs font-mono text-[#737373] uppercase tracking-wider mb-2">
                  Project Inquiry Form
                </div>

                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      Full Name <span className="text-brand-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sridhar Raman"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#0A0A0A] text-white placeholder-[#555] border ${
                        errors.fullName ? 'border-rose-500 bg-rose-950/20' : 'border-[#262626]'
                      } focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      Email Address <span className="text-brand-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#0A0A0A] text-white placeholder-[#555] border ${
                        errors.email ? 'border-rose-500 bg-rose-950/20' : 'border-[#262626]'
                      } focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company / Organisation */}
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    Company / Organisation <span className="text-brand-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. PSG CAS / Coimbatore Tech Hub"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#0A0A0A] text-white placeholder-[#555] border ${
                      errors.company ? 'border-rose-500 bg-rose-950/20' : 'border-[#262626]'
                    } focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-colors`}
                  />
                  {errors.company && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.company}
                    </p>
                  )}
                </div>

                {/* Project Type Picker (Multi-Select: N options supported) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-semibold text-white">
                      Project Type <span className="text-brand-500">*</span>
                      <span className="text-[11px] font-normal text-[#737373] ml-1.5">(Select one or more)</span>
                    </label>
                    {selectedProjectTypes.length > 1 && (
                      <span className="text-[10px] font-mono font-semibold text-brand-500 bg-[#1E110A] px-2 py-0.5 rounded border border-brand-500/30">
                        {selectedProjectTypes.length} selected
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = selectedProjectTypes.includes(type);
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => toggleProjectType(type)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                            isSelected
                              ? 'bg-brand-500 text-black font-bold border-brand-500 shadow-sm'
                              : 'bg-[#181818] text-[#A3A3A3] border-[#262626] hover:border-[#383838] hover:text-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-black stroke-[3]" />}
                          <span>{type}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Optional custom input if "Other" is chosen */}
                  {selectedProjectTypes.includes('Other') && (
                    <div className="mt-2.5 animate-in fade-in duration-150">
                      <input
                        type="text"
                        value={customProjectType}
                        onChange={(e) => setCustomProjectType(e.target.value)}
                        placeholder="Please specify other project type (e.g. AI Agent, IoT Gateway, Robotics)..."
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#262626] bg-[#0A0A0A] text-white placeholder-[#555] focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500"
                      />
                    </div>
                  )}

                  {errors.projectType && (
                    <p className="mt-1 text-[11px] text-rose-400">{errors.projectType}</p>
                  )}
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    Project Description <span className="text-brand-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your current manual process (e.g. paper attendance, spreadsheet collation) and what software you'd like us to build..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-[#0A0A0A] text-white placeholder-[#555] border ${
                      errors.description ? 'border-rose-500 bg-rose-950/20' : 'border-[#262626]'
                    } focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-colors`}
                  ></textarea>
                  {errors.description && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.description}
                    </p>
                  )}
                </div>

                {/* Staged Delivery Preference */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    Target Development Milestones
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'Core MVP (2–4 weeks)',
                      'Full Pilot (4–8 weeks)',
                      'Long-Term Retainer'
                    ].map((timeOption) => (
                      <button
                        type="button"
                        key={timeOption}
                        onClick={() => setTimeline(timeOption)}
                        className={`p-2 rounded-lg text-xs font-medium border text-left transition-colors ${
                          timeline === timeOption
                            ? 'bg-[#1E110A] border-brand-500/50 text-brand-500 font-semibold'
                            : 'bg-[#181818] border-[#262626] text-[#A3A3A3] hover:text-white hover:border-[#383838]'
                        }`}
                      >
                        {timeOption}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-brand-500 hover:bg-[#FF6B1A] text-black font-bold text-sm transition-all shadow-sm active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Start a Conversation</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                  <div className="text-center text-[11px] text-[#737373] mt-2.5 font-mono">
                    Direct mailto · Opens pre-filled email to groveiltechnology@gmail.com · Zero spam
                  </div>
                </div>
              </form>
            )}

          </div>

          {/* Right: Studio Coordinates & Ground Reality */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio Info Card */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-[#262626] shadow-sm space-y-5">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-500">
                Official Studio Inquiries
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#181818] text-brand-500 border border-[#262626]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#737373] font-mono">General & Project Inquiries</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-white hover:text-brand-500 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#181818] text-brand-500 border border-[#262626]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#737373] font-mono">Location</div>
                    <div className="font-semibold text-white">
                      {COMPANY_INFO.location}
                    </div>
                    <div className="text-xs text-[#A3A3A3]">Tamil Nadu, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#181818] text-brand-500 border border-[#262626]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#737373] font-mono">Response Window</div>
                    <div className="font-semibold text-white">Within 24 Hours</div>
                    <div className="text-xs text-[#A3A3A3]">Mon – Sat (IST)</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-[#737373]">
                <span>Official Channels:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-[#181818] hover:text-white hover:border-brand-500/50 border border-[#262626] text-[#A3A3A3] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-[#181818] hover:text-white hover:border-brand-500/50 border border-[#262626] text-[#A3A3A3] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* The Studio Advantage Card */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-[#262626] space-y-3">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                The Groveil Advantage
              </div>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                You work directly with the developers writing the code. No layers of non-technical account managers, no inflated corporate retainer fees. Direct engineering, rapid prototypes, and continuous on-the-ground support.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
