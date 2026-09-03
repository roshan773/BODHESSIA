import { SacredPlace } from '../types';

export const SACRED_PLACES: SacredPlace[] = [
  {
    id: 'bodh-gaya',
    name: 'Bodh Gaya (Mahabodhi Temple)',
    ancientName: 'Uruvelā / Sambodhi',
    country: 'India',
    region: 'Bihar State, Gaya District',
    designation: 'Site of the Buddha’s Supreme Awakening',
    description: 'The physical and spiritual spiritual heart of the Buddhist world. Here, beneath the shelter of the Sacred Bodhi Tree on the banks of the Falgu (Nerañjarā) River, Siddhartha Gautama attained supreme awakening at age 35. The magnificent pyramidal Mahabodhi Temple rises 55 meters above the Diamond Throne (Vajrāsana).',
    historicalSignificance: 'First monumental temple founded by Emperor Ashoka in the 3rd century BCE; current brick tower dates to the Gupta / late-Pala era.',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    unescoYear: 2002,
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Archaeological Survey of India & UNESCO',
      status: 'Archaeological Evidence',
      period: 'c. 3rd c. BCE – Present',
      region: 'Magadha, India'
    }
  },
  {
    id: 'lumbini',
    name: 'Lumbini Sacred Garden',
    ancientName: 'Lumbinīvanam',
    country: 'Nepal',
    region: 'Rupandehi District, Lumbini Province',
    designation: 'Birthplace of Prince Siddhārtha Gautama',
    description: 'The tranquil grove where Queen Māyādevī gave birth to Siddhartha Gautama in the 6th/5th century BCE while traveling to her maternal home. The site features the ancient Maya Devi Temple, the Marker Stone pinpointing the exact birth spot, the sacred Pushkarini pond, and Emperor Ashoka’s pillar.',
    historicalSignificance: 'Emperor Ashoka visited in 249 BCE and erected a monolithic sandstone pillar with Brahmi inscription declaring: "Hida Budhe jāte Sakyamunīti" (Here the Buddha, Sage of the Shakyas, was born).',
    imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80',
    unescoYear: 1997,
    metadata: {
      tradition: 'Early Buddhism',
      source: 'Ashoka Lumbini Pillar Edict & UNESCO',
      status: 'Archaeological Evidence',
      period: '6th c. BCE / 249 BCE Inscription',
      region: 'Tarai, Nepal'
    }
  },
  {
    id: 'sarnath',
    name: 'Sarnath (Deer Park / Isipatana)',
    ancientName: 'Ṛṣipatana Mṛgadāva',
    country: 'India',
    region: 'Uttar Pradesh (Varanasi)',
    designation: 'Site of the First Sermon (Dhammacakkappavattana Sutta)',
    description: 'Located 10 km northeast of Varanasi, Sarnath is where the Buddha preached his inaugural sermon to the five ascetics, setting in motion the Wheel of Dharma (Dhammacakka). Features the massive cylindrical Dhamek Stupa (43.6 meters tall) and the ruins of ancient viharas.',
    historicalSignificance: 'Birthplace of the Buddhist Sangha. Excavations unearthed the world-famous Ashoka Lion Capital (now the National Emblem of India).',
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80',
    unescoYear: 1998,
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Archaeological Survey of India',
      status: 'Archaeological Evidence',
      region: 'Varanasi, India'
    }
  },
  {
    id: 'kushinagar',
    name: 'Kushinagar (Mahāparinirvāṇa Site)',
    ancientName: 'Kusinārā (Malla Republic)',
    country: 'India',
    region: 'Uttar Pradesh',
    designation: 'Site of the Buddha’s Mahāparinirvāṇa',
    description: 'The peaceful Sal grove of the Mallas where the 80-year-old Buddha lay between twin Sal trees, delivered his final exhortation on diligence, and passed into final Nirvāṇa. Houses the Mahaparinirvana Temple with a sublime 6.1-meter-long reclining stone Buddha statue carved from Chunar sandstone in the 5th century CE.',
    historicalSignificance: 'Site of the Ramabhar Stupa where the Buddha’s holy body was cremated and relics partitioned among eight regional clans.',
    imageUrl: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1200&q=80',
    unescoYear: 1998,
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Mahāparinibbāna Sutta & Epigraphy',
      status: 'Archaeological Evidence',
      region: 'Uttar Pradesh, India'
    }
  },
  {
    id: 'nalanda',
    name: 'Nalanda Mahavihara Ruins',
    ancientName: 'Nālandā',
    country: 'India',
    region: 'Bihar State, Nalanda District',
    designation: 'Ancient World’s Premier Buddhist University',
    description: 'The monumental archaeological ruins of a monastic and scholastic university that operated from the 5th century to 1200 CE. Comprises eleven monastery compounds (viharas) and six monumental brick temples, notably Temple No. 3 with its corner stupas and stucco carvings.',
    historicalSignificance: 'Educated renowned scholars including Nagarjuna, Aryadeva, Dharmakirti, Xuanzang, and Shantarakshita.',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    unescoYear: 2016,
    metadata: {
      tradition: 'Cross-Tradition (Nalanda Scholastic)',
      source: 'UNESCO World Heritage Archive',
      status: 'Archaeological Evidence'
    }
  },
  {
    id: 'borobudur',
    name: 'Borobudur Temple Compound',
    ancientName: 'Bhūmisaṃbhāra Bhūdhara',
    country: 'Indonesia',
    region: 'Central Java (Kedu Plain)',
    designation: 'World’s Largest Buddhist Monument & 3D Stone Mandala',
    description: 'A colossal 9th-century Mahāyāna Buddhist temple built during the reign of the Sailendra Dynasty. Built like a stepped pyramid without mortar, it features 9 stacked platforms (6 square, 3 circular), 2,672 relief panels, and 504 Buddha statues, culminating in 72 perforated stupas surrounding a supreme central stupa.',
    historicalSignificance: 'A colossal stone map of Buddhist cosmology moving from the realm of desires (Kāmadhātu) through form (Rūpadhātu) to formlessness (Arūpadhātu).',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    unescoYear: 1991,
    metadata: {
      tradition: 'Mahāyāna & Vajrayāna',
      source: 'UNESCO & Archaeological Records',
      status: 'Archaeological Evidence'
    }
  },
  {
    id: 'bagan',
    name: 'Bagan Archaeological Zone',
    ancientName: 'Arimaddanapura (City of the Enemy-Crusher)',
    country: 'Myanmar',
    region: 'Mandalay Region (Irrawaddy River Plain)',
    designation: 'Ancient Capital of 2,200+ Golden Brick Temples',
    description: 'An awe-inspiring plain studded with more than 2,000 surviving Buddhist temples, stupas, and monasteries built between the 11th and 13th centuries CE by the kings of the Pagan Empire, including Ananda Temple, Dhammayangyi, and Shwezigon Pagoda.',
    historicalSignificance: 'The historic crucible where Theravāda Buddhism became firmly rooted as the national faith of Myanmar.',
    imageUrl: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1200&q=80',
    unescoYear: 2019,
    metadata: {
      tradition: 'Theravāda',
      source: 'UNESCO & Burmese Royal Chronicles',
      status: 'Archaeological Evidence'
    }
  },
  {
    id: 'potala-palace',
    name: 'Potala Palace & Jokhang Temple',
    ancientName: 'Potala (Mount Potalaka of Avalokiteśvara)',
    country: 'Tibet (Himalayas)',
    region: 'Lhasa Valley',
    designation: 'Sacred Heart of Tibetan Vajrayāna Buddhism',
    description: 'Rising 300 meters above the Lhasa valley on Marpo Ri (Red Hill), the Potala Palace was the winter residence of the Dalai Lamas from 1649 until 1959. It houses 1,000 rooms, 10,000 shrines, 200,000 statues, and golden reliquary stupas of past Dalai Lamas.',
    historicalSignificance: 'Together with the nearby Jokhang Temple (housing the sacred Jowo Rinpoche statue consecrated in the 7th century), it represents the architectural apex of Himalayan civilization.',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    unescoYear: 1994,
    metadata: {
      tradition: 'Vajrayāna / Tibetan Buddhism',
      source: 'UNESCO World Heritage Centre',
      status: 'Historical Record'
    }
  }
];
