export interface NavSubItem {
  id: string;
  slug: string;
  url: string;
  labelEn: string;
  labelDe: string;
}

export interface NavItem {
  id: string;
  slug: string;
  url: string;
  labelEn: string;
  labelDe: string;
  children?: NavSubItem[];
}

export const navItems: NavItem[] = [
  {
    id: "home",
    slug: "home",
    url: "/",
    labelEn: "Home",
    labelDe: "Startseite",
  },
  {
    id: "courses",
    slug: "courses",
    url: "/courses",
    labelEn: "Courses",
    labelDe: "Kurse",
    children: [
      {
        id: "online-courses",
        slug: "online",
        url: "/courses/online",
        labelEn: "Online Courses",
        labelDe: "Online-Kurse",
      },
      {
        id: "specialized-courses",
        slug: "specialized",
        url: "/courses/specialized",
        labelEn: "Specialized Courses",
        labelDe: "Spezialkurse",
      },
      {
        id: "compact-courses",
        slug: "compact",
        url: "/courses/compact",
        labelEn: "Compact Courses",
        labelDe: "Kompaktkurse",
      },
      {
        id: "individual-courses",
        slug: "individual",
        url: "/courses/individual",
        labelEn: "Individual Courses",
        labelDe: "Einzelkurse",
      },
      {
        id: "angling-clubs-courses",
        slug: "angling-clubs",
        url: "/courses/angling-clubs",
        labelEn: "Angling Clubs Courses",
        labelDe: "Angelverein-Kurse",
      },
      {
        id: "practical-courses",
        slug: "practical",
        url: "/courses/practical",
        labelEn: "Practical Courses",
        labelDe: "Praxiskurse",
      },
    ],
  },
  {
    id: "learning-support",
    slug: "learning-support",
    url: "/learning-support",
    labelEn: "Learning Support",
    labelDe: "Lernunterstützung",
  },
  {
    id: "about",
    slug: "about",
    url: "/about",
    labelEn: "About Us",
    labelDe: "Über uns",
  },
  {
    id: "contact",
    slug: "contact",
    url: "/contact",
    labelEn: "Contact",
    labelDe: "Kontakt",
  },
];

/** Helper to get the label based on current language */
export function getLabel(
  item: NavItem | NavSubItem,
  language: "en" | "de"
): string {
  return language === "de" ? item.labelDe : item.labelEn;
}

/** Check if a nav item or any of its children match the current pathname */
export function isNavItemActive(item: NavItem, pathname: string): boolean {
  if (item.url === "/" && pathname === "/") return true;
  if (item.url !== "/" && pathname.startsWith(item.url)) return true;
  if (item.children) {
    return item.children.some((child) => pathname.startsWith(child.url));
  }
  return false;
}

