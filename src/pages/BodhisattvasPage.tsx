import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { BODHISATTVAS } from '../data/bodhisattvas';
import { BodhisattvaDetail } from '../types';
import { BodhisattvaCard } from '../components/cards/BodhisattvaCard';
import { MetadataBadge } from '../components/cards/MetadataBadge';
import { useMeditationAudio } from '../context/AudioContext';

interface BodhisattvasPageProps {
  onNavigate: (route: string) => void;
  initialSelectedBodhisattva?: BodhisattvaDetail | null;
}

export const BodhisattvasPage: React.FC<BodhisattvasPageProps> = ({
  onNavigate,
  initialSelectedBodhisattva = null
}) => {
  const [selectedBodhisattva, setSelectedBodhisattva] = useState<BodhisattvaDetail | null>(
    initialSelectedBodhisattva
  );
  const { playSingingBowl } = useMeditationAudio();

  const handleOpenDetail = (b: BodhisattvaDetail) => {
    setSelectedBodhisattva(b);
    playSingingBowl(1.2);
  };

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
                status: 'Canonical Text',
                tradition: 'Mahāyāna & Vajrayāna',
                source: 'Prajñāpāramitā / Lotus / Avataṃsaka Sūtras'
              }}
              size="md"
            />

            <h1 className="text-4xl sm:text-6xl font-serif font-light text-[#111111]">
              BODHISATTVAS
            </h1>
            <p className="text-base font-mono text-[#B8874A] italic">
              Embodied Archetypes of Infinite Compassion, Wisdom, and Altruistic Vow
            </p>
            <p className="text-sm sm:text-base text-[#6D6D68] leading-relaxed font-light">
              In Buddhist philosophy, a Bodhisattva is an awakened being motivated by supreme bodhicitta (the compassionate aspiration to attain enlightenment for the liberation of all sentient beings). Rather than entering solitary extinction, they manifest in countless forms to alleviate suffering.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Bodhisattvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BODHISATTVAS.map((b) => (
            <BodhisattvaCard
              key={b.id}
              bodhisattva={b}
              onClick={() => handleOpenDetail(b)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedBodhisattva && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white border border-[#E4E4DF] shadow-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-[#E4E4DF] bg-[#F7F7F5]">
              <div>
                <span className="font-mono text-xs text-[#B8874A] font-bold uppercase tracking-wider block">
                  {selectedBodhisattva.quality}
                </span>
                <span className="text-xl font-serif font-bold text-[#111111]">
                  {selectedBodhisattva.name}
                </span>
              </div>
              <button
                onClick={() => setSelectedBodhisattva(null)}
                className="p-1.5 hover:bg-neutral-200 transition-colors"
              >
                <X className="w-5 h-5 text-[#111111]" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative aspect-[3/4] bg-[#111111] shrink-0">
                  <img
                    src={selectedBodhisattva.imageUrl}
                    alt={selectedBodhisattva.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="space-y-3 flex-1">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-[#111111]">
                      {selectedBodhisattva.name}
                    </h2>
                    <p className="text-xs font-mono text-[#B8874A] italic">
                      {selectedBodhisattva.sanskritName}
                    </p>
                  </div>

                  <p className="text-sm text-[#6D6D68] leading-relaxed font-light">
                    {selectedBodhisattva.description}
                  </p>

                  {selectedBodhisattva.mantra && (
                    <div className="p-3 bg-[#F7F7F5] border border-[#E4E4DF]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8874A] block mb-0.5">
                        Sacred Mantra
                      </span>
                      <span className="text-sm font-mono text-[#111111] font-semibold">
                        {selectedBodhisattva.mantra}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Vows */}
              <div className="p-4 bg-[#F7F7F5] border-l-2 border-[#B8874A] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8874A] block font-semibold">
                  Boundless Altruistic Vow
                </span>
                <p className="text-sm font-serif italic text-[#111111]">
                  "{selectedBodhisattva.vows}"
                </p>
              </div>

              {/* Iconography & Sacred Abode */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] space-y-2">
                  <span className="text-[#111111] uppercase tracking-wider block font-semibold">
                    Key Iconography
                  </span>
                  <ul className="space-y-1 text-[#6D6D68]">
                    {selectedBodhisattva.iconography.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#F7F7F5] border border-[#E4E4DF] space-y-2">
                  <span className="text-[#111111] uppercase tracking-wider block font-semibold">
                    Canonical Sources
                  </span>
                  <p className="text-[#6D6D68] font-sans">
                    <strong>Scripture:</strong> {selectedBodhisattva.canonicalSource}
                  </p>
                  {selectedBodhisattva.abode && (
                    <p className="text-[#6D6D68] font-sans">
                      <strong>Sacred Abode:</strong> {selectedBodhisattva.abode}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-2 border-t border-[#E4E4DF] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#6D6D68]">
                <MetadataBadge metadata={selectedBodhisattva.metadata} size="sm" />
                <span>Source: {selectedBodhisattva.metadata.source}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
