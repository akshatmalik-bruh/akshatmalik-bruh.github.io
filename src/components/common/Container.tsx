import React from 'react';

export default function Container({
  children,
  className,
  id,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`animate-fade-in-blur container mx-auto max-w-3xl px-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
