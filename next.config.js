/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dashboard',
  images: { unoptimized: true },
  env: {
    API_BASE_URL_DEVELOPMENT: process.env.API_BASE_URL_DEVELOPMENT,
    API_BASE_URL_PRODUCTION: process.env.API_BASE_URL_PRODUCTION,
    ENVIROMENT: process.env.ENVIROMENT
  }
}

module.exports = nextConfig
