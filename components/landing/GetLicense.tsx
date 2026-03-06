"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    subheading: "What we do",
    heading: "We help you get your fishing license",
    description:
      "Discover your passion for fishing with our courses. Whether you're a beginner or an experienced angler, our courses are designed to help you obtain your fishing license and improve your fishing success. Our professional courses offer in-depth knowledge, techniques, and expert tips. With us, you'll acquire skills that will lead to greater catches and guarantee unique experiences in nature. Choose a course tailored to your specific needs and immerse yourself in the exciting world of fishing.",
    button: "Learn how we can help you",
  },
  de: {
    subheading: "Was wir tun",
    heading: "Wir helfen Ihnen beim Erwerb Ihrer Angellizenz.",
    description:
      "Entdecken Sie Ihre Leidenschaft fürs Angeln mit unseren Kursen. Ob Anfänger oder erfahrener Angler – unsere Kurse helfen Ihnen, Ihren Angelschein zu erwerben und Ihre Fangerfolge zu steigern. Unsere professionellen Kurse vermitteln Ihnen fundiertes Wissen, Techniken und Expertentipps. Bei uns erlernen Sie Fähigkeiten, die zu größeren Fängen führen und Ihnen unvergessliche Naturerlebnisse garantieren. Wählen Sie einen Kurs, der genau auf Ihre Bedürfnisse zugeschnitten ist, und tauchen Sie ein in die faszinierende Welt des Angelns.",
    button: "Erfahren Sie, wie wir Ihnen helfen können.",
  },
};

export default function GetLicense() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex items-center justify-around py-10 bg-primary-50">
          <div className={"max-w-[700px] flex flex-col  items-center"}>
            <span className="subheading">{t.subheading}</span>
            <h2 className="heading text-center pb-4">{t.heading}</h2>
            <p className="text-text-light text-center mb-8 leading-relaxed">
              {t.description}
            </p>

            <Link
              href="/about"
              className="inline-block text-primary px-2 pb-2 border-b-2 border-b-transparent hover:border-b-primary active:scale-[0.95] transition"
            >
              {t.button} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
