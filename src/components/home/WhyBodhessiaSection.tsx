import React from 'react';
import { Scale, Globe, Landmark, Sparkles } from 'lucide-react';

interface WhyBodhessiaSectionProps {
  onNavigate?: (route: string) => void;
}

export const WhyBodhessiaSection: React.FC<WhyBodhessiaSectionProps> = ({ onNavigate }) => {
  const taxonomyBadges = [
    { name: 'HISTORICAL RECORD', desc: 'Corroborated by independent chronicles, Ashokan epigraphy, and historical consensus.' },
    { name: 'CANONICAL TEXT', desc: 'Formally codified in the Pāli Tipiṭaka, Chinese Āgamas, or Tibetan Kangyur.' },
    { name: 'ARCHAEOLOGICAL EVIDENCE', desc: 'Supported by physical epigraphy, Ashokan pillar edicts, or excavated stupas.' },
    { name: 'TRADITIONAL ACCOUNT', desc: 'Venerated narrative preserved through sacred oral lineage and hagiographies.' },
    { name: 'SCHOLARLY INTERPRETATION', desc: 'Contemporary academic philological, doctrinal, and archaeological analysis.' }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F5F2EA] border-t border-[#D7D2C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8B5F32] font-bold block">
              16 · EDITORIAL INTEGRITY
            </span>

            <h2 className="text-4xl sm:text-6xl font-serif font-black text-[#181816]">
              WHY BODHESSIA?
            </h2>

            <p className="text-base sm:text-lg text-[#555550] leading-relaxed">
              BODHESSIA is built on the conviction that 2,500+ years of Buddhist knowledge deserves a contemporary digital museum. We distinguish historical evidence from canonical tradition with rigorous academic precision.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#181816] text-white flex items-center justify-center font-mono text-xs shrink-0 mt-0.5 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-[#181816]">
                    Authentic Canonical Lineage
                  </h4>
                  <p className="text-xs text-[#555550]">
                    Pāli, Sanskrit, Tibetan, and Classical Chinese traditions represented respectfully.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#181816] text-white flex items-center justify-center font-mono text-xs shrink-0 mt-0.5 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-[#181816]">
                    Archaeological & Epigraphic Rigor
                  </h4>
                  <p className="text-xs text-[#555550]">
                    Coordinates linked directly to UNESCO World Heritage and ASI surveyed sites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Taxonomy Breakdown */}
          <div className="lg:col-span-7 bg-white border border-[#D7D2C8] p-8 sm:p-10 space-y-6 shadow-xs">
            <h3 className="text-xl font-serif font-bold text-[#181816]">
              Epistemic Verification Taxonomy
            </h3>
            <p className="text-xs font-mono text-[#555550]">
              Every knowledge object on BODHESSIA carries explicit verification badges:
            </p>

            <div className="divide-y divide-[#D7D2C8] border-t border-b border-[#D7D2C8]">
              {taxonomyBadges.map((badge, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-[#8B5F32] uppercase tracking-wider bg-[#F5F2EA] px-2.5 py-1 border border-[#D7D2C8] self-start sm:self-auto">
                    {badge.name}
                  </span>
                  <p className="text-xs text-[#555550] sm:text-right max-w-sm">
                    {badge.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
