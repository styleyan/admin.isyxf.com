/**
 * admin路由
 */

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: resolve => require(['../../views/admin/router-view.vue'], resolve),
    children: [{
      path: 'hao',
      name: 'hao',
      component: resolve => require(['../../views/admin/hao/router-view.vue'], resolve),
      // hao.isyxf.com 网站导航
      children: [{
        path: 'edit',
        name: 'hao-edit',
        component: resolve => require(['../../views/admin/hao/edit/index.vue'], resolve),
      }, {
        path: 'links',
        name: 'hao-links',
        component: resolve => require(['../../views/admin/hao/links/index.vue'], resolve),
      }],
    }, {
      path: 'article',
      name: 'article',
      component: resolve => require(['../../views/admin/blog/router-view.vue'], resolve),
      // 文章列表
      children: [{
        path: 'list',
        name: 'article-list',
        component: resolve => require(['../../views/admin/blog/list/index.vue'], resolve),
      }],
    }],
  },
]

export default routes
