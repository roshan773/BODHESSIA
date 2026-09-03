import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BODHISATTVAS } from '../../data/bodhisattvas';
import { BodhisattvaCard } from '../cards/BodhisattvaCard';
import { BodhisattvaDetail } from '../../types';

interface BodhisattvaSectionProps {
  onNavigate: (route: string) => void;
  onSelectBodhisattva?: (b: BodhisattvaDetail) => void;
}

export const BodhisattvaSection: React.FC<BodhisattvaSectionProps> = ({ onNavigate, onSelectBodhisattva }) => {
  const displayBodhisattvas = BODHISATTVAS.slice(0, 6);

  return (
    <section className="py-24 bg-obsidian-950 border-t border-saffron-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-saffron-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ARCHETYPES OF AWAKENED COMPASSION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-parchment-100">
              BODHISATTVAS
            </h2>
            <p className="mt-2 text-base text-parchment-400 max-w-xl">
              Figures of compassion, wisdom, and boundless aspiration across Buddhist traditions.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/bodhisattvas')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-obsidian-900 border border-saffron-500/30 text-saffron-300 hover:text-parchment-100 hover:border-saffron-500/60 font-mono text-xs uppercase tracking-wider transition-all self-start md:self-auto"
          >
            <span>EXPLORE ALL BODHISATTVAS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Bodhisattva Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayBodhisattvas.map((b) => (
            <BodhisattvaCard
              key={b.id}
              bodhisattva={b}
              onClick={() => onSelectBodhisattva ? onSelectBodhisattva(b) : onNavigate('/bodhisattvas')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
