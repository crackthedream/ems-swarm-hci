/** Next.js configuration - static export enabled for GitHub Pages support */
const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

module.exports = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: false,
  // 只在 GitHub Pages 部署时使用 basePath
  ...(isGitHubPages && {
    basePath: '/ems-swarm-hci',
    assetPrefix: '/ems-swarm-hci',
  }),
};
