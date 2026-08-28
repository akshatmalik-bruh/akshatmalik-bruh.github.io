import { NextResponse } from 'next/server';

const levelMap: Record<number, string> = {
  0: 'NONE',
  1: 'FIRST_QUARTILE',
  2: 'SECOND_QUARTILE',
  3: 'THIRD_QUARTILE',
  4: 'FOURTH_QUARTILE',
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || 'akshatmalik-bruh';

    const response = await fetch(
      `https://github.com/users/${username}/contributions`,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch contributions from GitHub' },
        { status: response.status },
      );
    }

    const html = await response.text();

    const tooltipMap = new Map<string, number>();
    const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>(.*?)<\/tool-tip>/gs;
    let tooltipMatch;

    while ((tooltipMatch = tooltipRegex.exec(html)) !== null) {
      const id = tooltipMatch[1];
      const text = tooltipMatch[2];

      if (text.includes('No contributions')) {
        tooltipMap.set(id, 0);
      } else {
        const countMatch = text.match(/(\d+)\s+contribution/);
        if (countMatch) {
          tooltipMap.set(id, parseInt(countMatch[1], 10));
        } else {
          tooltipMap.set(id, 1);
        }
      }
    }

    const contributions: {
      date: string;
      count: number;
      level: number;
      contributionCount: number;
      contributionLevel: string;
    }[] = [];

    const tdRegex = /<td[^>]*>/g;
    let tdMatch;

    while ((tdMatch = tdRegex.exec(html)) !== null) {
      const tag = tdMatch[0];
      const dateMatch = tag.match(/data-date="(\d{4}-\d{2}-\d{2})"/);
      if (!dateMatch) continue;

      const date = dateMatch[1];
      const idMatch = tag.match(/id="([^"]+)"/);
      const levelMatch = tag.match(/data-level="(\d+)"/);

      const id = idMatch ? idMatch[1] : '';
      const level = levelMatch ? parseInt(levelMatch[1], 10) : 0;
      const count = (id ? tooltipMap.get(id) : undefined) ?? (level > 0 ? level : 0);

      contributions.push({
        date,
        count,
        level,
        contributionCount: count,
        contributionLevel: levelMap[level] || 'NONE',
      });
    }

    return NextResponse.json({ contributions }, { status: 200 });
  } catch (error) {
    console.error('Error in github-contributions API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
