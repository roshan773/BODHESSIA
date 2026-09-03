import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Display Statement */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8874A] font-bold block">
              02 · PROLOGUE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#0F172A] leading-[1.08]">
              MORE THAN 2,500 YEARS OF KNOWLEDGE.
            </h2>
          </div>

          {/* Right Column: Editorial Reflection */}
          <div className="lg:col-span-6 space-y-6 lg:pt-4 text-base sm:text-lg text-[#334155] font-normal leading-relaxed">
            <p>
              Buddhism has travelled across centuries, continents, and civilizations. From the ancient republics of the Gangetic plain to the Silk Road desert oases, the monasteries of East Asia, and modern global thought.
            </p>
            <p>
              Its ideas have shaped epistemology, psychology, ethics, monumental architecture, literature, and the daily contemplative lives of millions.
            </p>

            <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-3 gap-4 font-mono text-[#0F172A]">
              <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-3xl sm:text-4xl font-serif block font-bold text-[#B8874A]">28</span>
                <span className="text-xs text-[#475569] uppercase font-bold tracking-wider">Pāli Buddhas</span>
              </div>
              <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-3xl sm:text-4xl font-serif block font-bold text-[#B8874A]">2,500+</span>
                <span className="text-xs text-[#475569] uppercase font-bold tracking-wider">Years Active</span>
              </div>
              <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-3xl sm:text-4xl font-serif block font-bold text-[#B8874A]">30+</span>
                <span className="text-xs text-[#475569] uppercase font-bold tracking-wider">Global Nations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
