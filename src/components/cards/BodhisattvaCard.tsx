import React from 'react';
import { BodhisattvaDetail } from '../../types';
import { MetadataBadge } from './MetadataBadge';

interface BodhisattvaCardProps {
  bodhisattva: BodhisattvaDetail;
  onClick?: () => void;
}

export const BodhisattvaCard: React.FC<BodhisattvaCardProps> = ({ bodhisattva, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white border border-[#E4E4DF] hover:border-[#B8874A] transition-all flex flex-col justify-between"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
        <img
          src={bodhisattva.imageUrl}
          alt={bodhisattva.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-3 right-3">
          <MetadataBadge metadata={bodhisattva.metadata} size="sm" />
        </div>
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8874A] block">
            {bodhisattva.quality}
          </span>
          <h3 className="text-2xl font-serif font-bold text-[#111111] group-hover:text-[#B8874A] transition-colors">
            {bodhisattva.name}
          </h3>
          <p className="text-xs font-mono text-[#6D6D68] italic">
            {bodhisattva.sanskritName}
          </p>
          <p className="text-xs sm:text-sm text-[#6D6D68] line-clamp-3 leading-relaxed font-light pt-1">
            {bodhisattva.description}
          </p>
        </div>

        <div className="p-3 bg-[#F7F7F5] border border-[#E4E4DF] text-xs font-serif italic text-[#111111] line-clamp-2">
          "{bodhisattva.vows}"
        </div>

        <div className="pt-2 border-t border-[#E4E4DF] flex items-center justify-between text-xs font-mono text-[#111111] group-hover:text-[#B8874A]">
          <span className="uppercase tracking-widest text-[10px]">Iconography & Vows</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
};
