import { Configuration } from 'webpack';
import { SERVER } from '../../constants/environment.contant';

const config =
  SERVER.NODE_ENV === 'production'
    ? require('../../../webpack.config')
    : require('../../../webpack.config.dev');

const webpackConfig = { ...config.default } as Configuration;
webpackConfig.mode = SERVER.NODE_ENV;

export default webpackConfig;
