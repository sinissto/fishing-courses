'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { testimonials } from '@/data/testimonials';

const translations = {
  en: {
    subheading: 'Testimonials',
    heading: 'What Our Students Say',
  },
  de: {
    subheading: 'Erfahrungsberichte',
    heading: 'Was unsere Schüler sagen',
  },
};

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((currentIndex + 1) % testimonials.length);

  return (
    <section className="section-padding bg-[var(--color-bg-light)]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="subheading">{t.subheading}</span>
          <h2 className="heading">{t.heading}</h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1 mb-6 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? 'text-[var(--color-accent)] fill-[var(--color-accent)]'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg md:text-xl text-[var(--color-text-light)] mb-8 italic leading-relaxed">
                      &ldquo;{language === 'de' ? testimonial.quoteDe : testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-[var(--color-primary-light)]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-[var(--color-text-dark)]">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[var(--color-text-light)]">
                          {language === 'de' ? testimonial.roleDe : testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[var(--color-primary)] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
