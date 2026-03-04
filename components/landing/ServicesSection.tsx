"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Users,
  Award,
  Fish,
  Compass,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  {
    icon: BookOpen,
    title: "Exam Preparation",
    titleDe: "Prüfungsvorbereitung",
    description:
      "Comprehensive study materials and practice tests to ensure you pass your fishing license exam.",
    descriptionDe:
      "Umfassende Lernmaterialien und Übungstests, um Ihre Fischerprüfung zu bestehen.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
    link: "/courses",
  },
  {
    icon: Users,
    title: "Group Courses",
    titleDe: "Gruppenkurse",
    description:
      "Learn together with other fishing enthusiasts in our interactive group sessions.",
    descriptionDe:
      "Lernen Sie gemeinsam mit anderen Angel-Enthusiasten in unseren interaktiven Gruppensitzungen.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    link: "/courses",
  },
  {
    icon: Award,
    title: "Certification",
    titleDe: "Zertifizierung",
    description:
      "Receive official certification upon completing our courses, recognized throughout Germany.",
    descriptionDe:
      "Erhalten Sie nach Abschluss unserer Kurse eine offizielle Zertifizierung, die deutschlandweit anerkannt ist.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    link: "/about",
  },
  {
    icon: Fish,
    title: "Practical Training",
    titleDe: "Praktisches Training",
    description:
      "Hands-on fishing experience at beautiful lakes and rivers across Germany.",
    descriptionDe:
      "Praktische Angelerfahrung an wunderschönen Seen und Flüssen in ganz Deutschland.",
    image:
      "https://images.unsplash.com/photo-1545816250-e12bedba42ba?w=600&h=400&fit=crop",
    link: "/courses",
  },
  {
    icon: Compass,
    title: "Guided Tours",
    titleDe: "Geführte Touren",
    description:
      "Explore the best fishing spots with our experienced guides and local experts.",
    descriptionDe:
      "Erkunden Sie die besten Angelplätze mit unseren erfahrenen Guides und lokalen Experten.",
    image:
      "https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=600&h=400&fit=crop",
    link: "/courses",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    titleDe: "Flexible Terminplanung",
    description:
      "Choose from weekday, weekend, or online courses that fit your schedule.",
    descriptionDe:
      "Wählen Sie aus Wochentags-, Wochenend- oder Online-Kursen, die in Ihren Zeitplan passen.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop",
    link: "/courses",
  },
];

const translations = {
  en: {
    subheading: "Our Services",
    heading: "Our Awesome Services",
    readMore: "Read More",
  },
  de: {
    subheading: "Unsere Dienstleistungen",
    heading: "Unsere tollen Dienstleistungen",
    readMore: "Mehr erfahren",
  },
};

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollButtons);
      return () => carousel.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.querySelector(
        ".card"
      ) as HTMLElement;
      const scrollAmount = firstCard ? firstCard.offsetWidth + 24 : 340; // card width + gap
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="section-padding bg-[var(--color-bg-light)]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="subheading">{t.subheading}</span>
          <h2 className="heading">{t.heading}</h2>
        </div>

        {/* Carousel Container with Navigation */}
        <div className="flex items-center gap-4">
          {/* Left Navigation Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
              canScrollLeft
                ? "opacity-100 hover:bg-[var(--color-primary)] hover:text-white cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className={`flex-1 flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-4 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] card group select-none snap-start"
                >
                  {/* Image with Overlapping Icon */}
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image}
                      alt={language === "de" ? service.titleDe : service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      draggable={false}
                    />
                    <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-10">
                    <h3 className="text-xl font-bold mb-3">
                      {language === "de" ? service.titleDe : service.title}
                    </h3>
                    <p className="text-[var(--color-text-light)] mb-4 text-sm leading-relaxed">
                      {language === "de"
                        ? service.descriptionDe
                        : service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all"
                      onClick={(e) => isDragging && e.preventDefault()}
                    >
                      {t.readMore}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
            {/* Spacer to prevent last card from being cut off */}
            <div className="flex-shrink-0 w-4"></div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
              canScrollRight
                ? "opacity-100 hover:bg-[var(--color-primary)] hover:text-white cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
