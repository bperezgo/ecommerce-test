export const WEBPACK = {
  config:
    process.env.NODE_ENV === 'production'
      ? require('../../../webpack.config')
      : require('../../../webpack.config'),
};
