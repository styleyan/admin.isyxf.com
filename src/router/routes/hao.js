/**
 * hao.isyxf.com路由
 */

const routes = [
  {
    path: '/hao',
    name: 'hao',
    component: resolve => require(['../../views/hao/index/index.vue'], resolve),
    children: [{
      name: 'link-list',
      path: 'links',
      component: resolve => require(['../../views/hao/links/index.vue'], resolve),
    }],
  },
]

export default routes
