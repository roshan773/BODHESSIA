import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { IntroSection } from '../components/home/IntroSection';
import { BuddhaTimelinePreview } from '../components/home/BuddhaTimelinePreview';
import { Buddhas28Preview } from '../components/home/Buddhas28Preview';
import { BodhisattvaSection } from '../components/home/BodhisattvaSection';
import { DharmaSection } from '../components/home/DharmaSection';
import { SymbolsSection } from '../components/home/SymbolsSection';
import { HistoryPreview } from '../components/home/HistoryPreview';
import { WorldMapSection } from '../components/home/WorldMapSection';
import { SacredPlacesSection } from '../components/home/SacredPlacesSection';
import { VideoSection } from '../components/home/VideoSection';
import { ArchiveTiles } from '../components/home/ArchiveTiles';
import { WhyBodhessiaSection } from '../components/home/WhyBodhessiaSection';
import { VideoModal } from '../components/visual/VideoModal';
import { BuddhaDetail, BodhisattvaDetail, SymbolDetail } from '../types';

interface HomePageProps {
  onNavigate: (route: string) => void;
  onSelectBuddha?: (b: BuddhaDetail) => void;
  onSelectBodhisattva?: (b: BodhisattvaDetail) => void;
  onSelectSymbol?: (s: SymbolDetail) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectBuddha,
  onSelectBodhisattva,
  onSelectSymbol
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative">
      {/* 01. Cinematic Hero */}
      <HeroSection
        onNavigate={onNavigate}
        onOpenVideo={() => setIsVideoModalOpen(true)}
      />

      {/* 02. 2500+ Years of Knowledge Intro */}
      <IntroSection />

      {/* 03. The Buddha */}
      <BuddhaTimelinePreview onNavigate={onNavigate} />

      {/* 04. The 28 Buddhas */}
      <Buddhas28Preview
        onNavigate={onNavigate}
        onSelectBuddha={onSelectBuddha}
      />

      {/* 05. Bodhisattvas */}
      <BodhisattvaSection
        onNavigate={onNavigate}
        onSelectBodhisattva={onSelectBodhisattva}
      />

      {/* 06. The Dharma */}
      <DharmaSection onNavigate={onNavigate} />

      {/* 07. Symbols of the Dharma */}
      <SymbolsSection
        onNavigate={onNavigate}
        onSelectSymbol={onSelectSymbol}
      />

      {/* 08. A Journey Through Time */}
      <HistoryPreview onNavigate={onNavigate} />

      {/* 09. Buddhism Across the World (Map Moment) */}
      <WorldMapSection />

      {/* 10. Sacred Places */}
      <SacredPlacesSection onNavigate={onNavigate} />

      {/* 11. Cinematic Video Section */}
      <VideoSection onOpenVideo={() => setIsVideoModalOpen(true)} />

      {/* 12. Enter the Archive */}
      <ArchiveTiles onNavigate={onNavigate} />

      {/* 13. Why Bodhessia? */}
      <WhyBodhessiaSection />

      {/* Fullscreen Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
};
