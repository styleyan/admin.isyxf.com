const routes = [
  {
    path: '/',
    name: 'index',
    meta: { requiresAuth: true },
    component: resolve => require(['../../views/blog/Index.vue'], resolve),
  },
  {
    path: '/blog/article',
    name: 'blogArticle',
    component: resolve => require(['../../views/blog/Index.vue'], resolve),
  },
  {
    path: '/blog/article/new',
    name: 'blogArticleNew',
    component: resolve => require(['../../views/blog/Article.vue'], resolve),
  },
  {
    path: '/blog/article/:id/edit',
    name: 'blogArticleEdit',
    component: resolve => require(['../../views/blog/Article.vue'], resolve),
  },
  {
    path: '/blog/classify',
    name: 'blogClassify',
    component: resolve => require(['../../views/blog/Classify.vue'], resolve),
  },
  {
    path: '/blog/links',
    name: 'blogLinks',
    component: resolve => require(['../../views/blog/Links.vue'], resolve),
  },
  {
    path: '/blog/tags',
    name: 'blogTags',
    component: resolve => require(['../../views/blog/Tags.vue'], resolve),
  },
  {
    path: '/blog/maxim',
    name: 'blogMaxim',
    component: resolve => require(['../../views/blog/Maxim.vue'], resolve),
  },
  {
    path: '/blog/books',
    name: 'blogBooks',
    component: resolve => require(['../../views/blog/Books.vue'], resolve),
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['../../views/login/Index.vue'], resolve),
  },
]

export default routes
