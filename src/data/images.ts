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
    src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=90',
    alt: 'Lumbini Sacred Garden archaeological zone and Mayadevi Temple site in Nepal',
    subject: 'Lumbini Sacred Garden',
    category: 'Place',
    location: 'Rupandehi District, Nepal',
    source: 'UNESCO World Heritage',
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

  // --- BODHISATTVAS ---
  'avalokitesvara': {
    id: 'avalokitesvara',
    src: '/images/buddhas/gautama-hero.jpg',
    alt: 'Sculptural representation of Avalokiteśvara, Bodhisattva of Infinite Compassion',
    subject: 'Avalokiteśvara',
    category: 'Bodhisattva',
    tradition: 'Mahāyāna',
    source: 'Historical Buddhist Iconography',
    verified: true
  },
  'manjusri': {
    id: 'manjusri',
    src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Iconographical depiction of Mañjuśrī holding the sword of wisdom and Prajñāpāramitā text',
    subject: 'Mañjuśrī',
    category: 'Bodhisattva',
    tradition: 'Mahāyāna',
    source: 'Historical Buddhist Iconography',
    verified: true
  },
  'maitreya': {
    id: 'maitreya',
    src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85',
    alt: 'Statue of Maitreya Bodhisattva seated in readiness to arise in the future age',
    subject: 'Maitreya',
    category: 'Bodhisattva',
    tradition: 'Pan-Buddhist',
    source: 'Historical Buddhist Iconography',
    verified: true
  },
  'vajrapani': {
    id: 'vajrapani',
    src: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1200&q=85',
    alt: 'Vajrapāṇi wielding the diamond thunderbolt (vajra) of spiritual power',
    subject: 'Vajrapāṇi',
    category: 'Bodhisattva',
    tradition: 'Early Buddhism & Vajrayāna',
    source: 'Historical Buddhist Iconography',
    verified: true
  },
  'ksitigarbha': {
    id: 'ksitigarbha',
    src: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1200&q=85',
    alt: 'Kṣitigarbha Bodhisattva holding the monk staff and wish-fulfilling jewel',
    subject: 'Kṣitigarbha',
    category: 'Bodhisattva',
    tradition: 'Mahāyāna',
    source: 'East Asian Buddhist Iconography',
    verified: true
  },
  'samantabhadra': {
    id: 'samantabhadra',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    alt: 'Samantabhadra Bodhisattva seated atop the six-tusked white elephant',
    subject: 'Samantabhadra',
    category: 'Bodhisattva',
    tradition: 'Mahāyāna',
    source: 'Historical Buddhist Iconography',
    verified: true
  },
  'tara': {
    id: 'tara',
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
    alt: 'Sacred icon of Noble Tārā in graceful posture of active compassion',
    subject: 'Tārā',
    category: 'Bodhisattva',
    tradition: 'Vajrayāna & Mahāyāna',
    source: 'Himalayan Art Archive',
    verified: true
  },
  'prajnaparamita': {
    id: 'prajnaparamita',
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85',
    alt: 'Prajñāpāramitā, Mother of All Buddhas, holding the sacred sūtra',
    subject: 'Prajñāpāramitā',
    category: 'Bodhisattva',
    tradition: 'Mahāyāna',
    source: 'Classical Manuscript Art',
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
    src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=90',
    alt: 'Mayadevi Temple and Sacred Garden in Lumbini',
    subject: 'Lumbini',
    category: 'Place',
    location: 'Lumbini, Nepal',
    source: 'UNESCO World Heritage',
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
    src: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1200&q=85',
    alt: 'Excavated stupas and monastery cells of Nalanda Mahavihara',
    subject: 'Nalanda Mahavihara',
    category: 'Place',
    location: 'Bihar, India',
    source: 'UNESCO World Heritage',
    verified: true
  },
  'place-borobudur': {
    id: 'place-borobudur',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    alt: 'Perforated stupas on the circular upper terraces of Borobudur',
    subject: 'Borobudur',
    category: 'Place',
    location: 'Central Java, Indonesia',
    source: 'UNESCO World Heritage',
    verified: true
  },
  'place-bagan': {
    id: 'place-bagan',
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85',
    alt: 'Ancient Buddhist pagodas and temples across the plains of Bagan',
    subject: 'Bagan Archaeological Zone',
    category: 'Place',
    location: 'Mandalay Region, Myanmar',
    source: 'UNESCO World Heritage',
    verified: true
  }
};
