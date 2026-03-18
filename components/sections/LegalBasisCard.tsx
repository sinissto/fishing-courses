"use client";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title: "Legal Basis",
    paragraphs: [
      "The Saarland Fisheries Act states that anyone engaging in fishing must carry a fishing license issued in their name and must present it to the fishing rights holder, etc., upon request.",
      "The initial issuance of a fishing license depends on the applicant having passed a fishing examination in which they have demonstrated sufficient knowledge of the types of fish, the conservation and management of fishing waters, fishing gear and its use, the handling of caught fish, and the regulations governing fisheries and animal welfare.",
      "The minimum age required for admission to the fishing examination in Saarland is 13 years.",
      "Admission to the exam is granted to those who have participated in a preparatory course and gained experience through an internship.",
    ],
  },
  de: {
    title: "Rechtsgrundlage",
    paragraphs: [
      "Das Saarländische Fischereigesetz bestimmt, dass jede Person, die die Fischerei ausübt, einen auf ihren Namen ausgestellten Fischereischein mitführen und ihn dem Fischereiberechtigten usw. auf Verlangen vorzeigen muss.",
      "Die erstmalige Erteilung eines Fischereischeins setzt voraus, dass der Antragsteller eine Fischereiprüfung bestanden hat, in der er ausreichende Kenntnisse über Fischarten, die Hege und Bewirtschaftung von Fischgewässern, Fanggeräte und deren Verwendung, den Umgang mit gefangenen Fischen sowie die für die Fischerei und den Tierschutz maßgeblichen Vorschriften nachgewiesen hat.",
      "Das Mindestalter für die Zulassung zur Fischereiprüfung im Saarland beträgt 13 Jahre.",
      "Die Zulassung zur Prüfung wird denjenigen erteilt, die an einem Vorbereitungskurs teilgenommen und durch ein Praktikum Erfahrung gesammelt haben.",
    ],
  },
};

export default function LegalBasisCard() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={"bg-white p-6 rounded-lg shadow-2xl h-full"}>
      <h3 className={"text-2xl font-bold mb-6"}>{t.title}</h3>
      <div className={"space-y-4 text-text-light"}>
        {t.paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </div>
  );
}

