import Vue from 'vue'
import './assets/style/index.styl'
import './plugins'
import store from './store'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
