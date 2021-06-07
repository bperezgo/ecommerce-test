import './config/babelInitialization';
import './config/envConfig';
import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { renderApp } from './renderApp';
import { SERVER } from './constants';

const app = express();
(webpackConfig as webpack.Configuration).mode = SERVER.NODE_ENV;
const compiler = webpack(webpackConfig);

const serverConfig: webpackDevMiddleware.Options = {
  serverSideRender: true,
};
app.use(webpackDevMiddleware(compiler, serverConfig));
app.use(webpackHotMiddleware(compiler));

app.get('*', renderApp);

app.listen(SERVER.PORT, () => {
  console.log(`server running on Port ${SERVER.PORT}`);
});
