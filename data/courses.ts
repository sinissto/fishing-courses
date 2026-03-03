export interface Course {
  id: string;
  title: string;
  titleDe: string;
  description: string;
  descriptionDe: string;
  shortDescription: string;
  shortDescriptionDe: string;
  price: number;
  duration: string;
  durationDe: string;
  location: string;
  image: string;
  features: string[];
  featuresDe: string[];
  startDates: string[];
  level: 'beginner' | 'advanced' | 'all';
}

export const courses: Course[] = [
  {
    id: 'basic-fishing-license',
    title: 'Basic Fishing License Course',
    titleDe: 'Grundkurs Angelschein',
    description: 'Complete preparation course for your fishing license exam. Learn everything about fish species, fishing techniques, and regulations.',
    descriptionDe: 'Vollständiger Vorbereitungskurs für Ihre Fischerprüfung. Lernen Sie alles über Fischarten, Angeltechniken und Vorschriften.',
    shortDescription: 'Complete exam preparation with expert guidance',
    shortDescriptionDe: 'Vollständige Prüfungsvorbereitung mit Expertenbegleitung',
    price: 149,
    duration: '30 hours',
    durationDe: '30 Stunden',
    location: 'Berlin',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    features: [
      'Official exam preparation',
      'Practice tests included',
      'Certificate upon completion',
      'Small group learning',
    ],
    featuresDe: [
      'Offizielle Prüfungsvorbereitung',
      'Übungstests inklusive',
      'Zertifikat nach Abschluss',
      'Lernen in kleinen Gruppen',
    ],
    startDates: ['2026-04-15', '2026-05-01', '2026-05-15'],
    level: 'beginner',
  },
  {
    id: 'intensive-weekend',
    title: 'Intensive Weekend Course',
    titleDe: 'Intensiv-Wochenendkurs',
    description: 'Get your fishing license in just one weekend with our intensive course. Perfect for busy professionals.',
    descriptionDe: 'Erhalten Sie Ihren Angelschein an nur einem Wochenende mit unserem Intensivkurs. Perfekt für Berufstätige.',
    shortDescription: 'Get licensed in just one weekend',
    shortDescriptionDe: 'Lizenz an nur einem Wochenende',
    price: 199,
    duration: '2 days',
    durationDe: '2 Tage',
    location: 'Munich',
    image: 'https://images.unsplash.com/photo-1545816250-e12bedba42ba?w=800&h=600&fit=crop',
    features: [
      'Concentrated learning',
      'All materials provided',
      'Exam on Sunday',
      'Lunch included',
    ],
    featuresDe: [
      'Konzentriertes Lernen',
      'Alle Materialien inklusive',
      'Prüfung am Sonntag',
      'Mittagessen inklusive',
    ],
    startDates: ['2026-04-20', '2026-05-04', '2026-05-18'],
    level: 'beginner',
  },
  {
    id: 'online-course',
    title: 'Online Fishing Course',
    titleDe: 'Online Angelkurs',
    description: 'Learn at your own pace with our comprehensive online course. Access materials 24/7 from anywhere.',
    descriptionDe: 'Lernen Sie in Ihrem eigenen Tempo mit unserem umfassenden Online-Kurs. Zugang zu Materialien rund um die Uhr.',
    shortDescription: 'Learn anytime, anywhere online',
    shortDescriptionDe: 'Lernen Sie jederzeit und überall online',
    price: 99,
    duration: 'Self-paced',
    durationDe: 'Selbstbestimmt',
    location: 'Online',
    image: 'https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=800&h=600&fit=crop',
    features: [
      '24/7 access',
      'Video lessons',
      'Interactive quizzes',
      'Forum support',
    ],
    featuresDe: [
      '24/7 Zugang',
      'Video-Lektionen',
      'Interaktive Quiz',
      'Forum-Support',
    ],
    startDates: ['2026-04-01'],
    level: 'beginner',
  },
  {
    id: 'advanced-techniques',
    title: 'Advanced Fishing Techniques',
    titleDe: 'Fortgeschrittene Angeltechniken',
    description: 'Master advanced fishing techniques with our expert instructors. For licensed anglers looking to improve.',
    descriptionDe: 'Meistern Sie fortgeschrittene Angeltechniken mit unseren Experten. Für lizenzierte Angler zur Verbesserung.',
    shortDescription: 'Master advanced fishing methods',
    shortDescriptionDe: 'Meistern Sie fortgeschrittene Methoden',
    price: 249,
    duration: '40 hours',
    durationDe: '40 Stunden',
    location: 'Hamburg',
    image: 'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=800&h=600&fit=crop',
    features: [
      'Advanced casting techniques',
      'Fly fishing basics',
      'Lake and river tactics',
      'Equipment optimization',
    ],
    featuresDe: [
      'Fortgeschrittene Wurftechniken',
      'Fliegenfischen Grundlagen',
      'See- und Flusstaktiken',
      'Ausrüstungsoptimierung',
    ],
    startDates: ['2026-04-22', '2026-05-10'],
    level: 'advanced',
  },
  {
    id: 'family-course',
    title: 'Family Fishing Course',
    titleDe: 'Familien-Angelkurs',
    description: 'A fun and educational fishing course for the whole family. Learn together and create lasting memories.',
    descriptionDe: 'Ein spaßiger und lehrreicher Angelkurs für die ganze Familie. Gemeinsam lernen und bleibende Erinnerungen schaffen.',
    shortDescription: 'Fun fishing for the whole family',
    shortDescriptionDe: 'Angelspaß für die ganze Familie',
    price: 299,
    duration: '3 days',
    durationDe: '3 Tage',
    location: 'Lake Constance',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&h=600&fit=crop',
    features: [
      'Family-friendly environment',
      'Kids activities included',
      'Equipment provided',
      'Picnic included',
    ],
    featuresDe: [
      'Familienfreundliche Umgebung',
      'Kinderaktivitäten inklusive',
      'Ausrüstung gestellt',
      'Picknick inklusive',
    ],
    startDates: ['2026-04-25', '2026-05-23'],
    level: 'all',
  },
  {
    id: 'sea-fishing',
    title: 'Sea Fishing Expedition',
    titleDe: 'Hochsee-Angel-Expedition',
    description: 'Experience deep sea fishing with our experienced captains. A thrilling adventure for advanced anglers.',
    descriptionDe: 'Erleben Sie Hochseefischen mit unseren erfahrenen Kapitänen. Ein aufregendes Abenteuer für fortgeschrittene Angler.',
    shortDescription: 'Deep sea adventure for experienced anglers',
    shortDescriptionDe: 'Hochsee-Abenteuer für erfahrene Angler',
    price: 399,
    duration: '1 day',
    durationDe: '1 Tag',
    location: 'North Sea',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&h=600&fit=crop',
    features: [
      'Boat trip included',
      'All gear provided',
      'Experienced captain',
      'Fish cleaning service',
    ],
    featuresDe: [
      'Bootsfahrt inklusive',
      'Ausrüstung gestellt',
      'Erfahrener Kapitän',
      'Fisch-Reinigungsservice',
    ],
    startDates: ['2026-05-01', '2026-05-15', '2026-06-01'],
    level: 'advanced',
  },
];
