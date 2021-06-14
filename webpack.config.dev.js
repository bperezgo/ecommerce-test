const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {
  HotModuleReplacementPlugin,
  DefinePlugin,
  SourceMapDevToolPlugin,
} = require('webpack');
const { moduleResolve } = require('./shared.config');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=4000&reload=true',
    './src/index.tsx',
  ],
  resolve: {
    ...moduleResolve,
  },
  output: {
    filename: 'assets/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'eval-source-map',
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
      // {
      //   test: /\.(png|gif|jpe?g)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'assets/[name].[ext]',
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpg)$/,
        type: 'asset', // Podemos trabajar las importaciones de archivos directamente
      },
    ],
  },
  plugins: [
    new SourceMapDevToolPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.SERVER_HOST': JSON.stringify(process.env.SERVER_HOST),
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles.css',
    }),
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [['optipng', { optimizationLevel: 5 }]],
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: 'assets/vendors.js',
          enforce: true,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
};

export default config;
