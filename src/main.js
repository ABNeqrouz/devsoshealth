import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})