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
      name: 'admin-hao',
      component: resolve => require(['../../views/admin/hao/router-view.vue'], resolve),
      // hao.isyxf.com 网站导航
      children: [{
        path: 'edit',
        name: 'admin-hao-edit',
        component: resolve => require(['../../views/admin/hao/edit/index.vue'], resolve),
      }, {
        path: 'links',
        name: 'admin-hao-links',
        component: resolve => require(['../../views/admin/hao/links/index.vue'], resolve),
      }],
    }, {
      path: 'blog',
      name: 'admin-blog',
      component: resolve => require(['../../views/admin/blog/router-view.vue'], resolve),
      // 发布文章
      children: [{
        path: 'list',
        name: 'admin-blog-list',
        component: resolve => require(['../../views/admin/blog/list/index.vue'], resolve),
      }],
    }],
  },
]

export default routes
