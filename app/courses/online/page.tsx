"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import ImportantStateInfo from "@/components/ImportantStateInfo";
import WhatToExpectSection from "@/components/sections/WhatToExpectSection";
import onlineImg1 from "@/assets/images/online-courses/online-img-1-1.jpg";

import { courses } from "@/data/courses";
import Image from "next/image";
import Link from "next/link";

const translations = {
  en: {
    title: "Online Courses",
    subtitle:
      "Learn at your own pace from anywhere with our comprehensive online fishing license courses.",
    courseIncluded: {
      title: "Course Include",
      featuresList: [
        "Access to the online training platform and digital library “TEACHING LEARNING KNOWLEDGE” (6 months from order, immediate access after booking receipt)",
        "30-hour online classroom course including 6 hours of practical instruction",
        "Flexible learning",
        "Many freely selectable exam locations and dates in Bavaria",
      ],

      price: 279,
      examDescription: [
        "Examination in Bavaria at one of the named locations and offered dates.",
        "You can choose a date from many examination locations in Bavaria and the examination dates offered there and register yourself with the examination authority.",
      ],
      priceDisclaimer: [
        "* Price information:",
        "The price of the online course is 279 euros, which includes comprehensive preparation for the fishing license exam. The course covers all necessary topics, including fish species, fishing techniques, and regulations. Additionally, the price includes practice tests and a certificate upon completion.",
        "Please note that the price does not include the examination fee (50 euro), which is paid separately to the examination authority when you register for your chosen exam date.",
      ],
      bookCourse: "Book the course",
    },

    courseRequirements: {
      title: "Requirements",
      description: [
        "The examination board requires the following prerequisites from the participant for participation in an online classroom course:",
        "A stable internet connection with a speed that allows for secure video transmission.",
        "PC, laptop, tablet, or similar device equipped with an internal/external webcam for visual participation in the video sessions (Please note that direct dialogue between the instructor and participants must be possible. Participation in the online course must be clearly, completely, and accurately recorded and documented by the instructor. The minimum number of hours offered according to the training plan must not be undercut.)",
        "Both practical components of the curriculum must be completed as face-to-face instruction.",
      ],
    },
    exam: {
      title: "Exam dates",
      description:
        "On following link you can find available exam dates and locations.",
      url: "https://fischerpruefung-online.bayern.de/fprApp/verwaltung/Pruefungssuche?execution=e2s1",
      button: "View exam dates and locations",
    },
  },

  de: {
    title: "Online-Kurse",
    subtitle:
      "Lernen Sie in Ihrem eigenen Tempo von überall mit unseren umfassenden Online-Angelschein-Kursen.",
    courseIncluded: {
      title: "Kursinhalt",
      featuresList: [
        "Zugang zur Online-Trainingsplattform und digitalen Bibliothek „LEHREN LERNEN WISSEN“ (6 Monate ab Bestellung, sofortiger Zugang nach Buchungseingang)",
        "330 Stunden Online-Präsenzkurs inkl. 6 Stunden praktische Einweisung",
        "Flexibles Lernen",
        "Viele, frei wählbare Prüfungsstandorte und -termine in Bayern",
      ],

      price: 279,
      examDescription: [
        "Prüfung in Bayern an einem der benannten Standorte und angebotenen Termine",
        "Du kannst aus vielen Prüfungsstandorten Bayerns und den dort angebotenen Prüfungsterminen einen Termin auswählen und dich selbstständig bei der Prüfungsbehörde anmelden.",
      ],
      priceDisclaimer: [
        "* Preisinformationen:",
        "Der Online-Kurs kostet 279 Euro und beinhaltet eine umfassende Vorbereitung auf die Angelscheinprüfung. Er deckt alle relevanten Themen ab, darunter Fischarten, Angeltechniken und die geltenden Bestimmungen. Im Preis enthalten sind außerdem Übungstests und ein Zertifikat nach erfolgreichem Abschluss.",
        "Bitte beachten Sie, dass die Prüfungsgebühr (50 Euro) nicht im Preis enthalten ist. Diese ist separat an die Prüfungsbehörde zu entrichten, wenn Sie sich für Ihren gewählten Prüfungstermin anmelden.",
      ],
      bookCourse: "Buchen Sie den Kurs",
    },

    courseRequirements: {
      title: "Anforderungen!",
      description: [
        "Die Prüfungskommission verlangt von den Teilnehmern folgende Voraussetzungen für die Teilnahme an einem Online-Kurs:",
        "Eine stabile Internetverbindung mit einer Geschwindigkeit, die eine sichere Videoübertragung ermöglicht.",
        "PC, Laptop, Tablet oder ähnliches Gerät mit interner/externer Webcam zur visuellen Teilnahme an den Videositzungen (Bitte beachten Sie, dass ein direkter Dialog zwischen Dozent und Teilnehmern möglich sein muss. Die Teilnahme am Online-Kurs muss vom Dozenten klar, vollständig und präzise aufgezeichnet und dokumentiert werden. Die im Schulungsplan festgelegte Mindeststundenzahl darf nicht unterschritten werden.)",
        "Beide praktischen Bestandteile des Lehrplans müssen im Präsenzunterricht absolviert werden.",
      ],
    },
    exam: {
      title: "Prüfungstermine!",
      description:
        "Unter folgendem Link finden Sie die verfügbaren Prüfungstermine und -orte.",
      url: "https://fischerpruefung-online.bayern.de/fprApp/verwaltung/Pruefungssuche?execution=e2s1",
      button: "Prüfungstermine und -orte anzeigen",
    },
  },
};

