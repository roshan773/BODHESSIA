import { BodhisattvaDetail } from '../types';

export const BODHISATTVAS: BodhisattvaDetail[] = [
  {
    id: 'avalokitesvara',
    name: 'Avalokiteśvara',
    sanskritName: 'Avalokiteśvara (अवलोकितेश्वर)',
    chineseName: 'Guānyīn (觀音 / 觀世音)',
    tibetanName: 'Chenrezig (སྤྱན་རས་གཟིགས)',
    japaneseName: 'Kannon (観音)',
    quality: 'Infinite Compassion (Mahākaruṇā)',
    embodiment: 'The listener of the world’s cries who vows never to enter final nirvana until every single sentient being is liberated.',
    iconography: [
      'Lotus flower in hand',
      'Amitābha Buddha seated in crown',
      'Eleven heads and thousand arms (Sahasrabhuja form)',
      'Flowing white or iridescent robes'
    ],
    tradition: 'Mahāyāna & Vajrayāna',
    mantra: 'Oṃ Maṇi Padme Hūṃ',
    abode: 'Mount Potalaka',
    description: 'The archetype of boundless compassion. In Sanskrit, the name translates to "The Lord Who Looks Down with Compassion." He manifests in countless forms across cultures—most famously as Guanyin in East Asia and Chenrezig in Tibetan traditions.',
    vows: 'Should any living being suffer distress or fear, if they but call upon my name with sincerity, they shall be delivered from sorrow.',
    canonicalSource: 'Lotus Sūtra (Chapter 25), Heart Sūtra, Kāraṇḍavyūha Sūtra',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
    metadata: {
      tradition: 'Mahāyāna',
      source: 'Saddharmapuṇḍarīka Sūtra',
      status: 'Canonical Text',
      period: 'c. 1st Century BCE onwards',
      region: 'Pan-Asian'
    },
    relatedConcepts: ['Karuṇā (Compassion)', 'Upāya (Skillful Means)', 'Six-Syllable Mantra', 'Bodhisattva Ideal']
  },
  {
    id: 'manjusri',
    name: 'Mañjuśrī',
    sanskritName: 'Mañjuśrī Kumārabhūta (मञ्जुश्री)',
    chineseName: 'Wénshū (文殊菩薩)',
    tibetanName: 'Jampelyang (འཇམ་དཔལ་དབྱངས)',
    japaneseName: 'Monju (文殊)',
    quality: 'Transcendent Wisdom (Prajñā)',
    embodiment: 'The embodiment of discriminating wisdom that severs the root of ignorance with the flaming sword of truth.',
    iconography: [
      'Flaming sword of wisdom (Khaḍga) in right hand',
      'Blue lotus bearing the Prajñāpāramitā Sūtra text in left hand',
      'Riding a ferocious blue/golden lion',
      'Youthful prince appearance (Kumārabhūta)'
    ],
    tradition: 'Mahāyāna & Vajrayāna',
    mantra: 'Oṃ A Ra Pa Ca Na Dhīḥ',
    abode: 'Mount Wutai (Shanxi, China)',
    description: 'Mañjuśrī represents the sharp, cutting edge of Prajñā—insight into the emptiness (Śūnyatā) of all phenomena. Revered as the father and teacher of all Buddhas, he teaches that true wisdom is beyond concepts.',
    vows: 'To illuminate the minds of all beings, cutting away doubts, delusion, and conceptual proliferation.',
    canonicalSource: 'Mañjuśrī-mūla-kalpa, Vimalakīrti Nirdeśa Sūtra, Gandavyūha Sūtra',
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85',
    metadata: {
      tradition: 'Mahāyāna',
      source: 'Prajñāpāramitā Literature',
      status: 'Canonical Text',
      period: 'c. 1st Century CE onwards',
      region: 'India, China, Tibet'
    },
    relatedConcepts: ['Prajñā (Wisdom)', 'Śūnyatā (Emptiness)', 'Sword of Truth', 'Lion Seat']
  },
  {
    id: 'maitreya',
    name: 'Maitreya',
    sanskritName: 'Maitreya (मैत्रेय)',
    chineseName: 'Mílè Púsà (彌勒菩薩)',
    tibetanName: 'Jampa (བྱམས་པ)',
    japaneseName: 'Miroku (弥勒)',
    quality: 'Universal Loving-Kindness (Maitrī / Mettā) & Future Hope',
    embodiment: 'The next Buddha who currently resides in the Tuṣita heaven awaiting his final rebirth in the human realm.',
    iconography: [
      'Stupa in his headdress/crown',
      'Water flask (Kamaṇḍalu) in hand',
      'Seated in European posture (Bhadrasana) ready to arise',
      'Dharmachakra mudrā (Teaching gesture)'
    ],
    tradition: 'Pan-Buddhist (Theravāda, Mahāyāna & Vajrayāna)',
    mantra: 'Oṃ Maitri Mahāmaitri Maitreya Svāhā',
    abode: 'Tuṣita Devaloka',
    description: 'The sole Bodhisattva recognized and venerated across all Buddhist lineages, including the Theravāda canon (Cakkavatti Sīhanāda Sutta). Maitreya will descend when the teachings of Gautama Buddha have completely faded.',
    vows: 'To guide all beings of the future age to complete spiritual awakening with unbounded loving-kindness.',
    canonicalSource: 'Dīgha Nikāya (DN 26), Maitreyavyākaraṇa, Abhisamayālaṅkāra',
    imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85',
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Tipiṭaka & Mahāyāna Sūtras',
      status: 'Canonical Text',
      period: 'Early Buddhist antiquity',
      region: 'Universal'
    },
    relatedConcepts: ['Mettā (Loving-kindness)', 'Tuṣita Heaven', 'Future Buddha', 'Messianic Hope']
  },
  {
    id: 'vajrapani',
    name: 'Vajrapāṇi',
    sanskritName: 'Vajrapāṇi (वज्रपाणि)',
    chineseName: 'Jīngāngshǒu (金剛手菩薩)',
    tibetanName: 'Chagna Dorje (ཕྱག་ན་རྡོ་རྗེ)',
    japaneseName: 'Shukongōshin (執金剛神)',
    quality: 'Spiritual Power & Relentless Energy (Vīrya / Bala)',
    embodiment: 'The holder of the diamond thunderbolt, symbolizing the invincible, indestructible force of the enlightened mind.',
    iconography: [
      'Five-pronged diamond thunderbolt (Vajra) raised aloft',
      'Wrathful or heroic stance (Pratyālīḍha)',
      'Aureole of blazing cosmic fire',
      'Tiger skin loincloth and serpent ornaments'
    ],
    tradition: 'Early Buddhism, Mahāyāna & Vajrayāna',
    mantra: 'Oṃ Vajrapāṇi Hūṃ Phaṭ',
    abode: 'Aḍakavatī Palace',
    description: 'In early Pāli texts, Vajrapāṇi is the powerful Yakṣa guardian who protects the historical Buddha. In later Vajrayāna traditions, he represents the primordial energy and determination required to shatter mental afflictions (Kleśas).',
    vows: 'To fiercely safeguard the Dharma and eradicate all spiritual obstacles and inner demons that torment practitioners.',
    canonicalSource: 'Ambaṭṭha Sutta (DN 3), Guhyasamāja Tantra, Sarvatathāgatatattvasaṃgraha',
    imageUrl: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1200&q=85',
    metadata: {
      tradition: 'Vajrayāna & Early Canonical',
      source: 'Dīgha Nikāya & Tantric Canons',
      status: 'Canonical Text',
      period: 'Ancient Vedic-Buddhist crossover',
      region: 'Gandhāra, India, Tibet'
    },
    relatedConcepts: ['Vajra (Thunderbolt/Diamond)', 'Vīrya (Spiritual Energy)', 'Dharmapāla (Protector)', 'Greco-Buddhist Herakles']
  },
  {
    id: 'ksitigarbha',
    name: 'Kṣitigarbha',
    sanskritName: 'Kṣitigarbha (क्षितिगर्भ)',
    chineseName: 'Dìzàng (地藏菩薩)',
    tibetanName: 'Sai Nyingpo (ས་ཡི་སྙིང་པོ)',
    japaneseName: 'Jizō (地蔵)',
    quality: 'Unshakeable Patience & Salvation of the Nether Realms',
    embodiment: 'The Earth Matrix Bodhisattva who swore to remain in the hell realms until every suffering soul is saved.',
    iconography: [
      'Monastic robes and shaven head (the only monk Bodhisattva)',
      'Six-ringed monk staff (Khakkhara) to awaken souls',
      'Wish-fulfilling jewel (Cintāmaṇi) shining through darkness',
      'Accompanied by the mythical hound Diting'
    ],
    tradition: 'Mahāyāna & East Asian Buddhism',
    mantra: 'Oṃ Pramardane Svāhā / Na Mo Di Zang Wang Pu Sa',
    abode: 'Mount Jiuhua (Anhui, China)',
    description: 'Famed for his supreme vow: "Until the hells are empty, I will not become a Buddha; only when all living beings are saved, will I attain Bodhi." He is the protector of travelers, women, and children across Japan and East Asia.',
    vows: 'Until the hells are completely emptied, I vow not to attain Buddhahood.',
    canonicalSource: 'Kṣitigarbha Bodhisattva Pūrvapraṇidhāna Sūtra (Earth Store Sūtra)',
    imageUrl: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1200&q=85',
    metadata: {
      tradition: 'Mahāyāna',
      source: 'Kṣitigarbha Sūtra',
      status: 'Canonical Text',
      period: 'c. 4th Century CE onwards',
      region: 'China, Japan, Korea'
    },
    relatedConcepts: ['Six Realms of Saṃsāra', 'Filial Piety', 'Great Vows (Mahāpraṇidhāna)', 'Jizō Statues']
  },
  {
    id: 'samantabhadra',
    name: 'Samantabhadra',
    sanskritName: 'Samantabhadra (समन्तभद्र)',
    chineseName: 'Pǔxián (普賢菩薩)',
    tibetanName: 'Küntu Zangpo (ཀུན་ཏུ་བཟང་པོ)',
    japaneseName: 'Fugen (普賢)',
    quality: 'Universal Action & Boundless Conduct (Caryā)',
    embodiment: 'The personification of practical ethical action and the dedication of all merit to the enlightenment of all beings.',
    iconography: [
      'Mounted upon a majestic six-tusked white elephant',
      'Lotus holding a wish-granting jewel or scroll',
      'Crown of five Dhyāni Buddhas',
      'Calm, regal ceremonial stance'
    ],
    tradition: 'Mahāyāna & Vajrayāna',
    mantra: 'Oṃ Samantabhadra Mahāmāya Svāhā',
    abode: 'Mount Emei (Sichuan, China)',
    description: 'Samantabhadra embodies the practical realization of truth through action. In the Avataṃsaka Sūtra, he articulates the Ten Great Aspirations that form the liturgical foundation of East Asian Buddhist practice.',
    vows: 'To endlessly worship all Buddhas, praise their virtues, make abundant offerings, repent karmic misdeeds, and never abandon any living being.',
    canonicalSource: 'Avataṃsaka Sūtra (Gaṇḍavyūha chapter), Lotus Sūtra',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    metadata: {
      tradition: 'Mahāyāna',
      source: 'Avataṃsaka Sūtra (Flower Ornament Sūtra)',
      status: 'Canonical Text',
      period: 'c. 2nd Century CE onwards',
      region: 'East Asia & Himalayas'
    },
    relatedConcepts: ['Ten King of Vows', 'Six-Tusked White Elephant', 'Dedication of Merit (Pariṇāmanā)']
  },
  {
    id: 'tara',
    name: 'Tārā (Noble Savioress)',
    sanskritName: 'Āryā Tārā (आर्या तारा)',
    chineseName: 'Duōluó Púsà (度母)',
    tibetanName: 'Jetsun Dölma (རྗེ་བཙུན་སྒྲོལ་མ)',
    japaneseName: 'Tara Bosatsu (多羅菩薩)',
    quality: 'Swift Liberation & Fearlessness (Abhaya)',
    embodiment: 'The mother of all Buddhas born from a tear of Avalokiteśvara, who vowed to always attain awakening in a female body.',
    iconography: [
      'Green form: Right leg extended, ready to leap to assist beings',
      'White form: Seven compassionate eyes (forehead, palms, soles)',
      'Utpala (blue night lotus) blossom in hand',
      'Varada mudrā (Supreme granting gesture)'
    ],
    tradition: 'Mahāyāna & Vajrayāna',
    mantra: 'Oṃ Tāre Tuttāre Ture Svāhā',
    abode: 'Mount Potala / Yulokö Pure Land',
    description: 'Revered as the ultimate embodiment of rapid compassionate response. When asked why she did not transform into a male body to attain Buddhahood, she vowed to continuously reincarnate in female form to prove that gender is devoid of inherent existence.',
    vows: 'There are many who desire enlightenment in a man’s body, but none who work for the benefit of sentient beings in the body of a woman. Therefore, until saṃsāra is emptied, I shall work for the benefit of sentient beings only in a female body.',
    canonicalSource: 'Tārā Tantra, Tārāmūlakalpa, Praises to the Twenty-One Tārās',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
    metadata: {
      tradition: 'Vajrayāna & Mahāyāna',
      source: 'Tārā Tantra Literature',
      status: 'Canonical Text',
      period: 'c. 5th Century CE onwards',
      region: 'Tibet, Nepal, Mongolia, India'
    },
    relatedConcepts: ['21 Tārās', 'Female Awakening', 'Swift Compassion', 'Green Tārā / White Tārā']
  },
  {
    id: 'prajnaparamita',
    name: 'Prajñāpāramitā (Mother of All Buddhas)',
    sanskritName: 'Bhagavatī Prajñāpāramitā (प्रज्ञापारमिता)',
    chineseName: 'Bōrě Púsà (般若菩薩)',
    tibetanName: 'Yum Chenmo (ཡུམ་ཆེན་མོ)',
    japaneseName: 'Hannya Bosatsu (般若菩薩)',
    quality: 'Transcendental Wisdom Beyond Concept & Duality',
    embodiment: 'The deified personification of the Great Perfection of Wisdom text that gives birth to every Buddha across space and time.',
    iconography: [
      'Four arms: holding the Sacred Sūtra text, golden Vajra, and meditation mudrā',
      'Golden skin radiating pristine luminosity',
      'Seated in full lotus (Padmāsana) upon a giant white lotus',
      'Crown adorned with gems of transcendent truth'
    ],
    tradition: 'Mahāyāna & Vajrayāna',
    mantra: 'Gate Gate Pāragate Pārasaṃgate Bodhi Svāhā',
    abode: 'Unconditioned Realm of Emptiness (Dharmadhātu)',
    description: 'Revered not merely as an individual deity, but as the Great Mother (Yum Chenmo)—the living ontological reality that all phenomena are empty of separate inherent existence, unproduced, and radiant.',
    vows: 'To guide all seekers across the ocean of delusion to the other shore of supreme enlightenment.',
    canonicalSource: 'Aṣṭasāhasrikā Prajñāpāramitā, Heart Sūtra, Diamond Sūtra',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85',
    metadata: {
      tradition: 'Mahāyāna',
      source: 'Prajñāpāramitā Literature (Earliest Mahāyāna)',
      status: 'Canonical Text',
      period: 'c. 1st Century BCE onwards',
      region: 'Nalanda, Gandhara, East Asia'
    },
    relatedConcepts: ['Heart Sūtra', 'Diamond Sūtra', 'Other Shore (Pāramitā)', 'Mother of Buddhas']
  }
];
