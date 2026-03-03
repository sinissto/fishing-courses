'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const blogPosts = [
  {
    id: '1',
    title: 'Top 10 Fishing Spots in Germany',
    titleDe: 'Top 10 Angelplätze in Deutschland',
    excerpt: 'Discover the best lakes and rivers for fishing in Germany, from the Baltic Sea to the Bavarian Alps.',
    excerptDe: 'Entdecken Sie die besten Seen und Flüsse zum Angeln in Deutschland, von der Ostsee bis zu den bayerischen Alpen.',
    image: 'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=600&h=400&fit=crop',
    author: 'Hans Müller',
    date: '2026-02-15',
  },
  {
    id: '2',
    title: 'Beginner\'s Guide to Fly Fishing',
    titleDe: 'Anfänger-Leitfaden für Fliegenfischen',
    excerpt: 'Everything you need to know to get started with fly fishing, from equipment to techniques.',
    excerptDe: 'Alles, was Sie wissen müssen, um mit dem Fliegenfischen zu beginnen, von der Ausrüstung bis zu den Techniken.',
    image: 'https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=600&h=400&fit=crop',
    author: 'Maria Schmidt',
    date: '2026-02-10',
  },
  {
    id: '3',
    title: 'Understanding German Fishing Regulations',
    titleDe: 'Deutsche Fischereivorschriften verstehen',
    excerpt: 'A comprehensive guide to fishing laws and regulations across different German states.',
    excerptDe: 'Ein umfassender Leitfaden zu Fischereigesetzen und -vorschriften in verschiedenen Bundesländern.',
    image: 'https://images.unsplash.com/photo-1545816250-e12bedba42ba?w=600&h=400&fit=crop',
    author: 'Thomas Weber',
    date: '2026-02-05',
  },
];

const translations = {
  en: {
    subheading: 'Our Blog',
    heading: 'Latest News & Tips',
    readMore: 'Read More',
    viewAll: 'View All Posts',
  },
  de: {
    subheading: 'Unser Blog',
    heading: 'Neueste Nachrichten & Tipps',
    readMore: 'Weiterlesen',
    viewAll: 'Alle Beiträge ansehen',
  },
};

export default function BlogSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <section className="section-padding bg-[var(--color-bg-light)]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="subheading">{t.subheading}</span>
          <h2 className="heading">{t.heading}</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card group">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={language === 'de' ? post.titleDe : post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-[var(--color-text-light)] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                  {language === 'de' ? post.titleDe : post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[var(--color-text-light)] mb-4 line-clamp-3">
                  {language === 'de' ? post.excerptDe : post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all"
                >
                  {t.readMore}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="#"
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
