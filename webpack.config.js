import { resolve, join } from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
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
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  devServer: {
    historyApiFallback: true,
    contentBase: join(__dirname, 'dist'),
  },
};

export default config;
