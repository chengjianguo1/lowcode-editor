import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/pages/layouts/index',
      routes: [{ path: '/', component: '@/pages/index' }],
    },
  ],
  fastRefresh: {},
});
