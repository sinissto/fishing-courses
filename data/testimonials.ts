export interface Testimonial {
  id: string;
  name: string;
  role: string;
  roleDe: string;
  quote: string;
  quoteDe: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Peter Hoffmann',
    role: 'Hobby Angler',
    roleDe: 'Hobby-Angler',
    quote: 'The course was excellent! I passed my exam on the first try thanks to the thorough preparation.',
    quoteDe: 'Der Kurs war ausgezeichnet! Ich habe meine Prüfung beim ersten Versuch dank der gründlichen Vorbereitung bestanden.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=200&h=200&fit=crop',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sabine Keller',
    role: 'Weekend Angler',
    roleDe: 'Wochenend-Anglerin',
    quote: 'The instructors are very knowledgeable and patient. I highly recommend this course to anyone.',
    quoteDe: 'Die Ausbilder sind sehr kompetent und geduldig. Ich empfehle diesen Kurs jedem.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    rating: 5,
  },
  {
    id: '3',
    name: 'Klaus Wagner',
    role: 'Professional Angler',
    roleDe: 'Profi-Angler',
    quote: 'The advanced techniques course took my fishing skills to the next level. Worth every euro!',
    quoteDe: 'Der Kurs für fortgeschrittene Techniken hat meine Angelfähigkeiten auf ein neues Niveau gebracht. Jeden Euro wert!',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
    rating: 5,
  },
  {
    id: '4',
    name: 'Monika Schulz',
    role: 'First-time Angler',
    roleDe: 'Erstmalige Anglerin',
    quote: 'I was nervous about the exam, but the practice tests and study materials made everything clear.',
    quoteDe: 'Ich war nervös wegen der Prüfung, aber die Übungstests und Lernmaterialien haben alles klar gemacht.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    rating: 4,
  },
  {
    id: '5',
    name: 'Jürgen Meyer',
    role: 'Retired Teacher',
    roleDe: 'Pensionierter Lehrer',
    quote: 'Finally got my fishing license at 65! The course was well-structured and enjoyable.',
    quoteDe: 'Endlich mit 65 meinen Angelschein bekommen! Der Kurs war gut strukturiert und hat Spaß gemacht.',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop',
    rating: 5,
  },
];
