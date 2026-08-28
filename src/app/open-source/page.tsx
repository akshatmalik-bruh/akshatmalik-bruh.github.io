import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { RepoSection } from '@/components/open-source/RepoSection';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { openSourceContributions } from '@/config/OpenSource';
import { Metadata } from 'next';

export const metadata: Metadata = getMetadata('/open-source');

async function getMergedPRCount(): Promise<number> {
  try {
    const res = await fetch(
      'https://api.github.com/search/issues?q=author:akshatmalik-bruh+type:pr+is:merged',
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          Accept: 'application/vnd.github+json',
        },
        next: { revalidate: 3600 },
      },
    );
    if (res.ok) {
      const data = await res.json();
      return typeof data.total_count === 'number' ? data.total_count : 36;
    }
  } catch (err) {
    console.error('Error fetching PR count for page:', err);
  }
  return 36;
}

export default async function OpenSourcePage() {
  const mergedCount = await getMergedPRCount();

  const repos = [
    {
      id: 'repowise',
      name: 'repowise-dev/repowise',
      logo: 'https://github.com/repowise-dev.png',
      description:
        'AI-driven code analysis, graph indexing & security coordinator framework',
      count: '25+ Merged PRs',
      contributions: openSourceContributions.filter(
        (c) => c.repo === 'repowise-dev/repowise',
      ),
    },
    {
      id: 'corsair',
      name: 'corsairdev/corsair',
      logo: 'https://github.com/corsairdev.png',
      description:
        'Unified integration engine & API orchestration plugins',
      count: '8+ Merged PRs',
      contributions: openSourceContributions.filter(
        (c) => c.repo === 'corsairdev/corsair',
      ),
    },
    {
      id: 'better-auth',
      name: 'better-auth/better-auth',
      logo: 'https://github.com/better-auth.png',
      description:
        'Comprehensive TypeScript authentication library for Web & Next.js',
      count: '1+ Merged PR',
      contributions: openSourceContributions.filter(
        (c) => c.repo === 'better-auth/better-auth',
      ),
    },
  ];

  return (
    <Container className="py-16">
      <SectionHeading subHeading="Contributions" heading="Open Source" />
      <p className="mt-2 text-sm font-medium text-secondary">
        <span className="font-bold text-primary">{mergedCount}+</span> Merged Pull Requests across open source repositories.
      </p>

      {/* Featured Repos Showcase */}
      <div className="mt-12 flex flex-col gap-12">
        {repos.map((repoGroup) => (
          <RepoSection key={repoGroup.id} repoGroup={repoGroup} />
        ))}
      </div>
    </Container>
  );
}
