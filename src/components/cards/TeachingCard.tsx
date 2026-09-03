import React from 'react';
import { TeachingDetail } from '../../types';
import { MetadataBadge } from './MetadataBadge';

interface TeachingCardProps {
  teaching: TeachingDetail;
  onClick?: () => void;
}

export const TeachingCard: React.FC<TeachingCardProps> = ({ teaching, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white border border-[#E4E4DF] hover:border-[#B8874A] transition-all p-6 sm:p-8 flex flex-col justify-between space-y-4"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8874A] bg-[#F7F7F5] px-2 py-0.5 border border-[#E4E4DF]">
            {teaching.category}
          </span>
          <MetadataBadge metadata={teaching.metadata} size="sm" />
        </div>

        <div>
          <h3 className="text-2xl font-serif font-bold text-[#111111] group-hover:text-[#B8874A] transition-colors">
            {teaching.title}
          </h3>
          <p className="text-xs font-mono text-[#6D6D68] italic mt-0.5">
            {teaching.paliName}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#6D6D68] leading-relaxed font-light line-clamp-3">
          {teaching.summary}
        </p>
      </div>

      <div className="pt-4 border-t border-[#E4E4DF] flex items-center justify-between text-xs font-mono text-[#111111] group-hover:text-[#B8874A]">
        <span className="text-[10px] text-[#6D6D68]">{teaching.keyComponents.length} Key Principles</span>
        <span className="uppercase tracking-widest text-[10px]">Examine Doctrine →</span>
      </div>
    </div>
  );
};
