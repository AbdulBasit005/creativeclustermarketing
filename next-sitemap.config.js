/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://creativeclustersmarketing.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
