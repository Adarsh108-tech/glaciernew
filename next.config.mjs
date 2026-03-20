/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**', // Allows all paths from this host
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;