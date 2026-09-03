import React, { useState } from 'react';
import { ArrowRight, MapPin, Navigation } from 'lucide-react';
import { useMeditationAudio } from '../../context/AudioContext';

interface BuddhaJourneySectionProps {
  onNavigate: (route: string) => void;
}

export const BuddhaJourneySection: React.FC<BuddhaJourneySectionProps> = ({ onNavigate }) => {
  const [activeStop, setActiveStop] = useState<number>(1);
  const { playSingingBowl } = useMeditationAudio();

  const stops = [
    {
      num: '01',
      name: 'Lumbini',
      modernRegion: 'Rupandehi, Nepal',
      significance: 'Birthplace of Prince Siddhārtha',
      connection: 'The starting point of the human journey. Queen Māyādevī gave birth beside the sacred pond.',
      context: 'Marked by Emperor Ashoka’s 3rd-century BCE stone pillar inscription.',
      image: '/images/places/bodhgaya-awakening.jpg'
    },
    {
      num: '02',
      name: 'Bodh Gaya',
      modernRegion: 'Bihar, India',
      significance: 'Site of Supreme Awakening (Bodhimanda)',
      connection: 'Where Siddhārtha sat beneath the Bodhi tree on the Diamond Throne (Vajrāsana) and achieved Nibbāna.',
      context: 'The spiritual navel of the Buddhist world with the 55m Mahābodhi Temple.',
      image: '/images/places/bodhgaya-awakening.jpg'
    },
    {
      num: '03',
      name: 'Sarnath',
      modernRegion: 'Varanasi, Uttar Pradesh, India',
      significance: 'Turning the Wheel of Dharma (Dhammacakka)',
      connection: 'Where the Buddha preached the First Sermon to the five ascetics, establishing the monastic Sangha.',
      context: 'Home to the monumental Dhamek Stupa and Ashoka Lion Capital.',
      image: '/images/places/sarnath-sermon.jpg'
    },
    {
      num: '04',
      name: 'Rajgir (Rājagaha)',
      modernRegion: 'Nalanda District, Bihar, India',
      significance: 'Capital of Magadha & Vulture Peak',
      connection: 'King Bimbisāra offered the Bamboo Grove (Veḷuvana). Buddha delivered the Heart Sutra on Vulture Peak.',
      context: 'Site of the First Buddhist Council in Sattapanni Cave after the Parinirvana.',
      image: '/images/buddhas/gautama-hero.jpg'
    },
    {
      num: '05',
      name: 'Shravasti (Sāvatthī)',
      modernRegion: 'Uttar Pradesh, India',
      significance: 'Jetavana Monastery (25 Rainy Seasons)',
      connection: 'The Buddha spent 25 monsoons teaching in the Jetavana grove donated by Anāthapiṇḍika.',
      context: 'Where over 800 discourses in the Pāli canon were proclaimed.',
      image: '/images/places/sarnath-sermon.jpg'
    },
    {
      num: '06',
      name: 'Kushinagar',
      modernRegion: 'Uttar Pradesh, India',
      significance: 'Site of Final Nirvāṇa (Mahāparinibbāna)',
      connection: 'The Buddha passed away between twin Sal trees at age 80, leaving his final exhortation.',
      context: 'Features the 5th-century reclining monolith statue and Ramabhar stupa.',
      image: '/images/places/kushinagar-parinirvana.jpg'
    }
  ];

  const current = stops[activeStop];

  const handleSelect = (idx: number) => {
    setActiveStop(idx);
    playSingingBowl(1.0 + (idx / 6) * 0.25);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F5F2EA] border-b border-[#D7D2C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D7D2C8] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8B5F32] font-bold block mb-2">
              04 · SACRED PILGRIMAGE TOPOGRAPHY
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-black text-[#181816]">
              THE JOURNEY OF THE BUDDHA
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/history')}
            className="text-xs font-mono uppercase tracking-wider text-[#181816] hover:text-[#8B5F32] font-bold transition-colors flex items-center gap-1 self-start md:self-auto cursor-pointer"
          >
            <span>Explore All Sacred Sites</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Pilgrimage Route Horizontal Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {stops.map((stop, idx) => {
            const isActive = activeStop === idx;
            return (
              <button
                key={stop.num}
                onClick={() => handleSelect(idx)}
                className={`p-4 text-left transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-[#181816] text-white border-[#181816] shadow-md'
                    : 'bg-white hover:bg-[#D7D2C8]/30 text-[#181816] border-[#D7D2C8]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#B17A3F]' : 'text-[#8B5F32]'}`}>
                    {stop.num}
                  </span>
                  {isActive && <MapPin className="w-3.5 h-3.5 text-[#B17A3F]" />}
                </div>
                <h4 className="font-serif font-bold text-base sm:text-lg truncate">
                  {stop.name}
                </h4>
                <p className={`text-[11px] font-mono truncate ${isActive ? 'text-neutral-300' : 'text-[#555550]'}`}>
                  {stop.modernRegion.split(',')[0]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Pilgrimage Station Showcase */}
        <div className="bg-white border border-[#D7D2C8] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          <div className="lg:col-span-5 relative aspect-[4/3] bg-[#181816] overflow-hidden">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-0.5 text-xs font-mono font-bold text-[#181816] border border-[#D7D2C8]">
              STOP {current.num} OF 06
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B5F32] font-bold block">
                {current.modernRegion}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#181816]">
                {current.name}
              </h3>
              <p className="text-sm font-mono text-[#555550] font-semibold italic">
                "{current.significance}"
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-4 bg-[#F5F2EA] border border-[#D7D2C8]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B5F32] font-bold block">
                  Buddha's Connection
                </span>
                <p className="text-sm text-[#181816] mt-0.5 leading-relaxed font-normal">
                  {current.connection}
                </p>
              </div>

              <div className="p-4 bg-[#F5F2EA] border border-[#D7D2C8]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B5F32] font-bold block">
                  Historical & Archaeological Context
                </span>
                <p className="text-sm text-[#181816] mt-0.5 leading-relaxed font-normal">
                  {current.context}
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/history')}
                className="px-6 py-3 bg-[#181816] hover:bg-[#8B5F32] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                View Geographical Heritage Catalogue →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
