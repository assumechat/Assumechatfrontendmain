import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
 images : {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
    },
  ]
 }
};

export default nextConfig;
