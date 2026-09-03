import React, { useState, useMemo } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { SYMBOLS } from '../data/symbols';
import { SymbolDetail } from '../types';
import { SymbolCard } from '../components/cards/SymbolCard';
import { MetadataBadge } from '../components/cards/MetadataBadge';
import { useMeditationAudio } from '../context/AudioContext';

interface SymbolsPageProps {
  onNavigate: (route: string) => void;
  initialSelectedSymbol?: SymbolDetail | null;
}

export const SymbolsPage: React.FC<SymbolsPageProps> = ({ onNavigate, initialSelectedSymbol = null }) => {
  const [selectedSymbol, setSelectedSymbol] = useState<SymbolDetail | null>(initialSelectedSymbol);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { playSingingBowl } = useMeditationAudio();

  const categories = ['All', 'Aniconic Emblem', 'Ashtamangala (Eight Auspicious)', 'Cosmological', 'Ritual'];

  const filteredSymbols = useMemo(() => {
    if (activeCategory === 'All') return SYMBOLS;
    return SYMBOLS.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const handleOpenDetail = (s: SymbolDetail) => {
    setSelectedSymbol(s);
    playSingingBowl(1.1);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F7F5] min-h-screen">
      {/* Header Banner */}
      <div className="py-16 bg-white border-b border-[#E4E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6D6D68] hover:text-[#111111] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Portal
          </button>

          <div className="max-w-3xl space-y-4">
            <MetadataBadge
              metadata={{
                status: 'Archaeological Evidence',
                tradition: 'Universal Buddhist Iconography',
                source: 'Bharhut, Sanchi, Amaravati, Gandhara'
              }}
              size="md"
            />

            <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#111111]">
              SYMBOLS OF THE DHARMA
            </h1>
            <p className="text-base font-mono text-[#B8874A] italic">
              From Aniconic Early Emblems to Auspicious Motifs and Mandalas
            </p>
            <p className="text-sm sm:text-base text-[#6D6D68] leading-relaxed font-light">
              In the earliest centuries following the Buddha’s parinirvāṇa, sculptors evoked the presence of the Awakened One through aniconic symbols: the empty throne beneath the Bodhi tree, the eight-spoked wheel, footprints, and reliquary stupas.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 mt-8 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#111111] text-white'
                    : 'bg-[#F7F7F5] text-[#6D6D68] hover:text-[#111111] border border-[#E4E4DF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Symbols */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSymbols.map((symbol) => (
            <SymbolCard
              key={symbol.id}
              symbol={symbol}
              onClick={() => handleOpenDetail(symbol)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSymbol && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white border border-[#E4E4DF] shadow-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-[#E4E4DF] bg-[#F7F7F5]">
              <div>
                <span className="font-mono text-xs text-[#B8874A] font-bold uppercase tracking-wider block">
                  {selectedSymbol.category}
                </span>
                <span className="text-xl font-serif font-bold text-[#111111]">
                  {selectedSymbol.name}
                </span>
              </div>
              <button
                onClick={() => setSelectedSymbol(null)}
                className="p-1.5 hover:bg-neutral-200 transition-colors"
              >
                <X className="w-5 h-5 text-[#111111]" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#111111]">
                  {selectedSymbol.name}
                </h2>
                <p className="text-xs font-mono text-[#B8874A] italic mt-0.5">
                  {selectedSymbol.sanskritName} {selectedSymbol.paliName && `(Pāli: ${selectedSymbol.paliName})`}
                </p>
                <p className="text-sm text-[#6D6D68] leading-relaxed font-light mt-3">
                  {selectedSymbol.description}
                </p>
              </div>

              {/* Iconography Notes */}
              <div className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8874A] block font-semibold">
                  Iconographical Notes
                </span>
                <p className="text-xs sm:text-sm text-[#6D6D68] leading-relaxed font-light">
                  {selectedSymbol.iconographyNotes}
                </p>
              </div>

              {/* Archaeological Provenance */}
              {selectedSymbol.archaeologicalFinds && (
                <div className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#111111] block font-semibold">
                    Archaeological Provenance
                  </span>
                  <p className="text-xs text-[#6D6D68]">
                    {selectedSymbol.archaeologicalFinds}
                  </p>
                </div>
              )}

              <div className="pt-2 border-t border-[#E4E4DF] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#6D6D68]">
                <MetadataBadge metadata={selectedSymbol.metadata} size="sm" />
                <span>Origin: {selectedSymbol.originPeriod}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
