import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "eu-west-2.graphassets.com" },
    ],
  },
};

export default nextConfig;
