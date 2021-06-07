import React from 'react';
import { Request, Response } from 'express';
import { serverRoutes } from '../routes/serverRoutes';
import { setHtmlResponse } from './setHtmlResponse';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';

export const renderApp = (req: Request, res: Response) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      {renderRoutes(serverRoutes)}
    </StaticRouter>
  );
  res.send(setHtmlResponse(html, {}, false));
};
