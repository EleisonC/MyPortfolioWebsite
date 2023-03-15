/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig
