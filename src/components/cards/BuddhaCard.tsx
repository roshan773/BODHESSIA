import React from 'react';
import { BuddhaDetail } from '../../types';
import { MetadataBadge } from './MetadataBadge';
import { Sparkles, TreeDeciduous } from 'lucide-react';

interface BuddhaCardProps {
  buddha: BuddhaDetail;
  onClick?: () => void;
  featured?: boolean;
}

export const BuddhaCard: React.FC<BuddhaCardProps> = ({ buddha, onClick }) => {
  const isHistorical = buddha.representationType === 'historical-portrait' && buddha.imageUrl;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white border border-[#E2E8F0] hover:border-[#B8874A] transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
    >
      {/* Visual Header: Authentic Photo or Canonical-Symbolic Geometric Identity */}
      {isHistorical ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0A]">
          <img
            src={buddha.imageUrl}
            alt={buddha.paliName}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100 filter brightness-100"
          />
          <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-0.5 text-xs font-mono font-bold text-[#0F172A] border border-[#E2E8F0] shadow-xs">
            #{buddha.number < 10 ? `0${buddha.number}` : buddha.number}
          </div>
          <div className="absolute top-3 right-3">
            <MetadataBadge metadata={buddha.metadata} size="sm" />
          </div>
        </div>
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0F172A] p-6 flex flex-col justify-between border-b border-[#E2E8F0]">
          <div className="flex items-center justify-between z-10">
            <span className="font-mono text-xs font-bold text-[#B8874A] bg-[#1E293B] px-2.5 py-0.5 border border-[#334155]">
              BUDDHA #{buddha.number < 10 ? `0${buddha.number}` : buddha.number}
            </span>
            <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider font-bold">
              TRADITIONAL ACCOUNT
            </span>
          </div>

          {/* Minimal Geometric Radial Symbolism */}
          <div className="flex items-center justify-center my-auto z-10">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#B8874A]/40 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-2 rounded-full border border-[#B8874A]/20"></div>
              <TreeDeciduous className="w-7 h-7 text-[#B8874A]" />
            </div>
          </div>

          <div className="z-10 flex items-center justify-between text-[11px] font-mono text-neutral-300">
            <span className="truncate max-w-[170px] text-[#B8874A] font-semibold">
              {buddha.bodhiTree.split('(')[0]}
            </span>
            <span className="text-neutral-400 font-semibold">{buddha.lifespan}</span>
          </div>
        </div>
      )}

      {/* Narrative & Details */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-serif font-bold text-[#0F172A] group-hover:text-[#B8874A] transition-colors">
              {buddha.paliName}
            </h3>
            <span className="text-xs font-mono text-[#B8874A] font-bold">
              {buddha.number < 10 ? `0${buddha.number}` : buddha.number} / 28
            </span>
          </div>
          <p className="text-xs font-mono text-[#475569] font-medium italic">
            "{buddha.meaning}"
          </p>
          <p className="text-sm text-[#334155] line-clamp-3 leading-relaxed font-normal pt-1">
            {buddha.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#E2E8F0] space-y-2 text-xs font-mono text-[#334155]">
          <div className="flex items-center justify-between">
            <span className="text-[#B8874A] font-bold">Bodhi Tree:</span>
            <span className="text-[#0F172A] font-semibold truncate max-w-[150px]">{buddha.bodhiTree.split('(')[0]}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#B8874A] font-bold">Chronicle Era:</span>
            <span className="text-[#0F172A] font-semibold truncate max-w-[150px]">{buddha.era.split('(')[0]}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#0F172A] font-bold group-hover:text-[#B8874A]">
          <span className="uppercase tracking-widest text-[11px]">Examine Chronicle</span>
          <span className="text-sm">→</span>
        </div>
      </div>
    </div>
  );
};
