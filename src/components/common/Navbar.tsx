import { navbarConfig } from '@/config/Navbar';
import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';
import { TrackedLink } from './TrackedLink';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-2.5 sm:py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-2 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto py-1">
          {navbarConfig.navItems.map((item) => (
            <TrackedLink
              className="text-xs sm:text-sm md:text-base font-medium whitespace-nowrap transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
              key={item.label}
              href={item.href}
              track={{
                name: 'button_click',
                data: { buttonId: item.label, section: 'navbar' },
              }}
            >
              {item.label}
            </TrackedLink>
          ))}
        </div>
        <div className="flex flex-shrink-0 items-center gap-2 sm:gap-4 ml-2">
          <ThemeToggleButton variant="circle" blur={false} />
        </div>
      </div>
    </Container>
  );
}
