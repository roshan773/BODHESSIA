import React from 'react';
import { Scale, Globe, Landmark, Sparkles } from 'lucide-react';

export const WhyBodhessiaSection: React.FC = () => {
  const taxonomyBadges = [
    { name: 'HISTORICAL RECORD', desc: 'Corroborated by independent chronicles and historical consensus.' },
    { name: 'CANONICAL TEXT', desc: 'Formally codified in the Pāli Tipiṭaka, Chinese Āgamas, or Tibetan Kangyur.' },
    { name: 'ARCHAEOLOGICAL EVIDENCE', desc: 'Supported by physical epigraphy, Ashokan pillar edicts, or excavated stupas.' },
    { name: 'TRADITIONAL ACCOUNT', desc: 'Venerated narrative preserved through oral folklore and hagiographies.' },
    { name: 'SCHOLARLY INTERPRETATION', desc: 'Contemporary academic philological and philosophical analysis.' }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-[#E4E4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block">
              15 · EDITORIAL INTEGRITY
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#111111]">
              WHY BODHESSIA?
            </h2>

            <p className="text-sm sm:text-base text-[#6D6D68] leading-relaxed font-light">
              BODHESSIA exists to make 2,500+ years of Buddhist knowledge accessible, clear, and dignified through modern design and rigorous curation.
            </p>

            <p className="text-xs sm:text-sm text-[#6D6D68] leading-relaxed">
              We are an educational and cultural knowledge platform, not a religious authority. We do not preach or tell visitors what they must believe.
            </p>
          </div>

          {/* Right Column: Taxonomy Badges */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#111111] block font-semibold pb-2 border-b border-[#E4E4DF]">
              Five-Tier Verification Taxonomy
            </span>

            <div className="space-y-3">
              {taxonomyBadges.map((tax, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <span className="text-xs font-mono font-bold tracking-wider text-[#111111] shrink-0">
                    {tax.name}
                  </span>
                  <span className="text-xs text-[#6D6D68] font-light">
                    {tax.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
