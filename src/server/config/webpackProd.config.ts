import { Application } from 'express';
import helmet from 'helmet';
import getManifest from '../getManifest';

const webpackProdConfig = (app: Application) => {
  app.use((req: Express.Request, res, next) => {
    req.hashManifest = getManifest();
    next();
  });
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
};

export default webpackProdConfig;
