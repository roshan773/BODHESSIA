import React from 'react';
import { BuddhaDetail } from '../../types';
import { MetadataBadge } from './MetadataBadge';
import { ArrowRight } from 'lucide-react';

interface BuddhaCardProps {
  buddha: BuddhaDetail;
  onClick?: () => void;
  featured?: boolean;
}

export const BuddhaCard: React.FC<BuddhaCardProps> = ({ buddha, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white border border-[#E4E4DF] hover:border-[#B8874A] transition-all flex flex-col justify-between"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#111111]">
        <img
          src={buddha.imageUrl}
          alt={buddha.paliName}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-0.5 text-xs font-mono font-bold text-[#111111] border border-[#E4E4DF]">
          {buddha.number < 10 ? `0${buddha.number}` : buddha.number}
        </div>
        <div className="absolute top-3 right-3">
          <MetadataBadge metadata={buddha.metadata} size="sm" />
        </div>
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <h3 className="text-2xl font-serif font-bold text-[#111111] group-hover:text-[#B8874A] transition-colors">
            {buddha.paliName}
          </h3>
          <p className="text-xs font-mono text-[#6D6D68] italic">
            "{buddha.meaning}"
          </p>
          <p className="text-xs text-[#6D6D68] line-clamp-3 leading-relaxed font-light pt-1">
            {buddha.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#E4E4DF] space-y-2 text-xs font-mono text-[#6D6D68]">
          <div className="flex items-center justify-between">
            <span className="text-[#B8874A]">Bodhi Tree:</span>
            <span className="text-[#111111] truncate max-w-[140px]">{buddha.bodhiTree.split('(')[0]}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#B8874A]">Lifespan:</span>
            <span className="text-[#111111]">{buddha.lifespan}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-[#E4E4DF] flex items-center justify-between text-xs font-mono text-[#111111] group-hover:text-[#B8874A]">
          <span className="uppercase tracking-widest text-[10px]">Examine Lineage</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
};
