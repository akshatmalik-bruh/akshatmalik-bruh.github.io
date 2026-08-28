import { type Project } from '@/types/project';
import React from 'react';

import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

export function ProjectList({ projects, className }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  return (
    <div className={`mt-4 flex flex-col gap-8 ${className}`}>
      {projects.map((project: Project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
