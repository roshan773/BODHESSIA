import React from 'react';

interface DharmachakraSvgProps {
  className?: string;
  size?: number;
  interactive?: boolean;
  onSpokeHover?: (spokeIndex: number | null) => void;
  activeSpoke?: number | null;
}

export const DharmachakraSvg: React.FC<DharmachakraSvgProps> = ({
  className = '',
  size = 320,
  interactive = false,
  onSpokeHover,
  activeSpoke = null
}) => {
  const spokes = Array.from({ length: 8 });
  const center = size / 2;
  const outerRadius = size * 0.44;
  const innerRadius = size * 0.14;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transition-transform duration-700 select-none"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF1D0" />
            <stop offset="50%" stopColor="#E0B25B" />
            <stop offset="100%" stopColor="#8A5E29" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Aura Ring */}
        <circle
          cx={center}
          cy={center}
          r={outerRadius + 8}
          fill="none"
          stroke="#C89D4B"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="4 6"
          className="animate-spin-slow"
        />

        {/* Outer Rim */}
        <circle
          cx={center}
          cy={center}
          r={outerRadius}
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="6"
          filter="url(#glow)"
        />

        {/* Outer Rim Inner Border */}
        <circle
          cx={center}
          cy={center}
          r={outerRadius - 6}
          fill="none"
          stroke="#C89D4B"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />

        {/* 8 Jewel Ornaments on Rim */}
        {spokes.map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x = center + outerRadius * Math.cos(angle);
          const y = center + outerRadius * Math.sin(angle);
          const isActive = activeSpoke === i;

          return (
            <circle
              key={`jewel-${i}`}
              cx={x}
              cy={y}
              r={isActive ? 5.5 : 3.5}
              fill={isActive ? '#FFF5DC' : '#E0B25B'}
              stroke="#24231F"
              strokeWidth="1"
              className="transition-all duration-300"
            />
          );
        })}

        {/* Central Hub */}
        <circle
          cx={center}
          cy={center}
          r={innerRadius}
          fill="#12110E"
          stroke="url(#goldGrad)"
          strokeWidth="4"
          filter="url(#glow)"
        />
        
        {/* Innermost Hub Core (Three-Swirl Gankyil) */}
        <circle
          cx={center}
          cy={center}
          r={innerRadius * 0.4}
          fill="#C89D4B"
          fillOpacity="0.8"
        />

        {/* 8 Spokes */}
        {spokes.map((_, i) => {
          const angleDeg = i * 45;
          const angleRad = (angleDeg * Math.PI) / 180;
          const x1 = center + innerRadius * Math.cos(angleRad);
          const y1 = center + innerRadius * Math.sin(angleRad);
          const x2 = center + (outerRadius - 6) * Math.cos(angleRad);
          const y2 = center + (outerRadius - 6) * Math.sin(angleRad);
          const isActive = activeSpoke === i;

          return (
            <g
              key={`spoke-${i}`}
              className={interactive ? 'cursor-pointer transition-opacity duration-300' : ''}
              onMouseEnter={() => interactive && onSpokeHover && onSpokeHover(i)}
              onMouseLeave={() => interactive && onSpokeHover && onSpokeHover(null)}
            >
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isActive ? '#FFF1D0' : '#C89D4B'}
                strokeWidth={isActive ? 5 : 3}
                strokeLinecap="round"
                className="transition-all duration-300"
              />
              {/* Invisible wider hover hit area */}
              {interactive && (
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="transparent"
                  strokeWidth={24}
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};
