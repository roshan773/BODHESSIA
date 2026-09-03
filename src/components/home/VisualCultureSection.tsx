import React from 'react';
import { ArrowRight } from 'lucide-react';

interface VisualCultureSectionProps {
  onNavigate: (route: string) => void;
}

export const VisualCultureSection: React.FC<VisualCultureSectionProps> = ({ onNavigate }) => {
  const artifacts = [
    {
      title: 'Gandhāran Greco-Buddhist Sculpture',
      period: 'c. 1st–3rd Century CE · Taxila & Swat',
      desc: 'The earliest anthropomorphic representations of the Buddha, synthesizing Hellenistic drapery with meditative serenity.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
      category: 'STONE SCULPTURE'
    },
    {
      title: 'Rock-Cut Caitya Cave Architecture',
      period: 'c. 2nd Century BCE – 6th Century CE · Ajanta & Karli',
      desc: 'Monolithic halls carved directly into basalt canyon cliffs, containing ribbed vaults and stupa reliquary sanctuaries.',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85',
      category: 'MONUMENTAL ARCHITECTURE'
    },
    {
      title: 'Palm-Leaf & Birch-Bark Manuscripts',
      period: 'c. 1st c. BCE – 11th c. CE · Nalanda & Dunhuang',
      desc: 'Sanskrit and Pāli canonical treatises inscribed with iron styluses on talipot palm leaves and birch bark scrolls.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85',
      category: 'PALAEOGRAPHY & TEXTS'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F5] border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2E8F0] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8874A] font-bold block mb-2">
              VISUAL HERITAGE ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#0F172A]">
              A CULTURE SHAPED BY THE DHARMA
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/history')}
            className="text-xs font-mono uppercase tracking-wider text-[#0F172A] hover:text-[#B8874A] font-bold transition-colors flex items-center gap-1 self-start md:self-auto cursor-pointer"
          >
            <span>Explore Visual History</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Asymmetric Editorial Artifact Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {artifacts.map((art, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate('/history')}
              className="group cursor-pointer bg-white border border-[#E2E8F0] hover:border-[#B8874A] transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0A0A]">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100 filter brightness-100"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-[#0F172A] font-bold tracking-wider uppercase border border-[#E2E8F0]">
                  {art.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#B8874A] font-bold block">
                    {art.period}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#0F172A] group-hover:text-[#B8874A] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-sm text-[#334155] leading-relaxed font-normal">
                    {art.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#0F172A] font-bold group-hover:text-[#B8874A]">
                  <span className="uppercase tracking-widest text-[11px]">Examine Catalogue</span>
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
