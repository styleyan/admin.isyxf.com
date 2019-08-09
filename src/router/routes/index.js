const routes = [
  {
    path: '/',
    name: 'index',
    meta: { requiresAuth: true },
    component: resolve => require(['../../views/home/Index.vue'], resolve),
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['../../views/login/Index.vue'], resolve),
  },
]

export default routes
