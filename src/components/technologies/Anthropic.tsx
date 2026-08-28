import React from 'react';

export default function Anthropic({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className || 'size-4'}
    >
      <path d="M14.07 3.5h-4.14L3.6 20.5h3.91l1.52-3.95h5.94l1.52 3.95h3.91L14.07 3.5zm-3.6 9.5l1.96-5.1 1.96 5.1h-3.92z" />
    </svg>
  );
}
