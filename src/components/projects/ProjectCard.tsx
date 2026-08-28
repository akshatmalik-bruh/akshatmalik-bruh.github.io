'use client';

import { useUmami } from '@/hooks/use-umami';
import type { AnalyticsEventData } from '@/types/analytics';
import { type Project } from '@/types/project';
import { Link } from 'next-view-transitions';
import React from 'react';

import ScrollReveal from '../common/ScrollReveal';
import Skill from '../common/Skill';
import Github from '../svgs/Github';
import LinkedIn from '../svgs/LinkedIn';
import Website from '../svgs/Website';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { trackEvent } = useUmami();

  const projectId = project.title.toLowerCase().replace(/\s+/g, '-');

  const trackProject = (
    action: AnalyticsEventData['project_click']['action'],
  ) =>
    trackEvent({
      name: 'project_click',
      data: {
        projectId,
        projectTitle: project.title,
        action,
        location: 'project_card',
      },
    });

  const hasValidLiveLink =
    Boolean(project.link) &&
    project.link.trim() !== '' &&
    project.link !== project.github;

  return (
    <ScrollReveal>
      <div className="flex flex-col gap-4">
        {/* Project Header */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          {/* Left Side: Title + Links */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                {hasValidLiveLink && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.link}
                        target="_blank"
                        className="size-4 text-neutral-500 hover:text-primary transition-colors"
                        onClick={() => trackProject('visit_website')}
                      >
                        <Website />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Visit Website / Package</TooltipContent>
                  </Tooltip>
                )}
                {project.github && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.github}
                        target="_blank"
                        className="size-4 text-neutral-500 hover:text-primary transition-colors"
                        onClick={() => trackProject('visit_github')}
                      >
                        <Github />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>View GitHub</TooltipContent>
                  </Tooltip>
                )}
                {project.linkedin && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.linkedin}
                        target="_blank"
                        className="size-4 text-neutral-500 hover:text-primary transition-colors"
                        onClick={() => trackProject('visit_website')}
                      >
                        <LinkedIn />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>View LinkedIn Post</TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-md mt-2 mb-2 font-semibold">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology, index) => (
              <Skill
                key={index}
                name={technology.name}
                href={
                  hasValidLiveLink
                    ? project.link
                    : project.linkedin || project.github || '#'
                }
              >
                {technology.icon}
              </Skill>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="text-secondary flex flex-col">
          <p>• {project.description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
