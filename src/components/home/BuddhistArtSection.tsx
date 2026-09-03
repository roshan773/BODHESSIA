import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';

interface BuddhistArtSectionProps {
  onNavigate: (route: string) => void;
}

export const BuddhistArtSection: React.FC<BuddhistArtSectionProps> = ({ onNavigate }) => {
  const artForms = [
    {
      title: 'Gandhāran Greco-Buddhist Sculpture',
      region: 'Ancient Gandhāra (Taxila & Swat)',
      period: 'c. 1st–3rd Century CE',
      tradition: 'Early Mahāyāna & Sarvāstivāda',
      image: '/images/buddhas/gautama-hero.jpg',
      desc: 'The earliest anthropomorphic representations of the Buddha, synthesizing Hellenistic drapery with deep meditative serenity.'
    },
    {
      title: 'Gupta Classical Stone Statuary',
      region: 'Sarnath & Mathura, India',
      period: 'c. 4th–6th Century CE',
      tradition: 'Classical Indian Buddhism',
      image: '/images/places/sarnath-sermon.jpg',
      desc: 'The golden age of Buddhist art with sheer clinging monastic drapery, downcast introspective eyes, and sublime geometric proportions.'
    },
    {
      title: 'Himalayan Thangka & Mandala Paintings',
      region: 'Tibet, Nepal, Bhutan',
      period: 'c. 8th–18th Century CE',
      tradition: 'Vajrayāna Esoteric Art',
      image: '/images/places/bodhgaya-awakening.jpg',
      desc: 'Intricate geometric silk scroll paintings functioning as contemplative maps of enlightened consciousness and cosmic Buddha realms.'
    },
    {
      title: 'Ajanta Cave Frescoes & Murals',
      region: 'Maharashtra, India',
      period: 'c. 2nd c. BCE – 6th c. CE',
      tradition: 'Mahāyāna Narrative Art',
      image: '/images/places/kushinagar-parinirvana.jpg',
      desc: 'Masterpiece mural paintings on basalt cave walls depicting Jātaka tales of the Bodhisatta’s selfless previous incarnations.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#181816] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#2A2A26] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B17A3F] font-bold block mb-2">
              11 · 2,500 YEARS OF SACRED EXPRESSION
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-black text-white">
              THE ART OF BUDDHISM
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/history')}
            className="text-xs font-mono uppercase tracking-wider text-[#B17A3F] hover:text-white font-bold transition-colors flex items-center gap-1 self-start md:self-auto cursor-pointer"
          >
            <span>View Art Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Editorial Art Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artForms.map((art, idx) => (
            <div
              key={idx}
              className="bg-[#22221E] border border-[#2A2A26] hover:border-[#B17A3F] transition-all flex flex-col justify-between group shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-[#B17A3F] border border-[#333]">
                  {art.period}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-[#B17A3F] font-bold block">
                    {art.region}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#B17A3F] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-normal pt-1">
                    {art.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2A2A26] flex items-center justify-between text-xs font-mono text-[#B17A3F] font-bold">
                  <span>{art.tradition}</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
