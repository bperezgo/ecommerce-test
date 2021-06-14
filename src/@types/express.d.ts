declare module Express {
  export interface Request {
    hashManifest: any;
    url: string;
  }
}
