import React, { useState } from 'react';
import { useMeditationAudio } from '../../context/AudioContext';

interface Nidana {
  index: number;
  pali: string;
  english: string;
  category: 'Past Ignorance' | 'Present Fruit' | 'Present Activity' | 'Future Rebirth';
  desc: string;
  cure: string;
}

const NIDANAS: Nidana[] = [
  { index: 1, pali: 'Avijjā', english: 'Spiritual Ignorance', category: 'Past Ignorance', desc: 'Not seeing the Four Noble Truths; mistaking the impermanent for permanent.', cure: 'Penetrative Insight & Study of Dharma' },
  { index: 2, pali: 'Saṅkhārā', english: 'Volitional Formations', category: 'Past Ignorance', desc: 'Karmic impulses of body, speech, and mind generated through unclarity.', cure: 'Right Intention & Ethical Restraint' },
  { index: 3, pali: 'Viññāṇa', english: 'Relinking Consciousness', category: 'Present Fruit', desc: 'Consciousness descending into the womb, igniting a new sensory life.', cure: 'Mindfulness of Consciousness' },
  { index: 4, pali: 'Nāmarūpa', english: 'Mind & Form (Psycho-physical)', category: 'Present Fruit', desc: 'Mental factors (feeling, perception, volition) and physical body forming.', cure: 'Discerning the 5 Aggregates' },
  { index: 5, pali: 'Saḷāyatana', english: 'Six Sense Bases', category: 'Present Fruit', desc: 'Eye, ear, nose, tongue, body, and mental cognition organs.', cure: 'Guarding the Sense Doors' },
  { index: 6, pali: 'Phassa', english: 'Sensory Contact', category: 'Present Fruit', desc: 'The meeting of sense organ, sense object, and sensory consciousness.', cure: 'Clear Awareness at the Point of Contact' },
  { index: 7, pali: 'Vedanā', english: 'Feeling Tone / Sensation', category: 'Present Fruit', desc: 'Immediate pleasant, painful, or neutral affective valence.', cure: 'Seeing sensations as impermanent, not self' },
  { index: 8, pali: 'Taṇhā', english: 'Craving / Thirst', category: 'Present Activity', desc: 'The pivotal habit: grasping after pleasure, resisting pain.', cure: 'Non-reactivity; letting thirst subside' },
  { index: 9, pali: 'Upādāna', english: 'Clinging / Grasping', category: 'Present Activity', desc: 'Intensified obsession with views, pleasures, rituals, and ego-identity.', cure: 'Relinquishment and Renunciation' },
  { index: 10, pali: 'Bhava', english: 'Becoming / Karmic Existence', category: 'Present Activity', desc: 'Karmic energy momentum charging the stream of future rebirth.', cure: 'Dissolving Karmic Momentum' },
  { index: 11, pali: 'Jāti', english: 'Birth / Re-arising', category: 'Future Rebirth', desc: 'The manifestation of aggregates into a new life-realm.', cure: 'Ending of cyclic birth through Nibbāna' },
  { index: 12, pali: 'Jarāmaraṇa', english: 'Aging & Death', category: 'Future Rebirth', desc: 'Decay, sorrow, lamentation, and pain culminating in dissolution.', cure: 'The Deathless (Amata) of Awakening' }
];

export const DependentOriginationWheel: React.FC = () => {
  const [activeNidana, setActiveNidana] = useState<number>(1);
  const { playSingingBowl } = useMeditationAudio();

  const selected = NIDANAS.find((n) => n.index === activeNidana) || NIDANAS[0];

  const handleSelect = (idx: number) => {
    setActiveNidana(idx);
    playSingingBowl(1.0 + (idx / 12) * 0.4);
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-10 border border-saffron-500/20 my-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-saffron-400">
          The Universal Chain of Conditioned Genesis
        </span>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-parchment-100 mt-1">
          Paṭiccasamuppāda (12 Nidānas)
        </h3>
        <p className="text-xs md:text-sm text-parchment-400 mt-2">
          "When this exists, that comes to be. With the cessation of this, that ceases."
        </p>
      </div>

      {/* Cyclic 12-Step Bar / Timeline */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">
        {NIDANAS.map((n) => (
          <button
            key={n.index}
            onClick={() => handleSelect(n.index)}
            className={`p-2.5 rounded-lg text-left transition-all duration-300 border flex flex-col justify-between ${
              activeNidana === n.index
                ? 'bg-saffron-500/20 border-saffron-400 text-saffron-200 shadow-md shadow-saffron-500/10'
                : 'bg-obsidian-900/60 border-saffron-500/10 text-parchment-400 hover:border-saffron-500/30 hover:text-parchment-200'
            }`}
          >
            <span className="text-[10px] font-mono text-saffron-500/80 font-bold">
              {n.index < 10 ? `0${n.index}` : n.index}
            </span>
            <span className="text-xs font-serif font-medium truncate mt-1">
              {n.pali}
            </span>
          </button>
        ))}
      </div>

      {/* Active Nidāna Detail */}
      <div className="bg-obsidian-900/80 border border-saffron-500/20 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider bg-saffron-500/15 text-saffron-300 border border-saffron-500/30 px-2.5 py-0.5 rounded-sm">
              Step {selected.index} of 12 · {selected.category}
            </span>
            <span className="text-xs font-mono text-parchment-500">
              Link {selected.index} → {selected.index === 12 ? 'Link 1 (Cycle Repeats)' : `Link ${selected.index + 1}`}
            </span>
          </div>

          <h4 className="text-2xl md:text-3xl font-serif font-bold text-parchment-100">
            {selected.pali} <span className="text-lg font-sans font-normal text-parchment-400">({selected.english})</span>
          </h4>

          <p className="text-base text-parchment-300 leading-relaxed">
            {selected.desc}
          </p>
        </div>

        <div className="shrink-0 w-full md:w-72 p-4 rounded-lg bg-obsidian-950/80 border border-emerald-600/30">
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
            Path of Cessation (Nirodha)
          </span>
          <p className="text-sm text-parchment-200 font-medium">
            {selected.cure}
          </p>
        </div>
      </div>
    </div>
  );
};
