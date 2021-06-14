import { SERVER } from '../../constants/environment.contant';
console.log('webpackConfig');
const webpackConfig =
  SERVER.NODE_ENV === 'production'
    ? require('./webpack.config')
    : require('./webpackDev.config.ts');
console.log(webpackConfig);
export default webpackConfig.default;
