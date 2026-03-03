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
    id: '1',
    name: 'Hans Müller',
    title: 'Head Instructor',
    titleDe: 'Chefausbilder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
  },
  {
    id: '2',
    name: 'Maria Schmidt',
    title: 'Senior Instructor',
    titleDe: 'Senior Ausbilderin',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
  {
    id: '3',
    name: 'Thomas Weber',
    title: 'Fishing Expert',
    titleDe: 'Angel-Experte',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
  },
  {
    id: '4',
    name: 'Lisa Fischer',
    title: 'Course Coordinator',
    titleDe: 'Kurskoordinatorin',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
  {
    id: '5',
    name: 'Michael Braun',
    title: 'Sea Fishing Specialist',
    titleDe: 'Hochsee-Spezialist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    instagram: 'https://instagram.com',
  },
  {
    id: '6',
    name: 'Anna Becker',
    title: 'Youth Instructor',
    titleDe: 'Jugendausbilderin',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
  },
];
