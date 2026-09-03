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
          return 'bg-[#15281E] text-[#86D2A8] border-[#254B38]';
        case 'Historical Record':
          return 'bg-[#2A2014] text-[#E5B575] border-[#554026]';
        case 'Archaeological Evidence':
          return 'bg-[#2A1714] text-[#F29F92] border-[#552B24]';
        case 'Scholarly Interpretation':
          return 'bg-[#152430] text-[#93CAED] border-[#254860]';
        default:
          return 'bg-[#1F1F1E] text-[#B5B5AF] border-[#383835]';
      }
    }

    switch (status) {
      case 'Canonical Text':
        return 'bg-[#EBF3EF] text-[#244B38] border-[#C4DCCE]';
      case 'Historical Record':
        return 'bg-[#F8F3EC] text-[#8E6A3E] border-[#E5D5C1]';
      case 'Archaeological Evidence':
        return 'bg-[#FBF0ED] text-[#8B3A2B] border-[#EDCCC5]';
      case 'Scholarly Interpretation':
        return 'bg-[#EDF4F8] text-[#225577] border-[#C8DCE8]';
      default:
        return 'bg-[#F0F0EC] text-[#555550] border-[#D8D8D0]';
    }
  };

  const isSmall = size === 'sm';

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {metadata.status && (
        <span
          className={`inline-flex items-center font-mono uppercase tracking-wider rounded-[2px] border px-2 py-0.5 ${
            isSmall ? 'text-[9px]' : 'text-[10px]'
          } ${getBadgeStyle(metadata.status)}`}
        >
          {metadata.status}
        </span>
      )}
      {metadata.tradition && (
        <span
          className={`inline-flex items-center font-mono uppercase tracking-wider rounded-[2px] px-2 py-0.5 ${
            isSmall ? 'text-[9px]' : 'text-[10px]'
          } ${
            darkTheme
              ? 'bg-[#1C1C1A] text-[#9E9E98] border border-[#2E2E2A]'
              : 'bg-[#F4F4F0] text-[#6D6D68] border border-[#E4E4DF]'
          }`}
        >
          {metadata.tradition}
        </span>
      )}
    </div>
  );
};
