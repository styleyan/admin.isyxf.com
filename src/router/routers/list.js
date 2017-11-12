/**
 * 列表路由
 */

const routes = [
  {
    path: '/list',
    name: 'list',
    component: resolve => require(['../../views/list/index.vue'], resolve),
  },
]

export default routes
