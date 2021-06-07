type Server = {
  PORT: number;
  NODE_ENV: 'development' | 'production';
};

export const SERVER: Server = {
  PORT: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000,
  NODE_ENV:
    process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
