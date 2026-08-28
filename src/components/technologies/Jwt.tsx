import React from 'react';

export default function Jwt({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className || 'size-4'}
    >
      <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm0 2.25l8 4.69v9.12l-8 4.69-8-4.69V6.94l8-4.69zM12 7a5 5 0 100 10 5 5 0 000-10z" />
    </svg>
  );
}
