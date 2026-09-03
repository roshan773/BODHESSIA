import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SYMBOLS } from '../../data/symbols';
import { SymbolDetail } from '../../types';
import { SymbolCard } from '../cards/SymbolCard';

interface SymbolsSectionProps {
  onNavigate: (route: string) => void;
  onSelectSymbol?: (s: SymbolDetail) => void;
}

export const SymbolsSection: React.FC<SymbolsSectionProps> = ({ onNavigate, onSelectSymbol }) => {
  const displaySymbols = SYMBOLS.slice(0, 4);

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F5] border-t border-[#E4E4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E4E4DF] gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block mb-2">
              08 · SACRED ICONOGRAPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#111111]">
              SYMBOLS OF THE DHARMA
            </h2>
            <p className="text-sm font-mono text-[#6D6D68] uppercase tracking-wider mt-1">
              A VISUAL LANGUAGE OF BUDDHIST THOUGHT
            </p>
          </div>

          <button
            onClick={() => onNavigate('/symbols')}
            className="text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#B8874A] transition-colors flex items-center gap-1 self-start md:self-auto"
          >
            <span>Explore All Symbols</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Vector Informational Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displaySymbols.map((s) => (
            <SymbolCard
              key={s.id}
              symbol={s}
              onClick={() => onSelectSymbol ? onSelectSymbol(s) : onNavigate('/symbols')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
