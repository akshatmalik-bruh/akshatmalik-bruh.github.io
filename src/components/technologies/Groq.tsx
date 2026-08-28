import React from 'react';

export default function Groq({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className || 'size-4'}
    >
      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 3.5l7.5 4.33v8.34L12 20.5l-7.5-4.33V7.83L12 3.5z" />
    </svg>
  );
}
