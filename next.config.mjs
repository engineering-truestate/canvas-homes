/** @type {import('next').NextConfig} */
const nextConfig = {
  // Firebase deployment requirements
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // Your existing config
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Optional: uncomment if deploying to a subdirectory
  // basePath: '/your-app-name',
  
  webpack(config) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [{
        loader: '@dhiwise/component-tagger/nextLoader',
      }],
    });
    return config;
  },
};

export default nextConfig;