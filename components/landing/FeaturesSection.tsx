'use client';

import { Shield, Clock, Users, Headphones, BookOpen, Award, MapPin, CreditCard } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const features = [
  {
    icon: Shield,
    title: 'Official Certification',
    titleDe: 'Offizielle Zertifizierung',
    description: 'Receive recognized certification valid throughout Germany.',
    descriptionDe: 'Erhalten Sie eine anerkannte Zertifizierung, die deutschlandweit gültig ist.',
  },
  {
    icon: Clock,
    title: 'Flexible Schedules',
    titleDe: 'Flexible Zeitpläne',
    description: 'Choose from weekday, weekend, or online courses.',
    descriptionDe: 'Wählen Sie aus Wochentags-, Wochenend- oder Online-Kursen.',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    titleDe: 'Experten-Ausbilder',
    description: 'Learn from certified professionals with years of experience.',
    descriptionDe: 'Lernen Sie von zertifizierten Profis mit jahrelanger Erfahrung.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    titleDe: '24/7 Unterstützung',
    description: 'Get help whenever you need it with our support team.',
    descriptionDe: 'Erhalten Sie jederzeit Hilfe von unserem Support-Team.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Materials',
    titleDe: 'Umfassende Materialien',
    description: 'Access all study materials, practice tests, and resources.',
    descriptionDe: 'Zugang zu allen Lernmaterialien, Übungstests und Ressourcen.',
  },
  {
    icon: Award,
    title: 'High Pass Rate',
    titleDe: 'Hohe Erfolgsquote',
    description: 'Our students have a 98% first-time pass rate.',
    descriptionDe: 'Unsere Schüler haben eine 98% Erfolgsquote beim ersten Versuch.',
  },
  {
    icon: MapPin,
    title: 'Multiple Locations',
    titleDe: 'Mehrere Standorte',
    description: 'Find a course near you with our nationwide network.',
    descriptionDe: 'Finden Sie einen Kurs in Ihrer Nähe mit unserem deutschlandweiten Netzwerk.',
  },
  {
    icon: CreditCard,
    title: 'Easy Payment',
    titleDe: 'Einfache Zahlung',
    description: 'Secure payment options including PayPal and cards.',
    descriptionDe: 'Sichere Zahlungsoptionen einschließlich PayPal und Karten.',
  },
];

const translations = {
  en: {
    subheading: 'Why Choose Us',
    heading: 'Features That Set Us Apart',
  },
  de: {
    subheading: 'Warum uns wählen',
    heading: 'Merkmale, die uns auszeichnen',
  },
};

export default function FeaturesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="subheading">{t.subheading}</span>
          <h2 className="heading">{t.heading}</h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[var(--color-primary-50)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <Icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {language === 'de' ? feature.titleDe : feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                  {language === 'de' ? feature.descriptionDe : feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
