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
    <div className="rounded-2xl border border-[#262626] bg-[#0E0E0E] p-5 shadow-2xl space-y-3.5">
      {/* Top Banner */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A3A3A3] border-b border-[#262626] pb-2.5">
        <span className="flex items-center gap-1.5 font-semibold text-white">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          Groveil Autonomous Rover &amp; Climber
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-[#1E110A] text-brand-500 border border-brand-500/40 font-semibold text-[10px]">
          4G LTE · Telemetry Active
        </span>
      </div>

      {/* 4-Layer Sensor Fusion Telemetry */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
        {/* Layer 1: Acoustic Sensing */}
        <div className="p-3 rounded-xl bg-[#141414] border border-[#262626] space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#737373] uppercase">
            <span>Acoustic Mic</span>
            <Activity className="w-3.5 h-3.5 text-brand-500" />
          </div>
          <div className="font-bold text-white text-sm font-display">Trunk Stethoscope</div>
          <div className="text-[10px] text-brand-500 font-mono font-medium">0.8–3.2 kHz · Clear</div>
        </div>

        {/* Layer 2: Thermal & NoIR Camera */}
        <div className="p-3 rounded-xl bg-[#141414] border border-[#262626] space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#737373] uppercase">
            <span>Crown Climb</span>
            <Thermometer className="w-3.5 h-3.5 text-[#FACC15]" />
          </div>
          <div className="font-bold text-white text-sm font-display">MLX90640 + NoIR</div>
          <div className="text-[10px] text-[#22C55E] font-mono font-medium">Canopy: 96% Healthy</div>
        </div>

        {/* Layer 3: VOC Gas Sensor */}
        <div className="p-3 rounded-xl bg-[#141414] border border-[#262626] space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#737373] uppercase">
            <span>BME688 AI Gas</span>
            <Radio className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="font-bold text-white text-sm font-display">VOC Gas Fingerprint</div>
          <div className="text-[10px] text-brand-500 font-mono font-medium">12 ppm · Baseline Match</div>
        </div>
      </div>

      {/* Active Palm Inspection Card */}
      <div className="p-3.5 rounded-xl bg-black text-white space-y-2.5 border border-[#262626] shadow-sm">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#A3A3A3]">
          <span className="flex items-center gap-1.5 text-brand-500 font-semibold">
            <MapPin className="w-3 h-3" />
            PALM #042 · ROW 07 · BLOCK B
          </span>
          <span className="font-mono text-[10px] text-[#737373]">10.9984° N, 76.9621° E</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-[#262626]">
          <div>
            <div className="text-[10px] text-[#737373] font-mono">Trunk Height Inspected</div>
            <div className="font-bold text-white font-mono text-sm">4.2m Elevation</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-[#737373] font-mono">Expert Verification</div>
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#22C55E]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Optimal Baseline</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-[#737373] pt-1 border-t border-[#1C1C1C]">
          <span>RPi 5 + ESP32-S3 Edge Node</span>
          <span className="text-[#A3A3A3]">Next Tree: Palm #043 in 45s</span>
        </div>
      </div>

      <div className="text-[10px] font-mono text-[#737373] text-center pt-0.5">
        Demonstration model based on field-study sensor architecture · 5 plantations studied
      </div>
    </div>
  );
};

export const AttendHubMockup: React.FC = () => {
  return (
    <div className="rounded-2xl border border-[#262626] bg-[#0E0E0E] p-5 shadow-2xl space-y-4">
      {/* Top Banner */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A3A3A3] border-b border-[#262626] pb-2.5">
        <span className="flex items-center gap-1.5 font-semibold text-white">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          AttendHub Suite (Mobile Scanner + Web Portal)
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-[#181818] text-[10px] font-mono font-medium text-[#A3A3A3] border border-[#262626]">
          Live Deployment
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center">
        {/* Mobile View */}
        <div className="sm:col-span-5 bg-black rounded-xl p-3.5 text-white space-y-2.5 border border-[#262626] shadow-sm">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#737373]">
            <span>FLUTTER CAMERA CORE</span>
            <span className="text-brand-500 font-semibold font-mono">100 FPS</span>
          </div>
          
          <div className="relative h-32 bg-[#0A0A0A] rounded-lg flex items-center justify-center border border-[#262626] overflow-hidden">
            <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
            <div className="w-16 h-16 border-2 border-brand-500/80 rounded-md flex items-center justify-center mb-2">
              <Scan className="w-6 h-6 text-brand-500 animate-pulse" />
            </div>
            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#1E110A] border border-brand-500/40 text-[9px] text-brand-500 font-mono">
              Torch Active
            </div>
            <div className="absolute bottom-2 text-[9px] font-mono text-brand-500">
              Barcode: 23BCS108
            </div>
          </div>

          <div className="p-2 rounded-lg bg-[#141414] border border-[#262626] text-xs">
            <div className="font-semibold text-white">S. Karthik · Computer Science</div>
            <div className="text-[10px] text-[#22C55E] flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
              <span>Marked Present (Hall A-3)</span>
            </div>
          </div>
        </div>

        {/* Web Portal Preview */}
        <div className="sm:col-span-7 bg-[#141414] rounded-xl p-3.5 border border-[#262626] space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-white font-display">Administrative Registry</span>
            <span className="text-[10px] font-mono text-brand-500 font-medium">Netlify Edge</span>
          </div>

          <div className="p-2.5 bg-[#181818] rounded-lg border border-[#262626] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-brand-500 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">Annual_Enrollment_2026.xlsx</div>
                <div className="text-[10px] text-[#A3A3A3]">14,240 Student Records Imported</div>
              </div>
            </div>
            <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-[#1E110A] text-brand-500 font-semibold border border-brand-500/40">
              Verified
            </span>
          </div>

          <div className="space-y-1 text-xs">
            <div className="flex justify-between text-[11px] text-[#A3A3A3]">
              <span>Overall Campus Scan Progress</span>
              <span className="font-mono font-semibold text-white">13,412 / 14,240 (94.2%)</span>
            </div>
            <div className="w-full bg-[#262626] h-2 rounded-full overflow-hidden">
              <div className="bg-brand-500 h-full rounded-full" style={{ width: '94.2%' }}></div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#737373] pt-1 border-t border-[#262626]">
            <span>Supabase PostgreSQL Sync</span>
            <span className="text-brand-500 font-medium">Latency: &lt; 64ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IICTrackerMockup: React.FC = () => {
  return (
    <div className="rounded-2xl border border-[#262626] bg-[#0E0E0E] p-5 shadow-2xl space-y-3.5">
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A3A3A3] border-b border-[#262626] pb-2.5">
        <span className="flex items-center gap-1.5 font-semibold text-white">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          PSG CAS Innovation Cell Central Portal
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-[#1E110A] text-brand-500 border border-brand-500/40 text-[10px] font-mono font-medium">
          Pilot Launch · 24 Departments
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
        <div className="p-3 rounded-xl bg-[#141414] border border-[#262626]">
          <div className="text-[10px] text-[#737373] uppercase font-mono">Department Acts</div>
          <div className="text-base font-bold text-white font-display">248 Submissions</div>
          <div className="text-[10px] text-brand-500 font-mono">24/24 HoDs Onboarded</div>
        </div>
        <div className="p-3 rounded-xl bg-[#141414] border border-[#262626]">
          <div className="text-[10px] text-[#737373] uppercase font-mono">Scoring Matrix</div>
          <div className="text-base font-bold text-white font-display">Weighted Auto-Rank</div>
          <div className="text-[10px] text-[#FACC15] font-mono">MoE Council Guidelines</div>
        </div>
        <div className="p-3 rounded-xl bg-[#141414] border border-[#262626]">
          <div className="text-[10px] text-[#737373] uppercase font-mono">Automated Emails</div>
          <div className="text-base font-bold text-white font-display">Zero Missed Deadlines</div>
          <div className="text-[10px] text-brand-500 font-mono">Weekly Digest Active</div>
        </div>
      </div>

      {/* Mini Leaderboard View */}
      <div className="rounded-xl border border-[#262626] overflow-hidden text-xs bg-[#121212]">
        <div className="px-3.5 py-2 bg-[#161616] border-b border-[#262626] text-[11px] font-semibold text-[#A3A3A3] flex justify-between font-mono">
          <span>Active Department Rankings</span>
          <span>Verified Activities</span>
        </div>
        <div className="divide-y divide-[#262626] bg-[#101010]">
          <div className="px-3.5 py-2.5 flex items-center justify-between">
            <span className="font-medium text-white">#1 Dept. of Computer Science &amp; Applications</span>
            <span className="font-mono text-brand-500 font-semibold">48 Activities (100% Verified)</span>
          </div>
          <div className="px-3.5 py-2.5 flex items-center justify-between">
            <span className="font-medium text-[#D4D4D4]">#2 Dept. of Electronics &amp; Communication</span>
            <span className="font-mono text-[#A3A3A3]">41 Activities (Validated)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Nutri360Mockup: React.FC = () => {
  return (
    <div className="rounded-2xl border border-[#262626] bg-[#0E0E0E] p-5 shadow-2xl space-y-3.5">
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A3A3A3] border-b border-[#262626] pb-2.5">
        <span className="flex items-center gap-1.5 font-semibold text-white">
          <span className="w-2 h-2 rounded-full bg-brand-500"></span>
          Nutri360 — Expo App + ESP32 Telemetry
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-[#181818] border border-[#262626] text-[10px] text-[#A3A3A3]">
          Illustrative Product Mockup
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Hardware Telemetry Card */}
        <div className="p-3.5 rounded-xl bg-black text-white space-y-2 border border-[#262626]">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#737373]">
            <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-brand-500" /> ESP32-WROOM</span>
            <span className="text-[#22C55E] flex items-center gap-1"><Wifi className="w-3 h-3" /> BLE Connected</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center pt-1">
            <div className="p-2 rounded-lg bg-[#141414] border border-[#262626]">
              <div className="text-[10px] text-[#737373]">Ultrasonic Height</div>
              <div className="text-base font-bold text-brand-500 font-mono">98.4 cm</div>
            </div>
            <div className="p-2 rounded-lg bg-[#141414] border border-[#262626]">
              <div className="text-[10px] text-[#737373]">Strain Load Weight</div>
              <div className="text-base font-bold text-brand-500 font-mono">14.20 kg</div>
            </div>
          </div>
          <div className="text-[9px] font-mono text-[#737373] text-center">
            Sensor Calibration Offset: ±0.15%
          </div>
        </div>

        {/* Mobile WHO Growth Curve Analysis */}
        <div className="p-3.5 rounded-xl bg-[#141414] border border-[#262626] space-y-2 text-xs">
          <div className="font-semibold text-white flex justify-between">
            <span>WHO Growth Benchmark</span>
            <span className="text-[#22C55E] font-mono text-[10px]">Healthy (50th %ile)</span>
          </div>
          <p className="text-[11px] text-[#A3A3A3]">
            Automated Z-score computation for stunting &amp; wasting prevention.
          </p>
          <div className="p-2 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-between text-[10px] font-mono">
            <span className="text-[#A3A3A3]">Patient ID: #NTR-4029</span>
            <span className="text-brand-500 font-semibold">Sync: Supabase Cloud</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VisionMockup: React.FC = () => {
  return (
    <div className="rounded-2xl border border-[#262626] bg-[#0E0E0E] p-5 shadow-2xl space-y-3.5">
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A3A3A3] border-b border-[#262626] pb-2.5">
        <span className="flex items-center gap-1.5 font-semibold text-white">
          <Video className="w-3.5 h-3.5 text-brand-500" />
          Classroom Attention Monitor (Computer Vision Pipeline)
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-[#181818] border border-[#262626] text-[10px] text-[#A3A3A3]">
          Illustrative Product Mockup
        </span>
      </div>

      <div className="relative min-h-[144px] bg-black rounded-xl overflow-hidden p-3.5 border border-[#262626] flex flex-col justify-between text-white space-y-3">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#737373]">
          <span>RTSP STREAM: CAM_02_HALL_C</span>
          <span className="text-brand-500 font-bold">YOLOv8 + MediaPipe · 60 FPS</span>
        </div>

        {/* Simulated Zone Overlay */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
          <div className="border border-brand-500/60 bg-brand-500/10 rounded-lg p-2">
            <div className="text-brand-500 font-bold">Zone A (Front)</div>
            <div className="text-[9px] text-[#D4D4D4]">Attentive: 92%</div>
          </div>
          <div className="border border-brand-500/60 bg-brand-500/10 rounded-lg p-2">
            <div className="text-brand-500 font-bold">Zone B (Mid)</div>
            <div className="text-[9px] text-[#D4D4D4]">Attentive: 87%</div>
          </div>
          <div className="border border-[#FACC15]/60 bg-[#FACC15]/10 rounded-lg p-2">
            <div className="text-[#FACC15] font-bold">Zone C (Rear)</div>
            <div className="text-[9px] text-[#D4D4D4]">Attentive: 79%</div>
          </div>
        </div>

        <div className="text-[9px] font-mono text-[#737373] flex justify-between">
          <span>Privacy Preserving: Head-Pose Only</span>
          <span>Zero Face Storage</span>
        </div>
      </div>
    </div>
  );
};

export const DailyTargetMockup: React.FC = () => {
  return (
    <div className="rounded-2xl border border-[#262626] bg-[#0E0E0E] p-5 shadow-2xl space-y-3.5">
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A3A3A3] border-b border-[#262626] pb-2.5">
        <span className="flex items-center gap-1.5 font-semibold text-white">
          <Flame className="w-3.5 h-3.5 text-brand-500" />
          Daily Target — Streak &amp; Focus Engine
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-[#181818] border border-[#262626] text-[10px] text-[#A3A3A3]">
          Illustrative Product Mockup
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-[#141414] border border-[#262626] space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">Current Streak</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#1E110A] text-brand-500 border border-brand-500/40 font-mono text-[10px] font-bold">
              34 Days
            </span>
          </div>
          {/* Streak dots visual */}
          <div className="grid grid-cols-7 gap-1 pt-1">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className={`h-3 rounded-xs ${
                  i < 24 ? 'bg-brand-500' : i === 24 ? 'bg-brand-500/50' : 'bg-[#262626]'
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#141414] border border-[#262626] space-y-2">
          <div className="font-semibold text-white">Core Milestones</div>
          <div className="flex items-center gap-2 text-xs text-[#D4D4D4]">
            <CheckSquare className="w-3.5 h-3.5 text-brand-500" />
            <span>Algorithm Review (Completed)</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#D4D4D4]">
            <CheckSquare className="w-3.5 h-3.5 text-brand-500" />
            <span>Code Sprint (3.5 hrs logged)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PainSenseMockup: React.FC = () => {
  return (
    <div className="rounded-2xl border border-[#262626] bg-[#0E0E0E] p-5 shadow-2xl space-y-3.5">
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A3A3A3] border-b border-[#262626] pb-2.5">
        <span className="flex items-center gap-1.5 font-semibold text-white">
          <HeartPulse className="w-3.5 h-3.5 text-rose-500" />
          PainSense AI — Clinical Indicator Visualization
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-[#181818] border border-[#262626] text-[10px] text-[#A3A3A3]">
          Illustrative Product Mockup
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-[#141414] border border-[#262626] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#737373]">
            <span>Anatomical Mapping</span>
            <span className="text-rose-500 font-bold">Zone: Lumbar L4-L5</span>
          </div>
          <div className="h-16 rounded-lg bg-black border border-[#262626] flex items-center justify-center text-[11px] font-mono text-[#A3A3A3]">
            [ Interactive Body Grid Indicator ]
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#141414] border border-[#262626] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#A3A3A3]">VAS Severity Scale</span>
            <span className="font-bold text-white">6.5 / 10 (Moderate)</span>
          </div>
          <div className="w-full bg-[#262626] h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 via-[#FACC15] to-rose-500 h-full rounded-full" style={{ width: '65%' }}></div>
          </div>
          <div className="text-[10px] text-[#737373] font-mono">
            Structured clinical report ready for PDF export
          </div>
        </div>
      </div>
    </div>
  );
};