"use client";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title: "Specialized Courses",
    subtitle:
      "Expert-led courses focusing on specific fishing techniques and environments.",
  },
  de: {
    title: "Spezialkurse",
    subtitle:
      "Von Experten geleitete Kurse mit Fokus auf spezifische Angeltechniken und Umgebungen.",
  },
};

export default function SpecializedCoursesPage() {
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

