import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
        port: "",
        pathname: "/**",
      },
      {
        // TAMBAHKAN BLOK INI
        protocol: "http",
        hostname: "31.97.220.143",
        port: "9090",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;