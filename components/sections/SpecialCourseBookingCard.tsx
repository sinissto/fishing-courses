"use client";

import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import type { SpecialCourseCardData } from "@/data/specialCourses";
import onlineImg1 from "@/assets/images/online-courses/online-img-1-1.jpg";

const translations = {
  en: {
    courseDuration: "Course duration",
    trainingBlock: "Training block",
    examDate: "Exam date",
    examLocation: "Exam location",
    priceMinor: "Price for minors",
    priceAdult: "Price for adults",
    ctaMinor: "Book as minor",
    ctaAdult: "Book as adult",
    vatIncluded: "(VAT included)",
  },
  de: {
    courseDuration: "Kursdauer",
    trainingBlock: "Trainingsblock",
    examDate: "Prüfungstermin",
    examLocation: "Prüfungsort",
    priceMinor: "Preis für Minderjährige",
    priceAdult: "Preis für Erwachsene",
    ctaMinor: "Für Minderjährige buchen",
    ctaAdult: "Für Erwachsene buchen",
    vatIncluded: "(inkl. MwSt.)",
  },
};

export default function SpecialCourseBookingCard({
  course,
  index,
}: {
  course: SpecialCourseCardData;
  index: number;
}) {
  const { language } = useLanguage();
  const { addItem } = useCart();
  const t = translations[language];

  const addToCart = (variant: "minor" | "adult") => {
    const price = variant === "minor" ? course.priceMinor : course.priceAdult;
    const variantLabel = variant === "minor" ? t.priceMinor : t.priceAdult;

    addItem({
      id: `special-course-${index}-${variant}`,
      title: `${course.title} — ${variantLabel}`,
      price,
      image: onlineImg1.src,
    });
  };

  return (
    <div className={"max-w-full bg-white p-6 rounded-lg mt-12 lg:mx-auto"}>
      <h3 className={"uppercase text-xl mb-8"}>{course.title}</h3>

      <div className={"space-y-4"}>
        <p>
          <span className={"font-semibold"}>{t.courseDuration}: </span>
          <span className={"font-bold"}>{course.courseDuration}</span>
        </p>

        <p>
          <span className={"font-semibold"}>{t.trainingBlock}: </span>
          <span className={"font-bold"}>{course.trainingBlock}</span>
        </p>

        <p>
          <span className={"font-semibold"}>{t.examDate}: </span>
          <span className={"font-bold"}>{course.examDate}</span>
        </p>

        <p>
          <span className={"font-semibold"}>{t.examLocation}: </span>
          <span className={"font-bold"}>{course.examLocation}</span>
        </p>
      </div>

      <div className={"mt-8 space-y-3"}>
        <div className={"flex items-center justify-between"}>
          <p className={"text-sm text-gray-600"}>
            {t.priceMinor} {t.vatIncluded}
          </p>
          <p className={"text-lg font-bold"}>&euro;{course.priceMinor}</p>
        </div>
        <div className={"flex items-center justify-between"}>
          <p className={"text-sm text-gray-600"}>
            {t.priceAdult} {t.vatIncluded}
          </p>
          <p className={"text-lg font-bold"}>&euro;{course.priceAdult}</p>
        </div>
      </div>

      <div className={"mt-8 flex flex-col sm:flex-row gap-3 sm:justify-end"}>
        <button
          onClick={() => addToCart("minor")}
          className={"btn btn-primary"}
        >
          {t.ctaMinor}
        </button>
        <button
          onClick={() => addToCart("adult")}
          className={"btn btn-primary"}
        >
          {t.ctaAdult}
        </button>
      </div>
    </div>
  );
}

