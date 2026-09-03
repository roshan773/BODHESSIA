import React, { useState, useEffect } from 'react';
import { AudioProvider } from './context/AudioContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';

import { HomePage } from './pages/HomePage';
import { BuddhaPage } from './pages/BuddhaPage';
import { Buddhas28Page } from './pages/Buddhas28Page';
import { BodhisattvasPage } from './pages/BodhisattvasPage';
import { TeachingsPage } from './pages/TeachingsPage';
import { SymbolsPage } from './pages/SymbolsPage';
import { HistoryPage } from './pages/HistoryPage';
import { AboutPage } from './pages/AboutPage';

import { BuddhaDetail, BodhisattvaDetail, SymbolDetail } from './types';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedBuddhaForPage, setSelectedBuddhaForPage] = useState<BuddhaDetail | null>(null);
  const [selectedBodhisattvaForPage, setSelectedBodhisattvaForPage] = useState<BodhisattvaDetail | null>(null);
  const [selectedSymbolForPage, setSelectedSymbolForPage] = useState<SymbolDetail | null>(null);

  // Hash-based simple router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setCurrentRoute(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!window.location.hash) {
      window.location.hash = '#/';
    } else {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: string) => {
    window.location.hash = `#${route}`;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBuddhaFromHome = (buddha: BuddhaDetail) => {
    setSelectedBuddhaForPage(buddha);
    handleNavigate('/28-buddhas');
  };

  const handleSelectBodhisattvaFromHome = (bodhisattva: BodhisattvaDetail) => {
    setSelectedBodhisattvaForPage(bodhisattva);
    handleNavigate('/bodhisattvas');
  };

  const handleSelectSymbolFromHome = (symbol: SymbolDetail) => {
    setSelectedSymbolForPage(symbol);
    handleNavigate('/symbols');
  };

  const renderPage = () => {
    switch (currentRoute) {
      case '/buddha':
        return <BuddhaPage onNavigate={handleNavigate} />;
      case '/28-buddhas':
        return (
          <Buddhas28Page
            onNavigate={handleNavigate}
            initialSelectedBuddha={selectedBuddhaForPage}
          />
        );
      case '/bodhisattvas':
        return (
          <BodhisattvasPage
            onNavigate={handleNavigate}
            initialSelectedBodhisattva={selectedBodhisattvaForPage}
          />
        );
      case '/teachings':
        return <TeachingsPage onNavigate={handleNavigate} />;
      case '/symbols':
        return (
          <SymbolsPage
            onNavigate={handleNavigate}
            initialSelectedSymbol={selectedSymbolForPage}
          />
        );
      case '/history':
        return <HistoryPage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/':
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectBuddha={handleSelectBuddhaFromHome}
            onSelectBodhisattva={handleSelectBodhisattvaFromHome}
            onSelectSymbol={handleSelectSymbolFromHome}
          />
        );
    }
  };

  return (
    <AudioProvider>
      <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#111111] selection:bg-[#B8874A] selection:text-white">
        {/* Modern Floating Header Navigation */}
        <Navbar
          activeRoute={currentRoute}
          onNavigate={handleNavigate}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* Dynamic Page Content */}
        <main className="flex-1">
          {renderPage()}
        </main>

        {/* Modern Oversized Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Global Full-Screen Search Overlay */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onNavigate={handleNavigate}
        />
      </div>
    </AudioProvider>
  );
}

export default App;
