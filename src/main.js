// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/Index'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'



import store from './vuex'
import {sync} from 'vuex-router-sync'

import VueSweetalert2 from 'vue-sweetalert2';


import Http from './servicos/dados/DataBaseService'
import ConfigRota from './router/ConfigRotas'

Vue.use(Http)
Vue.use(VueSweetalert2)
Vue.use(VueRouter)
Vue.use(Vuetify, { theme: {
    primary: '#009688',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#0d7faf',
    warning: '#FFC107'
}})

Vue.config.productionTip = false


// configure router
const router = new VueRouter({
  routes, // short for index: index
  linkActiveClass: 'active'
})

//Mantem a Sincronização  com as routas e o Vuex
sync(store, router)

router.beforeEach((to, from, next)=>{
  ConfigRota.config(to, from, next)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
