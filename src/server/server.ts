import './config/babelInitialization';
import './config/envConfig';
import webpackConfig from './config/webpack.config';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { renderApp } from './renderApp';
import { SERVER } from './constants';

const app = express();
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

app.get('*', renderApp);

app.listen(SERVER.PORT, () => {
  console.log(`server running on Port ${SERVER.PORT}`);
});
