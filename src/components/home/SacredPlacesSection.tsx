import React from 'react';
import { Sparkles, MapPin, Landmark } from 'lucide-react';
import { SACRED_PLACES } from '../../data/sacredPlaces';

interface SacredPlacesSectionProps {
  onNavigate: (route: string) => void;
}

export const SacredPlacesSection: React.FC<SacredPlacesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-obsidian-900 border-t border-saffron-500/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-saffron-400 mb-2">
              <Landmark className="w-3.5 h-3.5" />
              <span>SACRED GEOGRAPHY & ARCHAEOLOGICAL MONUMENTS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-parchment-100">
              SACRED VISUALS
            </h2>
            <p className="mt-2 text-base text-parchment-400 max-w-xl">
              Monuments of stone, brick, and spirit that preserve the memory of the Awakened One across millennia.
            </p>
          </div>
        </div>

        {/* 4-Item Grid of Monumental Sites */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SACRED_PLACES.slice(0, 4).map((place) => (
            <div
              key={place.id}
              onClick={() => onNavigate('/history')}
              className="group cursor-pointer rounded-xl overflow-hidden glass-card border-saffron-500/15 flex flex-col justify-between hover:border-saffron-500/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-obsidian-950">
                <img
                  src={place.imageUrl}
                  alt={place.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />

                {place.unescoYear && (
                  <div className="absolute top-3 left-3 bg-obsidian-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-saffron-500/20 text-[9px] font-mono text-saffron-300 uppercase tracking-widest">
                    UNESCO {place.unescoYear}
                  </div>
                )}

                <div className="absolute bottom-3 inset-x-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-saffron-400 block">
                    {place.country} · {place.region.split(',')[0]}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-parchment-100 group-hover:text-saffron-300 transition-colors">
                    {place.name.split('(')[0]}
                  </h3>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <p className="text-xs text-parchment-300 line-clamp-3 leading-relaxed">
                  {place.description}
                </p>

                <div className="pt-2 border-t border-saffron-500/10 flex items-center justify-between text-[11px] font-mono text-saffron-400">
                  <span className="truncate max-w-[170px] text-parchment-400">{place.designation}</span>
                  <span>Explore →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
