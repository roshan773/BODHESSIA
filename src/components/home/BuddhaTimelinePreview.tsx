import React, { useState } from 'react';
import { ArrowRight, Sparkles, MapPin, Calendar, Compass } from 'lucide-react';
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
    title: 'The Nativity',
    location: 'Lumbini Sacred Garden (Modern Nepal)',
    period: 'c. 563 / 490 BCE',
    description: 'Prince Siddhārtha was born to Queen Māyādevī and King Śuddhodana of the Śākya clan, prophesied to become either a Universal Wheel-Turning Monarch or a Supreme Awakened Buddha.',
    relatedConcept: 'The 32 Marks of a Great Being',
    imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80'
  },
  {
    stage: '02',
    title: 'The Great Renunciation',
    location: 'Kapilavastu Palace & Anomā River',
    period: 'Age 29',
    description: 'Confronted with the Four Sights (an old man, a sick man, a corpse, and an ascetic monk), the Prince renounced royal inheritance, severed his hair, and entered the forest.',
    relatedConcept: 'Disillusionment with Samsāra (Saṃvega)',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
  },
  {
    stage: '03',
    title: 'The Ascetic Search',
    location: 'Rajgir & Uruvelā Forest',
    period: '6 Years of Striving',
    description: 'Mastered the highest yogic meditative absorptions under Āḷāra Kālāma and Uddaka Rāmaputta, then underwent extreme physical self-mortification before realizing the wisdom of the Middle Way.',
    relatedConcept: 'The Middle Way (Majjhimā Paṭipadā)',
    imageUrl: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=800&q=80'
  },
  {
    stage: '04',
    title: 'Supreme Awakening (Bodhi)',
    location: 'Bodh Gaya (Under the Bodhi Tree)',
    period: 'Age 35 (Full Moon of Vesākha)',
    description: 'Seated upon the Diamond Throne (Vajrāsana), he vanquished Māra, perceived his past lives, understood the 12 Links of Dependent Origination, and attained Unsurpassed Complete Enlightenment.',
    relatedConcept: 'Tathāgata (The Thus-Come One)',
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80'
  },
  {
    stage: '05',
    title: 'The First Sermon',
    location: 'Deer Park (Isipatana / Sarnath)',
    period: 'Dhammacakkappavattana Sutta',
    description: 'Turned the Wheel of Dharma before the five ascetic companions (Kondañña et al.), expounding the Four Noble Truths and the Noble Eightfold Path.',
    relatedConcept: 'Turning of the Wheel (Dharmacakra)',
    imageUrl: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=800&q=80'
  },
  {
    stage: '06',
    title: 'The 45-Year Ministry',
    location: 'Magadha, Kosala, Vajjī Republics',
    period: 'Age 35 to 80',
    description: 'Walked thousands of miles across northern India on foot, founding the fourfold assembly: monks (bhikkhus), nuns (bhikkhunīs), laymen (upāsakas), and laywomen (upāsikās).',
    relatedConcept: 'The Fourfold Sangha (Caturparisā)',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    stage: '07',
    title: 'The Mahāparinirvāṇa',
    location: 'Kushinagar (Sal Grove of Mallas)',
    period: 'Age 80 (Final Passing)',
    description: 'Lying between the twin Sal trees, the Buddha delivered his final discourse: "All conditioned things are subject to decay; strive diligently with wakefulness," and entered unconditioned Parinirvāṇa.',
    relatedConcept: 'The Deathless (Amata / Parinibbāna)',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
  }
];

interface BuddhaTimelinePreviewProps {
  onNavigate: (route: string) => void;
}

export const BuddhaTimelinePreview: React.FC<BuddhaTimelinePreviewProps> = ({ onNavigate }) => {
  const [activeStage, setActiveStage] = useState<number>(3); // Default to Bodhi (Awakening)
  const { playSingingBowl } = useMeditationAudio();

  const handleStageSelect = (idx: number) => {
    setActiveStage(idx);
    playSingingBowl(1.0 + idx * 0.04);
  };

  const current = MILESTONES[activeStage];

  return (
    <section className="py-24 bg-obsidian-950 border-t border-saffron-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-saffron-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED BIOGRAPHICAL ARCHIVE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-parchment-100">
              THE BUDDHA
            </h2>
            <p className="mt-2 text-base text-parchment-400 max-w-xl">
              From Siddhārtha Gautama to the awakening that changed the world.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/buddha')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-obsidian-900 border border-saffron-500/30 text-saffron-300 hover:text-parchment-100 hover:border-saffron-500/60 font-mono text-xs uppercase tracking-wider transition-all self-start md:self-auto"
          >
            <span>EXPLORE THE LIFE OF BUDDHA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Timeline Scroller Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {MILESTONES.map((m, idx) => (
            <button
              key={idx}
              onClick={() => handleStageSelect(idx)}
              className={`p-3 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                activeStage === idx
                  ? 'bg-saffron-500/20 border-saffron-400 text-saffron-200 shadow-lg shadow-saffron-500/10'
                  : 'bg-obsidian-900/70 border-saffron-500/10 text-parchment-400 hover:border-saffron-500/30 hover:text-parchment-200'
              }`}
            >
              <span className="text-[10px] font-mono text-saffron-400 font-bold block">
                STAGE {m.stage}
              </span>
              <span className="text-xs font-serif font-semibold truncate mt-1 text-parchment-100">
                {m.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Featured Viewer */}
        <div className="glass-card rounded-2xl overflow-hidden border border-saffron-500/20 grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[300px] overflow-hidden bg-obsidian-950">
            <img
              src={current.imageUrl}
              alt={current.title}
              className="w-full h-full object-cover object-center transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-obsidian-950" />
            <div className="absolute top-4 left-4 bg-obsidian-950/80 backdrop-blur-md px-3 py-1 rounded border border-saffron-500/30 text-xs font-mono text-saffron-300">
              Stage {current.stage} / 07
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="flex items-center gap-1 text-saffron-400">
                  <MapPin className="w-3.5 h-3.5" /> {current.location}
                </span>
                <span className="flex items-center gap-1 text-parchment-400">
                  <Calendar className="w-3.5 h-3.5" /> {current.period}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-parchment-100">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-parchment-300 leading-relaxed font-light">
                {current.description}
              </p>
            </div>

            <div className="pt-4 border-t border-saffron-500/15 flex items-center justify-between">
              <div className="text-xs font-mono">
                <span className="text-parchment-400 text-[10px] uppercase block tracking-wider">Related Concept</span>
                <span className="text-saffron-300 font-semibold">{current.relatedConcept}</span>
              </div>

              <button
                onClick={() => onNavigate('/buddha')}
                className="text-xs font-mono text-saffron-400 hover:text-saffron-200 tracking-wider uppercase inline-flex items-center gap-1"
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
