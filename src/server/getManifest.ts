import fs from 'fs';
import { join } from 'path';

const getManifest = () => {
  try {
    return JSON.parse(
      fs.readFileSync(join('../../', '/public/manifest.json'), 'utf8')
    );
  } catch (error) {
    return {
      'main.css': '/assets/app.css',
      'main.js': '/assets/app.js',
    };
  }
};

export default getManifest;
