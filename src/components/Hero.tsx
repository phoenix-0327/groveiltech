import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Scan, 
  Zap, 
  Flashlight, 
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
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#262626] bg-[#0A0A0A]">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40"></div>
      
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-56 bg-brand-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & Hierarchy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono font-medium text-brand-500 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span>SOFTWARE DEVELOPMENT STUDIO · COIMBATORE, INDIA</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest text-white font-display leading-[1.08]">
              Built for the <br />
              <span className="text-brand-500">Real World.</span>
            </h1>

            {/* Subtle Tagline */}
            <div className="text-xs font-mono text-[#FACC15] font-semibold tracking-wider uppercase">
              “The Invisible Shield All Over The Field”
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#E5E5E5] font-normal leading-relaxed">
              We build practical software that replaces paper registers, scattered spreadsheets and manual workflows.
            </p>

            {/* Secondary Description */}
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-xl">
              From intelligent dashboards and mobile applications to automation and connected hardware, we transform everyday problems into dependable digital products.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-black bg-brand-500 hover:bg-[#FF6B1A] rounded-lg transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={onContact}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#141414] hover:bg-[#1C1C1C] rounded-lg transition-all border border-[#262626] hover:border-[#383838]"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-[#A3A3A3]" />
                <span>Let's Talk</span>
              </button>
            </div>

            {/* Micro Stats Row */}
            <div className="pt-4 border-t border-[#262626]">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#121212] border border-[#262626]">
                  <div className="text-xl sm:text-2xl font-bold font-display text-brand-500">14K+</div>
                  <div className="text-[11px] text-[#A3A3A3] font-mono">Student Records</div>
                </div>
                <div className="p-3 rounded-xl bg-[#121212] border border-[#262626]">
                  <div className="text-xl sm:text-2xl font-bold font-display text-brand-500">24</div>
                  <div className="text-[11px] text-[#A3A3A3] font-mono">Departments in Pilot</div>
                </div>
                <div className="p-3 rounded-xl bg-[#121212] border border-[#262626]">
                  <div className="text-xl sm:text-2xl font-bold font-display text-brand-500">&lt; 100ms</div>
                  <div className="text-[11px] text-[#A3A3A3] font-mono">Reported Scan Response</div>
                </div>
              </div>
              <div className="mt-2 text-[10px] text-[#737373] font-mono">
                * Operational measurements from active campus pilot deployments.
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Visual Composition */}
          <div className="lg:col-span-6">
            <div className="mx-auto max-w-lg lg:max-w-none space-y-3">
              
              {/* Active Dispatch Notification Bar (Properly aligned with no negative margins) */}
              <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#141414] border border-[#262626] shadow-xl text-xs font-medium text-white">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                  </span>
                  <Send className="w-3.5 h-3.5 text-[#FACC15] flex-shrink-0" />
                  <span className="font-semibold text-[#E5E5E5] truncate">
                    Auto-reminder dispatched to 24 HoDs · PSG CAS Pilot
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-brand-500 bg-[#1E110A] px-2 py-0.5 rounded border border-brand-500/30 flex-shrink-0 ml-2">
                  Live Dispatch
                </span>
              </div>

              {/* Main Desktop Dashboard Window Container */}
              <div className="rounded-2xl border border-[#262626] bg-[#0E0E0E] shadow-2xl overflow-hidden transition-all duration-200">
                
                {/* Browser Window Chrome */}
                <div className="px-3 sm:px-4 py-2.5 bg-[#161616] border-b border-[#262626] flex items-center justify-between gap-2">
                  
                  {/* Traffic lights and URL */}
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
                    </div>
                    <span className="text-[11px] font-mono text-[#A3A3A3] truncate hidden md:inline">
                      {activeTab === 'scanner' ? 'attendhub.psgcas.ac.in' : 'iic-tracker.psgcas.ac.in'}
                    </span>
                  </div>

                  {/* Clean Segmented Tab Controller: PORTAL | SCANNER | DUAL */}
                  <div className="flex items-center p-0.5 rounded-lg bg-[#0A0A0A] border border-[#262626] text-[11px] font-mono font-semibold">
                    <button
                      type="button"
                      onClick={() => setActiveTab('portal')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'portal'
                          ? 'bg-brand-500 text-black font-bold shadow-xs'
                          : 'text-[#A3A3A3] hover:text-white'
                      }`}
                    >
                      PORTAL
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('scanner')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'scanner'
                          ? 'bg-brand-500 text-black font-bold shadow-xs'
                          : 'text-[#A3A3A3] hover:text-white'
                      }`}
                    >
                      SCANNER
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('dual')}
                      className={`hidden sm:inline-block px-3 py-1 rounded-md transition-all ${
                        activeTab === 'dual'
                          ? 'bg-brand-500 text-black font-bold shadow-xs'
                          : 'text-[#A3A3A3] hover:text-white'
                      }`}
                    >
                      DUAL
                    </button>
                  </div>

                  {/* Live Sync Indicator */}
                  <div className="flex items-center flex-shrink-0">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#141414] text-[#22C55E] border border-[#22C55E]/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse"></span>
                      <span className="hidden sm:inline">LIVE SYNC</span>
                    </span>
                  </div>
                </div>

                {/* Tab 1: Institutional Portal View */}
                {activeTab === 'portal' && (
                  <div className="p-4 sm:p-5 space-y-4 bg-[#0E0E0E] animate-in fade-in duration-150">
                    
                    {/* Top Stats Strip */}
                    <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                      <div className="p-2.5 rounded-lg border border-[#262626] bg-[#141414]">
                        <div className="text-[11px] text-[#A3A3A3]">Total Activities</div>
                        <div className="text-lg font-bold text-white font-display">248</div>
                        <div className="text-[10px] text-brand-500 font-medium truncate">↑ +18 this month</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-[#262626] bg-[#141414]">
                        <div className="text-[11px] text-[#A3A3A3]">Departments</div>
                        <div className="text-lg font-bold text-white font-display">24 / 24</div>
                        <div className="text-[10px] text-brand-500 font-medium truncate">100% Onboarded</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-[#262626] bg-[#141414]">
                        <div className="text-[11px] text-[#A3A3A3]">Pending Review</div>
                        <div className="text-lg font-bold text-[#FACC15] font-display">4</div>
                        <div className="text-[10px] text-[#737373] font-mono truncate">Auto-reminded</div>
                      </div>
                    </div>

                    {/* Leaderboard Table Preview */}
                    <div className="border border-[#262626] rounded-lg overflow-hidden bg-[#101010]">
                      <div className="px-3 py-2 bg-[#161616] border-b border-[#262626] flex items-center justify-between text-xs font-semibold text-[#A3A3A3]">
                        <span>Department Leaderboard</span>
                        <span className="font-mono text-[10px]">Q4 Ranking</span>
                      </div>
                      <div className="divide-y divide-[#262626] text-xs">
                        <div className="px-3 py-2.5 flex items-center justify-between hover:bg-[#181818]">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-5 h-5 rounded-full bg-brand-500 text-black font-bold flex items-center justify-center text-[10px] flex-shrink-0">1</span>
                            <span className="font-medium text-white truncate">Computer Science & Applications</span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
                            <span className="font-mono text-[11px] text-brand-500 font-semibold">48 acts</span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#1E110A] text-brand-500 border border-brand-500/30">Top Tier</span>
                          </div>
                        </div>
                        <div className="px-3 py-2.5 flex items-center justify-between hover:bg-[#181818]">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-5 h-5 rounded-full bg-[#262626] text-[#A3A3A3] font-bold flex items-center justify-center text-[10px] flex-shrink-0">2</span>
                            <span className="font-medium text-[#D4D4D4] truncate">Electronics & Communication</span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
                            <span className="font-mono text-[11px] text-[#A3A3A3]">41 acts</span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#161616] text-[#A3A3A3]">Verified</span>
                          </div>
                        </div>
                        <div className="px-3 py-2.5 flex items-center justify-between hover:bg-[#181818]">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-5 h-5 rounded-full bg-[#262626] text-[#A3A3A3] font-bold flex items-center justify-center text-[10px] flex-shrink-0">3</span>
                            <span className="font-medium text-[#D4D4D4] truncate">Commerce & Management</span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
                            <span className="font-mono text-[11px] text-[#A3A3A3]">37 acts</span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#161616] text-[#A3A3A3]">Verified</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Operational Telemetry Footer */}
                    <div className="pt-1 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#737373] border-t border-[#262626]">
                      <span>Supabase PostgreSQL · 64ms Sync</span>
                      <span className="text-brand-500 font-medium">Netlify Edge Serverless</span>
                    </div>

                  </div>
                )}

                {/* Tab 2: AttendHub Mobile Scanner View */}
                {activeTab === 'scanner' && (
                  <div className="p-4 sm:p-5 space-y-3 bg-[#0E0E0E] animate-in fade-in duration-150">
                    
                    {/* Scanner Sub-Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-[#262626]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        <span className="text-xs font-bold text-white font-display">AttendHub Scanner</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1E110A] text-brand-500 border border-brand-500/30">
                          100 FPS Engine
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setTorchActive(!torchActive)}
                        className={`p-1.5 rounded-md text-xs transition-colors flex items-center gap-1 ${
                          torchActive ? 'bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/40' : 'bg-[#161616] text-[#A3A3A3] hover:text-white'
                        }`}
                        title="Toggle Torch"
                      >
                        <Flashlight className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-mono">{torchActive ? 'On' : 'Torch'}</span>
                      </button>
                    </div>

                    {/* Simulated Viewfinder */}
                    <div className="relative h-36 bg-black rounded-xl overflow-hidden flex flex-col items-center justify-center border border-[#262626]">
                      {/* Laser Scan line */}
                      <div className={`absolute left-0 right-0 h-0.5 bg-brand-500 shadow-[0_0_12px_#FF5500] transition-all duration-300 ${isScanning ? 'top-1/2' : 'top-3 animate-bounce'}`}></div>
                      
                      {/* Reticle Target */}
                      <div className="w-16 h-16 border-2 border-dashed border-brand-500/80 rounded-lg flex items-center justify-center mb-2">
                        <Scan className="w-7 h-7 text-brand-500 animate-pulse" />
                      </div>

                      {/* Clean target label */}
                      <div className="text-[9px] font-mono text-brand-500 tracking-wider">
                        ALIGN STUDENT QR / BARCODE
                      </div>

                      {torchActive && (
                        <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/30 text-[9px] font-mono">
                          LED Flash Active
                        </div>
                      )}
                    </div>

                    {/* Scan Result Card */}
                    <div className="p-3 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-[#737373] uppercase">Latest Verified Record</div>
                        <div className="text-sm font-bold text-white">{lastStudent.name}</div>
                        <div className="text-[10px] text-[#A3A3A3] font-mono">Roll: {lastStudent.roll} · Hall A-3</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#22C55E] bg-[#102014] px-2.5 py-1 rounded-md border border-[#22C55E]/30">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                        <span>{lastStudent.status}</span>
                      </div>
                    </div>

                    {/* Interactive Action Controls */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="text-xs font-mono text-[#A3A3A3]">
                        Scanned Today: <span className="font-bold text-white">{scannedCount}</span>
                      </div>
                      <button
                        type="button"
                        onClick={simulateScan}
                        disabled={isScanning}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-black bg-brand-500 hover:bg-[#FF6B1A] rounded-md transition-colors disabled:opacity-50 shadow-xs"
                      >
                        <Zap className="w-3.5 h-3.5 text-black" />
                        <span>{isScanning ? 'Reading barcode...' : 'Simulate Scan'}</span>
                      </button>
                    </div>

                  </div>
                )}

                {/* Tab 3: Dual View (Split Bento Layout - Perfectly Aligned, No Overlap) */}
                {activeTab === 'dual' && (
                  <div className="p-4 sm:p-5 bg-[#0E0E0E] animate-in fade-in duration-150">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-stretch">
                      
                      {/* Left Sub-Card: Institutional Portal Summary */}
                      <div className="p-3 rounded-xl border border-[#262626] bg-[#121212] space-y-3 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-1.5 border-b border-[#262626] mb-2.5">
                            <span className="text-[11px] font-bold text-white">PSG CAS Central Portal</span>
                            <span className="text-[9px] font-mono text-brand-500 font-semibold bg-[#1E110A] px-1.5 py-0.5 rounded border border-brand-500/30">24 Depts</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-center mb-3">
                            <div className="p-2 rounded-lg bg-[#181818] border border-[#262626]">
                              <div className="text-[10px] text-[#A3A3A3]">Activities</div>
                              <div className="text-base font-bold text-white">248</div>
                            </div>
                            <div className="p-2 rounded-lg bg-[#181818] border border-[#262626]">
                              <div className="text-[10px] text-[#A3A3A3]">Coverage</div>
                              <div className="text-base font-bold text-brand-500">100%</div>
                            </div>
                          </div>
                          <div className="space-y-1.5 text-[11px]">
                            <div className="p-1.5 rounded bg-[#181818] border border-[#262626] flex items-center justify-between">
                              <span className="truncate text-[#D4D4D4]">#1 Dept. Computer Science</span>
                              <span className="font-mono font-bold text-brand-500 ml-1">48</span>
                            </div>
                            <div className="p-1.5 rounded bg-[#181818] border border-[#262626] flex items-center justify-between">
                              <span className="truncate text-[#D4D4D4]">#2 Dept. Electronics</span>
                              <span className="font-mono text-[#A3A3A3] ml-1">41</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-[#737373] pt-2 border-t border-[#262626]">
                          ✓ Auto-dispatch verified
                        </div>
                      </div>

                      {/* Right Sub-Card: Mobile Scanner Preview */}
                      <div className="p-3 rounded-xl border border-[#262626] bg-[#121212] space-y-2.5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-1.5 border-b border-[#262626] mb-2">
                            <span className="text-[11px] font-bold text-white">AttendHub Mobile</span>
                            <span className="text-[9px] font-mono text-brand-500 font-semibold bg-[#1E110A] px-1.5 py-0.5 rounded border border-brand-500/30">100 FPS</span>
                          </div>
                          <div className="h-20 bg-black rounded-lg border border-[#262626] flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="w-10 h-10 border border-dashed border-brand-500 rounded flex items-center justify-center">
                              <Scan className="w-5 h-5 text-brand-500 animate-pulse" />
                            </div>
                            <div className="text-[8px] font-mono text-brand-500 mt-1">ALIGN BARCODE</div>
                          </div>
                          <div className="mt-2 p-2 rounded bg-[#181818] border border-[#262626] text-[10px]">
                            <div className="font-semibold text-white">{lastStudent.name}</div>
                            <div className="text-[#A3A3A3] font-mono">Roll: {lastStudent.roll}</div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={simulateScan}
                          disabled={isScanning}
                          className="w-full py-1.5 text-[11px] font-bold text-black bg-brand-500 hover:bg-[#FF6B1A] rounded-md transition-colors"
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
