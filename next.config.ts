import type { NextConfig } from "next";

/**
 * Hostinger Node.js Web Apps (Business / Cloud) — SSR mode.
 * Standalone output keeps the deploy leaner on shared Node hosts.
 *
 * hPanel settings:
 * - Framework preset: next
 * - Node.js: 20 (or 22)
 * - Build command: npm run build
 * - Output directory: .next
 * - Entry file: leave empty (Hostinger runs `npm start` → next start)
 *   Or for standalone: node .next/standalone/server.js
 */
const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/services/digital-marketing",
        destination: "/services/marketing",
        permanent: true,
      },
      {
        source: "/services/web-online-presence",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/services/app-software-development",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
