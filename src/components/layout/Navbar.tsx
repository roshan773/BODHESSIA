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
      setIsScrolled(window.scrollY > 30);
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
    playSingingBowl(1.05);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#E4E4DF] shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Typographic Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex flex-col items-start text-left group focus:outline-none"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#111111] group-hover:text-[#B8874A] transition-colors">
              BODHESSIA
            </span>
            <span className="font-mono text-[7.5px] uppercase tracking-[0.28em] text-[#6D6D68] -mt-0.5">
              THE WORLD OF BUDDHIST KNOWLEDGE
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeRoute === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'text-[#111111] font-bold border-b border-[#111111]'
                      : 'text-[#6D6D68] hover:text-[#111111]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools (Audio, Search, Mobile Menu) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Ambient Soundscape Toggle */}
            <button
              onClick={toggleDrone}
              title={isPlayingDrone ? 'Mute Ambient Soundscape' : 'Enable Meditative Ambient Drone'}
              className={`p-2 border transition-all flex items-center gap-1.5 ${
                isPlayingDrone
                  ? 'bg-[#111111] text-white border-[#111111]'
                  : 'bg-white/90 text-[#6D6D68] hover:text-[#111111] border-[#E4E4DF]'
              }`}
            >
              {isPlayingDrone ? <Volume2 className="w-3.5 h-3.5 text-[#B8874A]" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[10px] font-mono hidden md:inline-block">
                {isPlayingDrone ? 'Ambient' : 'Sound'}
              </span>
            </button>

            {/* Singing Bowl Chime */}
            <button
              onClick={() => playSingingBowl(1.0)}
              title="Strike Singing Bowl Chime"
              className="p-2 bg-white/90 text-[#6D6D68] hover:text-[#111111] border border-[#E4E4DF] transition-colors hidden sm:flex items-center gap-1"
            >
              <Bell className="w-3.5 h-3.5 text-[#B8874A]" />
              <span className="text-[10px] font-mono">Chime</span>
            </button>

            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 bg-white/90 hover:bg-[#111111] hover:text-white text-[#111111] border border-[#E4E4DF] transition-colors"
            >
              <Search className="w-3.5 h-3.5 text-[#B8874A]" />
              <span className="text-xs font-mono hidden sm:inline-block uppercase tracking-wider">Search</span>
              <kbd className="hidden md:inline-block text-[9px] font-mono bg-[#F7F7F5] text-[#6D6D68] px-1 py-0.5 border border-[#E4E4DF]">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-white text-[#111111] border border-[#E4E4DF] lg:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F7F7F5] flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-fadeIn">
          <div className="space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block">
              KNOWLEDGE NAVIGATION
            </span>
            <div className="grid grid-cols-1 divide-y divide-[#E4E4DF] border-t border-b border-[#E4E4DF]">
              {navLinks.map((link) => {
                const isActive = activeRoute === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-left py-4 font-serif text-2xl tracking-wide flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#B8874A] font-bold' : 'text-[#111111]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-[#6D6D68]">→</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-[#E4E4DF] flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full py-3.5 bg-[#111111] text-white font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-[#B8874A]" /> Search Buddhist Knowledge
            </button>
            <p className="text-center text-[10px] font-mono text-[#6D6D68] uppercase tracking-widest">
              BODHESSIA · THE WORLD OF BUDDHIST KNOWLEDGE
            </p>
          </div>
        </div>
      )}
    </>
  );
};
