const path = require('path');

const moduleResolve = {
  extensions: ['.ts', '.tsx', '.js'],
  alias: {
    '@components': path.resolve(__dirname, './src/components/'),
    '@containers': path.resolve(__dirname, './src/containers/'),
    '@styles': path.resolve(__dirname, './src/styles/'),
    '@assets': path.resolve(__dirname, './src/assets/'),
  },
};

module.exports = {
  moduleResolve,
};
