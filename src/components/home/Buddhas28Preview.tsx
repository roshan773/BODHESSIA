import React, { useState } from 'react';
import { ArrowRight, Sparkles, Trees, Info } from 'lucide-react';
import { BUDDHAS_28 } from '../../data/buddhas28';
import { BuddhaDetail } from '../../types';
import { BuddhaCard } from '../cards/BuddhaCard';

interface Buddhas28PreviewProps {
  onNavigate: (route: string) => void;
  onSelectBuddha?: (buddha: BuddhaDetail) => void;
}

export const Buddhas28Preview: React.FC<Buddhas28PreviewProps> = ({ onNavigate, onSelectBuddha }) => {
  // Showcase a featured subset across the 28 on the homepage
  const featuredBuddhas = [
    BUDDHAS_28[0], // Taṇhaṅkara (#1)
    BUDDHAS_28[3], // Dīpaṅkara (#4)
    BUDDHAS_28[12], // Padumuttara (#13)
    BUDDHAS_28[21], // Vipassī (#22)
    BUDDHAS_28[24], // Kakusandha (#25)
    BUDDHAS_28[27], // Gautama (#28)
  ];

  return (
    <section className="py-24 bg-obsidian-900 border-t border-saffron-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-saffron-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CHRONICLE OF BUDDHAS (BUDDHAVAMSA)</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-parchment-100">
              THE 28 BUDDHAS
            </h2>
            <p className="mt-2 text-base text-parchment-400 max-w-xl">
              A lineage preserved through the Pāli canonical chronicle, culminating in Gautama.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/28-buddhas')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-obsidian-950 border border-saffron-500/30 text-saffron-300 hover:text-parchment-100 hover:border-saffron-500/60 font-mono text-xs uppercase tracking-wider transition-all self-start md:self-auto"
          >
            <span>EXPLORE ALL 28 BUDDHAS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Editorial Notice Banner */}
        <div className="p-4 rounded-xl bg-obsidian-950/80 border border-saffron-500/20 flex items-start gap-3 mb-10 text-xs text-parchment-400">
          <Info className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-mono text-saffron-300 font-semibold uppercase tracking-wider">
              Theravāda Canonical Context:
            </span>{' '}
            This specific succession of 28 Buddhas is recorded in the Pāli <em>Buddhavamsa</em> (Khuddaka Nikāya). Other traditions (such as Mahāyāna texts) venerate countless Buddhas of the ten directions and the Seven Buddhas of Antiquity (Saptatathāgata).
          </div>
        </div>

        {/* Featured 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBuddhas.map((b) => (
            <BuddhaCard
              key={b.id}
              buddha={b}
              onClick={() => onSelectBuddha ? onSelectBuddha(b) : onNavigate('/28-buddhas')}
            />
          ))}
        </div>

        {/* Bottom Banner to 28-Buddhas Page */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('/28-buddhas')}
            className="text-xs font-mono uppercase tracking-[0.2em] text-saffron-400 hover:text-saffron-200 border-b border-saffron-500/30 hover:border-saffron-400 pb-1 transition-all"
          >
            View Complete 28 Lineage with Bodhi Trees & Lifespans →
          </button>
        </div>
      </div>
    </section>
  );
};
