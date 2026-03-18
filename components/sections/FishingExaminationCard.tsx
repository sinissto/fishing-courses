"use client";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title: "The fishing examination",
    paragraphs: [
      "Each candidate must answer a questionnaire with a total of 60 questions, drawn up by the Saar Fisheries Association in agreement with the Supreme Fisheries Authority, within 2 hours.",
      "In exceptional cases, questions may be asked and answered orally. The exam is passed if at least 45 of the questions are answered correctly. The curriculum covers the following subjects in theory and practice:",
    ],
    subjects: [
      "Subject 1: General fish biology, in particular body structure and life functions, reproduction and nutrition",
      "Subject 2: Special fish biology, in particular species identification and biology of native fish species",
      "Subject 3: Aquatic biology, in particular knowledge of the aquatic habitat, management of fish waters, fish diseases",
      "Subject 4: Fisheries law and related legal areas, legal regulations",
      "Subject 5: Equipment knowledge, fishing gear and its use",
    ],
  },
  de: {
    title: "Die Fischereiprüfung",
    paragraphs: [
      "Jeder Kandidat muss innerhalb von 2 Stunden einen Fragebogen mit insgesamt 60 Fragen beantworten, der vom Saarländischen Fischereiverband im Einvernehmen mit der Obersten Fischereibehörde erstellt wurde.",
      "In Ausnahmefällen können Fragen mündlich gestellt und beantwortet werden. Die Prüfung ist bestanden, wenn mindestens 45 der Fragen richtig beantwortet wurden. Der Lehrstoff umfasst in Theorie und Praxis folgende Sachgebiete:",
    ],
    subjects: [
      "Sachgebiet 1: Allgemeine Fischkunde, insbesondere Körperbau und Lebensfunktionen, Fortpflanzung und Ernährung",
      "Sachgebiet 2: Spezielle Fischkunde, insbesondere Artenkenntnis und Biologie der heimischen Fischarten",
      "Sachgebiet 3: Gewässerkunde, insbesondere Kenntnisse über den Lebensraum Gewässer, Bewirtschaftung der Fischgewässer, Fischkrankheiten",
      "Sachgebiet 4: Fischereirecht und verwandte Rechtsgebiete, rechtliche Vorschriften",
      "Sachgebiet 5: Gerätekunde, Fanggeräte und deren Gebrauch",
    ],
  },
};

export default function FishingExaminationCard() {
  const { language } = useLanguage();
  const t = translations[language];

  const renderSubject = (subject: string) => {
    const match = subject.match(
      /^(Subject\s+\d+|Sachgebiet\s+\d+):\s*(.*)$/,
    );

    if (!match) return subject;

    const [, label, rest] = match;
    return (
      <>
        <strong>{label}</strong>: {rest}
      </>
    );
  };

  return (
    <div className={"bg-white p-6 rounded-lg shadow-2xl h-full"}>
      <h3 className={"text-2xl font-bold mb-6"}>{t.title}</h3>
      <div className={"space-y-4 text-text-light mb-6"}>
        {t.paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      <ul className={"list-outside list-disc ml-6 space-y-2"}>
        {t.subjects.map((s, idx) => (
          <li key={idx}>{renderSubject(s)}</li>
        ))}
      </ul>
    </div>
  );
}

