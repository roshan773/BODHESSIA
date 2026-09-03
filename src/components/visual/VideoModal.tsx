import React, { useState } from 'react';
import { X, Play, Volume2, VolumeX, Maximize2, BookOpen, Clock } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isOpen) return null;

  const chapters = [
    { title: 'I. The Forest of Uruvelā & Awakening', time: '00:00', loc: 'Bodh Gaya, Bihar', desc: 'Contemplation beneath the Bodhi tree as morning light filters through ancient boughs.' },
    { title: 'II. The First Proclamation of Dharma', time: '04:15', loc: 'Sarnath Deer Park, Varanasi', desc: 'The wheel of liberation is turned; the silence of ascetic seekers gives way to clarity.' },
    { title: 'III. The Silk Road Desert Monasteries', time: '09:30', loc: 'Dunhuang & Kizil Caves', desc: 'Caravans across sands carrying painted banners and palm-leaf manuscripts into Asia.' },
    { title: 'IV. The Silence of the Himalayas', time: '14:20', loc: 'Lhasa & Tiger’s Nest', desc: 'Chanting in cliffside monasteries where incense smoke curls toward snowbound peaks.' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-obsidian-900 border border-saffron-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-saffron-500/20 bg-obsidian-950/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-saffron-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-saffron-400">
              BODHESSIA CINEMATIC ARCHIVE · 4K DOCUMENTARY
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-parchment-400 hover:text-parchment-100 hover:bg-obsidian-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Area (Simulated 16:9 documentary view) */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=80"
            alt="Buddhist Documentary Scene"
            className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-1000 scale-105 group-hover:scale-100"
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-black/60 pointer-events-none" />

          {/* Subtitle / Narration Overlay */}
          <div className="absolute bottom-16 left-6 right-6 text-center max-w-2xl mx-auto pointer-events-none">
            <p className="text-lg md:text-xl font-serif italic text-parchment-100 drop-shadow-md">
              "{chapters[activeChapter].desc}"
            </p>
            <span className="text-xs font-mono uppercase tracking-widest text-saffron-400 mt-2 block">
              {chapters[activeChapter].loc}
            </span>
          </div>

          {/* Floating Play Control Overlay */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-16 h-16 rounded-full bg-saffron-500/90 text-obsidian-950 flex items-center justify-center hover:scale-110 hover:bg-saffron-400 transition-all duration-300 shadow-xl shadow-saffron-500/30"
          >
            <Play className={`w-7 h-7 fill-current ml-1 ${isPlaying ? 'opacity-90' : 'opacity-100'}`} />
          </button>

          {/* Player Bottom Control Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 flex items-center justify-between text-xs font-mono text-parchment-300">
            <div className="flex items-center gap-4">
              <span className="text-saffron-400 font-semibold">{chapters[activeChapter].time} / 22:45</span>
              <span className="hidden sm:inline-block text-parchment-400 truncate max-w-xs">{chapters[activeChapter].title}</span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setIsMuted(!isMuted)} className="p-1.5 hover:text-saffron-400 transition-colors">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button className="p-1.5 hover:text-saffron-400 transition-colors">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Chapters Strip */}
        <div className="p-4 md:p-6 bg-obsidian-950/90 border-t border-saffron-500/15">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-parchment-400 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-saffron-400" /> Archival Chapters
            </span>
            <span className="text-xs font-mono text-saffron-400">4 Chapters Available</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`p-3 rounded-lg text-left transition-all duration-300 border flex flex-col justify-between ${
                  activeChapter === idx
                    ? 'bg-saffron-500/15 border-saffron-400 text-saffron-200'
                    : 'bg-obsidian-900/60 border-saffron-500/10 text-parchment-400 hover:border-saffron-500/30'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-saffron-500 mb-1">
                  <span>{ch.time}</span>
                  <span>Part 0{idx + 1}</span>
                </div>
                <h5 className="text-xs font-serif font-semibold text-parchment-200 truncate">
                  {ch.title}
                </h5>
                <span className="text-[10px] text-parchment-400 truncate mt-1">
                  {ch.loc}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
