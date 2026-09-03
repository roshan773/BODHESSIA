import React, { useState, useEffect } from 'react';
import { AudioProvider } from './context/AudioContext';
import { ParticleCanvas } from './components/visual/ParticleCanvas';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { BuddhaPage } from './pages/BuddhaPage';
import { Buddhas28Page } from './pages/Buddhas28Page';
import { BodhisattvasPage } from './pages/BodhisattvasPage';
import { TeachingsPage } from './pages/TeachingsPage';
import { SymbolsPage } from './pages/SymbolsPage';
import { HistoryPage } from './pages/HistoryPage';
import { AboutPage } from './pages/AboutPage';

// Types
import { BuddhaDetail, BodhisattvaDetail, SymbolDetail } from './types';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['/', '/buddha', '/28-buddhas', '/bodhisattvas', '/teachings', '/symbols', '/history', '/about'].includes(hash)) {
      return hash;
    }
    const path = window.location.pathname;
    if (path && ['/', '/buddha', '/28-buddhas', '/bodhisattvas', '/teachings', '/symbols', '/history', '/about'].includes(path)) {
      return path;
    }
    return '/';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedBuddhaDetail, setSelectedBuddhaDetail] = useState<BuddhaDetail | null>(null);
  const [selectedBodhisattvaDetail, setSelectedBodhisattvaDetail] = useState<BodhisattvaDetail | null>(null);
  const [selectedSymbolDetail, setSelectedSymbolDetail] = useState<SymbolDetail | null>(null);

  // Sync route with browser hash / history
  const navigate = (route: string) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setCurrentRoute(hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectBuddha = (buddha: BuddhaDetail) => {
    setSelectedBuddhaDetail(buddha);
    navigate(buddha.number === 28 ? '/buddha' : '/28-buddhas');
  };

  const handleSelectBodhisattva = (bodhisattva: BodhisattvaDetail) => {
    setSelectedBodhisattvaDetail(bodhisattva);
    navigate('/bodhisattvas');
  };

  const handleSelectSymbol = (symbol: SymbolDetail) => {
    setSelectedSymbolDetail(symbol);
    navigate('/symbols');
  };

  const renderActivePage = () => {
    switch (currentRoute) {
      case '/buddha':
        return <BuddhaPage onNavigate={navigate} />;
      case '/28-buddhas':
        return (
          <Buddhas28Page
            onNavigate={navigate}
            initialSelectedBuddha={selectedBuddhaDetail}
          />
        );
      case '/bodhisattvas':
        return (
          <BodhisattvasPage
            onNavigate={navigate}
            initialSelectedBodhisattva={selectedBodhisattvaDetail}
          />
        );
      case '/teachings':
        return <TeachingsPage onNavigate={navigate} />;
      case '/symbols':
        return (
          <SymbolsPage
            onNavigate={navigate}
            initialSelectedSymbol={selectedSymbolDetail}
          />
        );
      case '/history':
        return <HistoryPage onNavigate={navigate} />;
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/':
      default:
        return (
          <HomePage
            onNavigate={navigate}
            onSelectBuddha={handleSelectBuddha}
            onSelectBodhisattva={handleSelectBodhisattva}
            onSelectSymbol={handleSelectSymbol}
          />
        );
    }
  };

  return (
    <AudioProvider>
      <div className="relative min-h-screen bg-obsidian-950 text-parchment-100 flex flex-col selection:bg-saffron-500/30 selection:text-parchment-100">
        {/* Ambient Stardust Particles Canvas */}
        <ParticleCanvas />

        {/* Global Floating Navigation */}
        <Navbar
          activeRoute={currentRoute}
          onNavigate={navigate}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* Dynamic Page Routing View */}
        <main className="flex-1 relative z-10">
          {renderActivePage()}
        </main>

        {/* Museum Footer */}
        <Footer onNavigate={navigate} />

        {/* Global Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onNavigate={navigate}
        />
      </div>
    </AudioProvider>
  );
};
export default App;
