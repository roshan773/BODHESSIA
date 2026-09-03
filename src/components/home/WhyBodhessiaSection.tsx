import React from 'react';
import { ShieldCheck, BookOpen, Scale, Landmark, Sparkles, Globe } from 'lucide-react';

export const WhyBodhessiaSection: React.FC = () => {
  const pillars = [
    {
      icon: Scale,
      title: 'Academic & Editorial Rigor',
      desc: 'We strictly distinguish between archaeological records, canonical scriptures, and traditional folklore, preserving the intellectual integrity of every tradition.'
    },
    {
      icon: Globe,
      title: 'Pan-Buddhist Inclusivity',
      desc: 'Honoring the living branches of Theravāda, Mahāyāna, and Vajrayāna with equal respect without asserting sectarian dogmatism.'
    },
    {
      icon: Landmark,
      title: 'Visual & Cultural Museum Heritage',
      desc: 'Preserving high-resolution imagery of stone carvings, cave murals, stupa architecture, and palm-leaf manuscripts across thirty nations.'
    },
    {
      icon: Sparkles,
      title: 'Contemplative Living Wisdom',
      desc: 'Illuminating timeless psychological insights into mindfulness, compassion, non-attachment, and the alleviation of human distress.'
    }
  ];

  return (
    <section className="py-24 bg-obsidian-950 border-t border-saffron-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-saffron-400">
              <ShieldCheck className="w-4 h-4" />
              <span>EDITORIAL STANDARDS MANIFESTO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-parchment-100">
              WHY BODHESSIA?
            </h2>

            <p className="text-base text-parchment-300 leading-relaxed font-light">
              BODHESSIA was founded to bring the vast heritage of Buddhist knowledge together in one carefully researched, visually rich, and globally accessible digital platform.
            </p>

            <p className="text-sm text-parchment-400 leading-relaxed">
              We are neither a sectarian religious authority nor an ordinary blog. We are a contemporary digital museum dedicated to education, preservation, cultural reverence, and philosophical discovery.
            </p>

            {/* Badges Box */}
            <div className="p-5 rounded-xl bg-obsidian-900/80 border border-saffron-500/20 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-saffron-400 block font-semibold">
                Our Verification Taxonomy
              </span>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                <span className="px-2.5 py-1 rounded bg-amber-950/40 text-amber-300 border border-amber-700/40">
                  HISTORICAL RECORD
                </span>
                <span className="px-2.5 py-1 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-700/40">
                  CANONICAL TEXT
                </span>
                <span className="px-2.5 py-1 rounded bg-rose-950/40 text-rose-300 border border-rose-700/40">
                  ARCHAEOLOGICAL EVIDENCE
                </span>
                <span className="px-2.5 py-1 rounded bg-stone-900/60 text-stone-300 border border-stone-700/40">
                  TRADITIONAL ACCOUNT
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-6 border-saffron-500/15 space-y-3 hover:border-saffron-500/35 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-obsidian-950 border border-saffron-500/25 flex items-center justify-center text-saffron-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-parchment-100">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-parchment-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
