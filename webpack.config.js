import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
  publicPath: './',
  path: resolve(__dirname, 'build'),
};
