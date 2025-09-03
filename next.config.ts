import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Allowed external image domains for Next.js Image optimization
  images: {
    domains: ["a0.muscache.com", "images.unsplash.com"],
  },

  // Whitelist cross-origin origins allowed in dev mode
  // Prevents future dev-server blocking and protects against WebSocket hijacking
  allowedDevOrigins: ["http://172.26.240.1"],

  experimental: {
    // Other experimental flags go here (if needed)
  },
};

export default nextConfig;
