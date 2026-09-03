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
      setIsScrolled(window.scrollY > 20);
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
            ? 'py-3 bg-[#F7F7F5]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Typographic Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex flex-col items-start text-left group focus:outline-none cursor-pointer"
          >
            <span className="font-display text-xl sm:text-2xl font-black tracking-[0.16em] text-[#0F172A] group-hover:text-[#B8874A] transition-colors">
              BODHESSIA
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.26em] text-[#334155] font-bold -mt-0.5">
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
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#0F172A] border-b-2 border-[#0F172A]'
                      : 'text-[#475569] hover:text-[#0F172A]'
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
              className={`p-2 border transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                isPlayingDrone
                  ? 'bg-[#0F172A] text-white border-[#0F172A]'
                  : 'bg-white text-[#334155] hover:text-[#0F172A] border-[#E2E8F0]'
              }`}
            >
              {isPlayingDrone ? <Volume2 className="w-4 h-4 text-[#B8874A]" /> : <VolumeX className="w-4 h-4 text-[#64748B]" />}
              <span className="text-[11px] font-mono font-bold hidden md:inline-block">
                {isPlayingDrone ? 'Ambient' : 'Sound'}
              </span>
            </button>

            {/* Singing Bowl Chime */}
            <button
              onClick={() => playSingingBowl(1.0)}
              title="Strike Singing Bowl Chime"
              className="p-2 bg-white text-[#334155] hover:text-[#0F172A] border border-[#E2E8F0] transition-colors hidden sm:flex items-center gap-1 cursor-pointer shadow-xs"
            >
              <Bell className="w-4 h-4 text-[#B8874A]" />
              <span className="text-[11px] font-mono font-bold">Chime</span>
            </button>

            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-[#0F172A] hover:text-white text-[#0F172A] border border-[#E2E8F0] transition-colors cursor-pointer shadow-xs"
            >
              <Search className="w-4 h-4 text-[#B8874A]" />
              <span className="text-xs font-mono font-bold hidden sm:inline-block uppercase tracking-wider">Search</span>
              <kbd className="hidden md:inline-block text-[10px] font-mono font-bold bg-[#F1F5F9] text-[#475569] px-1.5 py-0.5 border border-[#E2E8F0]">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-white text-[#0F172A] border border-[#E2E8F0] lg:hidden cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F7F7F5] flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-fadeIn">
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8874A] font-bold block">
              KNOWLEDGE NAVIGATION
            </span>
            <div className="grid grid-cols-1 divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
              {navLinks.map((link) => {
                const isActive = activeRoute === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-left py-4 font-serif text-2xl tracking-wide flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#B8874A] font-bold' : 'text-[#0F172A] font-bold'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-sm font-mono text-[#475569]">→</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-[#E2E8F0] flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full py-4 bg-[#0F172A] text-white font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <Search className="w-4 h-4 text-[#B8874A]" /> Search Buddhist Knowledge
            </button>
            <p className="text-center text-[10px] font-mono text-[#475569] font-bold uppercase tracking-widest">
              BODHESSIA · THE WORLD OF BUDDHIST KNOWLEDGE
            </p>
          </div>
        </div>
      )}
    </>
  );
};
