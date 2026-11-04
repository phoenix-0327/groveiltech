import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  variant?: 'full' | 'mark' | 'image';
  dark?: boolean;
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
          alt="GROVEIL Official Logo"
          className="h-11 w-auto rounded-xl object-contain bg-[#FAFAF7] p-1 border border-[#2B2B2B] shadow-sm"
        />
        <div className="flex flex-col">
          <span className={`font-bold tracking-widest-logo text-white font-display ${currentSize.text} leading-none`}>
            GROVEIL
          </span>
          {showTagline && (
            <span className={`text-[#FACC15] font-mono tracking-wider ${currentSize.sub} uppercase mt-1`}>
              The Invisible Shield All Over The Field
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 group ${className}`}>
      {/* Official Shield + Palm Brandmark Container */}
      <div className={`${currentSize.img} relative flex-shrink-0 flex items-center justify-center rounded-xl bg-[#141414] border border-[#2B2B2B] p-1.5 shadow-sm group-hover:border-brand-500/60 transition-colors`}>
        <img
          src="/groveil-emblem-white.png"
          alt="GROVEIL Emblem"
          className="w-full h-full object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/groveil-logo.jpg';
          }}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-bold tracking-widest-logo text-white font-display ${currentSize.text} leading-none`}>
            GROVEIL
          </span>
        </div>
        {showTagline ? (
          <span className={`text-[#FACC15] font-mono tracking-widest ${currentSize.sub} uppercase mt-1`}>
            The Invisible Shield All Over The Field
          </span>
        ) : (
          <span className="text-[10px] tracking-wider text-[#A3A3A3] uppercase font-mono font-medium leading-tight">
            Software Studio
          </span>
        )}
      </div>
    </div>
  );
};
