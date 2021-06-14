import { SERVER } from '../../constants/environment.contant';

const webpackConfig =
  SERVER.NODE_ENV === 'production'
    ? require('./webpackProd.config')
    : require('./webpackDev.config.ts');
    
export default webpackConfig.default;
