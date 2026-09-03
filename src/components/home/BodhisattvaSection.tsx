import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BODHISATTVAS } from '../../data/bodhisattvas';
import { BodhisattvaDetail } from '../../types';
import { MetadataBadge } from '../cards/MetadataBadge';

interface BodhisattvaSectionProps {
  onNavigate: (route: string) => void;
  onSelectBodhisattva?: (b: BodhisattvaDetail) => void;
}

export const BodhisattvaSection: React.FC<BodhisattvaSectionProps> = ({
  onNavigate,
  onSelectBodhisattva
}) => {
  const displayBodhisattvas = BODHISATTVAS.slice(0, 6);

  const handleClick = (b: BodhisattvaDetail) => {
    if (onSelectBodhisattva) onSelectBodhisattva(b);
    else onNavigate('/bodhisattvas');
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F5] border-t border-[#E4E4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E4E4DF] gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block mb-2">
              06 · COMPASSIONATE ARCHETYPES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#111111]">
              BODHISATTVAS
            </h2>
            <p className="text-sm font-mono text-[#6D6D68] uppercase tracking-wider mt-1">
              FIGURES OF COMPASSION, WISDOM AND ASPIRATION
            </p>
          </div>

          <button
            onClick={() => onNavigate('/bodhisattvas')}
            className="text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#B8874A] transition-colors flex items-center gap-1 self-start md:self-auto"
          >
            <span>Explore All 8 Bodhisattvas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Varied Editorial Composition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayBodhisattvas.map((b) => (
            <div
              key={b.id}
              onClick={() => handleClick(b)}
              className="group cursor-pointer bg-white border border-[#E4E4DF] hover:border-[#B8874A] transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                <img
                  src={b.imageUrl}
                  alt={b.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4">
                  <MetadataBadge metadata={b.metadata} size="sm" />
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8874A] block">
                    {b.quality}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#111111] group-hover:text-[#B8874A] transition-colors">
                    {b.name}
                  </h3>
                  <p className="text-xs font-mono text-[#6D6D68] italic">
                    {b.sanskritName}
                  </p>
                  <p className="text-xs sm:text-sm text-[#6D6D68] line-clamp-3 leading-relaxed font-light pt-2">
                    {b.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4E4DF] flex items-center justify-between text-xs font-mono text-[#111111] group-hover:text-[#B8874A]">
                  <span className="uppercase tracking-widest text-[10px]">Iconography & Vow</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
