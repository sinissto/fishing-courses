"use client";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title: "Practical Courses",
    subtitle:
      "Hands-on training at real fishing locations with experienced instructors.",
  },
  de: {
    title: "Praxiskurse",
    subtitle:
      "Praktisches Training an echten Angelplätzen mit erfahrenen Ausbildern.",
  },
};

export default function PracticalCoursesPage() {
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

