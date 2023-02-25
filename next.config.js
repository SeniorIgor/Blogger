const nextConfig = {
  reactStrictMode: true,
  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts)x?$/] },

      use: ['@svgr/webpack'],
    });

    config.plugins.push(
      new webpack.ProvidePlugin({
        cn: 'classnames',
      }),
    );

    return config;
  },
  images: {
    domains: ['picsum.photos', 'social-network.samuraijs.com'],
  },
};

module.exports = nextConfig;
