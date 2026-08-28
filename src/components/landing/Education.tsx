'use client';

import { type EducationItem, educationList } from '@/config/Education';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { EducationCard } from '../education/EducationCard';

export default function EducationSection() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Academic" heading="Education" />
      <div className="mt-8 flex flex-col gap-8">
        {educationList.map((item: EducationItem, index: number) => (
          <EducationCard key={index} education={item} />
        ))}
      </div>
    </Container>
  );
}
