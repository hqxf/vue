import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import App from './App.vue'
import "./assets/css/animate.css"
Vue.use(VueRouter);
const router = new VueRouter(routes);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
