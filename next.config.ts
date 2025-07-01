import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
    typedRoutes: false,
  },
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
