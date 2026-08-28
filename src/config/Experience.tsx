import NestJs from '@/components/technologies/NestJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Zoolarity',
    position: 'Full Stack Developer Intern',
    location: 'On-Site',
    image: '',
    description: [
      'Developed and refactored RESTful endpoints within a modular monolith, utilizing the Controller-Service pattern for enhanced code maintainability.',
      'Resolved 3 high-priority full-stack JIRA tickets in a single sprint, implementing role-based access control, API enhancements, database migrations, and UI improvements.',
      'Optimized query performance from *10s* to *250ms*, significantly reducing response times.',
    ],
    startDate: 'May 2026',
    endDate: 'July 2026',
    website: '',
    technologies: [
      {
        name: 'NestJS',
        href: 'https://nestjs.com/',
        icon: <NestJs />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
    ],
  },
];
