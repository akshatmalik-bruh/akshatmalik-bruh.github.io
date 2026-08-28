'use client';

import { type OpenSourceContribution } from '@/config/OpenSource';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import ScrollReveal from '../common/ScrollReveal';
import Github from '../svgs/Github';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface OpenSourceCardProps {
  contribution: OpenSourceContribution;
}

export function OpenSourceCard({ contribution }: OpenSourceCardProps) {
  const orgName = contribution.repo.split('/')[0];
  const repoLogo = contribution.logo || `https://github.com/${orgName}.png`;

  return (
    <ScrollReveal>
      <div className="rounded-lg border border-dashed border-black/15 bg-black/[0.02] p-5 transition-all hover:border-black/30 dark:border-white/15 dark:bg-white/[0.02] dark:hover:border-white/30">
        <div className="flex flex-col gap-3">
          {/* Repo Logo & Meta Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative size-6 overflow-hidden rounded-md border border-black/10 dark:border-white/10">
                <Image
                  src={repoLogo}
                  alt={contribution.repo}
                  width={24}
                  height={24}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <span className="text-foreground/80 font-mono text-xs font-semibold tracking-wide">
                {contribution.repo}
              </span>
              <span className="text-muted-foreground text-xs">
                • {contribution.prNum}
              </span>
            </div>
          </div>

          {/* PR Title */}
          <div className="flex items-start justify-between gap-2">
            <Link
              href={contribution.link}
              target="_blank"
              className="text-foreground hover:text-primary text-base font-bold transition-colors md:text-lg"
            >
              {contribution.title}
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={contribution.link}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground mt-1 flex-shrink-0 transition-colors"
                >
                  <Github className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>View PR on GitHub</TooltipContent>
            </Tooltip>
          </div>

          {/* Description */}
          <p className="text-secondary text-sm leading-relaxed">
            {contribution.description}
          </p>

          {/* Tech Tag */}
          <div className="mt-1 flex items-center justify-between border-t border-dashed border-black/10 pt-3 dark:border-white/10">
            <span className="font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {contribution.tech}
            </span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
