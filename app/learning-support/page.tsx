"use client";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title: "Learning Support",
    subtitle:
      "Access study materials, practice exams, and additional resources to help you succeed.",
  },
  de: {
    title: "Lernunterstützung",
    subtitle:
      "Zugang zu Lernmaterialien, Übungsprüfungen und zusätzlichen Ressourcen für Ihren Erfolg.",
  },
};

export default function LearningSupportPage() {
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

