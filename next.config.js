/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // basePath: '/nextjs',
};

module.exports = nextConfig; // eslint-disable-line

// eslint-disable-next-line
module.exports = {
  basePath: '/nextjs',
  assetPrefix: '/nextjs/',
  images: {
    domains: ['courses-top.ru', 'courses-top.ruhttp'],
  },
  // eslint-disable-next-line
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          // plugins: [{removeViewBox: false}]
          plugins: [
            {
              name: 'preset-default',
              params: {
                removeViewBox: false,
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};
