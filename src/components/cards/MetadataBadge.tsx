import React from 'react';
import { MetadataTag } from '../../types';

interface MetadataBadgeProps {
  metadata: MetadataTag;
  className?: string;
  size?: 'sm' | 'md';
  darkTheme?: boolean;
}

export const MetadataBadge: React.FC<MetadataBadgeProps> = ({
  metadata,
  className = '',
  size = 'sm',
  darkTheme = false
}) => {
  const getBadgeStyle = (status: string) => {
    if (darkTheme) {
      switch (status) {
        case 'Canonical Text':
          return 'bg-[#15281E] text-[#86D2A8] border-[#254B38] font-bold';
        case 'Historical Record':
          return 'bg-[#2A2014] text-[#E5B575] border-[#554026] font-bold';
        case 'Archaeological Evidence':
          return 'bg-[#2A1714] text-[#F29F92] border-[#552B24] font-bold';
        case 'Scholarly Interpretation':
          return 'bg-[#152430] text-[#93CAED] border-[#254860] font-bold';
        default:
          return 'bg-[#1F1F1E] text-[#B5B5AF] border-[#383835] font-bold';
      }
    }

    switch (status) {
      case 'Canonical Text':
        return 'bg-[#EBF3EF] text-[#164E30] border-[#A8D5BA] font-bold';
      case 'Historical Record':
        return 'bg-[#F8F3EC] text-[#784A1E] border-[#D9BE9B] font-bold';
      case 'Archaeological Evidence':
        return 'bg-[#FBF0ED] text-[#832B1D] border-[#E8ABA0] font-bold';
      case 'Scholarly Interpretation':
        return 'bg-[#EDF4F8] text-[#164563] border-[#ABC9DC] font-bold';
      default:
        return 'bg-[#F1F5F9] text-[#334155] border-[#CBD5E1] font-bold';
    }
  };

  const isSmall = size === 'sm';

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {metadata.status && (
        <span
          className={`inline-flex items-center font-mono uppercase tracking-wider rounded-[2px] border px-2 py-0.5 ${
            isSmall ? 'text-[10px]' : 'text-[11px]'
          } ${getBadgeStyle(metadata.status)}`}
        >
          {metadata.status}
        </span>
      )}
      {metadata.tradition && (
        <span
          className={`inline-flex items-center font-mono uppercase tracking-wider rounded-[2px] px-2 py-0.5 ${
            isSmall ? 'text-[10px]' : 'text-[11px]'
          } font-bold ${
            darkTheme
              ? 'bg-[#1C1C1A] text-[#E2E8F0] border border-[#3A3A35]'
              : 'bg-[#F1F5F9] text-[#1E293B] border border-[#CBD5E1]'
          }`}
        >
          {metadata.tradition}
        </span>
      )}
    </div>
  );
};
