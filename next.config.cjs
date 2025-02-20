import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

module.exports = nextConfig;
