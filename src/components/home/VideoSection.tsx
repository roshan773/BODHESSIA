import React from 'react';
import { Play, Sparkles, Film } from 'lucide-react';

interface VideoSectionProps {
  onOpenVideo: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onOpenVideo }) => {
  return (
    <section className="py-24 bg-obsidian-950 border-t border-saffron-500/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-saffron-400 mb-2">
            <Film className="w-3.5 h-3.5" />
            <span>CINEMATIC DOCUMENTARY EXPLORATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-parchment-100">
            EXPERIENCE THE WORLD OF BUDDHISM
          </h2>
          <p className="mt-3 text-base text-parchment-400">
            A visual and sonic immersion through sacred monasteries, ancient cave stupas, and mountain sanctuaries.
          </p>
        </div>

        {/* 16:9 Video Trigger Card */}
        <div
          onClick={onOpenVideo}
          className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden glass-card border border-saffron-500/30 group cursor-pointer shadow-2xl shadow-black/80"
        >
          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1800&q=85"
            alt="Atmospheric Buddhist Sculpture in temple light"
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-95"
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/30 to-black/40" />

          {/* Centered Golden Play Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-saffron-500/90 text-obsidian-950 flex items-center justify-center group-hover:scale-110 group-hover:bg-saffron-400 transition-all duration-300 shadow-2xl shadow-saffron-500/40">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-parchment-100 bg-obsidian-950/80 px-4 py-1.5 rounded-full border border-saffron-500/30 backdrop-blur-md">
              Watch 4K Archival Feature (22 Min)
            </span>
          </div>

          {/* Bottom Video Metadata */}
          <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-xs font-mono text-parchment-300 pointer-events-none hidden sm:flex">
            <span>BODH GAYA · SARNATH · DUNHUANG · LHASA</span>
            <span className="text-saffron-400 font-semibold">4 CHAPTERS INCLUDED</span>
          </div>
        </div>
      </div>
    </section>
  );
};
