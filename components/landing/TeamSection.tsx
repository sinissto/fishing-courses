'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { teamMembers } from '@/data/team';

const translations = {
  en: {
    subheading: 'Our Team',
    heading: 'Our Fishing Expert Team',
  },
  de: {
    subheading: 'Unser Team',
    heading: 'Unser Angel-Experten-Team',
  },
};

export default function TeamSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const visibleCards = 4;
  const maxIndex = Math.max(0, teamMembers.length - visibleCards);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  return (
    <section className="section-padding bg-[var(--color-bg-light)]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="subheading">{t.subheading}</span>
          <h2 className="heading">{t.heading}</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
              currentIndex > 0
                ? 'opacity-100 hover:bg-[var(--color-primary)] hover:text-white'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
              currentIndex < maxIndex
                ? 'opacity-100 hover:bg-[var(--color-primary)] hover:text-white'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={carouselRef}>
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards + 1.5)}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
                >
                  <div className="group cursor-pointer">
                    {/* Image Container */}
                    <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay with Social Icons */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                        <div className="flex gap-3">
                          {member.facebook && (
                            <a
                              href={member.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                            >
                              <Facebook className="w-5 h-5" />
                            </a>
                          )}
                          {member.instagram && (
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
                            >
                              <Instagram className="w-5 h-5" />
                            </a>
                          )}
                          {member.twitter && (
                            <a
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150"
                            >
                              <Twitter className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-[var(--color-primary)]">
                        {language === 'de' ? member.titleDe : member.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
