import { Application } from 'express';
import helmet from 'helmet';
import getManifest from '../getManifest';

const webpackProdConfig = (app: Application) => {
  app.use((req, res, next) => {
    const manifest = getManifest();
    (req as any).hashManifest = manifest;
    next();
  });
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
};

export default webpackProdConfig;
