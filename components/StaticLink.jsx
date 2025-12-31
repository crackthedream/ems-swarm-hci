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
    
    // Check if we're on GitHub Pages (both at build time and runtime)
    const isGitHubPages = 
      (typeof window !== 'undefined' && window.location.pathname.startsWith('/ems-swarm-hci')) ||
      (typeof window === 'undefined' && process.env.GITHUB_PAGES === 'true') ||
      (typeof window !== 'undefined' && window.location.hostname.includes('github.io'));
    
    if (isGitHubPages) {
      return '/ems-swarm-hci' + (href.startsWith('/') ? href : '/' + href);
    }
    
    return href;
  };

  const fullHref = getFullHref();

  return (
    <a 
      href={fullHref} 
      className={className}
      onClick={(e) => {
        // Ensure the link works as a regular <a> tag
        // Don't prevent default - let browser handle navigation
        if (props.onClick) {
          props.onClick(e);
        }
      }}
      {...props}
    >
      {children}
    </a>
  );
}

