'use client';

import React, { useEffect, useRef } from 'react';

import Container from './Container';

export const Quote = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay handle for browser policies
      });
    }
  }, []);

  return (
    <Container className="py-8 sm:py-10">
      <div className="relative w-full overflow-hidden rounded-none border-0">
        <video
          ref={videoRef}
          src="/assets/serene-cherry-blossom-tree.3840x2160.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          onPause={(e) => {
            e.currentTarget.play().catch(() => {});
          }}
          className="pointer-events-none h-32 sm:h-36 md:h-40 w-full rounded-none border-0 object-cover select-none"
        />
      </div>
    </Container>
  );
};
