"use client";

import { useLanguage } from "@/context/LanguageContext";

type SupportedLanguage = "en" | "de";

const SECTION_TRANSLATIONS: Record<
  SupportedLanguage,
  { title: string; description: string[] }
> = {
  en: {
    title: "What to expect at the course",
    description: [
      "The online fishing course in Bavaria combines our online offerings with 30 hours of online instruction, including 6 hours of practical training. With access to the online training platform, you can learn at your own pace and optimally prepare for your fishing exam. During the online instruction and practical training, you will receive specific instruction in the exam topics and practical areas. You can choose a date from numerous exam locations throughout Bavaria and register yourself with the examination authority.",
      "Our focus is on your success – we provide intensive support to ensure you pass the exam. Respect for nature is a central tenet of our training. We emphasize that you not only learn the theory but also develop an awareness of sustainable use and nature conservation. Our online platform offers comprehensive preparation training for your fishing exam. In addition to basic knowledge, you can also expect in-depth information about nature and its sustainable use. Start your fishing journey with us!",
    ],
  },
  de: {
    title: "Was Sie auf dem Kurs erwartet",
    description: [
      "Der Online-Angelkurs in Bayern kombiniert unser Online-Angebot mit 30 Stunden Online-Unterricht, inklusive 6 Stunden Praxistraining. Mit Zugang zur Online-Lernplattform lernen Sie in Ihrem eigenen Tempo und bereiten sich optimal auf Ihre Angelprüfung vor. Im Online-Unterricht und im Praxistraining erhalten Sie gezielte Anweisungen zu den Prüfungsthemen und praktischen Bereichen. Sie können aus zahlreichen Prüfungsorten in ganz Bayern einen Termin wählen und sich bei der Prüfungsbehörde anmelden.",
      "Unser Ziel ist Ihr Erfolg – ​​wir bieten Ihnen intensive Unterstützung, damit Sie die Prüfung bestehen. Respekt vor der Natur ist ein zentraler Bestandteil unserer Ausbildung. Wir legen Wert darauf, dass Sie nicht nur die Theorie erlernen, sondern auch ein Bewusstsein für nachhaltige Nutzung und Naturschutz entwickeln. Unsere Online-Plattform bietet Ihnen eine umfassende Vorbereitung auf Ihre Angelprüfung. Neben Grundlagenwissen erhalten Sie fundierte Informationen über die Natur und ihre nachhaltige Nutzung. Starten Sie Ihre Angelkarriere mit uns!",
    ],
  },
};

type WhatToExpectSectionProps = {
  className?: string;
  translations?: Partial<
    Record<SupportedLanguage, { title: string; description: string[] }>
  >;
};

export default function WhatToExpectSection({
  className = "",
  translations,
}: WhatToExpectSectionProps) {
  const { language } = useLanguage();

  const lang = (language === "de" ? "de" : "en") satisfies SupportedLanguage;
  const t = translations?.[lang] ?? SECTION_TRANSLATIONS[lang];

  return (
    <section className={className}>
      <h3 className={"text-3xl mb-8 text-center"}>{t.title}</h3>
      <div className={"h-auto flex-1 max-w-[700px] mx-auto"}>
        {t.description.map((item, index) => {
          return (
            <p key={index} className={"text-center md:text-left mb-6"}>
              {item}
            </p>
          );
        })}
      </div>
    </section>
  );
}
