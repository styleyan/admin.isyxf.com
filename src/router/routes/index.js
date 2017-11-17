/**
 * 首页路由
 */
import login from './login'
import admin from './admin'

const routes = [
  {
    path: '/',
    name: 'index',
    // redirect: 'admin/hao/edit',
    component: resolve => require(['../../views/admin/router-view.vue'], resolve),
    // 把写文章的路径调整到这里也是无奈之举，markdown编辑器，会找不到js文件路径
    children: [{
      path: 'article',
      name: 'article-edit',
      component: resolve => require(['../../views/admin/blog/edit/index.vue'], resolve),
    }],
  },
]

export default routes.concat(login, admin)
