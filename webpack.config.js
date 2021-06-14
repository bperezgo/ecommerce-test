const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { moduleResolve } = require('./shared.config');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const dotenv = require('dotenv');

dotenv.config();

const config = {
  entry: ['./src/index.tsx'],
  resolve: {
    ...moduleResolve,
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.tsx?$/,
        use: [{ loader: 'ts-loader', options: { happyPackMode: true } }],
        exclude: path.resolve(process.cwd(), 'node_modules'),
        include: path.resolve(process.cwd(), 'src'),
      },
      {
        test: /\.(s?)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name][hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': 'production',
      'process.env.SERVER_HOST': JSON.stringify(process.env.SERVER_HOST),
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles.css',
    }),
    new CleanWebpackPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [['optipng', { optimizationLevel: 5 }]],
      },
    }),
    new CompressionPlugin({
      test: /\.js$|\.css$/,
      filename: '[path].gz',
    }),
    new WebpackManifestPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
  },
};

module.exports = config;
