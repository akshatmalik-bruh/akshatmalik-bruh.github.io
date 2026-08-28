import React from 'react';

export default function SQLite({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className || 'size-4'}
    >
      <path d="M12 0C5.37 0 0 2.686 0 6v12c0 3.314 5.37 6 12 6s12-2.686 12-6V6c0-3.314-5.37-6-12-6zm0 2c5.523 0 10 2.015 10 4.5S17.523 11 12 11 2 8.985 2 6.5 6.477 2 12 2zm0 8c5.523 0 10 2.015 10 4.5S17.523 19 12 19 2 16.985 2 14.5 6.477 10 12 10z" />
    </svg>
  );
}
