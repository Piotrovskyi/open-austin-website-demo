const fs = require("fs");
const blogPostsFolder = './content/blog';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  // basePath:'/open-austin-website-demo',
  webpack: (configuration, { isServer }) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });

    if (!isServer) {
      configuration.resolve.fallback = {
        fs: false,
      };
    }

    return configuration;
  },
};

module.exports = nextConfig;