const onlineCoursesSchedules = {
  en: {
    title: "Online courses in Bavaria",

    schedules: [
      {
        title: "Online courses",
        location: "Location: ",
        city: "Munich",
        duration: "Duration: ",
        startDate: "2026-04-15",
        endDate: "2026-05-15",
        agenda: "Agenda",
        agendaByDay: [
          {
            dayOfWeek: "Monday",
            date: "2026-04-15",
            startTime: "5:00 PM",
            endTime: "10:45 PM",
            topic: "General Fish Biology, Special Fish Biology 1",
          },
          {
            dayOfWeek: "Tuesday",
            date: "2026-04-22",
            startTime: "5:00 PM",
            endTime: "10:00 PM",
            topic: "Special Fish Biology Module 2, Fishing Gear 1",
          },
          {
            dayOfWeek: "Wednesday",
            date: "2026-04-29",
            startTime: "5:00 PM",
            endTime: "10:00 PM",
            topic:
              "Fishing Gear Module 2, Waters, Protection, and Management 1;",
          },
          {
            dayOfWeek: "Thursday",
            date: "2026-04-30",
            startTime: "5:00 PM",
            endTime: "10:00 PM",
            topic: "Waters, Protection, and Management Module 2",
          },
          {
            dayOfWeek: "Friday",
            date: "2026-04-30",
            startTime: "5:00 PM",
            endTime: "10:00 PM",
            topic: "Legal Module",
          },
          {
            dayOfWeek: "Saturday",
            date: "2026-04-30",
            startTime: "09:00 AM",
            endTime: "03:30 PM",
            topic: "Practical Module, Location: 85515 Munich",
          },
        ],
        addToCart: "Add To Cart",
      },
      {
        title: "Online courses",
        location: "Location: ",
        city: "Munich",
        duration: "Duration: ",
        startDate: "2026-04-15",
        endDate: "2026-05-15",
        agenda: "Agenda",
        agendaByDay: [
          {
            dayOfWeek: "Monday",
            date: "2026-04-15",
            startTime: "5:00 PM",
            endTime: "10:45 PM",
            topic: "General Fish Biology, Special Fish Biology 1",
          },
          {
            dayOfWeek: "Tuesday",
            date: "2026-04-22",
            startTime: "5:00 PM",
            endTime: "10:00 PM",
            topic: "Special Fish Biology Module 2, Fishing Gear 1",
          },
          {
            dayOfWeek: "Wednesday",
            date: "2026-04-29",
            startTime: "5:00 PM",
            endTime: "10:00 PM",
            topic:
              "Fishing Gear Module 2, Waters, Protection, and Management 1;",
          },
          {
            dayOfWeek: "Thursday",
            date: "2026-04-30",
            startTime: "5:00 PM",
            endTime: "10:00 PM",
            topic: "Waters, Protection, and Management Module 2",
          },
          {
            dayOfWeek: "Friday",
            date: "2026-04-30",
            startTime: "5:00 PM",
            endTime: "10:00 PM",
            topic: "Legal Module",
          },
          {
            dayOfWeek: "Saturday",
            date: "2026-04-30",
            startTime: "09:00 AM",
            endTime: "03:30 PM",
            topic: "Practical Module, Location: 85515 Munich",
          },
        ],
        addToCart: "Add To Cart",
      },
    ],
  },
  de: {
    title: "Online-Kurse in Bayern",

    schedules: [
      {
        title: "Online-Kurse in Bayern",
        location: "Standort: ",
        city: "München",
        duration: "Dauer: ",
        startDate: "2026-04-15",
        endDate: "2026-05-15",
        agenda: "Agenda",
        agendaByDay: [
          {
            dayOfWeek: "Montag",
            date: "2026-04-15",
            startTime: "17:00 Uhr",
            endTime: "22:45 Uhr",
            topic: "Allgemeine Fischkunde, Spezielle Fischkunde 1",
          },
          {
            dayOfWeek: "Dienstag",
            date: "2026-04-22",
            startTime: "17:00 Uhr",
            endTime: "22:00 Uhr",
            topic: "Modul Spezielle Fischkunde 2, Fanggeräte 1",
          },
          {
            dayOfWeek: "Mittwoch",
            date: "2026-04-29",
            startTime: "17:00 Uhr",
            endTime: "22:00 Uhr",
            topic: "Modul Fanggeräte 2, Gewässer, Schutz, Pflege 1",
          },
          {
            dayOfWeek: "Donnerstag",
            date: "2026-04-30",
            startTime: "17:00 Uhr",
            endTime: "22:00 Uhr",
            topic: "Modul Gewässer, Schutz, Pflege 2",
          },
          {
            dayOfWeek: "Freitag",
            date: "2026-04-30",
            startTime: "17:00 Uhr",
            endTime: "22:00 Uhr",
            topic: "Modul Recht",
          },
          {
            dayOfWeek: "Samstag",
            date: "2026-04-30",
            startTime: "09:00 Uhr",
            endTime: "15:30 Uhr",
            topic: "Modul Praxis, Praxisstandort: 85515 München",
          },
        ],
        addToCart: "In den Warenkorb legen",
      },
      {
        title: "Online-Kurse",
        location: "Standort: ",
        city: "München",
        duration: "Dauer: ",
        startDate: "2026-04-15",
        endDate: "2026-05-15",
        agenda: "Agenda",
        agendaByDay: [
          {
            dayOfWeek: "Montag",
            date: "2026-04-15",
            startTime: "17:00 Uhr",
            endTime: "22:45 Uhr",
            topic: "Allgemeine Fischkunde, Spezielle Fischkunde 1",
          },
          {
            dayOfWeek: "Dienstag",
            date: "2026-04-22",
            startTime: "17:00 Uhr",
            endTime: "22:00 Uhr",
            topic: "Modul Spezielle Fischkunde 2, Fanggeräte 1",
          },
          {
            dayOfWeek: "Mittwoch",
            date: "2026-04-29",
            startTime: "17:00 Uhr",
            endTime: "22:00 Uhr",
            topic: "Modul Fanggeräte 2, Gewässer, Schutz, Pflege 1",
          },
          {
            dayOfWeek: "Donnerstag",
            date: "2026-04-30",
            startTime: "17:00 Uhr",
            endTime: "22:00 Uhr",
            topic: "Modul Gewässer, Schutz, Pflege 2",
          },
          {
            dayOfWeek: "Freitag",
            date: "2026-04-30",
            startTime: "17:00 Uhr",
            endTime: "22:00 Uhr",
            topic: "Modul Recht",
          },
          {
            dayOfWeek: "Samstag",
            date: "2026-04-30",
            startTime: "09:00 Uhr",
            endTime: "15:30 Uhr",
            topic: "Modul Praxis, Praxisstandort: 85515 München",
          },
        ],
        addToCart: "In den Warenkorb legen",
      },
    ],
  },
};

