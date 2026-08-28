'use client';

import { BlogList } from '@/components/blog/BlogList';
import Container from '@/components/common/Container';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { useUmami } from '@/hooks/use-umami';
import { BlogPostPreview } from '@/types/blog';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface BlogPageClientProps {
  initialPosts: BlogPostPreview[];
  initialTags: string[];
}

const getBlogPostsByTagsClient = (
  posts: BlogPostPreview[],
  tags: string[],
): BlogPostPreview[] => {
  if (tags.length === 0) return posts;
  const lowerTags = tags.map((t) => t.toLowerCase());
  return posts.filter((post) =>
    post.frontmatter.tags.some((postTag) =>
      lowerTags.includes(postTag.toLowerCase()),
    ),
  );
};

export function BlogPageClient({
  initialPosts,
  initialTags,
}: BlogPageClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { triggerHaptic, isMobile } = useHapticFeedback();
  const { trackEvent } = useUmami();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);

  // Sync selected tags from URL search params on mount / param change
  useEffect(() => {
    const tagParam = searchParams.get('tag') || searchParams.get('tags');
    if (tagParam) {
      const tagsArray = tagParam.split(',').map((t) => t.trim()).filter(Boolean);
      setSelectedTags(tagsArray);
      setFilteredPosts(getBlogPostsByTagsClient(initialPosts, tagsArray));
    } else {
      setSelectedTags([]);
      setFilteredPosts(initialPosts);
    }
  }, [searchParams, initialPosts]);

  // Handle multi-select tag click
  const handleTagClick = (tag: string) => {
    if (isMobile()) {
      triggerHaptic('light');
    }

    const isSelected = selectedTags.some(
      (t) => t.toLowerCase() === tag.toLowerCase(),
    );

    let updatedTags: string[];
    if (isSelected) {
      updatedTags = selectedTags.filter(
        (t) => t.toLowerCase() !== tag.toLowerCase(),
      );
    } else {
      updatedTags = [...selectedTags, tag];
    }

    setSelectedTags(updatedTags);
    const filtered = getBlogPostsByTagsClient(initialPosts, updatedTags);
    setFilteredPosts(filtered);

    trackEvent({
      name: 'button_click',
      data: {
        buttonId: 'blog_tag_filter',
        section: 'blog',
        action: isSelected ? `deselect:${tag}` : `select:${tag}`,
      },
    });

    if (updatedTags.length === 0) {
      router.replace('/blog');
    } else {
      router.replace(`/blog?tags=${encodeURIComponent(updatedTags.join(','))}`);
    }
  };

  const handleClearAll = () => {
    if (isMobile()) {
      triggerHaptic('medium');
    }
    setSelectedTags([]);
    setFilteredPosts(initialPosts);
    router.replace('/blog');
  };

  const getTagPostCount = (tag: string) => {
    return initialPosts.filter((post) =>
      post.frontmatter.tags.some(
        (postTag) => postTag.toLowerCase() === tag.toLowerCase(),
      ),
    ).length;
  };

  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Blogs
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Thoughts, tutorials, and insights on engineering, and programming.
          </p>
        </div>

        <Separator />

        {/* Multi-Select Tags */}
        {initialTags.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">Filter by Tags</h2>
                <span className="text-xs text-muted-foreground">(Multi-select enabled)</span>
              </div>
              {selectedTags.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="text-primary hover:underline text-sm font-medium transition-colors"
                >
                  Clear all ({selectedTags.length})
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {initialTags.map((tag) => {
                const postCount = getTagPostCount(tag);
                const isSelected = selectedTags.some(
                  (t) => t.toLowerCase() === tag.toLowerCase(),
                );
                return (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className="transition-transform active:scale-95"
                  >
                    <Badge
                      variant={isSelected ? 'default' : 'outline'}
                      className={`cursor-pointer text-xs capitalize transition-all ${
                        isSelected
                          ? 'bg-primary text-primary-foreground font-semibold shadow-md'
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      {isSelected ? '✓ ' : ''}{tag} ({postCount})
                    </Badge>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Blog Posts Header & List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              {selectedTags.length > 0
                ? `Posts tagged: ${selectedTags.join(', ')}`
                : 'Latest Posts'}
              {filteredPosts.length > 0 && (
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({filteredPosts.length}{' '}
                  {filteredPosts.length === 1 ? 'post' : 'posts'})
                </span>
              )}
            </h2>
          </div>

          <BlogList posts={filteredPosts} />
        </div>
      </div>
    </Container>
  );
}
