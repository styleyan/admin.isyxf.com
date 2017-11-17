/**
 * 首页路由
 */
import admin from './admin'

const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['../../views/admin/router-view.vue'], resolve),
    // 把写文章的路径调整到这里也是无奈之举，原因是markdown编辑器高亮插件找不到js文件路径
    children: [{
      path: 'article',
      name: 'article-edit',
      component: resolve => require(['../../views/admin/blog/edit/index.vue'], resolve),
    }],
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['../../views/login/index.vue'], resolve),
  },
]

export default routes.concat(admin)
