'use client';

import { type OpenSourceContribution } from '@/config/OpenSource';
import Image from 'next/image';
import React, { useState } from 'react';

import { Button } from '../ui/button';
import { OpenSourceCard } from './OpenSourceCard';

interface RepoGroup {
  id: string;
  name: string;
  logo: string;
  description: string;
  count: string;
  contributions: OpenSourceContribution[];
}

export function RepoSection({ repoGroup }: { repoGroup: RepoGroup }) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const initialVisibleCount = 6;
  const hasMore = repoGroup.contributions.length > initialVisibleCount;
  const visibleContributions = expanded
    ? repoGroup.contributions
    : repoGroup.contributions.slice(0, initialVisibleCount);

  return (
    <div id={repoGroup.id} className="scroll-mt-24 flex flex-col gap-6">
      {/* Repo Banner Header */}
      <div className="flex items-center justify-between rounded-xl border border-dashed border-black/20 bg-black/5 p-5 dark:border-white/20 dark:bg-white/5">
        <div className="flex items-center gap-4">
          <div className="relative size-12 overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
            <Image
              src={repoGroup.logo}
              alt={repoGroup.name}
              width={48}
              height={48}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
          <div>
            <h3 className="font-mono text-lg font-bold text-foreground">
              {repoGroup.name}
            </h3>
            <p className="text-xs text-muted-foreground">
              {repoGroup.description}
            </p>
          </div>
        </div>
        <div className="hidden rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-xs font-bold text-green-600 dark:text-green-400 sm:block">
          {repoGroup.count}
        </div>
      </div>

      {/* Contribution Cards */}
      <div className="flex flex-col gap-6">
        {visibleContributions.map(
          (item: OpenSourceContribution, index: number) => (
            <OpenSourceCard key={index} contribution={item} />
          ),
        )}
      </div>

      {/* Know More / Show All Button */}
      {hasMore && (
        <div className="mt-2 flex justify-center">
          <Button
            variant="outline"
            onClick={() => setExpanded(!expanded)}
            className="inset-shadow-indigo-500 border-dashed"
          >
            {expanded
              ? `Show Top ${initialVisibleCount} PRs`
              : `Know more — Show all ${repoGroup.contributions.length} Merged PRs`}
          </Button>
        </div>
      )}
    </div>
  );
}
