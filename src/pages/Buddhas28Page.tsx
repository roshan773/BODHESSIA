import React, { useState, useMemo } from 'react';
import { Sparkles, Search, Trees, ShieldCheck, ArrowLeft, X, Filter, Info } from 'lucide-react';
import { BUDDHAS_28 } from '../data/buddhas28';
import { BuddhaDetail } from '../types';
import { BuddhaCard } from '../components/cards/BuddhaCard';
import { MetadataBadge } from '../components/cards/MetadataBadge';
import { useMeditationAudio } from '../context/AudioContext';

interface Buddhas28PageProps {
  onNavigate: (route: string) => void;
  initialSelectedBuddha?: BuddhaDetail | null;
}

export const Buddhas28Page: React.FC<Buddhas28PageProps> = ({ onNavigate, initialSelectedBuddha = null }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBuddha, setSelectedBuddha] = useState<BuddhaDetail | null>(initialSelectedBuddha);
  const [selectedEraFilter, setSelectedEraFilter] = useState<string>('All');
  const { playSingingBowl } = useMeditationAudio();

  const filteredBuddhas = useMemo(() => {
    return BUDDHAS_28.filter((b) => {
      const matchSearch =
        b.paliName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.bodhiTree.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.description.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchSearch) return false;
      if (selectedEraFilter === 'Current') {
        return b.number >= 25; // Kakusandha, Konagamana, Kassapa, Gautama
      }
      if (selectedEraFilter === 'Earliest') {
        return b.number <= 4; // Tanhankara, Medhankara, Saranankara, Dipankara
      }
      return true;
    });
  }, [searchQuery, selectedEraFilter]);

  const handleOpenDetail = (b: BuddhaDetail) => {
    setSelectedBuddha(b);
    playSingingBowl(1.0 + (b.number / 28) * 0.3);
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
                  status: 'Canonical Text',
                  tradition: 'Theravāda Lineage',
                  source: 'Pāli Buddhavamsa (Khuddaka Nikāya)'
                }}
                size="md"
              />
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-parchment-100">
              THE 28 BUDDHAS
            </h1>
            <p className="text-lg font-mono text-saffron-400 italic">
              The Canonical Lineage of Awakened Ones across Cosmic Aeons
            </p>
            <p className="text-sm sm:text-base text-parchment-300 leading-relaxed font-light">
              Enumerated in the Pāli <em>Buddhavamsa</em>, this sacred lineage records the succession of past Awakened Teachers from Taṇhaṅkara through Dīpaṅkara (who first prophesied Gautama's awakening) to Siddhārtha Gautama in our present Fortunate Aeon (Bhaddakappa).
            </p>
          </div>

          {/* Academic Context Alert */}
          <div className="mt-8 p-4 rounded-xl bg-obsidian-950/80 border border-saffron-500/20 flex items-start gap-3 text-xs text-parchment-400">
            <Info className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-saffron-300 font-semibold uppercase">
                Canonical Distinction:
              </span>{' '}
              This 28-Buddha sequence is standard in Theravāda Pāli literature. In early Sanskrit & epigraphical records, a core group of Seven Past Buddhas (Saptatathāgata: Vipassī to Gautama) is shared across all early traditions, while Mahāyāna texts recognize innumerable Buddhas across the ten directions.
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-saffron-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, tree (e.g. Ironwood), meaning..."
              className="w-full bg-obsidian-900 border border-saffron-500/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-parchment-200 placeholder:text-parchment-500 focus:outline-none focus:border-saffron-400"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
            {[
              { id: 'All', label: 'All 28 Buddhas' },
              { id: 'Earliest', label: 'First 4 (Pre-Prophecy)' },
              { id: 'Current', label: 'Bhaddakappa (Present Aeon)' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedEraFilter(f.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono uppercase whitespace-nowrap transition-all ${
                  selectedEraFilter === f.id
                    ? 'bg-saffron-500 text-obsidian-950 font-semibold'
                    : 'bg-obsidian-900 text-parchment-400 hover:text-parchment-200 border border-saffron-500/15'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of All 28 Buddhas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBuddhas.map((buddha) => (
            <BuddhaCard
              key={buddha.id}
              buddha={buddha}
              onClick={() => handleOpenDetail(buddha)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal for Selected Buddha */}
      {selectedBuddha && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-obsidian-900 border border-saffron-500/30 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-saffron-500/20 bg-obsidian-950/80">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-saffron-400 font-bold bg-saffron-500/10 px-2 py-0.5 rounded border border-saffron-500/20">
                  BUDDHA #{selectedBuddha.number}
                </span>
                <span className="text-base font-serif font-bold text-parchment-100">
                  {selectedBuddha.paliName}
                </span>
              </div>
              <button
                onClick={() => setSelectedBuddha(null)}
                className="p-1.5 rounded-lg text-parchment-400 hover:text-parchment-100 hover:bg-obsidian-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative aspect-[4/5] rounded-xl overflow-hidden bg-obsidian-950 shrink-0">
                  <img
                    src={selectedBuddha.imageUrl}
                    alt={selectedBuddha.paliName}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="space-y-3 flex-1">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-parchment-100">
                      {selectedBuddha.paliName}
                    </h2>
                    <p className="text-xs font-mono text-saffron-400 italic">
                      "{selectedBuddha.meaning}"
                    </p>
                  </div>

                  <p className="text-sm text-parchment-300 leading-relaxed">
                    {selectedBuddha.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-parchment-300">
                    <div className="p-2.5 rounded bg-obsidian-950 border border-saffron-500/10">
                      <span className="text-saffron-400 text-[10px] uppercase block">Bodhi Tree</span>
                      <span className="font-medium truncate block">{selectedBuddha.bodhiTree}</span>
                    </div>
                    <div className="p-2.5 rounded bg-obsidian-950 border border-saffron-500/10">
                      <span className="text-saffron-400 text-[10px] uppercase block">Lifespan</span>
                      <span className="font-medium">{selectedBuddha.lifespan}</span>
                    </div>
                  </div>
                </div>
              </div>

              {selectedBuddha.significance && (
                <div className="p-4 rounded-xl bg-obsidian-950 border border-saffron-500/15 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-saffron-400 block">
                    Canonical Significance
                  </span>
                  <p className="text-xs text-parchment-300 leading-relaxed">
                    {selectedBuddha.significance}
                  </p>
                </div>
              )}

              {selectedBuddha.quote && (
                <blockquote className="p-4 rounded-xl bg-obsidian-950 border-l-2 border-saffron-500 text-sm font-serif italic text-parchment-200">
                  "{selectedBuddha.quote}"
                </blockquote>
              )}

              <div className="pt-2 border-t border-saffron-500/15 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-parchment-400">
                <MetadataBadge metadata={selectedBuddha.metadata} size="sm" />
                <span>Source: {selectedBuddha.metadata.source}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
