'use client';

import { githubConfig } from '@/config/Github';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

import Container from '../common/Container';
import GithubIcon from '../svgs/Github';
import { Button } from '../ui/button';

const ActivityCalendar = dynamic(
  () => import('react-activity-calendar').then((mod) => mod.default),
  { ssr: false },
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

// Filter contributions to show from March of current year to present
function filterFromMarch(
  contributions: ContributionItem[],
): ContributionItem[] {
  const currentYear = new Date().getFullYear();
  const marchDate = new Date(currentYear, 2, 1); // March 1st

  const filtered = contributions.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= marchDate;
  });

  // Fallback to recent 180 days if less than 30 days
  return filtered.length >= 30 ? filtered : contributions.slice(-180);
}

export default function Github() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${githubConfig.username}?y=last`,
        );
        const data = await response.json();

        if (data?.contributions && Array.isArray(data.contributions)) {
          const flattenedContributions = data.contributions.flat();

          const contributionLevelMap = {
            NONE: 0,
            FIRST_QUARTILE: 1,
            SECOND_QUARTILE: 2,
            THIRD_QUARTILE: 3,
            FOURTH_QUARTILE: 4,
          };

          const validContributions = flattenedContributions
            .map((item: Record<string, unknown>) => {
              if (typeof item !== 'object' || !item || !item.date) return null;

              const date = String(item.date);
              const count = Number(item.count ?? item.contributionCount ?? 0);
              const rawLevel =
                item.level ??
                contributionLevelMap[
                  item.contributionLevel as keyof typeof contributionLevelMap
                ] ??
                0;
              const level = Math.min(
                Math.max(Number(rawLevel), 0),
                4,
              ) as ContributionItem['level'];

              return { date, count, level };
            })
            .filter(
              (item: ContributionItem | null): item is ContributionItem =>
                item !== null,
            );

          if (validContributions.length > 0) {
            validContributions.sort((a, b) => a.date.localeCompare(b.date));

            const total = validContributions.reduce(
              (sum, item) => sum + item.count,
              0,
            );
            setTotalContributions(total);

            // Filter to show from March to present
            const marchContributions = filterFromMarch(validContributions);
            setContributions(marchContributions);
          } else {
            setHasError(true);
          }
        } else {
          setHasError(true);
        }
      } catch (err) {
        console.error('Failed to fetch GitHub contributions:', err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Container id="github-activity" className="mt-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-foreground text-2xl font-bold">
              {githubConfig.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              <b>{githubConfig.username}</b>&apos;s activity (March – Present)
            </p>
            {!isLoading && !hasError && totalContributions > 0 && (
              <p className="text-primary mt-1 text-sm font-medium">
                Total:{' '}
                <span className="font-black">
                  {totalContributions.toLocaleString()}
                </span>{' '}
                contributions
              </p>
            )}
          </div>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="border-primary mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"></div>
              <p className="text-muted-foreground text-sm">
                {githubConfig.loadingState.description}
              </p>
            </div>
          </div>
        ) : hasError || contributions.length === 0 ? (
          <div className="text-muted-foreground border-border rounded-xl border-2 border-dashed p-8 text-center">
            <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <GithubIcon className="h-8 w-8" />
            </div>
            <p className="mb-2 font-medium">{githubConfig.errorState.title}</p>
            <p className="mb-4 text-sm">
              {githubConfig.errorState.description}
            </p>
            <Button
              variant="outline"
              asChild
              track={{
                name: 'external_link_click',
                data: {
                  url: `https://github.com/${githubConfig.username}`,
                  text: githubConfig.errorState.buttonText,
                  location: 'github_section',
                },
              }}
            >
              <a
                href={`https://github.com/${githubConfig.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <GithubIcon className="h-4 w-4" />
                {githubConfig.errorState.buttonText}
              </a>
            </Button>
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div className="bg-background/50 relative flex justify-center rounded-lg border border-dashed border-black/20 p-6 backdrop-blur-sm dark:border-white/10">
              <div className="flex w-full justify-center overflow-x-auto pb-1">
                <ActivityCalendar
                  data={contributions}
                  blockSize={12}
                  blockMargin={3.5}
                  fontSize={githubConfig.fontSize}
                  colorScheme={theme === 'dark' ? 'dark' : 'light'}
                  maxLevel={githubConfig.maxLevel}
                  hideTotalCount={true}
                  hideColorLegend={false}
                  hideMonthLabels={false}
                  theme={githubConfig.theme}
                  labels={{
                    months: githubConfig.months,
                    weekdays: githubConfig.weekdays,
                    totalCount: githubConfig.totalCountLabel,
                  }}
                  style={{
                    color: 'rgb(139, 148, 158)',
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
