import React from 'react';
import { ArrowRight, Compass, Calendar, MapPin } from 'lucide-react';
import { HISTORY_ERAS } from '../../data/history';

interface HistoryPreviewProps {
  onNavigate: (route: string) => void;
}

export const HistoryPreview: React.FC<HistoryPreviewProps> = ({ onNavigate }) => {
  const previewEras = [
    HISTORY_ERAS[0], // Magadha Origins
    HISTORY_ERAS[2], // Ashokan Missions
    HISTORY_ERAS[4], // Gandhara Silk Road
    HISTORY_ERAS[8], // Nalanda Monastic University
  ];

  return (
    <section className="py-24 bg-obsidian-900 border-t border-saffron-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-saffron-400 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>CHRONOLOGICAL EXPANSION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-parchment-100">
              A JOURNEY THROUGH TIME
            </h2>
            <p className="mt-2 text-base text-parchment-400 max-w-xl">
              From ancient India to a global civilization spanning five continents.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/history')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-obsidian-950 border border-saffron-500/30 text-saffron-300 hover:text-parchment-100 hover:border-saffron-500/60 font-mono text-xs uppercase tracking-wider transition-all self-start md:self-auto"
          >
            <span>EXPLORE FULL TIMELINE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Epoch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewEras.map((era) => (
            <div
              key={era.id}
              onClick={() => onNavigate('/history')}
              className="glass-card group cursor-pointer rounded-xl p-6 border-saffron-500/15 flex flex-col justify-between space-y-4 hover:border-saffron-500/40"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-saffron-400 font-bold">{era.era}</span>
                  <span className="text-parchment-400">{era.period}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-parchment-100 group-hover:text-saffron-300 transition-colors">
                  {era.title}
                </h3>

                <p className="text-xs font-mono text-saffron-400/80">
                  {era.region}
                </p>

                <p className="text-xs text-parchment-300 line-clamp-3 leading-relaxed">
                  {era.description}
                </p>
              </div>

              <div className="pt-3 border-t border-saffron-500/10 flex items-center justify-between text-xs font-mono text-saffron-400 group-hover:text-saffron-300 transition-colors">
                <span className="tracking-widest uppercase text-[10px]">Read Era Records</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
