/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/nextjs',
};
// const NODE_ENV = process.env.NODE_ENV; // eslint-disable-line
// const IS_PROD = NODE_ENV === 'production';

module.exports = nextConfig; // eslint-disable-line

// function getBasePath() {
//   if (IS_PROD) {
//     return '/nextjs';
//   } else return '';
// }

// eslint-disable-next-line
module.exports = {
  // basePath: getBasePath(),
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
