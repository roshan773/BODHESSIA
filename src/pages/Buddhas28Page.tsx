import React, { useState, useMemo } from 'react';
import { Search, ArrowLeft, X, Info, TreeDeciduous } from 'lucide-react';
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
        return b.number >= 25;
      }
      if (selectedEraFilter === 'Earliest') {
        return b.number <= 4;
      }
      return true;
    });
  }, [searchQuery, selectedEraFilter]);

  const handleOpenDetail = (b: BuddhaDetail) => {
    setSelectedBuddha(b);
    playSingingBowl(1.0 + (b.number / 28) * 0.3);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F7F5] min-h-screen">
      {/* Header Banner */}
      <div className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#475569] hover:text-[#0F172A] font-bold mb-6 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portal
          </button>

          <div className="max-w-3xl space-y-4">
            <MetadataBadge
              metadata={{
                status: 'Canonical Text',
                tradition: 'Theravāda Lineage',
                source: 'Pāli Buddhavamsa (Khuddaka Nikāya)'
              }}
              size="md"
            />

            <h1 className="text-4xl sm:text-6xl font-serif font-black text-[#0F172A]">
              THE 28 BUDDHAS
            </h1>
            <p className="text-base font-mono text-[#B8874A] font-bold italic">
              TRADITIONAL THERAVĀDA / PĀLI ENUMERATION
            </p>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
              Enumerated in the Pāli <em>Buddhavamsa</em>, this sacred chronicle records the lineage of past Awakened Teachers from Taṇhaṅkara through Dīpaṅkara to Gautama Buddha. Authentic archaeological sculpture exists for Gautama Buddha, while ancient predecessors are presented with canonical botanical and lineage identities.
            </p>
          </div>

          <div className="mt-8 p-4 bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3 text-sm text-[#334155]">
            <Info className="w-5 h-5 text-[#B8874A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0F172A] font-mono uppercase font-bold">Editorial Integrity Note:</strong>{' '}
              This sequence is specific to the Theravāda Pāli canon. We do not invent fake historical portraits for ancient Buddhas where independent archaeological iconography is absent.
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-[#B8874A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, tree, meaning..."
              className="w-full bg-white border border-[#E2E8F0] pl-10 pr-4 py-3 text-sm font-normal text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0F172A] shadow-xs"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
            {[
              { id: 'All', label: 'All 28 Buddhas' },
              { id: 'Earliest', label: 'First 4 (Pre-Prophecy)' },
              { id: 'Current', label: 'Bhaddakappa (Present Aeon)' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedEraFilter(f.id)}
                className={`px-4 py-2.5 text-xs font-mono uppercase font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedEraFilter === f.id
                    ? 'bg-[#0F172A] text-white'
                    : 'bg-white text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0]'
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

      {/* Detail Modal */}
      {selectedBuddha && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white border border-[#E2E8F0] shadow-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-[#E2E8F0] bg-[#F8FAFC]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#0F172A] font-bold bg-white px-2.5 py-0.5 border border-[#E2E8F0]">
                  BUDDHA #{selectedBuddha.number}
                </span>
                <span className="text-lg font-serif font-bold text-[#0F172A]">
                  {selectedBuddha.paliName}
                </span>
              </div>
              <button
                onClick={() => setSelectedBuddha(null)}
                className="p-1.5 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-[#0F172A]" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                {selectedBuddha.representationType === 'historical-portrait' && selectedBuddha.imageUrl ? (
                  <div className="md:w-1/3 relative aspect-[4/5] bg-[#0A0A0A] shrink-0">
                    <img
                      src={selectedBuddha.imageUrl}
                      alt={selectedBuddha.paliName}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="md:w-1/3 relative aspect-[4/5] bg-[#0F172A] shrink-0 p-6 flex flex-col justify-between items-center text-center">
                    <span className="text-[10px] font-mono text-[#B8874A] uppercase font-bold">
                      BUDDHAVAMSA RECORD
                    </span>
                    <div className="w-16 h-16 rounded-full border border-[#B8874A]/40 flex items-center justify-center">
                      <TreeDeciduous className="w-8 h-8 text-[#B8874A]" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">
                      Traditional Symbolic Identity
                    </span>
                  </div>
                )}

                <div className="space-y-3 flex-1">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-[#0F172A]">
                      {selectedBuddha.paliName}
                    </h2>
                    <p className="text-xs font-mono text-[#B8874A] italic font-semibold">
                      "{selectedBuddha.meaning}"
                    </p>
                  </div>

                  <p className="text-sm text-[#334155] leading-relaxed font-normal">
                    {selectedBuddha.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-[#0F172A]">
                    <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0]">
                      <span className="text-[#B8874A] text-[10px] uppercase font-bold block">Bodhi Tree</span>
                      <span className="font-bold truncate block mt-0.5">{selectedBuddha.bodhiTree}</span>
                    </div>
                    <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0]">
                      <span className="text-[#B8874A] text-[10px] uppercase font-bold block">Lifespan</span>
                      <span className="font-bold block mt-0.5">{selectedBuddha.lifespan}</span>
                    </div>
                  </div>
                </div>
              </div>

              {selectedBuddha.significance && (
                <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8874A] font-bold block">
                    Canonical Significance
                  </span>
                  <p className="text-sm text-[#334155] leading-relaxed font-normal">
                    {selectedBuddha.significance}
                  </p>
                </div>
              )}

              <div className="pt-2 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#475569] font-semibold">
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
