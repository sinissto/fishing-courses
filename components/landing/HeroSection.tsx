"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop",
    title: "Get Your Fishing License",
    titleDe: "Holen Sie sich Ihren Angelschein",
    subtitle:
      "Professional courses to help you become a licensed angler in Germany",
    subtitleDe:
      "Professionelle Kurse, um lizenzierter Angler in Deutschland zu werden",
  },
  {
    image:
      "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=1920&h=1080&fit=crop",
    title: "Learn From Experts",
    titleDe: "Lernen Sie von Experten",
    subtitle: "Our experienced instructors guide you through every step",
    subtitleDe: "Unsere erfahrenen Ausbilder begleiten Sie bei jedem Schritt",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1920&h=1080&fit=crop",
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Animated Circles in Top Left */}
      <div className="absolute top-8 left-8 z-20 pointer-events-none">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="animate-[pulse_3s_infinite]"
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
          />
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              values="40;45;40"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="60"
            cy="60"
            r="30"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              values="30;35;30"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="60" cy="60" r="20" fill="rgba(255,255,255,0.2)" />
        </svg>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={language === "de" ? slide.titleDe : slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Overlay */}
          <div className="overlay" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container">
              <div className="max-w-2xl text-white">
                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {language === "de" ? slide.titleDe : slide.title}
                </h1>
                <p
                  className={`text-lg md:text-xl mb-8 text-gray-200 transition-all duration-700 delay-100 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {language === "de" ? slide.subtitleDe : slide.subtitle}
                </p>
                <div
                  className={`flex flex-wrap gap-4 transition-all duration-700 delay-200 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <Link href="/courses" className="btn btn-accent">
                    {t.exploreCourses}
                  </Link>
                  <Link
                    href="/about"
                    className="btn btn-outline border-white text-white hover:bg-white hover:text-[var(--color-primary-dark)]"
                  >
                    {t.learnMore}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-24"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
