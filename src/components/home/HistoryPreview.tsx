import React from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
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
    <section className="py-24 sm:py-32 bg-white border-t border-[#E4E4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E4E4DF] gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block mb-2">
              09 · CHRONOLOGICAL EXPANSION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#111111]">
              2,500 YEARS IN MOTION
            </h2>
            <p className="text-sm font-mono text-[#6D6D68] uppercase tracking-wider mt-1">
              FROM ANCIENT INDIA TO A GLOBAL TRADITION
            </p>
          </div>

          <button
            onClick={() => onNavigate('/history')}
            className="text-xs font-mono uppercase tracking-wider text-[#111111] hover:text-[#B8874A] transition-colors flex items-center gap-1 self-start md:self-auto"
          >
            <span>Explore 12 Historical Eras</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Epoch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewEras.map((era) => (
            <div
              key={era.id}
              onClick={() => onNavigate('/history')}
              className="group cursor-pointer bg-[#F7F7F5] border border-[#E4E4DF] hover:border-[#B8874A] transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B8874A] font-bold">{era.era}</span>
                  <span className="text-[#6D6D68]">{era.period}</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111111] group-hover:text-[#B8874A] transition-colors">
                    {era.title}
                  </h3>
                  <p className="text-xs font-mono text-[#6D6D68] mt-1">
                    {era.region}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#6D6D68] line-clamp-3 leading-relaxed font-light">
                  {era.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E4E4DF] flex items-center justify-between text-xs font-mono text-[#111111] group-hover:text-[#B8874A]">
                <span className="uppercase tracking-widest text-[10px]">Read Epoch Records</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
