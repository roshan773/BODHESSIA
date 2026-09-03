import { TeachingDetail } from '../types';

export const TEACHINGS: TeachingDetail[] = [
  {
    id: 'four-noble-truths',
    title: 'The Four Noble Truths',
    paliName: 'Cattāri Ariyasaccāni (चत्तारि अरियसच्चानि)',
    sanskritName: 'Catvāri Āryasatyāni',
    subtitle: 'The foundational diagnostic framework of human existence and spiritual liberation.',
    category: 'Core Doctrine',
    summary: 'Delivered in the Buddha’s inaugural sermon at Deer Park in Sarnath, the Four Noble Truths function like an ancient medical diagnosis: identifying the symptom, finding its root etiology, affirming the prognosis of total cure, and prescribing the therapeutic regimen.',
    metaphorOrParadigm: 'The Ancient Physician Paradigm: Illness (Dukkha) → Etiology (Samudaya) → Health/Cure (Nirodha) → Medicine/Therapy (Magga).',
    keyComponents: [
      {
        title: '1. The Truth of Suffering / Unsatisfactoriness',
        paliTerm: 'Dukkha Sacca',
        explanation: 'Conditioned existence is marked by impermanence and friction. Physical pain, aging, illness, death, separation from the loved, association with the disliked, and clinging to the five aggregates are fundamentally fraught with unsatisfactoriness.',
        practicalApplication: 'Understood not as pessimistic despair, but as realistic diagnosis that prompts proactive investigation.'
      },
      {
        title: '2. The Truth of the Origin of Suffering',
        paliTerm: 'Samudaya Sacca',
        explanation: 'The primary cause of Dukkha is Taṇhā (craving, thirst, grasping)—specifically craving for sensory pleasure (kāma-taṇhā), craving for continued becoming/existence (bhava-taṇhā), and craving for non-existence/annihilation (vibhava-taṇhā), rooted in primal spiritual ignorance (Avijjā).',
        practicalApplication: 'Mindfully observing internal impulses of craving without reactive clinging.'
      },
      {
        title: '3. The Truth of the Cessation of Suffering',
        paliTerm: 'Nirodha Sacca',
        explanation: 'The complete fading away and cessation of that very craving; its relinquishment, detachment, release, and freedom. This is Nibbāna—the unconditioned peace beyond cyclic distress.',
        practicalApplication: 'Cultivating moments of contentment and letting go of grasping.'
      },
      {
        title: '4. The Truth of the Path Leading to Cessation',
        paliTerm: 'Magga Sacca',
        explanation: 'The practical roadmap known as the Noble Eightfold Path (Ariyo Aṭṭhaṅgiko Maggo), spanning ethical discipline, mental concentration, and penetrative wisdom.',
        practicalApplication: 'Integrating daily ethics, mindful awareness, and clear comprehension.'
      }
    ],
    canonicalPassage: {
      text: 'Now this, monks, is the noble truth of suffering: birth is suffering, aging is suffering, illness is suffering, death is suffering; union with what is displeasing is suffering; separation from what is pleasing is suffering; not to get what one desires is suffering; in brief, the five aggregates subject to clinging are suffering.',
      source: 'Dhammacakkappavattana Sutta, Saṃyutta Nikāya 56.11'
    },
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Saṃyutta Nikāya (SN 56.11)',
      status: 'Canonical Text',
      period: 'c. 5th Century BCE',
      region: 'Sarnath, India'
    },
    relatedConcepts: ['Dhammacakkappavattana Sutta', 'Dukkha', 'Taṇhā', 'Nirodha', 'Noble Eightfold Path']
  },
  {
    id: 'eightfold-path',
    title: 'The Noble Eightfold Path',
    paliName: 'Ariyo Aṭṭhaṅgiko Maggo (अरियो अट्ठङ्गिको मग्गो)',
    sanskritName: 'Āryāṣṭāṅgamārga',
    subtitle: 'The Middle Way of holistic ethical, psychological, and contemplative training.',
    category: 'Ethics & Practice',
    summary: 'The practical Middle Way (Majjhimā Paṭipadā) that avoids the extremes of sensual indulgence and harsh self-mortification. The eight factors operate synergistically across Threefold Training: Wisdom (Paññā), Moral Virtue (Sīla), and Meditative Concentration (Samādhi).',
    metaphorOrParadigm: 'The Eight-Spoked Wheel of Dharma, where all eight spokes interlock to move the chariot of liberation smoothly forward.',
    keyComponents: [
      {
        title: 'Right View (Sammā-diṭṭhi)',
        paliTerm: 'Wisdom (Paññā)',
        explanation: 'Understanding the Four Noble Truths, the law of moral cause-and-effect (kamma), and the impermanent, selfless nature of existence.'
      },
      {
        title: 'Right Intention (Sammā-saṅkappa)',
        paliTerm: 'Wisdom (Paññā)',
        explanation: 'Resolving towards renunciation, non-ill will (loving-kindness), and harmlessness (compassion).'
      },
      {
        title: 'Right Speech (Sammā-vācā)',
        paliTerm: 'Ethical Conduct (Sīla)',
        explanation: 'Refraining from false speech, divisive speech, harsh speech, and idle gossip.'
      },
      {
        title: 'Right Action (Sammā-kammanta)',
        paliTerm: 'Ethical Conduct (Sīla)',
        explanation: 'Refraining from taking life, stealing, and sexual misconduct.'
      },
      {
        title: 'Right Livelihood (Sammā-ājīva)',
        paliTerm: 'Ethical Conduct (Sīla)',
        explanation: 'Earning one’s living through harmless trades, avoiding dealings in weapons, living beings, meat, intoxicants, and poisons.'
      },
      {
        title: 'Right Effort (Sammā-vāyāma)',
        paliTerm: 'Concentration (Samādhi)',
        explanation: 'Preventing unarisen unwholesome states, abandoning arisen unwholesome states, cultivating unarisen wholesome states, and maintaining arisen wholesome states.'
      },
      {
        title: 'Right Mindfulness (Sammā-sati)',
        paliTerm: 'Concentration (Samādhi)',
        explanation: 'Continuous bare attention to the Four Foundations: body, feelings, mind states, and mental phenomena (dharmas).'
      },
      {
        title: 'Right Concentration (Sammā-samādhi)',
        paliTerm: 'Concentration (Samādhi)',
        explanation: 'Cultivation of unified, luminous states of absorption (the four Jhānas) leading to unshakable mental stability.'
      }
    ],
    canonicalPassage: {
      text: 'There are these two extremes that are not to be indulged in by one who has gone forth: devotion to sensual pleasure and devotion to self-affliction. Avoiding both these extremes, the Tathāgata has awakened to the Middle Way, which gives vision, gives knowledge, which leads to peace, to direct knowledge, to awakening, to Nibbāna.',
      source: 'SN 56.11'
    },
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Dīgha Nikāya (Mahāsatipaṭṭhāna Sutta)',
      status: 'Canonical Text',
      period: 'c. 5th Century BCE'
    },
    relatedConcepts: ['Middle Way', 'Threefold Training (Tisikkhā)', 'Jhāna', 'Sīla', 'Samādhi', 'Paññā']
  },
  {
    id: 'dependent-origination',
    title: 'Dependent Origination (12 Nidānas)',
    paliName: 'Paṭiccasamuppāda (पटिच्चसमुप्पाद)',
    sanskritName: 'Pratītyasamutpāda',
    subtitle: 'The universal principle of conditioned genesis: when this exists, that comes to be.',
    category: 'Ontology',
    summary: 'The central ontological breakthrough of the Buddha under the Bodhi tree. All physical, mental, and cosmic phenomena arise not from random chance or divine fiat, but in dependence upon supporting causes and conditions. When causes cease, the conditioned effect ceases.',
    metaphorOrParadigm: 'The Twelve-Spoke Bhavachakra (Wheel of Becoming): a continuous circular chain illustrating how spiritual ignorance perpetuates rebirth and suffering.',
    keyComponents: [
      { title: '1. Ignorance (Avijjā)', explanation: 'Unawareness of the Four Noble Truths, acting as the fundamental root of cyclic grasping.' },
      { title: '2. Volitional Formations (Saṅkhārā)', explanation: 'Karmic conditioning and mental fabrications generated through body, speech, and mind.' },
      { title: '3. Consciousness (Viññāṇa)', explanation: 'Relinking rebirth-consciousness sparking perception in a new sensory organism.' },
      { title: '4. Name and Form (Nāmarūpa)', explanation: 'The psycho-physical matrix: mental factors (feeling, perception, volition, contact) and material elements.' },
      { title: '5. Six Sense Bases (Saḷāyatana)', explanation: 'The five physical sense faculties plus the mental organ (eye, ear, nose, tongue, body, mind).' },
      { title: '6. Sensory Contact (Phassa)', explanation: 'The collision of sense organ, sense object, and corresponding consciousness.' },
      { title: '7. Feeling / Sensation (Vedanā)', explanation: 'The immediate affective valence arising from contact: pleasant, painful, or neutral.' },
      { title: '8. Craving (Taṇhā)', explanation: 'The pivotal psychological reflex: grasping for pleasant sensations or aversion to unpleasant ones.' },
      { title: '9. Clinging / Grasping (Upādāna)', explanation: 'Intensified attachment to sensual desires, views, rituals, and the illusion of an autonomous self.' },
      { title: '10. Becoming (Bhava)', explanation: 'The accumulated karmic momentum propelling existence forward into future realms.' },
      { title: '11. Birth (Jāti)', explanation: 'Re-emergence of psycho-physical aggregates into a specific life realm.' },
      { title: '12. Aging and Death (Jarāmaraṇa)', explanation: 'The inevitable decay, sorrow, lamentation, pain, and grief that accompany conditioned life.' }
    ],
    canonicalPassage: {
      text: 'Imasmiṃ sati idaṃ hoti, imassuppādā idaṃ uppajjati; imasmiṃ asati idaṃ na hoti, imassa nirodhā idaṃ nirujjhati — When this exists, that comes to be; with the arising of this, that arises. When this does not exist, that does not come to be; with the cessation of this, that ceases.',
      source: 'Majjhima Nikāya 79 / Udāna 1.1'
    },
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Mahānidāna Sutta (DN 15), SN 12',
      status: 'Canonical Text'
    },
    relatedConcepts: ['Conditionality (Idappaccayatā)', 'Bhavachakra', 'Twelve Nidānas', 'Non-Self']
  },
  {
    id: 'karma-and-rebirth',
    title: 'Karma & The Cycle of Rebirth',
    paliName: 'Kamma & Saṃsāra (कम्म & संसार)',
    sanskritName: 'Karma & Saṃsāra',
    subtitle: 'The natural moral law of intentional action and its psychological fruits.',
    category: 'Core Doctrine',
    summary: 'In Buddhism, karma (kamma) strictly means "volitional action" (cetanā). It is not fatalistic destiny or cosmic retribution, but a psychological law of cause and effect: wholesome intentions yield peace and elevated rebirth, while unwholesome intentions generate friction and degradation.',
    metaphorOrParadigm: 'A seed planted in soil: wholesome seeds produce sweet fruit; toxic seeds yield poisonous thorn-bushes.',
    keyComponents: [
      {
        title: 'Intention as Karma (Cetanāhaṃ Bhikkhave Kammaṃ Vadāmi)',
        explanation: 'Action is defined by the mental intention preceding it. Acts performed without conscious intention do not generate moral karmic fruit.'
      },
      {
        title: 'The Three Roots of Unwholesomeness (Akusala-mūla)',
        explanation: 'Greed/Lust (Lobha), Hatred/Ill-Will (Dosa), and Delusion/Confusion (Moha).'
      },
      {
        title: 'The Three Roots of Wholesomeness (Kusala-mūla)',
        explanation: 'Generosity (Alobha), Loving-Kindness (Adosa), and Wisdom/Clarity (Amoha).'
      },
      {
        title: 'Rebirth without a Transmigrating Soul',
        explanation: 'Just as a flame passes from one candle to another without an unchanging physical entity moving, consciousness flows into new rebirth without an eternal unchanging soul (Anattā).'
      }
    ],
    canonicalPassage: {
      text: 'Mind precedes all mental states. Mind is their chief; they are all mind-made. If with an impure mind a person speaks or acts, suffering follows him like the wheel that follows the foot of the ox. If with a pure mind a person speaks or acts, happiness follows him like a never-departing shadow.',
      source: 'Dhammapada, Verses 1–2'
    },
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Aṅguttara Nikāya 6.63, Dhammapada',
      status: 'Canonical Text'
    },
    relatedConcepts: ['Cetanā', 'Three Poisons', 'Vipāka (Karmic Fruit)', 'Saṃsāra']
  },
  {
    id: 'mindfulness-satipatthana',
    title: 'Mindfulness & The Four Foundations',
    paliName: 'Satipaṭṭhāna (सतिपट्ठान)',
    sanskritName: 'Smṛtyupasthāna',
    subtitle: 'The direct path to the purification of beings and the realization of Nibbāna.',
    category: 'Ethics & Practice',
    summary: 'Satipaṭṭhāna is the systematic cultivation of bare, non-judgmental presence and clear comprehension (Sampajañña). It anchors awareness across four objective domains of experience to dismantle habitual cognitive distortions.',
    metaphorOrParadigm: 'The vigilant gatekeeper standing at the city gate, observing everything that enters and exits without getting entangled in the traffic.',
    keyComponents: [
      {
        title: '1. Contemplation of the Body (Kāyānupassanā)',
        explanation: 'Mindfulness of in-and-out breathing (Ānāpānasati), bodily postures, bodily activities, the 32 physical parts, and the 4 primary physical elements.'
      },
      {
        title: '2. Contemplation of Feelings (Vedanānupassanā)',
        explanation: 'Clear tracking of sensory tones as pleasant, painful, or neutral, discerning whether they are worldly or spiritual.'
      },
      {
        title: '3. Contemplation of Mind (Cittānupassanā)',
        explanation: 'Direct awareness of current mental quality: recognizing when the mind is lustful or free from lust, irritated or tranquil, distracted or concentrated.'
      },
      {
        title: '4. Contemplation of Dharmas / Phenomena (Dhammānupassanā)',
        explanation: 'Observing mental reality through theoretical frameworks: the 5 Hindrances, the 5 Aggregates, the 6 Sense Spheres, the 7 Factors of Awakening, and the 4 Noble Truths.'
      }
    ],
    canonicalPassage: {
      text: 'Ekāyano ayaṃ bhikkhave maggo sattānaṃ visuddhiyā... yadidaṃ cattāro satipaṭṭhānā — This is the direct path, monks, for the purification of beings, for the overcoming of sorrow and lamentation, for the disappearance of pain and grief, for the attainment of the true method, for the realization of Nibbāna—namely, the four foundations of mindfulness.',
      source: 'Satipaṭṭhāna Sutta, Majjhima Nikāya 10'
    },
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Majjhima Nikāya 10 & Dīgha Nikāya 22',
      status: 'Canonical Text'
    },
    relatedConcepts: ['Ānāpānasati', 'Sampajañña (Clear Comprehension)', 'Vipassanā', 'Seven Factors of Awakening']
  },
  {
    id: 'three-marks-of-existence',
    title: 'The Three Marks of Existence',
    paliName: 'Tilakkhaṇa (तिलक्खण)',
    sanskritName: 'Trilakṣaṇa',
    subtitle: 'The universal characteristics inherent in all conditioned reality.',
    category: 'Ontology',
    summary: 'The three universal stamps that characterize every compound, conditioned experience in the cosmos: Impermanence, Unsatisfactoriness, and Non-Self.',
    keyComponents: [
      {
        title: '1. Impermanence (Anicca)',
        explanation: 'Nothing in conditioned existence is static. Every physical structure, thought, sensation, and stellar body is in constant flux and dissolution.'
      },
      {
        title: '2. Unsatisfactoriness (Dukkha)',
        explanation: 'Because all things are impermanent, clinging to them as permanent anchors of security inevitably produces distress and disappointment.'
      },
      {
        title: '3. Non-Self / Insubstantiality (Anattā)',
        explanation: 'Nowhere within the physical body, feelings, perceptions, mental formations, or consciousness is there an eternal, unchanging, autonomous "soul" or "ego."'
      }
    ],
    canonicalPassage: {
      text: 'Sabbe saṅkhārā aniccā... Sabbe saṅkhārā dukkhā... Sabbe dhammā anattā — All conditioned things are impermanent; all conditioned things are unsatisfactory; all phenomena (conditioned and unconditioned) are non-self.',
      source: 'Dhammapada, Verses 277–279'
    },
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Anattalakkhaṇa Sutta (SN 22.59)',
      status: 'Canonical Text'
    },
    relatedConcepts: ['Anicca', 'Dukkha', 'Anattā', 'Emptiness (Śūnyatā)']
  },
  {
    id: 'nirvana',
    title: 'Nirvāṇa / Nibbāna',
    paliName: 'Nibbāna (निब्बान)',
    sanskritName: 'Nirvāṇa',
    subtitle: 'The Unconditioned Peace — the extinguishing of greed, hatred, and delusion.',
    category: 'Liberation',
    summary: 'Nibbāna literally translates to "unbinding" or "blowing out" (as a fire goes out when its fuel of craving is exhausted). It is not annihilation, heaven, or an altered mental state, but the supreme unconditioned reality (Asaṅkhata Dhātu) free from birth, aging, death, and suffering.',
    metaphorOrParadigm: 'The calm ocean after a storm; a flame extinguishing when fuel is no longer added.',
    keyComponents: [
      {
        title: 'Nirvāṇa with Residue (Sa-upādisesa Nibbāna)',
        explanation: 'The state of an awakened living person (Arahant / Buddha) whose mental defilements have been eradicated while the physical aggregates continue their natural lifespan.'
      },
      {
        title: 'Nirvāṇa without Residue (Anupādisesa Nibbāna / Parinirvāṇa)',
        explanation: 'The final cessation of the five psycho-physical aggregates at the death of an enlightened being, with no further rebirth in saṃsāra.'
      },
      {
        title: 'The Peace of Non-Clinging',
        explanation: 'The experiential tasting of supreme freedom in this very life: tranquility, fearlessness, boundless loving-kindness, and unshakeable wisdom.'
      }
    ],
    canonicalPassage: {
      text: 'There is, monks, an unborn, unbecome, unmade, unconditioned. If there were not that unborn, unbecome, unmade, unconditioned, there could not be made known here an escape from the born, become, made, conditioned.',
      source: 'Udāna 8.3'
    },
    metadata: {
      tradition: 'Cross-Tradition',
      source: 'Udāna 8.3, Majjhima Nikāya 26',
      status: 'Canonical Text'
    },
    relatedConcepts: ['Asaṅkhata (Unconditioned)', 'Parinirvāṇa', 'Peace (Santi)', 'Ultimate Freedom']
  }
];
