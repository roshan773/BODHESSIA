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
    <div className="pt-24 pb-20 bg-[#F7F7F5] min-h-screen">
      {/* Header Banner */}
      <div className="py-16 bg-white border-b border-[#E4E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6D6D68] hover:text-[#111111] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Portal
          </button>

          <div className="max-w-3xl space-y-4">
            <MetadataBadge
              metadata={{
                status: 'Historical Record',
                tradition: 'Pan-Asian & Global Transmission',
                source: 'Epigraphy, Rock Edicts & Academic Historiography'
              }}
              size="md"
            />

            <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#111111]">
              A JOURNEY THROUGH TIME
            </h1>
            <p className="text-base font-mono text-[#B8874A] italic">
              2,500+ Years of Historical Transmission: From Ancient Magadha to the Modern World
            </p>
            <p className="text-sm sm:text-base text-[#6D6D68] leading-relaxed font-light">
              Follow the diffusion of Buddhist philosophy, monastic universities, rock-cut architecture, and living traditions across ancient trade corridors: the Silk Road, maritime networks, trans-Himalayan passes, and modern global dialogue.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Interactive World Map Transmission Route */}
        <div>
          <div className="max-w-2xl mb-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block">
              GEOGRAPHIC CARTOGRAPHY
            </span>
            <h2 className="text-3xl font-serif font-light text-[#111111]">
              A Teaching That Traveled
            </h2>
          </div>
          <WorldMapInteractive />
        </div>

        {/* 12 Historical Eras Chronological Timeline */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block">
              CHRONOLOGICAL TIMELINE
            </span>
            <h2 className="text-3xl font-serif font-light text-[#111111]">
              The Twelve Epochs of Buddhist Civilization
            </h2>
          </div>

          <div className="space-y-8">
            {HISTORY_ERAS.map((era) => (
              <div
                key={era.id}
                className="bg-white border border-[#E4E4DF] hover:border-[#B8874A] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-all"
              >
                {/* Left metadata & image */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="relative aspect-[16/10] bg-[#111111] overflow-hidden">
                    <img
                      src={era.imageUrl}
                      alt={era.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-0.5 text-xs font-mono font-bold text-[#111111] border border-[#E4E4DF]">
                      {era.era}
                    </div>
                  </div>

                  <div className="space-y-1 text-xs font-mono text-[#6D6D68]">
                    <div className="flex items-center gap-1.5 text-[#B8874A]">
                      <Calendar className="w-3.5 h-3.5" /> {era.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#111111]">
                      <MapPin className="w-3.5 h-3.5" /> {era.region}
                    </div>
                  </div>

                  <MetadataBadge metadata={era.metadata} size="sm" />
                </div>

                {/* Right narrative content */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111]">
                      {era.title}
                    </h3>
                    <p className="text-xs font-mono text-[#B8874A] mt-0.5">
                      {era.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#6D6D68] leading-relaxed font-light">
                    {era.description}
                  </p>

                  {/* Key Events */}
                  <div className="space-y-2 pt-2 border-t border-[#E4E4DF]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#111111] block font-semibold">
                      Pivotal Developments
                    </span>
                    <ul className="space-y-1 text-xs text-[#6D6D68] font-sans">
                      {era.keyEvents.map((ev, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#B8874A] font-mono mt-0.5">•</span>
                          <span>{ev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Figures and Sites */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-[#6D6D68]">
                    <div className="p-3 bg-[#F7F7F5] border border-[#E4E4DF]">
                      <span className="text-[#B8874A] text-[10px] uppercase block mb-1">Key Figures</span>
                      <span className="text-[#111111]">{era.keyFigures.join(', ')}</span>
                    </div>
                    <div className="p-3 bg-[#F7F7F5] border border-[#E4E4DF]">
                      <span className="text-[#B8874A] text-[10px] uppercase block mb-1">Monumental Centers</span>
                      <span className="text-[#111111]">{era.monumentalSites.join(', ')}</span>
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
