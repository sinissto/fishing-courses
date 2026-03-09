"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectFade, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";

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

const rightImages = [rightImg1, rightImg2, rightImg3, rightImg4, rightImg5];
const paginationImages = [
  paginationImg1,
  paginationImg2,
  paginationImg3,
  paginationImg4,
  paginationImg5,
];

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

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const [leftSwiper, setLeftSwiper] = useState<SwiperType | null>(null);
  const [rightSwiper, setRightSwiper] = useState<SwiperType | null>(null);

  const handlePaginationClick = (index: number) => {
    if (leftSwiper) {
      leftSwiper.slideToLoop(index);
    }
    if (rightSwiper) {
      rightSwiper.slideToLoop(index);
    }
  };

  // Calculate the offset to keep active pagination always second from top (position 1)
  const getPaginationOffset = () => {
    // Active slide should always be at position 1 (second from top)
    // 4 items visible, active at position 1 (index 1, second from top)
    const targetPosition = 1;
    const itemHeight = 68; // 56px image + 12px gap
    const offset = (activeIndex - targetPosition) * itemHeight;
    return offset;
  };

  return (
    <section className="relative bg-transparent pt-0 pb-16 md:pb-24 -mt-16 md:-mt-24 z-10">
      <div className="container">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative">
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
          <div className="hidden lg:flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative h-[260px] overflow-hidden">
              {/* Pagination track */}
              <div
                className="flex flex-col gap-3 transition-transform duration-500 ease-in-out px-2"
                style={{
                  transform: `translateY(-${getPaginationOffset()}px)`,
                }}
              >
                {paginationImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => handlePaginationClick(index)}
                    className={`relative w-14 h-14 rounded-full transition-all duration-300 flex-shrink-0 ${
                      index === activeIndex
                        ? "ring-4 ring-[var(--color-primary)] scale-110"
                        : "hover:scale-105"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Testimonial ${index + 1}`}
                      fill
                      className="object-cover rounded-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Pagination */}
          <div className="flex lg:hidden justify-center gap-3 pb-8 px-2">
            {paginationImages.map((img, index) => (
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
                  src={img}
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
