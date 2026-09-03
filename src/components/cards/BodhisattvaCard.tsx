import React from 'react';
import { BodhisattvaDetail } from '../../types';
import { MetadataBadge } from './MetadataBadge';
import { HeartHandshake } from 'lucide-react';

interface BodhisattvaCardProps {
  bodhisattva: BodhisattvaDetail;
  onClick?: () => void;
}

export const BodhisattvaCard: React.FC<BodhisattvaCardProps> = ({ bodhisattva, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl overflow-hidden glass-card transition-all duration-500 flex flex-col justify-between border-saffron-500/15"
    >
      {/* Top Image Preview */}
      <div className="relative aspect-[4/3] overflow-hidden bg-obsidian-950">
        <img
          src={bodhisattva.imageUrl}
          alt={bodhisattva.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />

        <div className="absolute top-3 right-3">
          <MetadataBadge metadata={bodhisattva.metadata} size="sm" />
        </div>

        <div className="absolute bottom-3 inset-x-3">
          <span className="text-[10px] uppercase font-mono tracking-widest text-saffron-400 block mb-0.5">
            {bodhisattva.quality}
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-parchment-100 group-hover:text-saffron-300 transition-colors">
            {bodhisattva.name}
          </h3>
          <p className="text-xs font-mono text-parchment-400 italic">
            {bodhisattva.sanskritName}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs md:text-sm text-parchment-300 line-clamp-3 leading-relaxed">
          {bodhisattva.description}
        </p>

        {/* Vow quote snippet */}
        <div className="p-3 rounded bg-obsidian-950/70 border border-saffron-500/10">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-saffron-400 mb-1">
            <HeartHandshake className="w-3 h-3" /> Transcendent Vow
          </div>
          <p className="text-xs font-serif italic text-parchment-300/90 line-clamp-2">
            "{bodhisattva.vows}"
          </p>
        </div>

        {/* Iconography tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {bodhisattva.iconography.slice(0, 2).map((item, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono text-parchment-400 bg-obsidian-900 px-2 py-0.5 rounded border border-saffron-500/10 truncate max-w-full"
            >
              • {item}
            </span>
          ))}
        </div>

        <div className="pt-2 flex items-center justify-between text-xs font-mono text-saffron-400 group-hover:text-saffron-300 transition-colors border-t border-saffron-500/10">
          <span className="tracking-widest uppercase text-[10px]">Explore Iconography & Vows</span>
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
};
