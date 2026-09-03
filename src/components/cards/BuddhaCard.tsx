import React from 'react';
import { BuddhaDetail } from '../../types';
import { MetadataBadge } from './MetadataBadge';
import { Sparkles, Trees, ShieldCheck } from 'lucide-react';

interface BuddhaCardProps {
  buddha: BuddhaDetail;
  onClick?: () => void;
  featured?: boolean;
}

export const BuddhaCard: React.FC<BuddhaCardProps> = ({ buddha, onClick, featured = false }) => {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-xl overflow-hidden glass-card transition-all duration-500 flex flex-col justify-between ${
        featured ? 'border-saffron-500/40 shadow-xl' : 'border-saffron-500/15'
      }`}
    >
      {/* Top Image Preview with Dark Gradient Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden bg-obsidian-950">
        <img
          src={buddha.imageUrl}
          alt={buddha.paliName}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />

        {/* Number Badge */}
        <div className="absolute top-3 left-3 bg-obsidian-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-saffron-500/30 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-saffron-400" />
          <span className="font-mono text-xs font-semibold text-saffron-300">
            {buddha.number < 10 ? `0${buddha.number}` : buddha.number}
          </span>
        </div>

        {/* Tradition Badge */}
        <div className="absolute top-3 right-3">
          <MetadataBadge metadata={buddha.metadata} size="sm" />
        </div>

        {/* Name Title on Bottom of Image */}
        <div className="absolute bottom-3 inset-x-3">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-parchment-100 group-hover:text-saffron-300 transition-colors">
            {buddha.paliName}
          </h3>
          <p className="text-xs font-mono text-parchment-400 italic">
            {buddha.meaning}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs md:text-sm text-parchment-300 line-clamp-3 leading-relaxed">
          {buddha.description}
        </p>

        {/* Key Attributes */}
        <div className="space-y-2 pt-3 border-t border-saffron-500/10 text-xs font-mono text-parchment-400">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-saffron-400/90">
              <Trees className="w-3.5 h-3.5" /> Bodhi Tree
            </span>
            <span className="text-parchment-300 truncate max-w-[160px]">
              {buddha.bodhiTree.split('(')[0]}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-saffron-400/90">
              <ShieldCheck className="w-3.5 h-3.5" /> Lifespan
            </span>
            <span className="text-parchment-300">
              {buddha.lifespan}
            </span>
          </div>
        </div>

        {/* Explore Link */}
        <div className="pt-2 flex items-center justify-between text-xs font-mono text-saffron-400 group-hover:text-saffron-300 transition-colors">
          <span className="tracking-widest uppercase text-[10px]">View Lineage Record</span>
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
};
