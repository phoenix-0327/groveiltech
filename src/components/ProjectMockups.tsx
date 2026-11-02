import React from 'react';
import { 
  Scan, 
  CheckCircle2, 
  FileSpreadsheet, 
  Wifi, 
  Cpu, 
  Video, 
  CheckSquare, 
  Flame, 
  HeartPulse,
  Activity,
  Radio,
  MapPin,
  Thermometer
} from 'lucide-react';

export const GroveilMockup: React.FC = () => {
  return (
    <div className="rounded-xl border border-[#EAEAEA] bg-white p-4 shadow-sm space-y-3">
      {/* Top Banner */}
      <div className="flex items-center justify-between text-[11px] font-mono text-surface-textMuted border-b border-[#F0F0F0] pb-2">
        <span className="flex items-center gap-1.5 font-semibold text-brand-900">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
          Groveil Autonomous Rover & Climber Telemetry
        </span>
        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-100 font-semibold text-[10px]">
          4G LTE Live
        </span>
      </div>

      {/* 4-Layer Sensor Fusion Telemetry */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
        {/* Layer 1: Acoustic Sensing */}
        <div className="p-2.5 rounded-lg bg-surface-secondary border border-[#EAEAEA] space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-surface-textMuted uppercase">
            <span>Acoustic Mic</span>
            <Activity className="w-3 h-3 text-brand-600" />
          </div>
          <div className="font-bold text-[#171717] text-sm">Trunk Stethoscope</div>
          <div className="text-[10px] text-emerald-700 font-mono font-medium">0.8–3.2 kHz · Clear</div>
        </div>

        {/* Layer 2: Thermal & NoIR Camera */}
        <div className="p-2.5 rounded-lg bg-surface-secondary border border-[#EAEAEA] space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-surface-textMuted uppercase">
            <span>Crown Climb</span>
            <Thermometer className="w-3 h-3 text-amber-600" />
          </div>
          <div className="font-bold text-[#171717] text-sm">MLX90640 + NoIR</div>
          <div className="text-[10px] text-emerald-700 font-mono font-medium">Canopy: 96% Healthy</div>
        </div>

        {/* Layer 3: VOC Gas Sensor */}
        <div className="p-2.5 rounded-lg bg-surface-secondary border border-[#EAEAEA] space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-surface-textMuted uppercase">
            <span>BME688 AI Gas</span>
            <Radio className="w-3 h-3 text-cyan-600" />
          </div>
          <div className="font-bold text-[#171717] text-sm">VOC Gas Fingerprint</div>
          <div className="text-[10px] text-brand-700 font-mono font-medium">12 ppm · Baseline Match</div>
        </div>
      </div>

      {/* Active Palm Inspection Card */}
      <div className="p-3 rounded-lg bg-slate-900 text-white space-y-2 border border-slate-800">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <MapPin className="w-3 h-3" />
            PALM #042 · ROW 07 · BLOCK B
          </span>
          <span className="font-mono text-[10px]">10.9984° N, 76.9621° E</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-800">
          <div>
            <div className="text-[10px] text-slate-400 font-mono">Trunk Height Inspected</div>
            <div className="font-bold text-white font-mono text-sm">4.2m Elevation</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-slate-400 font-mono">Expert Verification</div>
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Optimal Health</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/80">
          <span>RPi 5 + ESP32-S3 Patrol</span>
          <span className="text-slate-300">Next Tree: Palm #043 in 45s</span>
        </div>
      </div>
    </div>
  );
};

export const AttendHubMockup: React.FC = () => {
  return (
    <div className="rounded-xl border border-[#EAEAEA] bg-white p-4 shadow-sm space-y-4">
      {/* Top Banner indicating Illustrative Mockup */}
      <div className="flex items-center justify-between text-[11px] font-mono text-surface-textMuted border-b border-[#F0F0F0] pb-2">
        <span className="flex items-center gap-1.5 font-semibold text-brand-900">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          AttendHub Suite (Mobile Scanner + Web Portal)
        </span>
        <span className="px-2 py-0.5 rounded bg-surface-secondary text-[10px]">
          Illustrative Product Mockup
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
        {/* Mobile View */}
        <div className="sm:col-span-5 bg-slate-900 rounded-xl p-3 text-white space-y-2 border border-slate-800">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>FLUTTER RUNTIME</span>
            <span className="text-emerald-400 font-semibold">100 FPS</span>
          </div>
          
          <div className="relative h-32 bg-slate-950 rounded-lg flex items-center justify-center border border-slate-800 overflow-hidden">
            <div className="absolute inset-0 bg-grid-subtle opacity-20"></div>
            <div className="w-16 h-16 border-2 border-emerald-400 rounded-md flex items-center justify-center mb-2">
              <Scan className="w-6 h-6 text-emerald-400 animate-pulse" />
            </div>
            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-[9px] text-emerald-300">
              Torch On
            </div>
            <div className="absolute bottom-2 text-[9px] font-mono text-emerald-300/80">
              Barcode: 23BCS108
            </div>
          </div>

          <div className="p-2 rounded bg-slate-800/80 border border-slate-700 text-xs">
            <div className="font-semibold text-white">S. Karthik · Computer Science</div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Marked Present (Hall A-3)
            </div>
          </div>
        </div>

        {/* Web Portal Preview */}
        <div className="sm:col-span-7 bg-surface-secondary rounded-xl p-3 border border-[#EAEAEA] space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#171717]">Web Administrative Panel</span>
            <span className="text-[10px] font-mono text-brand-700 font-medium">Netlify Edge</span>
          </div>

          <div className="p-2 bg-white rounded-lg border border-[#EAEAEA] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <div>
                <div className="text-xs font-semibold text-[#171717]">Annual_Enrollment_2026.xlsx</div>
                <div className="text-[10px] text-surface-textMuted">14,240 Student Records Imported</div>
              </div>
            </div>
            <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
              Verified
            </span>
          </div>

          <div className="space-y-1 text-xs">
            <div className="flex justify-between text-[11px] text-surface-textMuted">
              <span>Overall Campus Scan Progress</span>
              <span className="font-mono font-semibold text-[#171717]">13,412 / 14,240 (94.2%)</span>
            </div>
            <div className="w-full bg-[#E5E7EB] h-2 rounded-full overflow-hidden">
              <div className="bg-brand-600 h-full rounded-full" style={{ width: '94.2%' }}></div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-surface-textMuted pt-1">
            <span>Supabase PostgreSQL Sync</span>
            <span className="text-emerald-700 font-medium">Latency: 64ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IICTrackerMockup: React.FC = () => {
  return (
    <div className="rounded-xl border border-[#EAEAEA] bg-white p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between text-[11px] font-mono text-surface-textMuted border-b border-[#F0F0F0] pb-2">
        <span className="flex items-center gap-1.5 font-semibold text-brand-900">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          PSG CAS Innovation Cell Central Portal
        </span>
        <span className="px-2 py-0.5 rounded bg-surface-secondary text-[10px]">
          Illustrative Product Mockup
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
        <div className="p-2.5 rounded-lg bg-surface-secondary border border-[#EAEAEA]">
          <div className="text-[10px] text-surface-textMuted uppercase font-mono">Department Acts</div>
          <div className="text-base font-bold text-[#171717]">248 Submissions</div>
          <div className="text-[10px] text-brand-700 font-mono">24 Departments Live</div>
        </div>
        <div className="p-2.5 rounded-lg bg-surface-secondary border border-[#EAEAEA]">
          <div className="text-[10px] text-surface-textMuted uppercase font-mono">Scoring Matrix</div>
          <div className="text-base font-bold text-[#171717]">Weighted Auto-Rank</div>
          <div className="text-[10px] text-amber-600 font-mono">Council Benchmark</div>
        </div>
        <div className="p-2.5 rounded-lg bg-surface-secondary border border-[#EAEAEA]">
          <div className="text-[10px] text-surface-textMuted uppercase font-mono">Automated Emails</div>
          <div className="text-base font-bold text-[#171717]">Zero Missing Deadlines</div>
          <div className="text-[10px] text-emerald-600 font-mono">Weekly Digest Active</div>
        </div>
      </div>

      {/* Mini Leaderboard View */}
      <div className="rounded-lg border border-[#EAEAEA] overflow-hidden text-xs">
        <div className="px-3 py-1.5 bg-surface-secondary border-b border-[#EAEAEA] text-[11px] font-semibold text-surface-textMuted flex justify-between">
          <span>Active Department Rankings</span>
          <span>Verified Activities</span>
        </div>
        <div className="divide-y divide-[#F0F0F0] bg-white">
          <div className="px-3 py-2 flex items-center justify-between">
            <span className="font-medium text-[#171717]">#1 Dept. of Computer Science</span>
            <span className="font-mono text-brand-700 font-semibold">48 Activities (100% Verified)</span>
          </div>
          <div className="px-3 py-2 flex items-center justify-between">
            <span className="font-medium text-[#171717]">#2 Dept. of Electronics & Tech</span>
            <span className="font-mono text-surface-textMuted">41 Activities (Validated)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Nutri360Mockup: React.FC = () => {
  return (
    <div className="rounded-xl border border-[#EAEAEA] bg-white p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between text-[11px] font-mono text-surface-textMuted border-b border-[#F0F0F0] pb-2">
        <span className="flex items-center gap-1.5 font-semibold text-brand-900">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          Nutri360 — Expo App + ESP32 Telemetry
        </span>
        <span className="px-2 py-0.5 rounded bg-surface-secondary text-[10px]">
          Illustrative Product Mockup
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Hardware Telemetry Card */}
        <div className="p-3 rounded-lg bg-slate-900 text-white space-y-2 border border-slate-800">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-cyan-400" /> ESP32-WROOM</span>
            <span className="text-emerald-400 flex items-center gap-1"><Wifi className="w-3 h-3" /> BLE Connected</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center pt-1">
            <div className="p-1.5 rounded bg-slate-800">
              <div className="text-[10px] text-slate-400">Ultrasonic Height</div>
              <div className="text-base font-bold text-cyan-300 font-mono">98.4 cm</div>
            </div>
            <div className="p-1.5 rounded bg-slate-800">
              <div className="text-[10px] text-slate-400">Strain Load Weight</div>
              <div className="text-base font-bold text-cyan-300 font-mono">14.20 kg</div>
            </div>
          </div>
          <div className="text-[9px] font-mono text-slate-400 text-center">
            Sensor Calibration Offset: ±0.15%
          </div>
        </div>

        {/* Mobile WHO Growth Curve Analysis */}
        <div className="p-3 rounded-lg bg-surface-secondary border border-[#EAEAEA] space-y-1.5 text-xs">
          <div className="font-semibold text-[#171717] flex justify-between">
            <span>WHO Growth Benchmark</span>
            <span className="text-emerald-700 font-mono text-[10px]">Healthy (50th %ile)</span>
          </div>
          <p className="text-[11px] text-surface-textMuted">
            Automated Z-score computation for stunting & wasting prevention.
          </p>
          <div className="p-2 rounded bg-white border border-[#EAEAEA] flex items-center justify-between text-[10px] font-mono">
            <span>Patient ID: #NTR-4029</span>
            <span className="text-brand-700 font-semibold">Sync: Supabase Cloud</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VisionMockup: React.FC = () => {
  return (
    <div className="rounded-xl border border-[#EAEAEA] bg-white p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between text-[11px] font-mono text-surface-textMuted border-b border-[#F0F0F0] pb-2">
        <span className="flex items-center gap-1.5 font-semibold text-brand-900">
          <Video className="w-3.5 h-3.5 text-purple-600" />
          Classroom Attention Monitor (Computer Vision Pipeline)
        </span>
        <span className="px-2 py-0.5 rounded bg-surface-secondary text-[10px]">
          Illustrative Product Mockup
        </span>
      </div>

      <div className="relative min-h-[144px] bg-slate-900 rounded-lg overflow-hidden p-3.5 border border-slate-800 flex flex-col justify-between text-white space-y-3">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>RTSP STREAM: CAM_02_HALL_C</span>
          <span className="text-emerald-400 font-bold">YOLOv8 + MediaPipe · 60 FPS</span>
        </div>

        {/* Simulated Zone Overlay */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
          <div className="border border-emerald-500/60 bg-emerald-500/10 rounded p-1.5">
            <div className="text-emerald-300 font-bold">Zone A (Front)</div>
            <div className="text-[9px] text-slate-300">Attentive: 92%</div>
          </div>
          <div className="border border-emerald-500/60 bg-emerald-500/10 rounded p-1.5">
            <div className="text-emerald-300 font-bold">Zone B (Mid)</div>
            <div className="text-[9px] text-slate-300">Attentive: 87%</div>
          </div>
          <div className="border border-amber-500/60 bg-amber-500/10 rounded p-1.5">
            <div className="text-amber-300 font-bold">Zone C (Rear)</div>
            <div className="text-[9px] text-slate-300">Attentive: 79%</div>
          </div>
        </div>

        <div className="text-[9px] font-mono text-slate-400 flex justify-between">
          <span>Privacy Preserving: Head-Pose Only</span>
          <span>Zero Face Storage</span>
        </div>
      </div>
    </div>
  );
};

export const DailyTargetMockup: React.FC = () => {
  return (
    <div className="rounded-xl border border-[#EAEAEA] bg-white p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between text-[11px] font-mono text-surface-textMuted border-b border-[#F0F0F0] pb-2">
        <span className="flex items-center gap-1.5 font-semibold text-brand-900">
          <Flame className="w-3.5 h-3.5 text-orange-500" />
          Daily Target — Streak & Focus Engine
        </span>
        <span className="px-2 py-0.5 rounded bg-surface-secondary text-[10px]">
          Illustrative Product Mockup
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3 rounded-lg bg-surface-secondary border border-[#EAEAEA] space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#171717]">Current Streak</span>
            <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-mono text-[10px] font-bold">
              34 Days
            </span>
          </div>
          {/* Streak dots visual */}
          <div className="grid grid-cols-7 gap-1 pt-1">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className={`h-3 rounded-xs ${
                  i < 24 ? 'bg-brand-600' : i === 24 ? 'bg-brand-300' : 'bg-surface-border'
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-surface-secondary border border-[#EAEAEA] space-y-1.5">
          <div className="font-semibold text-[#171717]">Core Milestones</div>
          <div className="flex items-center gap-2 text-xs text-[#333]">
            <CheckSquare className="w-3.5 h-3.5 text-brand-600" />
            <span>Algorithm Review (Completed)</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#333]">
            <CheckSquare className="w-3.5 h-3.5 text-brand-600" />
            <span>Code Sprint (3.5 hrs logged)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PainSenseMockup: React.FC = () => {
  return (
    <div className="rounded-xl border border-[#EAEAEA] bg-white p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between text-[11px] font-mono text-surface-textMuted border-b border-[#F0F0F0] pb-2">
        <span className="flex items-center gap-1.5 font-semibold text-brand-900">
          <HeartPulse className="w-3.5 h-3.5 text-rose-500" />
          PainSense AI — Clinical Indicator Visualization
        </span>
        <span className="px-2 py-0.5 rounded bg-surface-secondary text-[10px]">
          Illustrative Product Mockup
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3 rounded-lg bg-surface-secondary border border-[#EAEAEA] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-surface-textMuted">
            <span>Anatomical Mapping</span>
            <span className="text-rose-600 font-bold">Zone: Lumbar L4-L5</span>
          </div>
          <div className="h-16 rounded bg-white border border-[#EAEAEA] flex items-center justify-center text-[11px] font-mono text-surface-textMuted">
            [ Interactive Body Grid Indicator ]
          </div>
        </div>

        <div className="p-3 rounded-lg bg-surface-secondary border border-[#EAEAEA] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-surface-textMuted">VAS Severity Scale</span>
            <span className="font-bold text-[#171717]">6.5 / 10 (Moderate)</span>
          </div>
          <div className="w-full bg-[#E5E7EB] h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 h-full rounded-full" style={{ width: '65%' }}></div>
          </div>
          <div className="text-[10px] text-surface-textMuted font-mono">
            Structured clinical report ready for PDF export
          </div>
        </div>
      </div>
    </div>
  );
};
