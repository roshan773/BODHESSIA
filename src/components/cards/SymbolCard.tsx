import React from 'react';
import { SymbolDetail } from '../../types';
import { MetadataBadge } from './MetadataBadge';

interface SymbolCardProps {
  symbol: SymbolDetail;
  onClick?: () => void;
}

export const SymbolCard: React.FC<SymbolCardProps> = ({ symbol, onClick }) => {
  const renderSymbolSvg = (type: string) => {
    switch (type) {
      case 'dharmachakra':
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-[#0F172A] group-hover:stroke-[#B8874A] fill-none stroke-[2] transition-colors">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="12" fill="#F8FAFC" />
            <line x1="50" y1="10" x2="50" y2="90" />
            <line x1="10" y1="50" x2="90" y2="50" />
            <line x1="22" y1="22" x2="78" y2="78" />
            <line x1="22" y1="78" x2="78" y2="22" />
          </svg>
        );
      case 'lotus':
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-[#0F172A] group-hover:stroke-[#B8874A] fill-none stroke-[2] transition-colors">
            <path d="M50 20 C40 40, 30 60, 50 82 C70 60, 60 40, 50 20 Z" />
            <path d="M50 82 C30 75, 15 55, 25 35 C32 55, 42 70, 50 82 Z" />
            <path d="M50 82 C70 75, 85 55, 75 35 C68 55, 58 70, 50 82 Z" />
            <path d="M20 82 C35 88, 65 88, 80 82" />
          </svg>
        );
      case 'bodhitree':
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-[#0F172A] group-hover:stroke-[#B8874A] fill-none stroke-[2] transition-colors">
            <path d="M50 88 L50 48" strokeWidth="3" />
            <path d="M50 60 Q30 50 25 35 Q40 32 50 48" />
            <path d="M50 60 Q70 50 75 35 Q60 32 50 48" />
            <path d="M50 15 C35 30 45 42 50 48 C55 42 65 30 50 15 Z" />
            <path d="M25 88 L75 88" />
          </svg>
        );
      case 'stupa':
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-[#0F172A] group-hover:stroke-[#B8874A] fill-none stroke-[2] transition-colors">
            <rect x="25" y="76" width="50" height="12" />
            <path d="M30 76 C30 50, 70 50, 70 76 Z" />
            <rect x="42" y="42" width="16" height="8" />
            <line x1="50" y1="42" x2="50" y2="18" strokeWidth="2.5" />
            <circle cx="50" cy="14" r="3" fill="#B8874A" />
          </svg>
        );
      case 'endlessknot':
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-[#0F172A] group-hover:stroke-[#B8874A] fill-none stroke-[2.2] transition-colors">
            <path d="M50 18 L76 44 L50 70 L24 44 Z" />
            <path d="M37 31 L63 57 L50 70 L37 57 Z" />
            <path d="M63 31 L37 57 L50 70 L63 57 Z" />
          </svg>
        );
      case 'vajra':
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-[#0F172A] group-hover:stroke-[#B8874A] fill-none stroke-[2] transition-colors">
            <circle cx="50" cy="50" r="7" />
            <path d="M50 43 L50 16 M44 43 Q36 28 50 16 M56 43 Q64 28 50 16" />
            <path d="M50 57 L50 84 M44 57 Q36 72 50 84 M56 57 Q64 72 50 84" />
          </svg>
        );
      case 'conch':
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-[#0F172A] group-hover:stroke-[#B8874A] fill-none stroke-[2] transition-colors">
            <path d="M50 18 C30 30, 25 60, 45 82 C55 86, 68 78, 70 65 C74 48, 65 30, 50 18 Z" />
            <path d="M45 32 Q58 45 48 65" />
          </svg>
        );
      case 'footprints':
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-[#0F172A] group-hover:stroke-[#B8874A] fill-none stroke-[1.8] transition-colors">
            <g transform="translate(20, 15) scale(0.6)">
              <path d="M25 15 C15 15, 10 35, 12 60 C14 80, 25 85, 35 85 C45 85, 50 75, 48 50 C46 30, 40 15, 25 15 Z" />
              <circle cx="28" cy="48" r="7" />
            </g>
            <g transform="translate(48, 15) scale(0.6)">
              <path d="M35 15 C45 15, 50 35, 48 60 C46 80, 35 85, 25 85 C15 85, 10 75, 12 50 C14 30, 20 15, 35 15 Z" />
              <circle cx="32" cy="48" r="7" />
            </g>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-[#0F172A] group-hover:stroke-[#B8874A] fill-none stroke-[2] transition-colors">
            <circle cx="50" cy="50" r="36" />
          </svg>
        );
    }
  };

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white border border-[#E2E8F0] hover:border-[#B8874A] transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="p-3.5 bg-[#F8FAFC] border border-[#E2E8F0] group-hover:border-[#B8874A] transition-colors shadow-xs">
          {renderSymbolSvg(symbol.svgType)}
        </div>
        <MetadataBadge metadata={symbol.metadata} size="sm" />
      </div>

      <div className="space-y-1.5">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B8874A] font-bold block">
          {symbol.category}
        </span>
        <h3 className="text-2xl font-serif font-bold text-[#0F172A] group-hover:text-[#B8874A] transition-colors">
          {symbol.name}
        </h3>
        <p className="text-xs font-mono text-[#475569] font-medium italic">
          {symbol.sanskritName}
        </p>
        <p className="text-sm text-[#334155] line-clamp-3 leading-relaxed font-normal pt-1">
          {symbol.description}
        </p>
      </div>

      <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#0F172A] font-bold group-hover:text-[#B8874A]">
        <span className="uppercase tracking-widest text-[11px]">Symbolic Context</span>
        <span className="text-sm">→</span>
      </div>
    </div>
  );
};
