import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';
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
  const quickSearches = ['Buddha', 'Avalokiteśvara', 'Dukkha', 'Dharma Wheel', 'Bodh Gaya', 'Ashoka', 'Nirvana', 'Eightfold Path'];

  return (
    <div className="fixed inset-0 z-50 bg-[#F7F7F5] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto animate-fadeIn">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Top Close Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E4E4DF]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#6D6D68]">
            BODHESSIA GLOBAL KNOWLEDGE SEARCH
          </span>
          <button
            onClick={onClose}
            className="p-2 border border-[#E4E4DF] hover:border-[#111111] transition-colors"
          >
            <X className="w-5 h-5 text-[#111111]" />
          </button>
        </div>

        {/* Large Prompt & Input */}
        <div className="space-y-4">
          <label className="font-serif text-3xl sm:text-5xl font-light text-[#111111] block">
            WHAT ARE YOU LOOKING FOR?
          </label>
          <div className="relative border-b-2 border-[#111111] pb-2 flex items-center gap-4">
            <Search className="w-6 h-6 text-[#B8874A] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by master, doctrine, symbol, era, or sacred place..."
              className="w-full bg-transparent text-xl sm:text-3xl font-serif text-[#111111] placeholder:text-[#9E9E98] focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-xs font-mono text-[#6D6D68]">
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Quick Search Suggestions */}
        {!query && (
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E9E98] block">
              Suggested Explorations
            </span>
            <div className="flex flex-wrap gap-2">
              {quickSearches.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="px-3 py-1 bg-white border border-[#E4E4DF] hover:border-[#B8874A] text-xs font-mono text-[#111111] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E4E4DF]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono uppercase px-3.5 py-1.5 whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-[#111111] text-white'
                  : 'bg-white text-[#6D6D68] hover:text-[#111111] border border-[#E4E4DF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Stream */}
        <div className="space-y-2 max-h-[480px] overflow-y-auto divide-y divide-[#E4E4DF]">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-[#6D6D68]">
              <p className="font-serif text-2xl">No records matching "{query}"</p>
              <p className="text-xs font-mono mt-1 text-[#9E9E98]">
                Try searching for 'Dharma', 'Avalokiteśvara', 'Ashoka', or 'Nirvana'.
              </p>
            </div>
          ) : (
            filteredResults.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.url)}
                className="group py-4 px-3 hover:bg-white cursor-pointer transition-all flex items-start justify-between gap-6"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8874A] bg-[#F7F7F5] px-2 py-0.5 border border-[#E4E4DF]">
                      {item.category}
                    </span>
                    <h4 className="text-lg sm:text-xl font-serif font-bold text-[#111111] group-hover:text-[#B8874A] transition-colors truncate">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs font-mono text-[#6D6D68]">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#6D6D68] line-clamp-1 font-light">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight className="w-4 h-4 text-[#9E9E98] group-hover:text-[#111111] shrink-0 mt-2 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full pt-8 text-center text-xs font-mono text-[#9E9E98] border-t border-[#E4E4DF]">
        <span>Press ESC to return · {filteredResults.length} knowledge records available</span>
      </div>
    </div>
  );
};
