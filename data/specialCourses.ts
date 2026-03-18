export type SupportedLanguage = "en" | "de";

export type SpecialCourseCardData = {
  title: string;
  courseDuration: string;
  trainingBlock: string;
  examDate: string;
  examLocation: string;
  priceMinor: number;
  priceAdult: number;
};

export const specialCourses: Record<
  SupportedLanguage,
  { title: string; courses: SpecialCourseCardData[] }
> = {
  en: {
    title: "Book special course",
    courses: [
      {
        title: "SPECIAL COURSE IN MUNICH",
        courseDuration: "May 30, 2026 – May 31, 2026",
        trainingBlock:
          "Training block and practical block at the house by the castle church, 85815 Munich",
        examDate: "May 31, 2026",
        examLocation:
          "Examination at the house next to the river, 85815 Munich",
        priceMinor: 229,
        priceAdult: 279,
      },
      {
        title: "SPECIAL COURSE IN NUREMBERG",
        courseDuration: "June 13, 2026 – June 14, 2026",
        trainingBlock:
          "Training block and practical block at the city academy, 90403 Nuremberg",
        examDate: "June 14, 2026",
        examLocation:
          "Examination at the riverside hall, 90403 Nuremberg",
        priceMinor: 229,
        priceAdult: 279,
      },
      {
        title: "SPECIAL COURSE IN AUGSBURG",
        courseDuration: "July 4, 2026 – July 5, 2026",
        trainingBlock:
          "Training block and practical block at the house near the old bridge, 86150 Augsburg",
        examDate: "July 5, 2026",
        examLocation:
          "Examination at the community center, 86150 Augsburg",
        priceMinor: 229,
        priceAdult: 279,
      },
      {
        title: "SPECIAL COURSE IN REGENSBURG",
        courseDuration: "August 15, 2026 – August 16, 2026",
        trainingBlock:
          "Training block and practical block at the training hall by the cathedral, 93047 Regensburg",
        examDate: "August 16, 2026",
        examLocation:
          "Examination at the house next to the Danube, 93047 Regensburg",
        priceMinor: 229,
        priceAdult: 279,
      },
      {
        title: "SPECIAL COURSE IN WÜRZBURG",
        courseDuration: "September 19, 2026 – September 20, 2026",
        trainingBlock:
          "Training block and practical block at the seminar house by the fortress, 97070 Würzburg",
        examDate: "September 20, 2026",
        examLocation:
          "Examination at the riverside office, 97070 Würzburg",
        priceMinor: 229,
        priceAdult: 279,
      },
    ],
  },
  de: {
    title: "Spezialkurs buchen",
    courses: [
      {
        title: "SPEZIALKURS IN MÜNCHEN",
        courseDuration: "30. Mai 2026 – 31. Mai 2026",
        trainingBlock:
          "Trainingsblock und Praxisblock am Haus bei der Schlosskirche, 85815 München",
        examDate: "31. Mai 2026",
        examLocation: "Prüfung am Haus neben dem Fluss, 85815 München",
        priceMinor: 229,
        priceAdult: 279,
      },
      {
        title: "SPEZIALKURS IN NÜRNBERG",
        courseDuration: "13. Juni 2026 – 14. Juni 2026",
        trainingBlock:
          "Trainingsblock und Praxisblock in der Stadtakademie, 90403 Nürnberg",
        examDate: "14. Juni 2026",
        examLocation: "Prüfung in der Halle am Fluss, 90403 Nürnberg",
        priceMinor: 229,
        priceAdult: 279,
      },
      {
        title: "SPEZIALKURS IN AUGSBURG",
        courseDuration: "4. Juli 2026 – 5. Juli 2026",
        trainingBlock:
          "Trainingsblock und Praxisblock am Haus nahe der alten Brücke, 86150 Augsburg",
        examDate: "5. Juli 2026",
        examLocation: "Prüfung im Gemeindezentrum, 86150 Augsburg",
        priceMinor: 229,
        priceAdult: 279,
      },
      {
        title: "SPEZIALKURS IN REGENSBURG",
        courseDuration: "15. August 2026 – 16. August 2026",
        trainingBlock:
          "Trainingsblock und Praxisblock in der Trainingshalle am Dom, 93047 Regensburg",
        examDate: "16. August 2026",
        examLocation: "Prüfung am Haus neben der Donau, 93047 Regensburg",
        priceMinor: 229,
        priceAdult: 279,
      },
      {
        title: "SPEZIALKURS IN WÜRZBURG",
        courseDuration: "19. September 2026 – 20. September 2026",
        trainingBlock:
          "Trainingsblock und Praxisblock im Seminarhaus an der Festung, 97070 Würzburg",
        examDate: "20. September 2026",
        examLocation: "Prüfung im Büro am Fluss, 97070 Würzburg",
        priceMinor: 229,
        priceAdult: 279,
      },
    ],
  },
};

