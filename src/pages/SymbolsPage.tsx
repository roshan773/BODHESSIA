import React, { useState, useMemo } from 'react';
import { ArrowLeft, X, Sparkles, Layers, Info, Landmark } from 'lucide-react';
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
    <div className="pt-24 pb-20 bg-obsidian-950 min-h-screen">
      {/* Header Banner */}
      <div className="py-16 bg-gradient-to-b from-obsidian-900 to-obsidian-950 border-b border-saffron-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-saffron-400 hover:text-saffron-200 mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Museum Portal
          </button>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <MetadataBadge
                metadata={{
                  status: 'Archaeological Evidence',
                  tradition: 'Universal Buddhist Iconography',
                  source: 'Bharhut, Sanchi, Amaravati, Gandhara'
                }}
                size="md"
              />
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-parchment-100">
              SYMBOLS OF THE DHARMA
            </h1>
            <p className="text-lg font-mono text-saffron-400 italic">
              From Aniconic Early Buddhism to Auspicious Emblems & Cosmic Mandalas
            </p>
            <p className="text-sm sm:text-base text-parchment-300 leading-relaxed font-light">
              In the earliest centuries following the Buddha’s parinirvāṇa, artists abstained from carving human likenesses of the Buddha, choosing instead to evoke his presence through profound aniconic symbols—the empty throne beneath the Bodhi tree, the wheel, footprints, and stupas.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 mt-8 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-saffron-500 text-obsidian-950 font-semibold'
                    : 'bg-obsidian-900 text-parchment-400 hover:text-parchment-200 border border-saffron-500/15'
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-obsidian-900 border border-saffron-500/30 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-saffron-500/20 bg-obsidian-950/80">
              <div>
                <span className="font-mono text-xs text-saffron-400 font-bold uppercase tracking-wider block">
                  {selectedSymbol.category}
                </span>
                <span className="text-xl font-serif font-bold text-parchment-100">
                  {selectedSymbol.name}
                </span>
              </div>
              <button
                onClick={() => setSelectedSymbol(null)}
                className="p-1.5 rounded-lg text-parchment-400 hover:text-parchment-100 hover:bg-obsidian-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <div>
                <h2 className="text-3xl font-serif font-bold text-parchment-100">
                  {selectedSymbol.name}
                </h2>
                <p className="text-xs font-mono text-saffron-400 italic mt-0.5">
                  {selectedSymbol.sanskritName} {selectedSymbol.paliName && `(Pāli: ${selectedSymbol.paliName})`}
                </p>
                <p className="text-sm text-parchment-300 leading-relaxed font-light mt-3">
                  {selectedSymbol.description}
                </p>
              </div>

              {/* Iconography Notes */}
              <div className="p-4 rounded-xl bg-obsidian-950 border border-saffron-500/15 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-saffron-400 block font-semibold">
                  Iconographical Notes
                </span>
                <p className="text-xs sm:text-sm text-parchment-300 leading-relaxed">
                  {selectedSymbol.iconographyNotes}
                </p>
              </div>

              {/* Archaeological Finds */}
              {selectedSymbol.archaeologicalFinds && (
                <div className="p-4 rounded-xl bg-obsidian-950/70 border border-amber-500/20 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 flex items-center gap-1 font-semibold">
                    <Landmark className="w-3 h-3" /> Historical & Archaeological Excavations
                  </span>
                  <p className="text-xs text-parchment-300">
                    {selectedSymbol.archaeologicalFinds}
                  </p>
                </div>
              )}

              <div className="pt-2 border-t border-saffron-500/15 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-parchment-400">
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
