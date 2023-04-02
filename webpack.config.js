const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const { ESBuildMinifyPlugin } = require('esbuild-loader');

const hljs = require('highlight.js');
const path = require('path');

const paths = [...Array(12)].map((_, idx) => {
  return {
    path: `/post/${idx + 1}`,
    changefreq: 'daily',
    priority: 0.5,
  };
});

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'esnext',
          },
        },
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
        test: /\.jpe?g|png|mp4|svg|gif$/i,
        type: 'asset/resource',
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              // See https://marked.js.org/using_advanced#options
              highlight: (code, lang) => {
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';

                return hljs.highlight(code, { language }).value;
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'esnext',
        css: true,
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
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
