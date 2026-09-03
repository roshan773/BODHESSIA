import React from 'react';
import { ArrowRight, MapPin, Landmark } from 'lucide-react';
import { SACRED_PLACES } from '../../data/sacredPlaces';

interface SacredPlacesSectionProps {
  onNavigate: (route: string) => void;
}

export const SacredPlacesSection: React.FC<SacredPlacesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F5] border-t border-[#E4E4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E4E4DF] gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block mb-2">
              11 · SACRED GEOGRAPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#111111]">
              SACRED PLACES
            </h2>
            <p className="text-sm font-mono text-[#6D6D68] uppercase tracking-wider mt-1">
              MONUMENTS OF MEMORY, AWAKENING & DEVOTION
            </p>
          </div>

          <button
            onClick={() => onNavigate('/history')}
            className="text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#B8874A] transition-colors flex items-center gap-1 self-start md:self-auto"
          >
            <span>Explore Pilgrimage Sites</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Large Image Editorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SACRED_PLACES.slice(0, 4).map((place) => (
            <div
              key={place.id}
              onClick={() => onNavigate('/history')}
              className="group cursor-pointer bg-white border border-[#E4E4DF] hover:border-[#B8874A] transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                <img
                  src={place.imageUrl}
                  alt={place.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                {place.unescoYear && (
                  <div className="absolute top-3 left-3 bg-white/95 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-[#111111] border border-[#E4E4DF]">
                    UNESCO {place.unescoYear}
                  </div>
                )}
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8874A] block">
                    {place.country} · {place.region.split(',')[0]}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#111111] group-hover:text-[#B8874A] transition-colors mt-0.5">
                    {place.name.split('(')[0]}
                  </h3>
                  <p className="text-xs text-[#6D6D68] line-clamp-2 leading-relaxed font-light mt-2">
                    {place.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E4E4DF] flex items-center justify-between text-xs font-mono text-[#111111] group-hover:text-[#B8874A]">
                  <span className="truncate max-w-[150px] text-[#6D6D68]">{place.designation}</span>
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
