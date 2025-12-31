/**
 * Get the base path for the current environment
 * Detects if we're running on GitHub Pages
 */
export function getBasePath() {
  if (typeof window === 'undefined') {
    // Server-side: check environment variable
    return process.env.GITHUB_PAGES === 'true' ? '/ems-swarm-hci' : '';
  }
  // Client-side: check if we're on GitHub Pages by looking at the pathname
  const pathname = window.location.pathname;
  if (pathname.startsWith('/ems-swarm-hci')) {
    return '/ems-swarm-hci';
  }
  return '';
}

/**
 * Get the correct asset path for both local development and GitHub Pages
 * In GitHub Pages, we need to prepend the basePath for public folder assets
 */
export function getAssetPath(path) {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  
  // Get base path
  const basePath = getBasePath();
  
  // If we have a basePath and the path is not already prefixed, add it
  if (basePath && !cleanPath.startsWith(basePath)) {
    return basePath + cleanPath;
  }
  
  return cleanPath;
}

/**
 * Get the correct link path for navigation
 * Handles basePath for GitHub Pages
 */
export function getLinkPath(path) {
  // Remove leading slash if present for consistency
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  
  // Get base path
  const basePath = getBasePath();
  
  // If we have a basePath and the path is not already prefixed, add it
  if (basePath && !cleanPath.startsWith(basePath)) {
    return basePath + cleanPath;
  }
  
  return cleanPath;
}