export default function OnlineCoursesPage() {
  const { language } = useLanguage();
  const { addItem } = useCart();
  const t = translations[language];
  const oc = onlineCoursesSchedules[language];

  const onlineCourse = courses.find((c) => c.id === "online-course");
  const onlineCoursePrice = onlineCourse?.price ?? t.courseIncluded.price;

  const handleAddToCart = (
    schedule: (typeof oc.schedules)[number],
    index: number,
  ) => {
    const title =
      language === "de"
        ? `${schedule.title} (${schedule.startDate} - ${schedule.endDate})`
        : `${schedule.title} (${schedule.startDate} - ${schedule.endDate})`;

    addItem({
      id: `online-course-${schedule.startDate}-${schedule.endDate}-${index}`,
      title,
      price: onlineCoursePrice,
      image: onlineCourse?.image ?? onlineImg1.src,
    });
  };

  return (
    <main className="pt-32 pb-16">
      <div className="container">
        <div className={"section-padding text-center "}>
          <h1 className="text-4xl font-bold text-text-dark mb-4">{t.title}</h1>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <ImportantStateInfo />

        {/* What is included in course */}
        <div className={"bg-secondary section-padding shadow-2xl"}>
          <div
            className={
              "flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-8"
            }
          >
            <div className={"w-full lg:w-1/2 h-full px-4"}>
              <Image
                src={onlineImg1.src}
                alt={"Angler on the river"}
                width={970}
                height={970}
                className={"w-full h-full object-cover rounded-lg"}
              />
            </div>

            <div className={"w-full lg:w-1/2 px-4"}>
              <h3 className={"text-3xl mb-8"}>{t.courseIncluded.title}</h3>
              <ul className={"list-outside list-disc ml-8 mb-4"}>
                {t.courseIncluded.featuresList.map((item, index) => {
                  return (
                    <li key={index} className={"mb-2"}>
                      {item}
                    </li>
                  );
                })}
              </ul>

              <div className={"mb-12"}>
                <ul className={"list-outside list-disc ml-8 mb-4"}>
                  {t.courseIncluded.examDescription.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>

              <div
                className={
                  "flex items-center justify-between bg-primary/10 p-4 rounded-lg mt-6"
                }
              >
                <p className={"text-3xl font-bold ml-8"}>
                  {t.courseIncluded.price}&euro;<sup>*</sup>
                </p>

                <a href={"#exam-date-info"} className={"btn btn-primary"}>
                  {t.courseIncluded.bookCourse}
                </a>
              </div>
            </div>
          </div>
          <div className={"px-4"}>
            <ul>
              {t.courseIncluded.priceDisclaimer.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={"first-of-type:font-bold mb-4 text-[14px]"}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          className={
            "section-padding mt-12 flex flex-col lg:flex-row justify-between gap-8"
          }
        >
          {/* What to expect at the course */}
          <div
            className={
              "w-full lg:w-1/2 px-4 flex flex-col items-center shadow-2xl"
            }
          >
            <WhatToExpectSection />
          </div>

          {/* Course Requirements */}
          <div
            className={
              "w-full lg:w-1/2 px-4 flex flex-col items-center shadow-2xl"
            }
          >
            <h3 className={"text-3xl mb-8"}>{t.courseRequirements.title}</h3>

            <div className={""}>
              <ul className={"list-outside list-disc ml-8 mb-4"}>
                {t.courseRequirements.description.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        "first-of-type:font-bold first-of-type:mb-6 first-of-type:list-none first-of-type:-ml-6"
                      }
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Online course date selection and booking */}
        <div id={"exam-date-info"} className={"bg-primary/15 py-24 "}>
          <h3 className={"text-center text-3xl"}>{oc.title}</h3>

          <div
            className={"grid grid-cols-1 lg:grid-cols-2 gap-10 px-2 md:px-10"}
          >
            {/* Booking Cards */}
            {oc.schedules.map((schedule, index) => (
              <div
                key={index}
                className={
                  "max-w-full bg-white p-6 rounded-lg mt-12 lg:mx-auto"
                }
              >
                {/* Title */}
                <h4 className={"uppercase text-xl mb-8"}>{schedule.title}</h4>
                <p className={"mb-4"}>
                  {schedule.location}
                  <span className={"font-bold"}>{schedule.city}</span>
                </p>

                {/* Duration */}
                <p className={"mb-4"}>
                  {schedule.duration}
                  <span className={"font-bold"}>
                    {schedule.startDate} - {schedule.endDate}
                  </span>
                </p>

                {/* Agenda */}
                <p className={"mb-4"}>{schedule.agenda}</p>
                <ul className={"list-outside list-disc ml-8 mb-4"}>
                  {schedule.agendaByDay.map((day, index) => {
                    return (
                      <li key={index} className={"mb-2"}>
                        <p>
                          {day.dayOfWeek}
                          {", "}
                          <span className={"font-bold"}>{day.date}</span>
                        </p>
                        <p>
                          <span className={"font-bold"}>
                            {day.startTime} - {day.endTime}
                          </span>
                        </p>
                        <p>{day.topic}</p>
                      </li>
                    );
                  })}
                </ul>

                {/* Cart Button */}
                <div className={"text-right"}>
                  <button
                    onClick={() => handleAddToCart(schedule, index)}
                    className={"btn btn-primary"}
                  >
                    {schedule.addToCart}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exam date info */}
      <div
        className={
          "bg-primary my-12 py-12 text-center max-w-[700px] rounded-md shadow-2xl mx-4"
        }
      >
        <h3 className={"text-3xl text-white mb-8"}>{t.exam.title}</h3>
        <p className={"text-white mb-4"}>{t.exam.description}</p>
        <a
          href={t.exam.url}
          target="_blank"
          className={
            "inline-block text-white px-4 py-2 ring-1 ring-white ring-opacity-5 rounded-md hover:bg-white hover:text-primary hover:ring-primary/15 active:scale-[0.98] transition-all"
          }
        >
          {t.exam.button}
        </a>
      </div>
    </main>
  );
}
