import React, { useState } from 'react';
import { DharmachakraSvg } from './DharmachakraSvg';
import { useMeditationAudio } from '../../context/AudioContext';

interface PathFactor {
  index: number;
  name: string;
  pali: string;
  division: 'Wisdom (Paññā)' | 'Ethics (Sīla)' | 'Concentration (Samādhi)';
  divisionColor: string;
  summary: string;
  insight: string;
}

const FACTORS: PathFactor[] = [
  {
    index: 0,
    name: 'Right View',
    pali: 'Sammā-diṭṭhi',
    division: 'Wisdom (Paññā)',
    divisionColor: 'text-amber-400 border-amber-500/40 bg-amber-950/30',
    summary: 'Seeing reality as it is: direct understanding of the Four Noble Truths, non-self, and moral cause-and-effect (kamma).',
    insight: 'Wisdom begins with clear vision. Without right view, all spiritual exertion wanders aimlessly.'
  },
  {
    index: 1,
    name: 'Right Intention',
    pali: 'Sammā-saṅkappa',
    division: 'Wisdom (Paññā)',
    divisionColor: 'text-amber-400 border-amber-500/40 bg-amber-950/30',
    summary: 'Directing the heart toward renunciation of grasping, loving-kindness without ill-will, and harmless compassion.',
    insight: 'Purifying the inner motive so that thought flows from generosity rather than self-defense.'
  },
  {
    index: 2,
    name: 'Right Speech',
    pali: 'Sammā-vācā',
    division: 'Ethics (Sīla)',
    divisionColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30',
    summary: 'Words that are truthful, harmonious, gentle, and beneficial—refraining from deceit, slander, cruelty, and babble.',
    insight: 'Speech mirrors consciousness; speaking truth builds unshakeable mental clarity and social harmony.'
  },
  {
    index: 3,
    name: 'Right Action',
    pali: 'Sammā-kammanta',
    division: 'Ethics (Sīla)',
    divisionColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30',
    summary: 'Bodily conduct rooted in reverence for life: refraining from killing, stealing, and sensory exploitation.',
    insight: 'Protecting the vulnerable with one’s own physical restraint and generosity.'
  },
  {
    index: 4,
    name: 'Right Livelihood',
    pali: 'Sammā-ājīva',
    division: 'Ethics (Sīla)',
    divisionColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30',
    summary: 'Earning sustenance through honest, harmless means that cause no injury to humans, animals, or the earth.',
    insight: 'Aligning economics with the Dharma so that work becomes a vehicle of blessing rather than exploitation.'
  },
  {
    index: 5,
    name: 'Right Effort',
    pali: 'Sammā-vāyāma',
    division: 'Concentration (Samādhi)',
    divisionColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/30',
    summary: 'The fourfold balanced energy: preventing unwholesome states, abandoning defilements, cultivating wholesome qualities, and sustaining clarity.',
    insight: 'Neither lax nor overly tense—tuned like the strings of a master lute.'
  },
  {
    index: 6,
    name: 'Right Mindfulness',
    pali: 'Sammā-sati',
    division: 'Concentration (Samādhi)',
    divisionColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/30',
    summary: 'Unwavering present-moment awareness anchored in the Four Foundations: body, sensations, mind, and dharmas.',
    insight: 'Bare attention that perceives things as they rise and pass without reactive commentary.'
  },
  {
    index: 7,
    name: 'Right Concentration',
    pali: 'Sammā-samādhi',
    division: 'Concentration (Samādhi)',
    divisionColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/30',
    summary: 'Unification of mind (ekaggatā) culminating in luminous meditative absorptions (Jhānas) that still mental turbulence.',
    insight: 'The tranquil mirror of mind wherein the subtle truth of liberation is directly realized.'
  }
];

export const EightfoldPathWheel: React.FC = () => {
  const [selectedFactorIndex, setSelectedFactorIndex] = useState<number>(0);
  const { playSingingBowl } = useMeditationAudio();

  const handleSelect = (idx: number) => {
    setSelectedFactorIndex(idx);
    playSingingBowl(1.0 + idx * 0.05);
  };

  const selected = FACTORS[selectedFactorIndex];

  return (
    <div className="glass-card rounded-2xl p-6 md:p-10 border border-saffron-500/20 my-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Wheel Section */}
        <div className="flex flex-col items-center justify-center shrink-0">
          <div className="relative group">
            <DharmachakraSvg
              size={280}
              interactive={true}
              activeSpoke={selectedFactorIndex}
              onSpokeHover={(idx) => idx !== null && setSelectedFactorIndex(idx)}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[11px] uppercase tracking-widest text-saffron-400 font-mono bg-obsidian-900/90 px-3 py-1 rounded-full border border-saffron-500/30 backdrop-blur-sm">
                Spoke {selectedFactorIndex + 1} / 8
              </span>
            </div>
          </div>

          {/* Quick Selection Pills */}
          <div className="grid grid-cols-4 gap-2 mt-6 max-w-xs">
            {FACTORS.map((f) => (
              <button
                key={f.index}
                onClick={() => handleSelect(f.index)}
                className={`text-xs py-1.5 px-2 rounded font-mono transition-all duration-300 ${
                  selectedFactorIndex === f.index
                    ? 'bg-saffron-500 text-obsidian-950 font-semibold shadow-lg shadow-saffron-500/20'
                    : 'bg-obsidian-800/80 text-parchment-400 hover:text-parchment-200 border border-saffron-500/10 hover:border-saffron-500/30'
                }`}
              >
                0{f.index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Right Detail Card */}
        <div className="flex-1 space-y-5">
          <div className="flex items-center justify-between border-b border-saffron-500/15 pb-4">
            <div>
              <span className={`inline-block text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-sm border ${selected.divisionColor}`}>
                {selected.division}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-parchment-100 mt-2">
                {selected.name}
              </h3>
              <p className="text-sm font-mono text-saffron-400/90 italic">
                {selected.pali}
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-3xl font-display text-saffron-500/30 font-bold">
                0{selected.index + 1}
              </span>
            </div>
          </div>

          <p className="text-base text-parchment-300 leading-relaxed">
            {selected.summary}
          </p>

          <div className="p-4 rounded-lg bg-obsidian-900/60 border border-saffron-500/15">
            <h4 className="text-xs uppercase font-mono tracking-widest text-saffron-400 mb-1">
              Contemplative Insight
            </h4>
            <p className="text-sm text-parchment-300/90 italic leading-relaxed">
              "{selected.insight}"
            </p>
          </div>

          {/* Threefold Division Legend */}
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-parchment-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Wisdom (Paññā): 1–2
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Ethics (Sīla): 3–5
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> Concentration (Samādhi): 6–8
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
