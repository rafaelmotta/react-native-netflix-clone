export const env = process.env.NODE_ENV
export const isDev = env === 'development' && true
export const isProd = env !== 'development' && true
