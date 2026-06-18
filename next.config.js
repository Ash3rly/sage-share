/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/sage-share' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sage-share' : '',
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
