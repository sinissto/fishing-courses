"use client";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title: "Individual Courses",
    subtitle:
      "Personalized one-on-one training tailored to your schedule and learning goals.",
  },
  de: {
    title: "Einzelkurse",
    subtitle:
      "Personalisiertes Einzeltraining, abgestimmt auf Ihren Zeitplan und Ihre Lernziele.",
  },
};

export default function IndividualCoursesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="pt-32 pb-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-text-dark mb-4">{t.title}</h1>
        <p className="text-lg text-gray-600">{t.subtitle}</p>
      </div>
    </main>
  );
}

