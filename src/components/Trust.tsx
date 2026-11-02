import React from 'react';
import { PROOF_POINTS } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

export const Trust: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-700 uppercase mb-3">
            06 // PROVEN RESULTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] font-display leading-tight">
            Real work speaks for itself.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-surface-textMuted max-w-2xl">
            We don't manufacture fabricated reviews or vanity ratings. We let our live software deployments, active pilot partners and data throughput speak for our engineering.
          </p>
        </div>

        {/* Factual Proof Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {PROOF_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-[#EAEAEA] bg-surface-secondary/50 hover:bg-white hover:border-brand-200 transition-all duration-200"
            >
              <div className="text-3xl font-extrabold text-brand-800 font-display mb-1">
                {item.stat}
              </div>
              <div className="text-sm font-semibold text-[#171717] mb-2">
                {item.label}
              </div>
              <p className="text-xs text-surface-textMuted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Real Ground-Level Collaboration Card */}
        <div className="mt-12 p-8 rounded-2xl border border-[#EAEAEA] bg-surface-secondary/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-700">
                  On-The-Ground Pilot Deployments
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#171717] font-display">
                Built alongside department heads, coordinators and student users.
              </h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Whether deploying AttendHub for full campus attendance or piloting IIC Tracker across 24 departments at PSG College of Arts & Science, our team provides in-person onboarding, real-time bug mitigation, and immediate feedback integration.
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-white border border-[#EAEAEA] space-y-3">
              <div className="text-xs font-mono font-semibold text-surface-textMuted uppercase">
                Upcoming Partner Openings
              </div>
              <div className="text-xs text-[#333333] leading-relaxed">
                We onboard 2–3 targeted pilot partners per academic term to ensure hands-on engineering focus.
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-700">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Now accepting Q1/Q2 project scopes</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
