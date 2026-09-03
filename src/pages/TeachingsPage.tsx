import React, { useState } from 'react';
import { ArrowLeft, X, ArrowRight } from 'lucide-react';
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
    <div className="pt-24 pb-20 bg-[#F7F7F5] min-h-screen">
      {/* Header Banner */}
      <div className="py-16 bg-white border-b border-[#E4E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6D6D68] hover:text-[#111111] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Portal
          </button>

          <div className="max-w-3xl space-y-4">
            <MetadataBadge
              metadata={{
                status: 'Canonical Text',
                tradition: 'Cross-Tradition Philosophy',
                source: 'Nikāyas & Mahāyāna Canons'
              }}
              size="md"
            />

            <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#111111]">
              THE DHARMA
            </h1>
            <p className="text-base font-mono text-[#B8874A] italic">
              The Living Cosmic Law and Diagnostic Science of the Human Mind
            </p>
            <p className="text-sm sm:text-base text-[#6D6D68] leading-relaxed font-light">
              The Buddha compared the Dharma not to a dogmatic creed, but to a practical raft constructed to cross the turbulent flood of existential suffering to the secure other shore of Nirvana.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Interactive Model 1: The Noble Eightfold Path */}
        <div>
          <div className="max-w-2xl mb-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block">
              INTERACTIVE DIAGRAM 01
            </span>
            <h2 className="text-3xl font-serif font-light text-[#111111]">
              The Noble Eightfold Path Wheel (Ariya Magga)
            </h2>
          </div>
          <EightfoldPathWheel />
        </div>

        {/* Interactive Model 2: 12 Nidānas */}
        <div>
          <div className="max-w-2xl mb-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block">
              INTERACTIVE DIAGRAM 02
            </span>
            <h2 className="text-3xl font-serif font-light text-[#111111]">
              Dependent Origination Chain (Paṭiccasamuppāda)
            </h2>
          </div>
          <DependentOriginationWheel />
        </div>

        {/* Complete Core Doctrinal Cards */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block">
              DOCTRINAL COMPENDIUM
            </span>
            <h2 className="text-3xl font-serif font-light text-[#111111]">
              The Seven Pillars of Buddhist Thought
            </h2>
            <p className="text-xs sm:text-sm text-[#6D6D68] mt-1 font-light">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white border border-[#E4E4DF] shadow-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-[#E4E4DF] bg-[#F7F7F5]">
              <div>
                <span className="font-mono text-xs text-[#B8874A] font-bold uppercase tracking-wider block">
                  {selectedTeaching.category}
                </span>
                <span className="text-xl font-serif font-bold text-[#111111]">
                  {selectedTeaching.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedTeaching(null)}
                className="p-1.5 hover:bg-neutral-200 transition-colors"
              >
                <X className="w-5 h-5 text-[#111111]" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#111111]">
                  {selectedTeaching.title}
                </h2>
                <p className="text-xs font-mono text-[#B8874A] italic mt-0.5">
                  {selectedTeaching.paliName}
                </p>
                <p className="text-sm text-[#6D6D68] leading-relaxed font-light mt-3">
                  {selectedTeaching.summary}
                </p>
              </div>

              {selectedTeaching.metaphorOrParadigm && (
                <div className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8874A] block font-semibold">
                    Core Conceptual Paradigm
                  </span>
                  <p className="text-xs sm:text-sm text-[#111111]">
                    {selectedTeaching.metaphorOrParadigm}
                  </p>
                </div>
              )}

              {/* Key Components */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#111111] font-semibold">
                  Principal Components
                </h4>
                <div className="space-y-3">
                  {selectedTeaching.keyComponents.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-serif font-bold text-[#111111]">
                          {comp.title}
                        </span>
                        {comp.paliTerm && (
                          <span className="text-xs font-mono text-[#B8874A]">
                            {comp.paliTerm}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#6D6D68] leading-relaxed font-light">
                        {comp.explanation}
                      </p>
                      {comp.practicalApplication && (
                        <p className="text-xs text-[#244B38] font-mono pt-1">
                          ↳ Practice: {comp.practicalApplication}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {selectedTeaching.canonicalPassage && (
                <blockquote className="p-4 bg-[#F7F7F5] border-l-2 border-[#B8874A] space-y-1">
                  <p className="text-xs sm:text-sm font-serif italic text-[#111111] leading-relaxed">
                    "{selectedTeaching.canonicalPassage.text}"
                  </p>
                  <span className="text-[10px] font-mono text-[#6D6D68] block not-italic pt-1">
                    — {selectedTeaching.canonicalPassage.source}
                  </span>
                </blockquote>
              )}

              <div className="pt-2 border-t border-[#E4E4DF] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#6D6D68]">
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
