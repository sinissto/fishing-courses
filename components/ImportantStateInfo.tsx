import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    title: "Important State Information",
    subtitle: "Please read the following information carefully",
    description: [
      "When purchasing a fishing license, selecting your federal state is important, as fishing law is state law. Choosing the federal state where your primary residence is located will direct you to the appropriate course.",
      "We offer support to get license in Bavaria.",
    ],
  },
  de: {
    title: "Wichtige Informationen des Bundesstaates",
    subtitle: "Bitte lesen Sie die folgenden Informationen sorgfältig durch.",
    description: [
      "Beim Kauf eines Angelscheins ist die Wahl des Bundeslandes, in dem Sie Ihren Hauptwohnsitz haben, wichtig, da das Angelrecht Ländersache ist. Wenn Sie das Bundesland auswählen, in dem Sie Ihren Hauptwohnsitz haben, gelangen Sie zum richtigen Kurs.",
      "Wir bieten Unterstützung bei der Erlangung des Führerscheins in Bayern an.",
    ],
  },
};

const ImportantStateInfo = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container py-12 bg-primary/15">
      <div className={"max-w-[700px] mx-auto text-center "}>
        <h2 className={"text-4xl mb-2 uppercase"}>{t.title}</h2>
        <p className={"text-2xl mb-8"}>{t.subtitle}</p>
        {t.description.map((item, i) => (
          <p key={i} className={"text-[18px] last-of-type:text-primary"}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ImportantStateInfo;
