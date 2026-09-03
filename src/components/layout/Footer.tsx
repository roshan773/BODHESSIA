import React from 'react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-12 border-t border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Typographic Statement */}
        <div className="pb-16 border-b border-[#262626] space-y-4">
          <span className="font-display text-4xl sm:text-7xl md:text-8xl font-black tracking-[0.16em] text-white block">
            BODHESSIA
          </span>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-[#B8874A] font-bold block">
            THE WORLD OF BUDDHIST KNOWLEDGE
          </span>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-[#262626]">
          {/* Column 1: Core Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B8874A] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono font-semibold text-neutral-300">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors cursor-pointer">
                  Explore / Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/buddha')} className="hover:text-white transition-colors cursor-pointer">
                  The Buddha (Śākyamuni)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/28-buddhas')} className="hover:text-white transition-colors cursor-pointer">
                  The 28 Buddhas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/bodhisattvas')} className="hover:text-white transition-colors cursor-pointer">
                  Bodhisattvas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/teachings')} className="hover:text-white transition-colors cursor-pointer">
                  The Dharma
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/symbols')} className="hover:text-white transition-colors cursor-pointer">
                  Symbols
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/history')} className="hover:text-white transition-colors cursor-pointer">
                  History
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Information & Methodology */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B8874A] font-bold">
              Information
            </h4>
            <ul className="space-y-2.5 text-xs font-mono font-semibold text-neutral-300">
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors cursor-pointer">
                  About BODHESSIA
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors cursor-pointer">
                  Editorial Standards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors cursor-pointer">
                  Canonical Sources
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors cursor-pointer">
                  Research Methodology
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Verification Taxonomy */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B8874A] font-bold">
              Taxonomy Classification
            </h4>
            <div className="flex flex-col gap-2 text-[11px] font-mono font-bold">
              <span className="px-3 py-1 bg-[#181816] text-[#E5B575] border border-[#3A2D1B]">
                HISTORICAL RECORD
              </span>
              <span className="px-3 py-1 bg-[#181816] text-[#86D2A8] border border-[#1E3E2E]">
                CANONICAL TEXT
              </span>
              <span className="px-3 py-1 bg-[#181816] text-[#F29F92] border border-[#44221C]">
                ARCHAEOLOGICAL EVIDENCE
              </span>
              <span className="px-3 py-1 bg-[#181816] text-[#CBD5E1] border border-[#334155]">
                TRADITIONAL ACCOUNT
              </span>
            </div>
          </div>

          {/* Column 4: Platform Vision */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B8874A] font-bold">
              Platform Ethos
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-normal">
              BODHESSIA is an educational and cultural knowledge platform. We present the rich philosophical, artistic, and historical heritage of Buddhism with contemporary precision and clarity.
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
          <div>
            © {new Date().getFullYear()} BODHESSIA · The World of Buddhist Knowledge. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 text-[#B8874A] tracking-[0.25em] font-serif text-base font-bold">
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
