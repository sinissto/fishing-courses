"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import heroImage1 from "@/assets/images/hero/hero-bg-1-1.jpg";
import heroImage2 from "@/assets/images/hero/hero-bg-1-2.jpg";
import heroImage3 from "@/assets/images/hero/hero-bg-1-3.jpg";
import heroImageShape from "@/assets/images/hero/hero-shape1.png";

const slides = [
  {
    image: heroImage1.src,
    title: "Get Your Fishing License",
    titleDe: "Holen Sie sich Ihren Angelschein",
    subtitle:
      "Professional courses to help you become a licensed angler in Germany",
    subtitleDe:
      "Professionelle Kurse, um lizenzierter Angler in Deutschland zu werden",
  },
  {
    image: heroImage2.src,
    title: "Learn From Experts",
    titleDe: "Lernen Sie von Experten",
    subtitle: "Our experienced instructors guide you through every step",
    subtitleDe: "Unsere erfahrenen Ausbilder begleiten Sie bei jedem Schritt",
  },
  {
    image: heroImage3.src,
    title: "Start Your Journey Today",
    titleDe: "Starten Sie Ihre Reise heute",
    subtitle:
      "Join thousands of satisfied students who got their license with us",
    subtitleDe:
      "Schließen Sie sich Tausenden zufriedener Schüler an, die ihren Schein bei uns gemacht haben",
  },
];

const translations = {
  en: {
    exploreCourses: "Explore Courses",
    learnMore: "Learn More",
  },
  de: {
    exploreCourses: "Kurse entdecken",
    learnMore: "Mehr erfahren",
  },
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 because of clone
  const [isTransitioning, setIsTransitioning] = useState(true);
  const { language } = useLanguage();
  const t = translations[language];

  // Mouse drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Create infinite loop slides: [last, ...slides, first]
  const infiniteSlides = [
    slides[slides.length - 1], // Clone of last slide at beginning
    ...slides,
    slides[0], // Clone of first slide at end
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        goToNext();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isDragging, currentSlide]);

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  // Handle infinite loop jump
  useEffect(() => {
    if (currentSlide === infiniteSlides.length - 1) {
      // At the cloned first slide, jump to real first slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 500);
    } else if (currentSlide === 0) {
      // At the cloned last slide, jump to real last slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(infiniteSlides.length - 2);
      }, 500);
    }
  }, [currentSlide, infiniteSlides.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    // Threshold for slide change (100px)
    if (dragOffset < -100) {
      goToNext();
    } else if (dragOffset > 100) {
      goToPrev();
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  // Get real slide index for pagination (0-based)
  const getRealSlideIndex = () => {
    if (currentSlide === 0) return slides.length - 1;
    if (currentSlide === infiniteSlides.length - 1) return 0;
    return currentSlide - 1;
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index + 1); // +1 because of clone at beginning
  };

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides Container */}
      <div ref={sliderRef} className="absolute inset-0 z-0">
        <div
          className="flex h-full"
          style={{
            transform: `translateX(calc(-${currentSlide * 100}% + ${
              isDragging ? dragOffset : 0
            }px))`,
            transition:
              isDragging || !isTransitioning
                ? "none"
                : "transform 0.5s ease-out",
          }}
        >
          {infiniteSlides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full h-full flex-shrink-0"
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={language === "de" ? slide.titleDe : slide.title}
                fill
                className="object-cover"
                priority={index <= 2}
                draggable={false}
              />

              {/* Overlay */}
              <div className="overlay" />
            </div>
          ))}
        </div>
      </div>

      {/* Animated Circles in Top Left - Above background, below content */}
      <div className="absolute top-0 left-0 z-10 pointer-events-none animate-[bounce-y_5s_ease-in-out_infinite]">
        <Image
          src={heroImageShape.src}
          alt={"Animated Shape"}
          width={500}
          height={600}
          className="w-[150px] md:w-[300px]"
        />
      </div>

      {/* Content - Above animated circles */}
      <div className="relative z-40 h-full flex items-center pointer-events-none">
        <div className="container">
          <div className="max-w-2xl text-white">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ${
                isTransitioning
                  ? "translate-y-0 opacity-100"
                  : "translate-y-0 opacity-100"
              }`}
            >
              {language === "de"
                ? slides[getRealSlideIndex()].titleDe
                : slides[getRealSlideIndex()].title}
            </h1>
            <p
              className={`text-lg md:text-xl mb-8 text-gray-200 transition-all duration-700 delay-100`}
            >
              {language === "de"
                ? slides[getRealSlideIndex()].subtitleDe
                : slides[getRealSlideIndex()].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="btn btn-primary pointer-events-auto"
              >
                {t.exploreCourses}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-12 h-2 rounded-full transition-all duration-300 ${
              index === getRealSlideIndex()
                ? "bg-white w-24"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Drag overlay - captures mouse events for dragging */}
      <div
        className="absolute inset-0 z-[25] cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
    </section>
  );
}
