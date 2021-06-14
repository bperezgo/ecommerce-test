import './config/babelInitialization';
import './config/envConfig';
import webpackConfig from './config/webpack.config';
import express from 'express';
import { itemsRouter } from './routes/items.route';
import { renderApp } from './renderApp';
import { SERVER } from '../constants';

const app = express();
webpackConfig(app);

app.use(express.json());
app.use('/api', itemsRouter);

app.get('*', renderApp);

app.listen(SERVER.PORT, () => {
  console.log(`server running on Port ${SERVER.PORT}`);
});
