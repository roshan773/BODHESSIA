import React, { useState, useEffect } from 'react';
import { Search, Volume2, VolumeX, Menu, X, Bell } from 'lucide-react';
import { useMeditationAudio } from '../../context/AudioContext';

interface NavbarProps {
  activeRoute: string;
  onNavigate: (route: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeRoute, onNavigate, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isPlayingDrone, toggleDrone, playSingingBowl } = useMeditationAudio();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const navLinks = [
    { label: 'Explore', path: '/' },
    { label: 'Buddha', path: '/buddha' },
    { label: '28 Buddhas', path: '/28-buddhas' },
    { label: 'Bodhisattvas', path: '/bodhisattvas' },
    { label: 'Teachings', path: '/teachings' },
    { label: 'Symbols', path: '/symbols' },
    { label: 'History', path: '/history' },
    { label: 'About', path: '/about' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    playSingingBowl(1.1);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-obsidian-950/85 backdrop-blur-md border-b border-saffron-500/20 shadow-lg shadow-black/40'
            : 'py-5 bg-gradient-to-b from-obsidian-950/90 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Typographic Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex flex-col items-start text-left group focus:outline-none"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.22em] text-parchment-100 group-hover:text-saffron-300 transition-colors">
              BODHESSIA
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-saffron-400/90 -mt-0.5">
              Digital Museum of Buddhist Knowledge
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeRoute === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-saffron-300 font-semibold bg-saffron-500/15 border border-saffron-500/30'
                      : 'text-parchment-400 hover:text-parchment-100 hover:bg-obsidian-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools (Search, Audio, Mobile Menu) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Ambient Soundscape Toggle */}
            <button
              onClick={toggleDrone}
              title={isPlayingDrone ? 'Mute Ambient Soundscape' : 'Enable Meditative Ambient Drone'}
              className={`p-2 rounded-lg border transition-all duration-300 flex items-center gap-1.5 ${
                isPlayingDrone
                  ? 'bg-saffron-500/20 text-saffron-300 border-saffron-500/40 shadow-sm shadow-saffron-500/20 animate-pulse'
                  : 'bg-obsidian-900/80 text-parchment-400 hover:text-parchment-100 border-saffron-500/15 hover:border-saffron-500/30'
              }`}
            >
              {isPlayingDrone ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="text-[10px] font-mono hidden md:inline-block">
                {isPlayingDrone ? 'Ambient ON' : 'Ambient'}
              </span>
            </button>

            {/* Singing Bowl Chime Button */}
            <button
              onClick={() => playSingingBowl(1.0)}
              title="Strike Singing Bowl Chime"
              className="p-2 rounded-lg bg-obsidian-900/80 text-parchment-400 hover:text-saffron-300 border border-saffron-500/15 hover:border-saffron-500/30 transition-colors hidden sm:flex items-center gap-1"
            >
              <Bell className="w-4 h-4 text-saffron-400" />
              <span className="text-[10px] font-mono">Chime</span>
            </button>

            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-obsidian-900/80 text-parchment-300 hover:text-parchment-100 border border-saffron-500/15 hover:border-saffron-500/30 transition-colors"
            >
              <Search className="w-4 h-4 text-saffron-400" />
              <span className="text-xs font-mono hidden sm:inline-block">Search</span>
              <kbd className="hidden md:inline-block text-[9px] font-mono bg-obsidian-800 text-parchment-500 px-1.5 py-0.5 rounded border border-saffron-500/10">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-obsidian-900 text-parchment-300 hover:text-parchment-100 border border-saffron-500/20 lg:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-obsidian-950/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-fadeIn">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-saffron-400/80 block">
              Museum Exploration Routes
            </span>
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => {
                const isActive = activeRoute === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-left p-3.5 rounded-xl font-serif text-xl tracking-wide flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-saffron-500/15 text-saffron-300 border border-saffron-500/30 font-bold'
                        : 'text-parchment-200 hover:bg-obsidian-900 border border-transparent'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-saffron-500">→</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-saffron-500/15 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full py-3 rounded-xl bg-saffron-500 text-obsidian-950 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" /> Global Knowledge Search
            </button>
            <p className="text-center text-[10px] font-mono text-parchment-500 uppercase tracking-widest">
              BODHESSIA · The World of Buddhist Knowledge
            </p>
          </div>
        </div>
      )}
    </>
  );
};
