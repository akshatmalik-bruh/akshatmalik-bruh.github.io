import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export const siteConfig = {
  name: 'Akshat Malik',
  title: 'Akshat Malik | Full Stack GenAI Engineer',
  description:
    'Full Stack AI Engineer passionate about designing developer workflows, orchestrating agent workflows, and building scalable software systems.',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage: '/assets/logo.jpeg',
  author: {
    name: 'Akshat Malik',
    twitter: '@akshatmalik',
    github: 'akshatmalik-bruh',
    linkedin: 'akshat-malik-2079973a0',
    email: 'akshatf8lmalik@gmail.com',
  },
  keywords: [
    'portfolio',
    'developer',
    'full-stack',
    'ai engineer',
    'react',
    'nextjs',
    'typescript',
    'nestjs',
    'rag',
    'mcp',
    'akshat malik',
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  '/': {
    title: `${heroConfig.name} - ${heroConfig.title}`,
    description: siteConfig.description,
    keywords: [
      'portfolio',
      'developer',
      'full-stack',
      'ai engineer',
      'projects',
    ],
    ogImage: '/assets/logo.jpeg',
    twitterCard: 'summary_large_image',
  },
  '/work-experience': {
    title: 'Work Experience - Akshat Malik',
    description:
      'Explore my work experience in software engineering and full stack development.',
    keywords: [
      'work experience',
      'career',
      'professional',
      'software developer',
    ],
    ogImage: '/assets/logo.jpeg',
    twitterCard: 'summary_large_image',
  },
  '/projects': {
    title: 'Projects - Akshat Malik',
    description:
      'Discover my projects in AI, RAG systems, MCP servers, and full stack applications.',
    keywords: ['projects', 'portfolio', 'mcp', 'rag', 'ai'],
    ogImage: '/assets/logo.jpeg',
    twitterCard: 'summary_large_image',
  },
  '/open-source': {
    title: 'Open Source Contributions - Akshat Malik',
    description:
      'Merged PRs and open source contributions across repowise-dev, better-auth, corsairdev, and more.',
    keywords: ['open source', 'contributions', 'pull requests', 'github'],
    ogImage: '/assets/logo.jpeg',
    twitterCard: 'summary_large_image',
  },
  '/blog': {
    title: 'Blog - Akshat Malik',
    description:
      'Read my articles on software engineering, Docker, debugging, MCP servers, and scalable code.',
    keywords: [
      'blog',
      'tutorials',
      'programming',
      'medium',
      'technical writing',
    ],
    ogImage: '/assets/logo.jpeg',
    twitterCard: 'summary_large_image',
  },
  '/resume': {
    title: 'Resume - Akshat Malik',
    description: `View and download Akshat Malik's resume.`,
    keywords: ['resume', 'cv', 'professional', 'skills'],
    ogImage: '/assets/logo.jpeg',
    twitterCard: 'summary',
  },
};

export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords || siteConfig.keywords,
    authors: [
      {
        name: siteConfig.author.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/assets/logo.jpeg',
      shortcut: '/assets/logo.jpeg',
      apple: '/assets/logo.jpeg',
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
