/**
 * 首页路由
 */
import login from './login'
import admin from './admin'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: 'admin/hao/edit',
    // component: resolve => require(['../../views/index/index.vue'], resolve),
  },
]

export default routes.concat(login, admin)
