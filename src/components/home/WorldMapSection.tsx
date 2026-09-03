import React from 'react';
import { WorldMapInteractive } from '../visual/WorldMapInteractive';

interface WorldMapSectionProps {
  onNavigate?: (route: string) => void;
}

export const WorldMapSection: React.FC<WorldMapSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#181816] border-t border-[#2A2A26] relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-6 border-b border-[#2A2A26]">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B17A3F] font-bold block mb-2">
            14 · SILK ROAD & MARITIME CORRIDORS
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-black text-white">
            BUDDHISM ACROSS ASIA
          </h2>
          <p className="text-sm font-mono text-neutral-300 mt-1">
            Historical transmission routes across ancient India, Sri Lanka, Central Asia, China, Korea, Japan, and Southeast Asia.
          </p>
        </div>
        <WorldMapInteractive />
      </div>
    </section>
  );
};
