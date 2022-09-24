const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const path = require('path');

const paths = ['/', '/post/1', '/post/2'];

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      { test: /\.md$/, type: 'asset/source' },
      {
        test: /\.tsx?$/i,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.jpe?g|png|mp4$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new SitemapPlugin({
      base: 'https://lah1203.netlify.app',
      paths,
      options: {
        filename: 'sitemap.xml',
        skipgzip: true,
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './dist'),
    port: 3000,
    hot: true,
    open: true,
    client: {
      logging: 'none',
    },
  },
};
