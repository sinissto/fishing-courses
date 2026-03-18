"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import WhatToExpectSection from "@/components/sections/WhatToExpectSection";
import SpecialCourseBookingCard from "@/components/sections/SpecialCourseBookingCard";
import { specialCourses } from "@/data/specialCourses";
import heroImg from "@/assets/images/specialized-courses/hero-bg-1-2.jpg";
import Image from "next/image";
import LegalBasisCard from "@/components/sections/LegalBasisCard";
import FishingExaminationCard from "@/components/sections/FishingExaminationCard";

const translations = {
  en: {
    title: "Fast track courses for your fishing license",
    included: {
      title: "What is included",
      items: [
        "Access to the online training platform and digital library “TEACHING LEARNING KNOWLEDGE” ( access until the exam day / immediate access after booking )",
        "2 days of classroom instruction and practical component",
      ],
      priceAdultLabel: "Price for adults",
      priceMinorLabel: "Price for minor",
      priceAdult: 279,
      priceMinor: 229,
      disclaimer: [
        "* Price information:",
        "Course fee, flat-rate costs: €152 (incl. VAT)",
        "Examination fee for young people: €50 (VAT exempt)",
        "Examination fee for adults: €100 (VAT exempt)",
        "Internship certificate: €27 (VAT exempt)",
      ],
      bookCourseButton: "Book special course",
    },
  },
  de: {
    title: "Schnellkurse für Ihren Angelschein",
    included: {
      title: "Was ist enthalten",
      items: [
        "Zugang zur Online-Trainingsplattform und digitalen Bibliothek „LEHREN LERNEN WISSEN“ ( Zugang bis zum Prüfungstag / sofortiger Zugang nach Buchung )",
        "2 Tage Unterricht im Klassenzimmer und praktischer Teil",
      ],
      priceAdultLabel: "Preis für Erwachsene",
      priceMinorLabel: "Preis für Minderjährige",
      priceAdult: 279,
      priceMinor: 229,
      disclaimer: [
        "* Preisinformationen:",
        "Kursgebühr, pauschale Kosten: €152 (inkl. MwSt.)",
        "Prüfungsgebühr für Jugendliche: €50 (von der MwSt. befreit)",
        "Prüfungsgebühr für Erwachsene: €100 (von der MwSt. befreit)",
        "Praktikumsnachweis: €27 (von der MwSt. befreit)",
      ],
      bookCourseButton: "Spezialkurs buchen",
    },
  },
};

export default function SpecializedCoursesPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const sc = specialCourses[language];

  const bookingSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    bookingSectionRef.current = document.getElementById("book-special-course");
  }, []);

  const scrollToBooking = () => {
    bookingSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="pt-32 pb-16">
      <div className="container">
        <div className={"section-padding text-center"}>
          <h1 className="text-4xl font-bold text-text-dark mb-4">{t.title}</h1>
        </div>

        {/* What is included */}

        <div className={"bg-secondary section-padding shadow-2xl"}>
          <h2 className={"text-3xl mb-8 text-center"}>{t.included.title}</h2>

          <div
            className={
              "flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-8"
            }
          >
            <div className={"w-full lg:w-1/2 h-full px-4"}>
              <Image
                src={heroImg}
                alt={"Fisherman by the water"}
                width={970}
                height={970}
                className={"w-full h-full object-cover rounded-lg"}
              />
            </div>

            <div className={"w-full lg:w-1/2 px-4"}>
              <ul className={"list-outside list-disc ml-8 mb-8"}>
                {t.included.items.map((item, index) => (
                  <li key={index} className={"mb-2"}>
                    {item}
                  </li>
                ))}
              </ul>

              <div className={"grid grid-cols-1 gap-4  p-4 rounded-lg"}>
                <div
                  className={
                    "flex items-center gap-6 bg-primary/20 p-4 rounded-lg w-fit"
                  }
                >
                  <p className={"text-sm text-gray-600 "}>
                    {t.included.priceAdultLabel}
                  </p>
                  <p className={"text-2xl font-bold"}>
                    {t.included.priceAdult}&euro;<sup>*</sup>
                  </p>
                </div>

                <div
                  className={
                    "flex items-center gap-6 bg-primary/20 p-4 rounded-lg w-fit"
                  }
                >
                  <p className={"text-sm text-gray-600"}>
                    {t.included.priceMinorLabel}
                  </p>
                  <p className={"text-2xl font-bold"}>
                    {t.included.priceMinor}&euro;<sup>*</sup>
                  </p>
                </div>
              </div>

              <div className={"mt-10"}>
                <ul>
                  {t.included.disclaimer.map((item, index) => (
                    <li
                      key={index}
                      className={"first-of-type:font-bold mb-4 text-[14px]"}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={"mt-8 flex justify-end"}>
                <button onClick={scrollToBooking} className={"btn btn-primary"}>
                  {t.included.bookCourseButton}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* What to expect */}
        <div className={"section-padding mt-12 bg-white shadow-2xl px-4"}>
          <WhatToExpectSection />
        </div>

        {/* Book special course */}
        <div id={"book-special-course"} className={"mt-12 bg-primary/15 py-24"}>
          <h2 className={"text-center text-3xl"}>{sc.title}</h2>
          <div
            className={"grid grid-cols-1 lg:grid-cols-2 gap-10 px-2 md:px-10"}
          >
            {sc.courses.map((course, index) => (
              <SpecialCourseBookingCard
                key={`${course.title}-${index}`}
                course={course}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Legal info */}
        <section className={"section-padding mt-12"}>
          <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8"}>
            <LegalBasisCard />
            <FishingExaminationCard />
          </div>
        </section>
      </div>
    </main>
  );
}
