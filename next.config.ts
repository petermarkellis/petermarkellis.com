import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Allow cross-origin requests for local development
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: ['192.168.1.121'],
  }),
};

export default nextConfig;
