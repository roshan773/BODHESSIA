import React, { useState } from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { BUDDHAS_28 } from '../../data/buddhas28';
import { BuddhaDetail } from '../../types';
import { MetadataBadge } from '../cards/MetadataBadge';
import { useMeditationAudio } from '../../context/AudioContext';

interface Buddhas28PreviewProps {
  onNavigate: (route: string) => void;
  onSelectBuddha?: (buddha: BuddhaDetail) => void;
}

export const Buddhas28Preview: React.FC<Buddhas28PreviewProps> = ({ onNavigate, onSelectBuddha }) => {
  const [activeIdx, setActiveIdx] = useState<number>(3); // Dīpaṅkara by default
  const { playSingingBowl } = useMeditationAudio();

  const activeBuddha = BUDDHAS_28[activeIdx];

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    playSingingBowl(1.0 + (idx / 28) * 0.3);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#262626] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8874A] font-bold block mb-2">
              05 · SIGNATURE CHRONICLE
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-black text-white">
              THE 28 BUDDHAS
            </h2>
            <p className="text-sm font-mono text-neutral-300 mt-1 uppercase tracking-wider font-semibold">
              A LINEAGE PRESERVED THROUGH PĀLI TRADITION
            </p>
          </div>

          <button
            onClick={() => onNavigate('/28-buddhas')}
            className="text-xs font-mono uppercase tracking-wider text-[#B8874A] hover:text-white font-bold transition-colors flex items-center gap-1 self-start md:self-auto"
          >
            <span>Explore All 28 Records</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Canonical Distinction Banner */}
        <div className="p-4 bg-[#141414] border border-[#262626] flex items-start gap-3 mb-12 text-sm text-neutral-300">
          <Info className="w-5 h-5 text-[#B8874A] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-mono uppercase font-bold">Theravāda Pāli Canonical Account:</strong>{' '}
            Recorded in the <em>Buddhavamsa</em> (Khuddaka Nikāya). Other traditions venerate the Seven Buddhas of Antiquity and infinite Buddhas across the cosmic directions.
          </div>
        </div>

        {/* Interactive Lineage Interface: Left Numbered Sequence + Right Active Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Scrollable Numbered List */}
          <div className="lg:col-span-6 max-h-[540px] overflow-y-auto pr-2 divide-y divide-[#262626] border-t border-b border-[#262626]">
            {BUDDHAS_28.map((b, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={b.id}
                  onClick={() => handleSelect(idx)}
                  className={`w-full py-4 px-4 text-left transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#1C1C1A] text-white border-l-4 border-[#B8874A]'
                      : 'hover:bg-[#141414] text-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-sm font-bold text-[#B8874A]">
                      {b.number < 10 ? `0${b.number}` : b.number}
                    </span>
                    <div>
                      <span className="text-xl sm:text-2xl font-serif font-bold block text-white group-hover:text-[#B8874A] transition-colors">
                        {b.paliName}
                      </span>
                      <span className="text-xs font-mono text-neutral-400 line-clamp-1">
                        {b.meaning}
                      </span>
                    </div>
                  </div>

                  <span className="text-sm font-mono text-[#B8874A] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Buddha Live Feature Panel */}
          <div className="lg:col-span-6 bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B8874A] font-bold">
                  Buddha {activeBuddha.number < 10 ? `0${activeBuddha.number}` : activeBuddha.number} of 28
                </span>
                <MetadataBadge metadata={activeBuddha.metadata} size="sm" darkTheme={true} />
              </div>

              <div className="relative aspect-[16/9] overflow-hidden bg-black border border-[#262626]">
                <img
                  src={activeBuddha.imageUrl}
                  alt={activeBuddha.paliName}
                  className="w-full h-full object-cover object-center filter brightness-100"
                />
              </div>

              <div>
                <h3 className="text-3xl font-serif font-black text-white">
                  {activeBuddha.paliName}
                </h3>
                <p className="text-xs font-mono text-[#B8874A] italic font-semibold mt-0.5">
                  "{activeBuddha.meaning}"
                </p>
              </div>

              <p className="text-sm text-neutral-200 leading-relaxed font-normal">
                {activeBuddha.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-neutral-200">
                <div className="p-3.5 bg-[#0A0A0A] border border-[#262626]">
                  <span className="text-[#B8874A] text-[10px] uppercase font-bold block">Bodhi Tree</span>
                  <span className="font-bold truncate block mt-0.5">{activeBuddha.bodhiTree.split('(')[0]}</span>
                </div>
                <div className="p-3.5 bg-[#0A0A0A] border border-[#262626]">
                  <span className="text-[#B8874A] text-[10px] uppercase font-bold block">Lifespan</span>
                  <span className="font-bold block mt-0.5">{activeBuddha.lifespan}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectBuddha ? onSelectBuddha(activeBuddha) : onNavigate('/28-buddhas')}
              className="w-full py-3.5 bg-white hover:bg-[#B8874A] text-[#0A0A0A] hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>View Full Lineage Record</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
