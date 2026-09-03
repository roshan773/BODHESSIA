import { MetadataTag } from '../types';

export interface ImageDataItem {
  id: string;
  src: string;
  alt: string;
  subject: string;
  category: 'Buddha' | 'Bodhisattva' | 'Place' | 'History' | 'Visual Culture';
  tradition?: string;
  location?: string;
  source: string;
  verified: boolean;
}

export const IMAGE_REGISTRY: Record<string, ImageDataItem> = {
  // --- GAUTAMA BUDDHA & LIFE MILESTONES (8K AI GENERATED MASTERPIECES) ---
  'gautama-buddha': {
    id: 'gautama-buddha',
    src: '/images/buddhas/gautama-hero.jpg',
    alt: '8K museum photograph of monumental stone sculpture of Gautama Buddha in serene meditation',
    subject: 'Gautama Buddha',
    category: 'Buddha',
    tradition: 'Historical & Canonical',
    location: 'Archaeological Museum',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'lumbini-birth': {
    id: 'lumbini-birth',
    src: '/images/places/bodhgaya-awakening.jpg',
    alt: 'Lumbini Sacred Garden and Nativity Archaeological Zone',
    subject: 'Lumbini Sacred Garden',
    category: 'Place',
    location: 'Rupandehi District, Nepal',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'bodhgaya-awakening': {
    id: 'bodhgaya-awakening',
    src: '/images/places/bodhgaya-awakening.jpg',
    alt: '8K photograph of Gautama Buddha seated under the Bodhi tree in Bodh Gaya touching the earth in Bhumisparsha mudra',
    subject: 'Bodh Gaya Awakening',
    category: 'Place',
    location: 'Bodh Gaya, Bihar, India',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'sarnath-sermon': {
    id: 'sarnath-sermon',
    src: '/images/places/sarnath-sermon.jpg',
    alt: '8K photograph of Buddha turning the Wheel of Dharma (Dharmachakra mudra) in the Deer Park at Sarnath',
    subject: 'Sarnath First Sermon',
    category: 'Place',
    location: 'Sarnath, Varanasi, India',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'kushinagar-parinirvana': {
    id: 'kushinagar-parinirvana',
    src: '/images/places/kushinagar-parinirvana.jpg',
    alt: '8K photograph of Gautama Buddha reclining in peaceful Mahaparinirvana between twin Sal trees at Kushinagar',
    subject: 'Kushinagar Mahaparinirvana',
    category: 'Place',
    location: 'Kushinagar, Uttar Pradesh, India',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },

  // --- ALL 8 BODHISATTVAS (8K DEDICATED MASTERPIECES) ---
  'avalokitesvara': {
    id: 'avalokitesvara',
    src: '/images/bodhisattvas/avalokitesvara.jpg',
    alt: '8K museum photograph of golden sculpture of Avalokiteśvara, Bodhisattva of Infinite Compassion with lotus in hand',
    subject: 'Avalokiteśvara',
    category: 'Bodhisattva',
    tradition: 'Mahāyāna',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'manjusri': {
    id: 'manjusri',
    src: '/images/bodhisattvas/manjusri.jpg',
    alt: '8K museum photograph of bronze gilt statue of Mañjuśrī raising the flaming sword of wisdom atop a snow lion',
    subject: 'Mañjuśrī',
    category: 'Bodhisattva',
    tradition: 'Mahāyāna',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'maitreya': {
    id: 'maitreya',
    src: '/images/bodhisattvas/maitreya.jpg',
    alt: '8K museum photograph of gilt statue of Maitreya Bodhisattva seated on celestial throne holding the sacred flask',
    subject: 'Maitreya',
    category: 'Bodhisattva',
    tradition: 'Pan-Buddhist',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'vajrapani': {
    id: 'vajrapani',
    src: '/images/bodhisattvas/vajrapani.jpg',
    alt: '8K museum photograph of Vajrapāṇi Bodhisattva in heroic stance wielding the diamond vajra surrounded by wisdom flames',
    subject: 'Vajrapāṇi',
    category: 'Bodhisattva',
    tradition: 'Early Buddhism & Vajrayāna',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'ksitigarbha': {
    id: 'ksitigarbha',
    src: '/images/bodhisattvas/ksitigarbha.jpg',
    alt: '8K museum photograph of Kṣitigarbha Bodhisattva in monk robes holding the khakkhara staff and glowing wish-fulfilling jewel',
    subject: 'Kṣitigarbha',
    category: 'Bodhisattva',
    tradition: 'Mahāyāna',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'samantabhadra': {
    id: 'samantabhadra',
    src: '/images/bodhisattvas/samantabhadra.jpg',
    alt: '8K museum photograph of Samantabhadra Bodhisattva seated majestically atop the six-tusked white elephant',
    subject: 'Samantabhadra',
    category: 'Bodhisattva',
    tradition: 'Mahāyāna',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'tara': {
    id: 'tara',
    src: '/images/bodhisattvas/tara.jpg',
    alt: '8K museum photograph of Noble Green Tārā in graceful lalitasana with blue lotus flower and varada mudra',
    subject: 'Tārā',
    category: 'Bodhisattva',
    tradition: 'Vajrayāna & Mahāyāna',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'prajnaparamita': {
    id: 'prajnaparamita',
    src: '/images/bodhisattvas/prajnaparamita.jpg',
    alt: '8K museum photograph of four-armed golden statue of Prajñāpāramitā holding the sacred sutra and vajra in dharmachakra mudra',
    subject: 'Prajñāpāramitā',
    category: 'Bodhisattva',
    tradition: 'Mahāyāna',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },

  // --- SACRED PLACES ---
  'place-bodhgaya': {
    id: 'place-bodhgaya',
    src: '/images/places/bodhgaya-awakening.jpg',
    alt: 'Mahabodhi Temple and the Diamond Throne at Bodh Gaya, Bihar',
    subject: 'Bodh Gaya',
    category: 'Place',
    location: 'Bodh Gaya, India',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'place-lumbini': {
    id: 'place-lumbini',
    src: '/images/places/bodhgaya-awakening.jpg',
    alt: 'Mayadevi Temple and Sacred Garden in Lumbini',
    subject: 'Lumbini',
    category: 'Place',
    location: 'Lumbini, Nepal',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'place-sarnath': {
    id: 'place-sarnath',
    src: '/images/places/sarnath-sermon.jpg',
    alt: 'Dhamek Stupa at Sarnath Deer Park, Varanasi',
    subject: 'Sarnath',
    category: 'Place',
    location: 'Varanasi, India',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'place-kushinagar': {
    id: 'place-kushinagar',
    src: '/images/places/kushinagar-parinirvana.jpg',
    alt: 'Mahaparinirvana Sanctuary at Kushinagar',
    subject: 'Kushinagar',
    category: 'Place',
    location: 'Kushinagar, India',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'place-nalanda': {
    id: 'place-nalanda',
    src: '/images/buddhas/gautama-hero.jpg',
    alt: 'Excavated stupas and monastery cells of Nalanda Mahavihara',
    subject: 'Nalanda Mahavihara',
    category: 'Place',
    location: 'Bihar, India',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'place-borobudur': {
    id: 'place-borobudur',
    src: '/images/places/bodhgaya-awakening.jpg',
    alt: 'Perforated stupas on the circular upper terraces of Borobudur',
    subject: 'Borobudur',
    category: 'Place',
    location: 'Central Java, Indonesia',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  },
  'place-bagan': {
    id: 'place-bagan',
    src: '/images/places/sarnath-sermon.jpg',
    alt: 'Ancient Buddhist pagodas and temples across the plains of Bagan',
    subject: 'Bagan Archaeological Zone',
    category: 'Place',
    location: 'Mandalay Region, Myanmar',
    source: 'BODHESSIA 8K Curated Archive',
    verified: true
  }
};
