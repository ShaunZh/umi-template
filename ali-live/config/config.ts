/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-15 10:07:49
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-15 10:07:49
 */
import { defineConfig } from 'umi';
import { routes } from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  proxy: {
    '/mgr': {
      target: 'http://172.18.53.149:8002',
      changeOrigin: true,
      pathRewrite: { '^/mgr': '/mgr' },
    },
  },
});
