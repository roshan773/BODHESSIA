import React from 'react';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { HISTORY_ERAS } from '../data/history';
import { WorldMapInteractive } from '../components/visual/WorldMapInteractive';
import { MetadataBadge } from '../components/cards/MetadataBadge';

interface HistoryPageProps {
  onNavigate: (route: string) => void;
}

export const HistoryPage: React.FC<HistoryPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 bg-obsidian-950 min-h-screen">
      {/* Header Banner */}
      <div className="py-16 bg-gradient-to-b from-obsidian-900 to-obsidian-950 border-b border-saffron-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-saffron-400 hover:text-saffron-200 mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Museum Portal
          </button>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <MetadataBadge
                metadata={{
                  status: 'Historical Record',
                  tradition: 'Pan-Asian & Global Transmission',
                  source: 'Epigraphy, Rock Edicts & Academic Historiography'
                }}
                size="md"
              />
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-parchment-100">
              A JOURNEY THROUGH TIME
            </h1>
            <p className="text-lg font-mono text-saffron-400 italic">
              2,500+ Years of Historical Transmission: From Ancient Magadha to the Global Era
            </p>
            <p className="text-sm sm:text-base text-parchment-300 leading-relaxed font-light">
              Follow the diffusion of Buddhist philosophy, monastic universities, rock-cut architecture, and living traditions across ancient trade corridors: the Silk Road, the maritime spice networks, the trans-Himalayan passes, and modern global dialogue.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Interactive World Map Transmission Route */}
        <div>
          <div className="max-w-2xl mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-saffron-400">
              Interactive Geographic Cartography
            </span>
            <h2 className="text-3xl font-serif font-bold text-parchment-100">
              A Teaching That Traveled
            </h2>
          </div>
          <WorldMapInteractive />
        </div>

        {/* 12 Historical Eras Chronological Timeline */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-saffron-400">
              Chronological Historical Corpus
            </span>
            <h2 className="text-3xl font-serif font-bold text-parchment-100">
              The Twelve Epochs of Buddhist Civilization
            </h2>
          </div>

          <div className="space-y-8">
            {HISTORY_ERAS.map((era) => (
              <div
                key={era.id}
                className="glass-card rounded-2xl p-6 sm:p-8 border-saffron-500/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-saffron-500/35 transition-all"
              >
                {/* Left metadata & image */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-obsidian-950">
                    <img
                      src={era.imageUrl}
                      alt={era.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 bg-obsidian-950/80 px-2.5 py-0.5 rounded text-xs font-mono text-saffron-400 font-bold border border-saffron-500/20">
                      {era.era}
                    </div>
                  </div>

                  <div className="space-y-1 text-xs font-mono text-parchment-400">
                    <div className="flex items-center gap-1.5 text-saffron-400">
                      <Calendar className="w-3.5 h-3.5" /> {era.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-parchment-300">
                      <MapPin className="w-3.5 h-3.5" /> {era.region}
                    </div>
                  </div>

                  <MetadataBadge metadata={era.metadata} size="sm" />
                </div>

                {/* Right narrative content */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-parchment-100">
                      {era.title}
                    </h3>
                    <p className="text-xs font-mono text-saffron-400/90 mt-0.5">
                      {era.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-parchment-300 leading-relaxed font-light">
                    {era.description}
                  </p>

                  {/* Key Events */}
                  <div className="space-y-2 pt-2 border-t border-saffron-500/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-saffron-400 block font-semibold">
                      Pivotal Historical Developments
                    </span>
                    <ul className="space-y-1 text-xs text-parchment-300 font-sans">
                      {era.keyEvents.map((ev, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-saffron-400 font-mono mt-0.5">•</span>
                          <span>{ev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Figures and Sites */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-parchment-400">
                    <div className="p-3 rounded bg-obsidian-950/80 border border-saffron-500/10">
                      <span className="text-saffron-400 text-[10px] uppercase block mb-1">Key Figures</span>
                      <span className="text-parchment-200">{era.keyFigures.join(', ')}</span>
                    </div>
                    <div className="p-3 rounded bg-obsidian-950/80 border border-saffron-500/10">
                      <span className="text-saffron-400 text-[10px] uppercase block mb-1">Monumental Centers</span>
                      <span className="text-parchment-200">{era.monumentalSites.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
