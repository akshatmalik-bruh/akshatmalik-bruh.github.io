import React from 'react';

export default function Puppeteer({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className || 'size-4'}
    >
      <path d="M4.5 0A4.5 4.5 0 000 4.5v15A4.5 4.5 0 004.5 24h15a4.5 4.5 0 004.5-4.5v-15A4.5 4.5 0 0019.5 0h-15zm3 6h9a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 16.5v-9A1.5 1.5 0 017.5 6z" />
    </svg>
  );
}
