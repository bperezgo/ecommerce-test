import { resolve, join } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { HotModuleReplacementPlugin, DefinePlugin } from 'webpack';
import { moduleResolve } from './shared.config';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

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
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
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
        exclude: resolve(process.cwd(), 'node_modules'),
        include: resolve(process.cwd(), 'src'),
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
        // type: 'asset',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
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
    contentBase: join(__dirname, 'dist'),
    hot: true,
  },
};

export default config;
