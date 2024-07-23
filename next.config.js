const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: []
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  },
  compiler: {
    styledComponents: true
  },
  experimental: {
    concurrentFeatures: true
  }
}

module.exports = nextConfig
