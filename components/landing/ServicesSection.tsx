"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import srImg1 from "@/assets/images/services/sr-1-1.png";
import srImg2 from "@/assets/images/services/sr-1-2.png";
import srImg3 from "@/assets/images/services/sr-1-3.png";
import srImg4 from "@/assets/images/services/sr-1-4.png";
import srImg5 from "@/assets/images/services/sr-1-5.png";
import srImg6 from "@/assets/images/services/sr-1-6.png";

import srIcon1 from "@/assets/images/services/sr-1-1.svg";
import srIcon2 from "@/assets/images/services/sr-1-2.svg";
import srIcon3 from "@/assets/images/services/sr-1-3.svg";
import srIcon4 from "@/assets/images/services/sr-1-4.svg";
import srIcon5 from "@/assets/images/services/sr-1-5.svg";
import srIcon6 from "@/assets/images/services/sr-1-6.svg";

const services = [
  {
    icon: srIcon1.src,
    title: "Exam Preparation",
    titleDe: "Prüfungsvorbereitung",
    description:
      "Comprehensive study materials and practice tests to ensure you pass your fishing license exam.",
    descriptionDe:
      "Umfassende Lernmaterialien und Übungstests, um Ihre Fischerprüfung zu bestehen.",
    image: srImg1.src,
    link: "/courses",
  },
  {
    icon: srIcon2.src,
    title: "Group Courses",
    titleDe: "Gruppenkurse",
    description:
      "Learn together with other fishing enthusiasts in our interactive group sessions.",
    descriptionDe:
      "Lernen Sie gemeinsam mit anderen Angel-Enthusiasten in unseren interaktiven Gruppensitzungen.",
    image: srImg2.src,
    link: "/courses",
  },
  {
    icon: srIcon3.src,
    title: "Certification",
    titleDe: "Zertifizierung",
    description:
      "Receive official certification upon completing our courses, recognized throughout Germany.",
    descriptionDe:
      "Erhalten Sie nach Abschluss unserer Kurse eine offizielle Zertifizierung, die deutschlandweit anerkannt ist.",
    image: srImg3.src,
    link: "/about",
  },
  {
    icon: srIcon4.src,
    title: "Practical Training",
    titleDe: "Praktisches Training",
    description:
      "Hands-on fishing experience at beautiful lakes and rivers across Germany.",
    descriptionDe:
      "Praktische Angelerfahrung an wunderschönen Seen und Flüssen in ganz Deutschland.",
    image: srImg4.src,
    link: "/courses",
  },
  {
    icon: srIcon5.src,
    title: "Guided Tours",
    titleDe: "Geführte Touren",
    description:
      "Explore the best fishing spots with our experienced guides and local experts.",
    descriptionDe:
      "Erkunden Sie die besten Angelplätze mit unseren erfahrenen Guides und lokalen Experten.",
    image: srImg5.src,
    link: "/courses",
  },
  {
    icon: srIcon6.src,
    title: "Flexible Scheduling",
    titleDe: "Flexible Terminplanung",
    description:
      "Choose from weekday, weekend, or online courses that fit your schedule.",
    descriptionDe:
      "Wählen Sie aus Wochentags-, Wochenend- oder Online-Kursen, die in Ihren Zeitplan passen.",
    image: srImg6.src,
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

  // Autoplay state
  const [isHovering, setIsHovering] = useState(false);

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

  // Autoplay effect - scroll one card at a time
  useEffect(() => {
    if (isHovering || isDragging) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const firstCard = carouselRef.current.querySelector(
          ".card"
        ) as HTMLElement;
        const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 340; // card width + gap

        // If at the end, scroll back to beginning
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll one card to the left
          carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 4000); // Every 4 seconds

    return () => clearInterval(interval);
  }, [isHovering, isDragging]);

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

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);
  };

  return (
    <section className="section-padding bg-bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="subheading">{t.subheading}</span>
          <h2 className="heading">{t.heading}</h2>
        </div>

        {/* TODO: use Swiper here, less pain in the ass */}
        {/* Carousel Container with Navigation */}
        <div className="flex items-center gap-4">
          {/* Left Navigation Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`shrink-0 text-primary w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all border-2 border-primary ${
              canScrollLeft
                ? "opacity-100 hover:bg-primary hover:text-white cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className={`flex-1 flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 ${
              isDragging
                ? "cursor-grabbing scroll-auto"
                : "cursor-grab scroll-smooth"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] card group hover:bg-primary select-none snap-start"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image}
                      alt={language === "de" ? service.titleDe : service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      draggable={false}
                    />
                  </div>

                  {/* Icon - Centered, overlapping image and content */}
                  <div className="relative z-10 flex justify-center -mt-16 [perspective:1000px]">
                    <div className="w-24 h-24 relative [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                      {/* Front face - white background, colored icon */}
                      <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center shadow-lg [backface-visibility:hidden]">
                        <Image
                          src={service.icon}
                          alt="service icon"
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      {/* Back face - primary background, white icon (mirrored) */}
                      <div className="absolute inset-0 bg-primary rounded-full flex items-center justify-center shadow-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <Image
                          src={service.icon}
                          alt="service icon"
                          width={40}
                          height={40}
                          className="w-10 h-10 brightness-0 invert group-hover:[transform:rotateY(180deg)] duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-4">
                    <h3 className="text-xl font-bold mb-3 text-center group-hover:text-white transition-colors">
                      {language === "de" ? service.titleDe : service.title}
                    </h3>
                    <p className="text-text-light mb-4 text-sm leading-relaxed text-center group-hover:text-white transition-colors">
                      {language === "de"
                        ? service.descriptionDe
                        : service.description}
                    </p>
                    <div className="flex justify-center">
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 group-hover:text-white transition-all"
                        onClick={(e) => isDragging && e.preventDefault()}
                      >
                        {t.readMore}
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Spacer to prevent last card from being cut off */}
            {/*<div className="shrink-0 w-4"></div>*/}
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`shrink-0 text-primary w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all border-2 border-primary ${
              canScrollRight
                ? "opacity-100 hover:bg-primary hover:text-white cursor-pointer"
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
