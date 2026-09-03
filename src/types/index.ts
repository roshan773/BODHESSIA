export type TraditionCategory = 'Theravāda' | 'Mahāyāna' | 'Vajrayāna' | 'Early Buddhism' | 'Cross-Tradition' | 'Archaeological';

export type StatusCategory = 'Canonical Text' | 'Historical Record' | 'Traditional Account' | 'Scholarly Interpretation' | 'Archaeological Evidence';

export interface MetadataTag {
  tradition?: TraditionCategory | string;
  source?: string;
  status: StatusCategory;
  period?: string;
  region?: string;
}

export interface BuddhaDetail {
  id: string;
  number: number;
  paliName: string;
  sanskritName?: string;
  meaning: string;
  era: string; // e.g., 'Asaṅkheyya Aeon', 'Current Bhaddakappa'
  bodhiTree: string;
  bodhiTreeScientific?: string;
  lifespan: string;
  height?: string;
  birthplace?: string;
  royalLineage?: string;
  parents?: { father: string; mother: string };
  chiefDisciples?: string[];
  description: string;
  significance: string;
  imageUrl: string;
  quote?: string;
  metadata: MetadataTag;
  relatedConcepts: string[];
}

export interface BodhisattvaDetail {
  id: string;
  name: string;
  sanskritName: string;
  chineseName?: string;
  tibetanName?: string;
  japaneseName?: string;
  quality: string;
  embodiment: string;
  iconography: string[];
  tradition: string;
  mantra?: string;
  abode?: string;
  description: string;
  vows: string;
  canonicalSource: string;
  imageUrl: string;
  metadata: MetadataTag;
  relatedConcepts: string[];
}

export interface TeachingDetail {
  id: string;
  title: string;
  paliName: string;
  sanskritName: string;
  subtitle: string;
  category: 'Core Doctrine' | 'Ethics & Practice' | 'Ontology' | 'Liberation';
  summary: string;
  keyComponents: {
    title: string;
    paliTerm?: string;
    explanation: string;
    practicalApplication?: string;
  }[];
  metaphorOrParadigm?: string;
  canonicalPassage?: {
    text: string;
    source: string;
  };
  metadata: MetadataTag;
  relatedConcepts: string[];
}

export interface SymbolDetail {
  id: string;
  name: string;
  sanskritName: string;
  paliName?: string;
  meaning: string;
  category: 'Aniconic Emblem' | 'Ashtamangala (Eight Auspicious)' | 'Cosmological' | 'Ritual';
  originPeriod: string;
  tradition: string;
  description: string;
  iconographyNotes: string;
  archaeologicalFinds?: string;
  svgType: 'dharmachakra' | 'lotus' | 'bodhitree' | 'stupa' | 'endlessknot' | 'vajra' | 'conch' | 'footprints' | 'trisula' | 'parasol';
  metadata: MetadataTag;
  relatedConcepts: string[];
}

export interface HistoryEra {
  id: string;
  era: string;
  period: string;
  title: string;
  subtitle: string;
  region: string;
  keyEvents: string[];
  keyFigures: string[];
  monumentalSites: string[];
  description: string;
  movementDescription: string;
  imageUrl: string;
  metadata: MetadataTag;
}

export interface SacredPlace {
  id: string;
  name: string;
  ancientName?: string;
  country: string;
  region: string;
  designation: string; // e.g. "Site of Awakening", "Site of First Sermon"
  coordinates?: { lat: number; lng: number };
  description: string;
  historicalSignificance: string;
  imageUrl: string;
  unescoYear?: number;
  metadata: MetadataTag;
}

export interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Buddha' | 'Bodhisattva' | 'Teaching' | 'Symbol' | 'History' | 'Place';
  url: string;
  description: string;
  tags: string[];
}
