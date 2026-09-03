import React, { useState } from 'react';
import { ArrowLeft, X, Sparkles, BookOpen, Layers, Info } from 'lucide-react';
import { TEACHINGS } from '../data/teachings';
import { TeachingDetail } from '../types';
import { TeachingCard } from '../components/cards/TeachingCard';
import { EightfoldPathWheel } from '../components/visual/EightfoldPathWheel';
import { DependentOriginationWheel } from '../components/visual/DependentOriginationWheel';
import { MetadataBadge } from '../components/cards/MetadataBadge';
import { useMeditationAudio } from '../context/AudioContext';

interface TeachingsPageProps {
  onNavigate: (route: string) => void;
}

export const TeachingsPage: React.FC<TeachingsPageProps> = ({ onNavigate }) => {
  const [selectedTeaching, setSelectedTeaching] = useState<TeachingDetail | null>(null);
  const { playSingingBowl } = useMeditationAudio();

  const handleOpenDetail = (t: TeachingDetail) => {
    setSelectedTeaching(t);
    playSingingBowl(1.1);
  };

  return (
    <div className="pt-24 pb-20 bg-obsidian-950 min-h-screen">
      {/* Header Banner */}
      <div className="py-16 bg-gradient-to-b from-obsidian-900 to-obsidian-950 border-b border-saffron-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-saffron-400 hover:text-saffron-200 mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Museum Portal
          </button>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <MetadataBadge
                metadata={{
                  status: 'Canonical Text',
                  tradition: 'Cross-Tradition Philosophy',
                  source: 'Nikāyas & Mahāyāna Canons'
                }}
                size="md"
              />
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-parchment-100">
              THE DHARMA
            </h1>
            <p className="text-lg font-mono text-saffron-400 italic">
              The Living Cosmic Law and Diagnostic Science of the Human Mind
            </p>
            <p className="text-sm sm:text-base text-parchment-300 leading-relaxed font-light">
              The Buddha compared the Dharma not to dogmatic creed, but to a raft (Kulla) constructed to cross the flood of suffering to the safe other shore of Nirvana. Once the shore is reached, even the raft is relinquished.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Interactive Model 1: The Noble Eightfold Path */}
        <div>
          <div className="max-w-2xl mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-saffron-400">
              Interactive Model 01
            </span>
            <h2 className="text-3xl font-serif font-bold text-parchment-100">
              The Noble Eightfold Path Wheel (Ariya Magga)
            </h2>
          </div>
          <EightfoldPathWheel />
        </div>

        {/* Interactive Model 2: 12 Nidānas */}
        <div>
          <div className="max-w-2xl mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-saffron-400">
              Interactive Model 02
            </span>
            <h2 className="text-3xl font-serif font-bold text-parchment-100">
              Dependent Origination Chain (Paṭiccasamuppāda)
            </h2>
          </div>
          <DependentOriginationWheel />
        </div>

        {/* Complete Core Doctrinal Cards */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-saffron-400">
              Curated Doctrine Compendium
            </span>
            <h2 className="text-3xl font-serif font-bold text-parchment-100">
              The Seven Pillars of Buddhist Thought
            </h2>
            <p className="text-xs sm:text-sm text-parchment-400 mt-1">
              Select any doctrine to inspect its canonical breakdown and scriptural passages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHINGS.map((t) => (
              <TeachingCard
                key={t.id}
                teaching={t}
                onClick={() => handleOpenDetail(t)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedTeaching && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-obsidian-900 border border-saffron-500/30 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-saffron-500/20 bg-obsidian-950/80">
              <div>
                <span className="font-mono text-xs text-saffron-400 font-bold uppercase tracking-wider block">
                  {selectedTeaching.category}
                </span>
                <span className="text-xl font-serif font-bold text-parchment-100">
                  {selectedTeaching.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedTeaching(null)}
                className="p-1.5 rounded-lg text-parchment-400 hover:text-parchment-100 hover:bg-obsidian-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <div>
                <h2 className="text-3xl font-serif font-bold text-parchment-100">
                  {selectedTeaching.title}
                </h2>
                <p className="text-xs font-mono text-saffron-400 italic mt-0.5">
                  {selectedTeaching.paliName}
                </p>
                <p className="text-sm text-parchment-300 leading-relaxed font-light mt-3">
                  {selectedTeaching.summary}
                </p>
              </div>

              {selectedTeaching.metaphorOrParadigm && (
                <div className="p-4 rounded-xl bg-obsidian-950 border border-saffron-500/20 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-saffron-400 block font-semibold">
                    Core Conceptual Paradigm
                  </span>
                  <p className="text-xs sm:text-sm text-parchment-200">
                    {selectedTeaching.metaphorOrParadigm}
                  </p>
                </div>
              )}

              {/* Key Components */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-saffron-400 font-semibold">
                  Principal Analytical Components
                </h4>
                <div className="space-y-3">
                  {selectedTeaching.keyComponents.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-obsidian-950/70 border border-saffron-500/10 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-serif font-bold text-parchment-100">
                          {comp.title}
                        </span>
                        {comp.paliTerm && (
                          <span className="text-xs font-mono text-saffron-400/80">
                            {comp.paliTerm}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-parchment-300 leading-relaxed font-light">
                        {comp.explanation}
                      </p>
                      {comp.practicalApplication && (
                        <p className="text-xs text-emerald-400/90 font-mono pt-1">
                          ↳ Practice: {comp.practicalApplication}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {selectedTeaching.canonicalPassage && (
                <blockquote className="p-4 rounded-xl bg-obsidian-950 border-l-2 border-saffron-500 space-y-1">
                  <p className="text-xs sm:text-sm font-serif italic text-parchment-200 leading-relaxed">
                    "{selectedTeaching.canonicalPassage.text}"
                  </p>
                  <span className="text-[10px] font-mono text-saffron-400/80 block not-italic pt-1">
                    — {selectedTeaching.canonicalPassage.source}
                  </span>
                </blockquote>
              )}

              <div className="pt-2 border-t border-saffron-500/15 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-parchment-400">
                <MetadataBadge metadata={selectedTeaching.metadata} size="sm" />
                <span>Source: {selectedTeaching.metadata.source}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
