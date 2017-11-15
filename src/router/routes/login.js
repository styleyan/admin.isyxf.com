/**
 * 登录路由
 */

const routes = [
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['../../views/login/index.vue'], resolve),
  },
]

export default routes
