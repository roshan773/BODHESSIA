import React from 'react';
import { SymbolDetail } from '../../types';
import { MetadataBadge } from './MetadataBadge';

interface SymbolCardProps {
  symbol: SymbolDetail;
  onClick?: () => void;
}

export const SymbolCard: React.FC<SymbolCardProps> = ({ symbol, onClick }) => {
  // Vector line-art representations for each Buddhist symbol
  const renderSymbolIcon = (type: string) => {
    switch (type) {
      case 'dharmachakra':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-saffron-400 fill-none stroke-[2] transition-transform duration-700 group-hover:rotate-45">
            <circle cx="50" cy="50" r="42" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="36" />
            <circle cx="50" cy="50" r="12" fill="#1A1916" />
            <circle cx="50" cy="50" r="4" fill="#E0B25B" />
            <line x1="50" y1="14" x2="50" y2="86" />
            <line x1="14" y1="50" x2="86" y2="50" />
            <line x1="24.5" y1="24.5" x2="75.5" y2="75.5" />
            <line x1="24.5" y1="75.5" x2="75.5" y2="24.5" />
          </svg>
        );
      case 'lotus':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-saffron-400 fill-none stroke-[2]">
            <path d="M50 20 C40 40, 30 60, 50 82 C70 60, 60 40, 50 20 Z" fill="rgba(200, 157, 75, 0.15)" />
            <path d="M50 82 C30 75, 15 55, 25 35 C32 55, 42 70, 50 82 Z" />
            <path d="M50 82 C70 75, 85 55, 75 35 C68 55, 58 70, 50 82 Z" />
            <path d="M20 82 C35 88, 65 88, 80 82" strokeLinecap="round" />
          </svg>
        );
      case 'bodhitree':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-saffron-400 fill-none stroke-[2]">
            <path d="M50 88 L50 48" strokeWidth="3" />
            <path d="M50 60 Q30 50 25 35 Q40 32 50 48" />
            <path d="M50 60 Q70 50 75 35 Q60 32 50 48" />
            <path d="M50 15 C35 30 45 42 50 48 C55 42 65 30 50 15 Z" fill="rgba(200, 157, 75, 0.18)" />
            <path d="M25 88 L75 88" strokeLinecap="round" />
          </svg>
        );
      case 'stupa':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-saffron-400 fill-none stroke-[2]">
            <rect x="25" y="76" width="50" height="12" rx="1" />
            <path d="M30 76 C30 50, 70 50, 70 76 Z" fill="rgba(200, 157, 75, 0.15)" />
            <rect x="42" y="42" width="16" height="8" />
            <line x1="50" y1="42" x2="50" y2="18" strokeWidth="2.5" />
            <path d="M44 26 L56 26 M45 22 L55 22 M47 18 L53 18" />
            <circle cx="50" cy="14" r="2.5" fill="#E0B25B" />
          </svg>
        );
      case 'endlessknot':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-saffron-400 fill-none stroke-[2.2]">
            <path d="M50 18 L76 44 L50 70 L24 44 Z" />
            <path d="M37 31 L63 57 L50 70 L37 57 Z" />
            <path d="M63 31 L37 57 L50 70 L63 57 Z" />
            <path d="M50 31 L63 44 L50 57 L37 44 Z" />
          </svg>
        );
      case 'vajra':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-saffron-400 fill-none stroke-[2]">
            <circle cx="50" cy="50" r="8" fill="#1A1916" strokeWidth="2" />
            <path d="M50 42 L50 16 M44 42 Q36 28 50 16 M56 42 Q64 28 50 16" />
            <path d="M50 58 L50 84 M44 58 Q36 72 50 84 M56 58 Q64 72 50 84" />
            <line x1="38" y1="50" x2="62" y2="50" />
          </svg>
        );
      case 'conch':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-saffron-400 fill-none stroke-[2]">
            <path d="M50 18 C30 30, 25 60, 45 82 C55 86, 68 78, 70 65 C74 48, 65 30, 50 18 Z" fill="rgba(200, 157, 75, 0.12)" />
            <path d="M45 32 Q58 45 48 65 Q40 50 45 32" />
            <path d="M50 18 L45 12" strokeLinecap="round" />
          </svg>
        );
      case 'footprints':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-saffron-400 fill-none stroke-[1.8]">
            <g transform="translate(18, 15) scale(0.65)">
              <path d="M25 15 C15 15, 10 35, 12 60 C14 80, 25 85, 35 85 C45 85, 50 75, 48 50 C46 30, 40 15, 25 15 Z" />
              <circle cx="28" cy="48" r="8" />
              <circle cx="16" cy="10" r="3" fill="#E0B25B" />
              <circle cx="23" cy="8" r="2.8" fill="#E0B25B" />
              <circle cx="30" cy="8" r="2.6" fill="#E0B25B" />
              <circle cx="37" cy="9" r="2.4" fill="#E0B25B" />
              <circle cx="43" cy="12" r="2" fill="#E0B25B" />
            </g>
            <g transform="translate(48, 15) scale(0.65)">
              <path d="M35 15 C45 15, 50 35, 48 60 C46 80, 35 85, 25 85 C15 85, 10 75, 12 50 C14 30, 20 15, 35 15 Z" />
              <circle cx="32" cy="48" r="8" />
              <circle cx="44" cy="10" r="3" fill="#E0B25B" />
              <circle cx="37" cy="8" r="2.8" fill="#E0B25B" />
              <circle cx="30" cy="8" r="2.6" fill="#E0B25B" />
              <circle cx="23" cy="9" r="2.4" fill="#E0B25B" />
              <circle cx="17" cy="12" r="2" fill="#E0B25B" />
            </g>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-saffron-400 fill-none stroke-[2]">
            <circle cx="50" cy="50" r="36" />
            <polygon points="50,22 62,65 30,38 70,38 38,65" strokeWidth="1.5" />
          </svg>
        );
    }
  };

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl p-6 md:p-7 glass-card border-saffron-500/15 flex flex-col justify-between space-y-4 hover:border-saffron-500/40"
    >
      <div className="flex items-start justify-between">
        <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-saffron-500/20 group-hover:border-saffron-400/40 transition-colors">
          {renderSymbolIcon(symbol.svgType)}
        </div>
        <MetadataBadge metadata={symbol.metadata} size="sm" />
      </div>

      <div className="space-y-1.5">
        <span className="text-[10px] font-mono uppercase tracking-widest text-saffron-400 block">
          {symbol.category}
        </span>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-parchment-100 group-hover:text-saffron-300 transition-colors">
          {symbol.name}
        </h3>
        <p className="text-xs font-mono text-parchment-400 italic">
          {symbol.sanskritName}
        </p>
      </div>

      <p className="text-xs md:text-sm text-parchment-300 line-clamp-3 leading-relaxed">
        {symbol.description}
      </p>

      <div className="pt-3 border-t border-saffron-500/10 flex items-center justify-between text-xs font-mono text-saffron-400 group-hover:text-saffron-300 transition-colors">
        <span className="tracking-widest uppercase text-[10px]">Symbolic Anatomy & History</span>
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
};
