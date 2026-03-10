import teamImg1 from "@/assets/images/team/team-1-1.png";
import teamImg2 from "@/assets/images/team/team-1-2.png";
import teamImg3 from "@/assets/images/team/team-1-3.png";
import teamImg4 from "@/assets/images/team/team-1-4.jpg";

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  titleDe: string;
  image: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Hans Müller",
    title: "Head Instructor",
    titleDe: "Chefausbilder",
    image: teamImg1.src,
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  {
    id: "2",
    name: "Maria Schmidt",
    title: "Senior Instructor",
    titleDe: "Senior Ausbilderin",
    image: teamImg2.src,
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  {
    id: "3",
    name: "Thomas Weber",
    title: "Fishing Expert",
    titleDe: "Angel-Experte",
    image: teamImg3.src,
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },

  {
    id: "4",
    name: "Michael Braun",
    title: "Sea Fishing Specialist",
    titleDe: "Hochsee-Spezialist",
    image: teamImg4.src,
    instagram: "https://instagram.com",
  },
];
