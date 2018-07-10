import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'

Vue.use(VueRouter)
Vue.config.productionTip = false

/* this won't work in runtime-only build which is what you get by default with `import Vue from 'vue'` */
// new Vue({
//   el: '#app',
//   router, 
//   template: '<App/>',
//   components:{ App }
// });

new Vue({
  el: '#app',
  render: h => h(App)
});