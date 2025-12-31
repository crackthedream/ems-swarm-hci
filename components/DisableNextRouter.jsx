"use client";

import { useEffect } from 'react';

/**
 * Disable Next.js router for static export
 * This ensures all links work as regular <a> tags
 */
export default function DisableNextRouter() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Disable Next.js router completely for static export
    // Remove any Next.js router event listeners
    const disableRouter = () => {
      // Find all links and ensure they work as regular links
      const links = document.querySelectorAll('a[href]');
      links.forEach(link => {
        // Remove any data attributes that Next.js might use
        link.removeAttribute('data-next-link');
        
        // Ensure the link works as a regular <a> tag
        link.onclick = (e) => {
          // Only prevent if it's an external link or has a special handler
          const href = link.getAttribute('href');
          if (href && (href.startsWith('/') || href.startsWith(window.location.origin))) {
            // For internal links, let the browser handle it naturally
            // Don't prevent default
            return true;
          }
        };
      });
    };

    // Run immediately and after a short delay to catch dynamically added links
    disableRouter();
    setTimeout(disableRouter, 100);
    setTimeout(disableRouter, 500);

    // Also listen for new links being added
    const observer = new MutationObserver(() => {
      disableRouter();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

