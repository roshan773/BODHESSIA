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
      className="group cursor-pointer bg-white border border-[#E2E8F0] hover:border-[#B8874A] transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0A0A]">
        <img
          src={bodhisattva.imageUrl}
          alt={bodhisattva.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100 filter brightness-100"
        />
        <div className="absolute top-3 right-3">
          <MetadataBadge metadata={bodhisattva.metadata} size="sm" />
        </div>
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8874A] font-bold block">
            {bodhisattva.quality}
          </span>
          <h3 className="text-2xl font-serif font-bold text-[#0F172A] group-hover:text-[#B8874A] transition-colors">
            {bodhisattva.name}
          </h3>
          <p className="text-xs font-mono text-[#475569] font-medium italic">
            {bodhisattva.sanskritName}
          </p>
          <p className="text-sm text-[#334155] line-clamp-3 leading-relaxed font-normal pt-1">
            {bodhisattva.description}
          </p>
        </div>

        <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-serif italic text-[#0F172A] font-medium line-clamp-2">
          "{bodhisattva.vows}"
        </div>

        <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#0F172A] font-bold group-hover:text-[#B8874A]">
          <span className="uppercase tracking-widest text-[11px]">Iconography & Vows</span>
          <span className="text-sm">→</span>
        </div>
      </div>
    </div>
  );
};
