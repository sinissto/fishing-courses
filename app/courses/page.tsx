'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { courses } from '@/data/courses';
import CourseCard from '@/components/CourseCard';

const translations = {
  en: {
    title: 'Our Fishing Courses',
    subtitle: 'Find the perfect course to get your fishing license in Germany',
    searchPlaceholder: 'Search courses...',
    filterByLevel: 'Filter by Level',
    all: 'All Courses',
    beginner: 'Beginner',
    advanced: 'Advanced',
    filterByLocation: 'Filter by Location',
    allLocations: 'All Locations',
    noResults: 'No courses found matching your criteria.',
    clearFilters: 'Clear Filters',
    coursesFound: 'courses found',
  },
  de: {
    title: 'Unsere Angelkurse',
    subtitle: 'Finden Sie den perfekten Kurs für Ihren Angelschein in Deutschland',
    searchPlaceholder: 'Kurse suchen...',
    filterByLevel: 'Nach Level filtern',
    all: 'Alle Kurse',
    beginner: 'Anfänger',
    advanced: 'Fortgeschritten',
    filterByLocation: 'Nach Standort filtern',
    allLocations: 'Alle Standorte',
    noResults: 'Keine Kurse gefunden, die Ihren Kriterien entsprechen.',
    clearFilters: 'Filter löschen',
    coursesFound: 'Kurse gefunden',
  },
};

export default function CoursesPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const searchParams = useSearchParams();
  
  const initialLevel = searchParams.get('level') || 'all';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState(initialLevel);
  const [locationFilter, setLocationFilter] = useState('all');

  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(courses.map(c => c.location))];
    return uniqueLocations.sort();
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const searchTarget = language === 'de' 
        ? `${course.titleDe} ${course.descriptionDe}`.toLowerCase()
        : `${course.title} ${course.description}`.toLowerCase();
      
      const matchesSearch = !searchQuery || searchTarget.includes(searchQuery.toLowerCase());
      const matchesLevel = levelFilter === 'all' || course.level === levelFilter || course.level === 'all';
      const matchesLocation = locationFilter === 'all' || course.location === locationFilter;

      return matchesSearch && matchesLevel && matchesLocation;
    });
  }, [searchQuery, levelFilter, locationFilter, language]);

  const clearFilters = () => {
    setSearchQuery('');
    setLevelFilter('all');
    setLocationFilter('all');
  };

  const hasActiveFilters = searchQuery || levelFilter !== 'all' || locationFilter !== 'all';

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-[var(--color-primary-dark)] py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=400&fit=crop)' }}
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      {/* Filters & Content */}
      <div className="container section-padding">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 -mt-12 relative z-20">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              />
            </div>

            {/* Level Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="appearance-none pl-12 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-white cursor-pointer min-w-[180px]"
              >
                <option value="all">{t.all}</option>
                <option value="beginner">{t.beginner}</option>
                <option value="advanced">{t.advanced}</option>
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent bg-white cursor-pointer min-w-[180px]"
              >
                <option value="all">{t.allLocations}</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-3 text-[var(--color-primary)] hover:bg-[var(--color-primary-50)] rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
                {t.clearFilters}
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-[var(--color-text-light)] mb-6">
          {filteredCourses.length} {t.coursesFound}
        </p>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="space-y-8">
            {/* Featured Course (first one) */}
            {filteredCourses.length > 0 && (
              <CourseCard course={filteredCourses[0]} featured />
            )}

            {/* Rest of courses in grid */}
            {filteredCourses.length > 1 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.slice(1).map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-[var(--color-text-light)]">{t.noResults}</p>
            <button
              onClick={clearFilters}
              className="mt-4 btn btn-primary"
            >
              {t.clearFilters}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
