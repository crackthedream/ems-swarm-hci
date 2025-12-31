"use client";

import { usePathname } from 'next/navigation';

/**
 * StaticLink - A link component that works correctly with static export
 * Uses regular <a> tags instead of Next.js Link to avoid client-side routing issues
 */
export default function StaticLink({ href, children, className = '', ...props }) {
  const pathname = usePathname();
  
  // Get the full URL with basePath
  const getFullHref = () => {
    // If href already includes basePath, use it as-is
    if (href.startsWith('/ems-swarm-hci')) {
      return href;
    }
    
    // Check if we're on GitHub Pages
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      if (currentPath.startsWith('/ems-swarm-hci')) {
        return '/ems-swarm-hci' + (href.startsWith('/') ? href : '/' + href);
      }
    }
    
    return href;
  };

  return (
    <a 
      href={getFullHref()} 
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

