import React from 'react';
import { ArrowRight, BookOpen, Compass, Heart, Shield } from 'lucide-react';

interface WhoWasBuddhaSectionProps {
  onNavigate: (route: string) => void;
}

export const WhoWasBuddhaSection: React.FC<WhoWasBuddhaSectionProps> = ({ onNavigate }) => {
  const pillars = [
    {
      num: '01',
      title: 'The Historical Context',
      desc: 'Born Prince Siddhārtha in the Shakya republic at the foothills of the Himalayas (modern Nepal). He lived in an era of profound philosophical questioning across the Gangetic plain.'
    },
    {
      num: '02',
      title: 'The Great Renunciation',
      desc: 'Confronted by the universal realities of aging, illness, and death, he renounced princely succession at age 29 to seek the unborn, deathless peace of Nibbāna.'
    },
    {
      num: '03',
      title: 'Supreme Awakening',
      desc: 'At age 35, beneath the Bodhi tree at Bodh Gaya, he penetrated the Twelve Links of Dependent Origination and eradicated all roots of suffering, becoming the Buddha (The Awakened One).'
    },
    {
      num: '04',
      title: 'The 45-Year Ministry',
      desc: 'He walked northern India proclaiming the Four Noble Truths and Noble Eightfold Path, establishing the monastic Sangha open to all regardless of caste or gender.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F5F2EA] border-b border-[#D7D2C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D7D2C8] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8B5F32] font-bold block mb-2">
              02 · HISTORICAL & PHILOSOPHICAL FOUNDATION
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-black text-[#181816]">
              WHO WAS THE BUDDHA?
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/buddha')}
            className="text-xs font-mono uppercase tracking-wider text-[#181816] hover:text-[#8B5F32] font-bold transition-colors flex items-center gap-1 self-start md:self-auto cursor-pointer"
          >
            <span>Read Complete Biography</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Large Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Buddha Sculpture */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-[#181816] overflow-hidden border border-[#D7D2C8] shadow-lg">
              <img
                src="/images/buddhas/gautama-hero.jpg"
                alt="Ancient Stone Sculpture of Gautama Buddha"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181816]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-mono text-[#B17A3F] font-bold uppercase">
                  HISTORICAL SCULPTURAL ARCHIVE
                </span>
                <p className="text-lg font-serif font-bold">
                  Siddhārtha Gautama · The Sage of the Śākyas
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#181816] leading-snug">
                "Not a god, not an angel, not a prophet — an awakened human being who discovered the path to the end of suffering."
              </h3>
              <p className="text-base sm:text-lg text-[#555550] leading-relaxed">
                The Buddha was neither a deity nor a prophet of divine revelation. Through supreme analytical investigation and meditative cultivation, he unlocked the fundamental nature of mind and existence, presenting an empirical path of ethical living, mental clarity, and direct liberating insight.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {pillars.map((p) => (
                <div key={p.num} className="p-5 bg-white border border-[#D7D2C8] space-y-2 shadow-xs">
                  <span className="text-xs font-mono font-bold text-[#8B5F32]">
                    {p.num}.
                  </span>
                  <h4 className="text-lg font-serif font-bold text-[#181816]">
                    {p.title}
                  </h4>
                  <p className="text-xs text-[#555550] leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/buddha')}
                className="px-6 py-3 bg-[#181816] hover:bg-[#8B5F32] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                Explore His Life & Disciples →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
