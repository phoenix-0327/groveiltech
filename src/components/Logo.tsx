import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  variant?: 'full' | 'mark' | 'image';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  variant = 'full',
}) => {
  const sizeMap = {
    sm: { img: 'w-7 h-7', text: 'text-base', sub: 'text-[9px]' },
    md: { img: 'w-9 h-9', text: 'text-lg', sub: 'text-[10px]' },
    lg: { img: 'w-12 h-12', text: 'text-2xl', sub: 'text-[11px]' },
  };

  const currentSize = sizeMap[size];

  if (variant === 'image') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <img
          src="/groveil-logo.jpg"
          alt="GROVEIL Logo"
          className={`${currentSize.img} rounded-lg object-contain shadow-xs border border-surface-border bg-white p-0.5`}
        />
        <div className="flex flex-col">
          <span className={`font-bold tracking-widest-logo text-brand-900 font-display ${currentSize.text} leading-none`}>
            GROVEIL
          </span>
          {showTagline && (
            <span className={`text-surface-textMuted font-mono tracking-wider ${currentSize.sub} uppercase mt-1`}>
              The Invisible Shield All Over The Field
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* High-fidelity Vector Shield + Palm Brandmark */}
      <div className={`${currentSize.img} relative flex-shrink-0 flex items-center justify-center rounded-lg bg-brand-50 border border-brand-100/80 p-1`}>
        <svg
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-brand-700"
        >
          {/* Outer Shield Path */}
          <path
            d="M50 8C68 18 84 18 90 26C90 70 66 100 50 112C34 100 10 70 10 26C16 18 32 18 50 8Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-brand-800"
          />

          {/* Golden Amber Accent stroke along right inner rim */}
          <path
            d="M74 38C76 56 68 80 54 94"
            stroke="#CF8A2E"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Amber Dot */}
          <circle cx="50" cy="100" r="2.5" fill="#CF8A2E" />

          {/* Palm Tree Trunk */}
          <path
            d="M48 94C49 84 52 70 50 48"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-brand-800"
          />

          {/* Palm Fronds */}
          {/* Top center */}
          <path d="M50 48C48 38 46 32 40 32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-brand-800" />
          <path d="M50 48C52 38 54 32 60 32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-brand-800" />
          {/* Upper sides */}
          <path d="M50 48C42 42 34 40 28 44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-brand-800" />
          <path d="M50 48C58 42 66 40 72 44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-brand-800" />
          {/* Lower sides */}
          <path d="M50 48C40 50 32 54 30 62" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-brand-800" />
          <path d="M50 48C60 50 68 54 70 62" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-brand-800" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-bold tracking-widest-logo text-brand-900 font-display ${currentSize.text} leading-none`}>
            GROVEIL
          </span>
        </div>
        {showTagline ? (
          <span className={`text-surface-textMuted font-mono tracking-widest ${currentSize.sub} uppercase mt-1`}>
            The Invisible Shield All Over The Field
          </span>
        ) : (
          <span className="text-[10px] tracking-wider text-surface-textMuted uppercase font-mono font-medium leading-tight">
            Software Studio
          </span>
        )}
      </div>
    </div>
  );
};
