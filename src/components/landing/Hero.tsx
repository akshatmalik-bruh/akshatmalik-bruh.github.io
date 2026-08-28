'use client';

import { heroConfig, socialLinks } from '@/config/Hero';
import { useMusic } from '@/context/MusicContext';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import Container from '../common/Container';
import { TrackedLink } from '../common/TrackedLink';
import CV from '../svgs/CV';
import Mail from '../svgs/Mail';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const buttonIcons = {
  CV: CV,
  Mail: Mail,
};

export default function Hero() {
  const { name, title, avatar, subtitle, tagline, email, buttons } = heroConfig;
  const [copied, setCopied] = useState<boolean>(false);
  const { musicState, rotationAngle, toggleMusic } = useMusic();

  const handleCopyEmail = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Container className="mx-auto max-w-5xl">
      {/* Avatar Image + Nothing OS Style Status Capsule */}
      <div className="flex items-center gap-4">
        <div
          onClick={toggleMusic}
          style={{ transform: `rotate(${rotationAngle}deg)` }}
          className="relative size-24 cursor-pointer overflow-hidden rounded-full border-2 border-primary/20 p-1 shadow-2xl transition-transform duration-75 ease-linear hover:scale-105 active:scale-95"
        >
          <Image
            src={avatar}
            alt="hero avatar"
            width={96}
            height={96}
            className="size-full rounded-full object-cover select-none pointer-events-none"
          />
        </div>

        {/* Nothing OS Style Borderless Fade Capsule */}
        <div
          className={cn(
            'flex items-center gap-2 font-mono text-[9.5px] tracking-[0.2em] uppercase text-foreground/75 transition-all duration-500 ease-out select-none',
            musicState === 'idle'
              ? 'opacity-0 scale-95 pointer-events-none'
              : 'opacity-100 scale-100',
          )}
        >
          <span>
            {musicState === 'stopping'
              ? 'CLOSING...'
              : 'ONE MORE LIGHT BY LINKIN PARK'}
          </span>
        </div>
      </div>

      {/* Text Area */}
      <div className="mt-8 flex flex-col gap-3">
        <h1 className="text-3xl font-bold md:text-4xl">
          Hi, I&apos;m {name}, <span className="text-secondary">{title}</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-lg font-semibold text-foreground/90 md:text-xl">
          {subtitle}
        </h2>

        {/* Tagline */}
        <p className="mt-1 text-base leading-relaxed text-muted-foreground md:text-lg">
          {tagline}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];

          if (button.action === 'copy_email') {
            return (
              <Button
                key={index}
                variant={button.variant as 'outline' | 'default'}
                className={cn('inset-shadow-indigo-500 cursor-pointer')}
                onClick={handleCopyEmail}
                track={{
                  name: 'button_click',
                  data: { buttonId: 'copy_email', section: 'hero' },
                }}
              >
                {IconComponent && <IconComponent />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </Button>
            );
          }

          return (
            <Button
              key={index}
              variant={button.variant as 'outline' | 'default'}
              asChild
              className={cn('inset-shadow-indigo-500 cursor-pointer')}
              track={{
                name: 'button_click',
                data: {
                  buttonId: button.text.toLowerCase().replace(/\s+/g, '_'),
                  section: 'hero',
                },
              }}
            >
              <Link
                href={button.href || '#'}
                target={button.href?.endsWith('.pdf') ? '_blank' : '_self'}
              >
                {IconComponent && <IconComponent />}
                <span>{button.text}</span>
              </Link>
            </Button>
          );
        })}
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex flex-wrap gap-2">
        {socialLinks.map((social, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <TrackedLink
                href={social.href}
                target="_blank"
                className="hover:bg-accent flex items-center justify-center rounded-lg border p-2 text-neutral-500 transition-colors dark:text-neutral-400"
                track={{
                  name: 'social_link_click',
                  data: { platform: social.name, location: 'hero' },
                }}
              >
                {social.icon}
              </TrackedLink>
            </TooltipTrigger>
            <TooltipContent>{social.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}
