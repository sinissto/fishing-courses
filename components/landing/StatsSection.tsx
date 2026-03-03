'use client';

import { useEffect, useState, useRef } from 'react';
import { Users, Award, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const stats = [
  {
    icon: Users,
    number: 5000,
    suffix: '+',
    label: 'Happy Students',
    labelDe: 'Zufriedene Schüler',
  },
  {
    icon: Award,
    number: 98,
    suffix: '%',
    label: 'Pass Rate',
    labelDe: 'Erfolgsquote',
  },
  {
    icon: MapPin,
    number: 25,
    suffix: '+',
    label: 'Locations',
    labelDe: 'Standorte',
  },
  {
    icon: Calendar,
    number: 15,
    suffix: '+',
    label: 'Years Experience',
    labelDe: 'Jahre Erfahrung',
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const { language } = useLanguage();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=1920&h=600&fit=crop)' }}
      />
      <div className="overlay" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-accent)]" />
                </div>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                <p className="text-white/80 mt-2 text-sm md:text-base">
                  {language === 'de' ? stat.labelDe : stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
