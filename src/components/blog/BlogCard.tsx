import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { BlogPostPreview } from '@/types/blog';
import Image from 'next/image';
import React from 'react';

import { TrackedLink } from '../common/TrackedLink';
import ArrowRight from '../svgs/ArrowRight';
import Calender from '../svgs/Calender';

interface BlogCardProps {
  post: BlogPostPreview;
}

export function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter } = post;
  const { title, description, image, tags, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <TrackedLink
      href={`/blog/${slug}`}
      className="block h-full cursor-pointer select-none"
      track={{
        name: 'button_click',
        data: {
          buttonId: 'blog_card_click',
          section: 'blog_card',
          action: slug,
        },
      }}
    >
      <Card className="group h-full w-full overflow-hidden border-gray-100 p-0 shadow-none transition-all hover:border-black/20 dark:border-gray-800 dark:hover:border-white/20">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-3">
            <h3 className="group-hover:text-primary line-clamp-2 text-xl leading-tight font-semibold transition-colors">
              {title}
            </h3>
            <p className="text-secondary mt-2 line-clamp-3 text-sm">{description}</p>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex w-full flex-col space-y-3">
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{tags.length - 3} more
                </Badge>
              )}
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 border-t border-dashed border-black/10 pt-3 dark:border-white/10">
              <time
                className="text-secondary flex items-center gap-2 text-xs"
                dateTime={date}
              >
                <Calender className="size-4" /> {formattedDate}
              </time>
              <span className="text-secondary group-hover:text-primary flex items-center justify-end gap-1.5 text-xs font-semibold underline-offset-4 transition-colors group-hover:underline">
                Read More <ArrowRight className="size-3.5" />
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </TrackedLink>
  );
}
