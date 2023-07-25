import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as firebase from "firebase/app";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

firebase.initializeApp({
  apiKey: "AIzaSyAUZCwi-HauM0KHwSRcrd6hjJHBsYIjBnI",
  authDomain: "restaurante-950f1.firebaseapp.com",
  projectId: "restaurante-950f1",
  storageBucket: "restaurante-950f1.appspot.com",
  messagingSenderId: "454721906550",
  appId: "1:454721906550:web:d737540bcda5874b4dfc57",
  measurementId: "G-NP9L4S8V0N"
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
