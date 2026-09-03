import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, BookOpen, Layers, Compass, Landmark, Users } from 'lucide-react';

interface ArchiveTilesProps {
  onNavigate: (route: string) => void;
}

export const ArchiveTiles: React.FC<ArchiveTilesProps> = ({ onNavigate }) => {
  const tiles = [
    {
      title: 'BUDDHAS',
      subtitle: 'The 28 Historical & Canonical Lineages',
      path: '/28-buddhas',
      icon: Sparkles,
      desc: 'From Taṇhaṅkara in ancient aeons to Siddhārtha Gautama in Magadha.',
      badge: '28 Records'
    },
    {
      title: 'BODHISATTVAS',
      subtitle: 'Universal Archetypes of Awakening',
      path: '/bodhisattvas',
      icon: ShieldCheck,
      desc: 'Avalokiteśvara, Mañjuśrī, Maitreya, and figures of infinite vow.',
      badge: '8 Archetypes'
    },
    {
      title: 'TEACHINGS',
      subtitle: 'The Core Doctrines of the Dharma',
      path: '/teachings',
      icon: BookOpen,
      desc: 'Four Noble Truths, Eightfold Path, 12 Nidānas, Karma, and Nirvana.',
      badge: '7 Doctrines'
    },
    {
      title: 'SYMBOLS',
      subtitle: 'Sacred Visual Iconography',
      path: '/symbols',
      icon: Layers,
      desc: 'Dharmachakra, Lotus, Bodhi Tree, Stūpa, Vajra, and Endless Knot.',
      badge: '10 Emblems'
    },
    {
      title: 'HISTORY',
      subtitle: '2,500+ Years Across Five Continents',
      path: '/history',
      icon: Compass,
      desc: 'Silk Road desert monasteries, Ashokan edicts, and global renaissance.',
      badge: '12 Eras'
    },
    {
      title: 'TRADITIONS & ABOUT',
      subtitle: 'Methodology & Living Schools',
      path: '/about',
      icon: Users,
      desc: 'Theravāda, Mahāyāna, Vajrayāna, academic advisory, and digital vision.',
      badge: 'Manifesto'
    },
  ];

  return (
    <section className="py-24 bg-obsidian-900 border-t border-saffron-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-saffron-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOWLEDGE ARCHIVE DISCOVERY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-parchment-100">
            ENTER THE ARCHIVE
          </h2>
          <p className="mt-3 text-base text-parchment-400">
            A growing collection of people, teachings, texts, places, symbols, and stories from the Buddhist world.
          </p>
        </div>

        {/* 6 Grid Navigation Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((tile, idx) => {
            const Icon = tile.icon;
            return (
              <div
                key={idx}
                onClick={() => onNavigate(tile.path)}
                className="group cursor-pointer rounded-2xl p-7 glass-card border-saffron-500/15 flex flex-col justify-between space-y-6 hover:border-saffron-500/45 hover:shadow-2xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-obsidian-950 border border-saffron-500/20 flex items-center justify-center text-saffron-400 group-hover:text-saffron-300 group-hover:scale-110 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-saffron-400 bg-saffron-500/10 px-2.5 py-1 rounded border border-saffron-500/20">
                      {tile.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-parchment-100 group-hover:text-saffron-300 transition-colors">
                      {tile.title}
                    </h3>
                    <p className="text-xs font-mono text-saffron-400/90 mt-0.5">
                      {tile.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-parchment-300 leading-relaxed">
                    {tile.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-saffron-500/10 flex items-center justify-between text-xs font-mono text-saffron-400 group-hover:text-saffron-200">
                  <span className="tracking-widest uppercase text-[10px]">Open Archive Section</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
