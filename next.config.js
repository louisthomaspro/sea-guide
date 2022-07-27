/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    // disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["inaturalist-open-data.s3.amazonaws.com"],
  },
});

module.exports = nextConfig;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({});
