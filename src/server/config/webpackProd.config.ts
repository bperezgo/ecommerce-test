import { join } from 'path';
import express, { Application } from 'express';
import helmet from 'helmet';
import getManifest from '../getManifest';

const webpackProdConfig = (app: Application) => {
  app.use(express.static(join(__dirname, '../../../dist')));
  app.use((req, res, next) => {
    const manifest = getManifest();
    (req as any).hashManifest = manifest;
    next();
  });
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          'img-src': ["'self'", 'http2.mlstatic.com'],
        },
      },
    })
  );
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
};

export default webpackProdConfig;
