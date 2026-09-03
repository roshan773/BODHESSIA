import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { useMeditationAudio } from '../../context/AudioContext';

interface HeroSectionProps {
  onNavigate: (route: string) => void;
  onOpenVideo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { playSingingBowl } = useMeditationAudio();

  const handleExplore = () => {
    playSingingBowl(1.0);
    onNavigate('/buddha');
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 bg-[#F5F2EA] border-b border-[#D7D2C8] overflow-hidden">
      {/* Subtle Concentric Dharma Geometry Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border-[12px] border-[#181816]"></div>
        <div className="w-[600px] h-[600px] rounded-full border-2 border-[#181816] absolute"></div>
        <div className="w-[400px] h-[400px] rounded-full border border-[#181816] absolute"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clear Typographic Knowledge Masthead */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D7D2C8]/50 border border-[#D7D2C8] text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#8B5F32]">
              <Compass className="w-3.5 h-3.5 text-[#B17A3F]" />
              <span>A DIGITAL BUDDHIST KNOWLEDGE WORLD</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black tracking-tight text-[#181816] leading-[1.02]">
                BODHESSIA
              </h1>
              <p className="font-mono text-base sm:text-lg font-bold text-[#8B5F32] uppercase tracking-[0.2em]">
                THE WORLD OF BUDDHIST KNOWLEDGE
              </p>
            </div>

            <p className="text-lg sm:text-xl text-[#555550] leading-relaxed max-w-xl font-normal">
              Explore the life, teachings, traditions, history, and 2,500+ years of cultural and artistic civilization founded by Siddhārtha Gautama — the Buddha.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleExplore}
                className="px-8 py-4 bg-[#181816] hover:bg-[#8B5F32] text-white font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-xl cursor-pointer"
              >
                <span>EXPLORE BUDDHA</span>
                <ArrowRight className="w-4 h-4 text-[#B17A3F]" />
              </button>

              <button
                onClick={() => {
                  playSingingBowl(1.05);
                  onNavigate('/teachings');
                }}
                className="px-8 py-4 border-2 border-[#181816] hover:bg-[#181816] hover:text-white text-[#181816] font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-2.5 bg-transparent cursor-pointer"
              >
                <span>THE DHARMA</span>
                <span className="text-[#8B5F32]">→</span>
              </button>
            </div>

            {/* Structured Coordinates Bar */}
            <div className="pt-8 border-t border-[#D7D2C8] flex flex-wrap items-center gap-8 text-xs font-mono text-[#555550] font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><span className="text-[#B17A3F]">01.</span> BUDDHA</span>
              <span className="flex items-center gap-1.5"><span className="text-[#B17A3F]">02.</span> DHARMA</span>
              <span className="flex items-center gap-1.5"><span className="text-[#B17A3F]">03.</span> SANGHA</span>
              <span className="flex items-center gap-1.5"><span className="text-[#B17A3F]">04.</span> 28 BUDDHAS</span>
            </div>
          </div>

          {/* Right Column: Monumental Stone Sculpture of Buddha */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-[#181816] overflow-hidden border-2 border-[#D7D2C8] shadow-2xl group">
              <img
                src="/images/buddhas/gautama-hero.jpg"
                alt="Monumental Stone Sculpture of Gautama Buddha in Serene Dhyāna Mudrā"
                className="w-full h-full object-cover object-center filter brightness-100 contrast-105 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181816]/90 via-[#181816]/10 to-transparent" />

              {/* Number Tag */}
              <div className="absolute top-6 right-6 text-right text-white">
                <span className="text-3xl font-serif font-black block leading-none">01</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B17A3F] font-bold">THE AWAKENED</span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-6 inset-x-6 space-y-1 text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B17A3F]" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#D7D2C8] font-bold">
                    ŚĀKYAMUNI GAUTAMA BUDDHA
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                  Meditation in Dhyāna Mudrā
                </h3>
                <p className="text-xs font-mono text-[#D7D2C8]">
                  Archaeological Sculpture · 2,500+ Years of Awakening
                </p>
              </div>
            </div>

            {/* Backdrop Offset Stone Frame */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#B17A3F]/30 -z-10 hidden sm:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
