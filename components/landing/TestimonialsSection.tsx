"use client";

import { useEffect, useRef, useState } from "react";
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

const ITEM_HEIGHT = 84; // 68px thumb + 16px gap
const VISIBLE_COUNT = 4;
// Active item sits at position index 1 (second from top)
const ACTIVE_POSITION = 1;

function circularIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

/**
 * Build an initial track long enough so that we can scroll
 * smoothly in both directions without ever running out of items.
 * We place the first active slide at ACTIVE_POSITION inside the track
 * and pad generously before and after.
 */
function buildInitialTrack(startIndex: number) {
  const PAD = 3;
  const TOTAL = PAD + VISIBLE_COUNT + PAD;
  const items: number[] = [];
  const firstIndex = startIndex - ACTIVE_POSITION - PAD;
  for (let i = 0; i < TOTAL; i++) {
    items.push(circularIndex(firstIndex + i, testimonials.length));
  }
  return { items, activeTrackPos: PAD + ACTIVE_POSITION };
}

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const [leftSwiper, setLeftSwiper] = useState<SwiperType | null>(null);
  const [rightSwiper, setRightSwiper] = useState<SwiperType | null>(null);

  // Track state: list of real indices and the position of the active item
  const [track, setTrack] = useState(() => buildInitialTrack(0));
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const prevActiveRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const backwardStepsRef = useRef(0);
  const trimTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Visual active index – updated mid-transition so the ring moves with the scroll
  const [displayActiveIndex, setDisplayActiveIndex] = useState(0);
  const displayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Maximum items to keep in the track before trimming
  const MAX_TRACK_SIZE = 20;

  // Trim silently between transitions – called via a delayed timeout
  // so we never interfere with an ongoing CSS transition.
  const scheduleTrim = () => {
    if (trimTimeoutRef.current) clearTimeout(trimTimeoutRef.current);
    trimTimeoutRef.current = setTimeout(() => {
      // 1. Disable transition
      setTransitionEnabled(false);
      // 2. Slice the array + adjust activeTrackPos in one render
      setTrack((old) => {
        if (old.items.length <= MAX_TRACK_SIZE) return old; // nothing to trim
        const BUFFER = 3;
        const keepStart = Math.max(
          0,
          old.activeTrackPos - ACTIVE_POSITION - BUFFER
        );
        const keepEnd = Math.min(
          old.items.length,
          old.activeTrackPos - ACTIVE_POSITION + VISIBLE_COUNT + BUFFER
        );
        return {
          items: old.items.slice(keepStart, keepEnd),
          activeTrackPos: old.activeTrackPos - keepStart,
        };
      });
      // 3. Wait two frames so the browser paints the instant reposition,
      //    then re-enable transitions.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }, 800); // well after the 0.5s CSS transition finishes
  };

  useEffect(() => {
    const prev = prevActiveRef.current;
    if (prev === activeIndex) return;

    // Delay the visual active highlight so it changes mid-transition
    if (displayTimeoutRef.current) clearTimeout(displayTimeoutRef.current);
    displayTimeoutRef.current = setTimeout(() => {
      setDisplayActiveIndex(activeIndex);
    }, 150); // switch ring partway through the 0.35s transition

    const len = testimonials.length;
    const forwardDist = (((activeIndex - prev) % len) + len) % len;
    const backwardDist = (((prev - activeIndex) % len) + len) % len;

    if (forwardDist <= backwardDist) {
      // Going forward: append new items and increase activeTrackPos
      // The offset grows → CSS transition animates smoothly upward
      setTrack((old) => {
        const newItems = [...old.items];
        for (let i = 0; i < forwardDist; i++) {
          const lastItem = newItems[newItems.length - 1];
          newItems.push(circularIndex(lastItem + 1, len));
        }
        return {
          items: newItems,
          activeTrackPos: old.activeTrackPos + forwardDist,
        };
      });
      scheduleTrim();
    } else {
      // Going backward:
      backwardStepsRef.current = backwardDist;
      setTransitionEnabled(false);

      setTrack((old) => {
        const newItems = [...old.items];
        for (let i = 0; i < backwardDist; i++) {
          const firstItem = newItems[0];
          newItems.unshift(circularIndex(firstItem - 1, len));
        }
        return {
          items: newItems,
          activeTrackPos: old.activeTrackPos + backwardDist,
        };
      });

      requestAnimationFrame(() => {
        trackRef.current?.getBoundingClientRect();
        const steps = backwardStepsRef.current;

        setTransitionEnabled(true);
        setTrack((old) => ({
          ...old,
          activeTrackPos: old.activeTrackPos - steps,
        }));
        scheduleTrim();
      });
    }

    prevActiveRef.current = activeIndex;
  }, [activeIndex]);

  // The offset in pixels: we place the active item at ACTIVE_POSITION
  const offset = (track.activeTrackPos - ACTIVE_POSITION) * ITEM_HEIGHT;

  const handlePaginationClick = (realIndex: number) => {
    if (leftSwiper) {
      leftSwiper.slideToLoop(realIndex);
    }
    if (rightSwiper) {
      rightSwiper.slideToLoop(realIndex);
    }
  };

  const pauseAutoplay = () => {
    if (leftSwiper?.autoplay) leftSwiper.autoplay.stop();
  };

  const resumeAutoplay = () => {
    if (leftSwiper?.autoplay) leftSwiper.autoplay.start();
  };

  return (
    <section className="relative bg-transparent pt-0 pb-16 md:pb-24 -mt-16 md:-mt-24 z-10">
      <div className="container">
        <div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden relative"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <div className="flex flex-col lg:flex-row">
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
          <div className="testimonialPagination hidden lg:flex lg:flex-col absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div
              ref={trackRef}
              className="flex flex-col items-center justify-center gap-4 px-2"
              style={{
                transform: `translateY(-${offset}px)`,
                transition: transitionEnabled ? "transform 0.35s ease" : "none",
              }}
            >
              {track.items.map((realIdx, i) => {
                const slide = testimonials[realIdx];
                const isActive = realIdx === displayActiveIndex;
                return (
                  <button
                    key={i}
                    onClick={() => handlePaginationClick(realIdx)}
                    className={`testimonialPagination-thumb relative rounded-full shrink-0 transition-all duration-300 ${
                      isActive
                        ? "ring-4 ring-primary scale-105"
                        : "hover:scale-105 ring-4 ring-transparent"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={`Testimonial ${realIdx + 1}`}
                      fill
                      className="object-cover rounded-full"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Pagination */}
          <div className="flex lg:hidden justify-center gap-3 pb-8 px-2 absolute top-[56%] md:top-[59%] left-1/2 -translate-x-1/2 z-20">
            {testimonials.map((slide, index) => (
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
                  src={slide.image}
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
