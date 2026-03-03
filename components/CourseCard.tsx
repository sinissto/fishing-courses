'use client';

import Image from 'next/image';
import { ShoppingCart, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { Course } from '@/data/courses';
import { formatPrice } from '@/lib/utils';

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

const translations = {
  en: {
    addToCart: 'Add to Cart',
    features: 'Features',
    duration: 'Duration',
    location: 'Location',
  },
  de: {
    addToCart: 'In den Warenkorb',
    features: 'Merkmale',
    duration: 'Dauer',
    location: 'Standort',
  },
};

export default function CourseCard({ course, featured = false }: CourseCardProps) {
  const { language } = useLanguage();
  const { addItem } = useCart();
  const t = translations[language];

  const title = language === 'de' ? course.titleDe : course.title;
  const description = language === 'de' ? course.descriptionDe : course.description;
  const duration = language === 'de' ? course.durationDe : course.duration;
  const features = language === 'de' ? course.featuresDe : course.features;

  const handleAddToCart = () => {
    addItem({
      id: course.id,
      title,
      price: course.price,
      image: course.image,
    });
  };

  if (featured) {
    return (
      <div className="card group flex flex-col lg:flex-row overflow-hidden">
        {/* Image */}
        <div className="relative w-full lg:w-2/5 h-64 lg:h-auto">
          <Image
            src={course.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-[var(--color-accent)] text-white px-4 py-2 rounded-full text-lg font-bold">
            {formatPrice(course.price)}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center gap-1 text-sm text-[var(--color-text-light)]">
              <Clock className="w-4 h-4 text-[var(--color-primary)]" />
              {duration}
            </span>
            <span className="inline-flex items-center gap-1 text-sm text-[var(--color-text-light)]">
              <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
              {course.location}
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-[var(--color-text-light)] mb-4 leading-relaxed">{description}</p>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">{t.features}:</h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-auto btn btn-primary flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            {t.addToCart}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-[var(--color-accent)] text-white px-3 py-1 rounded-full text-sm font-bold">
          {formatPrice(course.price)}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2 text-sm text-[var(--color-text-light)]">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-[var(--color-primary)]" />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
            {course.location}
          </span>
        </div>

        <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-[var(--color-text-light)] mb-4 line-clamp-2">
          {language === 'de' ? course.shortDescriptionDe : course.shortDescription}
        </p>

        <button
          onClick={handleAddToCart}
          className="w-full btn btn-primary flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          {t.addToCart}
        </button>
      </div>
    </div>
  );
}
