// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import bootstrap from 'bootstrap'

import { router } from './routes'
import store from './store'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.component('app', App)
window.$ = $
window.bootstrap = bootstrap

new Vue({
  router,
  store
}).$mount('#app')
