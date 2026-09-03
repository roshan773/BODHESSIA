import React from 'react';
import { ArrowRight, BookOpen, Scroll, FileText } from 'lucide-react';

interface BuddhistTextsSectionProps {
  onNavigate: (route: string) => void;
}

export const BuddhistTextsSection: React.FC<BuddhistTextsSectionProps> = ({ onNavigate }) => {
  const canonicalTraditions = [
    {
      title: 'The Tipiṭaka (Pāli Canon)',
      subtitle: 'The Three Baskets of Theravāda Buddhism',
      language: 'Pāli (Written down at Aluvihara, 1st c. BCE)',
      divisions: [
        { name: 'Vinaya Piṭaka', desc: 'Rules and ethical discipline governing the monastic community.' },
        { name: 'Sutta Piṭaka', desc: 'Five Nikāyas containing thousands of original discourses of the Buddha.' },
        { name: 'Abhidhamma Piṭaka', desc: 'Rigorous psychological and philosophical analysis of ultimate phenomena (dhammas).' }
      ]
    },
    {
      title: 'Mahāyāna Sūtra Literature',
      subtitle: 'The Perfection of Wisdom & Universal Awakening',
      language: 'Buddhist Hybrid Sanskrit, Classical Chinese, Classical Tibetan',
      divisions: [
        { name: 'Prajñāpāramitā Sūtras', desc: 'The Diamond (Vajracchedikā) and Heart (Hṛdaya) discourses on Śūnyatā (Emptiness).' },
        { name: 'Lotus Sūtra (Saddharmapuṇḍarīka)', desc: 'The supreme one vehicle (Ekayāna) and eternal compassionate nature of the Buddha.' },
        { name: 'Avataṃsaka Sūtra', desc: 'The vast interpenetrating holographic universe of Indra’s Net.' }
      ]
    },
    {
      title: 'Tantras & Commentarial Śāstras',
      subtitle: 'Scholastic Treatises & Esoteric Methods',
      language: 'Sanskrit, Tibetan, East Asian Traditions',
      divisions: [
        { name: 'Nāgārjuna’s Mūlamadhyamakakārikā', desc: 'The foundational dialectic treatise establishing Madhyamaka Emptiness.' },
        { name: 'Asaṅga & Vasubandhu’s Yogācāra', desc: 'Analysis of consciousness, storehouse mind (Ālayavijñāna), and cognitive perception.' },
        { name: 'Vajrayāna Tantras', desc: 'Esoteric ritual manuals, deity generation, and Mahāmudrā / Dzogchen transmissions.' }
      ]
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#181816] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#2A2A26] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B17A3F] font-bold block mb-2">
              15 · CANONICAL & TEXTUAL HERITAGE
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-black text-white">
              BUDDHIST TEXTS & SCRIPTURES
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/teachings')}
            className="text-xs font-mono uppercase tracking-wider text-[#B17A3F] hover:text-white font-bold transition-colors flex items-center gap-1 self-start md:self-auto cursor-pointer"
          >
            <span>Explore The Dharma</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Textual Traditions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {canonicalTraditions.map((trad, idx) => (
            <div
              key={idx}
              className="bg-[#22221E] border border-[#2A2A26] p-8 space-y-6 flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B17A3F] font-bold block">
                  TRADITION 0{idx + 1}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {trad.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  {trad.subtitle}
                </p>
                <div className="p-2.5 bg-[#181816] text-[11px] font-mono text-[#B17A3F] border border-[#2A2A26]">
                  {trad.language}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {trad.divisions.map((div, dIdx) => (
                  <div key={dIdx} className="p-3 bg-[#181816] border border-[#2A2A26] space-y-1">
                    <h4 className="text-xs font-serif font-bold text-white">
                      {div.name}
                    </h4>
                    <p className="text-[11px] text-neutral-300 leading-relaxed">
                      {div.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#2A2A26] flex items-center justify-between text-xs font-mono text-[#B17A3F]">
                <span>Canon Authenticity</span>
                <span>Verified ✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
