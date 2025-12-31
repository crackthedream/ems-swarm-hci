"use client";

import { useEffect, useRef } from 'react';
import { getAssetPath } from '../utils/path';

export default function HeroParallax({ src, alt, className = '', imgClass = '', strength = 12, disabledPaths = [], loading = 'auto', videoSrc = null, poster = null }) {
  const container = useRef();
  const inner = useRef();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const path = window.location.pathname;
    if (disabledPaths.includes(path)) return; // render static when disabled
    const isFine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    const isWide = window.innerWidth >= 768;
    if (!isFine || !isWide) return;

    const handleMove = (e) => {
      const rect = container.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width; // -0.5..0.5
      const dy = (e.clientY - cy) / rect.height;
      const max = strength; // px, configurable
      const tx = dx * max;
      const ty = dy * max;
      if (inner.current) {
        inner.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }
    };

    const handleLeave = () => {
      if (inner.current) inner.current.style.transform = '';
    };

    const el = container.current;
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength, disabledPaths]);

  // Respect prefers-reduced-motion and mobile for videos
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div ref={container} className={"relative overflow-hidden " + className} style={{zIndex: 0}}>
      <div ref={inner} className="will-change-transform transition-transform duration-300" style={{zIndex: 0}}>
        {videoSrc && !prefersReduced && !isMobile ? (
          // If the provided media is a GIF, render as <img> because <video> doesn't play GIF files.
          /\.(gif)$/i.test(videoSrc) ? (
            <img src={getAssetPath(videoSrc)} alt={alt} className={`${imgClass} w-full h-full object-cover`} loading={loading} decoding="async" style={{objectPosition: 'center', display: 'block'}} />
          ) : (
            <video src={getAssetPath(videoSrc)} poster={getAssetPath(poster || src)} autoPlay muted loop playsInline className={`${imgClass} w-full h-full object-cover`} />
          )
        ) : (
          <img src={getAssetPath(src)} alt={alt} className={`${imgClass} w-full h-full object-cover`} loading={loading} decoding="async" style={{objectPosition: 'center', display: 'block'}} />
        )}
      </div>
    </div>
  );
}
