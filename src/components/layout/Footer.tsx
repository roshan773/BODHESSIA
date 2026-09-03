import React from 'react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-obsidian-950 border-t border-saffron-500/20 pt-16 pb-12 overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-saffron-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-saffron-500/15">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-[0.25em] text-parchment-100 block">
                BODHESSIA
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-saffron-400 block">
                THE WORLD OF BUDDHIST KNOWLEDGE
              </span>
            </div>

            <p className="text-sm text-parchment-400 max-w-sm leading-relaxed font-light">
              A contemporary digital museum and global cultural platform dedicated to 2,500+ years of Buddhist philosophy, sacred art, lineages, texts, and living traditions.
            </p>

            <div className="p-3.5 rounded-lg bg-obsidian-900/80 border border-saffron-500/15 text-xs text-parchment-400 space-y-1">
              <span className="font-mono uppercase text-[9px] text-saffron-400 tracking-wider font-semibold block">
                Editorial & Cultural Charter
              </span>
              <p className="text-[11px] text-parchment-400 leading-snug">
                BODHESSIA is an educational knowledge initiative. We clearly delineate historical epigraphy, canonical scripture, and traditional lore with rigorous academic integrity.
              </p>
            </div>
          </div>

          {/* MVP Core Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-saffron-400 font-semibold">
              Core Museum Routes
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <button onClick={() => onNavigate('/')} className="text-parchment-400 hover:text-saffron-300 transition-colors">
                  01. Home / Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/buddha')} className="text-parchment-400 hover:text-saffron-300 transition-colors">
                  02. The Buddha (Śākyamuni)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/28-buddhas')} className="text-parchment-400 hover:text-saffron-300 transition-colors">
                  03. The 28 Buddhas Lineage
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/bodhisattvas')} className="text-parchment-400 hover:text-saffron-300 transition-colors">
                  04. Bodhisattvas of Compassion
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/teachings')} className="text-parchment-400 hover:text-saffron-300 transition-colors">
                  05. The Dharma (Core Doctrines)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/symbols')} className="text-parchment-400 hover:text-saffron-300 transition-colors">
                  06. Symbols of the Dharma
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/history')} className="text-parchment-400 hover:text-saffron-300 transition-colors">
                  07. History of Buddhism
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="text-parchment-400 hover:text-saffron-300 transition-colors">
                  08. About BODHESSIA
                </button>
              </li>
            </ul>
          </div>

          {/* Future Archive Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-saffron-400 font-semibold">
              Future Encyclopedia Roadmap
            </h4>
            <ul className="space-y-2 text-xs font-mono text-parchment-500">
              <li className="flex items-center gap-1.5">
                <span>• Living Traditions (Nikāyas & Schools)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>• Sacred Geography & Pilgrimages</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>• Canonical Manuscript Archives</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>• Rock Art & Temple Architecture</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>• Epigraphical Inscriptions & Edicts</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>• Interactive Global Knowledge Graph</span>
              </li>
            </ul>
          </div>

          {/* Editorial Taxonomy */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-saffron-400 font-semibold">
              Taxonomy Badges
            </h4>
            <div className="flex flex-col gap-2 text-[10px] font-mono">
              <span className="px-2 py-1 rounded bg-amber-950/40 text-amber-300 border border-amber-700/40">
                HISTORICAL RECORD
              </span>
              <span className="px-2 py-1 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-700/40">
                CANONICAL TEXT
              </span>
              <span className="px-2 py-1 rounded bg-rose-950/40 text-rose-300 border border-rose-700/40">
                ARCHAEOLOGICAL EVIDENCE
              </span>
              <span className="px-2 py-1 rounded bg-stone-900/60 text-stone-300 border border-stone-700/40">
                TRADITIONAL ACCOUNT
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-parchment-500">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} BODHESSIA · The World of Buddhist Knowledge.</p>
            <p className="text-[10px] text-parchment-500/70 mt-0.5">
              An open digital museum and visual archive for scholars, practitioners, and seekers.
            </p>
          </div>

          <div className="flex items-center gap-3 text-saffron-400/90 tracking-[0.25em] font-serif text-sm">
            <span>EXPLORE</span>
            <span>·</span>
            <span>UNDERSTAND</span>
            <span>·</span>
            <span>REFLECT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
