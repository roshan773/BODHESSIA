import React from 'react';
import { ArrowRight, Play, Compass } from 'lucide-react';
import { useMeditationAudio } from '../../context/AudioContext';

interface HeroSectionProps {
  onNavigate: (route: string) => void;
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenVideo }) => {
  const { playSingingBowl } = useMeditationAudio();

  const handleExplore = () => {
    playSingingBowl(1.0);
    onNavigate('/buddha');
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#F7F7F5] pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#6D6D68] block">
                BODHESSIA · DIGITAL KNOWLEDGE PLATFORM
              </span>

              <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-light text-[#111111] leading-[0.95] tracking-tight">
                THE WORLD OF <br />
                <span className="italic font-normal">BUDDHIST</span> <br />
                KNOWLEDGE.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#6D6D68] max-w-xl font-light leading-relaxed">
              A modern digital exploration of Buddha, Buddhist thought, historical lineages, sacred iconography, traditions, and the world cultures shaped by the Dharma for over 2,500 years.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={handleExplore}
                className="px-8 py-4 bg-[#111111] hover:bg-[#B8874A] text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3 group"
              >
                <span>EXPLORE BUDDHA</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenVideo}
                className="px-6 py-4 border border-[#E4E4DF] hover:border-[#111111] text-[#111111] font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2.5 bg-white/80"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#B8874A]" />
                <span>SEE THE WORLD</span>
              </button>
            </div>

            {/* Metadata Minimal Footer */}
            <div className="pt-8 border-t border-[#E4E4DF] flex items-center gap-8 text-[11px] font-mono text-[#9E9E98] uppercase tracking-wider">
              <span>01. PHILOSOPHY</span>
              <span>02. LINEAGE</span>
              <span>03. ARCHAEOLOGY</span>
            </div>
          </div>

          {/* Right Column: Framed Cinematic Visual with Museum Coordinates */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-[#111111] overflow-hidden border border-[#E4E4DF] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=85"
                alt="Monumental Buddhist Stone Sculpture in Temple Light"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-transparent to-transparent" />

              {/* Number Label */}
              <div className="absolute top-6 right-6 text-right text-white">
                <span className="text-3xl font-serif font-light block leading-none">01</span>
                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#B8874A]">DISCOVER</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B8874A] block">
                  CANONICAL ARCHIVE
                </span>
                <h3 className="text-lg font-serif font-medium">
                  Siddhārtha Gautama beneath the Bodhi Tree
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  Uruvelā / Bodh Gaya · 5th Century BCE
                </p>
              </div>
            </div>

            {/* Floating Coordinate Tag */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#E4E4DF] px-4 py-2 hidden sm:block shadow-sm">
              <span className="text-[10px] font-mono text-[#6D6D68] uppercase tracking-widest">
                24° 41' N, 84° 59' E · MAGADHA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
