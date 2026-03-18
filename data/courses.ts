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
  locationDe: string;
  image: string;
  features: string[];
  featuresDe: string[];
  startDates: string[];
  level: "beginner" | "advanced" | "all";
  url: string;
}

export const courses: Course[] = [
  {
    id: "online-course",
    title: "Online Course",
    titleDe: "Online-Kurs",
    description:
      "Complete preparation online course for your fishing license exam. Learn everything about fish species, fishing techniques, and regulations.",
    descriptionDe:
      "Bereiten Sie sich mit diesem umfassenden Online-Kurs optimal auf Ihre Angelscheinprüfung vor. Lernen Sie alles über Fischarten, Angeltechniken und die geltenden Bestimmungen.",
    shortDescription: "Complete exam preparation with expert guidance",
    shortDescriptionDe:
      "Vollständige Prüfungsvorbereitung mit Expertenbegleitung",
    price: 279,
    duration: "30 hours",
    durationDe: "30 Stunden",
    location: "Online",
    locationDe: "Online",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    features: [
      "Official exam preparation",
      "Practice tests included",
      "Certificate upon completion",
      "Small group learning",
    ],
    featuresDe: [
      "Offizielle Prüfungsvorbereitung",
      "Übungstests inklusive",
      "Zertifikat nach Abschluss",
      "Lernen in kleinen Gruppen",
    ],
    startDates: ["2026-04-15", "2026-05-01", "2026-05-15"],
    level: "beginner",
    url: "/courses/online",
  },
  {
    id: "specialized-courses",
    title: "Specialized Courses",
    titleDe: "Spezialkurse",
    description:
      "Fast-track course for your fishing license. Perfect for busy professionals.",
    descriptionDe:
      "Schnellkurs zum Erwerb Ihres Angelscheins. Ideal für vielbeschäftigte Berufstätige.",
    shortDescription: "Get licensed in just one weekend",
    shortDescriptionDe: "Lizenz an nur einem Wochenende",
    price: 279,
    duration: "2 days",
    durationDe: "2 Tage",
    location: "Munich",
    locationDe: "München",
    image:
      "https://images.unsplash.com/photo-1545816250-e12bedba42ba?w=800&h=600&fit=crop",
    features: [
      "Concentrated learning",
      "All materials provided",
      "Exam on Sunday",
      "Lunch included",
    ],
    featuresDe: [
      "Konzentriertes Lernen",
      "Alle Materialien inklusive",
      "Prüfung am Sonntag",
      "Mittagessen inklusive",
    ],
    startDates: ["2026-04-20", "2026-05-04", "2026-05-18"],
    level: "beginner",
    url: "/courses/specialized",
  },
  {
    id: "compact-courses",
    title: "Compact Courses",
    titleDe: "Kompaktkurse",
    description:
      "Only suitable for anglers whose main residence is in the state of Bavaria.",
    descriptionDe:
      "Nur geeignet für Angler, deren Hauptwohnsitz im Freistaat Bayern liegt.",
    shortDescription:
      "For anglers whose main residence is in the state of Bavaria.",
    shortDescriptionDe:
      "Für Angler, deren Hauptwohnsitz im Freistaat Bayern liegt.",
    price: 199,
    duration: "4 days",
    durationDe: "4 Tage",
    location: "Munich",
    locationDe: "München",
    image:
      "https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=800&h=600&fit=crop",
    features: [
      "24/7 access",
      "Video lessons",
      "Interactive quizzes",
      "Forum support",
    ],
    featuresDe: [
      "24/7 Zugang",
      "Video-Lektionen",
      "Interaktive Quiz",
      "Forum-Support",
    ],
    startDates: ["2026-04-01"],
    level: "beginner",
    url: "/courses/compact",
  },
  {
    id: "individual-course",
    title: "Individual course with private lessons",
    titleDe: "Einzelkurs mit Privatstunden",
    description:
      "Only suitable for anglers whose main residence is in the state of Bavaria ",
    descriptionDe: "Nur geeignet für Angler mit Hauptwohnsitz in Bayern.",
    shortDescription: "Master advanced fishing methods",
    shortDescriptionDe: "Meistern Sie fortgeschrittene Methoden",
    price: 999,
    duration: "30 hours",
    durationDe: "30 Stunden",
    location: "Munich",
    locationDe: "München",
    image:
      "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=800&h=600&fit=crop",
    features: [
      "Advanced casting techniques",
      "Fly fishing basics",
      "Lake and river tactics",
      "Equipment optimization",
    ],
    featuresDe: [
      "Fortgeschrittene Wurftechniken",
      "Fliegenfischen Grundlagen",
      "See- und Flusstaktiken",
      "Ausrüstungsoptimierung",
    ],
    startDates: ["2026-04-22", "2026-05-10"],
    level: "advanced",
    url: "/courses/individual",
  },
  {
    id: "angling-clubs-coursea",
    title: "Courses for angling clubs",
    titleDe: "Kurse für Angelvereine",
    description:
      "Only suitable for anglers whose main residence is in the state of Bavaria",
    descriptionDe: "Nur geeignet für Angler mit Hauptwohnsitz in Bayern.",
    shortDescription: "Fishing course for the whole angling club",
    shortDescriptionDe: "Angelkurs für den gesamten Angelverein",
    price: 199,
    duration: "4 days",
    durationDe: "4 Tage",
    location: "Munich",
    locationDe: "München",
    image:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&h=600&fit=crop",
    features: [
      "Family-friendly environment",
      "Kids activities included",
      "Equipment provided",
      "Picnic included",
    ],
    featuresDe: [
      "Familienfreundliche Umgebung",
      "Kinderaktivitäten inklusive",
      "Ausrüstung gestellt",
      "Picknick inklusive",
    ],
    startDates: ["2026-04-25", "2026-05-23"],
    level: "all",
    url: "/courses/angling-clubs",
  },
  {
    id: "practical-course",
    title: "Practical Courses",
    titleDe: "Praxiskurse",
    description:
      "Fly fishing, Feeder fishing, Bolognese fishing, Match fishing",
    descriptionDe:
      "Fliegenfischen, Feederfischen, Bolognesefischen, Wettkampffischen",
    shortDescription: "Fly fishing, Feeder fishing...",
    shortDescriptionDe: "Fliegenfischen, Feederfischen...",
    price: 279,
    duration: "2 day",
    durationDe: "2 Tag",
    location: "Munich",
    locationDe: "München",
    image:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&h=600&fit=crop",
    features: ["2 Tage Theorie und Praxis"],
    featuresDe: ["2 Tage Theorie- und Praxisunterricht"],
    startDates: ["2026-05-01", "2026-05-15", "2026-06-01"],
    level: "advanced",
    url: "/courses/practical",
  },
];
