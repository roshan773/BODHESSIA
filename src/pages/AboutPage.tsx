import React from 'react';
import { ArrowLeft, ShieldCheck, Scale, BookOpen, Globe, Landmark, HeartHandshake, Layers } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const taxonomyItems = [
    {
      badge: 'HISTORICAL RECORD',
      style: 'bg-amber-950/40 text-amber-300 border-amber-700/40',
      desc: 'Corroborated by independent historical chronicles, royal annals, or contemporary historiographical consensus.'
    },
    {
      badge: 'CANONICAL TEXT',
      style: 'bg-emerald-950/40 text-emerald-300 border-emerald-700/40',
      desc: 'Formally codified within recognized scriptural canons (such as the Pāli Tipiṭaka, Chinese Āgamas, or Tibetan Kangyur).'
    },
    {
      badge: 'ARCHAEOLOGICAL EVIDENCE',
      style: 'bg-rose-950/40 text-rose-300 border-rose-700/40',
      desc: 'Directly supported by physical epigraphy, Ashokan stone pillar edicts, relic caskets, or excavated monastic monuments.'
    },
    {
      badge: 'TRADITIONAL ACCOUNT',
      style: 'bg-stone-900/60 text-stone-300 border-stone-700/40',
      desc: 'Venerated narrative preserved through oral folklore, sectarian hagiographies, or legendary commentarial traditions.'
    },
    {
      badge: 'SCHOLARLY INTERPRETATION',
      style: 'bg-cyan-950/40 text-cyan-300 border-cyan-700/40',
      desc: 'Contemporary academic philological, archaeological, or philosophical analysis by specialized researchers.'
    }
  ];

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
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-saffron-400">
              <ShieldCheck className="w-4 h-4" />
              <span>THE FOUNDATIONAL CHARTER & EDITORIAL ETHOS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-parchment-100">
              ABOUT BODHESSIA
            </h1>
            <p className="text-lg font-mono text-saffron-400 italic">
              A Global Digital Museum Dedicated to 2,500+ Years of Buddhist Knowledge
            </p>
            <p className="text-sm sm:text-base text-parchment-300 leading-relaxed font-light">
              BODHESSIA is envisioned as a world-class digital encyclopedia, visual archive, and educational repository. We bring together history, philosophy, sacred art, lineages, and living traditions into an immersive, museum-grade sanctuary.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Purpose & Non-Sectarian Stance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl font-serif font-bold text-parchment-100">
              Our Core Purpose & Philosophy
            </h2>
            <p className="text-sm sm:text-base text-parchment-300 leading-relaxed font-light">
              BODHESSIA is <strong>not a temple, a religious authority, or a meditation app</strong>. We do not proselytize or tell visitors what they must believe. Instead, we present the immense wealth of Buddhist civilization as a profound cultural and intellectual inheritance of humanity.
            </p>
            <p className="text-sm text-parchment-400 leading-relaxed">
              We welcome Buddhists of all traditions, students, historians, scholars, philosophers, artists, travelers, and curious seekers exploring the Dharma for the first time.
            </p>
          </div>

          <div className="lg:col-span-6 glass-card rounded-2xl p-6 md:p-8 border-saffron-500/20 space-y-4">
            <h3 className="text-xl font-serif font-bold text-saffron-300">
              Design & Museum Aesthetic Principles
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-parchment-300 font-sans">
              <li className="flex items-start gap-2.5">
                <span className="text-saffron-400 font-mono mt-0.5">•</span>
                <span><strong>Peaceful without being boring:</strong> Meditative atmosphere paired with modern typography and interactive models.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-saffron-400 font-mono mt-0.5">•</span>
                <span><strong>Spiritual without decorative excess:</strong> Buddhist geometry used as design language rather than frivolous decoration.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-saffron-400 font-mono mt-0.5">•</span>
                <span><strong>Historical without feeling antiquated:</strong> Cutting-edge responsive web engineering preserving ancient manuscripts and archaeological stone art.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Verification & Academic Taxonomy */}
        <div className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-saffron-400">
              Academic Integrity Charter
            </span>
            <h2 className="text-3xl font-serif font-bold text-parchment-100">
              Our Metadata Taxonomy
            </h2>
            <p className="text-xs sm:text-sm text-parchment-400 mt-1">
              Every entry in BODHESSIA is categorized by clear source attribution to preserve epistemic transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxonomyItems.map((tax, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-6 border-saffron-500/15 space-y-3"
              >
                <span className={`inline-block font-mono text-xs uppercase px-2.5 py-1 rounded border ${tax.style}`}>
                  {tax.badge}
                </span>
                <p className="text-xs text-parchment-300 leading-relaxed font-light">
                  {tax.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Long-Term Archive Vision Roadmap */}
        <div className="p-8 sm:p-12 rounded-2xl glass-card border border-saffron-500/25 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-saffron-400">
              The Digital Encyclopedia Vision
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-parchment-100 mt-1">
              Future Modules Under Curation
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-mono text-parchment-300">
            <div className="p-4 rounded-xl bg-obsidian-950/80 border border-saffron-500/10 space-y-1">
              <span className="text-saffron-400 uppercase font-semibold block">01. Canonical Texts & Sūtra Library</span>
              <p className="text-parchment-400">Interactive parallel translations of Pāli Nikāyas, Chinese Āgamas, and Sanskrit Prajñāpāramitā texts.</p>
            </div>
            <div className="p-4 rounded-xl bg-obsidian-950/80 border border-saffron-500/10 space-y-1">
              <span className="text-saffron-400 uppercase font-semibold block">02. Buddhist Art & Architecture</span>
              <p className="text-parchment-400">High-resolution 3D models of cave stupas (Ajanta, Mogao, Ellora) and temple relief mandalas.</p>
            </div>
            <div className="p-4 rounded-xl bg-obsidian-950/80 border border-saffron-500/10 space-y-1">
              <span className="text-saffron-400 uppercase font-semibold block">03. Living Traditions & Lineages</span>
              <p className="text-parchment-400">Documentary archives covering Thai Forest, Zen / Chan, Tibetan Gelug/Nyingma/Kagyu/Sakya, and Pure Land.</p>
            </div>
            <div className="p-4 rounded-xl bg-obsidian-950/80 border border-saffron-500/10 space-y-1">
              <span className="text-saffron-400 uppercase font-semibold block">04. Interactive Knowledge Graph</span>
              <p className="text-parchment-400">Visual semantic node network mapping philosophical terms, masters, monasteries, and texts across centuries.</p>
            </div>
            <div className="p-4 rounded-xl bg-obsidian-950/80 border border-saffron-500/10 space-y-1">
              <span className="text-saffron-400 uppercase font-semibold block">05. Monastic Epigraphy & Inscriptions</span>
              <p className="text-parchment-400">Complete digitized translations of Emperor Ashoka’s major rock and pillar edicts with Brahmi script visualizers.</p>
            </div>
            <div className="p-4 rounded-xl bg-obsidian-950/80 border border-saffron-500/10 space-y-1">
              <span className="text-saffron-400 uppercase font-semibold block">06. Multilingual Scholarly Glossaries</span>
              <p className="text-parchment-400">Etymological cross-references linking Sanskrit, Pāli, Tibetan, Chinese, Japanese, and English terms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
