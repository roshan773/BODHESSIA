import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
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
    <section className="py-24 sm:py-32 bg-white border-t border-[#E4E4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E4E4DF] gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block mb-2">
              07 · PHILOSOPHICAL DOCTRINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#111111]">
              THE DHARMA
            </h2>
            <p className="text-sm font-mono text-[#6D6D68] uppercase tracking-wider mt-1">
              IDEAS THAT HAVE SHAPED BUDDHIST THOUGHT
            </p>
          </div>

          <button
            onClick={() => onNavigate('/teachings')}
            className="text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#B8874A] transition-colors flex items-center gap-1 self-start md:self-auto"
          >
            <span>Explore All Doctrines</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Large Interactive Expanding List */}
        <div className="divide-y divide-[#E4E4DF] border-t border-b border-[#E4E4DF]">
          {TEACHINGS.slice(0, 6).map((teaching, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={teaching.id} className="transition-all">
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full py-8 text-left flex items-baseline justify-between gap-6 group"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10 min-w-0">
                    <span className="font-mono text-sm text-[#9E9E98] group-hover:text-[#B8874A]">
                      0{idx + 1}
                    </span>
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#111111] group-hover:text-[#B8874A] transition-colors truncate">
                        {teaching.title}
                      </h3>
                      <p className="text-xs font-mono text-[#6D6D68] italic">
                        {teaching.paliName} · {teaching.category}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <span className="text-xs font-mono text-[#6D6D68] hidden sm:inline-block">
                      {isExpanded ? 'Collapse' : 'Expand'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#B8874A]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#9E9E98] group-hover:text-[#111111]" />
                    )}
                  </div>
                </button>

                {/* Expanded Content Panel */}
                {isExpanded && (
                  <div className="pb-8 pl-12 sm:pl-16 pr-4 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
                    <div className="lg:col-span-8 space-y-4">
                      <p className="text-sm sm:text-base text-[#6D6D68] leading-relaxed font-light">
                        {teaching.summary}
                      </p>

                      {teaching.metaphorOrParadigm && (
                        <div className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] text-xs font-mono text-[#111111]">
                          <strong className="text-[#B8874A] uppercase">Core Paradigm:</strong>{' '}
                          {teaching.metaphorOrParadigm}
                        </div>
                      )}

                      {/* Key Components Preview */}
                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E9E98] block">
                          Analytical Principles
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#111111] font-sans">
                          {teaching.keyComponents.slice(0, 4).map((comp, i) => (
                            <div key={i} className="p-2.5 bg-[#F7F7F5] border border-[#E4E4DF]">
                              <span className="font-semibold block">{comp.title}</span>
                              <span className="text-[11px] text-[#6D6D68] line-clamp-1">{comp.explanation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-between p-5 bg-[#F7F7F5] border border-[#E4E4DF] space-y-4">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8874A] block">
                          Canonical Source
                        </span>
                        <p className="text-xs font-serif italic text-[#111111]">
                          "{teaching.canonicalPassage?.text.slice(0, 140)}..."
                        </p>
                        <span className="text-[10px] font-mono text-[#6D6D68] block">
                          — {teaching.canonicalPassage?.source}
                        </span>
                      </div>

                      <button
                        onClick={() => onNavigate('/teachings')}
                        className="w-full py-2.5 bg-[#111111] hover:bg-[#B8874A] text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Deep Dive Doctrine</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
