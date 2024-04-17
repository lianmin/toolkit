import { MidwayConfig } from '@midwayjs/core';

export default {
  keys: '1713281388941_1907',
  koa: {
    port: 7001,
  },
  staticFile: {
    dirs: {
      default: {
        prefix: '/',
        dir: 'public',
        alias: {
          '/': '/index.html',
        },
      },
    },
    preload: true,
    dynamic: true,
  },
} as MidwayConfig;
