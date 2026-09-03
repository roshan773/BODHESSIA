import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, BookOpen, Users, Compass, ArrowLeft, ShieldCheck, Heart } from 'lucide-react';
import { MetadataBadge } from '../components/cards/MetadataBadge';
import { useMeditationAudio } from '../context/AudioContext';

interface BuddhaPageProps {
  onNavigate: (route: string) => void;
}

export const BuddhaPage: React.FC<BuddhaPageProps> = ({ onNavigate }) => {
  const { playSingingBowl } = useMeditationAudio();
  const [activeTab, setActiveTab] = useState<'life' | 'disciples' | 'marks' | 'pilgrimage'>('life');

  const lifeStages = [
    {
      num: '01',
      title: 'The Nativity at Lumbini',
      location: 'Lumbini Grove (Modern Nepal)',
      period: 'c. 563 / 490 BCE',
      paliTerm: 'Jāti',
      desc: 'Born to Queen Māyādevī and King Śuddhodana of the Śākya clan. The sage Asita prophesied that the child bore the marks of greatness and would become an Awakened Teacher.',
      quote: 'Aggo’hamasmi lokassa, jeṭṭho’hamasmi lokassa, seṭṭho’hamasmi lokassa — Foremost am I in the world, eldest am I in the world, supreme am I in the world.',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '02',
      title: 'The Four Sights & Renunciation',
      location: 'Kapilavastu to the Anomā River',
      period: 'Age 29',
      paliTerm: 'Abhinikkhamana',
      desc: 'Encountered an old man, a sick man, a corpse, and a tranquil wandering mendicant. Realizing the vulnerability of all beings to suffering, he relinquished the palace and donned the ochre robe.',
      quote: 'Why do I, being myself subject to birth, aging, and death, seek what is also subject to these? Let me seek the unborn, unaging, deathless supreme peace of Nibbāna.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '03',
      title: 'The Ascetic Quest & The Middle Way',
      location: 'Rajgir & Uruvelā Forests',
      period: '6 Years of Severe Discipline',
      paliTerm: 'Dukkaracariyā',
      desc: 'Mastered the formless jhānas with Āḷāra Kālāma and Uddaka Rāmaputta, then practiced extreme fasting with five ascetics until near death, discovering that true clarity requires a tuned Middle Way.',
      quote: 'Just as the lute strings sound pure neither when too tight nor too slack, so energy tuned with balance leads to liberation.',
      image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '04',
      title: 'The Supreme Awakening (Bodhi)',
      location: 'Bodh Gaya (Diamond Throne)',
      period: 'Age 35 (Vesak Full Moon)',
      paliTerm: 'Sammāsambodhi',
      desc: 'Sitting under the Sacred Bodhi tree on the banks of the Nerañjarā River, he overcame the forces of delusion (Māra), remembered past lives in the first watch of the night, perceived the karmic rebirth of all beings in the second, and directly pierced the 12 Links of Dependent Origination in the third.',
      quote: 'Anekajātisaṃsāraṃ sandhāvissaṃ anibbisaṃ... Gahakāraka diṭṭhosi! Puna gehaṃ na kāhasi — Through many a birth I wandered in saṃsāra seeking the housebuilder... O housebuilder, you are seen! You shall build no house again!',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '05',
      title: 'Setting in Motion the Wheel of Dharma',
      location: 'Deer Park (Isipatana / Sarnath)',
      period: 'First Sermon',
      paliTerm: 'Dhammacakkappavattana',
      desc: 'Delivered his first discourse to the five ascetics at Sarnath, proclaiming the Four Noble Truths and the Noble Eightfold Path. The elder Koṇḍañña realized the Dhamma, founding the living Sangha.',
      quote: 'Open are the doors to the Deathless for those who have ears to hear. Let them send forth faith.',
      image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '06',
      title: '45 Years of Universal Ministry',
      location: 'Across Magadha, Kosala, Vajji',
      period: 'Age 35 to 80',
      paliTerm: 'Cārikā',
      desc: 'Traveled on foot establishing monasteries at Jetavana and Veluvana, welcoming kings, outcasts, merchants, and courtesans alike without distinction of caste or birth.',
      quote: 'Not by birth is one an outcast, not by birth is one a noble; by deeds alone is one an outcast, by deeds alone is one noble.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '07',
      title: 'The Mahāparinirvāṇa',
      location: 'Kushinagar (Malla Republic)',
      period: 'Age 80',
      paliTerm: 'Mahāparinibbāna',
      desc: 'Laying between the twin Sal trees with mindful serenity, he answered the final questions of Subhadda, bequeathed the Dhamma and Vinaya as the future teacher, and passed into final Nirvāṇa.',
      quote: 'Vayadhammā saṅkhārā appamādena sampādetha — All conditioned things are subject to disintegration; strive diligently with wakefulness.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const chiefDisciples = [
    { name: 'Sāriputta', title: 'Foremost in Wisdom (Paññā)', desc: 'The Buddha’s right-hand disciple, master of analytical classification and the Abhidhamma.' },
    { name: 'Mahāmoggallāna', title: 'Foremost in Psychic / Spiritual Powers (Iddhi)', desc: 'The Buddha’s left-hand disciple, renowned for unshakeable meditative concentration.' },
    { name: 'Mahākassapa', title: 'Foremost in Austere Ascetic Virtues (Dhutanga)', desc: 'Presided over the First Buddhist Council at Rajgir following the Buddha’s Parinirvana.' },
    { name: 'Ānanda', title: 'Guardian of the Dhamma & Beloved Attendant', desc: 'Possessed flawless photographic memory, reciting all the Suttas at the First Council.' },
    { name: 'Mahāpajāpatī Gotamī', title: 'Foundress of the Bhikkhunī Nuns’ Order', desc: 'The Buddha’s foster mother and aunt who successfully established the order of Buddhist nuns.' },
    { name: 'Khemā & Uppalavaṇṇā', title: 'Foremost Female Disciples in Wisdom & Mastery', desc: 'The two chief female disciples who served as beacons of monastic scholarship.' },
  ];

  const marksOfGreatBeing = [
    'Feet with level tread and 108 auspicious wheel marks on soles',
    'Long, slender fingers and toes with fine webbed lines',
    'Body golden-toned, radiating natural gentle luster',
    'Skin so smooth that dust cannot cling to it',
    'Voice deep, melodious, and resonant like a Karavika bird',
    'Uṣṇīṣa (cranial protuberance) crowned on head',
    'Ūrṇā (luminous curl between eyebrows)'
  ];

  return (
    <div className="pt-24 pb-20 bg-obsidian-950 min-h-screen">
      {/* Hero Banner */}
      <div className="relative py-16 bg-gradient-to-b from-obsidian-900 to-obsidian-950 border-b border-saffron-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-saffron-400 hover:text-saffron-200 mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Museum Portal
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2">
                <MetadataBadge
                  metadata={{
                    status: 'Historical Record',
                    tradition: 'Pan-Buddhist Foundation',
                    source: 'Tipiṭaka / Āgamas / Ashokan Edicts'
                  }}
                  size="md"
                />
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-parchment-100">
                THE BUDDHA (ŚĀKYAMUNI)
              </h1>
              <p className="text-lg font-mono text-saffron-400 italic">
                Siddhārtha Gautama · The Awakened Sage of the Śākyas
              </p>
              <p className="text-sm sm:text-base text-parchment-300 leading-relaxed font-light">
                Born a prince of the Shakya republic in ancient northern India/Nepal, Siddhartha Gautama renounced dynastic succession to resolve the universal crisis of human mortality and suffering. His awakening beneath the Bodhi tree birthed a global philosophical dispensation.
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-card border-saffron-500/25 max-w-sm space-y-2 shrink-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-saffron-400 block">
                Pivotal Historical Dates
              </span>
              <div className="text-xs font-mono text-parchment-300 space-y-1">
                <div>• Birth: Lumbini (c. 563 / 490 BCE)</div>
                <div>• Awakening: Bodh Gaya (Age 35)</div>
                <div>• First Sermon: Sarnath Deer Park</div>
                <div>• Parinirvāṇa: Kushinagar (Age 80)</div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-10 overflow-x-auto border-b border-saffron-500/20 pb-px">
            {[
              { id: 'life', label: '01. The Seven Life Stages', icon: Compass },
              { id: 'disciples', label: '02. Foremost Disciples', icon: Users },
              { id: 'marks', label: '03. Marks of a Great Being', icon: Sparkles },
              { id: 'pilgrimage', label: '04. Four Sacred Pilgrimage Sites', icon: MapPin },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    playSingingBowl(1.05);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap rounded-t-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-saffron-500/20 text-saffron-300 border-t-2 border-saffron-400 font-bold'
                      : 'text-parchment-400 hover:text-parchment-200 hover:bg-obsidian-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {activeTab === 'life' && (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-parchment-100">
                The Seven Life Milestones
              </h2>
              <p className="text-xs sm:text-sm text-parchment-400 mt-1">
                From the royal palace in Kapilavastu to the serene parinirvāṇa under the Sal trees.
              </p>
            </div>

            <div className="space-y-6">
              {lifeStages.map((stage) => (
                <div
                  key={stage.num}
                  className="glass-card rounded-2xl p-6 sm:p-8 border-saffron-500/15 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  <div className="lg:col-span-4 relative aspect-[16/10] rounded-xl overflow-hidden bg-obsidian-950">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 bg-obsidian-950/80 px-2.5 py-0.5 rounded text-xs font-mono text-saffron-400 font-bold border border-saffron-500/20">
                      STAGE {stage.num}
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                      <span className="text-saffron-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {stage.location}
                      </span>
                      <span className="text-parchment-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {stage.period}
                      </span>
                      <span className="text-emerald-400/90 ml-auto italic">
                        {stage.paliTerm}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-parchment-100">
                      {stage.title}
                    </h3>

                    <p className="text-sm text-parchment-300 leading-relaxed font-light">
                      {stage.desc}
                    </p>

                    <blockquote className="p-3.5 rounded-lg bg-obsidian-950/70 border-l-2 border-saffron-500 text-xs font-serif italic text-parchment-200">
                      "{stage.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'disciples' && (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-parchment-100">
                The Foremost Disciples (Arahants)
              </h2>
              <p className="text-xs sm:text-sm text-parchment-400 mt-1">
                Monks and nuns designated by the Buddha as foremost (etadagga) in specific spiritual masteries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chiefDisciples.map((disc, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-6 border-saffron-500/15 space-y-3 hover:border-saffron-500/35 transition-all"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-saffron-400 block">
                    Chief Master
                  </span>
                  <h3 className="text-xl font-serif font-bold text-parchment-100">
                    {disc.name}
                  </h3>
                  <div className="text-xs font-mono text-saffron-300 font-semibold bg-saffron-500/10 p-1.5 rounded border border-saffron-500/20">
                    {disc.title}
                  </div>
                  <p className="text-xs text-parchment-300 leading-relaxed">
                    {disc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'marks' && (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-parchment-100">
                The 32 Marks of a Great Being (Mahāpurisalakkhaṇa)
              </h2>
              <p className="text-xs sm:text-sm text-parchment-400 mt-1">
                From the Lakkhana Sutta (Dīgha Nikāya 30): Ancient physical iconography symbolizing past karmic perfections.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border-saffron-500/20 grid grid-cols-1 md:grid-cols-2 gap-4">
              {marksOfGreatBeing.map((mark, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-obsidian-900/80 border border-saffron-500/10 flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-saffron-400 font-bold shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <p className="text-xs sm:text-sm text-parchment-200 leading-relaxed">
                    {mark}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pilgrimage' && (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-parchment-100">
                The Four Sacred Pilgrimage Places (Cattāri Saṃvejanīyāni Ṭhānāni)
              </h2>
              <p className="text-xs sm:text-sm text-parchment-400 mt-1">
                Directly designated by the Buddha in the Mahāparinibbāna Sutta as places to be visited with reverent devotion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: '1. Lumbini', sub: 'Site of Birth', desc: 'Where the Bodhisatta was born into the human realm.', loc: 'Nepal' },
                { name: '2. Bodh Gaya', sub: 'Site of Supreme Awakening', desc: 'Where the Buddha attained unsurpassed enlightenment beneath the Bodhi tree.', loc: 'Bihar, India' },
                { name: '3. Sarnath (Deer Park)', sub: 'Site of the First Sermon', desc: 'Where the Wheel of Dharma was set into motion.', loc: 'Varanasi, India' },
                { name: '4. Kushinagar', sub: 'Site of Mahāparinirvāṇa', desc: 'Where the Tathāgata passed into the unconditioned element without residue.', loc: 'Uttar Pradesh, India' },
              ].map((site, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-6 border-saffron-500/15 space-y-2"
                >
                  <span className="text-[10px] font-mono text-saffron-400 uppercase tracking-widest">{site.loc}</span>
                  <h3 className="text-xl font-serif font-bold text-parchment-100">{site.name}</h3>
                  <span className="text-xs font-mono text-saffron-300 font-semibold block">{site.sub}</span>
                  <p className="text-xs text-parchment-300 leading-relaxed">{site.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
