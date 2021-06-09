const path = require('path');

const moduleResolve = {
  extensions: ['.ts', '.tsx', '.js'],
  alias: {
    '@src': path.resolve(__dirname, './src/'),
    '@components': path.resolve(__dirname, './src/components/'),
    '@containers': path.resolve(__dirname, './src/containers/'),
    '@styles': path.resolve(__dirname, './src/styles/'),
    '@assets': path.resolve(__dirname, './src/assets/'),
    'react-dom': '@hot-loader/react-dom',
  },
};

module.exports = {
  moduleResolve,
};
