const path = require('path');

/** @type {import('next').NextConfig} */
const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination: process.env.NODE_ENV === 'development' ? "http://localhost:3333/studion/:path*" : '/studio/index.html',
};

module.exports = {
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  reactStrictMode: true,
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: ['cdn.sanity.io', 'cdn.tailgrids.com', 'dummyimage.com']
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@services': path.resolve(__dirname, 'services'),
      '@lib': path.resolve(__dirname, 'lib'),
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}
