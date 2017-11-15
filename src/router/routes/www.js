/**
 * www.isyxf.com路由
 */

const routes = [
  {
    path: '/www',
    name: 'www',
    component: resolve => require(['../../views/www/index.vue'], resolve),
  },
]

export default routes
