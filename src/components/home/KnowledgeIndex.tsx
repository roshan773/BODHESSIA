import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useMeditationAudio } from '../../context/AudioContext';

interface IndexItem {
  number: string;
  title: string;
  subtitle: string;
  path: string;
  image: string;
  category: string;
}

const INDEX_ITEMS: IndexItem[] = [
  {
    number: '01',
    title: 'THE BUDDHA',
    subtitle: 'The life, ascetic striving, and awakening of Siddhārtha Gautama',
    path: '/buddha',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    category: 'BIOGRAPHY & HISTORICAL AWAKENING'
  },
  {
    number: '02',
    title: 'THE 28 BUDDHAS',
    subtitle: 'The canonical Theravāda chronicle of past Awakened Teachers',
    path: '/28-buddhas',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80',
    category: 'BUDDHAVAMSA LINEAGE'
  },
  {
    number: '03',
    title: 'BODHISATTVAS',
    subtitle: 'Archetypes of infinite compassion, transcendent wisdom, and vows',
    path: '/bodhisattvas',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=80',
    category: 'COMPASSIONATE ARCHETYPES'
  },
  {
    number: '04',
    title: 'THE DHARMA',
    subtitle: 'Core philosophical frameworks: Four Noble Truths, Eightfold Path, Nirvana',
    path: '/teachings',
    image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1000&q=80',
    category: 'DOCTRINES & PSYCHOLOGY'
  },
  {
    number: '05',
    title: 'SYMBOLS',
    subtitle: 'Aniconic emblems: Dharma Wheel, Lotus, Bodhi Tree, Stūpa, Vajra',
    path: '/symbols',
    image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1000&q=80',
    category: 'SACRED VISUAL LANGUAGE'
  },
  {
    number: '06',
    title: 'HISTORY',
    subtitle: '2,500+ years of movement across ancient trade corridors and continents',
    path: '/history',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    category: 'CHRONOLOGICAL TRANSMISSION'
  },
  {
    number: '07',
    title: 'SACRED PLACES',
    subtitle: 'Bodh Gaya, Lumbini, Sarnath, Kushinagar, Borobudur, and Nalanda',
    path: '/history',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    category: 'ARCHAEOLOGICAL MONUMENTS'
  },
  {
    number: '08',
    title: 'ABOUT BODHESSIA',
    subtitle: 'Digital museum charter, academic standards, and knowledge taxonomy',
    path: '/about',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
    category: 'EDITORIAL CHARTER'
  }
];

interface KnowledgeIndexProps {
  onNavigate: (route: string) => void;
}

export const KnowledgeIndex: React.FC<KnowledgeIndexProps> = ({ onNavigate }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);
  const { playSingingBowl } = useMeditationAudio();

  const handleItemClick = (path: string) => {
    playSingingBowl(1.1);
    onNavigate(path);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F5] border-t border-[#E4E4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E4E4DF] gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block mb-2">
              KNOWLEDGE SYSTEM INDEX
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#111111]">
              EXPLORE THE WORLD
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6D6D68] uppercase tracking-wider">
            08 CHAPTERS · INTERACTIVE DISCOVERY
          </span>
        </div>

        {/* Index & Dynamic Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive List */}
          <div className="lg:col-span-7 divide-y divide-[#E4E4DF]">
            {INDEX_ITEMS.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={item.number}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => handleItemClick(item.path)}
                  className="group py-6 sm:py-8 cursor-pointer transition-all flex items-baseline justify-between gap-6"
                >
                  <div className="flex items-baseline gap-6 sm:gap-8 min-w-0">
                    <span className="font-mono text-xs sm:text-sm text-[#9E9E98] group-hover:text-[#B8874A] transition-colors">
                      {item.number}
                    </span>
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111111] group-hover:text-[#B8874A] transition-colors truncate">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6D6D68] line-clamp-1 font-light">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5 text-[#9E9E98] group-hover:text-[#111111] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Floating Image Preview */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden bg-[#111111] border border-[#E4E4DF] shadow-xl">
              <img
                src={INDEX_ITEMS[hoveredIdx].image}
                alt={INDEX_ITEMS[hoveredIdx].title}
                className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-95 contrast-105 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B8874A] block">
                  {INDEX_ITEMS[hoveredIdx].category}
                </span>
                <h4 className="text-2xl font-serif font-bold">
                  {INDEX_ITEMS[hoveredIdx].title}
                </h4>
                <p className="text-xs font-sans text-neutral-300 line-clamp-2 font-light">
                  {INDEX_ITEMS[hoveredIdx].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
