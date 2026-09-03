import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { TEACHINGS } from '../../data/teachings';
import { useMeditationAudio } from '../../context/AudioContext';

interface DharmaSectionProps {
  onNavigate: (route: string) => void;
}

export const DharmaSection: React.FC<DharmaSectionProps> = ({ onNavigate }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const { playSingingBowl } = useMeditationAudio();

  const handleToggle = (idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(idx);
      playSingingBowl(1.0 + idx * 0.05);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2E8F0] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8874A] font-bold block mb-2">
              07 · PHILOSOPHICAL DOCTRINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#0F172A]">
              THE DHARMA
            </h2>
            <p className="text-sm font-mono text-[#334155] font-semibold uppercase tracking-wider mt-1">
              IDEAS THAT HAVE SHAPED BUDDHIST THOUGHT
            </p>
          </div>

          <button
            onClick={() => onNavigate('/teachings')}
            className="text-xs font-mono uppercase tracking-wider text-[#0F172A] hover:text-[#B8874A] font-bold transition-colors flex items-center gap-1 self-start md:self-auto"
          >
            <span>Explore All Doctrines</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Large Interactive Expanding List */}
        <div className="divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
          {TEACHINGS.slice(0, 6).map((teaching, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={teaching.id} className="transition-all">
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full py-7 text-left flex items-baseline justify-between gap-6 group hover:bg-[#F8FAFC] px-4 -mx-4 transition-colors"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10 min-w-0">
                    <span className="font-mono text-base font-bold text-[#B8874A]">
                      0{idx + 1}
                    </span>
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] group-hover:text-[#B8874A] transition-colors truncate">
                        {teaching.title}
                      </h3>
                      <p className="text-xs font-mono text-[#475569] font-medium italic">
                        {teaching.paliName} · {teaching.category}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <span className="text-xs font-mono text-[#475569] font-bold hidden sm:inline-block">
                      {isExpanded ? 'Collapse' : 'Expand'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#B8874A]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#475569] group-hover:text-[#0F172A]" />
                    )}
                  </div>
                </button>

                {/* Expanded Content Panel */}
                {isExpanded && (
                  <div className="pb-8 pl-10 sm:pl-14 pr-4 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
                    <div className="lg:col-span-8 space-y-4">
                      <p className="text-base text-[#334155] leading-relaxed font-normal">
                        {teaching.summary}
                      </p>

                      {teaching.metaphorOrParadigm && (
                        <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-mono text-[#0F172A]">
                          <strong className="text-[#B8874A] uppercase font-bold">Core Paradigm:</strong>{' '}
                          {teaching.metaphorOrParadigm}
                        </div>
                      )}

                      {/* Key Components Preview */}
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#475569] font-bold block">
                          Analytical Principles
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#0F172A] font-sans">
                          {teaching.keyComponents.slice(0, 4).map((comp, i) => (
                            <div key={i} className="p-3 bg-[#F8FAFC] border border-[#E2E8F0]">
                              <span className="font-bold text-sm block">{comp.title}</span>
                              <span className="text-xs text-[#475569] font-normal block mt-1">{comp.explanation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-between p-6 bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#B8874A] font-bold block">
                          Canonical Source
                        </span>
                        <p className="text-sm font-serif italic text-[#0F172A] font-semibold leading-relaxed">
                          "{teaching.canonicalPassage?.text.slice(0, 140)}..."
                        </p>
                        <span className="text-xs font-mono text-[#475569] font-medium block">
                          — {teaching.canonicalPassage?.source}
                        </span>
                      </div>

                      <button
                        onClick={() => onNavigate('/teachings')}
                        className="w-full py-3 bg-[#0F172A] hover:bg-[#B8874A] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <span>Deep Dive Doctrine</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
