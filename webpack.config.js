const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',

  devtool: 'source-map',

  entry: {
    index: './index.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [new BundleAnalyzerPlugin({ openAnalyzer: false })],

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          name: 'vendors',
        },
      },
    },
  },
};
