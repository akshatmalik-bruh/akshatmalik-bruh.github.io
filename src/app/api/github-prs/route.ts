import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://api.github.com/search/issues?q=author:akshatmalik-bruh+type:pr+is:merged',
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'application/vnd.github+json',
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return NextResponse.json({ totalMergedPRs: 36 }, { status: 200 });
    }

    const data = await response.json();
    const totalMergedPRs = typeof data.total_count === 'number' ? data.total_count : 36;

    return NextResponse.json({ totalMergedPRs }, { status: 200 });
  } catch (error) {
    console.error('Error fetching merged PR count:', error);
    return NextResponse.json({ totalMergedPRs: 36 }, { status: 200 });
  }
}
