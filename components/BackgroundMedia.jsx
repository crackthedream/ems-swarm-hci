"use client";

import { useEffect, useState } from 'react';
import { getAssetPath } from '../utils/path';

export default function BackgroundMedia({ img = '/6.png', media = '/media/preview.gif', poster = '/6.png', disabledPaths = ['/print'], className = '' }) {
  const [canPlayMedia, setCanPlayMedia] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const path = window.location.pathname;
    if (disabledPaths.includes(path)) return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    setCanPlayMedia(!prefersReduced && !isMobile);
  }, [disabledPaths]);

  // If media is a gif, render as <img> to ensure animation shows.
  const isGif = /\.gif$/i.test(media);

  return (
    <div aria-hidden className={`fixed inset-0 -z-10 pointer-events-none overflow-hidden ${className}`}>
      {canPlayMedia ? (
        isGif ? (
          <img src={getAssetPath(media)} alt="background" className="w-full h-full object-cover" />
        ) : (
          <video src={getAssetPath(media)} poster={getAssetPath(poster)} autoPlay muted loop playsInline className="w-full h-full object-cover" />
        )
      ) : (
        <img src={getAssetPath(img)} alt="background fallback" className="w-full h-full object-cover" />
      )}
      <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.06))'}} />
    </div>
  );
}
