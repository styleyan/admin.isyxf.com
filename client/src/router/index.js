import VueRouter from 'vue-router'
import routes from './routes'
// import Cookies from 'js-cookie'

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   if (!Cookies.get('_userId')) {
  //     next({ path: '/login' })
  //     return
  //   }
  // }
  next()
})

export default router
