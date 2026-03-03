'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    description: 'Your trusted partner for obtaining your fishing license in Germany. We offer comprehensive courses taught by experienced instructors.',
    usefulLinks: 'Useful Links',
    home: 'Home',
    courses: 'Courses',
    aboutUs: 'About Us',
    contact: 'Contact',
    contactTitle: 'Contact',
    ourInstagram: 'Our Instagram',
    rights: 'All rights reserved.',
  },
  de: {
    description: 'Ihr vertrauenswürdiger Partner für den Angelschein in Deutschland. Wir bieten umfassende Kurse von erfahrenen Ausbildern.',
    usefulLinks: 'Nützliche Links',
    home: 'Startseite',
    courses: 'Kurse',
    aboutUs: 'Über uns',
    contact: 'Kontakt',
    contactTitle: 'Kontakt',
    ourInstagram: 'Unser Instagram',
    rights: 'Alle Rechte vorbehalten.',
  },
};

const instagramImages = [
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1545816250-e12bedba42ba?w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=150&h=150&fit=crop',
];

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-dark)] text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Logo, Description, Social */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎣</span>
              </div>
              <span className="font-bold text-xl">
                Angelschein<span className="text-[var(--color-primary-light)]">Kurse</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              {t.description}
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t.usefulLinks}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-[var(--color-primary-light)] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></span>
                  {t.home}
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses" 
                  className="text-gray-400 hover:text-[var(--color-primary-light)] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></span>
                  {t.courses}
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-400 hover:text-[var(--color-primary-light)] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></span>
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-400 hover:text-[var(--color-primary-light)] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></span>
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t.contactTitle}</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=Musterstraße+123,+10115+Berlin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[var(--color-primary-light)] transition-colors flex items-start gap-3"
                >
                  <MapPin className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  <span>Musterstraße 123, 10115 Berlin, Germany</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@angelschein-kurse.de"
                  className="text-gray-400 hover:text-[var(--color-primary-light)] transition-colors flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                  <span>info@angelschein-kurse.de</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+4930123456789"
                  className="text-gray-400 hover:text-[var(--color-primary-light)] transition-colors flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                  <span>+49 30 123 456 789</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Instagram */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t.ourInstagram}</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((src, index) => (
                <a 
                  key={index}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square overflow-hidden rounded-lg group"
                >
                  <Image
                    src={src}
                    alt={`Instagram post ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/50 transition-colors flex items-center justify-center">
                    <Instagram className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} AngelscheinKurse. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
