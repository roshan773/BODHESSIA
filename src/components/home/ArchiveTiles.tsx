import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ArchiveTilesProps {
  onNavigate: (route: string) => void;
}

export const ArchiveTiles: React.FC<ArchiveTilesProps> = ({ onNavigate }) => {
  const links = [
    { title: 'BUDDHAS', sub: '28 Pāli Lineages', path: '/28-buddhas' },
    { title: 'BODHISATTVAS', sub: 'Archetypes of Compassion', path: '/bodhisattvas' },
    { title: 'TEACHINGS', sub: 'The Core Dharma', path: '/teachings' },
    { title: 'SYMBOLS', sub: 'Visual Emblems', path: '/symbols' },
    { title: 'HISTORY', sub: '2,500 Years of Movement', path: '/history' },
    { title: 'ABOUT', sub: 'Editorial Charter', path: '/about' },
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#0A0A0A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#B8874A] block">
            14 · TRANSITION TO THE ARCHIVE
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light leading-[1.0] text-white">
            THERE IS MORE <br />
            <span className="italic font-normal">TO DISCOVER.</span>
          </h2>
          <p className="text-sm font-mono text-neutral-400 uppercase tracking-widest pt-2">
            ENTER BODHESSIA
          </p>
        </div>

        {/* Large Editorial Text Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-[#222220]">
          {links.map((link, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate(link.path)}
              className="group cursor-pointer p-6 sm:p-8 bg-[#141414] border border-[#222220] hover:border-[#B8874A] transition-all flex flex-col justify-between space-y-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-[#B8874A]">0{idx + 1}</span>
                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-light text-white group-hover:text-[#B8874A] transition-colors">
                  {link.title}
                </h3>
                <span className="text-xs font-mono text-neutral-400 block mt-1">
                  {link.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
