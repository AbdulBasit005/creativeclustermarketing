/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://creativeclustersmarketing.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      // Generative / answer engines — allow crawl for GEO & AEO
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    const highPriority = [
      "/",
      "/pricing",
      "/contact",
      "/case-studies",
      "/locations",
      "/locations/northern-virginia",
      "/locations/woodbridge-va",
      "/locations/fairfax-va",
      "/locations/alexandria-va",
      "/niches",
    ];
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: highPriority.includes(path) ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
