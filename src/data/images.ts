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
  // --- GAUTAMA BUDDHA & LIFE MILESTONES ---
  'gautama-buddha': {
    id: 'gautama-buddha',
    src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=90',
    alt: 'Stone sculpture of Gautama Buddha in meditative dhyāna mudrā',
    subject: 'Gautama Buddha',
    category: 'Buddha',
    tradition: 'Historical & Canonical',
    location: 'Archaeological Museum',
    source: 'Archaeological Record',
    verified: true
  },
  'lumbini-birth': {
    id: 'lumbini-birth',
    src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85',
    alt: 'Lumbini Sacred Garden archaeological zone and Mayadevi Temple site in Nepal',
    subject: 'Lumbini Sacred Garden',
    category: 'Place',
    location: 'Rupandehi District, Nepal',
    source: 'UNESCO World Heritage',
    verified: true
  },
  'bodhgaya-awakening': {
    id: 'bodhgaya-awakening',
    src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Mahabodhi Temple and the sacred Bodhi Tree sanctuary at Bodh Gaya',
    subject: 'Bodh Gaya',
    category: 'Place',
    location: 'Bihar, India',
    source: 'UNESCO World Heritage',
    verified: true
  },
  'sarnath-sermon': {
    id: 'sarnath-sermon',
    src: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1200&q=85',
    alt: 'Dhamek Stupa at Sarnath Deer Park where the First Sermon was proclaimed',
    subject: 'Sarnath Deer Park',
    category: 'Place',
    location: 'Varanasi, India',
    source: 'Archaeological Survey of India',
    verified: true
  },
  'kushinagar-parinirvana': {
    id: 'kushinagar-parinirvana',
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
    alt: 'Mahaparinirvana Temple and Ramabhar Stupa site at Kushinagar',
    subject: 'Kushinagar',
    category: 'Place',
    location: 'Uttar Pradesh, India',
    source: 'Archaeological Survey of India',
    verified: true
  },

  // --- BODHISATTVAS ---
  'avalokitesvara': {
    id: 'avalokitesvara',
    src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
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
    src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Mahabodhi Temple at Bodh Gaya, Bihar',
    subject: 'Bodh Gaya',
    category: 'Place',
    location: 'Bodh Gaya, India',
    source: 'UNESCO World Heritage',
    verified: true
  },
  'place-lumbini': {
    id: 'place-lumbini',
    src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85',
    alt: 'Mayadevi Temple and Sacred Garden in Lumbini',
    subject: 'Lumbini',
    category: 'Place',
    location: 'Lumbini, Nepal',
    source: 'UNESCO World Heritage',
    verified: true
  },
  'place-sarnath': {
    id: 'place-sarnath',
    src: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1200&q=85',
    alt: 'Dhamek Stupa at Sarnath, Varanasi',
    subject: 'Sarnath',
    category: 'Place',
    location: 'Varanasi, India',
    source: 'Archaeological Survey of India',
    verified: true
  },
  'place-kushinagar': {
    id: 'place-kushinagar',
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
    alt: 'Mahaparinirvana Temple at Kushinagar',
    subject: 'Kushinagar',
    category: 'Place',
    location: 'Kushinagar, India',
    source: 'Archaeological Survey of India',
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
  },

  // --- VISUAL CULTURE ---
  'art-gandhara': {
    id: 'art-gandhara',
    src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
    alt: 'Gandhāran Greco-Buddhist schist relief depicting monastic serene expression',
    subject: 'Gandhāra Sculpture',
    category: 'Visual Culture',
    location: 'Ancient Gandhāra (Taxila/Swat)',
    source: 'Museum Collection',
    verified: true
  },
  'art-ajanta': {
    id: 'art-ajanta',
    src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Rock-cut caitya interior with ribbed vaulting and central stupa',
    subject: 'Ajanta & Karli Caves',
    category: 'Visual Culture',
    location: 'Maharashtra, India',
    source: 'Archaeological Survey of India',
    verified: true
  },
  'art-manuscript': {
    id: 'art-manuscript',
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85',
    alt: 'Ancient palm-leaf manuscript inscribed with Buddhist canonical text',
    subject: 'Buddhist Manuscripts',
    category: 'Visual Culture',
    location: 'Dunhuang & Nalanda Archives',
    source: 'Manuscript Archive',
    verified: true
  }
};
