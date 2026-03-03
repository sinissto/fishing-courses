'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { courses } from '@/data/courses';
import { formatPrice } from '@/lib/utils';

const translations = {
  en: {
    subheading: 'Our Courses',
    heading: 'Featured Fishing Courses',
    addToCart: 'Add to Cart',
    viewAll: 'View All Courses',
  },
  de: {
    subheading: 'Unsere Kurse',
    heading: 'Ausgewählte Angelkurse',
    addToCart: 'In den Warenkorb',
    viewAll: 'Alle Kurse ansehen',
  },
};

export default function ShopSection() {
  const { language } = useLanguage();
  const { addItem } = useCart();
  const t = translations[language];

  const featuredCourses = courses.slice(0, 4);

  const handleAddToCart = (course: typeof courses[0]) => {
    addItem({
      id: course.id,
      title: language === 'de' ? course.titleDe : course.title,
      price: course.price,
      image: course.image,
    });
  };

  return (
    <section className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="subheading">{t.subheading}</span>
          <h2 className="heading">{t.heading}</h2>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <div key={course.id} className="card group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={language === 'de' ? course.titleDe : course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-[var(--color-accent)] text-white px-3 py-1 rounded-full text-sm font-bold">
                  {formatPrice(course.price)}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-[var(--color-primary)] font-medium uppercase">
                  {course.location}
                </span>
                <h3 className="text-lg font-bold mt-1 mb-2 line-clamp-2">
                  {language === 'de' ? course.titleDe : course.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light)] mb-4 line-clamp-2">
                  {language === 'de' ? course.shortDescriptionDe : course.shortDescription}
                </p>
                <button
                  onClick={() => handleAddToCart(course)}
                  className="w-full btn btn-primary flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {t.addToCart}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all"
          >
            {t.viewAll}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
