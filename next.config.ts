import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Avoids loading full barrel index for lucide-react and framer-motion
    // Saves 200-800ms cold start and 40% faster HMR
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
