export const setHtmlResponse = (
  html: string,
  preloadedState: any,
  hashManifest: any
) => {
  const mainBuild = hashManifest ? hashManifest['main.js'] : '/bundle.js';
  const mainStyles = hashManifest
    ? hashManifest['main.css']
    : '/assets/styles.css';
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="${mainStyles}" type="text/css" />
      <title>e-commerce</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="${mainBuild}" type="text/javascript" ></script>
    </body>
  </html>
  `;
};
