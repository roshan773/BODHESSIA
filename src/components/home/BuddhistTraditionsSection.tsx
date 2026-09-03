import React, { useState } from 'react';
import { ArrowRight, BookOpen, Globe, Flame, Feather } from 'lucide-react';
import { useMeditationAudio } from '../../context/AudioContext';

interface BuddhistTraditionsSectionProps {
  onNavigate: (route: string) => void;
}

export const BuddhistTraditionsSection: React.FC<BuddhistTraditionsSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'theravada' | 'mahayana' | 'vajrayana'>('theravada');
  const { playSingingBowl } = useMeditationAudio();

  const traditions = [
    {
      id: 'theravada',
      name: 'Theravāda',
      translation: 'Teaching of the Elders',
      regions: 'Sri Lanka, Myanmar, Thailand, Cambodia, Laos',
      language: 'Pāli (Tipiṭaka)',
      ideal: 'The Arahant (Liberated Worthy One)',
      focus: 'Direct monastic discipline (Vinaya), mindfulness of breathing (Ānāpānasati), Vipassanā analytical insight, and the earliest recorded discourses in the Pāli canon.',
      accent: 'border-[#B17A3F]'
    },
    {
      id: 'mahayana',
      name: 'Mahāyāna',
      translation: 'The Great Vehicle',
      regions: 'China, Japan, Korea, Vietnam, East Asia',
      language: 'Sanskrit, Classical Chinese, Sino-Tibetan',
      ideal: 'The Bodhisattva (Universal Compassionate Awakening)',
      focus: 'The universal liberation of all sentient beings, Śūnyatā (Emptiness of inherent existence), Buddha-nature (Tathāgatagarbha), and deep devotional compassion.',
      accent: 'border-[#70443A]'
    },
    {
      id: 'vajrayana',
      name: 'Vajrayāna / Tantra',
      translation: 'The Diamond / Adamantine Vehicle',
      regions: 'Tibet, Nepal, Bhutan, Mongolia, Ladakh, Japan (Shingon)',
      language: 'Sanskrit, Classical Tibetan',
      ideal: 'The Mahāsiddha & Fully Awakened Buddha',
      focus: 'Esoteric transformation of body, speech, and mind, deity yoga mandalas, subtle energy channels, Dzogchen / Mahāmudrā direct realization, and guru lineage transmissions.',
      accent: 'border-[#39483D]'
    }
  ];

  const handleSelect = (id: 'theravada' | 'mahayana' | 'vajrayana') => {
    setActiveTab(id);
    playSingingBowl(1.1);
  };

  const current = traditions.find((t) => t.id === activeTab)!;

  return (
    <section className="py-24 sm:py-32 bg-[#F5F2EA] border-b border-[#D7D2C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D7D2C8] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8B5F32] font-bold block mb-2">
              10 · THREE MAJOR TRANSMISSION STREAMS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-black text-[#181816]">
              BUDDHIST TRADITIONS
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/history')}
            className="text-xs font-mono uppercase tracking-wider text-[#181816] hover:text-[#8B5F32] font-bold transition-colors flex items-center gap-1 self-start md:self-auto cursor-pointer"
          >
            <span>Examine Historical Movements</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Stream Switchers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {traditions.map((t) => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => handleSelect(t.id as any)}
                className={`p-6 text-left transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-[#181816] text-white border-[#181816] shadow-lg'
                    : 'bg-white hover:bg-[#D7D2C8]/30 text-[#181816] border-[#D7D2C8]'
                }`}
              >
                <span className={`text-xs font-mono uppercase tracking-widest font-bold block mb-1 ${isActive ? 'text-[#B17A3F]' : 'text-[#8B5F32]'}`}>
                  {t.translation}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold">
                  {t.name}
                </h3>
                <p className={`text-xs font-mono mt-2 truncate ${isActive ? 'text-neutral-300' : 'text-[#555550]'}`}>
                  {t.regions.split(',').slice(0, 3).join(', ')}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Tradition Deep Dive Panel */}
        <div className="bg-white border border-[#D7D2C8] p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B5F32] font-bold block">
                Primary Canon: {current.language}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#181816] mt-1">
                The {current.name} Tradition
              </h3>
              <p className="text-sm font-mono text-[#555550] mt-1">
                Spiritual Ideal: <strong className="text-[#181816] font-bold">{current.ideal}</strong>
              </p>
            </div>

            <p className="text-base text-[#555550] leading-relaxed font-normal">
              {current.focus}
            </p>

            <div className="p-4 bg-[#F5F2EA] border border-[#D7D2C8] space-y-1 text-xs font-mono text-[#181816]">
              <span className="text-[#8B5F32] font-bold uppercase tracking-wider block">Geography & Lineages</span>
              <p className="font-semibold">{current.regions}</p>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 bg-[#181816] text-white border border-[#2A2A26] space-y-4 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B17A3F] font-bold block">
              Core Canonical Hermeneutics
            </span>
            <div className="space-y-3 text-xs font-mono text-neutral-300">
              <div className="p-3 bg-[#22221E] border border-[#2A2A26]">
                <strong className="text-white block">Canonical Source:</strong> {current.language}
              </div>
              <div className="p-3 bg-[#22221E] border border-[#2A2A26]">
                <strong className="text-white block">Liberation Doctrine:</strong> {current.ideal}
              </div>
              <div className="p-3 bg-[#22221E] border border-[#2A2A26]">
                <strong className="text-white block">Monastic Standard:</strong> Universal Patimokkha / Bodhisattva Vows
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
