import React, { useState } from 'react';
import { useMeditationAudio } from '../../context/AudioContext';

interface MapNode {
  id: string;
  name: string;
  region: string;
  century: string;
  x: number; // percentage in SVG viewBox
  y: number;
  tradition: string;
  description: string;
  monument: string;
}

const MAP_NODES: MapNode[] = [
  {
    id: 'bodhgaya',
    name: 'Magadha / Bodh Gaya',
    region: 'Ancient India (Origin)',
    century: '6th–5th Century BCE',
    x: 480,
    y: 330,
    tradition: 'Early Buddhism (Foundation)',
    description: 'The epicentre of Awakening where Siddhartha Gautama attained enlightenment beneath the Bodhi tree and turned the Wheel of Dharma at Sarnath.',
    monument: 'Mahabodhi Temple & Diamond Throne'
  },
  {
    id: 'anuradhapura',
    name: 'Anuradhapura',
    region: 'Sri Lanka (Southern Route)',
    century: '3rd Century BCE (Ashokan Mission)',
    x: 480,
    y: 430,
    tradition: 'Theravāda',
    description: 'Arahant Mahinda introduced the Dharma here; Princess Sanghamitta brought the sacred Bodhi sapling; the Pāli Canon was transcribed on palm leaves in 29 BCE.',
    monument: 'Ruwanwelisaya & Jaya Sri Maha Bodhi'
  },
  {
    id: 'gandhara',
    name: 'Taxila & Gandhara',
    region: 'Northwest Frontier / Bactria',
    century: '1st c. BCE – 2nd c. CE',
    x: 420,
    y: 270,
    tradition: 'Sarvāstivāda & Early Mahāyāna',
    description: 'Greco-Buddhist artistic synthesis created the earliest anthropomorphic statues of the Buddha draped in Hellenistic togas, patronized by Emperor Kanishka.',
    monument: 'Dharmarajika Stupa & Bamiyan Valley'
  },
  {
    id: 'dunhuang',
    name: 'Dunhuang (Mogao Caves)',
    region: 'Silk Road Gateway (China)',
    century: '4th–14th Century CE',
    x: 580,
    y: 250,
    tradition: 'Mahāyāna & Esoteric',
    description: 'Crucial oasis along the Taklamakan Desert where 492 cave temples were carved and thousands of ancient manuscripts were sealed in Cave 17.',
    monument: 'Mogao Caves of the Thousand Buddhas'
  },
  {
    id: 'changan',
    name: 'Chang’an (Xi’an) & Luoyang',
    region: 'Tang Dynasty Imperial China',
    century: '1st–9th Century CE',
    x: 650,
    y: 280,
    tradition: 'Chan (Zen), Tiantai, Pure Land',
    description: 'Epicenter of monumental translation projects by Kumarajiva and Xuanzang. Synthesized with Daoist thought to birth Chan (Zen) and Pure Land schools.',
    monument: 'Giant Wild Goose Pagoda & Longmen Grottoes'
  },
  {
    id: 'kyoto',
    name: 'Nara & Kyoto',
    region: 'Japan',
    century: '6th–13th Century CE',
    x: 760,
    y: 270,
    tradition: 'Zen (Rinzai/Sōtō), Shingon, Tendai, Jōdo',
    description: 'Prince Shōtoku codified Buddhist principles into statecraft. Inspired monumental bronze Daibutsu casting at Tōdai-ji, rock gardens, and tea ceremonies.',
    monument: 'Tōdai-ji Great Buddha & Kinkaku-ji'
  },
  {
    id: 'borobudur',
    name: 'Java (Borobudur) & Srivijaya',
    region: 'Maritime Southeast Asia',
    century: '8th–9th Century CE',
    x: 660,
    y: 480,
    tradition: 'Mahāyāna & Vajrayāna',
    description: 'Sailendra rulers constructed the world’s largest stone Buddhist mandala at Borobudur. Srivijaya empire stood as a maritime university hub for international monks.',
    monument: 'Borobudur Stupa Compound'
  },
  {
    id: 'bagan',
    name: 'Bagan Plains',
    region: 'Myanmar (Irrawaddy Plain)',
    century: '11th–13th Century CE',
    x: 550,
    y: 350,
    tradition: 'Theravāda',
    description: 'King Anawrahta unified Burma under Theravāda Buddhism, constructing over 2,200 terracotta and brick temples spanning the golden river plain.',
    monument: 'Ananda Temple & Shwezigon Pagoda'
  },
  {
    id: 'lhasa',
    name: 'Lhasa (Potala & Samye)',
    region: 'Tibetan Himalayan Plateau',
    century: '7th–15th Century CE',
    x: 520,
    y: 300,
    tradition: 'Vajrayāna (Tibetan Buddhism)',
    description: 'Guru Padmasambhava and Shantarakshita consecrated Samye; Tibetan scholars translated the vast Kangyur/Tengyur Sanskrit corpus; seat of the Dalai Lamas.',
    monument: 'Potala Palace & Jokhang Temple'
  }
];

