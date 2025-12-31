"use client";

import { useEffect } from 'react';

/**
 * Disable Next.js router for static export
 * This ensures all links work as regular <a> tags
 */
export default function DisableNextRouter() {
  useEffect(() => {
    // Disable Next.js router interception for all links
    if (typeof window !== 'undefined') {
      // Override any click handlers that might prevent default
      const handleClick = (e) => {
        const target = e.target.closest('a[href]');
        if (target && target.href) {
          // Only allow default for internal links
          const href = target.getAttribute('href');
          if (href && (href.startsWith('/') || href.startsWith(window.location.origin))) {
            // Let the browser handle the navigation naturally
            // Don't prevent default
            return;
          }
        }
      };

      // Add event listener at capture phase to run before Next.js handlers
      document.addEventListener('click', handleClick, true);

      return () => {
        document.removeEventListener('click', handleClick, true);
      };
    }
  }, []);

  return null;
}

