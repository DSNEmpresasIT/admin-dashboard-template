/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    CLIENT: process.env.CLIENT
  }
}

module.exports = nextConfig
