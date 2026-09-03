import React from 'react';
import { MetadataTag } from '../../types';

interface MetadataBadgeProps {
  metadata: MetadataTag;
  className?: string;
  size?: 'sm' | 'md';
}

export const MetadataBadge: React.FC<MetadataBadgeProps> = ({ metadata, className = '', size = 'sm' }) => {
  const getBadgeStyle = (status: string) => {
    switch (status) {
      case 'Canonical Text':
        return 'bg-emerald-950/40 text-emerald-300 border-emerald-700/40';
      case 'Historical Record':
        return 'bg-amber-950/40 text-amber-300 border-amber-700/40';
      case 'Archaeological Evidence':
        return 'bg-rose-950/40 text-rose-300 border-rose-700/40';
      case 'Scholarly Interpretation':
        return 'bg-cyan-950/40 text-cyan-300 border-cyan-700/40';
      default:
        return 'bg-stone-900/60 text-stone-300 border-stone-700/40';
    }
  };

  const isSmall = size === 'sm';

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {metadata.status && (
        <span
          className={`inline-flex items-center font-mono uppercase tracking-widest rounded-sm border px-2 py-0.5 ${
            isSmall ? 'text-[9px]' : 'text-[11px]'
          } ${getBadgeStyle(metadata.status)}`}
        >
          {metadata.status}
        </span>
      )}
      {metadata.tradition && (
        <span
          className={`inline-flex items-center font-mono uppercase tracking-wider text-parchment-400 bg-obsidian-800/80 border border-saffron-500/20 rounded-sm px-2 py-0.5 ${
            isSmall ? 'text-[9px]' : 'text-[11px]'
          }`}
        >
          {metadata.tradition}
        </span>
      )}
    </div>
  );
};
