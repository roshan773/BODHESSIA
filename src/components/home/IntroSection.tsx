import React from 'react';
import { BookOpen, Sparkles, Compass, ShieldCheck, Layers } from 'lucide-react';

export const IntroSection: React.FC = () => {
  const metrics = [
    { label: 'BUDDHAS RECORDED', value: '28', sub: 'Pāli Buddhavamsa Lineage', icon: Sparkles },
    { label: 'CENTURIES OF DHARMA', value: '25+', sub: 'Living Cultural Transmission', icon: Compass },
    { label: 'SACRED MONUMENTS', value: '1000s', sub: 'Across 30+ Global Nations', icon: Layers },
    { label: 'CANONICAL TRADITIONS', value: '3', sub: 'Theravāda · Mahāyāna · Vajrayāna', icon: ShieldCheck },
  ];

  return (
    <section id="introduction-section" className="py-24 md:py-32 bg-obsidian-900 relative overflow-hidden border-t border-saffron-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-saffron-400">
              <span className="w-6 h-px bg-saffron-400" />
              <span>EDITORIAL ARCHIVE PROLOGUE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-parchment-100 leading-[1.12]">
              MORE THAN TWO MILLENNIA OF KNOWLEDGE
            </h2>

            <p className="text-base sm:text-lg text-parchment-300 leading-relaxed font-light">
              From the life of Siddhārtha Gautama beneath the Bodhi tree in Magadha to the immense diversity of philosophical traditions that emerged across Asia and the modern globe, Buddhism has shaped human civilization for twenty-five centuries.
            </p>

            <blockquote className="border-l-2 border-saffron-500 pl-4 py-1 text-sm sm:text-base font-serif italic text-parchment-200">
              "It is an inheritance not merely of religious devotion, but of deep psychological inquiry, sublime art, monumental architecture, ethical philosophy, and the universal aspiration for awakening."
            </blockquote>
          </div>

          {/* Right Column: Historical Buddha Image with Museum Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-saffron-500/25 shadow-2xl">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-obsidian-950">
                <img
                  src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80"
                  alt="Historical Buddha Sculpture Detail"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-parchment-300">
                  <span className="text-saffron-400 uppercase text-[10px] tracking-wider block">
                    ARCHIVAL CATALOGUE
                  </span>
                  <span>Śākyamuni Buddha in Meditation (Dhyāna Mudrā)</span>
                </div>
              </div>
            </div>

            {/* Floating Decorative Label */}
            <div className="absolute -bottom-6 -left-6 bg-obsidian-950/90 border border-saffron-500/30 rounded-lg p-3 hidden sm:block backdrop-blur-md shadow-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-saffron-400 block">
                Preservation
              </span>
              <span className="text-xs font-serif text-parchment-200 font-semibold">
                Aniconic to Anthropomorphic Art
              </span>
            </div>
          </div>
        </div>

        {/* Animated Metrics Strip */}
        <div className="mt-20 pt-12 border-t border-saffron-500/15 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="p-4 rounded-xl bg-obsidian-950/60 border border-saffron-500/10 space-y-1">
                <div className="flex items-center gap-2 text-saffron-400 mb-1">
                  <Icon className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-parchment-400">
                    {m.label}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-display font-bold text-parchment-100 gold-gradient-text">
                  {m.value}
                </div>
                <div className="text-xs font-mono text-parchment-400 truncate">
                  {m.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
