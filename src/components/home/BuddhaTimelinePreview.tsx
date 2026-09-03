import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useMeditationAudio } from '../../context/AudioContext';

interface Milestone {
  stage: string;
  title: string;
  location: string;
  period: string;
  description: string;
  relatedConcept: string;
  imageUrl: string;
}

const MILESTONES: Milestone[] = [
  {
    stage: '01',
    title: 'THE NATIVITY',
    location: 'Lumbini Sacred Garden (Modern Nepal)',
    period: 'c. 563 / 490 BCE',
    description: 'Prince Siddhārtha was born to Queen Māyādevī and King Śuddhodana of the Śākya clan, bearing the marks of a Great Being.',
    relatedConcept: 'The 32 Marks of a Great Being',
    imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80'
  },
  {
    stage: '02',
    title: 'THE RENUNCIATION',
    location: 'Kapilavastu Palace & Anomā River',
    period: 'Age 29',
    description: 'Confronted with the Four Sights (aging, sickness, death, and an ascetic), the Prince relinquished royal succession and donned the ochre robe.',
    relatedConcept: 'Saṃvega (Spiritual Urgency)',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
  },
  {
    stage: '03',
    title: 'THE ASCETIC SEARCH',
    location: 'Rajgir & Uruvelā Forests',
    period: '6 Years of Striving',
    description: 'Mastered the formless meditative absorptions, discovering that extreme mortification and sensual indulgence are twin dead-ends.',
    relatedConcept: 'The Middle Way (Majjhimā Paṭipadā)',
    imageUrl: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=800&q=80'
  },
  {
    stage: '04',
    title: 'SUPREME AWAKENING',
    location: 'Bodh Gaya (Diamond Throne)',
    period: 'Age 35 (Vesak Full Moon)',
    description: 'Seated beneath the Sacred Bodhi tree, he pierced the 12 Links of Dependent Origination and attained unconditioned liberation.',
    relatedConcept: 'Sammāsambodhi & Tathāgata',
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80'
  },
  {
    stage: '05',
    title: 'THE FIRST TEACHING',
    location: 'Deer Park (Isipatana / Sarnath)',
    period: 'Inaugural Sermon',
    description: 'Proclaimed the Four Noble Truths and Noble Eightfold Path before the five ascetic seekers, setting in motion the Wheel of Dharma.',
    relatedConcept: 'Dhammacakkappavattana Sutta',
    imageUrl: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=800&q=80'
  },
  {
    stage: '06',
    title: 'THE FOURFOLD SANGHA',
    location: 'Magadha, Kosala, Vajji',
    period: '45-Year Ministry',
    description: 'Walked northern India establishing monasteries at Jetavana and Veluvana, welcoming all castes and genders equally.',
    relatedConcept: 'The Fourfold Assembly',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    stage: '07',
    title: 'MAHĀPARINIRVĀṆA',
    location: 'Kushinagar (Sal Grove)',
    period: 'Age 80',
    description: 'Lying between twin Sal trees, the Buddha delivered his final message on heedful striving and passed into unconditioned Nirvāṇa.',
    relatedConcept: 'The Deathless (Amata)',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
  }
];

interface BuddhaTimelinePreviewProps {
  onNavigate: (route: string) => void;
}

export const BuddhaTimelinePreview: React.FC<BuddhaTimelinePreviewProps> = ({ onNavigate }) => {
  const [activeStage, setActiveStage] = useState<number>(3);
  const { playSingingBowl } = useMeditationAudio();

  const handleStageSelect = (idx: number) => {
    setActiveStage(idx);
    playSingingBowl(1.0 + idx * 0.04);
  };

  const current = MILESTONES[activeStage];

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F5] border-t border-[#E4E4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E4E4DF] gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block mb-2">
              04 · BIOGRAPHICAL STORYTELLING
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#111111]">
              THE BUDDHA
            </h2>
            <p className="text-sm font-mono text-[#6D6D68] uppercase tracking-wider mt-1">
              FROM SIDDHARTHA GAUTAMA TO AWAKENING
            </p>
          </div>

          <button
            onClick={() => onNavigate('/buddha')}
            className="text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#B8874A] transition-colors flex items-center gap-1 self-start md:self-auto"
          >
            <span>Explore Complete Biography</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Horizontal Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {MILESTONES.map((m, idx) => (
            <button
              key={idx}
              onClick={() => handleStageSelect(idx)}
              className={`p-3.5 text-left border transition-all ${
                activeStage === idx
                  ? 'bg-white border-[#111111] shadow-sm'
                  : 'bg-[#F0F0EC] border-[#E4E4DF] text-[#6D6D68] hover:border-[#B8874A]'
              }`}
            >
              <span className="text-[10px] font-mono text-[#B8874A] font-bold block">
                STAGE {m.stage}
              </span>
              <span className="text-xs font-serif font-semibold text-[#111111] truncate block mt-1">
                {m.title}
              </span>
            </button>
          ))}
        </div>

        {/* Large Asymmetric Milestone Feature */}
        <div className="bg-white border border-[#E4E4DF] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative aspect-[4/3] bg-[#111111] overflow-hidden">
            <img
              src={current.imageUrl}
              alt={current.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4 bg-white/95 px-2.5 py-1 text-[10px] font-mono text-[#111111] uppercase tracking-wider border border-[#E4E4DF]">
              Stage {current.stage} / 07
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#6D6D68]">
              <span className="flex items-center gap-1 text-[#B8874A]">
                <MapPin className="w-3.5 h-3.5" /> {current.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {current.period}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-light text-[#111111]">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-[#6D6D68] leading-relaxed font-light">
              {current.description}
            </p>

            <div className="pt-4 border-t border-[#E4E4DF] flex items-center justify-between">
              <div className="text-xs font-mono">
                <span className="text-[#9E9E98] uppercase text-[10px] block">Associated Realization</span>
                <span className="text-[#111111] font-medium">{current.relatedConcept}</span>
              </div>

              <button
                onClick={() => onNavigate('/buddha')}
                className="text-xs font-mono text-[#B8874A] hover:text-[#111111] uppercase tracking-wider flex items-center gap-1"
              >
                <span>Read Chapter</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
