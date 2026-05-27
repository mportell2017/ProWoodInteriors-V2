/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        // Kitchen service page slug renamed to match the head term + city pages.
        source: '/services/custom-kitchen-cabinetry',
        destination: '/services/kitchen-remodeling',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
