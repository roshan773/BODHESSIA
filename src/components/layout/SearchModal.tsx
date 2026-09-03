import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, BookOpen, Sparkles, Compass, ShieldCheck, MapPin, Layers } from 'lucide-react';
import { BUDDHAS_28 } from '../../data/buddhas28';
import { BODHISATTVAS } from '../../data/bodhisattvas';
import { TEACHINGS } from '../../data/teachings';
import { SYMBOLS } from '../../data/symbols';
import { HISTORY_ERAS } from '../../data/history';
import { SACRED_PLACES } from '../../data/sacredPlaces';
import { SearchResultItem } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Build unified search index
  const allItems: SearchResultItem[] = useMemo(() => {
    const items: SearchResultItem[] = [];

    BUDDHAS_28.forEach((b) => {
      items.push({
        id: `buddha-${b.id}`,
        title: `${b.paliName} (#${b.number})`,
        subtitle: `${b.meaning} · Bodhi Tree: ${b.bodhiTree.split('(')[0]}`,
        category: 'Buddha',
        url: b.number === 28 ? '/buddha' : '/28-buddhas',
        description: b.description,
        tags: [b.paliName, b.sanskritName || '', b.bodhiTree, b.era, ...(b.relatedConcepts || [])]
      });
    });

    BODHISATTVAS.forEach((b) => {
      items.push({
        id: `bodhisattva-${b.id}`,
        title: b.name,
        subtitle: `${b.quality} · ${b.sanskritName}`,
        category: 'Bodhisattva',
        url: '/bodhisattvas',
        description: b.description,
        tags: [b.name, b.sanskritName, b.quality, b.chineseName || '', b.tibetanName || '', ...(b.relatedConcepts || [])]
      });
    });

    TEACHINGS.forEach((t) => {
      items.push({
        id: `teaching-${t.id}`,
        title: t.title,
        subtitle: `${t.paliName} · ${t.category}`,
        category: 'Teaching',
        url: '/teachings',
        description: t.summary,
        tags: [t.title, t.paliName, t.sanskritName, t.category, ...(t.relatedConcepts || [])]
      });
    });

    SYMBOLS.forEach((s) => {
      items.push({
        id: `symbol-${s.id}`,
        title: s.name,
        subtitle: `${s.sanskritName} · ${s.category}`,
        category: 'Symbol',
        url: '/symbols',
        description: s.description,
        tags: [s.name, s.sanskritName, s.category, ...(s.relatedConcepts || [])]
      });
    });

    HISTORY_ERAS.forEach((h) => {
      items.push({
        id: `history-${h.id}`,
        title: h.title,
        subtitle: `${h.period} · ${h.region}`,
        category: 'History',
        url: '/history',
        description: h.description,
        tags: [h.title, h.period, h.region, ...h.keyFigures, ...h.monumentalSites]
      });
    });

    SACRED_PLACES.forEach((p) => {
      items.push({
        id: `place-${p.id}`,
        title: p.name,
        subtitle: `${p.designation} · ${p.country}`,
        category: 'Place',
        url: '/history',
        description: p.description,
        tags: [p.name, p.country, p.region, p.designation, p.ancientName || '']
      });
    });

    return items;
  }, []);

  const filteredResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    return allItems.filter((item) => {
      const matchCategory = activeCategory === 'All' || item.category === activeCategory;
      if (!matchCategory) return false;
      if (!q) return true;

      const titleMatch = item.title.toLowerCase().includes(q);
      const subMatch = item.subtitle.toLowerCase().includes(q);
      const descMatch = item.description.toLowerCase().includes(q);
      const tagMatch = item.tags.some((t) => t.toLowerCase().includes(q));

      return titleMatch || subMatch || descMatch || tagMatch;
    });
  }, [allItems, query, activeCategory]);

  const handleSelect = (url: string) => {
    onNavigate(url);
    onClose();
  };

  if (!isOpen) return null;

  const categories = ['All', 'Buddha', 'Bodhisattva', 'Teaching', 'Symbol', 'History', 'Place'];

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Buddha':
        return <Sparkles className="w-4 h-4 text-saffron-400" />;
      case 'Bodhisattva':
        return <ShieldCheck className="w-4 h-4 text-amber-400" />;
      case 'Teaching':
        return <BookOpen className="w-4 h-4 text-emerald-400" />;
      case 'Symbol':
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'History':
        return <Compass className="w-4 h-4 text-rose-400" />;
      default:
        return <MapPin className="w-4 h-4 text-parchment-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 bg-black/85 backdrop-blur-xl px-4 animate-fadeIn">
      <div className="w-full max-w-3xl bg-obsidian-900 border border-saffron-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="relative flex items-center px-5 py-4 border-b border-saffron-500/20 bg-obsidian-950/80">
          <Search className="w-5 h-5 text-saffron-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Buddha, Bodhisattvas, Eightfold Path, Nirvana, Ashoka, Bodh Gaya..."
            className="w-full bg-transparent text-parchment-100 placeholder:text-parchment-500 text-base md:text-lg focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-parchment-400 hover:text-parchment-100 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono bg-obsidian-800 text-parchment-400 px-2 py-1 rounded border border-saffron-500/20 hover:text-parchment-100"
          >
            ESC
          </button>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 px-5 py-2.5 overflow-x-auto border-b border-saffron-500/10 bg-obsidian-950/40 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono uppercase px-3 py-1 rounded-full whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-saffron-500 text-obsidian-950 font-semibold'
                  : 'bg-obsidian-800/80 text-parchment-400 hover:text-parchment-200 border border-saffron-500/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-3 overflow-y-auto flex-1 space-y-1.5 divide-y divide-saffron-500/5">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-parchment-400">
              <p className="font-serif text-lg">No records found for "{query}"</p>
              <p className="text-xs font-mono mt-1 text-parchment-500">
                Try searching for 'Dharma', 'Avalokiteśvara', 'Dīpaṅkara', 'Sarnath', or 'Nirvana'.
              </p>
            </div>
          ) : (
            filteredResults.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.url)}
                className="group p-3.5 rounded-lg hover:bg-obsidian-800/80 cursor-pointer transition-all flex items-start gap-3.5 border border-transparent hover:border-saffron-500/20"
              >
                <div className="p-2 rounded bg-obsidian-950 border border-saffron-500/15 shrink-0 mt-0.5">
                  {getCategoryIcon(item.category)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm md:text-base font-serif font-bold text-parchment-100 group-hover:text-saffron-300 truncate">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-saffron-400/80 shrink-0">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-parchment-400 truncate mt-0.5">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-parchment-400/80 line-clamp-1 mt-1 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 border-t border-saffron-500/15 bg-obsidian-950/80 flex items-center justify-between text-xs font-mono text-parchment-400">
          <span>{filteredResults.length} knowledge entries</span>
          <span>Click entry to open section</span>
        </div>
      </div>
    </div>
  );
};
