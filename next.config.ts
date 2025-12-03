import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/everything-store',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
