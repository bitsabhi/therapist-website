/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
