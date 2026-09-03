import React from 'react';
import { TeachingDetail } from '../../types';
import { MetadataBadge } from './MetadataBadge';
import { BookOpen } from 'lucide-react';

interface TeachingCardProps {
  teaching: TeachingDetail;
  onClick?: () => void;
}

export const TeachingCard: React.FC<TeachingCardProps> = ({ teaching, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl p-6 md:p-7 glass-card border-saffron-500/15 flex flex-col justify-between space-y-4 hover:border-saffron-500/40"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 px-2 py-0.5 rounded">
            {teaching.category}
          </span>
          <MetadataBadge metadata={teaching.metadata} size="sm" />
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-parchment-100 group-hover:text-saffron-300 transition-colors">
            {teaching.title}
          </h3>
          <p className="text-xs font-mono text-saffron-400/80 italic mt-0.5">
            {teaching.paliName}
          </p>
        </div>

        <p className="text-xs md:text-sm text-parchment-300 leading-relaxed line-clamp-3">
          {teaching.summary}
        </p>
      </div>

      {/* Components Count & Paradigm */}
      <div className="pt-3 border-t border-saffron-500/10 space-y-2">
        {teaching.metaphorOrParadigm && (
          <div className="text-[11px] text-parchment-400/90 italic bg-obsidian-950/60 p-2.5 rounded border border-saffron-500/10">
            <span className="text-saffron-400 font-mono font-semibold not-italic">Core Paradigm: </span>
            {teaching.metaphorOrParadigm}
          </div>
        )}

        <div className="flex items-center justify-between text-xs font-mono text-saffron-400 pt-2">
          <span className="flex items-center gap-1 text-[10px] text-parchment-400">
            <BookOpen className="w-3 h-3 text-saffron-400" /> {teaching.keyComponents.length} Key Principles
          </span>
          <span className="tracking-widest uppercase text-[10px] group-hover:text-saffron-300 transition-colors">
            Explore Doctrine →
          </span>
        </div>
      </div>
    </div>
  );
};