export const WorldMapInteractive: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('bodhgaya');
  const { playSingingBowl } = useMeditationAudio();

  const selectedNode = MAP_NODES.find((n) => n.id === selectedNodeId) || MAP_NODES[0];

  const handleSelect = (node: MapNode) => {
    setSelectedNodeId(node.id);
    playSingingBowl(1.15);
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-10 border border-saffron-500/20 my-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-saffron-500/15 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-saffron-400">
            A Teaching That Traveled · 2,500+ Year Transmission
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-parchment-100 mt-1">
            Buddhism Across the Ancient & Modern World
          </h3>
          <p className="text-xs md:text-sm text-parchment-400 mt-1">
            Explore cultural corridors: Silk Road, Maritime Spice Routes, and Himalayan Mountain Passes.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-amber-300">
            <span className="w-2.5 h-0.5 bg-amber-400 inline-block" /> Silk Road Overland
          </span>
          <span className="flex items-center gap-1.5 text-cyan-300">
            <span className="w-2.5 h-0.5 bg-cyan-400 inline-block" /> Maritime Southern Route
          </span>
          <span className="flex items-center gap-1.5 text-emerald-300">
            <span className="w-2.5 h-0.5 bg-emerald-400 inline-block" /> Himalayan Corridor
          </span>
        </div>
      </div>

      {/* SVG Map Container */}
      <div className="relative w-full bg-obsidian-950/80 rounded-xl overflow-hidden border border-saffron-500/15 p-2 sm:p-4">
        <svg
          viewBox="340 180 480 340"
          className="w-full h-auto select-none"
          style={{ minHeight: '320px', maxHeight: '520px' }}
        >
          {/* Subtle World Grid */}
          <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E0B25B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C89D4B" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="silkRoadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C89D4B" />
              <stop offset="100%" stopColor="#F5D38A" />
            </linearGradient>
            <linearGradient id="seaRouteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Background land silhouettes simplified */}
          <path
            d="M 400,230 Q 450,210 500,220 T 600,210 T 700,230 Q 750,260 770,300 Q 720,330 670,320 Q 640,360 610,380 Q 560,400 520,380 Q 480,410 460,370 Q 420,330 400,280 Z"
            fill="#161512"
            stroke="#2A2822"
            strokeWidth="1"
          />

          {/* 1. Southern Ocean Route (Magadha -> Sri Lanka -> Srivijaya/Borobudur) */}
          <path
            d="M 480,330 Q 470,390 480,430 Q 550,470 660,480"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeDasharray="4, 4"
            className="animate-route-line opacity-75"
          />

          {/* 2. Silk Road Overland Route (Magadha -> Gandhara -> Dunhuang -> Chang'an -> Kyoto) */}
          <path
            d="M 480,330 L 420,270 Q 500,230 580,250 L 650,280 Q 710,260 760,270"
            fill="none"
            stroke="#E0B25B"
            strokeWidth="2.5"
            strokeDasharray="6, 6"
            className="animate-route-line"
          />

          {/* 3. Himalayan Route (Magadha -> Lhasa -> Mount Wutai) */}
          <path
            d="M 480,330 L 520,300 Q 580,270 650,280"
            fill="none"
            stroke="#34D399"
            strokeWidth="2"
            strokeDasharray="4, 4"
            className="animate-route-line opacity-80"
          />

          {/* 4. Southeast Asia Inland Route (Magadha -> Bagan -> Angkor) */}
          <path
            d="M 480,330 Q 510,340 550,350 Q 600,380 660,480"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1.5"
            strokeDasharray="4, 4"
            className="animate-route-line opacity-70"
          />

          {/* Nodes (Clickable Historical Cities) */}
          {MAP_NODES.map((node) => {
            const isSelected = selectedNodeId === node.id;
            return (
              <g
                key={node.id}
                onClick={() => handleSelect(node)}
                className="cursor-pointer group"
              >
                {/* Pulse circle for selected */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="18"
                    fill="url(#nodeGlow)"
                    className="animate-ping opacity-60"
                  />
                )}

                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? 7 : 4.5}
                  fill={isSelected ? '#FFF5DC' : '#C89D4B'}
                  stroke={isSelected ? '#E0B25B' : '#12110E'}
                  strokeWidth="2"
                  className="transition-all duration-300 group-hover:scale-125"
                />

                <text
                  x={node.x}
                  y={node.y - (isSelected ? 11 : 8)}
                  textAnchor="middle"
                  fill={isSelected ? '#FFF5DC' : '#B8B0A2'}
                  fontSize={isSelected ? "9.5" : "7.5"}
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontWeight={isSelected ? "600" : "400"}
                  className="transition-all duration-300 select-none pointer-events-none drop-shadow"
                >
                  {node.name.split('/')[0]}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating City Detail Drawer on Map */}
        <div className="mt-4 p-5 rounded-xl bg-obsidian-900/95 border border-saffron-500/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-saffron-400 bg-saffron-500/10 px-2 py-0.5 rounded border border-saffron-500/20">
                {selectedNode.century}
              </span>
              <span className="text-xs font-mono text-parchment-400">
                {selectedNode.region}
              </span>
              <span className="text-xs font-mono text-emerald-400/90 ml-auto md:ml-0">
                {selectedNode.tradition}
              </span>
            </div>
            <h4 className="text-xl md:text-2xl font-serif font-bold text-parchment-100">
              {selectedNode.name}
            </h4>
            <p className="text-sm text-parchment-300 leading-relaxed">
              {selectedNode.description}
            </p>
          </div>

          <div className="shrink-0 text-left md:text-right bg-obsidian-950/70 p-3 rounded-lg border border-saffron-500/10 w-full md:w-auto">
            <span className="text-[10px] uppercase font-mono tracking-widest text-parchment-400 block">
              Key Monument
            </span>
            <span className="text-sm font-serif text-saffron-300 font-semibold block">
              {selectedNode.monument}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
