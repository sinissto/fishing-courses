"use client";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title: "Compact Courses",
    subtitle:
      "Intensive short-format courses designed for quick and efficient license preparation.",
  },
  de: {
    title: "Kompaktkurse",
    subtitle:
      "Intensive Kurzformat-Kurse für eine schnelle und effiziente Scheinvorbereitung.",
  },
};

export default function CompactCoursesPage() {
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

