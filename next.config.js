/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 5000000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mainfacts.com",
        port: "",
        pathname: "/media/images/coats_of_arms/**",
      },
    ],
  },
};

module.exports = nextConfig;
