export const setHtmlResponse = (
  html: string,
  preloadedState: any,
  hasManifest: any
) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="assets/styles.css" />
      <title>e-commerce</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="bundle.js" type="text/javascript" ></script>
    </body>
  </html>
  `;
};
