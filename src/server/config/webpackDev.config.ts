import { Express } from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { Configuration } from 'webpack';
import { SERVER } from '../../constants/environment.contant';

const webpackDevConfig = (app: Express) => {
  const config = require('../../../webpack.config.dev');

  const webpackConfig = { ...config.default } as Configuration;
  webpackConfig.mode = SERVER.NODE_ENV;

  const compiler = webpack(webpackConfig);

  const serverConfig: webpackDevMiddleware.Options = {
    publicPath: webpackConfig.output?.publicPath as string,
    serverSideRender: true,
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(
    webpackHotMiddleware(compiler, {
      log: false,
      path: '/__webpack_hmr',
      heartbeat: 2000,
    })
  );
};

export default webpackDevConfig;
