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
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Mahāyāna',
      source: 'Prajñāpāramitā Literature',
      status: 'Canonical Text',
      region: 'India, China, Tibet'
    },
    relatedConcepts: ['Prajñā (Wisdom)', 'Śūnyatā (Emptiness)', 'Sword of Discrimination', 'Mount Wutai']
  },
  {
    id: 'maitreya',
    name: 'Maitreya',
    sanskritName: 'Maitreya (मैत्रेय) / Metteyya',
    chineseName: 'Mílè (彌勒菩薩)',
    tibetanName: 'Jampa (བྱམས་པ)',
    japaneseName: 'Miroku (弥勒)',
    quality: 'Universal Loving-Kindness (Mettā) & Future Awakening',
    embodiment: 'The designated successor to Gautama Buddha, currently presiding in Tuṣita heaven waiting to descend to Earth in a future era.',
    iconography: [
      'Seated in European posture (Bhadrasana), ready to rise',
      'Stūpa resting in crown of hair',
      'Water flask (Kamaṇḍalu) holding nectar of immortality',
      'Nāgapuṣpa tree flower'
    ],
    tradition: 'Cross-Tradition (Theravāda, Mahāyāna, Vajrayāna)',
    mantra: 'Oṃ Maitri Mahāmaitri Maitreya Svāhā',
    abode: 'Tuṣita Heaven (Tuṣita Devaloka)',
    description: 'The only Bodhisattva universally venerated across both Southern Theravāda and Northern Mahāyāna traditions. He represents the living promise that the Dharma will never be permanently extinguished from the cosmos.',
    vows: 'To manifest supreme awakening in the human world when the previous dispensation has waned, revitalizing loving-kindness in all hearts.',
    canonicalSource: 'Cakkavatti Sīhanāda Sutta (Dīgha Nikāya 26), Maitreyavyākaraṇa',
    imageUrl: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Dīgha Nikāya & Maitreya-samiti',
      status: 'Canonical Text',
      period: 'Pre-Christian Era to Present',
      region: 'Pan-Buddhist'
    },
    relatedConcepts: ['Mettā (Loving-Kindness)', 'Tuṣita Heaven', 'Future Buddha', 'Eschatology & Hope']
  },
  {
    id: 'vajrapani',
    name: 'Vajrapāṇi',
    sanskritName: 'Vajrapāṇi (वज्रपाणि)',
    chineseName: 'Jīngāngshǒu (金剛手菩薩)',
    tibetanName: 'Chana Dorje (ཕྱག་ན་རྡོ་རྗེ)',
    japaneseName: 'Kongōshu (金剛手)',
    quality: 'Indomitable Spiritual Power & Protection',
    embodiment: 'The wielder of the thunderbolt-diamond scepter (Vajra), symbolizing the invincible energy of enlightened mind.',
    iconography: [
      'Holding a blazing five-pronged golden Vajra',
      'Wrathful or dynamic heroic stance (Pratyālīḍha)',
      'Crown of skulls or jewels surrounded by wisdom flames',
      'Third eye of penetrative awareness'
    ],
    tradition: 'Early Buddhism, Mahāyāna & Vajrayāna',
    mantra: 'Oṃ Vajrapāṇi Hūṃ Phaṭ',
    abode: 'Canglochen (Alakāvatī)',
    description: 'In early Pāli texts (Ambaṭṭha Sutta), Vajrapāṇi appears as the protective guardian spirit of the Buddha. In Gandharan art, he was frequently depicted with the musculature of Herakles. In Vajrayāna, he is the master of all esoteric mysteries.',
    vows: 'To protect the lineage of Dharma practitioners and subjugate inner demons of pride, ignorance, and spiritual complacency.',
    canonicalSource: 'Ambaṭṭha Sutta (DN 3), Guhyasamāja Tantra',
    imageUrl: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Vajrayāna & Early Buddhism',
      source: 'Pāli Canon & Tantric Canons',
      status: 'Canonical Text',
      region: 'Gandhara, India, Tibet'
    },
    relatedConcepts: ['Vajra (Indestructibility)', 'Guardian Deities', 'Gandharan Synthesis', 'Inner Strength']
  },
  {
    id: 'ksitigarbha',
    name: 'Kṣitigarbha',
    sanskritName: 'Kṣitigarbha (क्षितिगर्भ)',
    chineseName: 'Dìzàng (地藏菩薩)',
    tibetanName: 'Sa-yi Nyingpo (ས་ཡི་སྙིང་པོ)',
    japaneseName: 'Jizō (地蔵)',
    quality: 'Supreme Vows & Deliverance of Underworld Beings',
    embodiment: 'The Earth-Store Bodhisattva, who took the colossal vow never to attain Buddhahood until all hell realms are emptied.',
    iconography: [
      'Shaved head wearing simple monastic robes',
      'Six-ringed monk staff (Khakkhara) that opens realm gates',
      'Wish-fulfilling jewel (Cintāmaṇi) that illuminates darkness',
      'Gentle, deeply serene countenance'
    ],
    tradition: 'Mahāyāna & East Asian Buddhism',
    mantra: 'Oṃ Ha Ha Ha Vismaye Svāhā',
    abode: 'Mount Jiuhua (Anhui, China)',
    description: 'Deeply beloved across East Asia, Kṣitigarbha is revered as the guardian of travelers, children, and deceased spirits wandering between rebirth realms. His immense patience mirrors the fertility and unshakeable endurance of the earth.',
    vows: 'Not until the hells are emptied will I become a Buddha; not until all souls are saved will I achieve Awakening.',
    canonicalSource: 'Kṣitigarbha Bodhisattva Pūrvapraṇidhāna Sūtra',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Mahāyāna',
      source: 'Kṣitigarbha Sūtra',
      status: 'Canonical Text',
      region: 'China, Japan, Korea'
    },
    relatedConcepts: ['Unshakeable Vow (Praṇidhāna)', 'Six Realms of Saṃsāra', 'Jizō Lore', 'Mount Jiuhua']
  },
  {
    id: 'samantabhadra',
    name: 'Samantabhadra',
    sanskritName: 'Samantabhadra (समन्तभद्र)',
    chineseName: 'Pǔxián (普賢菩薩)',
    tibetanName: 'Kuntuzangpo (ཀུན་ཏུ་བཟང་པོ)',
    japaneseName: 'Fugen (普賢)',
    quality: 'Universal Action & Boundless Aspiration',
    embodiment: 'The personification of active practice, practical application of wisdom, and cosmic vows.',
    iconography: [
      'Riding a magnificent white elephant with six tusks (symbolizing six pāramitās)',
      'Holding a lotus topped with a jewel or wish-granting scroll',
      'Regal robes of deep emerald or gold'
    ],
    tradition: 'Mahāyāna & Vajrayāna',
    mantra: 'Oṃ Samantabhadra Mahākaruṇā Hūṃ',
    abode: 'Mount Emei (Sichuan, China)',
    description: 'Together with Śākyamuni and Mañjuśrī, Samantabhadra forms the Shakyamuni Trinity. His Ten Great Vows form the culmination of the Avataṃsaka Sūtra, outlining the complete spiritual path of practical altruism.',
    vows: 'To pay homage to all Buddhas, praise the Tathāgatas, make abundant offerings, confess all karmic faults, and continuously turn the Wheel of Dharma.',
    canonicalSource: 'Avataṃsaka Sūtra (Gandavyūha / Bhadracarīpraṇidhāna)',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Mahāyāna',
      source: 'Avataṃsaka Sūtra',
      status: 'Canonical Text',
      region: 'China, Japan, Tibet'
    },
    relatedConcepts: ['Ten Great Vows', 'Avataṃsaka Sūtra', 'Mount Emei', 'Six Pāramitās']
  },
  {
    id: 'tara',
    name: 'Tārā',
    sanskritName: 'Ārya Tārā (आर्य तारा)',
    chineseName: 'Duōluó Púsà (度母)',
    tibetanName: 'Jetsun Dölma (རྗེ་བཙུན་སྒྲོལ་མ)',
    quality: 'Fearlessness & Swift Compassionate Action',
    embodiment: 'The Mother of all Buddhas, born from a tear of Avalokiteśvara, who vowed always to achieve liberation in a female body.',
    iconography: [
      'Green Tārā seated with right leg extended forward ready to spring into action',
      'White Tārā with seven eyes of compassionate vision',
      'Blue Utpala lotus flower in hand'
    ],
    tradition: 'Vajrayāna & Mahāyāna',
    mantra: 'Oṃ Tāre Tuttāre Ture Svāhā',
    abode: 'Mount Potala / Yulokod Pure Land',
    description: 'Tārā represents instantaneous protective action and the divine feminine principle of awakening. When faced with the eight great fears (fire, lions, serpents, imprisonment, thieves, drowning, elephants, and demons), calling on Tārā provides immediate refuge.',
    vows: 'I have made the vow: just as I have attained enlightenment in the female form, so shall I continuously work for sentient beings as a woman until saṃsāra is empty.',
    canonicalSource: 'Tārā Mūlakalpa, Praises to the Twenty-One Tārās',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Vajrayāna',
      source: 'Tārā Tantra Literature',
      status: 'Canonical Text',
      region: 'Tibet, Himalayas, India'
    },
    relatedConcepts: ['Sacred Feminine', 'Eight Great Fears', 'Green Tārā', 'White Tārā']
  },
  {
    id: 'prajnaparamita',
    name: 'Prajñāpāramitā',
    sanskritName: 'Bhagavatī Prajñāpāramitā (प्रज्ञापारमिता)',
    chineseName: 'Bōrě Púsà (般若菩薩)',
    tibetanName: 'Yum Chenmo (ཡུམ་ཆེན་མོ)',
    quality: 'The Great Mother of Enlightenment / Perfection of Wisdom',
    embodiment: 'The personification of the non-dual realization of ultimate reality—the mother from whom all past, present, and future Buddhas are born.',
    iconography: [
      'Four-armed golden goddess in deep meditation posture',
      'Upper right hand holding a gold Vajra; upper left holding the sacred palm-leaf sūtra text',
      'Lower hands in meditation gesture (Dhyāna Mudrā)',
      'Luminous golden skin glowing like refined celestial gold'
    ],
    tradition: 'Mahāyāna & Vajrayāna',
    mantra: 'Gate Gate Pāragate Pārasaṃgate Bodhi Svāhā',
    abode: 'The Transcendent Realm of Clear Light',
    description: 'Prajñāpāramitā is both a genre of foundational Mahāyāna scriptures and the goddess-bodhisattva who embodies their deepest revelation: that all dharmas are devoid of intrinsic selfhood, like an illusion, a dream, a bubble, a shadow.',
    vows: 'To reveal the boundless clarity of Emptiness which frees all beings from every conceptual entrapment.',
    canonicalSource: 'Aṣṭasāhasrikā Prajñāpāramitā Sūtra, Heart Sūtra, Diamond Sūtra',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    metadata: {
      tradition: 'Mahāyāna',
      source: 'Prajñāpāramitā Literature (1st Century BCE)',
      status: 'Canonical Text',
      region: 'Pan-Asian'
    },
    relatedConcepts: ['Perfection of Wisdom', 'Heart Sūtra', 'Śūnyatā', 'Great Mother']
  }
];
