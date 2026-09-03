import React, { useState } from 'react';
import { Sparkles, ArrowRight, Compass, BookOpen, MapPin, Layers } from 'lucide-react';
import { useMeditationAudio } from '../../context/AudioContext';

interface NodeItem {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  connections: string[];
  description: string;
  actionUrl: string;
}

const NODES: NodeItem[] = [
  {
    id: 'buddha',
    name: 'Siddhārtha Gautama',
    category: 'Historical Teacher',
    x: 180,
    y: 180,
    connections: ['awakening', 'sarnath', 'dharmachakra'],
    description: 'Born Prince of the Shakya clan; renounced royal succession to discover the unconditioned cessation of suffering.',
    actionUrl: '/buddha'
  },
  {
    id: 'awakening',
    name: 'Awakening (Bodhi)',
    category: 'Spiritual Realization',
    x: 360,
    y: 120,
    connections: ['buddha', 'bodhgaya', 'four-truths', '12-nidanas'],
    description: 'Supreme Enlightenment attained beneath the Sacred Bodhi tree in Bodh Gaya at age 35.',
    actionUrl: '/buddha'
  },
  {
    id: 'bodhgaya',
    name: 'Bodh Gaya',
    category: 'Sacred Geography',
    x: 360,
    y: 280,
    connections: ['awakening', 'buddha'],
    description: 'The Diamond Throne (Vajrāsana) beside the Nerañjarā River; site of the Mahabodhi Temple.',
    actionUrl: '/history'
  },
  {
    id: 'four-truths',
    name: 'Four Noble Truths',
    category: 'Core Doctrine',
    x: 540,
    y: 160,
    connections: ['awakening', 'sarnath', 'eightfold-path', 'nirvana'],
    description: 'The universal diagnosis of existence: Suffering (Dukkha), Origin, Cessation, and Path.',
    actionUrl: '/teachings'
  },
  {
    id: 'sarnath',
    name: 'Deer Park (Sarnath)',
    category: 'Sacred Geography',
    x: 540,
    y: 300,
    connections: ['buddha', 'four-truths', 'dharmachakra', 'sangha'],
    description: 'Site of the inaugural sermon (Dhammacakkappavattana Sutta) near Varanasi.',
    actionUrl: '/history'
  },
  {
    id: 'dharmachakra',
    name: 'Dharma Wheel',
    category: 'Sacred Symbol',
    x: 700,
    y: 320,
    connections: ['sarnath', 'eightfold-path'],
    description: 'The Eight-Spoked Wheel symbolizing the continuous movement of truth through the world.',
    actionUrl: '/symbols'
  },
  {
    id: 'eightfold-path',
    name: 'Noble Eightfold Path',
    category: 'Contemplative Ethics',
    x: 720,
    y: 140,
    connections: ['four-truths', 'dharmachakra', 'nirvana'],
    description: 'The integrated Middle Way of Wisdom (Paññā), Ethics (Sīla), and Meditation (Samādhi).',
    actionUrl: '/teachings'
  },
  {
    id: 'nirvana',
    name: 'Nirvāṇa (Nibbāna)',
    category: 'Ultimate Freedom',
    x: 880,
    y: 200,
    connections: ['eightfold-path', 'four-truths'],
    description: 'The unconditioned peace; the complete cessation of greed, hatred, and delusion.',
    actionUrl: '/teachings'
  }
];

interface KnowledgeFieldProps {
  onNavigate: (route: string) => void;
}

export const KnowledgeField: React.FC<KnowledgeFieldProps> = ({ onNavigate }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('buddha');
  const { playSingingBowl } = useMeditationAudio();

  const selectedNode = NODES.find((n) => n.id === selectedNodeId) || NODES[0];

  const handleSelectNode = (node: NodeItem) => {
    setSelectedNodeId(node.id);
    playSingingBowl(1.2);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F5] border-t border-[#E4E4DF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E4E4DF] gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6D6D68] block mb-2">
              SIGNATURE KNOWLEDGE INTERACTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#111111]">
              THE KNOWLEDGE FIELD
            </h2>
            <p className="text-xs sm:text-sm text-[#6D6D68] mt-2 max-w-xl font-light">
              An interconnected semantic network illustrating how the life of Buddha, sacred geography, symbols, and liberation doctrines form a unified tapestry.
            </p>
          </div>
          <span className="text-xs font-mono text-[#B8874A] uppercase tracking-wider">
            Click nodes to trace connections
          </span>
        </div>

        {/* SVG Interactive Canvas */}
        <div className="bg-white border border-[#E4E4DF] rounded-none p-4 sm:p-8 relative overflow-hidden shadow-sm">
          <svg
            viewBox="100 60 840 320"
            className="w-full h-auto select-none"
            style={{ minHeight: '300px', maxHeight: '460px' }}
          >
            {/* Connection Lines */}
            {NODES.map((node) => {
              return node.connections.map((targetId) => {
                const targetNode = NODES.find((n) => n.id === targetId);
                if (!targetNode) return null;

                const isConnectedToSelected =
                  node.id === selectedNodeId || targetNode.id === selectedNodeId;

                return (
                  <line
                    key={`${node.id}-${targetNode.id}`}
                    x1={node.x}
                    y1={node.y}
                    x2={targetNode.x}
                    y2={targetNode.y}
                    stroke={isConnectedToSelected ? '#B8874A' : '#E4E4DF'}
                    strokeWidth={isConnectedToSelected ? 2 : 1}
                    strokeDasharray={isConnectedToSelected ? 'none' : '4 4'}
                    className="transition-all duration-500"
                  />
                );
              });
            })}

            {/* Nodes */}
            {NODES.map((node) => {
              const isSelected = selectedNodeId === node.id;
              const isConnected = selectedNode.connections.includes(node.id);

              return (
                <g
                  key={node.id}
                  onClick={() => handleSelectNode(node)}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isSelected ? 10 : isConnected ? 6 : 4.5}
                    fill={isSelected ? '#B8874A' : isConnected ? '#111111' : '#FFFFFF'}
                    stroke={isSelected ? '#111111' : '#B8874A'}
                    strokeWidth={isSelected ? 2.5 : 1.5}
                    className="transition-all duration-300"
                  />

                  <text
                    x={node.x}
                    y={node.y - (isSelected ? 16 : 10)}
                    textAnchor="middle"
                    fill={isSelected ? '#111111' : '#6D6D68'}
                    fontSize={isSelected ? '11.5' : '9.5'}
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontWeight={isSelected ? '700' : '400'}
                    className="transition-all duration-300 select-none pointer-events-none"
                  >
                    {node.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Node Detail Drawer */}
          <div className="mt-6 pt-6 border-t border-[#E4E4DF] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8874A] bg-[#F7F7F5] px-2 py-0.5 border border-[#E4E4DF]">
                  {selectedNode.category}
                </span>
                <span className="text-xs font-mono text-[#6D6D68]">
                  Connected to {selectedNode.connections.length} core concepts
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#111111]">
                {selectedNode.name}
              </h3>
              <p className="text-sm text-[#6D6D68] max-w-2xl font-light">
                {selectedNode.description}
              </p>
            </div>

            <button
              onClick={() => onNavigate(selectedNode.actionUrl)}
              className="px-5 py-2.5 bg-[#111111] hover:bg-[#B8874A] text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 self-start md:self-auto shrink-0"
            >
              <span>Explore Chapter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
