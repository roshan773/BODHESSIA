import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, Compass } from 'lucide-react';
import { useMeditationAudio } from '../../context/AudioContext';

interface LifeOfBuddhaSectionProps {
  onNavigate: (route: string) => void;
}

export const LifeOfBuddhaSection: React.FC<LifeOfBuddhaSectionProps> = ({ onNavigate }) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const { playSingingBowl } = useMeditationAudio();

  const chapters = [
    {
      num: '01',
      title: 'THE NATIVITY',
      subtitle: 'Birth at Lumbini Sacred Grove',
      location: 'Lumbini (Modern Nepal)',
      period: 'c. 563 / 490 BCE',
      pali: 'Jāti',
      image: '/images/places/bodhgaya-awakening.jpg',
      desc: 'Born Prince Siddhārtha to Queen Māyādevī under the blossoming Sal tree. The royal sage Asita discerned the 32 marks of a Great Being and prophesied he would achieve supreme enlightenment.',
      teaching: 'A human being endowed with the supreme potential for unconditioned awakening.'
    },
    {
      num: '02',
      title: 'ROYAL YOUTH & THE PALACE',
      subtitle: 'Life within Kapilavastu',
      location: 'Kapilavastu, Shakya Republic',
      period: 'Ages 1–29',
      pali: 'Agārika',
      image: '/images/buddhas/gautama-hero.jpg',
      desc: 'Raised in aristocratic abundance shielded from human distress. Married Princess Yaśodharā and mastered the martial arts, philosophy, and classical arts of ancient India.',
      teaching: 'Sensory luxury cannot shield human consciousness from universal mortality.'
    },
    {
      num: '03',
      title: 'THE FOUR SIGHTS & RENUNCIATION',
      subtitle: 'Leaving the Royal City',
      location: 'Anomā River Crossing',
      period: 'Age 29',
      pali: 'Abhinikkhamana',
      image: '/images/buddhas/gautama-hero.jpg',
      desc: 'Encountered an old man, a diseased person, a corpse, and a tranquil wandering ascetic. Realizing universal vulnerability, he cut his hair and entered homeless striving.',
      teaching: 'The profound moral urgency to seek the deathless state of Nibbāna.'
    },
    {
      num: '04',
      title: 'THE 6-YEAR SEARCH & ASCETIC STRIVING',
      subtitle: 'Forest Hermitages & Austerities',
      location: 'Rajgir & Uruvelā Forests',
      period: 'Ages 29–35',
      pali: 'Dukkaracariyā',
      image: '/images/places/bodhgaya-awakening.jpg',
      desc: 'Mastered the formless jhānas under Āḷāra Kālāma and Uddaka Rāmaputta. After extreme mortifications, he realized self-torment cannot lead to liberating clarity.',
      teaching: 'Discovery of the Middle Way avoiding extremes of indulgence and self-mortification.'
    },
    {
      num: '05',
      title: 'SUPREME AWAKENING (BODHI)',
      subtitle: 'The Diamond Throne at Bodh Gaya',
      location: 'Bodh Gaya, Bihar',
      period: 'Age 35 (Vesak Full Moon)',
      pali: 'Sammāsambodhi',
      image: '/images/places/bodhgaya-awakening.jpg',
      desc: 'Seated beneath the sacred Bodhi tree (Ficus religiosa), he penetrated the Twelve Links of Dependent Origination and eradicated craving, becoming the Buddha.',
      teaching: 'The direct realization of the Four Noble Truths and Dependent Origination.'
    },
    {
      num: '06',
      title: 'TURNING THE WHEEL OF DHARMA',
      subtitle: 'The First Sermon at Deer Park',
      location: 'Isipatana / Sarnath, Varanasi',
      period: 'Inaugural Discourse',
      pali: 'Dhammacakkappavattana',
      image: '/images/places/sarnath-sermon.jpg',
      desc: 'Delivered his first discourse to the five ascetics, setting in motion the Wheel of Truth. Kondañña attained stream-entry, inaugurating the monastic Sangha.',
      teaching: 'The Noble Eightfold Path: Vision, Intention, Speech, Action, Livelihood, Effort, Mindfulness, and Concentration.'
    },
    {
      num: '07',
      title: 'THE MONASTIC SANGHA',
      subtitle: 'The Fourfold Assembly',
      location: 'Jetavana & Veḷuvana Monasteries',
      period: 'Ages 35–80',
      pali: 'Saṅgha',
      image: '/images/places/sarnath-sermon.jpg',
      desc: 'Established monastic communities of monks (bhikkhus) and nuns (bhikkhunīs), supported by lay male and female disciples, dissolving all ancient caste hierarchies.',
      teaching: 'Ethical monastic discipline (Vinaya) and communal harmony.'
    },
    {
      num: '08',
      title: 'THE FINAL FOOT JOURNEY',
      subtitle: 'From Rajgir to Kushinagar',
      location: 'Vaishali, Pava, Kushinagar',
      period: 'Age 80',
      pali: 'Antimacārikā',
      image: '/images/places/kushinagar-parinirvana.jpg',
      desc: 'Walked his last journey encouraging disciples to take the Dhamma and themselves as an island and refuge, refusing to appoint an authoritarian successor.',
      teaching: 'Be islands unto yourselves, refuges unto yourselves; take Dhamma as your refuge.'
    },
    {
      num: '09',
      title: 'THE MAHĀPARINIRVĀṆA',
      subtitle: 'Passing into Final Nirvana',
      location: 'Kushinagar Sal Grove',
      period: 'Age 80 (Vesak Full Moon)',
      pali: 'Mahāparinibbāna',
      image: '/images/places/kushinagar-parinirvana.jpg',
      desc: 'Laying between the twin blossoming Sal trees, the Buddha delivered his last words on diligent heedfulness and passed into the unconditioned element of Parinirvana.',
      teaching: 'Vayadhammā saṅkhārā appamādena sampādetha — All conditioned things decay; strive with heedfulness.'
    }
  ];

  const current = chapters[activeStage];

  const handleSelect = (idx: number) => {
    setActiveStage(idx);
    playSingingBowl(1.0 + (idx / 9) * 0.3);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#181816] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#2A2A26] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B17A3F] font-bold block mb-2">
              03 · VISUAL STORYTELLING JOURNEY
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-black text-white">
              THE LIFE OF THE BUDDHA
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/buddha')}
            className="text-xs font-mono uppercase tracking-wider text-[#B17A3F] hover:text-white font-bold transition-colors flex items-center gap-1 self-start md:self-auto cursor-pointer"
          >
            <span>Explore 7 Life Stages</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 9 Chapters Interactive Timeline & Live Feature Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 9 Numbered Timeline Steps */}
          <div className="lg:col-span-5 divide-y divide-[#2A2A26] border-t border-b border-[#2A2A26] max-h-[580px] overflow-y-auto pr-2">
            {chapters.map((ch, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={ch.num}
                  onClick={() => handleSelect(idx)}
                  className={`w-full py-4 px-4 text-left transition-all flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-[#22221E] text-white border-l-4 border-[#B17A3F]'
                      : 'hover:bg-[#1C1C1A] text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[#B17A3F]">
                      {ch.num}
                    </span>
                    <div>
                      <span className="text-lg sm:text-xl font-serif font-bold block text-white group-hover:text-[#B17A3F] transition-colors">
                        {ch.title}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        {ch.location}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#B17A3F] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Featured Chapter Display with 8K Imagery */}
          <div className="lg:col-span-7 bg-[#22221E] border border-[#2A2A26] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#B17A3F] uppercase tracking-widest font-bold">
                  CHAPTER {current.num} OF 09
                </span>
                <span className="text-neutral-400 italic">
                  Pāli: {current.pali}
                </span>
              </div>

              {/* 8K Verified Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-black border border-[#2A2A26]">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-center filter brightness-100"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-[#B17A3F] border border-[#333]">
                  {current.location}
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {current.title}
                </h3>
                <p className="text-xs font-mono text-[#B17A3F] font-semibold mt-0.5">
                  {current.subtitle} · {current.period}
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                {current.desc}
              </p>

              <blockquote className="p-4 bg-[#181816] border-l-4 border-[#B17A3F] text-xs sm:text-sm font-serif italic text-neutral-100">
                "{current.teaching}"
              </blockquote>
            </div>

            <div className="pt-4 border-t border-[#2A2A26] flex items-center justify-between">
              <button
                onClick={() => onNavigate('/buddha')}
                className="w-full py-3.5 bg-[#B17A3F] hover:bg-[#8B5F32] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Examine Canonical Life Narrative</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
