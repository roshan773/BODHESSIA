import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { IntroSection } from '../components/home/IntroSection';
import { KnowledgeIndex } from '../components/home/KnowledgeIndex';
import { BuddhaTimelinePreview } from '../components/home/BuddhaTimelinePreview';
import { Buddhas28Preview } from '../components/home/Buddhas28Preview';
import { BodhisattvaSection } from '../components/home/BodhisattvaSection';
import { DharmaSection } from '../components/home/DharmaSection';
import { SymbolsSection } from '../components/home/SymbolsSection';
import { HistoryPreview } from '../components/home/HistoryPreview';
import { WorldMapSection } from '../components/home/WorldMapSection';
import { SacredPlacesSection } from '../components/home/SacredPlacesSection';
import { VisualCultureSection } from '../components/home/VisualCultureSection';
import { VideoSection } from '../components/home/VideoSection';
import { KnowledgeField } from '../components/home/KnowledgeField';
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
    <div className="relative bg-[#F7F7F5]">
      {/* 01. Modern Asymmetric Hero */}
      <HeroSection
        onNavigate={onNavigate}
        onOpenVideo={() => setIsVideoModalOpen(true)}
      />

      {/* 02. 2500+ Years Statement */}
      <IntroSection />

      {/* 03. Knowledge Index */}
      <KnowledgeIndex onNavigate={onNavigate} />

      {/* 04. The Buddha */}
      <BuddhaTimelinePreview onNavigate={onNavigate} />

      {/* 05. The 28 Buddhas (Signature Dark Section #0A0A0A) */}
      <Buddhas28Preview
        onNavigate={onNavigate}
        onSelectBuddha={onSelectBuddha}
      />

      {/* 06. Bodhisattvas */}
      <BodhisattvaSection
        onNavigate={onNavigate}
        onSelectBodhisattva={onSelectBodhisattva}
      />

      {/* 07. The Dharma */}
      <DharmaSection onNavigate={onNavigate} />

      {/* 08. Symbols of the Dharma */}
      <SymbolsSection
        onNavigate={onNavigate}
        onSelectSymbol={onSelectSymbol}
      />

      {/* 09. 2,500 Years in Motion */}
      <HistoryPreview onNavigate={onNavigate} />

      {/* 10. Buddhism Across the World (Map Moment) */}
      <WorldMapSection />

      {/* 11. Sacred Places */}
      <SacredPlacesSection onNavigate={onNavigate} />

      {/* 12. Visual Culture (Sculpture, Architecture, Manuscripts) */}
      <VisualCultureSection onNavigate={onNavigate} />

      {/* 13. Video Experience ("SEE THE WORLD") */}
      <VideoSection onOpenVideo={() => setIsVideoModalOpen(true)} />

      {/* 14. Signature Moment: The Knowledge Field */}
      <KnowledgeField onNavigate={onNavigate} />

      {/* 15. Transition: There is More to Discover */}
      <ArchiveTiles onNavigate={onNavigate} />

      {/* 16. Why Bodhessia? (Editorial Charter & Verification Taxonomy) */}
      <WhyBodhessiaSection />

      {/* Fullscreen Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
};
