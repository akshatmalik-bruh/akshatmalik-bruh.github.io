'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface MusicContextType {
  musicState: 'idle' | 'playing' | 'stopping';
  rotationAngle: number;
  toggleMusic: () => void;
}

const MusicContext = createContext<MusicContextType | null>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [musicState, setMusicState] = useState<'idle' | 'playing' | 'stopping'>(
    'idle',
  );
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const fadeFrameRef = useRef<number | null>(null);
  const angleRef = useRef<number>(0);
  const isStoppingRef = useRef<boolean>(false);

  const fadeInAudio = useCallback(
    (targetVolume: number = 0.5, durationMs: number = 2000) => {
      if (!audioRef.current) return;
      if (fadeFrameRef.current) cancelAnimationFrame(fadeFrameRef.current);
      audioRef.current.volume = 0;
      const startTime = performance.now();

      const fadeStep = (now: number) => {
        if (!audioRef.current || isStoppingRef.current) return;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        audioRef.current.volume = targetVolume * progress;

        if (progress < 1) {
          fadeFrameRef.current = requestAnimationFrame(fadeStep);
        }
      };

      fadeFrameRef.current = requestAnimationFrame(fadeStep);
    },
    [],
  );

  const startSpin = useCallback(() => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    let lastTime = performance.now();
    const speedDegPerMs = 360 / 6000;

    const animate = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      angleRef.current += delta * speedDegPerMs;
      setRotationAngle(angleRef.current);

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
  }, []);

  const playWithFadeIn = useCallback(() => {
    if (!audioRef.current) return;
    isStoppingRef.current = false;
    audioRef.current.volume = 0;
    audioRef.current
      .play()
      .then(() => {
        setMusicState('playing');
        startSpin();
        fadeInAudio(0.5, 2000);
      })
      .catch(() => {});
  }, [fadeInAudio, startSpin]);

  const hasTriggeredRef = useRef<boolean>(false);
  const playWithFadeInRef = useRef(playWithFadeIn);
  useEffect(() => {
    playWithFadeInRef.current = playWithFadeIn;
  }, [playWithFadeIn]);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/OneMoreLight.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0;
    }

    const handleAutoPlay = () => {
      if (hasTriggeredRef.current) return;
      hasTriggeredRef.current = true;
      playWithFadeInRef.current();
      window.removeEventListener('click', handleAutoPlay);
      window.removeEventListener('keydown', handleAutoPlay);
      window.removeEventListener('scroll', handleAutoPlay);
      window.removeEventListener('touchstart', handleAutoPlay);
      window.removeEventListener('touchend', handleAutoPlay);
    };

    window.addEventListener('click', handleAutoPlay);
    window.addEventListener('keydown', handleAutoPlay);
    window.addEventListener('scroll', handleAutoPlay);
    window.addEventListener('touchstart', handleAutoPlay, { passive: true });
    window.addEventListener('touchend', handleAutoPlay, { passive: true });

    return () => {
      window.removeEventListener('click', handleAutoPlay);
      window.removeEventListener('keydown', handleAutoPlay);
      window.removeEventListener('scroll', handleAutoPlay);
      window.removeEventListener('touchstart', handleAutoPlay);
      window.removeEventListener('touchend', handleAutoPlay);
    };
  }, []);

  const stopSpinGracefully = useCallback(() => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    if (fadeFrameRef.current) cancelAnimationFrame(fadeFrameRef.current);

    isStoppingRef.current = true;
    setMusicState('stopping');
    let lastTime = performance.now();
    const speedDegPerMs = 360 / 6000;

    const currentAngle = angleRef.current;
    const targetAngle = Math.ceil((currentAngle + 1) / 360) * 360;
    const remainingAngle = targetAngle - currentAngle;

    if (audioRef.current) {
      const initialVolume = audioRef.current.volume || 0.5;
      const totalMsNeeded = remainingAngle / speedDegPerMs;
      const fadeStartTime = performance.now();

      const fadeStep = (now: number) => {
        if (!audioRef.current || !isStoppingRef.current) return;
        const elapsed = now - fadeStartTime;
        const progress = Math.min(elapsed / totalMsNeeded, 1);

        audioRef.current.volume = Math.max(0, initialVolume * (1 - progress));

        if (progress < 1) {
          fadeFrameRef.current = requestAnimationFrame(fadeStep);
        } else {
          audioRef.current.pause();
          audioRef.current.volume = 0;
        }
      };

      fadeFrameRef.current = requestAnimationFrame(fadeStep);
    }

    const finishRevolution = (now: number) => {
      if (!isStoppingRef.current) return;

      const delta = now - lastTime;
      lastTime = now;

      angleRef.current += delta * speedDegPerMs;

      if (angleRef.current >= targetAngle) {
        angleRef.current = targetAngle;
        setRotationAngle(targetAngle);
        setMusicState('idle');
        isStoppingRef.current = false;
      } else {
        setRotationAngle(angleRef.current);
        animFrameRef.current = requestAnimationFrame(finishRevolution);
      }
    };

    animFrameRef.current = requestAnimationFrame(finishRevolution);
  }, []);

  const resumeSpinAndFadeIn = useCallback(() => {
    isStoppingRef.current = false;
    if (fadeFrameRef.current) cancelAnimationFrame(fadeFrameRef.current);

    setMusicState('playing');
    startSpin();

    if (audioRef.current) {
      const currentVol = audioRef.current.volume;
      const targetVol = 0.5;
      const durationMs = 1500;
      const startTime = performance.now();

      audioRef.current.play().catch(() => {});

      const fadeStep = (now: number) => {
        if (!audioRef.current || isStoppingRef.current) return;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        audioRef.current.volume = Math.min(
          targetVol,
          currentVol + (targetVol - currentVol) * progress,
        );

        if (progress < 1) {
          fadeFrameRef.current = requestAnimationFrame(fadeStep);
        }
      };

      fadeFrameRef.current = requestAnimationFrame(fadeStep);
    }
  }, [startSpin]);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;

    if (musicState === 'playing') {
      stopSpinGracefully();
    } else if (musicState === 'stopping') {
      resumeSpinAndFadeIn();
    } else if (musicState === 'idle') {
      playWithFadeIn();
    }
  }, [musicState, playWithFadeIn, resumeSpinAndFadeIn, stopSpinGracefully]);

  return (
    <MusicContext.Provider value={{ musicState, rotationAngle, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}
