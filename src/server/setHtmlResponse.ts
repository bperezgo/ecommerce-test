export const setHtmlResponse = (
  html: string,
  preloadedState: any,
  hashManifest: any
) => {
  const mainBuild = hashManifest
    ? hashManifest['main.js']
    : '/assets/bundle.js';
  const mainStyles = hashManifest
    ? hashManifest['main.css']
    : '/assets/styles.css';
  const vendorsBuild = hashManifest
    ? hashManifest['vendors.js']
    : '/assets/vendors.js';
  const commonsBuild = hashManifest
    ? hashManifest['commons.js']
    : '/assets/commons.js';
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <base href="/">
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="${mainStyles}" type="text/css" />
      <title>e-commerce</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="${commonsBuild}" type="text/javascript" ></script>
      <script src="${mainBuild}" type="text/javascript" ></script>
      <script async src="${vendorsBuild}" type="text/javascript" ></script>
    </body>
  </html>
  `;
};
