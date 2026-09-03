import { HistoryEra } from '../types';

export const HISTORY_ERAS: HistoryEra[] = [
  {
    id: 'ancient-india-origins',
    era: 'Era 01',
    period: 'c. 6th–5th Century BCE',
    title: 'Ancient India & The Magadha Awakening',
    subtitle: 'Urbanization, the Śramaṇa movement, and the emergence of the Middle Way.',
    region: 'Gangetic Plains (Magadha, Kosala, Vajji)',
    keyEvents: [
      'Renunciation of Prince Siddhartha in Kapilavastu',
      'Supreme Enlightenment under the Bodhi Tree at Bodh Gaya (Uruvela)',
      'Turning of the Wheel of Dharma at Sarnath Deer Park',
      'Establishment of the Bhikkhu and Bhikkhunī monastic Sangha'
    ],
    keyFigures: ['Siddhārtha Gautama', 'King Bimbisāra of Magadha', 'King Pasenadi of Kosala', 'Anāthapiṇḍika'],
    monumentalSites: ['Bodh Gaya', 'Sarnath', 'Rajgir (Vulture Peak)', 'Sravasti (Jetavana)'],
    description: 'During a time of major philosophical fermentation and urbanization across the Gangetic plain, the Buddha taught a practical path of psychological liberation that bypassed Vedic caste hierarchies and extreme ascetic mortifications.',
    movementDescription: 'Originating in the middle country (Majjhimadesa) of northern India, expanding along ancient trade routes from Rajgir to Vaishali and Sravasti.',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Early Buddhism',
      source: 'Vinaya Piṭaka & Pāli Suttas',
      status: 'Historical Record',
      period: 'c. 5th Century BCE'
    }
  },
  {
    id: 'first-councils',
    era: 'Era 02',
    period: 'c. 483–386 BCE',
    title: 'The Early Councils & Preservation of Dhamma',
    subtitle: 'Consolidation of the oral canonical tradition at Rajgir and Vaishali.',
    region: 'Rajgir (Sattapaṇṇi Cave) & Vaishali',
    keyEvents: [
      'First Buddhist Council at Rajgir under Mahākassapa’s leadership',
      'Chanting of the Vinaya by Upāli and Suttas by Ānanda',
      'Second Council at Vaishali addressing monastic discipline disputations'
    ],
    keyFigures: ['Mahākassapa', 'Ānanda', 'Upāli', 'Yasa Kākandakaputta'],
    monumentalSites: ['Sattapaṇṇi Cave, Rajgir', 'Kutagarasala, Vaishali'],
    description: 'Immediately following the Buddha’s Mahāparinirvāṇa, 500 awakened Arahants gathered at Rajgir to formally memorize, authenticate, and standardize the Dhamma (discourses) and Vinaya (monastic discipline) via collective chanting.',
    movementDescription: 'Consolidated the oral repository across monastic communities across the kingdom of Magadha.',
    imageUrl: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Theravāda & Early Schools',
      source: 'Cullavagga XI & XII',
      status: 'Canonical Text'
    }
  },
  {
    id: 'ashokan-expansion',
    era: 'Era 03',
    period: 'c. 268–232 BCE',
    title: 'The Ashokan Empire & The Global Missions',
    subtitle: 'From conquest to Dharmavijaya: Epigraphical rock edicts and diplomatic emissaries.',
    region: 'Maurya Empire (Pan-Indian Subcontinent, Hellenistic West)',
    keyEvents: [
      'Emperor Ashoka’s remorse following the Kalinga War',
      'Third Buddhist Council at Pāṭaliputra convened by Moggaliputta Tissa',
      'Dispatch of nine diplomatic Buddhist missions (Dharmadūtas) across Asia and Greece',
      'Erection of monumental monolithic stone pillars and Major Rock Edicts'
    ],
    keyFigures: ['Emperor Ashoka (Devānaṃpiya Piyadasi)', 'Moggaliputta Tissa', 'Prince Mahinda', 'Princess Sanghamittā'],
    monumentalSites: ['Pāṭaliputra (Patna)', 'Sarnath Lion Capital', 'Sanchi Stupa 1', 'Dhauli Rock Edict'],
    description: 'Ashoka transformed Buddhism from an Indian regional spiritual movement into a pan-Asian world dispensation. His rock and pillar edicts inscribed in Brahmi and Greek mandated non-violence, religious tolerance, environmental preservation, and social welfare.',
    movementDescription: 'Missions reached Hellenistic kings (Antiochus, Ptolemy II, Antigonus), the Himalayas (Kashmir/Gandhara), Burma (Suvaṇṇabhūmi), and Sri Lanka (Tambapaṇṇi).',
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Ashokan Rock & Pillar Edicts (Corpus Inscriptionum Indicarum)',
      status: 'Archaeological Evidence',
      period: '3rd Century BCE'
    }
  },
  {
    id: 'sri-lanka-pali-canon',
    era: 'Era 04',
    period: 'c. 250 BCE – 1st Century BCE',
    title: 'Sri Lanka & Inscription of the Pāli Canon',
    subtitle: 'The Mahavihara lineage and the historic transcription onto palm-leaf manuscripts at Aluvihara.',
    region: 'Sri Lanka (Anuradhapura & Matale)',
    keyEvents: [
      'Arrival of Arahant Mahinda at Mihintale and conversion of King Devanampiya Tissa',
      'Arrival of Sanghamittā bringing the sacred Bodhi tree sapling',
      'Fourth Council in Sri Lanka (Aluvihara Cave, c. 29 BCE) writing down the entire Tipiṭaka on ola palm leaves'
    ],
    keyFigures: ['Arahant Mahinda', 'Therī Sanghamittā', 'King Devanampiya Tissa', 'King Vaṭṭagāmaṇī Abhaya'],
    monumentalSites: ['Mihintale', 'Ruwanwelisaya Stupa', 'Jaya Sri Maha Bodhi, Anuradhapura', 'Aluvihara Cave Temple'],
    description: 'Fearing the loss of oral transmission due to warfare and famine, the Sinhala Sangha committed the entire word of the Buddha into written Pāli text on palm leaves in 29 BCE at Aluvihara—preserving the oldest complete Buddhist canon extant today.',
    movementDescription: 'Deep institutionalization of Theravāda monastic scholarship at the Mahāvihāra of Anuradhapura.',
    imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Theravāda',
      source: 'Dīpavaṃsa & Mahāvaṃsa',
      status: 'Historical Record'
    }
  },
  {
    id: 'gandhara-silk-road',
    era: 'Era 05',
    period: 'c. 1st Century BCE – 4th Century CE',
    title: 'Gandhara, Kushan Empire & The Silk Road',
    subtitle: 'Greco-Buddhist artistic synthesis, early Mahāyāna literature, and desert trading oasis monasteries.',
    region: 'Gandhara (Taxila, Peshawar, Swat), Bactria, Tarim Basin',
    keyEvents: [
      'Reign of King Kanishka I and the Fourth Council in Kashmir/Jalandhar',
      'First anthropomorphic Buddha sculptures sculpted in Greco-Buddhist Gandharan style',
      'Emergence and transcription of foundational Mahāyāna Sūtras (Prajñāpāramitā, Lotus)',
      'Establishment of cliffside rock monasteries along Silk Road oases (Dunhuang, Kizil, Bamiyan)'
    ],
    keyFigures: ['Emperor Kanishka I', 'Aśvaghoṣa', 'Nāgārjuna', 'Lokakṣema'],
    monumentalSites: ['Taxila (Dharmarajika)', 'Peshawar Stupa', 'Bamiyan Valley', 'Mogao Caves at Dunhuang'],
    description: 'At the crossroads of Hellenistic, Persian, and Indian worlds, Gandhara birthed extraordinary stone statuary of the Buddha draped in Roman-style togas. Merchants and monks carried texts across the perilous Taklamakan Desert into China.',
    movementDescription: 'Expanded from Gandhara across the Pamir Mountains into Khotan, Kucha, Kashgar, Turpan, and Dunhuang.',
    imageUrl: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Gandharan Birch Bark Manuscripts (British Library Collection)',
      status: 'Archaeological Evidence'
    }
  },
  {
    id: 'china-golden-age',
    era: 'Era 06',
    period: 'c. 1st Century CE – 9th Century CE',
    title: 'China & The Great Translation Epoch',
    subtitle: 'Kumarajiva, Xuanzang, and the development of Tiantai, Huayan, Pure Land, and Chan (Zen).',
    region: 'China (Luoyang, Chang’an, Mount Wutai, Shaolin)',
    keyEvents: [
      'White Horse Temple founded in Luoyang (68 CE)',
      'Kumarajiva translates foundational Mahayana sūtras into masterful Chinese (401 CE)',
      'Xuanzang undertakes legendary 16-year overland pilgrimage to India (629–645 CE)',
      'Bodhidharma establishes Chan (Zen) meditation tradition at Shaolin Monastery'
    ],
    keyFigures: ['Kumārajīva', 'Faxian', 'Xuanzang', 'Bodhidharma', 'Huineng (6th Patriarch)'],
    monumentalSites: ['Mogao Caves (Dunhuang)', 'Longmen Grottoes (Luoyang)', 'Giant Wild Goose Pagoda (Xi’an)', 'Mount Wutai'],
    description: 'Buddhism synthesized seamlessly with Daoist and Confucian philosophical milieus in China, generating profound indigenous schools (Chan, Tiantai, Pure Land) and colossal cave grotto art carvings sponsored by imperial dynasties.',
    movementDescription: 'Transmission from Central Asian Silk Road corridors into Chang’an, Luoyang, and spreading southward across the Yangtze basin.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Mahāyāna / East Asian',
      source: 'Chinese Buddhist Canon (Taishō Tripiṭaka)',
      status: 'Historical Record'
    }
  },
  {
    id: 'korea-japan-dawn',
    era: 'Era 07',
    period: 'c. 4th Century CE – 13th Century CE',
    title: 'Korea & Japan: Asuka, Nara & Kamakura Periods',
    subtitle: 'Imperial patronage, Prince Shōtoku, Zen arts, and Pure Land devotion.',
    region: 'Korean Peninsula (Baekje, Silla) & Japan (Asuka, Nara, Kyoto, Kamakura)',
    keyEvents: [
      'Buddhism introduced from China to Three Kingdoms of Korea (372 CE)',
      'King of Baekje sends Buddha statue and scriptures to Emperor of Japan (552 CE)',
      'Prince Shōtoku establishes Buddhism as moral cornerstone of Japanese state (604 CE)',
      'Nara Great Buddha (Daibutsu) consecrated at Tōdai-ji (752 CE)',
      'Rise of Kamakura schools: Zen (Dōgen, Eisai), Pure Land (Hōnen, Shinran), Nichiren'
    ],
    keyFigures: ['Prince Shōtoku', 'Wonhyo of Silla', 'Kūkai (Kōbō Daishi)', 'Saichō', 'Dōgen Zenji'],
    monumentalSites: ['Bulguksa & Seokguram Grotto (Gyeongju, Korea)', 'Hōryū-ji & Tōdai-ji (Nara, Japan)', 'Mount Kōya'],
    description: 'Buddhism deeply infused Japanese and Korean civilization, inspiring world-heritage wooden architecture, Noh theatre, tea ceremony (Chadō), Zen rock gardens, and monumental bronze castings.',
    movementDescription: 'Transmission from China through Baekje and Silla into Asuka and Nara, blossoming in Kyoto and Kamakura.',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Mahāyāna / East Asian',
      source: 'Nihon Shoki & Samguk Yusa',
      status: 'Historical Record'
    }
  },
  {
    id: 'southeast-asia-monuments',
    era: 'Era 08',
    period: 'c. 7th – 14th Century CE',
    title: 'Maritime Southeast Asia: Srivijaya, Bagan & Borobudur',
    subtitle: 'Sailendra dynasty cosmic stone mandalas and the thousands of golden stupas of Pagan.',
    region: 'Indonesia (Java, Sumatra), Myanmar (Bagan), Cambodia (Angkor), Thailand',
    keyEvents: [
      'Rise of Srivijaya maritime empire as international center of Buddhist scholarship',
      'Construction of Borobudur in Central Java—the world’s largest stone Buddhist monument (c. 800 CE)',
      'King Anawrahta of Bagan converts to Theravāda, building thousands of temples on the Irrawaddy plains (1057 CE)',
      'Jayavarman VII converts Khmer Empire to Mahāyāna Buddhism, building the Bayon at Angkor (c. 1200 CE)'
    ],
    keyFigures: ['King Anawrahta of Pagan', 'Atiśa Dīpaṅkara (studied in Srivijaya)', 'Jayavarman VII of Angkor'],
    monumentalSites: ['Borobudur & Candi Mendut (Java)', 'Bagan Temple Plain (Myanmar)', 'Angkor Thom & Bayon (Cambodia)', 'Sukhothai (Thailand)'],
    description: 'Maritime trade across the Bay of Bengal and Java Sea facilitated monumental Buddhist civilizations that built architectural wonders of the ancient world, later solidifying Theravāda Buddhism across Burma, Thailand, Cambodia, and Laos.',
    movementDescription: 'Maritime networks connected Bengal, South India, Sri Lanka, Sumatra, Java, the Chao Phraya basin, and the Mekong delta.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Cross-Tradition (Mahāyāna & Theravāda)',
      source: 'Sanskrit & Old Javanese Epigraphy',
      status: 'Archaeological Evidence'
    }
  },
  {
    id: 'monastic-universities',
    era: 'Era 09',
    period: 'c. 5th – 12th Century CE',
    title: 'Nalanda & The Great Monastic Universities',
    subtitle: 'The epicenter of global intellectual life: Epistemology, Logic, Medicine, and Tantric philosophy.',
    region: 'Bihar & Bengal, India (Nalanda, Vikramashila, Odantapuri, Somapura)',
    keyEvents: [
      'Establishment of Nalanda Mahavihara under Gupta emperors (5th c. CE)',
      'Nalanda houses 10,000 students and 2,000 scholars from China, Korea, Japan, Tibet, and Persia',
      'Flourishing of Buddhist Logic (Dignāga, Dharmakīrti) and Madhyamaka (Candrakīrti, Śāntideva)',
      'Decline and burning of Nalanda library (Dharmaganja) in late 12th century'
    ],
    keyFigures: ['Nāgārjuna', 'Āryadeva', 'Dignāga', 'Dharmakīrti', 'Śāntideva (Bodhicaryāvatāra)', 'Śāntarakṣita'],
    monumentalSites: ['Nalanda Ruins (UNESCO World Heritage)', 'Vikramashila', 'Somapura Mahavihara (Bangladesh)'],
    description: 'Nalanda was the ancient world’s premier residential university. It synthesized metaphysics, mathematics, astronomy, linguistics, and medicine. Its massive 9-story library preserved the crown jewels of Indian philosophical genius.',
    movementDescription: 'Drew scholars across the known Asian world; exported philosophy and teachers to Tibet, China, and Southeast Asia.',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Cross-Tradition (Nalanda Tradition)',
      source: 'Travels of Xuanzang & Yijing; Nalanda Epigraphy',
      status: 'Archaeological Evidence'
    }
  },
  {
    id: 'tibet-himalayas',
    era: 'Era 10',
    period: 'c. 7th – 15th Century CE',
    title: 'Tibet & The Himalayan Renaissance',
    subtitle: 'Padmasambhava, the Kagyu, Nyingma, Sakya, Gelug lineages, and the Potala Palace.',
    region: 'Tibetan Plateau, Ladakh, Bhutan, Sikkim, Nepal, Mongolia',
    keyEvents: [
      'King Songtsen Gampo introduces Buddhism to Tibet (7th c. CE)',
      'Guru Padmasambhava & Abbot Śāntarakṣita consecrate Samye Monastery (c. 779 CE)',
      'Atiśa arrives in Tibet (1042 CE), sparking the Second Dissemination (Sarma)',
      'Translation and canonization of the Tibetan Kangyur and Tengyur',
      'Je Tsongkhapa founds the Gelug tradition; construction of Potala Palace in Lhasa'
    ],
    keyFigures: ['Padmasambhava (Guru Rinpoche)', 'King Trisong Detsen', 'Milarepa (Yogi Poet)', 'Atiśa Dīpaṅkara', 'Je Tsongkhapa'],
    monumentalSites: ['Samye Monastery', 'Jokhang Temple, Lhasa', 'Potala Palace', 'Tiger’s Nest (Paro Taktsang, Bhutan)'],
    description: 'Tibet meticulously translated the complete corpus of late Indian Sanskrit Buddhist literature into Tibetan script, preserving thousands of texts whose original Sanskrit manuscripts were subsequently lost in India, and developing extraordinary Vajrayāna contemplative methods.',
    movementDescription: 'Expanded across the high Himalayas into Bhutan, Sikkim, Ladakh, Mustang, and through Mongolia and Buryatia.',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Vajrayāna / Tibetan Buddhism',
      source: 'Blue Annals (Deb-ther sngon-po) & Kangyur/Tengyur',
      status: 'Historical Record'
    }
  },
  {
    id: 'theravada-revival',
    era: 'Era 11',
    period: 'c. 18th – 20th Century CE',
    title: 'Theravāda Scholarly & Forest Traditions',
    subtitle: 'The Thai Forest Tradition, Vipassanā meditation revival in Burma, and Buddhist modernism in Sri Lanka.',
    region: 'Thailand, Myanmar, Sri Lanka, Cambodia, Laos',
    keyEvents: [
      'King Mongkut (Rama IV) of Thailand reforms monastic discipline, founding Thammayut order',
      'Ajahn Mun Bhuridatto and Ajahn Chah revive the austere Thai Forest Tradition',
      'Ledi Sayadaw & Mahasi Sayadaw in Burma open Vipassanā meditation to lay practitioners',
      'Anagarika Dharmapala revives Buddhist heritage sites in India (Bodh Gaya restoration)'
    ],
    keyFigures: ['Ajahn Mun Bhuridatto', 'Ajahn Chah', 'Ledi Sayadaw', 'Mahasi Sayadaw', 'Anagarika Dharmapala'],
    monumentalSites: ['Wat Phra Kaew (Bangkok)', 'Shwedagon Pagoda (Yangon)', 'Temple of the Sacred Tooth Relic (Kandy)'],
    description: 'A global renaissance of intensive meditation practices and scriptural restoration swept Southeast Asia, democratizing mindfulness practice from secluded forest hermitages into daily lay life.',
    movementDescription: 'Re-energized regional monastic networks and laid the foundation for global Western meditation movements.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Theravāda',
      source: 'Monastic Chronicles & Epigraphy',
      status: 'Historical Record'
    }
  },
  {
    id: 'modern-global-dialogue',
    era: 'Era 12',
    period: 'c. Late 19th Century – 21st Century',
    title: 'The Modern World & Global Dialogue',
    subtitle: 'Dalit mass conversion, cognitive science, socially engaged Buddhism, and international dialogue.',
    region: 'Global (India, Europe, Americas, East & Southeast Asia, Africa)',
    keyEvents: [
      'Dr. B.R. Ambedkar leads mass conversion of 500,000 Dalits to Navayāna Buddhism at Nagpur (1956)',
      '14th Dalai Lama receives Nobel Peace Prize and establishes Tibetan diaspora in exile',
      'Thich Nhat Hanh pioneers Engaged Buddhism and mindfulness retreat centers globally',
      'Mind and Life Institute initiates dialogue between Buddhist contemplatives and neuroscientists'
    ],
    keyFigures: ['Dr. B.R. Ambedkar', '14th Dalai Lama (Tenzin Gyatso)', 'Thich Nhat Hanh', 'D.T. Suzuki', 'Buddhadasa Bhikkhu'],
    monumentalSites: ['Deekshabhoomi (Nagpur, India)', 'Dharamsala (Himachal Pradesh)', 'Plum Village (France)'],
    description: 'Today, Buddhism thrives globally as a bridge between contemplative philosophy, mental health sciences, environmental ethics, and universal compassion—honoring ancient roots while speaking directly to modern human challenges.',
    movementDescription: 'Global diffusion across universities, medical centers, meditation sanctuaries, and cultural institutions worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Cross-Tradition / Global',
      source: 'Contemporary Academic & Historical Archives',
      status: 'Historical Record'
    }
  }
];
