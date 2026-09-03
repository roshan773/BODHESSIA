import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-[#E4E4DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Display Statement */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block">
              02 · PROLOGUE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#111111] leading-[1.08]">
              MORE THAN 2,500 YEARS OF KNOWLEDGE.
            </h2>
          </div>

          {/* Right Column: Editorial Reflection */}
          <div className="lg:col-span-6 space-y-6 lg:pt-8 text-base sm:text-lg text-[#6D6D68] font-light leading-relaxed">
            <p>
              Buddhism has travelled across centuries, continents, and civilizations. From the ancient republics of the Gangetic plain to the Silk Road desert oases, the monasteries of East Asia, and modern global thought.
            </p>
            <p>
              Its ideas have shaped epistemology, psychology, ethics, monumental architecture, literature, and the daily contemplative lives of millions.
            </p>

            <div className="pt-6 border-t border-[#E4E4DF] grid grid-cols-3 gap-4 text-xs font-mono text-[#111111]">
              <div>
                <span className="text-2xl sm:text-3xl font-serif block font-normal">28</span>
                <span className="text-[10px] text-[#6D6D68] uppercase tracking-wider">Pāli Buddhas</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif block font-normal">2,500+</span>
                <span className="text-[10px] text-[#6D6D68] uppercase tracking-wider">Years Active</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif block font-normal">30+</span>
                <span className="text-[10px] text-[#6D6D68] uppercase tracking-wider">Global Nations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
