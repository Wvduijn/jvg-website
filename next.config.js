const path = require('path');

/** @type {import('next').NextConfig} */
const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination: process.env.NODE_ENV === 'development' ? "http://localhost:3333/studion/:path*" : '/studio/index.html',
};

module.exports = {
  reactStrictMode: true,
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: ['cdn.sanity.io']
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@services': path.resolve(__dirname, 'services'),
      '@lib': path.resolve(__dirname, 'lib'),
    };
    return config;
  },
}
