/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    // disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [{ source: "/", destination: "/search", permanent: true }];
  },
  images: {
    domains: ["https://inaturalist-open-data.s3.amazonaws.com"],
  },
});

module.exports = nextConfig;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({});
