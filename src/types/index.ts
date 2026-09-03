export type TraditionCategory = 'Theravāda' | 'Mahāyāna' | 'Vajrayāna' | 'Early Buddhism' | 'Cross-Tradition' | 'Archaeological' | string;

export type StatusCategory = 'Canonical Text' | 'Historical Record' | 'Traditional Account' | 'Scholarly Interpretation' | 'Archaeological Evidence' | string;

export interface MetadataTag {
  tradition?: TraditionCategory;
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
  era: string;
  bodhiTree: string;
  bodhiTreeScientific?: string;
  lifespan: string;
  height?: string;
  birthplace?: string;
  royalLineage?: string;
  parents?: { father: string; mother: string };
  chiefDisciples?: string[];
  description: string;
  significance?: string;
  imageUrl: string;
  quote?: string;
  metadata: MetadataTag;
  relatedConcepts?: string[];
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
  relatedConcepts?: string[];
}

export interface TeachingDetail {
  id: string;
  title: string;
  subtitle?: string;
  paliName: string;
  sanskritName?: string;
  category: string;
  summary: string;
  keyComponents: {
    title: string;
    paliTerm?: string;
    explanation: string;
    practicalApplication?: string;
  }[];
  canonicalPassage?: {
    text: string;
    source: string;
  };
  metaphorOrParadigm?: string;
  metadata: MetadataTag;
  relatedConcepts?: string[];
}

export interface SymbolDetail {
  id: string;
  name: string;
  sanskritName: string;
  paliName?: string;
  category: string;
  tradition?: string;
  meaning: string;
  originPeriod: string;
  archaeologicalFinds?: string;
  iconographyNotes: string;
  svgType: string;
  description: string;
  metadata: MetadataTag;
  relatedConcepts?: string[];
}

export interface HistoryEra {
  id: string;
  era: string;
  period: string;
  title: string;
  subtitle: string;
  region: string;
  description: string;
  movementDescription?: string;
  keyEvents: string[];
  keyFigures: string[];
  monumentalSites: string[];
  imageUrl: string;
  metadata: MetadataTag;
}

export interface SacredPlace {
  id: string;
  name: string;
  ancientName?: string;
  country: string;
  region: string;
  significance?: string;
  historicalSignificance?: string;
  unescoYear?: number;
  designation: string;
  description: string;
  imageUrl: string;
  coordinates?: { lat: number; lng: number };
  metadata: MetadataTag;
}

export interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Buddha' | 'Bodhisattva' | 'Teaching' | 'Symbol' | 'History' | 'Place' | 'General';
  url: string;
  description: string;
  tags: string[];
}
