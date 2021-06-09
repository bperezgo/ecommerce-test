type Server = {
  PORT: number;
  NODE_ENV: 'development' | 'production';
};

export const SERVER: Server = {
  PORT: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000,
  NODE_ENV:
    process.env.NODE_ENV === 'production' ? 'production' : 'development',
};

export const ML_API_URL = process.env.ML_API_URL || '';

export const AUTHOR = {
  name: process.env.AUTHOR_NAME || '',
  lastname: process.env.AUTHOR_LASTNAME || '',
};
