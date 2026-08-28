import { type EducationItem } from '@/config/Education';
import React from 'react';

interface EducationCardProps {
  education: EducationItem;
}

const parseText = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-bold">{education.institution}</h3>
          <p className="text-muted-foreground text-sm font-medium">
            {education.degree}
          </p>
        </div>
        <div className="text-secondary flex flex-col md:text-right text-sm">
          <p>{education.period}</p>
          <p>{education.location}</p>
        </div>
      </div>

      {/* Details */}
      <div className="text-secondary flex flex-col gap-1 text-sm">
        {education.details.map((detail: string, index: number) => (
          <p
            key={index}
            dangerouslySetInnerHTML={{
              __html: `• ${parseText(detail)}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
