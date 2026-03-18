"use client";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title: "Angling Clubs Courses",
    subtitle:
      "Group training programs designed specifically for angling clubs and fishing associations.",
  },
  de: {
    title: "Angelverein-Kurse",
    subtitle:
      "Gruppentraining speziell für Angelvereine und Fischereiverbände konzipiert.",
  },
};

export default function AnglingClubsCoursesPage() {
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

