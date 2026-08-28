import Container from '@/components/common/Container';
import ScrollReveal from '@/components/common/ScrollReveal';
import Blog from '@/components/landing/Blog';
import Education from '@/components/landing/Education';
import Experience from '@/components/landing/Experience';
import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import OpenSource from '@/components/landing/OpenSource';
import Work from '@/components/landing/Projects';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen pt-8 sm:pt-12 pb-16">
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Education />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Work />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <OpenSource />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Github />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Blog />
      </ScrollReveal>
    </Container>
  );
}
