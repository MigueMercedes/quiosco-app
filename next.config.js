/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        // destination: 'https://api.example.com/:path*',
      },
    ]
  }
}

module.exports = nextConfig
