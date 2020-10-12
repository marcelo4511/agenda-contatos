import Vue from 'vue'
import App from './App.vue'
import router from './config/routes'
import store from './store/store'
import './config/messages'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js'
import 'font-awesome/css/font-awesome.css'


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
