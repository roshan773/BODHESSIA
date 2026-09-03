import React from 'react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { EightfoldPathWheel } from '../visual/EightfoldPathWheel';

interface DharmaSectionProps {
  onNavigate: (route: string) => void;
}

export const DharmaSection: React.FC<DharmaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-obsidian-900 border-t border-saffron-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-saffron-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PHILOSOPHICAL PILLARS OF LIBERATION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-parchment-100">
              THE DHARMA
            </h2>
            <p className="mt-2 text-base text-parchment-400 max-w-xl">
              Explore the profound ideas and contemplative psychology at the heart of Buddhist thought.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/teachings')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-obsidian-950 border border-saffron-500/30 text-saffron-300 hover:text-parchment-100 hover:border-saffron-500/60 font-mono text-xs uppercase tracking-wider transition-all self-start md:self-auto"
          >
            <span>EXPLORE ALL DOCTRINES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Noble Eightfold Path Wheel Experience */}
        <EightfoldPathWheel />

        {/* Four Noble Truths Quick Overview Strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: '01', title: 'Dukkha', label: 'The Truth of Suffering', desc: 'Conditioned existence is fraught with friction, impermanence, and unsatisfactoriness.' },
            { num: '02', title: 'Samudaya', label: 'The Origin of Suffering', desc: 'Craving (Taṇhā) and clinging rooted in spiritual ignorance generate cyclic distress.' },
            { num: '03', title: 'Nirodha', label: 'The Cessation of Suffering', desc: 'The unconditioned peace of Nibbāna achieved through the total release of grasping.' },
            { num: '04', title: 'Magga', label: 'The Path to Cessation', desc: 'The Noble Eightfold Middle Way uniting ethics, meditative concentration, and wisdom.' },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-obsidian-950/70 border border-saffron-500/15 space-y-2 hover:border-saffron-500/35 transition-colors">
              <span className="text-xs font-mono text-saffron-500 font-bold">TRUTH {item.num}</span>
              <h4 className="text-xl font-serif font-bold text-parchment-100">{item.title}</h4>
              <span className="text-xs font-mono text-saffron-400/90 block">{item.label}</span>
              <p className="text-xs text-parchment-400 leading-relaxed pt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
