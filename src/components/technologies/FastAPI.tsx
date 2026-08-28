import React from 'react';

export default function FastAPI({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className || 'size-4'}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 4.5h2.5v6.25h3.75L11 19.5v-6.25H7.25l4.5-8.75z" />
    </svg>
  );
}
