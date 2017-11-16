/**
 * 首页路由
 */
import login from './login'
import admin from './admin'

const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['../../views/index/Index.vue'], resolve),
  },
]

export default routes.concat(login, admin)
