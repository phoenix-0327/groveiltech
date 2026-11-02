import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Clock, 
  AlertCircle, 
  Download,
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data/content';

interface ContactProps {
  initialProjectType?: string;
  initialDescription?: string;
}

export const Contact: React.FC<ContactProps> = ({
  initialProjectType = '',
  initialDescription = '',
}) => {
  const projectTypes = [
    'Website',
    'Web Application',
    'Mobile App',
    'Dashboard',
    'Automation',
    'Custom Software',
    'Other'
  ];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>(
    initialProjectType ? [initialProjectType] : ['Web Application']
  );
  const [customProjectType, setCustomProjectType] = useState('');
  const [description, setDescription] = useState(initialDescription || '');
  const [timeline, setTimeline] = useState('Core MVP (2–4 weeks)');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<any>(null);

  useEffect(() => {
    if (initialProjectType) {
      setSelectedProjectTypes([initialProjectType]);
    }
    if (initialDescription) {
      setDescription(initialDescription);
    }
  }, [initialProjectType, initialDescription]);

  const toggleProjectType = (type: string) => {
    setSelectedProjectTypes((prev) => {
      if (prev.includes(type)) {
        return prev.filter((t) => t !== type);
      } else {
        return [...prev, type];
      }
    });
    // Clear validation error if user selects an option
    if (errors.projectType) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.projectType;
        return next;
      });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please provide your full name.';
    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!company.trim()) errs.company = 'Please enter your institution or organisation name.';
    if (selectedProjectTypes.length === 0) {
      errs.projectType = 'Please select at least one project type.';
    }
    if (!description.trim()) {
      errs.description = 'Please tell us a few details about your problem or workflow.';
    } else if (description.trim().length < 15) {
      errs.description = 'Please provide at least 15 characters describing what you need built.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const formattedTypes = selectedProjectTypes
      .map((t) => (t === 'Other' && customProjectType.trim() ? `Other (${customProjectType.trim()})` : t))
      .join(', ');

    // Simulate backend integration / payload preparation
    const payload = {
      fullName,
      email,
      company,
      projectType: formattedTypes,
      projectTypes: selectedProjectTypes,
      description,
      timeline,
      timestamp: new Date().toISOString(),
      studioLocation: COMPANY_INFO.location,
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionData(payload);
    }, 800);
  };

  const handleDownloadSummary = () => {
    if (!submissionData) return;
    const content = `GROVEIL SOFTWARE STUDIO — PROJECT INQUIRY SUMMARY
Date: ${new Date().toLocaleDateString()}
Contact Name: ${submissionData.fullName}
Email: ${submissionData.email}
Organisation: ${submissionData.company}
Project Category: ${submissionData.projectType}
Preferred Timeline: ${submissionData.timeline}

Project Description:
${submissionData.description}

Next Step: Groveil engineering team will review requirements and reach out within 24 hours with architecture proposal and staged delivery plan.
Location: Coimbatore, Tamil Nadu, India | ${COMPANY_INFO.email}
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `groveil-inquiry-${submissionData.fullName.toLowerCase().replace(/\s+/g, '-')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#F7F8FA] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-700 uppercase mb-3">
            07 // CONTACT & COLLABORATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] font-display leading-tight">
            Have something worth building?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-textMuted max-w-2xl leading-relaxed">
            Tell us about your idea, your business and the people who will use it. We'll come back with a clear scope and a staged development plan.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-14 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAEAEA] shadow-sm">
            
            {isSubmitted ? (
              <div className="py-8 space-y-6 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#171717] font-display">
                    Project Brief Received
                  </h3>
                  <p className="mt-2 text-sm text-surface-textMuted max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-[#171717]">{submissionData?.fullName}</span>. Our student engineering team in Coimbatore will review your requirements and respond within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-secondary border border-[#EAEAEA] text-left text-xs space-y-2 max-w-md mx-auto font-mono">
                  <div className="flex justify-between text-surface-textMuted">
                    <span>Organisation:</span>
                    <span className="font-semibold text-[#171717]">{submissionData?.company}</span>
                  </div>
                  <div className="flex justify-between text-surface-textMuted">
                    <span>Selected Type:</span>
                    <span className="font-semibold text-brand-700">{submissionData?.projectType}</span>
                  </div>
                  <div className="flex justify-between text-surface-textMuted">
                    <span>Estimated Staging:</span>
                    <span className="font-semibold text-[#171717]">{submissionData?.timeline}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleDownloadSummary}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-secondary hover:bg-[#EAEAEA] border border-[#EAEAEA] text-xs font-semibold text-[#171717] transition-colors"
                  >
                    <Download className="w-4 h-4 text-surface-textMuted" />
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
                    className="text-xs font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="text-xs font-mono text-surface-textMuted uppercase tracking-wider mb-2">
                  Project Inquiry Form
                </div>

                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sridhar Raman"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#EAEAEA]'
                      } focus:outline-none focus:ring-1 focus:ring-brand-600 focus:border-brand-600 transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-[11px] text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#EAEAEA]'
                      } focus:outline-none focus:ring-1 focus:ring-brand-600 focus:border-brand-600 transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company / Organisation */}
                <div>
                  <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                    Company / Organisation <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. PSG CAS / Coimbatore Tech Hub"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.company ? 'border-rose-400 bg-rose-50/20' : 'border-[#EAEAEA]'
                    } focus:outline-none focus:ring-1 focus:ring-brand-600 focus:border-brand-600 transition-colors`}
                  />
                  {errors.company && (
                    <p className="mt-1 text-[11px] text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.company}
                    </p>
                  )}
                </div>

                {/* Project Type Picker (Multi-Select: N options supported) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-semibold text-[#171717]">
                      Project Type <span className="text-rose-500">*</span>
                      <span className="text-[11px] font-normal text-surface-textMuted ml-1.5">(Select one or more)</span>
                    </label>
                    {selectedProjectTypes.length > 1 && (
                      <span className="text-[10px] font-mono font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-100">
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
                              ? 'bg-brand-700 text-white border-brand-800 shadow-xs'
                              : 'bg-surface-secondary text-[#404040] border-[#EAEAEA] hover:border-[#D1D5DB] hover:bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-white" />}
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
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#EAEAEA] focus:outline-none focus:ring-1 focus:ring-brand-600 focus:border-brand-600 bg-white"
                      />
                    </div>
                  )}

                  {errors.projectType && (
                    <p className="mt-1 text-[11px] text-rose-600">{errors.projectType}</p>
                  )}
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                    Project Description <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your current manual process (e.g. paper attendance, spreadsheet collation) and what software you'd like us to build..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.description ? 'border-rose-400 bg-rose-50/20' : 'border-[#EAEAEA]'
                    } focus:outline-none focus:ring-1 focus:ring-brand-600 focus:border-brand-600 transition-colors`}
                  ></textarea>
                  {errors.description && (
                    <p className="mt-1 text-[11px] text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.description}
                    </p>
                  )}
                </div>

                {/* Staged Delivery Preference */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-[#171717] mb-1.5">
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
                            ? 'bg-brand-50 border-brand-200 text-brand-900 font-semibold'
                            : 'bg-surface-secondary border-[#EAEAEA] text-surface-textMuted hover:bg-white'
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
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm transition-all shadow-sm hover:shadow active:scale-[0.99] disabled:opacity-50 border border-brand-800"
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
                  <div className="text-center text-[11px] text-surface-textMuted mt-2.5 font-mono">
                    Zero spam · Strict confidentiality · Direct response from developers
                  </div>
                </div>
              </form>
            )}

          </div>

          {/* Right: Studio Coordinates & Ground Reality */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio Info Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#EAEAEA] shadow-sm space-y-5">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-700">
                Official Studio Inquiries
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface-secondary text-brand-700 border border-[#EAEAEA]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-surface-textMuted font-mono">General & Project Inquiries</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-[#171717] hover:text-brand-700 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface-secondary text-brand-700 border border-[#EAEAEA]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-surface-textMuted font-mono">Location</div>
                    <div className="font-semibold text-[#171717]">
                      {COMPANY_INFO.location}
                    </div>
                    <div className="text-xs text-surface-textMuted">Tamil Nadu, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface-secondary text-brand-700 border border-[#EAEAEA]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-surface-textMuted font-mono">Response Window</div>
                    <div className="font-semibold text-[#171717]">Within 24 Hours</div>
                    <div className="text-xs text-surface-textMuted">Mon – Sat (IST)</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAEAEA] flex items-center justify-between text-xs text-surface-textMuted">
                <span>Official Channels:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded bg-surface-secondary hover:text-[#171717] hover:bg-[#EAEAEA] transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded bg-surface-secondary hover:text-[#171717] hover:bg-[#EAEAEA] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Why Contact a Student Team Card */}
            <div className="p-6 rounded-2xl bg-brand-50 border border-brand-100 space-y-3">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-800">
                The Student Studio Advantage
              </div>
              <p className="text-xs text-brand-900 leading-relaxed">
                You work directly with the developers writing the code. No layers of non-technical account managers, no inflated corporate retainer fees. Direct engineering, rapid prototypes, and continuous on-the-ground support.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
