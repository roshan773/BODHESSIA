import React from 'react';
import { ArrowRight, Landmark } from 'lucide-react';

interface BuddhistArchitectureSectionProps {
  onNavigate: (route: string) => void;
}

export const BuddhistArchitectureSection: React.FC<BuddhistArchitectureSectionProps> = ({ onNavigate }) => {
  const structures = [
    {
      type: 'STŪPAS & RELIQUARIES',
      name: 'The Great Stupa at Sanchi & Dhamek',
      significance: 'Cosmic hemispherical architectural domes encapsulating relics of the Buddha and principal disciples, serving as physical focal points of circumambulation (pradakṣiṇa).',
      features: ['Hemispherical Dome (Anda)', 'Square Railing (Harmika)', 'Threefold Umbrella (Chattra)', 'Torana Gateway Reliefs'],
      location: 'Madhya Pradesh & Varanasi, India'
    },
    {
      type: 'CAITYA-GṚHAS (PRAYER HALLS)',
      name: 'Rock-Cut Caitya Vaults at Ajanta & Karli',
      significance: 'Monolithic halls carved directly into basalt cliff canyons, featuring barrel-vaulted ribbed stone ceilings mimicking wooden architecture with a central stupa apse.',
      features: ['Sun-Window Arches (Kudu)', 'Octagonal Pillar Colonnades', 'Rock-Cut Stupa Sanctuary', 'Acoustic Resonant Geometry'],
      location: 'Western Ghats, Maharashtra, India'
    },
    {
      type: 'VIHĀRAS & MONASTIC UNIVERSITIES',
      name: 'Nalanda & Vikramashila Mahāvihāras',
      significance: 'Vast residential collegiate monasteries housing thousands of monk-scholars, featuring central courtyards, living cells, libraries (Dharmaganja), and lecture halls.',
      features: ['Cellular Monastery Grid', 'Multi-Storey Brick Stacking', 'Water Drainage Systems', 'Central Shrine Altar'],
      location: 'Bihar & Bengal, India'
    },
    {
      type: 'TERRACE MANDALA ARCHITECTURE',
      name: 'Borobudur & Bagan Pagoda Landscapes',
      significance: 'Three-dimensional cosmic models where the pilgrim physically ascends through the Three Spheres (Kāmadhātu, Rūpadhātu, and Arūpadhātu) toward ultimate liberation.',
      features: ['Concentric Stepped Terraces', 'Perforated Stupas', 'Narrative Relief Galleries', 'Pinnacle Stupa'],
      location: 'Central Java & Mandalay, Myanmar'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F5F2EA] border-b border-[#D7D2C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D7D2C8] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8B5F32] font-bold block mb-2">
              12 · SACRED SPATIAL FORM
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-black text-[#181816]">
              BUDDHIST ARCHITECTURE
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/history')}
            className="text-xs font-mono uppercase tracking-wider text-[#181816] hover:text-[#8B5F32] font-bold transition-colors flex items-center gap-1 self-start md:self-auto cursor-pointer"
          >
            <span>Explore Architectural Heritage</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Architectural Typologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {structures.map((s, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#D7D2C8] p-8 space-y-4 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B5F32]">
                    {s.type}
                  </span>
                  <span className="text-xs font-mono text-[#555550]">
                    {s.location}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#181816]">
                  {s.name}
                </h3>
                <p className="text-sm text-[#555550] leading-relaxed font-normal pt-1">
                  {s.significance}
                </p>
              </div>

              <div className="p-4 bg-[#F5F2EA] border border-[#D7D2C8] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B5F32] font-bold block">
                  Architectural Structural Elements
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#181816]">
                  {s.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5">
                      <span className="text-[#B17A3F]">•</span>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
