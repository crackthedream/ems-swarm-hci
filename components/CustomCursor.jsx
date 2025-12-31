"use client";

import { useEffect, useRef } from 'react';

export default function CustomCursor({ disabledPaths = ['/print'] }) {
  // If page is in disabledPaths, don't render cursor
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (disabledPaths.includes(path)) return null;
  }

  const dot = useRef();
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Only enable on fine pointer devices and sufficient width
    const isFine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    const isWide = window.innerWidth >= 768;
    if (!isFine || !isWide) return;

    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const tick = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.18);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.18);
      if (dot.current) {
        // center the dot by offsetting half of its size (10px)
        dot.current.style.transform = `translate3d(${pos.current.x - 5}px, ${pos.current.y - 5}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', handleMove);
    // create initial position
    pos.current.x = mouse.current.x = window.innerWidth / 2;
    pos.current.y = mouse.current.y = window.innerHeight / 2;
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  // Theme-aware color via CSS variables
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      <div ref={dot} className="custom-cursor" />
    </div>
  );
}
