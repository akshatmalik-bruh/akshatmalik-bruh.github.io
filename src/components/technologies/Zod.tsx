import React from 'react';

export default function Zod({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className || 'size-4'}
    >
      <path d="M2.25 4.5h19.5v3h-12L21.75 16.5v3H2.25v-3h12L2.25 7.5v-3z" />
    </svg>
  );
}
