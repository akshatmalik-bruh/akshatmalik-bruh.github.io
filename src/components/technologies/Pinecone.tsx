import React from 'react';

export default function Pinecone({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className || 'size-4'}
    >
      <path d="M12 0L2 6v12l10 6 10-6V6L12 0zm0 2.5L19.5 7V17L12 21.5 4.5 17V7L12 2.5z" />
    </svg>
  );
}
