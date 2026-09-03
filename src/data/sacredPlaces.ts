import { SacredPlace } from '../types';
import { IMAGE_REGISTRY } from './images';

export const SACRED_PLACES: SacredPlace[] = [
  {
    id: 'bodh-gaya',
    name: 'Bodh Gaya (Mahābodhi Temple Complex)',
    ancientName: 'Uruvelā / Sambodhi',
    country: 'India',
    region: 'Gaya District, Bihar',
    designation: 'Site of Supreme Awakening (Bodhimanda)',
    description: 'The supreme spiritual center of the Buddhist world. Contains the Diamond Throne (Vajrāsana) where Siddhārtha Gautama attained complete enlightenment, the sacred Bodhi Tree (Ficus religiosa) descended from the original sapling, and the 55-meter grand pyramidal temple.',
    historicalSignificance: 'Emperor Ashoka established the first shrine and Diamond Throne in the 3rd century BCE. Extensively excavated and restored as a UNESCO World Heritage site.',
    imageUrl: IMAGE_REGISTRY['place-bodhgaya'].src,
    unescoYear: 2002,
    coordinates: { lat: 24.6951, lng: 84.9913 },
    metadata: {
      tradition: 'Pan-Buddhist',
      source: 'Archaeological Survey of India / UNESCO',
      status: 'Archaeological Evidence',
      period: '3rd c. BCE – Present',
      region: 'Magadha, India'
    }
  },
  {
    id: 'lumbini',
    name: 'Lumbini Sacred Garden & Mayadevi Temple',
    ancientName: 'Lumbinīvanam',
    country: 'Nepal',
    region: 'Rupandehi District, Lumbini Province',
    designation: 'Birthplace of Siddhārtha Gautama',
    description: 'The sacred grove where Queen Māyādevī gave birth to Prince Siddhārtha in the 6th/5th century BCE. Features the Ashoka Pillar bearing the famous Brahmi inscription verifying the birthplace, the Nativity marker stone, and ancient monastic ruins.',
    historicalSignificance: 'Emperor Ashoka visited in 249 BCE, erected a commemorative sandstone pillar with the inscription: "Hida Budhe jāte Sakyamunīti" (Here the Buddha Sakyamuni was born).',
    imageUrl: IMAGE_REGISTRY['place-lumbini'].src,
    unescoYear: 1997,
    coordinates: { lat: 27.4833, lng: 83.2764 },
    metadata: {
      tradition: 'Pan-Buddhist',
      source: 'Lumbini Development Trust / UNESCO',
      status: 'Archaeological Evidence',
      period: 'c. 6th c. BCE – 3rd c. BCE',
      region: 'Tarai, Nepal'
    }
  },
  {
    id: 'sarnath',
    name: 'Sarnath (Deer Park / Isipatana)',
    ancientName: 'Isipatana Migadāya / Ṛṣipatana',
    country: 'India',
    region: 'Varanasi District, Uttar Pradesh',
    designation: 'Site of the Inaugural Sermon (Dhammacakka)',
    description: 'Located 10 km northeast of Varanasi, this is where the Buddha preached the First Sermon (Dhammacakkappavattana Sutta) to the five ascetics. Dominated by the massive cylindrical Dhamek Stupa (43.6 meters tall) and the ruins of Dharmarajika Stupa.',
    historicalSignificance: 'Birthplace of the Buddhist Sangha. Site of the celebrated Ashoka Lion Capital (now the national emblem of the Republic of India).',
    imageUrl: IMAGE_REGISTRY['place-sarnath'].src,
    unescoYear: 1998,
    coordinates: { lat: 25.3811, lng: 83.0214 },
    metadata: {
      tradition: 'Pan-Buddhist',
      source: 'Archaeological Survey of India',
      status: 'Archaeological Evidence',
      region: 'Uttar Pradesh, India'
    }
  },
  {
    id: 'kushinagar',
    name: 'Kushinagar (Mahāparinirvāṇa Sanctuary)',
    ancientName: 'Kusinārā',
    country: 'India',
    region: 'Kushinagar District, Uttar Pradesh',
    designation: 'Site of the Buddha’s Mahāparinirvāṇa',
    description: 'The ancient capital of the Malla republic where the Buddha entered final Nirvāṇa between twin Sal trees at age 80. Houses the Mahāparinirvāṇa Temple with a 6.1-meter monolith reclining Buddha statue carved from Chunar sandstone, and the Ramabhar Stupa (cremation site).',
    historicalSignificance: 'Excavated by Alexander Cunningham and A.C.L. Carlleyle in the late 19th century, confirming the location through 5th-century copper-plate inscriptions.',
    imageUrl: IMAGE_REGISTRY['place-kushinagar'].src,
    unescoYear: 1998,
    coordinates: { lat: 26.7408, lng: 83.8889 },
    metadata: {
      tradition: 'Pan-Buddhist',
      source: 'Archaeological Survey of India',
      status: 'Archaeological Evidence',
      region: 'Uttar Pradesh, India'
    }
  },
  {
    id: 'nalanda',
    name: 'Nalanda Mahavihara (Ancient Monastic University)',
    ancientName: 'Nālandā Mahāvihāra',
    country: 'India',
    region: 'Nalanda District, Bihar',
    designation: 'Premier Ancient Buddhist University (5th–12th Century)',
    description: 'The greatest residential monastic university of the ancient world, housing over 10,000 students and 2,000 renowned scholars including Nāgārjuna, Dignāga, Dharmakīrti, and Śāntarakṣita. Features stupas, viharas, shrines, and cell complexes.',
    historicalSignificance: 'Flourished under Gupta and Pāla patronage. Documented by Chinese pilgrims Xuanzang and Yijing. A UNESCO World Heritage archaeological site.',
    imageUrl: IMAGE_REGISTRY['place-nalanda'].src,
    unescoYear: 2016,
    coordinates: { lat: 25.1357, lng: 85.4447 },
    metadata: {
      tradition: 'Mahāyāna & Vajrayāna Scholasticism',
      source: 'Archaeological Survey of India / UNESCO',
      status: 'Archaeological Evidence'
    }
  },
  {
    id: 'borobudur',
    name: 'Borobudur Temple Compounds',
    ancientName: 'Kamulan Bhūmisambhāra Bhūdhara',
    country: 'Indonesia',
    region: 'Magelang, Central Java',
    designation: 'World’s Largest Buddhist Stupa-Mandala Monument',
    description: 'A 9th-century Mahāyāna Buddhist monument built during the Sailendra dynasty. Conceived as a colossal three-dimensional cosmic mandala with 504 Buddha statues, 72 perforated stupas, and 2,672 narrative relief panels detailing the Karmavibhaṅga, Lalitavistara, and Gaṇḍavyūha.',
    historicalSignificance: 'The zenith of Javanese Buddhist architecture, synthesizing Gupta-influenced art with indigenous Indonesian megalithic stepped pyramid traditions.',
    imageUrl: IMAGE_REGISTRY['place-borobudur'].src,
    unescoYear: 1991,
    coordinates: { lat: -7.6079, lng: 110.2038 },
    metadata: {
      tradition: 'Mahāyāna & Vajrayāna',
      source: 'UNESCO World Heritage Centre',
      status: 'Archaeological Evidence'
    }
  },
  {
    id: 'bagan',
    name: 'Bagan Archaeological Zone',
    ancientName: 'Pukam / Arimaddanapura',
    country: 'Myanmar',
    region: 'Mandalay Region',
    designation: 'Theravāda Monumental Temple Landscape',
    description: 'The ancient capital of the Pagan Kingdom containing over 3,500 Buddhist temples, pagodas, and monasteries built between the 11th and 13th centuries across a sacred riverine plain. Centers include Ananda Temple, Dhammayangyi, and Shwezigon Pagoda.',
    historicalSignificance: 'Established Theravāda Buddhism as the state religion under King Anawrahta following the reception of the Mon Tipiṭaka.',
    imageUrl: IMAGE_REGISTRY['place-bagan'].src,
    unescoYear: 2019,
    coordinates: { lat: 21.1717, lng: 94.8585 },
    metadata: {
      tradition: 'Theravāda',
      source: 'Department of Archaeology Myanmar / UNESCO',
      status: 'Archaeological Evidence'
    }
  }
];
