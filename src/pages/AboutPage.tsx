import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const taxonomyItems = [
    {
      badge: 'HISTORICAL RECORD',
      desc: 'Corroborated by independent historical chronicles, royal annals, or contemporary historiographical consensus.'
    },
    {
      badge: 'CANONICAL TEXT',
      desc: 'Formally codified within recognized scriptural canons (such as the Pāli Tipiṭaka, Chinese Āgamas, or Tibetan Kangyur).'
    },
    {
      badge: 'ARCHAEOLOGICAL EVIDENCE',
      desc: 'Directly supported by physical epigraphy, Ashokan stone pillar edicts, relic caskets, or excavated monastic monuments.'
    },
    {
      badge: 'TRADITIONAL ACCOUNT',
      desc: 'Venerated narrative preserved through oral folklore, sectarian hagiographies, or legendary commentarial traditions.'
    },
    {
      badge: 'SCHOLARLY INTERPRETATION',
      desc: 'Contemporary academic philological, archaeological, or philosophical analysis by specialized researchers.'
    }
  ];

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
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block">
              EDITORIAL CHARTER
            </span>

            <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#111111]">
              ABOUT BODHESSIA
            </h1>
            <p className="text-base font-mono text-[#B8874A] italic">
              A Modern Digital Knowledge Platform Dedicated to 2,500+ Years of Buddhist Wisdom
            </p>
            <p className="text-sm sm:text-base text-[#6D6D68] leading-relaxed font-light">
              BODHESSIA is envisioned as a world-class digital encyclopedia, visual archive, and educational repository. We bring together history, philosophy, sacred art, lineages, and living traditions into an accessible, museum-grade sanctuary.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Purpose & Non-Sectarian Stance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl font-serif font-light text-[#111111]">
              Our Core Purpose & Philosophy
            </h2>
            <p className="text-sm sm:text-base text-[#6D6D68] leading-relaxed font-light">
              BODHESSIA is <strong>not a temple, a religious authority, or a meditation app</strong>. We do not proselytize or tell visitors what they must believe. Instead, we present the immense wealth of Buddhist civilization as a profound cultural and intellectual inheritance of humanity.
            </p>
            <p className="text-sm text-[#6D6D68] leading-relaxed font-light">
              We welcome Buddhists of all traditions, students, historians, scholars, philosophers, artists, travelers, and curious seekers exploring the Dharma for the first time.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white border border-[#E4E4DF] p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#111111]">
              Design & Aesthetic Principles
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#6D6D68] font-sans">
              <li className="flex items-start gap-2.5">
                <span className="text-[#B8874A] font-mono mt-0.5">•</span>
                <span><strong>Calm without being sterile:</strong> Meditative whitespace paired with confident typography and interactive knowledge models.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#B8874A] font-mono mt-0.5">•</span>
                <span><strong>Authentic without decorative excess:</strong> Buddhist geometry used as functional structure rather than religious ornamentation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#B8874A] font-mono mt-0.5">•</span>
                <span><strong>Contemporary precision:</strong> A 2026 digital product architecture built for decades of knowledge expansion.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Verification & Academic Taxonomy */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block">
              ACADEMIC STANDARDS
            </span>
            <h2 className="text-3xl font-serif font-light text-[#111111]">
              Our Metadata Taxonomy
            </h2>
            <p className="text-xs sm:text-sm text-[#6D6D68] mt-1 font-light">
              Every entry in BODHESSIA is categorized by clear source attribution to preserve epistemic transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxonomyItems.map((tax, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E4E4DF] p-6 space-y-3"
              >
                <span className="inline-block font-mono text-xs uppercase px-2.5 py-1 bg-[#F7F7F5] text-[#111111] border border-[#E4E4DF] font-semibold">
                  {tax.badge}
                </span>
                <p className="text-xs text-[#6D6D68] leading-relaxed font-light">
                  {tax.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Long-Term Archive Vision Roadmap */}
        <div className="p-8 sm:p-12 bg-white border border-[#E4E4DF] space-y-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block">
              THE DIGITAL ENCYCLOPEDIA ROADMAP
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#111111] mt-1">
              Future Modules Under Curation
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-mono text-[#6D6D68]">
            <div className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] space-y-1">
              <span className="text-[#111111] uppercase font-semibold block">01. Canonical Texts Library</span>
              <p className="text-[#6D6D68]">Parallel digitized translations of Pāli Nikāyas, Chinese Āgamas, and Tibetan Kangyur.</p>
            </div>
            <div className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] space-y-1">
              <span className="text-[#111111] uppercase font-semibold block">02. 3D Architectural Archives</span>
              <p className="text-[#6D6D68]">High-resolution photogrammetric 3D scans of cave stupas (Ajanta, Mogao, Ellora) and temple mandalas.</p>
            </div>
            <div className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] space-y-1">
              <span className="text-[#111111] uppercase font-semibold block">03. Living Traditions</span>
              <p className="text-[#6D6D68]">Documentary archives covering Thai Forest, Zen / Chan, Tibetan lineages, and Pure Land.</p>
            </div>
            <div className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] space-y-1">
              <span className="text-[#111111] uppercase font-semibold block">04. Global Knowledge Graph</span>
              <p className="text-[#6D6D68]">Visual semantic node network mapping philosophical terms, masters, monasteries, and texts across centuries.</p>
            </div>
            <div className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] space-y-1">
              <span className="text-[#111111] uppercase font-semibold block">05. Monastic Epigraphy</span>
              <p className="text-[#6D6D68]">Complete translations of Emperor Ashoka’s major rock and pillar edicts with Brahmi script visualizers.</p>
            </div>
            <div className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] space-y-1">
              <span className="text-[#111111] uppercase font-semibold block">06. Multilingual Glossaries</span>
              <p className="text-[#6D6D68]">Etymological cross-references linking Sanskrit, Pāli, Tibetan, Chinese, Japanese, and English terms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
