"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import aboutImg1 from "@/assets/images/about/exp-1-1.png";
import aboutImg2 from "@/assets/images/about/exp-1-2.png";
import aboutImgBg from "@/assets/images/about/explore-shape1.png";

const translations = {
  en: {
    subheading: "About Us",
    heading: "Germany's Premier Fishing License Training",
    description:
      "With over 15 years of experience, we have helped thousands of aspiring anglers obtain their fishing license. Our expert instructors provide comprehensive training that covers everything you need to know.",
    points: [
      "Certified and experienced instructors",
      "Highest exam pass rate in the region",
      "Flexible course schedules",
      "Practical hands-on training",
      "Comprehensive study materials",
      "Lifetime support after certification",
    ],
    button: "Learn More About Us",
  },
  de: {
    subheading: "Über uns",
    heading: "Deutschlands führende Angelschein-Ausbildung",
    description:
      "Mit über 15 Jahren Erfahrung haben wir Tausenden von angehenden Anglern geholfen, ihren Angelschein zu erwerben. Unsere Experten-Ausbilder bieten eine umfassende Schulung, die alles abdeckt, was Sie wissen müssen.",
    points: [
      "Zertifizierte und erfahrene Ausbilder",
      "Höchste Prüfungs-Erfolgsquote in der Region",
      "Flexible Kurspläne",
      "Praktisches Training",
      "Umfassende Lernmaterialien",
      "Lebenslange Unterstützung nach der Zertifizierung",
    ],
    button: "Mehr über uns erfahren",
  },
};

const images = [
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1545816250-e12bedba42ba?w=300&h=250&fit=crop",
  "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=300&h=250&fit=crop",
  "https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=400&h=300&fit=crop",
];

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative section-padding bg-[#ECF5FB]">
      <div>
        <Image
          src={aboutImgBg}
          alt={"Background shape"}
          width={280}
          height={320}
          className="absolute top-0 left-0 w-[300px] h-auto opacity-20 hidden lg:block"
        />
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="subheading">{t.subheading}</span>
            <h2 className="heading">{t.heading}</h2>
            <p className="text-[var(--color-text-light)] mb-8 leading-relaxed">
              {t.description}
            </p>

            {/* Bullet Points */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {t.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-[var(--color-text-dark)]">{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn btn-primary">
              {t.button}
            </Link>
          </div>

          {/* Right Images - Overlapping Layout */}
          <div className="relative flex justify-center gap-6 lg:block lg:h-full">
            {/* Top left image */}
            <div className="relative lg:absolute left-0 top-0 lg:-top-24 lg:shadow-xl z-20 overflow-visible ">
              <div className="relative overflow-hidden rounded-lg group">
                <Image
                  src={aboutImg1.src}
                  alt="Fishing instructor"
                  width={390}
                  height={410}
                  className="h-[190px] lg:w-[350px] lg:h-auto object-cover"
                />
                {/* White overlay animation from center */}
                {/*<span className="absolute inset-0 bg-white/30 scale-y-0 scale-x-0 group-hover:scale-y-100 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center pointer-events-none"></span>*/}
              </div>
              <div
                className={
                  "relative lg:absolute px-[30px] py-[45px] lg:-right-[50%] top-0 lg:top-14 rounded-lg bg-[#36AFE3] z-30"
                }
              >
                <h3
                  className={
                    "text-white text-[18px] text-center lg:text-left lg:text-[34px] "
                  }
                >
                  15+ Great
                </h3>
                <p
                  className={
                    "text-white text-[16px] text-center lg:text-left lg:text-[20px]"
                  }
                >
                  Hunting Spots
                </p>
              </div>
            </div>

            {/* Bottom right image */}
            <div className="relative lg:absolute right-0 lg:right-32 bottom-0 lg:-bottom-24 lg:shadow-xl z-10">
              <div className="relative overflow-hidden rounded-lg group">
                <Image
                  src={aboutImg2.src}
                  alt="Fishing course"
                  width={390}
                  height={410}
                  className="h-[190px] lg:w-[350px] lg:h-auto object-cover mb-6 lg:mb-0"
                />
                {/* White overlay animation from center */}
                {/*<span className="absolute inset-0 bg-white/30 scale-y-0 scale-x-0 group-hover:scale-y-100 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center pointer-events-none"></span>*/}
              </div>
              <div
                className={
                  "relative lg:absolute px-[30px] py-[45px] left-0 lg:-left-[50%] bottom-0 lg:bottom-14 rounded-lg bg-[#0E6BAC] z-30"
                }
              >
                <h3
                  className={
                    "text-white text text-[18px] text-center lg:text-left lg:text-[34px] "
                  }
                >
                  25+ Great
                </h3>
                <p
                  className={
                    "text-white text-[16px] text-center lg:text-left lg:text-[20px]"
                  }
                >
                  Experiences
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Images */}
          {/*<div className="grid grid-cols-2 gap-4 lg:hidden">*/}
          {/*  {images.slice(0, 4).map((src, index) => (*/}
          {/*    <div*/}
          {/*      key={index}*/}
          {/*      className="relative h-40 rounded-xl overflow-hidden shadow-lg"*/}
          {/*    >*/}
          {/*      <Image*/}
          {/*        src={src}*/}
          {/*        alt={`Fishing image ${index + 1}`}*/}
          {/*        fill*/}
          {/*        className="object-cover"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
