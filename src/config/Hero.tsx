import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Medium from '@/components/svgs/Medium';
import Npm from '@/components/svgs/Npm';
import X from '@/components/svgs/X';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  NestJs: NestJs,
  PostgreSQL: PostgreSQL,
};

export const heroConfig = {
  name: 'Akshat Malik',
  title: 'Full Stack GenAI Engineer',
  avatar: '/assets/logo.jpeg',
  subtitle: 'A Full Stack & GenAI Developer and an Open Source Contributor.',
  tagline:
    'Designing scalable backends, Retrieval-Augmented Generation (RAG) pipelines, MCP servers, and AI agentic workflows.',
  email: 'akshatf8lmalik@gmail.com',

  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'NestJS',
      href: 'https://nestjs.com/',
      component: 'NestJs',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],

  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume.pdf',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Copy Email',
      action: 'copy_email',
      icon: 'Mail',
    },
  ],
};

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akshat-malik-2079973a0/',
    icon: <LinkedIn className="size-5" />,
  },
  {
    name: 'Github',
    href: 'https://github.com/akshatmalik-bruh',
    icon: <Github className="size-5" />,
  },
  {
    name: 'Twitter / X',
    href: 'https://x.com/akshat__dev',
    icon: <X className="size-5" />,
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@akshatf8lmalik',
    icon: <Medium className="size-5" />,
  },
  {
    name: 'NPM',
    href: 'https://www.npmjs.com/package/chat-relay-mcp',
    icon: <Npm className="size-5" />,
  },
  {
    name: 'Email',
    href: 'mailto:akshatf8lmalik@gmail.com',
    icon: <Mail className="size-5" />,
  },
];
