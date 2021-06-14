import fs from 'fs';
import { join } from 'path';

const getManifest = () => {
  try {
    const route = join(__dirname, '../../dist/manifest.json');
    return JSON.parse(fs.readFileSync(route, 'utf8'));
  } catch (error) {
    return {
      'main.css': '/assets/app.css',
      'main.js': '/assets/app.js',
    };
  }
};

export default getManifest;
