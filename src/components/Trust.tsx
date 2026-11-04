import React from 'react';
import { PROOF_POINTS, COMPANY_INFO } from '../data/content';
import { ShieldCheck } from 'lucide-react';

export const Trust: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0A0A0A] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase mb-3">
            06 // PROVEN RESULTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-tight">
            Built beyond the drawing board.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3A3A3] max-w-2xl leading-relaxed">
            We don't manufacture fabricated reviews or vanity ratings. We let our live software deployments, active pilot partners and real data throughput speak for our engineering standard.
          </p>
        </div>

        {/* Factual Proof Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {PROOF_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl border border-[#262626] bg-[#121212] hover:bg-[#161616] hover:border-brand-500/50 transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-500 font-display mb-1.5 tracking-tight">
                {item.stat}
              </div>
              <div className="text-sm font-semibold text-white mb-2 font-display">
                {item.label}
              </div>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Real Ground-Level Collaboration Card */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl border border-[#262626] bg-[#121212]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-500">
                  On-The-Ground Pilot Deployments
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Built alongside department heads, coordinators and staff users.
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                Whether deploying AttendHub for full campus attendance or piloting IIC Tracker across 24 departments at PSG College of Arts & Science, our Coimbatore engineering team provides direct on-site setup, operational tuning, and rapid feedback integration.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-[#181818] border border-[#262626] space-y-3.5 shadow-xs">
              <div className="text-xs font-mono font-semibold text-[#737373] uppercase tracking-wider flex items-center justify-between">
                <span>Studio Capacity</span>
                <span className="text-brand-500 font-mono text-[11px] font-bold">2–3 Scopes</span>
              </div>
              <div className="text-xs text-[#A3A3A3] leading-relaxed">
                We intentionally limit active engagements to ensure dedicated engineering attention, direct founder communication, and rock-solid delivery.
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-white border-t border-[#262626]">
                <ShieldCheck className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <span className="text-brand-500">{COMPANY_INFO.pilotAvailability}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
