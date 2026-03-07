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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

  return (
    <section className="section-padding bg-bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="subheading">{t.subheading}</span>
          <h2 className="heading">{t.heading}</h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Left Navigation Button */}
          <button
            // onClick={() => scroll("left")}
            // disabled={!canScrollLeft}
            className={`testimonial-prev shrink-0 text-primary w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all border-2 border-primary hover:bg-primary hover:text-white cursor-pointer`}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* swiper */}
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            centeredSlides={false}
            pagination={{
              el: ".services-pagination", // <- render bullets into this external container
              clickable: true,
              dynamicBullets: false,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            allowTouchMove={true}
            simulateTouch={true}
            grabCursor={true}
            touchRatio={1}
            touchAngle={45}
            className="pb-4!"
          >
            {services.map((service, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="card group hover:bg-primary select-none"
                  style={{ height: "auto", alignSelf: "stretch" }}
                >
                  <div className="flex flex-col h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={service.image}
                        alt={
                          language === "de" ? service.titleDe : service.title
                        }
                        width={416}
                        height={294}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
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
                            unoptimized={true}
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
                            unoptimized={true}
                            className="w-10 h-10 brightness-0 invert group-hover:[transform:rotateY(180deg)] duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 pt-4 flex-1 flex flex-col justify-between min-h-[180px]">
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-center group-hover:text-white transition-colors">
                          {language === "de" ? service.titleDe : service.title}
                        </h3>
                        <p className="text-text-light mb-4 text-sm leading-relaxed text-center group-hover:text-white transition-colors">
                          {language === "de"
                            ? service.descriptionDe
                            : service.description}
                        </p>
                      </div>
                      {/* Button always at the bottom */}
                      <div className="flex justify-center">
                        <Link
                          href={service.link}
                          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 group-hover:text-white transition-all"
                        >
                          {t.readMore}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* button right */}
          <button
            // onClick={() => scroll("right")}
            // disabled={!canScrollRight}
            className={
              "testimonial-next shrink-0 text-primary w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all border-2 border-primary hover:bg-primary hover:text-white cursor-pointer"
            }
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Pagination - placed OUTSIDE the flex row, below the Swiper */}
        <div className="services-pagination mt-6 flex justify-center" />
      </div>
    </section>
  );
}
