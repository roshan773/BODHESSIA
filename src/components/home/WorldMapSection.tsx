import React from 'react';
import { WorldMapInteractive } from '../visual/WorldMapInteractive';

export const WorldMapSection: React.FC = () => {
  return (
    <section className="py-20 bg-obsidian-950 border-t border-saffron-500/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorldMapInteractive />
      </div>
    </section>
  );
};
