"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectFade, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useLanguage } from "@/context/LanguageContext";
// import { testimonials } from "@/data/testimonials";

import "swiper/css";
import "swiper/css/effect-fade";

// Right side images
import rightImg1 from "@/assets/images/testimonials/right/11.jpg";
import rightImg2 from "@/assets/images/testimonials/right/22.jpg";
import rightImg3 from "@/assets/images/testimonials/right/33.jpg";
import rightImg4 from "@/assets/images/testimonials/right/44.jpg";
import rightImg5 from "@/assets/images/testimonials/right/55.jpg";

// Pagination images
import paginationImg1 from "@/assets/images/testimonials/pagination/testi-1-1.png";
import paginationImg2 from "@/assets/images/testimonials/pagination/testi-1-2.png";
import paginationImg3 from "@/assets/images/testimonials/pagination/testi-1-3.png";
import paginationImg4 from "@/assets/images/testimonials/pagination/testi-1-4.png";
import paginationImg5 from "@/assets/images/testimonials/pagination/testi-1-5.png";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  roleDe: string;
  quote: string;
  quoteDe: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Peter Hoffmann",
    role: "Hobby Angler",
    roleDe: "Hobby-Angler",
    quote:
      "The course was excellent! I passed my exam on the first try thanks to the thorough preparation.",
    quoteDe:
      "Der Kurs war ausgezeichnet! Ich habe meine Prüfung beim ersten Versuch dank der gründlichen Vorbereitung bestanden.",
    image: paginationImg1.src,
    rating: 5,
  },
  {
    id: "2",
    name: "Sabine Keller",
    role: "Weekend Angler",
    roleDe: "Wochenend-Anglerin",
    quote:
      "The instructors are very knowledgeable and patient. I highly recommend this course to anyone.",
    quoteDe:
      "Die Ausbilder sind sehr kompetent und geduldig. Ich empfehle diesen Kurs jedem.",
    image: paginationImg2.src,
    rating: 5,
  },
  {
    id: "3",
    name: "Klaus Wagner",
    role: "Professional Angler",
    roleDe: "Profi-Angler",
    quote:
      "The advanced techniques course took my fishing skills to the next level. Worth every euro!",
    quoteDe:
      "Der Kurs für fortgeschrittene Techniken hat meine Angelfähigkeiten auf ein neues Niveau gebracht. Jeden Euro wert!",
    image: paginationImg3.src,
    rating: 5,
  },
  {
    id: "4",
    name: "Monika Schulz",
    role: "First-time Angler",
    roleDe: "Erstmalige Anglerin",
    quote:
      "I was nervous about the exam, but the practice tests and study materials made everything clear.",
    quoteDe:
      "Ich war nervös wegen der Prüfung, aber die Übungstests und Lernmaterialien haben alles klar gemacht.",
    image: paginationImg4.src, // Use pagination image for consistency
    rating: 4,
  },
  {
    id: "5",
    name: "Jürgen Meyer",
    role: "Retired Teacher",
    roleDe: "Pensionierter Lehrer",
    quote:
      "Finally got my fishing license at 65! The course was well-structured and enjoyable.",
    quoteDe:
      "Endlich mit 65 meinen Angelschein bekommen! Der Kurs war gut strukturiert und hat Spaß gemacht.",
    image: paginationImg5.src,
    rating: 5,
  },
];

const rightImages = [rightImg1, rightImg2, rightImg3, rightImg4, rightImg5];
// const paginationImages = [
//   paginationImg1,
//   paginationImg2,
//   paginationImg3,
//   paginationImg4,
//   paginationImg5,
// ];

const translations = {
  en: {
    subheading: "Testimonials",
    heading: "What Our Students Say",
  },
  de: {
    subheading: "Erfahrungsberichte",
    heading: "Was unsere Schüler sagen",
  },
};

const ITEM_HEIGHT = 80; // 70px image + 12px gap

function rotateSlides(slides: Testimonial[], activeIndex: number) {
  const before = slides.slice(0, activeIndex);
  const after = slides.slice(activeIndex);

  return [...before.slice(-1), ...after, ...before.slice(0, -1)];
}

function circularIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function getPaginationWindow(
  slides: Testimonial[],
  activeIndex: number,
  size = 5
) {
  const half = Math.floor(size / 2);

  return Array.from({ length: size }, (_, i) => {
    const offset = i - half;
    const index = circularIndex(activeIndex + offset, slides.length);
    return { ...slides[index], realIndex: index };
  });
}

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const [leftSwiper, setLeftSwiper] = useState<SwiperType | null>(null);
  const [rightSwiper, setRightSwiper] = useState<SwiperType | null>(null);

  // const paginationSlides = [
  //   ...testimonials.slice(-2),
  //   ...testimonials,
  //   ...testimonials.slice(0, 2),
  // ];

  // const pagination = useMemo(
  //   () => rotateSlides(testimonials, activeIndex),
  //   [activeIndex]
  // );

  const pagination = useMemo(
    () => getPaginationWindow(testimonials, activeIndex),
    [activeIndex]
  );

  console.log(pagination);

  // const offset = (activeIndex + 1) * ITEM_HEIGHT;
  const offset = ITEM_HEIGHT;

  const handlePaginationClick = (index: number) => {
    if (leftSwiper) {
      leftSwiper.slideToLoop(index);
    }
    if (rightSwiper) {
      rightSwiper.slideToLoop(index);
    }
  };

  // Calculate the offset to keep active pagination always second from top (position 1)
  // const getPaginationOffset = () => {
  //   // Active slide should always be at position 1 (second from top)
  //   // 4 items visible, active at position 1 (index 1, second from top)
  //   const targetPosition = 1;
  //   const itemHeight = 68; // 56px image + 12px gap
  //   const offset = (activeIndex - targetPosition) * itemHeight;
  //   return offset;
  // };

  return (
    <section className="relative bg-transparent pt-0 pb-16 md:pb-24 -mt-16 md:-mt-24 z-10">
      <div className="container">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative">
          <div className="flex flex-col lg:flex-row ">
            {/* Left Container - Testimonials Content */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col">
              {/* Static Header */}
              <div className="mb-8">
                <span className="subheading">{t.subheading}</span>
                <h2 className="heading">{t.heading}</h2>
              </div>

              {/* Testimonials Swiper */}
              <div className="flex-1">
                <Swiper
                  modules={[Controller, Autoplay]}
                  onSwiper={setLeftSwiper}
                  controller={{ control: rightSwiper }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  spaceBetween={30}
                  slidesPerView={1}
                  allowTouchMove={true}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  className="h-full"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex flex-col h-full">
                        {/* Quote Icon */}
                        <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                          <Quote className="w-6 h-6 text-white" />
                        </div>

                        {/* Quote */}
                        <p className="text-lg md:text-xl text-[var(--color-text-light)] mb-8 italic leading-relaxed flex-1">
                          &ldquo;
                          {language === "de"
                            ? testimonial.quoteDe
                            : testimonial.quote}
                          &rdquo;
                        </p>

                        {/* Rating Stars */}
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating
                                  ? "text-[var(--color-accent)] fill-[var(--color-accent)]"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-[var(--color-primary-light)]">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-[var(--color-text-dark)]">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-[var(--color-text-light)]">
                              {language === "de"
                                ? testimonial.roleDe
                                : testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Right Container - Images */}
            <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[500px]">
              <Swiper
                modules={[Controller, EffectFade]}
                onSwiper={setRightSwiper}
                controller={{ control: leftSwiper }}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                allowTouchMove={false}
                loop={true}
                className="h-full w-full absolute inset-0"
              >
                {rightImages.map((img, index) => (
                  <SwiperSlide key={index} className="h-full">
                    <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px]">
                      <Image
                        src={img}
                        alt={`Testimonial image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent lg:from-transparent" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Center Pagination - Absolutely Positioned */}
          {/* className = hidden lg:flex flex-col gap-4 items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 */}
          <div className="testimonialPagination hidden lg:flex lg:flex-col absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 ">
            {/*<div className="relative h-[260px] overflow-hidden">*/}
            {/*  /!* Pagination track *!/*/}
            <div
              className="testimonialPagination-track flex flex-col items-center justify-center gap-3 transition-transform duration-500 ease-in-out px-2"
              style={{
                transform: `translateY(-${offset}px)`,
              }}
            >
              {pagination.map((slide: any, index: number) => {
                // const realIndex = testimonials.findIndex(
                //   (s) => s.id === slide.id
                // );

                const realIndex = slide.realIndex; // Use realIndex from pagination data

                return (
                  <button
                    key={index}
                    onClick={() => handlePaginationClick(index)}
                    className={`testimonialPagination-thumb relative w-14 h-14 rounded-full transition-all duration-300 shrink-0 ${
                      realIndex === activeIndex
                        ? "ring-4 ring-primary"
                        : "hover:scale-105 ring-4 ring-white"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={`Testimonial ${index + 1}`}
                      fill
                      className="object-cover rounded-full"
                    />
                  </button>
                );
              })}
            </div>
            {/*</div>*/}
          </div>

          {/* Mobile Pagination */}
          <div className="flex lg:hidden justify-center gap-3 pb-8 px-2 absolute top-[56%] md:top-[59%]  left-1/2 -translate-x-1/2 z-20">
            {pagination.map((img, index) => (
              <button
                key={index}
                onClick={() => handlePaginationClick(index)}
                className={`relative w-12 h-12 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "ring-4 ring-[var(--color-primary)] scale-110"
                    : "hover:scale-105"
                }`}
              >
                <Image
                  src={img.image}
                  alt={`Testimonial ${index + 1}`}
                  fill
                  className="object-cover rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
