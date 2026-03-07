"use client";

import { useEffect, useState, useRef } from "react";
import { Users, Award, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

import thumbUpIcon from "@/assets/images/stats/ci-1-1.svg";
import cupIcon from "@/assets/images/stats/ci-1-2.svg";
import handShakeIcon from "@/assets/images/stats/ci-1-3.svg";
import quoteIcon from "@/assets/images/stats/ci-1-4.svg";
import bgImg from "@/assets/images/stats/counter-bg.png";
import twoCircleImg from "@/assets/images/stats/counter-bg-1.png";
import shapeImg from "@/assets/images/stats/counter-shape.png";

const stats = [
  {
    icon: thumbUpIcon.src,
    number: 5000,
    suffix: "+",
    label: "Happy Students",
    labelDe: "Zufriedene Schüler",
  },
  {
    icon: cupIcon.src,
    number: 98,
    suffix: "%",
    label: "Pass Rate",
    labelDe: "Erfolgsquote",
  },
  {
    icon: handShakeIcon.src,
    number: 25,
    suffix: "+",
    label: "Locations",
    labelDe: "Standorte",
  },
  {
    icon: quoteIcon.src,
    number: 15,
    suffix: "+",
    label: "Years Experience",
    labelDe: "Jahre Erfahrung",
  },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { language } = useLanguage();

  return (
    <section className="relative h-[400px] py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bgImg.src})`,
        }}
      />
      {/*<div className="overlay" />*/}
      <div className={"absolute right-0 bottom-0 w-[220px]"}>
        <Image
          src={shapeImg}
          alt={"Decorative Shape"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            // const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/*<Icon className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-accent)]" />*/}
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={40}
                    height={40}
                    className={"relative z-10"}
                  />
                  <Image
                    src={twoCircleImg.src}
                    alt={"Two circles around icon"}
                    width={40}
                    height={40}
                    className={
                      "absolute top-0 left-0 w-full h-full animate-[rotate_7s_linear_infinite] duration-6000 "
                    }
                  />
                </div>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                <p className="text-white/80 mt-2 text-sm md:text-base">
                  {language === "de" ? stat.labelDe : stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
