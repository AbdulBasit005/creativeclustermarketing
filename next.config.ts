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
 *   Or for standalone: npm run start:standalone
 *
 * Cache note: Hostinger’s CDN can keep HTML forever (s-maxage=1y). That
 * pairs badly with hashed `/_next/static` chunks after a redeploy → 404s.
 * Force HTML to revalidate; keep immutable cache only on hashed assets.
 */
const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Hashed build assets — safe to cache forever
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        // HTML / RSC / pages — never pin for a year on Hostinger CDN
        // (stale HTML + new chunk hashes = production 404s)
        source: "/:path((?!_next/static|_next/image|images/|videos/).*)*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
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
