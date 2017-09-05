import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import * as firebase from 'firebase'
import { store } from './store'
import VueResource from 'vue-resource'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify);
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.component('app-alert', AlertCmp);
/* eslint-disable no-new */
new Vue({
  el: '#app',
    router,
    store,
    render: h => h(App),
    created() {
      firebase.initializeApp({
          apiKey: "AIzaSyDEt2OvwLQyXvSQq2yRFZ3FG7T_iv3NwGw",
          authDomain: "soshealth-dev.firebaseapp.com",
          databaseURL: "https://soshealth-dev.firebaseio.com",
          projectId: "soshealth-dev",
          storageBucket: ""
      });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.$store.dispatch('autoSignIn', user)
            }
        });
    }
});