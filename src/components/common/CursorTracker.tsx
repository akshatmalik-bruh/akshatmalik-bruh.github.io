'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CursorTracker() {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isPointerFine, setIsPointerFine] = useState<boolean>(true);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(pointer: fine)');
      setIsPointerFine(mediaQuery.matches);

      const handleMediaChange = (e: MediaQueryListEvent) => {
        setIsPointerFine(e.matches);
      };

      mediaQuery.addEventListener('change', handleMediaChange);
      return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Reset inactivity timer: fade out faster after 400ms of no mouse movement
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }

      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 400);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  const offsetX = 16;
  const offsetY = 16;

  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;

  const posX = coords.x + offsetX + 110 > viewportWidth ? coords.x - 120 : coords.x + offsetX;
  const posY = coords.y + offsetY + 30 > viewportHeight ? coords.y - 35 : coords.y + offsetY;

  return (
    <div
      style={{
        transform: `translate3d(${posX}px, ${posY}px, 0)`,
      }}
      className={`fixed top-0 left-0 z-50 pointer-events-none transition-opacity duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div className="rounded-md border border-black/20 bg-white/85 px-2.5 py-1 font-mono text-[11px] font-medium tracking-wider text-black/90 shadow-xs backdrop-blur-md dark:border-white/20 dark:bg-neutral-900/85 dark:text-white/90">
        <span>
          X: {String(coords.x).padStart(4, '0')} · Y: {String(coords.y).padStart(4, '0')}
        </span>
      </div>
    </div>
  );
}
