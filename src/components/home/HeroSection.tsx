import React from 'react';
import { ArrowRight, Play, Compass, Sparkles } from 'lucide-react';
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2E8F0] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#B8874A] animate-pulse"></span>
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#334155] font-bold">
                  BODHESSIA · GLOBAL KNOWLEDGE PLATFORM
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-black text-[#0F172A] leading-[1.0] tracking-tight">
                THE WORLD OF <br />
                <span className="italic font-bold text-[#B8874A]">BUDDHIST</span> <br />
                KNOWLEDGE.
              </h1>
            </div>

            <p className="text-base sm:text-xl text-[#334155] max-w-xl font-normal leading-relaxed">
              An authoritative digital exploration of Buddha, Buddhist thought, historical lineages, sacred iconography, traditions, and the world cultures shaped by the Dharma for over 2,500 years.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={handleExplore}
                className="px-8 py-4 bg-[#0F172A] hover:bg-[#B8874A] text-white font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-xl group"
              >
                <span>EXPLORE BUDDHA</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenVideo}
                className="px-6 py-4 border-2 border-[#0F172A] hover:bg-[#0F172A] hover:text-white text-[#0F172A] font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-2.5 bg-white shadow-xs"
              >
                <Play className="w-4 h-4 fill-current text-[#B8874A]" />
                <span>SEE THE WORLD</span>
              </button>
            </div>

            {/* Metadata Minimal Footer */}
            <div className="pt-8 border-t border-[#E2E8F0] flex items-center gap-8 text-xs font-mono text-[#475569] font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><span className="text-[#B8874A]">01.</span> PHILOSOPHY</span>
              <span className="flex items-center gap-1.5"><span className="text-[#B8874A]">02.</span> 28 BUDDHAS</span>
              <span className="flex items-center gap-1.5"><span className="text-[#B8874A]">03.</span> ARCHAEOLOGY</span>
            </div>
          </div>

          {/* Right Column: Framed Cinematic Visual with Museum Coordinates */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-[#0A0A0A] overflow-hidden border-2 border-[#E2E8F0] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=90"
                alt="Monumental Buddhist Stone Sculpture in Temple Light"
                className="w-full h-full object-cover object-center filter brightness-100 contrast-105 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent" />

              {/* Number Label */}
              <div className="absolute top-6 right-6 text-right text-white">
                <span className="text-3xl font-serif font-black block leading-none">01</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B8874A] font-bold">DISCOVER</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B8874A] font-bold block">
                  CANONICAL ARCHIVE
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Siddhārtha Gautama beneath the Bodhi Tree
                </h3>
                <p className="text-xs font-mono text-neutral-300">
                  Uruvelā / Bodh Gaya · 5th Century BCE
                </p>
              </div>
            </div>

            {/* Floating Coordinate Tag */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#E2E8F0] px-4 py-2.5 hidden sm:block shadow-md">
              <span className="text-[11px] font-mono text-[#0F172A] font-bold uppercase tracking-widest">
                24° 41' N, 84° 59' E · MAGADHA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
