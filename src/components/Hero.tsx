import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Scan, 
  Zap, 
  Flashlight, 
  ShieldCheck,
  Send
} from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContact }) => {
  const [torchActive, setTorchActive] = useState(false);
  const [scannedCount, setScannedCount] = useState(1482);
  const [lastStudent, setLastStudent] = useState({ roll: '23CS108', name: 'N. Vignesh', status: 'Recorded' });
  const [isScanning, setIsScanning] = useState(false);
  const [activeTab, setActiveTab] = useState<'portal' | 'scanner' | 'dual'>('portal');

  const simulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const rolls = ['23CS109', '23IT044', '22BCA091', '24AI012'];
      const names = ['K. Dharshan', 'P. Harini', 'R. Aravind', 'S. Keerthana'];
      const randIdx = Math.floor(Math.random() * rolls.length);
      setLastStudent({
        roll: rolls[randIdx],
        name: names[randIdx],
        status: 'Recorded',
      });
      setScannedCount(prev => prev + 1);
      setIsScanning(false);
    }, 600);
  };

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#EAEAEA]">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60"></div>
      
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-56 bg-brand-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & Hierarchy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100/90 text-xs font-mono font-medium text-brand-800 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
              <span>SOFTWARE DEVELOPMENT STUDIO · COIMBATORE, INDIA</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest text-[#171717] font-display leading-[1.08]">
              Founded by Students. <br />
              <span className="text-brand-700">Built for the Real World.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-[#333333] font-normal leading-relaxed">
              We build practical software that replaces paper registers, scattered spreadsheets and manual workflows.
            </p>

            {/* Additional Text */}
            <p className="text-base text-surface-textMuted leading-relaxed max-w-xl">
              From web applications and mobile apps to intelligent dashboards and automation, we turn everyday problems into working software.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-brand-700 hover:bg-brand-800 rounded-lg transition-all shadow-sm hover:shadow hover:-translate-y-0.5 border border-brand-800"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={onContact}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-[#171717] bg-white hover:bg-surface-secondary rounded-lg transition-all border border-[#EAEAEA] hover:border-[#D1D5DB]"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-surface-textMuted" />
                <span>Let's Talk</span>
              </button>
            </div>

            {/* Proof Tagline */}
            <div className="pt-4 border-t border-[#EAEAEA] flex items-center gap-2.5">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-50 text-brand-700">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-[#171717]">
                Real Products. Real Users. Real Impact.
              </span>
            </div>

            {/* Micro Stats Row */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-surface-secondary border border-[#EAEAEA]">
                <div className="text-xl font-bold font-display text-brand-800">14k+</div>
                <div className="text-xs text-surface-textMuted">Student Records</div>
              </div>
              <div className="p-3 rounded-lg bg-surface-secondary border border-[#EAEAEA]">
                <div className="text-xl font-bold font-display text-brand-800">PSG CAS</div>
                <div className="text-xs text-surface-textMuted">Institutional Pilot</div>
              </div>
              <div className="p-3 rounded-lg bg-surface-secondary border border-[#EAEAEA]">
                <div className="text-xl font-bold font-display text-brand-800">&lt; 100ms</div>
                <div className="text-xs text-surface-textMuted">Scan Response</div>
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Visual Composition */}
          <div className="lg:col-span-6">
            <div className="mx-auto max-w-lg lg:max-w-none space-y-3">
              
              {/* Active Dispatch Notification Bar (Properly aligned with no negative margins) */}
              <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white border border-[#EAEAEA] shadow-subtle text-xs font-medium text-[#171717]">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                  </span>
                  <Send className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                  <span className="font-mono text-[11px] text-surface-textMuted uppercase hidden sm:inline flex-shrink-0">
                    Automation:
                  </span>
                  <span className="font-semibold text-[#171717] truncate">
                    Auto-reminder dispatched to 24 HoDs
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 flex-shrink-0 ml-2">
                  PSG CAS Pilot
                </span>
              </div>

              {/* Main Desktop Dashboard Window Container */}
              <div className="rounded-2xl border border-[#EAEAEA] bg-white shadow-premium overflow-hidden transition-all duration-200">
                
                {/* Browser Window Chrome */}
                <div className="px-3 sm:px-4 py-2.5 bg-surface-secondary border-b border-[#EAEAEA] flex items-center justify-between gap-2">
                  
                  {/* Traffic lights and URL */}
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></span>
                    </div>
                    <span className="text-[11px] font-mono text-surface-textMuted truncate hidden md:inline">
                      {activeTab === 'scanner' ? 'attendhub.psgcas.ac.in' : 'iic-tracker.psgcas.ac.in'}
                    </span>
                  </div>

                  {/* Clean Segmented Tab Controller */}
                  <div className="flex items-center p-0.5 rounded-lg bg-[#EAEAEA]/80 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setActiveTab('portal')}
                      className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                        activeTab === 'portal'
                          ? 'bg-white text-[#171717] shadow-xs font-semibold'
                          : 'text-surface-textMuted hover:text-[#171717]'
                      }`}
                    >
                      Portal
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('scanner')}
                      className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                        activeTab === 'scanner'
                          ? 'bg-white text-[#171717] shadow-xs font-semibold'
                          : 'text-surface-textMuted hover:text-[#171717]'
                      }`}
                    >
                      Scanner
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('dual')}
                      className={`hidden sm:inline-block px-2.5 py-1 rounded-md transition-all font-medium ${
                        activeTab === 'dual'
                          ? 'bg-white text-[#171717] shadow-xs font-semibold'
                          : 'text-surface-textMuted hover:text-[#171717]'
                      }`}
                    >
                      Dual View
                    </button>
                  </div>

                  {/* Live Sync Indicator */}
                  <div className="flex items-center flex-shrink-0">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-brand-50 text-brand-700 border border-brand-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
                      <span className="hidden sm:inline">LIVE SYNC</span>
                    </span>
                  </div>
                </div>

                {/* Tab 1: Institutional Portal View */}
                {activeTab === 'portal' && (
                  <div className="p-4 sm:p-5 space-y-4 bg-white animate-in fade-in duration-150">
                    
                    {/* Top Stats Strip */}
                    <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                      <div className="p-2.5 rounded-lg border border-[#F0F0F0] bg-surface-secondary/70">
                        <div className="text-[11px] text-surface-textMuted">Total Activities</div>
                        <div className="text-lg font-bold text-[#171717] font-display">248</div>
                        <div className="text-[10px] text-brand-700 font-medium truncate">↑ +18 this month</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-[#F0F0F0] bg-surface-secondary/70">
                        <div className="text-[11px] text-surface-textMuted">Departments</div>
                        <div className="text-lg font-bold text-[#171717] font-display">24 / 24</div>
                        <div className="text-[10px] text-brand-700 font-medium truncate">100% Onboarded</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-[#F0F0F0] bg-surface-secondary/70">
                        <div className="text-[11px] text-surface-textMuted">Pending Review</div>
                        <div className="text-lg font-bold text-gold-600 font-display">4</div>
                        <div className="text-[10px] text-surface-textMuted font-mono truncate">Auto-reminded</div>
                      </div>
                    </div>

                    {/* Leaderboard Table Preview */}
                    <div className="border border-[#EAEAEA] rounded-lg overflow-hidden">
                      <div className="px-3 py-2 bg-surface-secondary border-b border-[#EAEAEA] flex items-center justify-between text-xs font-semibold text-surface-textMuted">
                        <span>Department Leaderboard</span>
                        <span className="font-mono text-[10px]">Q4 Ranking</span>
                      </div>
                      <div className="divide-y divide-[#F0F0F0] text-xs">
                        <div className="px-3 py-2.5 flex items-center justify-between hover:bg-surface-secondary/50">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-800 font-bold flex items-center justify-center text-[10px] flex-shrink-0">1</span>
                            <span className="font-medium text-[#171717] truncate">Computer Science & Applications</span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
                            <span className="font-mono text-[11px] text-brand-700 font-semibold">48 acts</span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-brand-50 text-brand-700 border border-brand-100">Top Tier</span>
                          </div>
                        </div>
                        <div className="px-3 py-2.5 flex items-center justify-between hover:bg-surface-secondary/50">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-5 h-5 rounded-full bg-surface-secondary text-[#555] font-bold flex items-center justify-center text-[10px] flex-shrink-0">2</span>
                            <span className="font-medium text-[#171717] truncate">Electronics & Communication</span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
                            <span className="font-mono text-[11px] text-surface-textMuted">41 acts</span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-surface-secondary text-surface-textMuted">Verified</span>
                          </div>
                        </div>
                        <div className="px-3 py-2.5 flex items-center justify-between hover:bg-surface-secondary/50">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-5 h-5 rounded-full bg-surface-secondary text-[#555] font-bold flex items-center justify-center text-[10px] flex-shrink-0">3</span>
                            <span className="font-medium text-[#171717] truncate">Commerce & Management</span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
                            <span className="font-mono text-[11px] text-surface-textMuted">37 acts</span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-surface-secondary text-surface-textMuted">Verified</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Operational Telemetry Footer */}
                    <div className="pt-1 flex flex-wrap items-center justify-between text-[11px] font-mono text-surface-textMuted border-t border-[#F0F0F0]">
                      <span>Supabase PostgreSQL · 64ms Sync</span>
                      <span className="text-brand-700 font-medium">Netlify Edge Serverless</span>
                    </div>

                  </div>
                )}

                {/* Tab 2: AttendHub Mobile Scanner View */}
                {activeTab === 'scanner' && (
                  <div className="p-4 sm:p-5 space-y-3 bg-white animate-in fade-in duration-150">
                    
                    {/* Scanner Sub-Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-[#F0F0F0]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                        <span className="text-xs font-bold text-brand-900 font-display">AttendHub Scanner</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-100">
                          100 FPS Engine
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setTorchActive(!torchActive)}
                        className={`p-1.5 rounded-md text-xs transition-colors flex items-center gap-1 ${
                          torchActive ? 'bg-gold-100 text-gold-700' : 'bg-surface-secondary text-surface-textMuted hover:text-[#171717]'
                        }`}
                        title="Toggle Torch"
                      >
                        <Flashlight className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-mono">{torchActive ? 'On' : 'Torch'}</span>
                      </button>
                    </div>

                    {/* Simulated Viewfinder (Proper proportions and no label collision) */}
                    <div className="relative h-36 bg-[#0F172A] rounded-xl overflow-hidden flex flex-col items-center justify-center border border-slate-700">
                      {/* Laser Scan line */}
                      <div className={`absolute left-0 right-0 h-0.5 bg-emerald-400 shadow-[0_0_8px_#34d399] transition-all duration-300 ${isScanning ? 'top-1/2' : 'top-3 animate-bounce'}`}></div>
                      
                      {/* Reticle Target */}
                      <div className="w-16 h-16 border-2 border-dashed border-emerald-400/80 rounded-lg flex items-center justify-center mb-2">
                        <Scan className="w-7 h-7 text-emerald-400 animate-pulse" />
                      </div>

                      {/* Clean target label with dedicated breathing room */}
                      <div className="text-[9px] font-mono text-emerald-300/90 tracking-wider">
                        ALIGN STUDENT QR / BARCODE
                      </div>

                      {torchActive && (
                        <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30 text-[9px] font-mono">
                          LED Flash Active
                        </div>
                      )}
                    </div>

                    {/* Scan Result Card */}
                    <div className="p-3 rounded-lg bg-brand-50/70 border border-brand-100 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-surface-textMuted uppercase">Latest Verified Record</div>
                        <div className="text-sm font-bold text-brand-900">{lastStudent.name}</div>
                        <div className="text-[10px] text-surface-textMuted font-mono">Roll: {lastStudent.roll} · Hall A-3</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-700 bg-white px-2.5 py-1 rounded-md border border-brand-100">
                        <CheckCircle2 className="w-4 h-4 text-brand-600" />
                        <span>{lastStudent.status}</span>
                      </div>
                    </div>

                    {/* Interactive Action Controls */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="text-xs font-mono text-[#555]">
                        Scanned Today: <span className="font-bold text-[#171717]">{scannedCount}</span>
                      </div>
                      <button
                        type="button"
                        onClick={simulateScan}
                        disabled={isScanning}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-brand-700 hover:bg-brand-800 rounded-md transition-colors disabled:opacity-50 shadow-xs"
                      >
                        <Zap className="w-3.5 h-3.5 text-gold-300" />
                        <span>{isScanning ? 'Reading barcode...' : 'Simulate Scan'}</span>
                      </button>
                    </div>

                  </div>
                )}

                {/* Tab 3: Dual View (Split Bento Layout - Perfectly Aligned, No Overlap) */}
                {activeTab === 'dual' && (
                  <div className="p-4 sm:p-5 bg-white animate-in fade-in duration-150">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-stretch">
                      
                      {/* Left Sub-Card: Institutional Portal Summary */}
                      <div className="p-3 rounded-xl border border-[#EAEAEA] bg-surface-secondary/40 space-y-3 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-1.5 border-b border-[#EAEAEA] mb-2.5">
                            <span className="text-[11px] font-bold text-[#171717]">PSG CAS Central Portal</span>
                            <span className="text-[9px] font-mono text-brand-700 font-semibold bg-brand-50 px-1.5 py-0.5 rounded">24 Depts</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-center mb-3">
                            <div className="p-2 rounded-lg bg-white border border-[#EAEAEA]">
                              <div className="text-[10px] text-surface-textMuted">Activities</div>
                              <div className="text-base font-bold text-[#171717]">248</div>
                            </div>
                            <div className="p-2 rounded-lg bg-white border border-[#EAEAEA]">
                              <div className="text-[10px] text-surface-textMuted">Coverage</div>
                              <div className="text-base font-bold text-brand-700">100%</div>
                            </div>
                          </div>
                          <div className="space-y-1.5 text-[11px]">
                            <div className="p-1.5 rounded bg-white border border-[#EAEAEA] flex items-center justify-between">
                              <span className="truncate">#1 Dept. Computer Science</span>
                              <span className="font-mono font-bold text-brand-700 ml-1">48</span>
                            </div>
                            <div className="p-1.5 rounded bg-white border border-[#EAEAEA] flex items-center justify-between">
                              <span className="truncate">#2 Dept. Electronics</span>
                              <span className="font-mono text-surface-textMuted ml-1">41</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-surface-textMuted pt-2 border-t border-[#EAEAEA]">
                          ✓ Auto-dispatch verified
                        </div>
                      </div>

                      {/* Right Sub-Card: Mobile Scanner Preview */}
                      <div className="p-3 rounded-xl border border-[#EAEAEA] bg-surface-secondary/40 space-y-2.5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-1.5 border-b border-[#EAEAEA] mb-2">
                            <span className="text-[11px] font-bold text-[#171717]">AttendHub Mobile</span>
                            <span className="text-[9px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">100 FPS</span>
                          </div>
                          <div className="h-20 bg-[#0F172A] rounded-lg border border-slate-700 flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="w-10 h-10 border border-dashed border-emerald-400 rounded flex items-center justify-center">
                              <Scan className="w-5 h-5 text-emerald-400 animate-pulse" />
                            </div>
                            <div className="text-[8px] font-mono text-emerald-300 mt-1">ALIGN BARCODE</div>
                          </div>
                          <div className="mt-2 p-2 rounded bg-white border border-[#EAEAEA] text-[10px]">
                            <div className="font-semibold text-brand-900">{lastStudent.name}</div>
                            <div className="text-surface-textMuted font-mono">Roll: {lastStudent.roll}</div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={simulateScan}
                          disabled={isScanning}
                          className="w-full py-1.5 text-[11px] font-semibold text-white bg-brand-700 hover:bg-brand-800 rounded-md transition-colors"
                        >
                          {isScanning ? 'Scanning...' : 'Simulate Scan (+1)'}
                        </button>
                      </div>

                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
