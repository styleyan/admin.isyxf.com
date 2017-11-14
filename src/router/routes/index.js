/**
 * 首页路由
 */
import list from './list'
import login from './login'

const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['../../views/index/Index.vue'], resolve),
  },
]

export default routes.concat(list, login)
