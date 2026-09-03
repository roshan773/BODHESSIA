import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { WhoWasBuddhaSection } from '../components/home/WhoWasBuddhaSection';
import { LifeOfBuddhaSection } from '../components/home/LifeOfBuddhaSection';
import { BuddhaJourneySection } from '../components/home/BuddhaJourneySection';
import { Buddhas28Preview } from '../components/home/Buddhas28Preview';
import { DharmaSection } from '../components/home/DharmaSection';
import { BodhisattvaSection } from '../components/home/BodhisattvaSection';
import { SymbolsSection } from '../components/home/SymbolsSection';
import { HistoryPreview } from '../components/home/HistoryPreview';
import { BuddhistTraditionsSection } from '../components/home/BuddhistTraditionsSection';
import { BuddhistArtSection } from '../components/home/BuddhistArtSection';
import { BuddhistArchitectureSection } from '../components/home/BuddhistArchitectureSection';
import { SacredPlacesSection } from '../components/home/SacredPlacesSection';
import { WorldMapSection } from '../components/home/WorldMapSection';
import { BuddhistTextsSection } from '../components/home/BuddhistTextsSection';
import { KnowledgeField } from '../components/home/KnowledgeField';
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
    <div className="relative bg-[#F5F2EA]">
      {/* 01. BUDDHA HERO */}
      <HeroSection
        onNavigate={onNavigate}
        onOpenVideo={() => setIsVideoModalOpen(true)}
      />

      {/* 02. WHO WAS THE BUDDHA? */}
      <WhoWasBuddhaSection onNavigate={onNavigate} />

      {/* 03. THE LIFE OF GAUTAMA (9 visual chapters) */}
      <LifeOfBuddhaSection onNavigate={onNavigate} />

      {/* 04. THE JOURNEY OF THE BUDDHA (Interactive pilgrimage geography) */}
      <BuddhaJourneySection onNavigate={onNavigate} />

      {/* 05. THE 28 BUDDHAS (Signature Pāli Theravāda chronicle) */}
      <Buddhas28Preview
        onNavigate={onNavigate}
        onSelectBuddha={onSelectBuddha}
      />

      {/* 06. THE DHARMA (Four Noble Truths, Eightfold Path, Nirvana) */}
      <DharmaSection onNavigate={onNavigate} />

      {/* 07. BODHISATTVAS (8 Authentic compassionate archetypes) */}
      <BodhisattvaSection
        onNavigate={onNavigate}
        onSelectBodhisattva={onSelectBodhisattva}
      />

      {/* 08. BUDDHIST SYMBOLS (Custom SVG visual language) */}
      <SymbolsSection
        onNavigate={onNavigate}
        onSelectSymbol={onSelectSymbol}
      />

      {/* 09. HISTORY OF BUDDHISM (2,500+ years timeline) */}
      <HistoryPreview onNavigate={onNavigate} />

      {/* 10. BUDDHIST TRADITIONS (Theravāda, Mahāyāna, Vajrayāna) */}
      <BuddhistTraditionsSection onNavigate={onNavigate} />

      {/* 11. THE ART OF BUDDHISM (Sculptures, murals, manuscripts) */}
      <BuddhistArtSection onNavigate={onNavigate} />

      {/* 12. BUDDHIST ARCHITECTURE (Stūpas, Caityas, Vihāras, Pagodas) */}
      <BuddhistArchitectureSection onNavigate={onNavigate} />

      {/* 13. SACRED BUDDHIST PLACES (Bodh Gaya, Lumbini, Sarnath, Kushinagar, etc.) */}
      <SacredPlacesSection onNavigate={onNavigate} />

      {/* 14. BUDDHISM ACROSS ASIA (Silk Road & Maritime transmission routes) */}
      <WorldMapSection onNavigate={onNavigate} />

      {/* 15. BUDDHIST TEXTS & SCRIPTURES (Pāli Canon, Sūtras, Tantras) */}
      <BuddhistTextsSection onNavigate={onNavigate} />

      {/* 16. EXPLORE BODHESSIA & WHY BODHESSIA */}
      <KnowledgeField onNavigate={onNavigate} />
      <WhyBodhessiaSection onNavigate={onNavigate} />

      {/* Optional Video Experience Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
};
