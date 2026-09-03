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
      className="group cursor-pointer bg-white border border-[#E2E8F0] hover:border-[#B8874A] transition-all p-6 sm:p-8 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8874A] font-bold bg-[#F8FAFC] px-2.5 py-0.5 border border-[#E2E8F0]">
            {teaching.category}
          </span>
          <MetadataBadge metadata={teaching.metadata} size="sm" />
        </div>

        <div>
          <h3 className="text-2xl font-serif font-bold text-[#0F172A] group-hover:text-[#B8874A] transition-colors">
            {teaching.title}
          </h3>
          <p className="text-xs font-mono text-[#475569] font-medium italic mt-0.5">
            {teaching.paliName}
          </p>
        </div>

        <p className="text-sm text-[#334155] leading-relaxed font-normal line-clamp-3">
          {teaching.summary}
        </p>
      </div>

      <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#0F172A] font-bold group-hover:text-[#B8874A]">
        <span className="text-xs text-[#64748B] font-semibold">{teaching.keyComponents.length} Key Principles</span>
        <span className="uppercase tracking-widest text-[11px]">Examine Doctrine →</span>
      </div>
    </div>
  );
};
