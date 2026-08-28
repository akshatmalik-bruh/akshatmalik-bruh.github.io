'use client';

import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ArrowUpRight from '../svgs/ArrowUpRight';
import { Button } from '../ui/button';

export default function OpenSourceSection() {
  const [mergedCount, setMergedCount] = useState<number>(36);

  useEffect(() => {
    async function fetchPRCount() {
      try {
        const res = await fetch('/api/github-prs');
        if (res.ok) {
          const data = await res.json();
          if (typeof data.totalMergedPRs === 'number') {
            setMergedCount(data.totalMergedPRs);
          }
        }
      } catch (err) {
        console.error('Failed to fetch merged PR count:', err);
      }
    }
    fetchPRCount();
  }, []);

  const repoCards = [
    {
      name: 'repowise-dev/repowise',
      logo: 'https://github.com/repowise-dev.png',
      description:
        'AI-driven code analysis, graph indexing & security coordinator framework',
      prCount: '25+ Merged PRs',
      anchor: '/open-source#repowise',
      tech: 'SERVER • PIPELINES • COMPILERS • AST',
    },
    {
      name: 'corsairdev/corsair',
      logo: 'https://github.com/corsairdev.png',
      description:
        'Unified integration engine & API orchestration plugins',
      prCount: '8+ Merged PRs',
      anchor: '/open-source#corsair',
      tech: 'PLUGINS • INTEGRATIONS • OAUTH • API',
    },
    {
      name: 'better-auth/better-auth',
      logo: 'https://github.com/better-auth.png',
      description:
        'Comprehensive TypeScript authentication library for Web & Next.js',
      prCount: '1+ Merged PR',
      anchor: '/open-source#better-auth',
      tech: 'AUTHENTICATION • TYPESCRIPT • COOKIES',
    },
  ];

  return (
    <Container id="open-source" className="mt-20">
      <div className="flex flex-col gap-1">
        <SectionHeading subHeading="Featured" heading="Open Source" />
        <p className="text-sm font-medium text-secondary">
          <span className="font-bold text-primary">{mergedCount}+</span> Merged Pull Requests across open source repositories
        </p>
      </div>

      {/* Repo Cards Grid */}
      <div className="mt-8 flex flex-col gap-6">
        {repoCards.map((repo) => (
          <Link
            key={repo.name}
            href={repo.anchor}
            className="group relative rounded-xl border border-dashed border-black/20 bg-black/[0.02] p-5 transition-all duration-300 hover:border-black/40 hover:bg-black/[0.04] dark:border-white/20 dark:bg-white/[0.02] dark:hover:border-white/40 dark:hover:bg-white/[0.04]"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Repo Logo & Details */}
              <div className="flex items-center gap-4">
                <div className="relative size-12 flex-shrink-0 overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
                  <Image
                    src={repo.logo}
                    alt={repo.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-mono text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {repo.name}
                    </h3>
                    <ArrowUpRight className="size-3.5 fill-current text-muted-foreground opacity-60 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {repo.description}
                  </p>
                  <div className="mt-1">
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                      {repo.tech}
                    </span>
                  </div>
                </div>
              </div>

              {/* PR Count Pill */}
              <div className="flex flex-shrink-0 items-center justify-between sm:justify-end">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-xs font-bold text-green-600 dark:text-green-400">
                  <div className="size-1.5 rounded-full bg-green-500" />
                  {repo.prCount}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/open-source">Explore all open source PRs</Link>
        </Button>
      </div>
    </Container>
  );
}
