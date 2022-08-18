import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import 'lib-flexible'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
