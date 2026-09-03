import React from 'react';
import { ArrowDown, Compass, Sparkles, Play } from 'lucide-react';
import { useMeditationAudio } from '../../context/AudioContext';

interface HeroSectionProps {
  onNavigate: (route: string) => void;
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenVideo }) => {
  const { playSingingBowl } = useMeditationAudio();

  const handleBeginJourney = () => {
    playSingingBowl(1.0);
    const target = document.getElementById('introduction-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian-950 pt-20 pb-16">
      {/* Background Layer with Monumental Buddhist Imagery and Ambient Light */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2000&q=85"
          alt="Monumental Buddha in serene mist"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-[10000ms] hover:scale-100"
        />

        {/* Multi-layered Translucent Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-obsidian-950/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-obsidian-950/50 to-obsidian-950" />

        {/* Subtle Ambient Golden Halo in Center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      </div>

      {/* Hero Content Foreground */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Curatorial Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/80 border border-saffron-500/30 backdrop-blur-md mb-8 animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-saffron-400" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-saffron-300">
            A Contemporary Digital Museum of 2,500+ Years
          </span>
        </div>

        {/* Grand Typographic Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-[0.18em] text-parchment-100 uppercase drop-shadow-2xl">
          BODHESSIA
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-mono uppercase tracking-[0.3em] gold-gradient-text font-medium">
          THE WORLD OF BUDDHIST KNOWLEDGE
        </p>

        {/* Editorial Supporting Copy */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-parchment-300 max-w-2xl mx-auto leading-relaxed font-sans font-light">
          Explore the life of the Buddha, profound philosophical doctrines, sacred lineages, iconography, symbols, and world civilizations shaped by the Dharma.
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button
            onClick={handleBeginJourney}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-saffron-500 via-saffron-400 to-saffron-500 hover:from-saffron-400 hover:to-saffron-300 text-obsidian-950 font-mono text-xs uppercase tracking-widest font-bold shadow-lg shadow-saffron-500/20 hover:shadow-saffron-500/35 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <span>BEGIN THE JOURNEY</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('/buddha')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-parchment-200 hover:text-saffron-300 hover:border-saffron-500/40 font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-saffron-400" />
            <span>EXPLORE THE BUDDHA</span>
          </button>

          <button
            onClick={onOpenVideo}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-obsidian-900/60 hover:bg-obsidian-800 border border-saffron-500/20 text-parchment-300 hover:text-saffron-300 font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 text-saffron-400 fill-saffron-400" />
            <span>WATCH FILM</span>
          </button>
        </div>

        {/* Subtle Animated Scroll Indicator */}
        <div className="mt-16 sm:mt-24 flex flex-col items-center gap-2 text-parchment-500 animate-bounce">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em]">
            SCROLL TO ENTER ARCHIVE
          </span>
          <ArrowDown className="w-4 h-4 text-saffron-400/80" />
        </div>
      </div>
    </section>
  );
};
