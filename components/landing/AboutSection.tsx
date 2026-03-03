'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    subheading: 'About Us',
    heading: 'Germany\'s Premier Fishing License Training',
    description: 'With over 15 years of experience, we have helped thousands of aspiring anglers obtain their fishing license. Our expert instructors provide comprehensive training that covers everything you need to know.',
    points: [
      'Certified and experienced instructors',
      'Highest exam pass rate in the region',
      'Flexible course schedules',
      'Practical hands-on training',
      'Comprehensive study materials',
      'Lifetime support after certification',
    ],
    button: 'Learn More About Us',
  },
  de: {
    subheading: 'Über uns',
    heading: 'Deutschlands führende Angelschein-Ausbildung',
    description: 'Mit über 15 Jahren Erfahrung haben wir Tausenden von angehenden Anglern geholfen, ihren Angelschein zu erwerben. Unsere Experten-Ausbilder bieten eine umfassende Schulung, die alles abdeckt, was Sie wissen müssen.',
    points: [
      'Zertifizierte und erfahrene Ausbilder',
      'Höchste Prüfungs-Erfolgsquote in der Region',
      'Flexible Kurspläne',
      'Praktisches Training',
      'Umfassende Lernmaterialien',
      'Lebenslange Unterstützung nach der Zertifizierung',
    ],
    button: 'Mehr über uns erfahren',
  },
};

const images = [
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1545816250-e12bedba42ba?w=300&h=250&fit=crop',
  'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=300&h=250&fit=crop',
  'https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=400&h=300&fit=crop',
];

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="subheading">{t.subheading}</span>
            <h2 className="heading">{t.heading}</h2>
            <p className="text-[var(--color-text-light)] mb-8 leading-relaxed">
              {t.description}
            </p>

            {/* Bullet Points */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {t.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-[var(--color-text-dark)]">{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn btn-primary">
              {t.button}
            </Link>
          </div>

          {/* Right Images - Overlapping Layout */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Main large image */}
            <div className="absolute left-0 top-0 w-[280px] h-[350px] rounded-2xl overflow-hidden shadow-xl z-10">
              <Image
                src={images[0]}
                alt="Fishing instructor"
                fill
                className="object-cover"
              />
            </div>

            {/* Top right image */}
            <div className="absolute right-0 top-8 w-[220px] h-[180px] rounded-2xl overflow-hidden shadow-xl z-20">
              <Image
                src={images[1]}
                alt="Fishing course"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom right image */}
            <div className="absolute right-8 top-[220px] w-[200px] h-[160px] rounded-2xl overflow-hidden shadow-xl z-30">
              <Image
                src={images[2]}
                alt="Fishing in nature"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom left image */}
            <div className="absolute left-12 bottom-0 w-[260px] h-[180px] rounded-2xl overflow-hidden shadow-xl z-40">
              <Image
                src={images[3]}
                alt="Fishing equipment"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -left-4 top-20 w-24 h-24 bg-[var(--color-primary-light)]/30 rounded-full -z-10" />
            <div className="absolute right-20 bottom-20 w-32 h-32 bg-[var(--color-accent)]/20 rounded-full -z-10" />
          </div>

          {/* Mobile Images */}
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {images.slice(0, 4).map((src, index) => (
              <div key={index} className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`Fishing image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
